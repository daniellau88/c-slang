import { describe, test } from '@jest/globals'

import { testProgram } from '../interpreter/cInterpreter'
import { INT_BASE_TYPE } from '../interpreter/typeUtils'
import { intToBinary } from '../interpreter/utils'
import { expectLogOutputToBe, verifyProgramCompleted } from './utils'

describe('size of', () => {
  test('sizeof type', () => {
    const output = testProgram(
      `
      int main() {
        int a = sizeof(int);
        int b = sizeof(int*[5]);
        int c = sizeof(int[5][6]);
        int d = sizeof(int(*[4])(int, int));
        printfLog(a, b, c, d);
        return 0;
      }
    `,
    )
    verifyProgramCompleted(output)
    const logOutput = output.getLogOutput()
    const expectedLogOutput = [
      { binary: intToBinary(8), type: INT_BASE_TYPE },
      { binary: intToBinary(40), type: INT_BASE_TYPE },
      { binary: intToBinary(240), type: INT_BASE_TYPE },
      { binary: intToBinary(32), type: INT_BASE_TYPE },
    ]
    expectLogOutputToBe(logOutput, expectedLogOutput)
  })

  test('sizeof variable', () => {
    const output = testProgram(
      `
      int main() {
        int a1, *b1[5], c1[5][6], (*d1[4])(int, int);
        int a = sizeof(a1);
        int b = sizeof(b1);
        int c = sizeof(c1);
        int d = sizeof(d1);
        printfLog(a, b, c, d);
        return 0;
      }
    `,
    )
    verifyProgramCompleted(output)
    const logOutput = output.getLogOutput()
    const expectedLogOutput = [
      { binary: intToBinary(8), type: INT_BASE_TYPE },
      { binary: intToBinary(40), type: INT_BASE_TYPE },
      { binary: intToBinary(240), type: INT_BASE_TYPE },
      { binary: intToBinary(32), type: INT_BASE_TYPE },
    ]
    expectLogOutputToBe(logOutput, expectedLogOutput)
  })

  test('sizeof should be static', () => {
    const output = testProgram(
      `
      int main() {
        int x = 3, y[x];
        int a = sizeof(y);
        printfLog(a);
        x = 10;
        int b = sizeof(y);
        printfLog(b);
        return 0;
      }
    `,
    )
    verifyProgramCompleted(output)
    const logOutput = output.getLogOutput()
    const expectedLogOutput = [
      { binary: intToBinary(24), type: INT_BASE_TYPE },
      { binary: intToBinary(24), type: INT_BASE_TYPE },
    ]
    expectLogOutputToBe(logOutput, expectedLogOutput)
  })
})
