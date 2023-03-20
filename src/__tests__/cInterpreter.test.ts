import { describe, expect, test } from '@jest/globals'

import { testProgram } from '../interpreter/cInterpreter'
import { ProgramState } from '../interpreter/programState'
import { INT_BASE_TYPE } from '../interpreter/typeUtils'
import { intToBinary } from '../interpreter/utils'

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
  })
})
