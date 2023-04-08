import { describe, test } from '@jest/globals'

import { testProgram } from '../interpreter/cInterpreter'
import { incrementPointerDepth, INT_BASE_TYPE } from '../interpreter/utils/typeUtils'
import { intToBinary } from '../interpreter/utils/utils'
import { expectLogOutputToBe, verifyProgramCompleted } from '../utils/testing'

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
        int* a = &x;
        printfLog(x, y, z, a);
        x += y;
        y += 3;
        z -= 1 + x;
        a += 2;
        printfLog(x, y, z, a);
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
      { binary: intToBinary(1), type: incrementPointerDepth(INT_BASE_TYPE) },
      { binary: intToBinary(5), type: INT_BASE_TYPE },
      { binary: intToBinary(6), type: INT_BASE_TYPE },
      { binary: intToBinary(-2), type: INT_BASE_TYPE },
      { binary: intToBinary(3), type: incrementPointerDepth(INT_BASE_TYPE) },
    ]
    expectLogOutputToBe(logOutput, expectedLogOutput)
  })

  test('assignment wth operator all', () => {
    const output = testProgram(
      `
      int main() {
        int x = 2, y = 3, z = 4;
        x += 2;
        printfLog(x);
        x -= 3;
        printfLog(x);
        x *= 13;
        printfLog(x);
        x /= 5;
        printfLog(x);
        x %= 3;
        printfLog(x);
        x <<= 3;
        printfLog(x);
        x >>= 2;
        printfLog(x);
        y &= 6;
        printfLog(y);
        y ^= 6;
        printfLog(y);
        y |= 3;
        printfLog(y);
        return 0;
      }
      `,
    )
    verifyProgramCompleted(output)
    const logOutput = output.getLogOutput()
    const expectedLogOutput = [
      { binary: intToBinary(4), type: INT_BASE_TYPE },
      { binary: intToBinary(1), type: INT_BASE_TYPE },
      { binary: intToBinary(13), type: INT_BASE_TYPE },
      { binary: intToBinary(2), type: INT_BASE_TYPE },
      { binary: intToBinary(2), type: INT_BASE_TYPE },
      { binary: intToBinary(16), type: INT_BASE_TYPE },
      { binary: intToBinary(4), type: INT_BASE_TYPE },
      { binary: intToBinary(2), type: INT_BASE_TYPE },
      { binary: intToBinary(4), type: INT_BASE_TYPE },
      { binary: intToBinary(7), type: INT_BASE_TYPE },
    ]
    expectLogOutputToBe(logOutput, expectedLogOutput)
  })

  test('evaluate value before address', () => {
    const output = testProgram(
      `
      int main() {
        int x[3];
        int y = 0;
        x[++y] = ++y;
        printfLog(y, x[0], x[1], x[2]);
        return 0;
      }
      `,
    )
    verifyProgramCompleted(output)
    const logOutput = output.getLogOutput()
    const expectedLogOutput = [
      { binary: intToBinary(2), type: INT_BASE_TYPE },
      { binary: intToBinary(0), type: INT_BASE_TYPE },
      { binary: intToBinary(0), type: INT_BASE_TYPE },
      { binary: intToBinary(1), type: INT_BASE_TYPE },
    ]
    expectLogOutputToBe(logOutput, expectedLogOutput)
  })
})
