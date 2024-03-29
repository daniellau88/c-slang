import { describe, test } from '@jest/globals'

import { CannotReturnNonVoidValue, CannotReturnVoidValue, ReturnNotCalled } from '../errors/errors'
import { testProgram } from '../interpreter/cInterpreter'
import { FLOAT_BASE_TYPE, INT_BASE_TYPE } from '../interpreter/utils/typeUtils'
import { intToBinary } from '../interpreter/utils/utils'
import { expectLogOutputToBe, expectThrowError, verifyProgramCompleted } from '../utils/testing'

describe('function', () => {
  test('simple function', () => {
    const output = testProgram(
      `
      int a(int d) {
        printfLog(d);
        return d + 2;
      }

      int main() {
        int c = a(2);
        printfLog(c);
        return 0;
      }
      `,
    )
    verifyProgramCompleted(output)
    const logOutput = output.getLogOutput()
    const expectedLogOutput = [
      { binary: intToBinary(2), type: INT_BASE_TYPE },
      { binary: intToBinary(4), type: INT_BASE_TYPE },
    ]
    expectLogOutputToBe(logOutput, expectedLogOutput)
  })

  test('builtin function', () => {
    const output = testProgram(
      `
      int main() {
        int c = 2;
        printfLog(c, 4.0);
        return 0;
      }
      `,
    )
    verifyProgramCompleted(output)
    const logOutput = output.getLogOutput()
    const expectedLogOutput = [
      { binary: intToBinary(2), type: INT_BASE_TYPE },
      { binary: 4, type: FLOAT_BASE_TYPE },
    ]
    expectLogOutputToBe(logOutput, expectedLogOutput)
  })

  test('function expression evaluated left to right', () => {
    const output = testProgram(
      `
      int a(int b, int c) {
        printfLog(b);
        return c;
      }

      int main() {
        int c = a(a(1, 3), a(2, 0));
        printfLog(c);
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
      { binary: intToBinary(0), type: INT_BASE_TYPE },
    ]
    expectLogOutputToBe(logOutput, expectedLogOutput)
  })

  test('return in scope', () => {
    const output = testProgram(
      `
      int a(int b) {
        printfLog(b);
        {
          return b + 2;
        }
        printfLog(b);
        return b + 1;
      }

      int main() {
        int c = a(1);
        printfLog(c);
        return 0;
      }
      `,
    )
    verifyProgramCompleted(output)
    const logOutput = output.getLogOutput()
    const expectedLogOutput = [
      { binary: intToBinary(1), type: INT_BASE_TYPE },
      { binary: intToBinary(3), type: INT_BASE_TYPE },
    ]
    expectLogOutputToBe(logOutput, expectedLogOutput)
  })

  test('function no return', () => {
    const program = () =>
      testProgram(
        `
        int a(int b, int c) {
          printfLog(b);
        }

        int main() {
          int c = a(a(1, 3), a(2, 0));
          printfLog(c);
          return 0;
        }
        `,
      )
    expectThrowError(program, ReturnNotCalled, 'Return statement not called for function a.')
  })

  test('void function return value', () => {
    const program = () =>
      testProgram(
        `
        void a(int b, int c) {
          printfLog(b);
          return 2;
        }

        int main() {
          a(2, 3);
          return 0;
        }
        `,
      )
    expectThrowError(program, CannotReturnNonVoidValue, 'Cannot return non-void value.')
  })

  test('non-void function return void', () => {
    const program = () =>
      testProgram(
        `
        int a(int b, int c) {
          printfLog(b);
          return;
        }

        int main() {
          int b = a(2, 3);
          return 0;
        }
        `,
      )
    expectThrowError(program, CannotReturnVoidValue, 'Cannot return void value.')
  })

  test('void function no return', () => {
    const output = testProgram(
      `
      void a(int b) {
        printfLog(b);
      }

      int main() {
        a(2);
        return 0;
      }
      `,
    )
    verifyProgramCompleted(output)
    const logOutput = output.getLogOutput()
    const expectedLogOutput = [{ binary: intToBinary(2), type: INT_BASE_TYPE }]
    expectLogOutputToBe(logOutput, expectedLogOutput)
  })
})
