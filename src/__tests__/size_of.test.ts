import { describe, test } from '@jest/globals'

import { WORD_SIZE } from '../constants'
import { testProgram } from '../interpreter/cInterpreter'
import { INT_BASE_TYPE } from '../interpreter/utils/typeUtils'
import { intToBinary } from '../interpreter/utils/utils'
import { expectLogOutputToBe, verifyProgramCompleted } from '../utils/testing'

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
      { binary: intToBinary(WORD_SIZE), type: INT_BASE_TYPE },
      { binary: intToBinary(5 * WORD_SIZE), type: INT_BASE_TYPE },
      { binary: intToBinary(5 * 6 * WORD_SIZE), type: INT_BASE_TYPE },
      { binary: intToBinary(4 * WORD_SIZE), type: INT_BASE_TYPE },
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
      { binary: intToBinary(WORD_SIZE), type: INT_BASE_TYPE },
      { binary: intToBinary(5 * WORD_SIZE), type: INT_BASE_TYPE },
      { binary: intToBinary(5 * 6 * WORD_SIZE), type: INT_BASE_TYPE },
      { binary: intToBinary(4 * WORD_SIZE), type: INT_BASE_TYPE },
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
      { binary: intToBinary(3 * WORD_SIZE), type: INT_BASE_TYPE },
      { binary: intToBinary(3 * WORD_SIZE), type: INT_BASE_TYPE },
    ]
    expectLogOutputToBe(logOutput, expectedLogOutput)
  })
})
