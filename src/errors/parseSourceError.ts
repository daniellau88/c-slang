import { Token } from 'antlr4ts'
import * as es from 'estree'

import { UNKNOWN_LOCATION } from '../constants'
import { ErrorSeverity, ErrorType, SourceError } from '../types'

export class ParseSourceError implements SourceError {
  public type = ErrorType.RUNTIME
  public severity = ErrorSeverity.ERROR
  public location: es.SourceLocation
  public stackTrace?: Error

  constructor(readonly msg: string, token: Token | null, stackTrace?: Error) {
    this.location = token
      ? {
          start: { line: token.line, column: token.charPositionInLine },
          end: { line: token.line, column: token.charPositionInLine },
        }
      : UNKNOWN_LOCATION
    this.stackTrace = stackTrace
  }

  public explain() {
    return this.msg
  }

  public elaborate() {
    return this.explain()
  }
}
