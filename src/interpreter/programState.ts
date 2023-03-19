import { CASTNode, CASTTypeModifier } from '../typings/programAST'
import { BinaryWithType, ERecord, EScope, MicroCode, MicroCodeFunctionDefiniton } from './typings'
import {
  LogicError,
  peek,
  pop,
  popStackAndType,
  printBinariesWithTypes,
  push,
  pushStackAndType,
} from './utils'

export class ProgramState {
  private A: Array<CASTNode | MicroCode>
  private OS: Array<number>
  private OSType: Array<Array<CASTTypeModifier>>

  private RTS: Array<number>
  private RTSType: Array<Array<CASTTypeModifier>> // TODO: Allow different size of RTS
  private RTSStart: number

  private FD: Array<MicroCodeFunctionDefiniton>

  private E: Array<EScope>

  private LogOutput: Array<BinaryWithType>

  constructor(ast: CASTNode, builtinFunctions: Record<string, Function>) {
    this.A = [ast]
    this.OS = []
    this.OSType = []
    this.RTS = []
    this.RTSType = []
    this.RTSStart = -1
    this.FD = []
    this.E = [{ record: {} }]
    this.LogOutput = []

    const builtinFunctionKeys = Object.keys(builtinFunctions)
    builtinFunctionKeys.forEach(key => {
      const newIndex = this.FD.length
      if (this.E[0].record[key] !== undefined) {
        throw new LogicError('Buitlin function ' + key + ' has already been defined')
      }
      push(this.FD, { subtype: 'builtin_func', func: builtinFunctions[key] })
      this.E[0].record[key] = {
        subtype: 'func',
        funcIndex: newIndex,
      }
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

  pushOS(binary: number, type: Array<CASTTypeModifier>) {
    pushStackAndType(this.OS, this.OSType, binary, type)
  }

  popOS(): BinaryWithType {
    return popStackAndType(this.OS, this.OSType)
  }

  printOS() {
    printBinariesWithTypes(this.OS, this.OSType, 'OS:')
  }

  pushRTS(binary: number, type: Array<CASTTypeModifier>) {
    pushStackAndType(this.RTS, this.RTSType, binary, type)
  }

  popRTS(): BinaryWithType {
    return popStackAndType(this.RTS, this.RTSType)
  }

  printRTS() {
    printBinariesWithTypes(this.RTS, this.RTSType, 'RTS:')
  }

  getRTSAtIndex(index: number): BinaryWithType {
    return { binary: this.RTS[index], type: this.RTSType[index] }
  }

  setRTSAtIndex(index: number, binary: number, type: Array<CASTTypeModifier>) {
    this.RTS[index] = binary
    this.RTSType[index] = type
  }

  getRTSLength(): number {
    return this.RTS.length
  }

  shrinkRTSToIndex(index: number) {
    this.RTS.slice(0, index + 1)
    this.RTSType.slice(0, index + 1)
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
    console.log('E: ', this.E)
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

  printLogOutput() {
    console.log('LogOutput: ' + JSON.stringify(this.LogOutput))
  }

  pushLogOutput(...logs: Array<BinaryWithType>) {
    push(this.LogOutput, ...logs)
  }

  printState() {
    this.printOS()
    console.log('RTSStart: ' + this.RTSStart)
    this.printRTS()
    this.printE()
    console.log('')
  }

  getRTSStart(): number {
    return this.RTSStart
  }

  setRTSStart(rtsStart: number) {
    return (this.RTSStart = rtsStart)
  }
}
