import { describe, test } from '@jest/globals'

import { testProgram } from '../interpreter/cInterpreter'
import { FLOAT_BASE_TYPE, INT_BASE_TYPE } from '../interpreter/utils/typeUtils'
import { intToBinary } from '../interpreter/utils/utils'
import { expectLogOutputToBe, verifyProgramCompleted } from '../utils/testing'

describe('conditional', () => {
  test('single conditional', () => {
    const output = testProgram(
      `
      int main() {
        int x = 2;
        int y = 3;
        float z = x == 2 ? x : y;
        printfLog(x, y, z);
        return 0;
      }
    `,
    )
    verifyProgramCompleted(output)
    const logOutput = output.getLogOutput()
    const expectedLogOutput = [
      { binary: intToBinary(2), type: INT_BASE_TYPE },
      { binary: intToBinary(3), type: INT_BASE_TYPE },
      { binary: 2, type: FLOAT_BASE_TYPE },
    ]
    expectLogOutputToBe(logOutput, expectedLogOutput)
  })

  test('function return conditional', () => {
    const output = testProgram(
      `
      int a(int b) {
        return b % 2 ? -1 : 1;
      }

      int main() {
        int x = 2;
        int y = a(x);
        printfLog(x, y);
        return 0;
      }
    `,
    )
    verifyProgramCompleted(output)
    const logOutput = output.getLogOutput()
    const expectedLogOutput = [
      { binary: intToBinary(2), type: INT_BASE_TYPE },
      { binary: intToBinary(1), type: INT_BASE_TYPE },
    ]
    expectLogOutputToBe(logOutput, expectedLogOutput)
  })
})
