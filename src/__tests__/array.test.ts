import { describe, test } from '@jest/globals'

import { InvalidArraySize } from '../errors/errors'
import { testProgram } from '../interpreter/cInterpreter'
import { INT_BASE_TYPE } from '../interpreter/utils/typeUtils'
import { intToBinary } from '../interpreter/utils/utils'
import { expectLogOutputToBe, expectThrowError, verifyProgramCompleted } from '../utils/testing'

describe('array', () => {
  test('array arithmetic', () => {
    const output = testProgram(
      `
      int main() {
        int a[5];
        int* b = &a[1] + 2;
        a[1] = 3;
        *b = 4;
        printfLog(a[0], a[1], a[2], a[3], a[4]);
        return 0;
      }
    `,
    )

    verifyProgramCompleted(output)
    const logOutput = output.getLogOutput()
    const expectedLogOutput = [
      { binary: intToBinary(0), type: INT_BASE_TYPE },
      { binary: intToBinary(3), type: INT_BASE_TYPE },
      { binary: intToBinary(0), type: INT_BASE_TYPE },
      { binary: intToBinary(4), type: INT_BASE_TYPE },
      { binary: intToBinary(0), type: INT_BASE_TYPE },
    ]
    expectLogOutputToBe(logOutput, expectedLogOutput)
  })

  test('nested array', () => {
    const output = testProgram(
      `
      int main() {
        int a[5][6];
        a[4][5] = 2;
        a[2][3] = 5;
        a[3][5] = a[2][3] + 4;
        printfLog(a[4][5], a[2][3], a[3][5], a[3][4]);
        return 0;
      }
    `,
    )

    verifyProgramCompleted(output)
    const logOutput = output.getLogOutput()
    const expectedLogOutput = [
      { binary: intToBinary(2), type: INT_BASE_TYPE },
      { binary: intToBinary(5), type: INT_BASE_TYPE },
      { binary: intToBinary(9), type: INT_BASE_TYPE },
      { binary: intToBinary(0), type: INT_BASE_TYPE },
    ]
    expectLogOutputToBe(logOutput, expectedLogOutput)
  })

  test('function pointer arrays', () => {
    const output = testProgram(
      `
      int a1(int a, int b) {
        return a + b;
      }

      int a2(int a, int b) {
        return a - b;
      }

      int a3(int a, int b) {
        return a * b;
      }

      int main() {
        int (*a[3])(int, int);
        a[0] = &a1;
        a[1] = &a2;
        a[2] = &a3;
        int x = 2, y = 3;

        printfLog((*a[0])(x, y));
        printfLog((*a[1])(x, y));
        printfLog((*a[2])(x, y));
        return 0;
      }
    `,
    )
    verifyProgramCompleted(output)
    const logOutput = output.getLogOutput()
    const expectedLogOutput = [
      { binary: intToBinary(5), type: INT_BASE_TYPE },
      { binary: intToBinary(-1), type: INT_BASE_TYPE },
      { binary: intToBinary(6), type: INT_BASE_TYPE },
    ]
    expectLogOutputToBe(logOutput, expectedLogOutput)
  })

  test('array negative size', () => {
    const program = () =>
      testProgram(
        `
      int main() {
        int x[-1];
        return 0;
      }
    `,
      )
    expectThrowError(program, InvalidArraySize, 'Invalid array size of int -1.')
  })
})
