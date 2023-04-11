import { InternalUnreachableBaseError, RTMInvalidMemoryAccessBaseError } from '../errors/baseErrors'
import { CASTNode } from '../typings/programAST'
import {
  AgendaNode,
  BinaryWithType,
  BuiltinFunctionDefinition,
  ERecord,
  EScope,
  MicroCodeFunctionDefiniton,
  ProgramType,
} from './typings'
import { RTM } from './utils/RTM'
import {
  peek,
  pop,
  popStackAndType,
  printBinariesWithTypes,
  push,
  pushStackAndType,
} from './utils/utils'
import { Warning } from './utils/warning'

type ReturnRegisterType =
  | { binary: BinaryWithType | undefined; assigned: true }
  | { binary: undefined; assigned: false }

export class ProgramState {
  private A: Array<AgendaNode>
  private OS: Array<number>
  private OSType: Record<number, ProgramType>
  private RTM: RTM

  private FD: Array<MicroCodeFunctionDefiniton>

  private E: Array<EScope>

  private LogOutput: Array<BinaryWithType>

  private ReturnRegister: ReturnRegisterType

  private GlobalLength: number

  private warningOutput: Array<Warning>

  constructor() {
    this.A = []
    this.OS = []
    this.OSType = {}
    this.RTM = new RTM(1000000)
    this.FD = []
    this.E = [{ record: {} }]
    this.LogOutput = []
    this.GlobalLength = 0
    this.ReturnRegister = { binary: undefined, assigned: false }
    this.warningOutput = []
  }

  initializeAST(ast: CASTNode) {
    this.A = [ast]
  }

  defineBuiltInFunction(key: string, builtinFunctionDefintion: BuiltinFunctionDefinition) {
    const newIndex = this.FD.length
    if (this.E[0].record[key] !== undefined) {
      throw new InternalUnreachableBaseError(
        'Builtin function ' + key + ' has already been defined',
      )
    }
    push(this.FD, {
      subtype: 'builtin_func',
      func: builtinFunctionDefintion.func,
      returnProgType: builtinFunctionDefintion.returnProgType,
      arity: builtinFunctionDefintion.arity,
      name: key,
    })
    this.addRecordToGlobalE(key, {
      subtype: 'func',
      funcIndex: newIndex,
    })
  }

  initializeBuiltInFunctions(builtinFunctions: Record<string, BuiltinFunctionDefinition>) {
    const builtinFunctionKeys = Object.keys(builtinFunctions)
    builtinFunctionKeys.forEach(key => {
      this.defineBuiltInFunction(key, builtinFunctionKeys[key])
    })
  }

  getMemoryAtIndex(index: number): number {
    if (this.RTM.isAtRTS(index)) {
      return this.RTM.getRTSAtIndex(index)
    } else if (this.RTM.isAtHeap(index)) {
      return this.RTM.getHeapMemoryAtIndex(index)
    } else {
      throw new RTMInvalidMemoryAccessBaseError(index)
    }
  }

  setMemoryAtIndex(index: number, binary: number, type?: ProgramType) {
    if (this.RTM.isAtRTS(index)) {
      this.RTM.setRTSAtIndex(index, binary, type)
    } else if (this.RTM.isAtHeap(index)) {
      this.RTM.setHeapMemoryAtIndex(index, binary, type)
    } else {
      throw new RTMInvalidMemoryAccessBaseError(index)
    }
  }

  pushA(cmd: AgendaNode) {
    push(this.A, cmd)
  }

  popA(): AgendaNode {
    return pop(this.A)
  }

  peekA(): AgendaNode | undefined {
    return peek(this.A)
  }

  isAEmpty(): boolean {
    return this.A.length === 0
  }

  getALength(): number {
    return this.A.length
  }

  printA() {
    console.log('A: ', this.A)
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
    this.RTM.pushRTS(binary, type)
  }

  popRTS(): number {
    return this.RTM.popRTS()
  }

  printRTS() {
    this.RTM.printRTS()
  }

  getRTSLength(): number {
    return this.RTM.getLengthRTS()
  }

  shrinkRTSToIndex(index: number) {
    this.RTM.shrinkToIndexRTS(index)
  }

  allocateSizeOnRTS(size: number, type?: ProgramType) {
    return this.RTM.allocateSizeOnRTS(size, type)
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

  printFD() {
    console.log('FD: ', JSON.stringify(this.FD))
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
      throw new InternalUnreachableBaseError('No more scope to pop')
    }
    this.E[this.E.length - 1] = currentTopE.parent
  }

  popFunctionE() {
    if (this.E.length === 1)
      throw new InternalUnreachableBaseError('Cannot remove global environment')
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
    return this.RTM.getStartRTS()
  }

  saveAndUpdateRTSStartOntoStack() {
    this.RTM.saveAndUpdateStartOntoStack()
  }

  popAndRestoreRTSStartOntoStack() {
    this.RTM.popAndRestoreStartOntoStack()
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

  resetReturnRegister() {
    this.ReturnRegister = { binary: undefined, assigned: false }
  }

  getLogOutput(): Array<BinaryWithType> {
    return this.LogOutput
  }

  allocateHeap(size: number): number {
    return this.RTM.allocateHeap(size)
  }

  freeHeapMemory(address: number) {
    this.RTM.freeHeapMemory(address)
  }

  printHeap() {
    this.RTM.printHeap()
  }

  pushWarning(...warnings: Array<Warning>) {
    push(this.warningOutput, ...warnings)
  }

  getWarning(): Array<Warning> {
    return this.warningOutput
  }
}
