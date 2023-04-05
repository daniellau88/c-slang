import createContext from '../../createContext'
import { InternalUnreachableBaseError, ParseBaseError } from '../../errors/baseErrors'
import { convertCSTProgramToAST } from '../../parser/ASTConverter'
import { parse } from '../../parser/parser'
import { CASTExpression, CASTNode, CASTUnaryOperator } from '../../typings/programAST'
import { BinaryWithType, MicroCode, ProgramType } from '../typings'

export const stringify = (x: any) => JSON.stringify(x)

export const push = <T>(array: Array<T>, ...items: Array<T>): Array<T> => {
  array.splice(array.length, 0, ...items)
  return array
}

export const peek = <T>(array: Array<T>): T | undefined => array.slice(-1)[0]

export const pop = <T>(array: Array<T>): T => {
  if (array.length === 0) {
    throw new InternalUnreachableBaseError('Cannot pop from empty stack')
  }
  return array.pop() as T
}

export const pushStackAndType = (
  stack: Array<number>,
  typeStack: Record<number, ProgramType>,
  binary: number,
  type?: ProgramType,
) => {
  const newIndex = stack.length
  push(stack, binary)
  if (type) typeStack[newIndex] = type
}

export const popStackAndType = (
  stack: Array<number>,
  typeStack: Record<number, ProgramType>,
): BinaryWithType => {
  const binary = pop(stack)
  const poppedIndex = stack.length

  const type = typeStack[poppedIndex]
  delete typeStack[poppedIndex]

  return { binary, type }
}

export const intToBinary = (int: number): number => {
  const data = new ArrayBuffer(8)
  const view = new DataView(data)
  view.setInt32(0, int) // Use 32 first
  return view.getFloat64(0)
}

export const binaryToInt = (binary: number): number => {
  const data = new ArrayBuffer(8)
  const view = new DataView(data)
  view.setFloat64(0, binary)
  return view.getInt32(0)
}

export const binaryToRawString = (binary: number): string => {
  const data = new ArrayBuffer(8)
  const view = new DataView(data)
  view.setFloat64(0, binary)
  const value = view.getBigUint64(0)
  const binString = value.toString(2)
  return '0'.repeat(64 - binString.length) + binString
}

export const isMicrocode = (test: MicroCode | CASTNode): test is MicroCode => {
  return (test as MicroCode).tag !== undefined
}

export const binaryToFormattedString = (binary: number, type?: ProgramType): string => {
  if (!type || type.length === 0) return 'unknown ' + binary
  const baseType = type[0]
  switch (baseType.subtype) {
    case 'BaseType':
      switch (baseType.baseType) {
        case 'float':
          return 'float ' + binary
        case 'int':
          return 'int ' + binaryToInt(binary)
        case 'char':
          return 'char ' + String.fromCharCode(binaryToInt(binary))
        case 'void':
          return 'void'
      }
    case 'Pointer':
      return 'pointer ' + binaryToInt(binary)
    case 'Array':
      return 'array ' + binaryToInt(binary)
    case 'Parameters':
      return 'parameters ' + binary
    default:
      throw new InternalUnreachableBaseError('Unknown type')
  }
}

export const typeToString = (type: ProgramType): string => {
  if (!type || type.length === 0) return 'unknown'
  const baseType = type[0]
  switch (baseType.subtype) {
    case 'BaseType':
      switch (baseType.baseType) {
        case 'float':
          return 'float'
        case 'int':
          return 'int'
        case 'char':
          return 'char'
        case 'void':
          return 'void'
      }
    case 'Pointer':
      return 'pointer'
    case 'Array':
      return 'array'
    case 'Parameters':
      return 'function'
    default:
      throw new InternalUnreachableBaseError('Unknown type')
  }
}

export const parseStringToAST = (program: string): CASTNode => {
  const context = createContext()
  const parsedProgram = parse(program, context)
  if (!parsedProgram) {
    throw new ParseBaseError()
  }

  const ast = convertCSTProgramToAST(parsedProgram)
  return ast
}

export const printBinariesWithTypes = (
  binaries: Array<number>,
  types: Record<number, ProgramType>,
  prefix?: string,
) => {
  const strings = binaries.map((x, i) => {
    return binaryToFormattedString(x, types[i])
  })
  console.log(prefix + '[' + strings.join(', ') + ']')
}

export const shouldDerefExpression = (expression: CASTExpression): boolean => {
  switch (expression.type) {
    case 'Identifier':
    case 'ArrayAccessExpression':
      return true
    case 'UnaryExpression':
      return expression.operator === CASTUnaryOperator.Dereference
    default:
      return false
  }
}

export const isTruthy = (binary: number): boolean => {
  return binary !== 0
}
