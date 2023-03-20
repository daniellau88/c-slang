import { CASTBinaryOperator, CASTTypeModifier, ProgramType } from '../typings/programAST'
import { BinaryWithType, MicroCodeBinaryOperator } from './typings'
import { binaryToInt, intToBinary, LogicError, NotImplementedError, RuntimeError } from './utils'

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
    throw new LogicError('Type is not a pointer')
  }

  if (deepCopy[0].pointerDepth == 1) {
    return deepCopy.splice(1)
  }

  deepCopy[0].pointerDepth -= 1
  return deepCopy
}

export enum ArithmeticType {
  Integer = 0,
  Float = 1,
}

export const getBaseTypePromotionPriority = (type: ProgramType): ArithmeticType => {
  if (type.length === 0) throw new LogicError('Type is empty')
  if (type[0].subtype !== 'BaseType') throw new LogicError('Type is not base type')
  switch (type[0].baseType) {
    case 'int':
    case 'char':
    case 'void':
      return ArithmeticType.Integer
    case 'float':
      return ArithmeticType.Float
  }
}

export const convertBinaryOperatorToMicroCodeBinaryOperator = (
  maxPriority: ArithmeticType,
  binaryOperator: CASTBinaryOperator,
): MicroCodeBinaryOperator => {
  switch (binaryOperator) {
    case CASTBinaryOperator.EqualityEqual:
      return MicroCodeBinaryOperator.EqualityEqual
    case CASTBinaryOperator.EqualityNotEqual:
      return MicroCodeBinaryOperator.EqualityNotEqual
    case CASTBinaryOperator.RelationalGreaterThan:
      return MicroCodeBinaryOperator.RelationalGreaterThan
    case CASTBinaryOperator.RelationalLessThan:
      return MicroCodeBinaryOperator.RelationalLessThan
    case CASTBinaryOperator.RelationalGreaterThanOrEqual:
      return MicroCodeBinaryOperator.RelationalGreaterThanOrEqual
    case CASTBinaryOperator.RelationalLessThanOrEqual:
      return MicroCodeBinaryOperator.RelationalLessThanOrEqual
    case CASTBinaryOperator.LogicalAnd:
      return MicroCodeBinaryOperator.LogicalAnd
    case CASTBinaryOperator.LogicalOr:
      return MicroCodeBinaryOperator.LogicalOr
  }

  switch (maxPriority) {
    case ArithmeticType.Integer: {
      switch (binaryOperator) {
        case CASTBinaryOperator.Plus:
          return MicroCodeBinaryOperator.IntAddition
        case CASTBinaryOperator.Minus:
          return MicroCodeBinaryOperator.IntSubtraction
        case CASTBinaryOperator.Multiply:
          return MicroCodeBinaryOperator.IntMultiply
        case CASTBinaryOperator.Divide:
          return MicroCodeBinaryOperator.IntDivision
        case CASTBinaryOperator.Modulo:
          return MicroCodeBinaryOperator.IntModulo
        case CASTBinaryOperator.InclusiveOr:
          return MicroCodeBinaryOperator.InclusiveOr
        case CASTBinaryOperator.ExclusiveOr:
          return MicroCodeBinaryOperator.ExclusiveOr
        case CASTBinaryOperator.BitwiseAnd:
          return MicroCodeBinaryOperator.BitwiseAnd
        case CASTBinaryOperator.ShiftLeft:
          return MicroCodeBinaryOperator.ShiftLeft
        case CASTBinaryOperator.ShiftRight:
          return MicroCodeBinaryOperator.ShiftRight
        default:
          throw new RuntimeError('Operation not supported for integer')
      }
    }
    case ArithmeticType.Float: {
      switch (binaryOperator) {
        case CASTBinaryOperator.Plus:
          return MicroCodeBinaryOperator.FloatAddition
        case CASTBinaryOperator.Minus:
          return MicroCodeBinaryOperator.FloatSubtraction
        case CASTBinaryOperator.Multiply:
          return MicroCodeBinaryOperator.FloatMultiply
        case CASTBinaryOperator.Divide:
          return MicroCodeBinaryOperator.FloatDivision
        default:
          throw new RuntimeError('Operation not supported for floating point numbers')
      }
    }
  }
}

const getOperandsInInt = (
  operand1: BinaryWithType,
  operand2: BinaryWithType,
): { operand1Int: number; operand2Int: number } => {
  return {
    operand1Int: binaryToInt(operand1.binary),
    operand2Int: binaryToInt(operand2.binary),
  }
}
const getOperandsByType = (
  operand1: BinaryWithType,
  operand2: BinaryWithType,
): { operand1Value: number; operand2Value: number } => {
  return {
    operand1Value: operand1.type == INT_BASE_TYPE ? binaryToInt(operand1.binary) : operand1.binary,
    operand2Value: operand2.type == INT_BASE_TYPE ? binaryToInt(operand2.binary) : operand2.binary,
  }
}

const FALSE_BOOLEAN_BINARY_WITH_TYPE: BinaryWithType = {
  binary: intToBinary(0),
  type: INT_BASE_TYPE,
}
const TRUE_BOOLEAN_BINARY_WITH_TYPE: BinaryWithType = {
  binary: intToBinary(1),
  type: INT_BASE_TYPE,
}

export const doBinaryOperation = (
  operand1: BinaryWithType,
  operand2: BinaryWithType,
  operation: MicroCodeBinaryOperator,
): BinaryWithType => {
  switch (operation) {
    case MicroCodeBinaryOperator.IntAddition: {
      const { operand1Int, operand2Int } = getOperandsInInt(operand1, operand2)
      return { binary: intToBinary(operand1Int + operand2Int), type: INT_BASE_TYPE }
    }
    case MicroCodeBinaryOperator.IntSubtraction: {
      const { operand1Int, operand2Int } = getOperandsInInt(operand1, operand2)
      return { binary: intToBinary(operand1Int - operand2Int), type: INT_BASE_TYPE }
    }
    case MicroCodeBinaryOperator.IntMultiply: {
      const { operand1Int, operand2Int } = getOperandsInInt(operand1, operand2)
      return { binary: intToBinary(operand1Int * operand2Int), type: INT_BASE_TYPE }
    }
    case MicroCodeBinaryOperator.IntDivision: {
      const { operand1Int, operand2Int } = getOperandsInInt(operand1, operand2)
      if (operand2Int === 0) throw new RuntimeError('Cannot divide by 0')
      return { binary: intToBinary(operand1Int / operand2Int), type: INT_BASE_TYPE }
    }
    case MicroCodeBinaryOperator.IntModulo: {
      const { operand1Int, operand2Int } = getOperandsInInt(operand1, operand2)
      return { binary: intToBinary(operand1Int % operand2Int), type: INT_BASE_TYPE }
    }
    case MicroCodeBinaryOperator.FloatAddition: {
      return { binary: operand1.binary + operand2.binary, type: FLOAT_BASE_TYPE }
    }
    case MicroCodeBinaryOperator.FloatSubtraction: {
      return { binary: operand1.binary - operand2.binary, type: FLOAT_BASE_TYPE }
    }
    case MicroCodeBinaryOperator.FloatMultiply: {
      return { binary: operand1.binary * operand2.binary, type: FLOAT_BASE_TYPE }
    }
    case MicroCodeBinaryOperator.FloatDivision: {
      if (operand2.binary === 0) throw new RuntimeError('Cannot divide by 0')
      return { binary: operand1.binary / operand2.binary, type: FLOAT_BASE_TYPE }
    }
    case MicroCodeBinaryOperator.LogicalOr: {
      // Both integer and float representation of 0 are all 0s in binary
      if (operand1.binary === 0 && operand2.binary === 0) return FALSE_BOOLEAN_BINARY_WITH_TYPE
      return TRUE_BOOLEAN_BINARY_WITH_TYPE
    }
    case MicroCodeBinaryOperator.LogicalAnd: {
      // Both integer and float representation of 0 are all 0s in binary
      if (operand1.binary !== 0 && operand2.binary !== 0) return TRUE_BOOLEAN_BINARY_WITH_TYPE
      return FALSE_BOOLEAN_BINARY_WITH_TYPE
    }
    case MicroCodeBinaryOperator.InclusiveOr: {
      const { operand1Int, operand2Int } = getOperandsInInt(operand1, operand2)
      return { binary: intToBinary(operand1Int | operand2Int), type: INT_BASE_TYPE }
    }
    case MicroCodeBinaryOperator.ExclusiveOr: {
      const { operand1Int, operand2Int } = getOperandsInInt(operand1, operand2)
      return { binary: intToBinary(operand1Int ^ operand2Int), type: INT_BASE_TYPE }
    }
    case MicroCodeBinaryOperator.BitwiseAnd: {
      const { operand1Int, operand2Int } = getOperandsInInt(operand1, operand2)
      return { binary: intToBinary(operand1Int & operand2Int), type: INT_BASE_TYPE }
    }
    case MicroCodeBinaryOperator.EqualityEqual: {
      if (operand1.binary === operand2.binary) return TRUE_BOOLEAN_BINARY_WITH_TYPE
      return FALSE_BOOLEAN_BINARY_WITH_TYPE
    }
    case MicroCodeBinaryOperator.EqualityNotEqual: {
      if (operand1.binary !== operand2.binary) return TRUE_BOOLEAN_BINARY_WITH_TYPE
      return FALSE_BOOLEAN_BINARY_WITH_TYPE
    }
    case MicroCodeBinaryOperator.RelationalGreaterThan: {
      const { operand1Value, operand2Value } = getOperandsByType(operand1, operand2)
      return operand1Value > operand2Value
        ? TRUE_BOOLEAN_BINARY_WITH_TYPE
        : FALSE_BOOLEAN_BINARY_WITH_TYPE
    }
    case MicroCodeBinaryOperator.RelationalGreaterThanOrEqual: {
      const { operand1Value, operand2Value } = getOperandsByType(operand1, operand2)
      return operand1Value >= operand2Value
        ? TRUE_BOOLEAN_BINARY_WITH_TYPE
        : FALSE_BOOLEAN_BINARY_WITH_TYPE
    }
    case MicroCodeBinaryOperator.RelationalLessThan: {
      const { operand1Value, operand2Value } = getOperandsByType(operand1, operand2)
      return operand1Value < operand2Value
        ? TRUE_BOOLEAN_BINARY_WITH_TYPE
        : FALSE_BOOLEAN_BINARY_WITH_TYPE
    }
    case MicroCodeBinaryOperator.RelationalLessThanOrEqual: {
      const { operand1Value, operand2Value } = getOperandsByType(operand1, operand2)
      return operand1Value <= operand2Value
        ? TRUE_BOOLEAN_BINARY_WITH_TYPE
        : FALSE_BOOLEAN_BINARY_WITH_TYPE
    }
    case MicroCodeBinaryOperator.ShiftLeft: {
      const { operand1Int, operand2Int } = getOperandsInInt(operand1, operand2)
      return { binary: intToBinary(operand1Int << operand2Int), type: INT_BASE_TYPE }
    }
    case MicroCodeBinaryOperator.ShiftRight: {
      const { operand1Int, operand2Int } = getOperandsInInt(operand1, operand2)
      return { binary: intToBinary(operand1Int >> operand2Int), type: INT_BASE_TYPE }
    }
    default:
      throw new NotImplementedError()
  }
}

// export const isTypeEquivalent = (type1: ProgramType, type2: ProgramType): boolean => {
//   if (type1.length !== type2.length) return false
//   return type1.every((x, i) => {
//     const y = type2[i]
//     if (x.subtype !== y.subtype) return false
//     return Object.keys(x).every(key => {
//       return x[key] === y[key]
//     })
//   })
// }
