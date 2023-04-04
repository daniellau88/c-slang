import { CannotDivideByZero, CannotPerformOperation, UnknownType } from '../../errors/errors'
import { LogicError } from '../../errors/runtimeSourceError'
import {
  CASTAssignmentOperator,
  CASTBinaryOperator,
  CASTNode,
  CASTUnaryOperator,
  ProgramType,
} from '../../typings/programAST'
import { BinaryWithType, MicroCodeBinaryOperator } from '../typings'
import {
  FALSE_BOOLEAN_BINARY_WITH_TYPE,
  FLOAT_BASE_TYPE,
  INT_BASE_TYPE,
  TRUE_BOOLEAN_BINARY_WITH_TYPE,
} from './typeUtils'
import { binaryToInt, intToBinary, isTruthy } from './utils'

export enum ArithmeticType {
  Integer = 0,
  Float = 1,
}

export const getBaseTypePromotionPriority = (type: ProgramType, node: CASTNode): ArithmeticType => {
  if (type.length === 0) throw new UnknownType(node)

  if (type[0].subtype === 'Pointer') {
    return ArithmeticType.Integer
  }

  if (type[0].subtype !== 'BaseType') throw new UnknownType(node)

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
  node: CASTNode,
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
          throw new CannotPerformOperation(node, INT_BASE_TYPE, INT_BASE_TYPE)
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
          throw new CannotPerformOperation(node, FLOAT_BASE_TYPE, FLOAT_BASE_TYPE)
      }
    }
  }
}

export const convertAssignmentOperatorToBinaryOperator = (
  assignmentOperator: CASTAssignmentOperator,
): CASTBinaryOperator => {
  switch (assignmentOperator) {
    case CASTAssignmentOperator.BitwiseAndEqual:
      return CASTBinaryOperator.BitwiseAnd
    case CASTAssignmentOperator.BitwiseOrEqual:
      return CASTBinaryOperator.InclusiveOr
    case CASTAssignmentOperator.BitwiseXorEqual:
      return CASTBinaryOperator.ExclusiveOr
    case CASTAssignmentOperator.DivideEqual:
      return CASTBinaryOperator.Divide
    case CASTAssignmentOperator.MinusEqual:
      return CASTBinaryOperator.Minus
    case CASTAssignmentOperator.ModuloEqual:
      return CASTBinaryOperator.Modulo
    case CASTAssignmentOperator.PlusEqual:
      return CASTBinaryOperator.Plus
    case CASTAssignmentOperator.ShiftLeftEqual:
      return CASTBinaryOperator.ShiftLeft
    case CASTAssignmentOperator.ShiftRightEqual:
      return CASTBinaryOperator.ShiftRight
    case CASTAssignmentOperator.TimesEqual:
      return CASTBinaryOperator.Multiply
    default:
      throw new LogicError(undefined, 'Unsupported assignment operator')
  }
}

const getJSValueFromBinaryWithType = (binaryWithType: BinaryWithType, node: CASTNode): number => {
  const arithmeticType = getBaseTypePromotionPriority(binaryWithType.type, node)
  switch (arithmeticType) {
    case ArithmeticType.Integer:
      return binaryToInt(binaryWithType.binary)
    case ArithmeticType.Float:
      return binaryWithType.binary
    default:
      throw new UnknownType(node)
  }
}

const getBinaryValueFromJSValueWithType = (
  jsValue: number,
  type: ProgramType,
  node: CASTNode,
): BinaryWithType => {
  const arithmeticType = getBaseTypePromotionPriority(type, node)
  switch (arithmeticType) {
    case ArithmeticType.Integer:
      return { binary: intToBinary(jsValue), type }
    case ArithmeticType.Float:
      return { binary: jsValue, type }
    default:
      throw new UnknownType(node)
  }
}

export const doBinaryOperation = (
  operand1: BinaryWithType,
  operand2: BinaryWithType,
  operation: MicroCodeBinaryOperator,
  node: CASTNode,
): BinaryWithType => {
  // By default, result follows operand 1's type
  // Casting and promotion should be handled in previous step
  switch (operation) {
    case MicroCodeBinaryOperator.IntAddition: {
      const op1 = getJSValueFromBinaryWithType(operand1, node)
      const op2 = getJSValueFromBinaryWithType(operand2, node)
      return getBinaryValueFromJSValueWithType(op1 + op2, operand1.type, node)
    }
    case MicroCodeBinaryOperator.IntSubtraction: {
      const op1 = getJSValueFromBinaryWithType(operand1, node)
      const op2 = getJSValueFromBinaryWithType(operand2, node)
      return getBinaryValueFromJSValueWithType(op1 - op2, operand1.type, node)
    }
    case MicroCodeBinaryOperator.IntMultiply: {
      const op1 = getJSValueFromBinaryWithType(operand1, node)
      const op2 = getJSValueFromBinaryWithType(operand2, node)
      return getBinaryValueFromJSValueWithType(op1 * op2, operand1.type, node)
    }
    case MicroCodeBinaryOperator.IntDivision: {
      const op1 = getJSValueFromBinaryWithType(operand1, node)
      const op2 = getJSValueFromBinaryWithType(operand2, node)
      if (op2 === 0) throw new CannotDivideByZero(node)
      return getBinaryValueFromJSValueWithType(op1 / op2, operand1.type, node)
    }
    case MicroCodeBinaryOperator.IntModulo: {
      const op1 = getJSValueFromBinaryWithType(operand1, node)
      const op2 = getJSValueFromBinaryWithType(operand2, node)
      return getBinaryValueFromJSValueWithType(op1 % op2, operand1.type, node)
    }
    case MicroCodeBinaryOperator.FloatAddition: {
      const op1 = getJSValueFromBinaryWithType(operand1, node)
      const op2 = getJSValueFromBinaryWithType(operand2, node)
      return getBinaryValueFromJSValueWithType(op1 + op2, operand1.type, node)
    }
    case MicroCodeBinaryOperator.FloatSubtraction: {
      const op1 = getJSValueFromBinaryWithType(operand1, node)
      const op2 = getJSValueFromBinaryWithType(operand2, node)
      return getBinaryValueFromJSValueWithType(op1 - op2, operand1.type, node)
    }
    case MicroCodeBinaryOperator.FloatMultiply: {
      const op1 = getJSValueFromBinaryWithType(operand1, node)
      const op2 = getJSValueFromBinaryWithType(operand2, node)
      return getBinaryValueFromJSValueWithType(op1 * op2, operand1.type, node)
    }
    case MicroCodeBinaryOperator.FloatDivision: {
      const op1 = getJSValueFromBinaryWithType(operand1, node)
      const op2 = getJSValueFromBinaryWithType(operand2, node)
      if (op2 === 0) throw new CannotDivideByZero(node)
      return getBinaryValueFromJSValueWithType(op1 / op2, operand1.type, node)
    }
    case MicroCodeBinaryOperator.LogicalOr: {
      // Both integer and float representation of 0 are all 0s in binary
      if (!isTruthy(operand1.binary) && !isTruthy(operand2.binary))
        return FALSE_BOOLEAN_BINARY_WITH_TYPE
      return TRUE_BOOLEAN_BINARY_WITH_TYPE
    }
    case MicroCodeBinaryOperator.LogicalAnd: {
      // Both integer and float representation of 0 are all 0s in binary
      if (isTruthy(operand1.binary) && isTruthy(operand2.binary))
        return TRUE_BOOLEAN_BINARY_WITH_TYPE
      return FALSE_BOOLEAN_BINARY_WITH_TYPE
    }
    case MicroCodeBinaryOperator.InclusiveOr: {
      const op1 = getJSValueFromBinaryWithType(operand1, node)
      const op2 = getJSValueFromBinaryWithType(operand2, node)
      return getBinaryValueFromJSValueWithType(op1 | op2, operand1.type, node)
    }
    case MicroCodeBinaryOperator.ExclusiveOr: {
      const op1 = getJSValueFromBinaryWithType(operand1, node)
      const op2 = getJSValueFromBinaryWithType(operand2, node)
      return getBinaryValueFromJSValueWithType(op1 ^ op2, operand1.type, node)
    }
    case MicroCodeBinaryOperator.BitwiseAnd: {
      const op1 = getJSValueFromBinaryWithType(operand1, node)
      const op2 = getJSValueFromBinaryWithType(operand2, node)
      return getBinaryValueFromJSValueWithType(op1 & op2, operand1.type, node)
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
      const op1 = getJSValueFromBinaryWithType(operand1, node)
      const op2 = getJSValueFromBinaryWithType(operand2, node)
      return op1 > op2 ? TRUE_BOOLEAN_BINARY_WITH_TYPE : FALSE_BOOLEAN_BINARY_WITH_TYPE
    }
    case MicroCodeBinaryOperator.RelationalGreaterThanOrEqual: {
      const op1 = getJSValueFromBinaryWithType(operand1, node)
      const op2 = getJSValueFromBinaryWithType(operand2, node)
      return op1 >= op2 ? TRUE_BOOLEAN_BINARY_WITH_TYPE : FALSE_BOOLEAN_BINARY_WITH_TYPE
    }
    case MicroCodeBinaryOperator.RelationalLessThan: {
      const op1 = getJSValueFromBinaryWithType(operand1, node)
      const op2 = getJSValueFromBinaryWithType(operand2, node)
      return op1 < op2 ? TRUE_BOOLEAN_BINARY_WITH_TYPE : FALSE_BOOLEAN_BINARY_WITH_TYPE
    }
    case MicroCodeBinaryOperator.RelationalLessThanOrEqual: {
      const op1 = getJSValueFromBinaryWithType(operand1, node)
      const op2 = getJSValueFromBinaryWithType(operand2, node)
      return op1 <= op2 ? TRUE_BOOLEAN_BINARY_WITH_TYPE : FALSE_BOOLEAN_BINARY_WITH_TYPE
    }
    case MicroCodeBinaryOperator.ShiftLeft: {
      const op1 = getJSValueFromBinaryWithType(operand1, node)
      const op2 = getJSValueFromBinaryWithType(operand2, node)
      return getBinaryValueFromJSValueWithType(op1 << op2, operand1.type, node)
    }
    case MicroCodeBinaryOperator.ShiftRight: {
      const op1 = getJSValueFromBinaryWithType(operand1, node)
      const op2 = getJSValueFromBinaryWithType(operand2, node)
      return getBinaryValueFromJSValueWithType(op1 >> op2, operand1.type, node)
    }
    default:
      throw new LogicError()
  }
}

export const CASTUnaryOperatorWithoutDerefence = [CASTUnaryOperator.Address]

export const doUnaryOperationWithoutDereference = (
  operand: BinaryWithType,
  operator: CASTUnaryOperator,
  node: CASTNode,
): BinaryWithType => {
  switch (operator) {
    case CASTUnaryOperator.Address: {
      return operand
    }
    default:
      throw new LogicError(undefined, 'Unary operation not supported')
  }
}

export const doUnaryOperationWithDereference = (
  operand: BinaryWithType,
  operator: CASTUnaryOperator,
  node: CASTNode,
): BinaryWithType => {
  switch (operator) {
    case CASTUnaryOperator.Positive: {
      const operandValue = getJSValueFromBinaryWithType(operand, node)
      const resultValue = Math.abs(operandValue)
      const resultBinary = getBinaryValueFromJSValueWithType(resultValue, operand.type, node)
      return resultBinary
    }
    case CASTUnaryOperator.Negate: {
      const operandValue = getJSValueFromBinaryWithType(operand, node)
      const resultValue = -operandValue
      const resultBinary = getBinaryValueFromJSValueWithType(resultValue, operand.type, node)
      return resultBinary
    }
    case CASTUnaryOperator.BitwiseNot: {
      const arithmeticType = getBaseTypePromotionPriority(operand.type, node)
      if (arithmeticType !== ArithmeticType.Integer) {
        throw new CannotPerformOperation(node, operand.type)
      }
      return { binary: intToBinary(~binaryToInt(operand.binary)), type: operand.type }
    }
    case CASTUnaryOperator.LogicalNot: {
      return operand.binary === 0 ? TRUE_BOOLEAN_BINARY_WITH_TYPE : FALSE_BOOLEAN_BINARY_WITH_TYPE
    }
    case CASTUnaryOperator.Dereference: {
      // Allows arbitrary dereferencing (without any type)
      return operand
    }
    default:
      throw new LogicError(undefined, 'Unary operation not supported')
  }
}
