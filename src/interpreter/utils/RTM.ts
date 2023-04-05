import {
  RTMInvalidMemoryAccessBaseError,
  RTMMemoryNotAllocatedBaseError,
} from '../../errors/baseErrors'
import { ProgramType } from '../typings'
import { POINTER_BASE_TYPE } from './typeUtils'
import { binaryToInt, intToBinary, printBinariesWithTypes } from './utils'

const WORD_SIZE = 8

interface MemoryEntry {
  Address: number
  Size: number
}

export class RTM {
  private Memory: DataView
  private NextStack: number
  private StartStack: number
  private TypeAdditionalInfoStack: Record<number, ProgramType>

  private FreeList: Array<MemoryEntry>
  private AllocatedMemory: Map<number, number>
  private NextHeap: number

  constructor(size: number) {
    const dummy = new ArrayBuffer(size)
    this.Memory = new DataView(dummy)
    this.TypeAdditionalInfoStack = {}
    this.NextStack = 0
    this.StartStack = -1

    this.AllocatedMemory = new Map<number, number>()
    this.FreeList = []
    this.NextHeap = size / 8
  }

  allocateHeap(size: number): number {
    let dummy: MemoryEntry | undefined = undefined
    for (let i = 0; i < this.FreeList.length; i++) {
      if (this.FreeList[i].Size >= size) {
        dummy = this.FreeList[i]
        this.FreeList.splice(i, 1)
      }
    }
    if (dummy) {
      this.AllocatedMemory.set(dummy.Address, size)
      dummy.Address += size
      dummy.Size -= size
      if (dummy.Size > 0) {
        this.FreeList.push(dummy)
      }
      return dummy.Address - size
    }
    this.NextHeap -= size
    this.AllocatedMemory.set(this.NextHeap, size)
    return this.NextHeap
  }

  freeHeapMemory(address: number) {
    if (!this.AllocatedMemory.has(address)) {
      throw new RTMMemoryNotAllocatedBaseError(address)
    }
    this.FreeList.push({ Address: address, Size: this.AllocatedMemory.get(address)! })
    this.AllocatedMemory.delete(address)
  }

  setHeapMemoryAtIndex(address: number, binary: number, type?: ProgramType) {
    if (!this.isAtHeap(address)) throw new RTMInvalidMemoryAccessBaseError(address)
    this.Memory.setFloat64(address * WORD_SIZE, binary)
  }

  getHeapMemoryAtIndex(address: number): number {
    if (!this.isAtHeap(address)) throw new RTMInvalidMemoryAccessBaseError(address)
    return this.Memory.getFloat64(address * WORD_SIZE)
  }

  isAtHeap(index: number): Boolean {
    for (const key of this.AllocatedMemory.keys()) {
      if (key <= index && key + this.AllocatedMemory.get(key)! > index) return true
    }
    return false
  }

  printHeap() {
    console.log('--------------- HEAP --------------- ')
    console.log('Next heap: ', this.NextHeap)
    console.log('Allocated Memory: ')
    for (const key of this.AllocatedMemory.keys()) {
      console.log('    Address: ', key, ' size: ', this.AllocatedMemory.get(key)!)
    }
    console.log('Free list: ')
    this.FreeList.forEach(x => {
      console.log('    Address: ', x.Address, ' size: ', x.Size)
    })
  }

  pushRTS(binary: number, type?: ProgramType) {
    this.Memory.setFloat64(this.NextStack * WORD_SIZE, binary)
    if (type) this.TypeAdditionalInfoStack[this.NextStack] = type
    this.NextStack++
  }

  popRTS(): number {
    this.NextStack--
    const result = this.Memory.getFloat64(this.NextStack * WORD_SIZE)
    delete this.TypeAdditionalInfoStack[this.NextStack]
    return result
  }

  printRTS() {
    const dummy: Array<number> = []
    for (let i = 0; i < this.getLengthRTS(); i++) {
      dummy.push(this.Memory.getFloat64(i * WORD_SIZE))
    }
    printBinariesWithTypes(dummy, this.TypeAdditionalInfoStack, 'RTS: ')
  }

  getRTSAtIndex(index: number): number {
    if (!this.isAtRTS(index)) throw new RTMInvalidMemoryAccessBaseError(index)
    return this.Memory.getFloat64(index * WORD_SIZE)
  }

  setRTSAtIndex(index: number, binary: number, type?: ProgramType) {
    if (!this.isAtRTS(index)) throw new RTMInvalidMemoryAccessBaseError(index)
    this.Memory.setFloat64(index * WORD_SIZE, binary)
    if (type) this.TypeAdditionalInfoStack[index] = type
  }

  getLengthRTS(): number {
    return this.NextStack
  }

  shrinkToIndexRTS(index: number) {
    const initialSize = this.getLengthRTS()
    this.NextStack = index + 1
    for (let i = index; i < initialSize; i++) {
      if (i in this.TypeAdditionalInfoStack) delete this.TypeAdditionalInfoStack[i]
    }
  }

  allocateSizeOnRTS(size: number, type?: ProgramType) {
    for (let i = 0; i < size; i++) {
      if (type) this.TypeAdditionalInfoStack[this.NextStack] = type
      this.NextStack++
    }
  }

  getStartRTS(): number {
    return this.StartStack
  }

  saveAndUpdateStartOntoStack() {
    const StartStack = this.StartStack
    this.StartStack = this.getLengthRTS()
    this.pushRTS(intToBinary(StartStack), POINTER_BASE_TYPE)
  }

  popAndRestoreStartOntoStack() {
    const prevStartStack = this.popRTS()
    this.StartStack = binaryToInt(prevStartStack)
  }

  printStateRTS() {
    console.log('StartStack: ' + this.StartStack)
    this.printRTS()
  }

  isAtRTS(index: number): Boolean {
    return index < this.NextStack
  }
}
