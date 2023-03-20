import { describe, expect, test } from '@jest/globals'

import { testProgram } from '../interpreter/cInterpreter'
import { ProgramState } from '../interpreter/programState'
import { FLOAT_BASE_TYPE, INT_BASE_TYPE } from '../interpreter/typeUtils'
import { binaryToInt, intToBinary } from '../interpreter/utils'

const verifyProgramCompleted = (output: ProgramState) => {
  expect(output.getRTSLength()).toBe(0)
  expect(output.getOSLength()).toBe(1)
  const retVal = output.peekOS()
  expect(retVal?.binary).toBe(intToBinary(0))
  expect(retVal?.type).toStrictEqual(INT_BASE_TYPE)
  expect(output.getRTSStart()).toBe(-1)
}

describe('declarations', () => {
  test('single declaration', () => {
    const output = testProgram(
      `
      int main() {
        int x = 1 + 2;
        printfLog(x);
        return 0;
      }
    `,
    )
    verifyProgramCompleted(output)
    const logOutput = output.getLogOutput()
    expect(logOutput[0].binary).toBe(intToBinary(3))
    expect(logOutput[0].type).toStrictEqual(INT_BASE_TYPE)
  })

  test('multiple declaration', () => {
    const output = testProgram(
      `
      int main() {
        int x = 1 + 4;
        float y = 2.0 + 3.0;
        printfLog(x, y);
        int z = 2 + 100;
        printfLog(z);
        return 0;
      }
    `,
    )
    verifyProgramCompleted(output)
    const logOutput = output.getLogOutput()
    expect(logOutput[0].type).toStrictEqual(INT_BASE_TYPE)
    expect(binaryToInt(logOutput[0].binary)).toBe(5)
    expect(logOutput[1].type).toStrictEqual(FLOAT_BASE_TYPE)
    expect(logOutput[1].binary).toBe(5)
    expect(logOutput[2].type).toStrictEqual(INT_BASE_TYPE)
    expect(binaryToInt(logOutput[2].binary)).toBe(102)
  })

  test('declare and assign variable', () => {
    const output = testProgram(
      `
      int main() {
        int x = 1 + 4;
        int y = x;
        int z = x + 1;
        printfLog(x, y, z);
        return 0;
      }
    `,
    )
    verifyProgramCompleted(output)
    const logOutput = output.getLogOutput()
    expect(logOutput[0].type).toStrictEqual(INT_BASE_TYPE)
    expect(binaryToInt(logOutput[0].binary)).toBe(5)
    expect(logOutput[1].type).toStrictEqual(INT_BASE_TYPE)
    expect(binaryToInt(logOutput[1].binary)).toBe(5)
    expect(logOutput[2].type).toStrictEqual(INT_BASE_TYPE)
    expect(binaryToInt(logOutput[2].binary)).toBe(6)
  })
})
