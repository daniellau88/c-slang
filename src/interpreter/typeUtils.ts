import { CASTTypeModifier, ProgramType } from '../typings/programAST'
import { LogicError } from './utils'

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
