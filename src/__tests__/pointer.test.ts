import { describe, test } from '@jest/globals'

import { testProgram } from '../interpreter/cInterpreter'
import {
  FLOAT_BASE_TYPE,
  incrementPointerDepth,
  INT_BASE_TYPE,
} from '../interpreter/utils/typeUtils'
import { intToBinary, RuntimeError } from '../interpreter/utils/utils'
import { expectLogOutputToBe, expectThrowError, verifyProgramCompleted } from './utils'

describe('pointer', () => {
  test('pointer arithmetic', () => {
    const output = testProgram(
      `
      int main() {
        int a, b, c, d, e;
        a = 21;
        int* f = &a + 2;
        *f = 4;
        *(f + 1) = 5 + *(f - 2);
        printfLog(a, b, c, d, e, f);
        return 0;
      }
    `,
    )

    verifyProgramCompleted(output)
    const logOutput = output.getLogOutput()
    const expectedLogOutput = [
      { binary: intToBinary(21), type: INT_BASE_TYPE },
      { binary: intToBinary(0), type: INT_BASE_TYPE },
      { binary: intToBinary(4), type: INT_BASE_TYPE },
      { binary: intToBinary(26), type: INT_BASE_TYPE }, // Might need to change address if structure changes
      { binary: intToBinary(0), type: INT_BASE_TYPE },
      { binary: intToBinary(3), type: incrementPointerDepth(INT_BASE_TYPE) },
    ]
    expectLogOutputToBe(logOutput, expectedLogOutput)
  })

  test('nested pointers', () => {
    const output = testProgram(
      `
      int main() {
        int a = 2, *b = &a, **c = &b, ***d = &c, ****e = &d;
        printfLog(a, *b, **c, ***d, ****e);
        a = 3;
        printfLog(a, *b, **c, ***d, ****e);
        return 0;
      }
    `,
    )

    verifyProgramCompleted(output)
    const logOutput = output.getLogOutput()
    const expectedLogOutput = [
      { binary: intToBinary(2), type: INT_BASE_TYPE },
      { binary: intToBinary(2), type: INT_BASE_TYPE },
      { binary: intToBinary(2), type: INT_BASE_TYPE },
      { binary: intToBinary(2), type: INT_BASE_TYPE },
      { binary: intToBinary(2), type: INT_BASE_TYPE },
      { binary: intToBinary(3), type: INT_BASE_TYPE },
      { binary: intToBinary(3), type: INT_BASE_TYPE },
      { binary: intToBinary(3), type: INT_BASE_TYPE },
      { binary: intToBinary(3), type: INT_BASE_TYPE },
      { binary: intToBinary(3), type: INT_BASE_TYPE },
    ]
    expectLogOutputToBe(logOutput, expectedLogOutput)
  })

  test('unary address', () => {
    const output = testProgram(
      `
      int main() {
        int x = -10;
        int* a = &x;
        int b = *a + 1;
        float c = *a + 2;
        printfLog(x, a, b, c);
        return 0;
      }
    `,
    )

    verifyProgramCompleted(output)
    const logOutput = output.getLogOutput()
    const expectedLogOutput = [
      { binary: intToBinary(-10), type: INT_BASE_TYPE },
      { binary: intToBinary(1), type: incrementPointerDepth(INT_BASE_TYPE) }, // Might need to change address if structure changes
      { binary: intToBinary(-9), type: INT_BASE_TYPE },
      { binary: -8, type: FLOAT_BASE_TYPE },
    ]
    expectLogOutputToBe(logOutput, expectedLogOutput)
  })

  test('unary address dereference constant', () => {
    const output = testProgram(
      `
      int main() {
        int a = 2;
        int* b = 1;
        float c = *b;
        printfLog(a, b, c);
        return 0;
      }
    `,
    )

    verifyProgramCompleted(output)
    const logOutput = output.getLogOutput()
    const expectedLogOutput = [
      { binary: intToBinary(2), type: INT_BASE_TYPE },
      { binary: intToBinary(1), type: incrementPointerDepth(INT_BASE_TYPE) },
      { binary: 2, type: FLOAT_BASE_TYPE }, // Might need to change address if structure changes
    ]
    expectLogOutputToBe(logOutput, expectedLogOutput)
  })

  test('unary address dereference invalid address', () => {
    const program = () =>
      testProgram(
        `
        int main() {
          int* a = 5;
          float c = *a;
          printfLog(a, c);
          return 0;
        }
      `,
      )
    expectThrowError(program, RuntimeError, 'Invalid memory access')
  })

  test('function pointer', () => {
    const output = testProgram(
      `
      void fun(int a) {
        printfLog(a);
        return;
      }

      int main() {
        void (*a)(int) = &fun;
        (*a)(10);
        return 0;
      }
    `,
    )

    verifyProgramCompleted(output)
    const logOutput = output.getLogOutput()
    const expectedLogOutput = [{ binary: intToBinary(10), type: INT_BASE_TYPE }]
    expectLogOutputToBe(logOutput, expectedLogOutput)
  })
})
