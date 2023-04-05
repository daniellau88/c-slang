import { ProgramState } from '../programState'
import { ProgramType } from '../typings'
import { wordSize } from './microcodeUtils'
import { getArrayItemsType, getStaticSizeFromProgramType, isArray } from './typeUtils'
import { binaryToInt, isTruthy } from './utils'

export const doAssignmentList = (
  state: ProgramState,
  addressInt: number,
  currentType: ProgramType,
) => {
  const { binary: length, type: lengthType } = state.popOS()
  const { binary: isNested, type: isNestedType } = state.popOS()
  const lengthInt = binaryToInt(length)
  if (!isTruthy(isNested)) {
    const values = []
    for (let i = lengthInt - 1; i >= 0; i--) {
      const { binary: innerValue, type: innerType } = state.popOS()
      values.push(innerValue)
    }
    values.reverse()

    let iterateType = currentType
    while (isArray(iterateType)) {
      iterateType = getArrayItemsType(iterateType)
    }

    const staticSize = getStaticSizeFromProgramType(iterateType)

    for (let i = values.length - 1; i >= 0; i--) {
      state.setMemoryAtIndex(addressInt + (i * staticSize) / wordSize, values[i], iterateType)
    }
    return
  }

  const nestedType = getArrayItemsType(currentType)
  const staticSize = getStaticSizeFromProgramType(nestedType)
  for (let i = lengthInt - 1; i >= 0; i--) {
    doAssignmentList(state, addressInt + (i * staticSize) / wordSize, nestedType)
  }
}
