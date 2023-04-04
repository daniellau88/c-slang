import { LogicError } from '../../errors/runtimeSourceError'
import { CASTTypeModifier, CASTUnaryOperator, ProgramType } from '../../typings/programAST'
import { BinaryWithType } from '../typings'

export const INT_BASE_TYPE: ProgramType = [
  { type: 'TypeModifier', subtype: 'BaseType', baseType: 'int' },
]

export const FLOAT_BASE_TYPE: ProgramType = [
  { type: 'TypeModifier', subtype: 'BaseType', baseType: 'float' },
]

export const CHAR_BASE_TYPE: ProgramType = [
  { type: 'TypeModifier', subtype: 'BaseType', baseType: 'char' },
]

export const VOID_BASE_TYPE: ProgramType = [
  { type: 'TypeModifier', subtype: 'BaseType', baseType: 'void' },
]

export const POINTER_BASE_TYPE: ProgramType = [
  { type: 'TypeModifier', subtype: 'Pointer', pointerDepth: 1 },
]

const POINTER_TYPE_MODIFIER: CASTTypeModifier = {
  type: 'TypeModifier',
  subtype: 'Pointer',
  pointerDepth: 1,
}

export const isBaseType = (type: ProgramType): boolean => {
  if (type.length === 0) return false
  return type[0].subtype === 'BaseType'
}

export const isPointer = (type: ProgramType): boolean => {
  if (type.length === 0) return false
  return type[0].subtype === 'Pointer'
}

export const isArray = (type: ProgramType): boolean => {
  if (type.length === 0) return false
  return type[0].subtype === 'Array'
}

const makeDeepCopy = (type: ProgramType) => {
  const deepCopy: ProgramType = []
  type.forEach(typeModifier => {
    deepCopy.push({
      ...typeModifier,
    })
  })
  return deepCopy
}

export const incrementPointerDepth = (type: ProgramType): ProgramType => {
  const deepCopy = makeDeepCopy(type)
  if (deepCopy[0].subtype === 'Pointer') {
    deepCopy[0].pointerDepth += 1
    return deepCopy
  }

  deepCopy.unshift(POINTER_TYPE_MODIFIER)
  return deepCopy
}

export class NonPointerError extends Error {
  constructor(public type: ProgramType) {
    super()
  }
}

export const decrementPointerDepth = (type: ProgramType): ProgramType => {
  const deepCopy = makeDeepCopy(type)
  if (deepCopy[0].subtype !== 'Pointer') {
    throw new NonPointerError(deepCopy)
  }

  if (deepCopy[0].pointerDepth == 1) {
    return deepCopy.splice(1)
  }

  deepCopy[0].pointerDepth -= 1
  return deepCopy
}

export class NonArrayError extends Error {
  constructor(public type: ProgramType) {
    super()
  }
}

export const getArrayItemsType = (type: ProgramType): ProgramType => {
  const deepCopy = makeDeepCopy(type)
  if (deepCopy[0].subtype !== 'Array') {
    throw new NonArrayError(deepCopy)
  }

  return deepCopy.splice(1)
}

export const FALSE_BOOLEAN_BINARY_WITH_TYPE: BinaryWithType = {
  binary: 0,
  type: INT_BASE_TYPE,
}
export const TRUE_BOOLEAN_BINARY_WITH_TYPE: BinaryWithType = {
  binary: 2.121995791e-314, // import of intToBinary causes issues during testing
  type: INT_BASE_TYPE,
}

export const CASTUnaryOperatorIncrement = [
  CASTUnaryOperator.PreIncrement,
  CASTUnaryOperator.PreDecrement,
  CASTUnaryOperator.PostIncrement,
  CASTUnaryOperator.PostDecrement,
]

interface IncrementType {
  incrementType: 'increment' | 'decrement'
  unaryType: 'pre' | 'post'
}

export const getUnaryOperatorIncrementType = (operator: CASTUnaryOperator): IncrementType => {
  switch (operator) {
    case CASTUnaryOperator.PreIncrement:
      return { incrementType: 'increment', unaryType: 'pre' }
    case CASTUnaryOperator.PreDecrement:
      return { incrementType: 'decrement', unaryType: 'pre' }
    case CASTUnaryOperator.PostIncrement:
      return { incrementType: 'increment', unaryType: 'post' }
    case CASTUnaryOperator.PostDecrement:
      return { incrementType: 'decrement', unaryType: 'post' }
    default:
      throw new LogicError(undefined, 'Unary operator is not of increment type')
  }
}

export const isTypeEquivalent = (type1: ProgramType, type2: ProgramType): boolean => {
  if (type1.length !== type2.length) return false
  return type1.every((x, i) => {
    const y = type2[i]
    if (x.subtype !== y.subtype) return false
    return Object.keys(x).every(key => {
      return x[key] === y[key]
    })
  })
}
