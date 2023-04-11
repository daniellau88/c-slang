import { VoidHasNoValueBaseError } from '../../errors/baseErrors'
import { CASTNode } from '../../typings/programAST'
import { ProgramState } from '../programState'
import { ProgramType, ProgramTypeModifierArray } from '../typings'
import { wordSize } from './microcodeUtils'
import { convertValueToType } from './typeConversionUtils'
import {
  decrementPointerDepth,
  getArrayItemsType,
  getStaticSizeFromProgramType,
  isArray,
  isBaseType,
  isPointer,
  isVoid,
} from './typeUtils'
import { binaryToInt, intToBinary, isTruthy } from './utils'
import { ImplicitCastWarning } from './warning'

export const doAssignmentList = (
  node: CASTNode,
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
    const valuesType = []
    for (let i = lengthInt - 1; i >= 0; i--) {
      const { binary: innerValue, type: innerType } = state.popOS()
      if (isVoid(innerType)) throw new VoidHasNoValueBaseError()
      values.push(innerValue)
      valuesType.push(innerType)
    }
    values.reverse()
    valuesType.reverse()

    let addressToAssgn: number = addressInt
    let iterateType: ProgramType = currentType
    // Prevents overwriting into other spaces
    let limit = values.length
    let totalElements = limit
    if (isCharPointer) {
      // Only allocate memory if it is a char pointer
      const nestedType = decrementPointerDepth(currentType)
      const staticSize = getStaticSizeFromProgramType(nestedType)
      addressToAssgn = state.allocateSizeOnRTS((staticSize * lengthInt) / wordSize)
      iterateType = nestedType
    } else if (isArray(iterateType)) {
      // If it is an array, flatten the array
      let totalElems = 1
      while (isArray(iterateType)) {
        totalElems *= (iterateType[0] as ProgramTypeModifierArray).size
        iterateType = getArrayItemsType(iterateType)
      }
      totalElements = totalElems
      limit = Math.min(totalElems, limit)
    } else {
      state.setMemoryAtIndex(addressToAssgn, values[0], iterateType) // Assign only first character if it is not a pointer or array
      return
    }

    const staticSize = getStaticSizeFromProgramType(iterateType)

    for (let i = limit - 1; i >= 0; i--) {
      const [newVal, isChanged] = convertValueToType(values[i], valuesType[i], iterateType)
      if (isChanged) {
        state.pushWarning(new ImplicitCastWarning(node, valuesType[i], iterateType))
      }
      state.setMemoryAtIndex(addressToAssgn + (i * staticSize) / wordSize, newVal, iterateType)
    }

    for (let i = totalElements - 1; i >= limit; i--) {
      state.setMemoryAtIndex(
        addressToAssgn + (i * staticSize) / wordSize,
        intToBinary(0),
        iterateType,
      )
    }

    if (isCharPointer) {
      state.setMemoryAtIndex(addressInt, intToBinary(addressToAssgn), currentType)
    }
    return
  }

  const nestedType = getArrayItemsType(currentType)
  const staticSize = getStaticSizeFromProgramType(nestedType)
  for (let i = lengthInt - 1; i >= 0; i--) {
    doAssignmentList(node, state, addressInt + (i * staticSize) / wordSize, nestedType)
  }
}
