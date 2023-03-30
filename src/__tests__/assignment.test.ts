import { describe, test } from '@jest/globals'

import { testProgram } from '../interpreter/cInterpreter'
import { INT_BASE_TYPE } from '../interpreter/utils/typeUtils'
import { intToBinary } from '../interpreter/utils/utils'
import { expectLogOutputToBe, verifyProgramCompleted } from './utils'

describe('assignment', () => {
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

  test('assignment wth operator', () => {
    const output = testProgram(
      `
      int main() {
        int x = 2, y = 3, z = 4;
        printfLog(x, y, z);
        x += y;
        y += 3;
        z -= 1 + x;
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
      { binary: intToBinary(4), type: INT_BASE_TYPE },
      { binary: intToBinary(5), type: INT_BASE_TYPE },
      { binary: intToBinary(6), type: INT_BASE_TYPE },
      { binary: intToBinary(-2), type: INT_BASE_TYPE },
    ]
    expectLogOutputToBe(logOutput, expectedLogOutput)
  })
})
