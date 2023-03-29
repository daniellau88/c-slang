import { convertCSTProgramToAST } from '../parser/ASTConverter'
import { parse as sourceParse } from '../parser/parser'
import { Context, ContiguousArrayElements, Value } from '../types'
import { CASTProgram } from '../typings/programAST'
import { CCSTProgram } from '../typings/programCST'
import { oneLine } from '../utils/formatters'

class ParseError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'ParseError'
  }
}

function unreachable() {
  // tslint:disable-next-line:no-console
  console.error(oneLine`
    UNREACHABLE CODE REACHED!
    Please file an issue at
    https://github.com/source-academy/js-slang/issues
    if you see this.
  `)
}

function transform(node: CCSTProgram): CASTProgram {
  return convertCSTProgramToAST(node)
}

export function parse(x: string, context: Context): CASTProgram {
  const program = sourceParse(x, context)
  if (context.errors.length > 0) {
    throw new ParseError(context.errors[0].explain())
  }

  if (program !== undefined) {
    return transform(program)
  } else {
    unreachable()
    throw new ParseError('Invalid parse')
  }
}
