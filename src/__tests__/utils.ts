import { ProgramState } from '../interpreter/programState'
import { BinaryWithType } from '../interpreter/typings'
import { INT_BASE_TYPE } from '../interpreter/utils/typeUtils'
import { binaryToInt, intToBinary } from '../interpreter/utils/utils'

export const verifyProgramCompleted = (output: ProgramState) => {
  expect(output.getRTSLength()).toBe(output.getGlobalLength())
  expect(output.getOSLength()).toBe(1)
  const retVal = output.peekOS()
  expect(retVal?.binary).toBe(intToBinary(0))
  expect(retVal?.type).toStrictEqual(INT_BASE_TYPE)
  expect(output.getRTSStart()).toBe(-1)
}

export const expectLogOutputToBe = (
  logOutput: Array<BinaryWithType>,
  expectedLogOutput: Array<BinaryWithType>,
) => {
  expect(logOutput.length).toBe(expectedLogOutput.length)
  logOutput.forEach((result, i) => {
    const expectedResult = expectedLogOutput[i]
    expect(result.type).toStrictEqual(expectedResult.type)
    const isInt = expectedResult.type[0].subtype === 'BaseType' && expectedResult.type[0].baseType === 'int'
    const isPointer = expectedResult.type[0].subtype === 'Pointer'
    if (isInt || isPointer) {
      expect(binaryToInt(result.binary)).toBe(binaryToInt(expectedResult.binary))
      return
    }
    expect(result.binary).toBe(expectedResult.binary)
  })
}

export type Newable<T> = { new (...args: any[]): T }

export const expectThrowError = (
  program: () => ProgramState,
  errorType: Newable<Error>,
  errorMessage: string,
) => {
  expect(program).toThrow(errorType)
  expect(program).toThrow(errorMessage)
}
