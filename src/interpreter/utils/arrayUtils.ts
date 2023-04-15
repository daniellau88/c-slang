import { WORD_SIZE } from '../../constants'
import { InternalUnreachableBaseError, VoidHasNoValueBaseError } from '../../errors/baseErrors'
import { CASTNode } from '../../typings/programAST'
import { ProgramState } from '../programState'
import { BinaryWithType, ProgramType, ProgramTypeModifierArray } from '../typings'
import { convertValueToType } from './typeConversionUtils'
import {
  CHAR_BASE_TYPE,
  decrementPointerDepth,
  getArrayItemsType,
  getStaticSizeFromProgramType,
  incrementPointerDepth,
  isArray,
  isBaseType,
  isPointer,
  isVoid,
} from './typeUtils'
import { binaryToInt, intToBinary } from './utils'
import { ImplicitCastWarning } from './warning'

const IS_NESTED_OFFSET = 0
const IS_STRING_OFFSET = 1

const getFlag = (flags: number, offset: number): boolean => {
  return flags & (1 << offset) ? true : false
}

const setFlag = (flags: number, value: boolean, offset: number): number => {
  const resetFlag = flags & ~(1 << offset)
  const updatedFlag = resetFlag | ((value ? 1 : 0) << offset)
  return updatedFlag
}

export const getIsNestedFlag = (flags: number): boolean => {
  return getFlag(flags, IS_NESTED_OFFSET)
}

export const setIsNestedFlag = (flags: number, value: boolean): number => {
  return setFlag(flags, value, IS_NESTED_OFFSET)
}

export const getIsStringFlag = (flags: number): boolean => {
  return getFlag(flags, IS_STRING_OFFSET)
}

export const setIsStringFlag = (flags: number, value: boolean): number => {
  return setFlag(flags, value, IS_STRING_OFFSET)
}

const getValuesFromOS = (state: ProgramState, length: number): Array<BinaryWithType> => {
  const valuesWithType: Array<BinaryWithType> = []

  for (let i = 0; i < length; i++) {
    const { binary: innerValue, type: innerType } = state.popOS()
    if (isVoid(innerType)) throw new VoidHasNoValueBaseError()
    valuesWithType.push({ binary: innerValue, type: innerType })
  }

  valuesWithType.reverse()
  return valuesWithType
}

const writeListValuesToAddress = (
  state: ProgramState,
  addressToAssgn: number,
  valuesWithType: Array<BinaryWithType>,
  allocatedItemsSize: number,
  itemType: ProgramType,
  node: CASTNode,
) => {
  const limit = Math.min(valuesWithType.length, allocatedItemsSize)
  const staticSize = getStaticSizeFromProgramType(itemType)

  for (let i = limit - 1; i >= 0; i--) {
    const [newVal, isChanged] = convertValueToType(
      valuesWithType[i].binary,
      valuesWithType[i].type,
      itemType,
    )
    if (isChanged) {
      state.pushWarning(new ImplicitCastWarning(node, valuesWithType[i].type, itemType))
    }
    state.setMemoryAtIndex(addressToAssgn + (i * staticSize) / WORD_SIZE, newVal, itemType)
  }

  for (let i = allocatedItemsSize - 1; i >= limit; i--) {
    state.setMemoryAtIndex(addressToAssgn + (i * staticSize) / WORD_SIZE, intToBinary(0), itemType)
  }
}

export const doAllocateString = (
  node: CASTNode,
  state: ProgramState,
  currentType: ProgramType,
  lengthBinary: number,
  flagsBinary: number,
) => {
  const lengthInt = binaryToInt(lengthBinary)
  const flagsInt = binaryToInt(flagsBinary)

  if (getIsNestedFlag(flagsInt) || !getIsStringFlag(flagsInt)) {
    // this is a problem
    throw new InternalUnreachableBaseError('String cannot be nested')
  }

  const valuesWithType = getValuesFromOS(state, lengthInt)

  if (!isPointer(currentType)) {
    const [newVal, isChanged] = convertValueToType(
      valuesWithType[0].binary,
      CHAR_BASE_TYPE,
      currentType,
    )
    if (isChanged) {
      state.pushWarning(new ImplicitCastWarning(node, CHAR_BASE_TYPE, currentType))
    }
    state.pushOS(newVal, currentType)
    return
  }

  // Prevents overwriting into other spaces
  const allocatedItemsSize = valuesWithType.length
  const itemType = decrementPointerDepth(currentType)
  const staticSize = getStaticSizeFromProgramType(itemType)
  const addressToAssgn = state.allocateSizeOnRTS(
    (staticSize * lengthInt) / WORD_SIZE,
    CHAR_BASE_TYPE,
  )
  writeListValuesToAddress(
    state,
    addressToAssgn,
    valuesWithType,
    allocatedItemsSize,
    itemType,
    node,
  )

  const charPointerType = incrementPointerDepth(CHAR_BASE_TYPE)
  const [newVal, isChanged] = convertValueToType(
    intToBinary(addressToAssgn),
    charPointerType,
    currentType,
  )
  if (isChanged) {
    state.pushWarning(new ImplicitCastWarning(node, charPointerType, itemType))
  }
  state.pushOS(newVal, currentType)
}

export const doAssignmentList = (
  node: CASTNode,
  state: ProgramState,
  addressInt: number,
  currentType: ProgramType,
  lengthBinary: number,
  flagsBinary: number,
) => {
  const lengthInt = binaryToInt(lengthBinary)
  const flagsInt = binaryToInt(flagsBinary)

  let isCharArray = false
  if (isArray(currentType)) {
    const nestedType = getArrayItemsType(currentType)
    isCharArray =
      isBaseType(nestedType) &&
      nestedType[0].subtype === 'BaseType' &&
      nestedType[0].baseType === 'char'
  }

  if (!isCharArray && getIsStringFlag(flagsInt)) {
    doAllocateString(node, state, currentType, lengthBinary, flagsBinary)
    const { binary: address, type: lengthType } = state.popOS()
    state.setMemoryAtIndex(addressInt, address, currentType)
    return
  }

  if (!getIsNestedFlag(flagsInt)) {
    const valuesWithType = getValuesFromOS(state, lengthInt)

    const addressToAssgn: number = addressInt
    let itemType: ProgramType = currentType
    // Prevents overwriting into other spaces
    let allocatedItemsSize: number
    if (isArray(itemType)) {
      // If it is an array, flatten the array
      let totalElems = 1
      while (isArray(itemType)) {
        totalElems *= (itemType[0] as ProgramTypeModifierArray).size
        itemType = getArrayItemsType(itemType)
      }
      allocatedItemsSize = totalElems
    } else {
      state.setMemoryAtIndex(addressToAssgn, valuesWithType[0].binary, itemType) // Assign only first character if it is not a pointer or array
      return
    }

    writeListValuesToAddress(
      state,
      addressToAssgn,
      valuesWithType,
      allocatedItemsSize,
      itemType,
      node,
    )
    return
  }

  // If it is not an array type, only assign the first value to it and clean up the rest
  // e.g. int* a = { {2, 3, 4} }; is equivalent to int* a = 2;
  if (!isArray(currentType)) {
    for (let i = lengthInt - 1; i >= 1; i--) {
      const { binary: newLengthBinary, type: lengthType } = state.popOS()
      const { binary: newFlagsBinary, type: newFlagsType } = state.popOS()
      cleanupListInOS(state, newLengthBinary, newFlagsBinary)
    }
    const { binary: newLengthBinary, type: lengthType } = state.popOS()
    const { binary: newFlagsBinary, type: newFlagsType } = state.popOS()
    doAssignmentList(node, state, addressInt, currentType, newLengthBinary, newFlagsBinary)
    return
  }

  const nestedType = getArrayItemsType(currentType)
  const staticSize = getStaticSizeFromProgramType(nestedType)
  for (let i = lengthInt - 1; i >= 0; i--) {
    const { binary: newLengthBinary, type: lengthType } = state.popOS()
    const { binary: newFlagsBinary, type: newFlagsType } = state.popOS()
    doAssignmentList(
      node,
      state,
      addressInt + (i * staticSize) / WORD_SIZE,
      nestedType,
      newLengthBinary,
      newFlagsBinary,
    )
  }
}

export const cleanupListInOS = (state: ProgramState, lengthBinary: number, flagsBinary: number) => {
  const lengthInt = binaryToInt(lengthBinary)
  const flagsInt = binaryToInt(flagsBinary)

  if (!getIsNestedFlag(flagsInt)) {
    getValuesFromOS(state, lengthInt)
    return
  }

  for (let i = 0; i < lengthInt; i++) {
    const { binary: newLengthBinary, type: lengthType } = state.popOS()
    const { binary: newFlagsBinary, type: newFlagsType } = state.popOS()
    cleanupListInOS(state, newLengthBinary, newFlagsBinary)
  }
}
