import * as es from 'estree'

import { UNKNOWN_LOCATION } from '../constants'
import { ErrorSeverity, ErrorType, SourceError } from '../types'
import { CASTNode } from '../typings/programAST'
import { stringify } from '../utils/stringify'
import { BaseError } from './baseErrors'

export class RuntimeSourceError implements SourceError {
  public type = ErrorType.RUNTIME
  public severity = ErrorSeverity.ERROR
  public location: es.SourceLocation
  public stackTrace?: Error

  constructor(node: CASTNode, stackTrace?: Error) {
    this.location = node ? (node.loc ? node.loc : UNKNOWN_LOCATION) : UNKNOWN_LOCATION
    this.stackTrace = stackTrace
  }

  public explain() {
    return ''
  }

  public elaborate() {
    return this.explain()
  }
}

// Should not be used once implemented
export class NotImplementedRuntimeError extends RuntimeSourceError {
  constructor(private node: CASTNode, stackTrace?: BaseError) {
    super(node, stackTrace)
  }

  public explain() {
    return `Cannot handle ${this.node.type}. Handler not implemented.`
  }
}

// Error that happens as a result of wrong implementation
export class InternalUnreachableRuntimeError extends RuntimeSourceError {
  constructor(node: CASTNode, stackTrace?: BaseError) {
    super(node, stackTrace)
  }

  public explain() {
    return `Internal error. Please check with the developers.`
  }
}

export class ParseRuntimeError extends RuntimeSourceError {
  constructor(node: CASTNode, stackTrace?: BaseError) {
    super(node, stackTrace)
  }

  public explain() {
    return `Parsing error. Please check with the developers.`
  }
}
