import { ProgramType } from '../../typings/programAST'
import { POINTER_BASE_TYPE } from './typeUtils'
import { binaryToInt, intToBinary, pop, printBinariesWithTypes, push, RuntimeError } from './utils'

const WORD_SIZE = 64

export class RTS {
  private Memory: DataView
  private next: number
  private TypeAdditionalInfo: Record<number, ProgramType>
  private Start: number

  constructor(size: number) {
    const dummy = new ArrayBuffer(size)
    this.Memory = new DataView(dummy)
    this.TypeAdditionalInfo = {}
    this.next = 0
    this.Start = -1
  }

  push(binary: number, type?: ProgramType) {
    this.Memory.setFloat64(this.next * WORD_SIZE, binary)
    if (type) this.TypeAdditionalInfo[this.next] = type
    this.next++
  }

  pop(): number {
    this.next--
    const result = this.Memory.getFloat64(this.next * WORD_SIZE)
    delete this.TypeAdditionalInfo[this.next]
    return result
  }

  print() {
    const dummy: Array<number> = []
    for (let i = 0; i < this.getLength(); i++) {
      dummy.push(this.Memory.getFloat64(i * WORD_SIZE))
    }
    printBinariesWithTypes(dummy, this.TypeAdditionalInfo, ': ')
  }

  getAtIndex(index: number): number {
    if (index >= this.next) throw new RuntimeError('Invalid memory access')
    return this.Memory.getFloat64(index * WORD_SIZE)
  }

  setAtIndex(index: number, binary: number, type?: ProgramType) {
    if (index >= this.next) throw new RuntimeError('Invalid memory access')
    this.Memory.setFloat64(index * WORD_SIZE, binary)
    if (type) this.TypeAdditionalInfo[index] = type
  }

  getLength(): number {
    return this.next
  }

  shrinkToIndex(index: number) {
    const initialSize = this.getLength()
    this.next = index + 1
    for (let i = index; i < initialSize; i++) {
      if (i in this.TypeAdditionalInfo) delete this.TypeAdditionalInfo[i]
    }
  }

  allocateSizeOn(size: number, type?: ProgramType) {
    for (let i = 0; i < size; i++) {
      this.push(0, type)
    }
  }

  getStart(): number {
    return this.Start
  }

  saveAndUpdateStartOntoStack() {
    const Start = this.Start
    this.Start = this.getLength()
    this.push(intToBinary(Start), POINTER_BASE_TYPE)
  }

  popAndRestoreStartOntoStack() {
    const prevStart = this.pop()
    this.Start = binaryToInt(prevStart)
  }

  printState() {
    console.log('Start: ' + this.Start)
    this.print()
  }
}
