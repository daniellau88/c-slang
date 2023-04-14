import { RecognitionException, Token } from 'antlr4ts'

import { CalcParser } from '../lang/CalcParser'

export interface ParserErrorInfo {
  msg: string
  token: Token | null
  e: RecognitionException | undefined
}

export class ActualCalcParser extends CalcParser {
  errors: Array<ParserErrorInfo> = []

  notifyErrorListeners(msg: string): void
  notifyErrorListeners(
    msg: string,
    offendingToken: Token | null,
    e: RecognitionException | undefined,
  ): void
  notifyErrorListeners(msg: unknown, offendingToken?: unknown, e?: unknown): void {
    this.errors.push({
      msg: msg as string,
      token: offendingToken as Token | null,
      e: e as RecognitionException | undefined,
    })
  }
}
