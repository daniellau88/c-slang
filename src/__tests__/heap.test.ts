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
