import createContext from '../createContext'
import { convertCSTProgramToAST } from '../parser/ASTConverter'
import { parse } from '../parser/parser'
import { CASTNode, CASTTypeModifier } from '../typings/programAST'
import { BinaryWithType, MicroCode } from './typings'

export class NotImplementedError extends Error {
  constructor(msg?: string) {
    super('Not implemented: ' + msg)
  }
}

// Error that happens as a result of wrong implementation
export class LogicError extends Error {
  constructor(msg?: string) {
    super('Logic error: ' + msg)
  }
}

// Error that happens as a result of runtime issues
export class RuntimeError extends Error {
  constructor(msg?: string) {
    super('Runtime error: ' + msg)
  }
}

export const stringify = (x: any) => JSON.stringify(x)

export const push = <T>(array: Array<T>, ...items: Array<T>): Array<T> => {
  array.splice(array.length, 0, ...items)
  return array
}

export const peek = <T>(array: Array<T>): T | undefined => array.slice(-1)[0]

export const pop = <T>(array: Array<T>): T => {
  if (array.length === 0) {
    throw new LogicError('Cannot pop from empty stack')
  }
  return array.pop() as T
}

export const pushStackAndType = (
  stack: Array<number>,
  typeStack: Array<Array<CASTTypeModifier>>,
  binary: number,
  type: Array<CASTTypeModifier>,
) => {
  push(stack, binary)
  push(typeStack, type)
}

export const popStackAndType = (
  stack: Array<number>,
  typeStack: Array<Array<CASTTypeModifier>>,
): BinaryWithType => {
  const binary = pop(stack)
  const type = pop(typeStack)
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
  view.setFloat64(0, binary) // Use 32 first
  return view.getInt32(0)
}

export const binaryToRawString = (binary: number): string => {
  const data = new ArrayBuffer(8)
  const view = new DataView(data)
  view.setFloat64(0, binary) // Use 32 first
  return view.toString()
}

export const isMicrocode = (test: MicroCode | CASTNode): test is MicroCode => {
  return (test as MicroCode).tag !== undefined
}

export const binaryToFormattedString = (binary: number, type: Array<CASTTypeModifier>): string => {
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
      return 'pointer ' + binary
    default:
      throw new NotImplementedError()
  }
}

export const parseStringToAST = (program: string): CASTNode => {
  const context = createContext()
  const parsedProgram = parse(program, context)
  if (!parsedProgram) {
    throw new Error('Cannot parse program')
  }

  return convertCSTProgramToAST(parsedProgram)
}

const zip = <T, U>(a: Array<T>, b: Array<U>) => a.map((k, i) => [k, b[i]])
export const printBinariesWithTypes = (
  binaries: Array<number>,
  types: Array<Array<CASTTypeModifier>>,
  prefix?: string,
) => {
  const strings = zip(binaries, types).map(x => {
    return binaryToFormattedString(x[0] as number, x[1] as Array<CASTTypeModifier>)
  })
  console.log(prefix + (prefix ? ' ' : '') + '[' + strings.join(', ') + ']')
}
