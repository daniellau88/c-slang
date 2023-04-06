import { ProgramState } from '../programState'
import { ProgramType } from '../typings'
import { wordSize } from './microcodeUtils'
import {
  decrementPointerDepth,
  getArrayItemsType,
  getStaticSizeFromProgramType,
  isArray,
  isBaseType,
  isPointer,
} from './typeUtils'
import { binaryToInt, intToBinary, isTruthy } from './utils'

export const doAssignmentList = (
  state: ProgramState,
  addressInt: number,
  currentType: ProgramType,
) => {
  const { binary: length, type: lengthType } = state.popOS()
  const { binary: isNested, type: isNestedType } = state.popOS()
  const lengthInt = binaryToInt(length)
  let isCharPointer = false
  if (isPointer(currentType)) {
    const nestedType = decrementPointerDepth(currentType)
    isCharPointer =
      isBaseType(nestedType) &&
      nestedType[0].subtype === 'BaseType' &&
      nestedType[0].baseType === 'char'
  }

  if (!isTruthy(isNested)) {
    const values = []
    for (let i = lengthInt - 1; i >= 0; i--) {
      const { binary: innerValue, type: innerType } = state.popOS()
      values.push(innerValue)
    }
    values.reverse()

    let addressToAssgn: number = addressInt
    let iterateType: ProgramType = currentType
    if (isCharPointer) {
      // Only allocate memory if it is a char pointer
      const nestedType = decrementPointerDepth(currentType)
      const staticSize = getStaticSizeFromProgramType(nestedType)
      addressToAssgn = state.allocateSizeOnRTS((staticSize * lengthInt) / wordSize)
      iterateType = nestedType
    } else if (isArray(iterateType)) {
      while (isArray(iterateType)) {
        iterateType = getArrayItemsType(iterateType)
      }
    } else {
      state.setMemoryAtIndex(addressToAssgn, values[0], iterateType) // Assign only first character if it is not a pointer or array
      return
    }

    const staticSize = getStaticSizeFromProgramType(iterateType)

    for (let i = values.length - 1; i >= 0; i--) {
      state.setMemoryAtIndex(addressToAssgn + (i * staticSize) / wordSize, values[i], iterateType)
    }

    if (isCharPointer) {
      state.setMemoryAtIndex(addressInt, intToBinary(addressToAssgn), currentType)
    }
    return
  }

  const nestedType = getArrayItemsType(currentType)
  const staticSize = getStaticSizeFromProgramType(nestedType)
  for (let i = lengthInt - 1; i >= 0; i--) {
    doAssignmentList(state, addressInt + (i * staticSize) / wordSize, nestedType)
  }
}
