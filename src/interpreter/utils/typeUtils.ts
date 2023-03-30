import {
  CASTBinaryOperator,
  CASTTypeModifier,
  CASTUnaryOperator,
  ProgramType,
} from '../../typings/programAST'
import { ProgramState } from '../programState'
import { BinaryWithType } from '../typings'
import { binaryToInt, intToBinary, RuntimeError, typeToString } from './utils'

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

export const decrementPointerDepth = (type: ProgramType): ProgramType => {
  const deepCopy = makeDeepCopy(type)
  if (deepCopy[0].subtype !== 'Pointer') {
    throw new RuntimeError('Type ' + typeToString(deepCopy) + ' is not a pointer')
  }

  if (deepCopy[0].pointerDepth == 1) {
    return deepCopy.splice(1)
  }

  deepCopy[0].pointerDepth -= 1
  return deepCopy
}

export const getArrayItemsType = (type: ProgramType): ProgramType => {
  const deepCopy = makeDeepCopy(type)
  if (deepCopy[0].subtype !== 'Array') {
    throw new RuntimeError('Type ' + typeToString(deepCopy) + ' is not an array')
  }

  return deepCopy.splice(1)
}

export const FALSE_BOOLEAN_BINARY_WITH_TYPE: BinaryWithType = {
  binary: intToBinary(0),
  type: INT_BASE_TYPE,
}
export const TRUE_BOOLEAN_BINARY_WITH_TYPE: BinaryWithType = {
  binary: intToBinary(1),
  type: INT_BASE_TYPE,
}

export const CASTUnaryOperatorIncrement = [
  CASTUnaryOperator.PreIncrement,
  CASTUnaryOperator.PreDecrement,
  CASTUnaryOperator.PostIncrement,
  CASTUnaryOperator.PostDecrement,
]

const performUnaryOperationIncrement = (
  operandAddress: BinaryWithType,
  type: 'increment' | 'decrement',
  unaryType: 'post' | 'pre',
  state: ProgramState,
) => {
  // Cannot perform increments on arrays
  if (operandAddress.type[0].subtype !== 'Pointer')
    throw new Error('Argument given is not a pointer')

  const operand = state.getRTSAtIndex(binaryToInt(operandAddress.binary))
  const operandType = decrementPointerDepth(operandAddress.type)

  if (unaryType === 'post') {
    state.pushOS(operand, operandType)
  }

  state.pushOS(operandAddress.binary, operandAddress.type)
  state.pushOS(operand, operandType)

  if (unaryType === 'post') {
    state.pushA({ tag: 'pop_os' })
  }

  state.pushA({ tag: 'assgn' })
  if (type === 'increment') {
    state.pushA({ tag: 'bin_op_auto_promotion', operator: CASTBinaryOperator.Plus })
  } else {
    state.pushA({ tag: 'bin_op_auto_promotion', operator: CASTBinaryOperator.Minus })
  }
  state.pushA({ tag: 'load_int', value: 1 })
}

export const doUnaryOperationIncrement = (
  operand: BinaryWithType,
  operator: CASTUnaryOperator,
  state: ProgramState,
) => {
  switch (operator) {
    case CASTUnaryOperator.PreIncrement: {
      performUnaryOperationIncrement(operand, 'increment', 'pre', state)
      return
    }
    case CASTUnaryOperator.PreDecrement: {
      performUnaryOperationIncrement(operand, 'decrement', 'pre', state)
      return
    }
    case CASTUnaryOperator.PostIncrement: {
      performUnaryOperationIncrement(operand, 'increment', 'post', state)
      return
    }
    case CASTUnaryOperator.PostDecrement: {
      performUnaryOperationIncrement(operand, 'decrement', 'post', state)
      return
    }
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
