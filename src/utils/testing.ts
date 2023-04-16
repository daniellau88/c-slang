import { ProgramState } from '../interpreter/programState'
import { BinaryWithType, ProgramType } from '../interpreter/typings'
import { ArithmeticType } from '../interpreter/utils/arithmeticUtils'
import { INT_BASE_TYPE } from '../interpreter/utils/typeUtils'
import { binaryToInt, intToBinary, truncateFloatPrecision } from '../interpreter/utils/utils'
import { SourceError } from '../types'

export const verifyProgramCompleted = (output: ProgramState) => {
  expect(output.getRTSLength()).toBe(output.getGlobalLength())
  expect(output.getOSLength()).toBe(1)
  const retVal = output.peekOS()
  expect(retVal?.binary).toBe(intToBinary(0))
  expect(retVal?.type).toStrictEqual(INT_BASE_TYPE)
  expect(output.getRTSStart()).toBe(-1)
}

export const getBaseTypePromotionPriority = (type: ProgramType): ArithmeticType | undefined => {
  if (type.length === 0) return undefined

  if (type[0].subtype === 'Pointer') {
    return ArithmeticType.Integer
  }

  if (type[0].subtype !== 'BaseType') return undefined

  switch (type[0].baseType) {
    case 'int':
    case 'char':
    case 'void':
      return ArithmeticType.Integer
    case 'float':
      return ArithmeticType.Float
  }
}

export const expectLogOutputToBe = (
  logOutput: Array<BinaryWithType>,
  expectedLogOutput: Array<BinaryWithType>,
) => {
  expect(logOutput.length).toBe(expectedLogOutput.length)
  logOutput.forEach((result, i) => {
    const expectedResult = expectedLogOutput[i]
    expect(result.type).toEqual(expectedResult.type)
    const arithmeticType = getBaseTypePromotionPriority(expectedResult.type)

    if (arithmeticType === ArithmeticType.Integer) {
      expect(binaryToInt(result.binary)).toBe(binaryToInt(expectedResult.binary))
      return
    } else if (arithmeticType === ArithmeticType.Float) {
      expect(result.binary).toBe(truncateFloatPrecision(expectedResult.binary))
      return
    }
    expect(result.binary).toBe(expectedResult.binary)
  })
}

export type Newable<T> = { new (...args: any[]): T }

export const expectThrowError = (
  program: () => ProgramState,
  errorType: Newable<SourceError>,
  errorMessage: string,
) => {
  let thrownError
  try {
    program()
    // Error not thrown
    expect(false).toBe(true)
  } catch (error) {
    thrownError = error
  }
  expect(thrownError instanceof errorType).toBe(true)
  if (thrownError.msg) expect(thrownError.msg).toBe(errorMessage)
  else expect(thrownError.explain()).toBe(errorMessage)
}
