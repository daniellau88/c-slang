import { describe, test } from '@jest/globals'

import { testProgram } from '../interpreter/cInterpreter'
import { INT_BASE_TYPE } from '../interpreter/typeUtils'
import { intToBinary } from '../interpreter/utils'
import { expectLogOutputToBe, verifyProgramCompleted } from './utils'

describe('assignments', () => {
  test('single assignment', () => {
    const output = testProgram(
      `
      int main() {
        int x = 1 + 2, y, z;
        y = 5;
        z = y + 3 * 2;
        printfLog(x, y, z);
        x = 10;
        printfLog(x);
        return 0;
      }
    `,
    )
    verifyProgramCompleted(output)
    const logOutput = output.getLogOutput()
    const expectedLogOutput = [
      { binary: intToBinary(3), type: INT_BASE_TYPE },
      { binary: intToBinary(5), type: INT_BASE_TYPE },
      { binary: intToBinary(11), type: INT_BASE_TYPE },
      { binary: intToBinary(10), type: INT_BASE_TYPE },
    ]
    expectLogOutputToBe(logOutput, expectedLogOutput)
  })

  test('assignment from variable', () => {
    const output = testProgram(
      `
      int main() {
        int x = 1 + 2, y, z;
        y = x;
        z = y;
        printfLog(x, y, z);
        x = 10;
        printfLog(x);
        return 0;
      }
    `,
    )
    verifyProgramCompleted(output)
    const logOutput = output.getLogOutput()
    const expectedLogOutput = [
      { binary: intToBinary(3), type: INT_BASE_TYPE },
      { binary: intToBinary(3), type: INT_BASE_TYPE },
      { binary: intToBinary(3), type: INT_BASE_TYPE },
      { binary: intToBinary(10), type: INT_BASE_TYPE },
    ]
    expectLogOutputToBe(logOutput, expectedLogOutput)
  })
})
