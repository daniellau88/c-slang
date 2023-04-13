import { CASTNode } from '../../typings/programAST'
import { ProgramType } from '../typings'
import { typeToString } from './utils'

export class Warning {
  message: string
  node: CASTNode

  constructor(node: CASTNode, message: string) {
    this.message = message
    this.node = node
  }

  getMessage() {
    return ' '
  }
}

export class ImplicitCastWarning extends Warning {
  constructor(node: CASTNode, fromType: ProgramType, toType: ProgramType) {
    super(node, `Implicit casting from ${typeToString(fromType)} to ${typeToString(toType)}.`)
  }

  getMessage() {
    return `WARNING:\n${this.message} at Line ${this.node.loc.start.line}\n`
  }
}
