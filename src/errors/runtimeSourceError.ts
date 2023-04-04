import * as es from 'estree'

import { UNKNOWN_LOCATION } from '../constants'
import { ErrorSeverity, ErrorType, SourceError } from '../types'
import { CASTNode } from '../typings/programAST'
import { stringify } from '../utils/stringify'

export class RuntimeSourceError implements SourceError {
  public type = ErrorType.RUNTIME
  public severity = ErrorSeverity.ERROR
  public location: es.SourceLocation

  constructor(node?: CASTNode) {
    this.location = node ? (node.loc ? node.loc : UNKNOWN_LOCATION) : UNKNOWN_LOCATION
  }

  public explain() {
    return ''
  }

  public elaborate() {
    return this.explain()
  }
}

export class NotImplementedError extends RuntimeSourceError {
  constructor(private node?: CASTNode) {
    super(node)
  }

  public explain() {
    return `Cannot handle ${stringify(this.node)}`
  }
}

// Error that happens as a result of wrong implementation
export class LogicError extends RuntimeSourceError {
  public msg: string

  constructor(node?: CASTNode, msg?: string) {
    super(node)
    this.msg = msg ? msg : ''
  }

  public explain() {
    return 'Logic error: ' + this.msg
  }
}

// Error that happens as a result of runtime issues
export class RuntimeError extends RuntimeSourceError {
  public msg: string

  constructor(msg?: string, node?: CASTNode) {
    super(node)
    this.msg = msg ? msg : ''
  }

  public explain() {
    return 'Runtime error: ' + this.msg
  }
}
