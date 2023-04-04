import { describe, test } from '@jest/globals'

import { testProgram } from '../interpreter/cInterpreter'
import { INT_BASE_TYPE } from '../interpreter/utils/typeUtils'
import { intToBinary, RuntimeError } from '../interpreter/utils/utils'
import { expectLogOutputToBe, expectThrowError, verifyProgramCompleted } from './utils'

describe('heap', () => {
  test('heap arithmetic', () => {
    const output = testProgram(
      `
      int main() {
        int* a = malloc(5 * sizeof(int));
        int* b = &(*(a + 1)) + 2;
        *(a + 1) = 3;
        *b = 4;
        printfLog(*(a+0), *(a+1), *(a+2), *(a+3), *(a+4));
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

  test('heap arithmetic', () => {
    const output = testProgram(
      `
    int main() {
      int* x = malloc(8 * sizeof(int));
        *x = 10;
        (*(x + 1)) = 20;
        printfLog(*x)
        printfLog(*(x + 1))

        return 0;
    }
    `,
    )

    verifyProgramCompleted(output)
    const logOutput = output.getLogOutput()
    const expectedLogOutput = [
      { binary: intToBinary(10), type: INT_BASE_TYPE },
      { binary: intToBinary(20), type: INT_BASE_TYPE },
    ]
    expectLogOutputToBe(logOutput, expectedLogOutput)
  })

  test('square bracket heap basic', () => {
    const output = testProgram(
      `
      int main() {
        int size = 10;
        int* a = malloc(size * sizeof(int));
        for(int i = 0; i < size; i++) {
          a[i] = i;
        }
        for(int i = 0; i < size; i++) {
          printfLog(a[i]);
        }
        return 0;
      }
      `,
    )

    verifyProgramCompleted(output)
    const logOutput = output.getLogOutput()
    const expectedLogOutput = [
      { binary: intToBinary(0), type: INT_BASE_TYPE },
      { binary: intToBinary(1), type: INT_BASE_TYPE },
      { binary: intToBinary(2), type: INT_BASE_TYPE },
      { binary: intToBinary(3), type: INT_BASE_TYPE },
      { binary: intToBinary(4), type: INT_BASE_TYPE },
      { binary: intToBinary(5), type: INT_BASE_TYPE },
      { binary: intToBinary(6), type: INT_BASE_TYPE },
      { binary: intToBinary(7), type: INT_BASE_TYPE },
      { binary: intToBinary(8), type: INT_BASE_TYPE },
      { binary: intToBinary(9), type: INT_BASE_TYPE },
    ]
    expectLogOutputToBe(logOutput, expectedLogOutput)
  })

  test('pointer of pointers using malloc', () => {
    const output = testProgram(
      `
      int main() {
        int row = 3;
        int column = 3;
        int** dummy = malloc(row * sizeof(int*));
        for (int i = 0; i < row; i++) {
          dummy[i] = malloc(column * sizeof(int));
        }
        for (int i = 0; i < row; i++) {
          for(int j = 0; j < column; j++) {
            dummy[i][j] = i * row + j;
            printfLog(dummy[i][j]);
          }
        }
        for (int i = 0; i < row; i++) {
          free(dummy[i]);
        }
        free(dummy);
        return 0;
      }
      `,
    )

    verifyProgramCompleted(output)
    const logOutput = output.getLogOutput()
    const expectedLogOutput = [
      { binary: intToBinary(0), type: INT_BASE_TYPE },
      { binary: intToBinary(1), type: INT_BASE_TYPE },
      { binary: intToBinary(2), type: INT_BASE_TYPE },
      { binary: intToBinary(3), type: INT_BASE_TYPE },
      { binary: intToBinary(4), type: INT_BASE_TYPE },
      { binary: intToBinary(5), type: INT_BASE_TYPE },
      { binary: intToBinary(6), type: INT_BASE_TYPE },
      { binary: intToBinary(7), type: INT_BASE_TYPE },
      { binary: intToBinary(8), type: INT_BASE_TYPE },
    ]
    expectLogOutputToBe(logOutput, expectedLogOutput)
  })

  test('malloc negative size', () => {
    const program = () =>
      testProgram(
        `
      int main() {
        int* a = malloc(-1);
        return 0;
      }
    `,
      )
    expectThrowError(program, RuntimeError, 'cannot memory allocate of size 0 or below')
  })

  test('double free', () => {
    const program = () =>
      testProgram(
        `
      int main() {
        int*a = malloc(sizeof(int));
        free(a);
        free(a);
        return 0;
      }
    `,
      )
    expectThrowError(program, RuntimeError, 'Invalid free on non allocated heap memory')
  })

  test('use after free', () => {
    const program = () =>
      testProgram(
        `
      int main() {
        int*a = malloc(sizeof(int));
        free(a);
        *a  = 10;
        return 0;
      }
    `,
      )
    expectThrowError(program, RuntimeError, `Set Memory error, Memory is not allocated`)
  })

  test('invalid free', () => {
    const program = () =>
      testProgram(
        `
      int main() {
        int* a = 5;
        free(a);
        return 0;
      }
    `,
      )
    expectThrowError(program, RuntimeError, 'Invalid free on non allocated heap memory')
  })
})
