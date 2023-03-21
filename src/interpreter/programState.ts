import { CASTNode, ProgramType } from '../typings/programAST'
import {
  BinaryWithType,
  BuiltinFunctionDefinition,
  ERecord,
  EScope,
  MicroCode,
  MicroCodeFunctionDefiniton,
} from './typings'
import {
  LogicError,
  peek,
  pop,
  popStackAndType,
  printBinariesWithTypes,
  push,
  pushStackAndType,
  RuntimeError,
} from './utils'

type ReturnRegisterType =
  | { binary: BinaryWithType | undefined; assigned: true }
  | { binary: undefined; assigned: false }

export class ProgramState {
  private A: Array<CASTNode | MicroCode>
  private OS: Array<number>
  private OSType: Record<number, ProgramType>

  private RTS: Array<number>
  private RTSTypeAdditionalInfo: Record<number, ProgramType> // TODO: Allow different size of RTS // RTS should not have type associated with it, this is for display purposes
  private RTSStart: number // RTSStart is where the old start pointer is located at

  private FD: Array<MicroCodeFunctionDefiniton>

  private E: Array<EScope>

  private LogOutput: Array<BinaryWithType>

  private ReturnRegister: ReturnRegisterType

  constructor(ast: CASTNode, builtinFunctions: Record<string, BuiltinFunctionDefinition>) {
    this.A = [ast]
    this.OS = []
    this.OSType = {}
    this.RTS = []
    this.RTSTypeAdditionalInfo = {}
    this.RTSStart = -1
    this.FD = []
    this.E = [{ record: {} }]
    this.LogOutput = []
    this.ReturnRegister = { binary: undefined, assigned: false }

    const builtinFunctionKeys = Object.keys(builtinFunctions)
    builtinFunctionKeys.forEach(key => {
      const newIndex = this.FD.length
      if (this.E[0].record[key] !== undefined) {
        throw new LogicError('Buitlin function ' + key + ' has already been defined')
      }
      const builtinFunctionDefintion = builtinFunctions[key]
      push(this.FD, {
        subtype: 'builtin_func',
        func: builtinFunctionDefintion.func,
        returnProgType: builtinFunctionDefintion.returnProgType,
        arity: builtinFunctionDefintion.arity,
      })
      this.addRecordToGlobalE(key, {
        subtype: 'func',
        funcIndex: newIndex,
      })
    })
  }

  pushA(cmd: CASTNode | MicroCode) {
    push(this.A, cmd)
  }

  popA(): CASTNode | MicroCode {
    return pop(this.A)
  }

  isAEmpty(): boolean {
    return this.A.length === 0
  }

  getALength(): number {
    return this.A.length
  }

  pushOS(binary: number, type: ProgramType) {
    pushStackAndType(this.OS, this.OSType, binary, type)
  }

  popOS(): BinaryWithType {
    return popStackAndType(this.OS, this.OSType)
  }

  printOS() {
    printBinariesWithTypes(this.OS, this.OSType, 'OS: ')
  }

  getOSLength(): number {
    return this.OS.length
  }

  peekOS(): BinaryWithType | undefined {
    if (this.OS.length == 0) {
      return undefined
    }
    const topIndex = this.OS.length - 1
    return { binary: peek(this.OS) as number, type: this.OSType[topIndex] as ProgramType }
  }

  pushRTS(binary: number, type?: ProgramType) {
    const newIndex = this.RTS.length
    push(this.RTS, binary)
    if (type) this.RTSTypeAdditionalInfo[newIndex] = type
  }

  popRTS(): number {
    const result = pop(this.RTS)
    const newIndex = this.RTS.length
    delete this.RTSTypeAdditionalInfo[newIndex]
    return result
  }

  printRTS() {
    printBinariesWithTypes(this.RTS, this.RTSTypeAdditionalInfo, 'RTS: ')
  }

  getRTSAtIndex(index: number): number {
    if (index >= this.RTS.length) throw new RuntimeError('Invalid memory access')
    return this.RTS[index]
  }

  setRTSAtIndex(index: number, binary: number, type?: ProgramType) {
    this.RTS[index] = binary
    if (type) this.RTSTypeAdditionalInfo[index] = type
  }

  getRTSLength(): number {
    return this.RTS.length
  }

  shrinkRTSToIndex(index: number) {
    const initialSize = this.RTS.length
    this.RTS = this.RTS.slice(0, index + 1)
    // Might take some time if shrinking is huge
    for (let i = index; i < initialSize; i++) {
      if (i in this.RTSTypeAdditionalInfo) delete this.RTSTypeAdditionalInfo[i]
    }
  }

  allocateSizeOnRTS(newSize: number, type?: ProgramType) {
    const initialSize = this.RTS.length
    const changeInSize = newSize - initialSize
    for (let i = 0; i < changeInSize; i++) {
      this.pushRTS(0, type)
    }
  }

  pushFD(fd: MicroCodeFunctionDefiniton) {
    push(this.FD, fd)
  }

  getFDLength(): number {
    return this.FD.length
  }

  getFDAtIndex(index: number): MicroCodeFunctionDefiniton {
    return this.FD[index]
  }

  popE(): EScope {
    return pop(this.E)
  }

  pushE(e: EScope) {
    push(this.E, e)
  }

  printE() {
    console.log('E: ', JSON.stringify(this.E))
  }

  lookupE(key: string): ERecord | undefined {
    const currentEnv = peek(this.E)
    if (!currentEnv) {
      return undefined
    }

    let currentEntry: EScope | undefined = currentEnv
    while (currentEntry) {
      if (key in currentEntry.record) {
        return currentEntry.record[key]
      }
      currentEntry = currentEntry.parent
    }
    return undefined
  }

  getGlobalE() {
    return this.E[0]
  }

  hasKeyGlobalE(key: string) {
    return this.E[0].record[key] !== undefined
  }

  addRecordToGlobalE(key: string, record: ERecord) {
    this.E[0].record[key] = record
  }

  getELength(): number {
    return this.E.length
  }

  printState() {
    this.printOS()
    console.log('RTSStart: ' + this.RTSStart)
    this.printRTS()
    this.printE()
    console.log('')
  }

  printLogOutput() {
    console.log('LogOutput: ' + JSON.stringify(this.LogOutput))
  }

  pushLogOutput(...logs: Array<BinaryWithType>) {
    push(this.LogOutput, ...logs)
  }

  getRTSStart(): number {
    return this.RTSStart
  }

  setRTSStart(rtsStart: number) {
    return (this.RTSStart = rtsStart)
  }

  getReturnRegister(): ReturnRegisterType {
    return this.ReturnRegister
  }

  setReturnRegisterAssigned(assigned: boolean) {
    this.ReturnRegister.assigned = assigned
  }

  setReturnRegisterBinary(returnRegister: BinaryWithType) {
    this.ReturnRegister.binary = returnRegister
  }

  getLogOutput(): Array<BinaryWithType> {
    return this.LogOutput
  }
}
