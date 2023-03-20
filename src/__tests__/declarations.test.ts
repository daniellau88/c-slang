import { describe, test } from '@jest/globals'

import { testProgram } from '../interpreter/cInterpreter'
import { FLOAT_BASE_TYPE, INT_BASE_TYPE } from '../interpreter/typeUtils'
import { intToBinary, RuntimeError } from '../interpreter/utils'
import { expectLogOutputToBe, expectThrowError, verifyProgramCompleted } from './utils'

describe('declarations', () => {
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
        int x = 1 + 4;
        float y = 2.0 + 3.0;
        printfLog(x, y);
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
    expectThrowError(program, RuntimeError, 'Variable z not declared')
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
    expectThrowError(program, RuntimeError, 'Invalid redeclaration of x')
  })
})
