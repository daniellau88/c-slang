import * as es from 'estree'

import { RuntimeSourceError } from '../errors/runtimeSourceError'
import { ErrorSeverity, ErrorType } from '../types'
import { CASTNode } from '../typings/programAST'

export class TypeError extends RuntimeSourceError {
  public type = ErrorType.RUNTIME
  public severity = ErrorSeverity.ERROR
  public location: es.SourceLocation

  constructor(node: CASTNode, public side: string, public expected: string, public got: string) {
    super(node)
  }

  public explain() {
    return `Expected ${this.expected}${this.side}, got ${this.got}.`
  }

  public elaborate() {
    return this.explain()
  }
}
