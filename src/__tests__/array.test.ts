import { describe, test } from '@jest/globals'

import { WORD_SIZE } from '../constants'
import { FunctionCannotReturnArray, InvalidArraySize } from '../errors/errors'
import { testProgram } from '../interpreter/cInterpreter'
import { incrementPointerDepth, INT_BASE_TYPE, makeArray } from '../interpreter/utils/typeUtils'
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

  test('array literal flatten', () => {
    const output = testProgram(
      `
      int main() {
        int x[2][2][2] = {1, 2, 3, 4, 5};
        for (int i = 0; i < 2; i++) {
          for (int j = 0; j < 2; j++) {
            for (int k = 0; k < 2; k++) {
              printfLog(x[i][j][k]);
            }
          }
        }

        int* y = {1, 2, 3};
        printfLog(y);

        return 0;
      }
      `,
    )

    verifyProgramCompleted(output)
    const logOutput = output.getLogOutput()
    const expectedLogOutput = [
      { binary: intToBinary(1), type: INT_BASE_TYPE },
      { binary: intToBinary(2), type: INT_BASE_TYPE },
      { binary: intToBinary(3), type: INT_BASE_TYPE },
      { binary: intToBinary(4), type: INT_BASE_TYPE },
      { binary: intToBinary(5), type: INT_BASE_TYPE },
      { binary: intToBinary(0), type: INT_BASE_TYPE },
      { binary: intToBinary(0), type: INT_BASE_TYPE },
      { binary: intToBinary(0), type: INT_BASE_TYPE },
      { binary: intToBinary(1), type: incrementPointerDepth(INT_BASE_TYPE) },
    ]
    expectLogOutputToBe(logOutput, expectedLogOutput)
  })

  test('array literal within depth', () => {
    const output = testProgram(
      `
      int main() {
        int x[2][2][2] = {{{2, 3}, {4, 5}}, {1}};
        for (int i = 0; i < 2; i++) {
          for (int j = 0; j < 2; j++) {
            for (int k = 0; k < 2; k++) {
              printfLog(x[i][j][k]);
            }
          }
        }
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
      { binary: intToBinary(1), type: INT_BASE_TYPE },
      { binary: intToBinary(0), type: INT_BASE_TYPE },
      { binary: intToBinary(0), type: INT_BASE_TYPE },
      { binary: intToBinary(0), type: INT_BASE_TYPE },
    ]
    expectLogOutputToBe(logOutput, expectedLogOutput)
  })

  test('array literal exceed depth', () => {
    const output = testProgram(
      `
      int main() {
        int x[2][2][2] = {{1}, {2, {4, {3}}}};
        for (int i = 0; i < 2; i++) {
          for (int j = 0; j < 2; j++) {
            for (int k = 0; k < 2; k++) {
              printfLog(x[i][j][k]);
            }
          }
        }
        return 0;
      }
      `,
    )

    verifyProgramCompleted(output)
    const logOutput = output.getLogOutput()
    const expectedLogOutput = [
      { binary: intToBinary(1), type: INT_BASE_TYPE },
      { binary: intToBinary(0), type: INT_BASE_TYPE },
      { binary: intToBinary(0), type: INT_BASE_TYPE },
      { binary: intToBinary(0), type: INT_BASE_TYPE },
      { binary: intToBinary(2), type: INT_BASE_TYPE },
      { binary: intToBinary(4), type: INT_BASE_TYPE },
      { binary: intToBinary(0), type: INT_BASE_TYPE },
      { binary: intToBinary(0), type: INT_BASE_TYPE },
    ]
    expectLogOutputToBe(logOutput, expectedLogOutput)
  })

  test('array literal evaluate left to right', () => {
    const output = testProgram(
      `
      int main() {
        int x = 0;
        int y[3] = {x++, x++, x++};
        printfLog(x);
        for (int i = 0; i < 3; i++) {
          printfLog(y[i]);
        }
        return 0;
      }
      `,
    )

    verifyProgramCompleted(output)
    const logOutput = output.getLogOutput()
    const expectedLogOutput = [
      { binary: intToBinary(3), type: INT_BASE_TYPE },
      { binary: intToBinary(0), type: INT_BASE_TYPE },
      { binary: intToBinary(1), type: INT_BASE_TYPE },
      { binary: intToBinary(2), type: INT_BASE_TYPE },
    ]
    expectLogOutputToBe(logOutput, expectedLogOutput)
  })

  test('array literal unknown length', () => {
    const output = testProgram(
      `
      int main() {
        int a[][2] = {{1, 2}, {2, 3}, {3}};
        for (int i = 0; i < 3; i++) {
          printfLog(a[i][0], a[i][1]);
        }
        printfLog(sizeof(a));
        return 0;
      }
      `,
    )

    verifyProgramCompleted(output)
    const logOutput = output.getLogOutput()
    const expectedLogOutput = [
      { binary: intToBinary(1), type: INT_BASE_TYPE },
      { binary: intToBinary(2), type: INT_BASE_TYPE },
      { binary: intToBinary(2), type: INT_BASE_TYPE },
      { binary: intToBinary(3), type: INT_BASE_TYPE },
      { binary: intToBinary(3), type: INT_BASE_TYPE },
      { binary: intToBinary(0), type: INT_BASE_TYPE },
      { binary: intToBinary(6 * WORD_SIZE), type: INT_BASE_TYPE },
    ]
    expectLogOutputToBe(logOutput, expectedLogOutput)
  })

  test('initialize array to zeros', () => {
    const output = testProgram(
      `
      void a() {
        int b[5] = { 1, };
        for (int i = 0; i < 5; i++) {
          printfLog(b[i]);
        }
        b[3] = 2;
        b[4] = 3;
        return;
      }

      int main() {
        a();
        a();
        return 0;
      }
    `,
    )

    verifyProgramCompleted(output)
    const logOutput = output.getLogOutput()
    const expectedLogOutput = [
      { binary: intToBinary(1), type: INT_BASE_TYPE },
      { binary: intToBinary(0), type: INT_BASE_TYPE },
      { binary: intToBinary(0), type: INT_BASE_TYPE },
      { binary: intToBinary(0), type: INT_BASE_TYPE },
      { binary: intToBinary(0), type: INT_BASE_TYPE },
      { binary: intToBinary(1), type: INT_BASE_TYPE },
      { binary: intToBinary(0), type: INT_BASE_TYPE },
      { binary: intToBinary(0), type: INT_BASE_TYPE },
      { binary: intToBinary(0), type: INT_BASE_TYPE },
      { binary: intToBinary(0), type: INT_BASE_TYPE },
    ]
    expectLogOutputToBe(logOutput, expectedLogOutput)
  })

  test('array as function parameter', () => {
    const output = testProgram(
      `
      int a(int x[], int y) {
        printfLog(x, y);
        int sum = 0;
        for (int i = 0; i < 6; i++) {
          sum = sum + x[i];
        }
        printfLog(sum);
        return sum;
      }
      
      int main() {
        int b[] = {1, 2, 3, 4, 5, 6};
        int sum = a(b, 2);
        printfLog(b, sum);
        return 0;
      }
      `,
    )

    verifyProgramCompleted(output)
    const logOutput = output.getLogOutput()
    const expectedLogOutput = [
      { binary: intToBinary(1), type: makeArray(INT_BASE_TYPE, 6) },
      { binary: intToBinary(2), type: INT_BASE_TYPE },
      { binary: intToBinary(21), type: INT_BASE_TYPE },
      { binary: intToBinary(1), type: makeArray(INT_BASE_TYPE, 6) },
      { binary: intToBinary(21), type: INT_BASE_TYPE },
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

  test('return array from function', () => {
    const program = () =>
      testProgram(
        `
        int a()[5] {
          int b[] = {1, 2, 3, 4};
          return b;
        }

        int main() {
          int x[4] = a();
          return 0;
        }
        `,
      )
    expectThrowError(program, FunctionCannotReturnArray, 'Function a cannot return an array.')
  })
})
