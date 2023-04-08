import {
  InternalUnreachableBaseError,
  NonArrayBaseError,
  NonPointerBaseError,
  StaticSizeInvalidTypeBaseError,
  StaticSizeUnknownSizeBaseError,
  TypeConversionBaseError,
} from '../../errors/baseErrors'
import { CASTTypeModifier, CASTUnaryOperator } from '../../typings/programAST'
import { BinaryWithType, ProgramType, ProgramTypeModifier } from '../typings'

const ONE_INT_BINARY = 2.121995791e-314 // import of intToBinary causes issues during testing

export const INT_BASE_TYPE: ProgramType = [{ subtype: 'BaseType', baseType: 'int' }]

export const FLOAT_BASE_TYPE: ProgramType = [{ subtype: 'BaseType', baseType: 'float' }]

export const CHAR_BASE_TYPE: ProgramType = [{ subtype: 'BaseType', baseType: 'char' }]

export const VOID_BASE_TYPE: ProgramType = [{ subtype: 'BaseType', baseType: 'void' }]

export const POINTER_BASE_TYPE: ProgramType = [{ subtype: 'Pointer', pointerDepth: 1 }]

const POINTER_TYPE_MODIFIER: ProgramTypeModifier = { subtype: 'Pointer', pointerDepth: 1 }

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

export const isParameters = (type: ProgramType): boolean => {
  if (type.length === 0) return false
  return type[0].subtype === 'Parameters'
}

export const convertCASTTypeModifierToProgramTypeModifier = (
  castTypeModifier: CASTTypeModifier,
): ProgramTypeModifier => {
  switch (castTypeModifier.subtype) {
    case 'Array': {
      if (castTypeModifier.size !== undefined && castTypeModifier.size.type !== 'Literal') {
        throw new TypeConversionBaseError(castTypeModifier)
      }
      if (castTypeModifier.size === undefined) {
        throw new TypeConversionBaseError(castTypeModifier)
      }
      const size = parseInt(castTypeModifier.size.value)
      return { subtype: 'Array', size: size }
    }
    case 'BaseType': {
      return { subtype: 'BaseType', baseType: castTypeModifier.baseType }
    }
    case 'Parameters': {
      return { subtype: 'Parameters', parameterTypeList: castTypeModifier.parameterTypeList }
    }
    case 'Pointer': {
      return { subtype: 'Pointer', pointerDepth: castTypeModifier.pointerDepth }
    }
  }
}

export const getStaticSizeFromProgramType = (programType: ProgramType): number => {
  if (programType.length === 0) throw new StaticSizeInvalidTypeBaseError(programType)
  const sizes = []

  for (let i = 0; i < programType.length; i++) {
    const typeModifier = programType[i]
    let shouldBreak = false
    switch (typeModifier.subtype) {
      case 'Array': {
        if (typeModifier.size === undefined) throw new StaticSizeUnknownSizeBaseError(programType)
        sizes.push(typeModifier.size)
        break
      }
      case 'BaseType': {
        sizes.push(8)
        shouldBreak = true
        break
      }
      case 'Pointer': {
        sizes.push(8)
        shouldBreak = true
        break
      }
      case 'Parameters': {
        throw new StaticSizeUnknownSizeBaseError(programType)
      }
    }
    if (shouldBreak) break
  }

  return sizes.reduce((x, y) => x * y, 1)
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
    throw new NonPointerBaseError(deepCopy)
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
    throw new NonArrayBaseError(deepCopy)
  }

  return deepCopy.splice(1)
}

export const makeArray = (type: ProgramType, size: number): ProgramType => {
  const deepCopy = makeDeepCopy(type)
  const newArrayModifier: ProgramTypeModifier = { subtype: 'Array', size: size }

  deepCopy.unshift(newArrayModifier)
  return deepCopy
}

export const FALSE_BOOLEAN_BINARY_WITH_TYPE: BinaryWithType = {
  binary: 0,
  type: INT_BASE_TYPE,
}
export const TRUE_BOOLEAN_BINARY_WITH_TYPE: BinaryWithType = {
  binary: ONE_INT_BINARY,
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
      throw new InternalUnreachableBaseError('Should be only increment unary operators', [operator])
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
