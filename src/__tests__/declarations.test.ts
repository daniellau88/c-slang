import { describe, test } from '@jest/globals'

import { UndefinedVariable, VariableRedeclaration, VoidHasNoValue } from '../errors/errors'
import { testProgram } from '../interpreter/cInterpreter'
import {
  FLOAT_BASE_TYPE,
  incrementPointerDepth,
  INT_BASE_TYPE,
} from '../interpreter/utils/typeUtils'
import { intToBinary } from '../interpreter/utils/utils'
import { expectLogOutputToBe, expectThrowError, verifyProgramCompleted } from '../utils/testing'

describe('declaration', () => {
  test('single declaration', () => {
    const output = testProgram(
      `
      int main() {
        int x = 1 + 2;
        printfLog(x);
        return 0;
      }
      `,
    )
    verifyProgramCompleted(output)
    const logOutput = output.getLogOutput()
    const expectedLogOutput = [{ binary: intToBinary(3), type: INT_BASE_TYPE }]
    expectLogOutputToBe(logOutput, expectedLogOutput)
  })

  test('multiple declaration', () => {
    const output = testProgram(
      `
      int main() {
        int a = 1 + 4, b, *c;
        float y = 2.0 + 3.0;
        printfLog(a, b, c, y);
        int z = 2 + 100;
        printfLog(z);
        return 0;
      }
      `,
    )
    verifyProgramCompleted(output)
    const logOutput = output.getLogOutput()
    const expectedLogOutput = [
      { binary: intToBinary(5), type: INT_BASE_TYPE },
      { binary: intToBinary(0), type: INT_BASE_TYPE },
      { binary: 0, type: incrementPointerDepth(INT_BASE_TYPE) },
      { binary: 5, type: FLOAT_BASE_TYPE },
      { binary: intToBinary(102), type: INT_BASE_TYPE },
    ]
    expectLogOutputToBe(logOutput, expectedLogOutput)
  })

  test('declare and assign variable', () => {
    const output = testProgram(
      `
      int main() {
        int x = 1 + 4;
        int y = x;
        int z = x + 1;
        printfLog(x, y, z);
        return 0;
      }
      `,
    )
    verifyProgramCompleted(output)
    const logOutput = output.getLogOutput()
    const expectedLogOutput = [
      { binary: intToBinary(5), type: INT_BASE_TYPE },
      { binary: intToBinary(5), type: INT_BASE_TYPE },
      { binary: intToBinary(6), type: INT_BASE_TYPE },
    ]
    expectLogOutputToBe(logOutput, expectedLogOutput)
  })

  test('global declaration', () => {
    const output = testProgram(
      `
      int x = 2;
      int main() {
        printfLog(x);
        return 0;
      }
      `,
    )
    verifyProgramCompleted(output)
    const logOutput = output.getLogOutput()
    const expectedLogOutput = [{ binary: intToBinary(2), type: INT_BASE_TYPE }]
    expectLogOutputToBe(logOutput, expectedLogOutput)
  })

  test('undeclared variable', () => {
    const program = () =>
      testProgram(
        `
        int main() {
          int x = 1 + 4;
          z;
          return 0;
        }
        `,
      )
    expectThrowError(program, UndefinedVariable, 'Variable z not declared.')
  })

  test('redeclared variable', () => {
    const program = () =>
      testProgram(
        `
        int main() {
          int x = 1 + 4;
          int x = 2 + 3;
          return 0;
        }
        `,
      )
    expectThrowError(program, VariableRedeclaration, 'Redeclaration of name x.')
  })

  test('cannot declare void type', () => {
    const program = () =>
      testProgram(
        `
        int main() {
          void x = 3;
          return 0;
        }
        `,
      )
    expectThrowError(program, VoidHasNoValue, 'Void does not have a value.')
  })
})
