import { CASTNode, ProgramType } from '../typings/programAST'
import {
  BinaryWithType,
  BuiltinFunctionDefinition,
  ERecord,
  EScope,
  MicroCode,
  MicroCodeFunctionDefiniton,
} from './typings'
import { RTS } from './utils/RTS'
import {
  LogicError,
  peek,
  pop,
  popStackAndType,
  printBinariesWithTypes,
  push,
  pushStackAndType,
  RuntimeError,
} from './utils/utils'

type ReturnRegisterType =
  | { binary: BinaryWithType | undefined; assigned: true }
  | { binary: undefined; assigned: false }

export class ProgramState {
  private A: Array<CASTNode | MicroCode>
  private OS: Array<number>
  private OSType: Record<number, ProgramType>
  private RTS: RTS

  private FD: Array<MicroCodeFunctionDefiniton>

  private E: Array<EScope>

  private LogOutput: Array<BinaryWithType>

  private ReturnRegister: ReturnRegisterType

  private GlobalLength: number

  constructor() {
    this.A = []
    this.OS = []
    this.OSType = {}
    this.RTS = new RTS(1000000)
    this.FD = []
    this.E = [{ record: {} }]
    this.LogOutput = []
    this.GlobalLength = 0
    this.ReturnRegister = { binary: undefined, assigned: false }
  }

  initializeAST(ast: CASTNode) {
    this.A = [ast]
  }

  initializeBuiltInFunctions(builtinFunctions: Record<string, BuiltinFunctionDefinition>) {
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

  peekA(): CASTNode | MicroCode | undefined {
    return peek(this.A)
  }

  isAEmpty(): boolean {
    return this.A.length === 0
  }

  getALength(): number {
    return this.A.length
  }

  getGlobalLength(): number {
    return this.GlobalLength
  }

  setGlobalLength(globalEnd: number) {
    this.GlobalLength = globalEnd
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
    this.RTS.push(binary, type)
  }

  popRTS(): number {
    return this.RTS.pop()
  }

  printRTS() {
    this.RTS.print()
  }

  getRTSAtIndex(index: number): number {
    return this.RTS.getAtIndex(index)
  }

  setRTSAtIndex(index: number, binary: number, type?: ProgramType) {
    return this.RTS.setAtIndex(index, binary, type)
  }

  getRTSLength(): number {
    return this.RTS.getLength()
  }

  shrinkRTSToIndex(index: number) {
    this.RTS.shrinkToIndex(index)
  }

  allocateSizeOnRTS(size: number, type?: ProgramType) {
    this.RTS.allocateSizeOn(size, type)
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

  extendFunctionE() {
    push(this.E, this.getGlobalE())
  }

  extendScopeE() {
    const currentTopE = peek(this.E)
    this.E[this.E.length - 1] = {
      parent: currentTopE,
      record: {},
    }
  }

  popScopeE() {
    const currentTopE = peek(this.E)
    if (!currentTopE || !currentTopE.parent) {
      throw new LogicError('No more scope to pop')
    }
    this.E[this.E.length - 1] = currentTopE.parent
  }

  popFunctionE() {
    if (this.E.length === 1) throw new LogicError('Cannot remove global environment')
    pop(this.E)
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

  addRecordToE(key: string, record: ERecord) {
    this.E[this.E.length - 1].record[key] = record
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
    return this.RTS.getStart()
  }

  saveAndUpdateRTSStartOntoStack() {
    this.RTS.saveAndUpdateStartOntoStack()
  }

  popAndRestoreRTSStartOntoStack() {
    this.RTS.popAndRestoreStartOntoStack()
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
