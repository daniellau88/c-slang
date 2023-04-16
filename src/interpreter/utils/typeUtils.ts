import { isEqual } from 'lodash'
import omitDeep from 'omit-deep-lodash'

import { WORD_SIZE } from '../../constants'
import {
  FunctionHasNoSizeBaseError,
  InternalUnreachableBaseError,
  NonArrayBaseError,
  NonPointerBaseError,
  UnknownArrayLengthBaseError,
  UnknownTypeBaseError,
  VoidHasNoValueBaseError,
} from '../../errors/baseErrors'
import { CASTTypeModifier, CASTUnaryOperator } from '../../typings/programAST'
import {
  BinaryWithOptionalType,
  BinaryWithType,
  ProgramType,
  ProgramTypeModifier,
} from '../typings'
import { binaryToInt, intToBinary } from './utils'

const ONE_INT_BINARY = 1.401298464324817e-45 // import of intToBinary causes issues during testing

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

export const isVoid = (type: ProgramType): boolean => {
  return isBaseType(type) && type[0].subtype === 'BaseType' && type[0].baseType === 'void'
}

export const convertCASTTypeModifierToProgramTypeModifier = (
  castTypeModifier: CASTTypeModifier,
): ProgramTypeModifier => {
  switch (castTypeModifier.subtype) {
    case 'Array': {
      if (castTypeModifier.size !== undefined && castTypeModifier.size.type !== 'Literal') {
        throw new UnknownArrayLengthBaseError(castTypeModifier)
      }
      if (castTypeModifier.size === undefined) {
        throw new UnknownArrayLengthBaseError(castTypeModifier)
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
  if (programType.length === 0) throw new UnknownTypeBaseError(programType)
  const sizes = []

  for (let i = 0; i < programType.length; i++) {
    const typeModifier = programType[i]
    let shouldBreak = false
    switch (typeModifier.subtype) {
      case 'Array': {
        sizes.push(typeModifier.size)
        break
      }
      case 'BaseType': {
        if (typeModifier.baseType === 'void') throw new VoidHasNoValueBaseError()
        sizes.push(WORD_SIZE)
        shouldBreak = true
        break
      }
      case 'Pointer': {
        sizes.push(WORD_SIZE)
        shouldBreak = true
        break
      }
      case 'Parameters': {
        throw new FunctionHasNoSizeBaseError(programType)
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
    if (x.subtype === 'Parameters' && y.subtype === 'Parameters') {
      return x.parameterTypeList.every((xParamType, i) => {
        const yParamType = y.parameterTypeList[i]
        // Remove identifier and loc from function parameters before comparing
        const omitX = omitDeep(xParamType, ['identifier', 'loc'])
        const omitY = omitDeep(yParamType, ['identifier', 'loc'])
        return isEqual(omitX, omitY)
      })
    }
    return isEqual(x, y)
  })
}

export const getArrayItems = (
  array: BinaryWithType,
  getValueByAddress: (address: number) => BinaryWithOptionalType | undefined,
): Array<BinaryWithOptionalType | undefined> => {
  if (!isArray(array.type) || array.type[0].subtype !== 'Array') return []

  const arrayItems: Array<BinaryWithOptionalType | undefined> = []
  const arrayItemType = getArrayItemsType(array.type)
  const arrayAddress = binaryToInt(array.binary)
  const arrayLength = array.type[0].size

  const itemSize = getStaticSizeFromProgramType(arrayItemType) / WORD_SIZE
  for (let i = 0; i < arrayLength; i++) {
    const curAddress = arrayAddress + i * itemSize
    if (arrayItemType[0].subtype === 'Array') {
      arrayItems.push({ binary: intToBinary(curAddress), type: arrayItemType })
    } else {
      arrayItems.push(getValueByAddress(curAddress))
    }
  }
  return arrayItems
}
