/* tslint:disable: max-classes-per-file */
/* tslint:disable:max-line-length */
import { baseGenerator, generate } from 'astring'
import * as es from 'estree'

import { BinaryWithType, MicroCodeFunctionDefiniton, ProgramType } from '../interpreter/typings'
import { binaryToFormattedString, stringify, typeToString } from '../interpreter/utils/utils'
import { ErrorSeverity, ErrorType, SourceError, Value } from '../types'
import { CASTDeclaration, CASTFunctionDefinition, CASTNode } from '../typings/programAST'
import { BaseError } from './baseErrors'
import { RuntimeSourceError } from './runtimeSourceError'

export class InterruptedError extends RuntimeSourceError {
  constructor(node: CASTNode) {
    super(node)
  }

  public explain() {
    return 'Execution aborted by user.'
  }

  public elaborate() {
    return 'TODO'
  }
}

export class ExceptionError implements SourceError {
  public type = ErrorType.RUNTIME
  public severity = ErrorSeverity.ERROR

  constructor(public error: Error, public location: es.SourceLocation) {}

  public explain() {
    return this.error.toString()
  }

  public elaborate() {
    return 'TODO'
  }
}

export class MaximumStackLimitExceeded extends RuntimeSourceError {
  public static MAX_CALLS_TO_SHOW = 3

  private customGenerator = {
    ...baseGenerator,
    CallExpression(node: any, state: any) {
      state.write(generate(node.callee))
      state.write('(')
      const argsRepr = node.arguments.map((arg: any) => stringify(arg.value))
      state.write(argsRepr.join(', '))
      state.write(')')
    },
  }

  constructor(node: CASTNode, private calls: es.CallExpression[]) {
    super(node)
  }

  public explain() {
    const repr = (call: es.CallExpression) => generate(call, { generator: this.customGenerator })
    return (
      'Maximum call stack size exceeded\n  ' + this.calls.map(call => repr(call) + '..').join('  ')
    )
  }

  public elaborate() {
    return 'TODO'
  }
}

export class UndefinedVariable extends RuntimeSourceError {
  constructor(node: CASTNode, public name: string) {
    super(node)
  }

  public explain() {
    return `Variable ${this.name} not declared.`
  }

  public elaborate() {
    return `Before you can read the value of ${this.name}, you need to declare it as a variable or a constant. You can do this using the let or const keywords.`
  }
}

export class InvalidNumberOfArguments extends RuntimeSourceError {
  private calleeStr: string

  constructor(
    node: CASTNode,
    private expected: number,
    private got: number,
    private funcNode: MicroCodeFunctionDefiniton,
    private hasVarArgs = false,
  ) {
    super(node)
    this.calleeStr = stringify(node)
  }

  public explain() {
    let name: string | undefined = undefined
    if (this.funcNode.subtype === 'builtin_func') {
      name = this.funcNode.name
    } else {
      name = this.funcNode.identifier.name
    }
    return `Expected ${this.expected} ${this.hasVarArgs ? 'or more ' : ''}arguments, but got ${
      this.got
    } for ${name ? `function ${name}` : 'unknown function'}.`
  }

  public elaborate() {
    const calleeStr = this.calleeStr
    const pluralS = this.expected === 1 ? '' : 's'

    return `Try calling function ${calleeStr} again, but with ${this.expected} argument${pluralS} instead. Remember that arguments are separated by a ',' (comma).`
  }
}

export class VariableRedeclaration extends RuntimeSourceError {
  constructor(private node: CASTNode, private name: string, private writable?: boolean) {
    super(node)
  }

  public explain() {
    return `Redeclaration of name ${this.name}.`
  }

  public elaborate() {
    if (this.writable === true) {
      const elabStr = `Since ${this.name} has already been declared, you can assign a value to it without re-declaring.`

      let initStr = ''

      if (this.node.type === 'FunctionDefinition') {
        initStr =
          '(' +
          (this.node as CASTFunctionDefinition).parameters.map(x => stringify(x)).join(',') +
          ') => {...'
      } else if (this.node.type === 'Declaration') {
        initStr = stringify((this.node as CASTDeclaration).init)
      }

      return `${elabStr} As such, you can just do\n\n\t${this.name} = ${initStr};\n`
    } else if (this.writable === false) {
      return `You will need to declare another variable, as ${this.name} is read-only.`
    } else {
      return ''
    }
  }
}

export class GetPropertyError extends RuntimeSourceError {
  constructor(node: CASTNode, private obj: Value, private prop: string) {
    super(node)
  }

  public explain() {
    return `Cannot read property ${this.prop} of ${stringify(this.obj)}.`
  }

  public elaborate() {
    return 'TODO'
  }
}

export class GetInheritedPropertyError extends RuntimeSourceError {
  public type = ErrorType.RUNTIME
  public severity = ErrorSeverity.ERROR
  public location: es.SourceLocation

  constructor(node: CASTNode, private obj: Value, private prop: string) {
    super(node)
    this.location = node.loc!
  }

  public explain() {
    return `Cannot read inherited property ${this.prop} of ${stringify(this.obj)}.`
  }

  public elaborate() {
    return 'TODO'
  }
}

export class SetPropertyError extends RuntimeSourceError {
  constructor(node: CASTNode, private obj: Value, private prop: string) {
    super(node)
  }

  public explain() {
    return `Cannot assign property ${this.prop} of ${stringify(this.obj)}.`
  }

  public elaborate() {
    return 'TODO'
  }
}

export class CannotDereferenceTypeError extends RuntimeSourceError {
  constructor(private node: CASTNode, stackTrace?: BaseError) {
    super(node, stackTrace)
  }

  public explain() {
    return `Cannot dereference non-address of type ${stringify(this.node.type)}.`
  }

  public elaborate() {
    return 'TODO'
  }
}

export class ReturnNotCalled extends RuntimeSourceError {
  constructor(node: CASTNode, private funcNode: MicroCodeFunctionDefiniton) {
    super(node)
  }

  public explain() {
    let name: string | undefined = undefined
    if (this.funcNode.subtype === 'builtin_func') {
      name = this.funcNode.name
    } else {
      name = this.funcNode.identifier.name
    }
    return `Return statement not called for ${name ? `function ${name}` : 'unknown function'}.`
  }

  public elaborate() {
    return 'TODO'
  }
}

export class FunctionCannotReturnArray extends RuntimeSourceError {
  constructor(private node: CASTNode) {
    super(node)
  }

  public explain() {
    let name: string | undefined = undefined
    if (this.node.type === 'FunctionDefinition') {
      name = this.node.identifier.name
    }
    return `Function ${name} cannot return an array.`
  }

  public elaborate() {
    return 'TODO'
  }
}

export class InvalidArraySize extends RuntimeSourceError {
  constructor(node: CASTNode, private binaryType?: BinaryWithType) {
    super(node)
  }

  public explain() {
    const size = this.binaryType
      ? binaryToFormattedString(this.binaryType.binary, this.binaryType.type)
      : 'undefined'
    return `Invalid array size of ${size}.`
  }

  public elaborate() {
    return 'TODO'
  }
}

export class CannotPerformLossyConversion extends RuntimeSourceError {
  constructor(node: CASTNode, private fromType: ProgramType, private toType: ProgramType) {
    super(node)
  }

  public explain() {
    return `Cannot perform lossy conversion from ${typeToString(this.fromType)} to ${typeToString(
      this.toType,
    )}.`
  }

  public elaborate() {
    return 'TODO'
  }
}

export class CannotPerformOperation extends RuntimeSourceError {
  private types: Array<ProgramType>
  constructor(node: CASTNode, types: Array<ProgramType>, stackTrace?: BaseError) {
    super(node, stackTrace)
    this.types = types
  }

  public explain() {
    if (this.types.length === 0) {
      return `Cannot perform operation.`
    }
    if (this.types.length === 1) {
      return `Cannot perform operation on ${typeToString(this.types[0])}.`
    }
    const typeStrings = this.types.map(x => typeToString(x))
    const typeCommas = typeStrings.slice(0, typeStrings.length - 1).join(',')
    return `Cannot perform operation between ${typeCommas} and ${
      typeStrings[typeStrings.length - 1]
    }.`
  }

  public elaborate() {
    return 'TODO'
  }
}

export class UnknownSize extends RuntimeSourceError {
  constructor(private node: CASTNode) {
    super(node)
  }

  public explain() {
    return `Unknown size of ${stringify(this.node)}.`
  }

  public elaborate() {
    return 'TODO'
  }
}

export class CannotDivideByZero extends RuntimeSourceError {
  constructor(node: CASTNode, stackTrace?: BaseError) {
    super(node, stackTrace)
  }

  public explain() {
    return `Cannot divide by zero.`
  }

  public elaborate() {
    return 'TODO'
  }
}

export class UnknownType extends RuntimeSourceError {
  constructor(node: CASTNode, private progType: ProgramType, stackTrace?: BaseError) {
    super(node, stackTrace)
  }

  public explain() {
    return `Unknown type ${stringify(this.progType)}.`
  }

  public elaborate() {
    return 'TODO'
  }
}

export class InvalidMemoryAccess extends RuntimeSourceError {
  constructor(node: CASTNode, private address: number, stackTrace?: BaseError) {
    super(node, stackTrace)
  }

  public explain() {
    return `Invalid memory access to ${this.address}.`
  }

  public elaborate() {
    return 'TODO'
  }
}

export class InvalidMallocSize extends RuntimeSourceError {
  constructor(node: CASTNode, private size: number, stackTrace?: BaseError) {
    super(node, stackTrace)
  }

  public explain() {
    return `Cannot allocate memory of size ${this.size}.`
  }

  public elaborate() {
    return 'TODO'
  }
}

export class NotEnoughMemory extends RuntimeSourceError {
  constructor(node: CASTNode, private size: number, stackTrace?: BaseError) {
    super(node, stackTrace)
  }

  public explain() {
    return `Not enough memory.`
  }

  public elaborate() {
    return 'TODO'
  }
}

export class MemoryFreeNotAllocatedError extends RuntimeSourceError {
  constructor(node: CASTNode, private address: number, stackTrace?: BaseError) {
    super(node, stackTrace)
  }

  public explain() {
    return `Cannot free memory at ${this.address}.`
  }

  public elaborate() {
    return 'TODO'
  }
}

export class InvalidFreeMemoryValue extends RuntimeSourceError {
  constructor(node: CASTNode, private value: BinaryWithType) {
    super(node)
  }

  public explain() {
    return `Invalid free value of ${binaryToFormattedString(this.value.binary, this.value.type)}.`
  }

  public elaborate() {
    return 'TODO'
  }
}

export class VoidHasNoValue extends RuntimeSourceError {
  constructor(node: CASTNode, stackTrace?: BaseError) {
    super(node, stackTrace)
  }

  public explain() {
    return `Void does not have a value.`
  }

  public elaborate() {
    return 'TODO'
  }
}

export class CannotReturnNonVoidValue extends RuntimeSourceError {
  constructor(node: CASTNode) {
    super(node)
  }

  public explain() {
    return `Cannot return non-void value.`
  }

  public elaborate() {
    return 'TODO'
  }
}

export class CannotReturnVoidValue extends RuntimeSourceError {
  constructor(node: CASTNode) {
    super(node)
  }

  public explain() {
    return `Cannot return void value.`
  }

  public elaborate() {
    return 'TODO'
  }
}

export class UnknownError extends RuntimeSourceError {
  constructor(node: CASTNode, private e: Error) {
    super(node)
  }

  public explain() {
    return `Unknown error. Please check with the developers.`
  }

  public elaborate() {
    return 'TODO'
  }
}
