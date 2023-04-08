// Base errors are called when the node information is unknown (i.e. the offending line)

import { ProgramType } from '../typings/programAST'

// An error handler will be added to convert it to the correct runtimeSourceError
export class BaseError extends Error {}

export class NonArrayBaseError extends BaseError {
  constructor(public type: ProgramType) {
    super()
  }
}

export class NonPointerBaseError extends BaseError {
  constructor(public type: ProgramType) {
    super()
  }
}

export class RTMInvalidMemoryAccessBaseError extends BaseError {
  constructor(public index: number) {
    super()
  }
}

export class RTMMemoryNotAllocatedBaseError extends BaseError {
  constructor(public address: number) {
    super()
  }
}

export class InternalUnreachableBaseError extends BaseError {
  constructor(public msg?: string, public info?: Array<any>) {
    super()
  }
}

export class ParseBaseError extends BaseError {
  constructor() {
    super()
  }
}

export class UnknownTypeBaseError extends BaseError {
  constructor(public type: ProgramType) {
    super()
  }
}

export class CannotPerformOperationBaseError extends BaseError {
  public types: Array<ProgramType>
  constructor(...types: Array<ProgramType>) {
    super()
    this.types = types
  }
}

export class CannotDivideByZeroBaseError extends BaseError {
  constructor() {
    super()
  }
}
