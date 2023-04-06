import { describe, test } from '@jest/globals'

import { testProgram } from '../interpreter/cInterpreter'
import {
  CHAR_BASE_TYPE,
  FLOAT_BASE_TYPE,
  incrementPointerDepth,
  INT_BASE_TYPE,
} from '../interpreter/utils/typeUtils'
import { intToBinary } from '../interpreter/utils/utils'
import { expectLogOutputToBe, verifyProgramCompleted } from '../utils/testing'

describe('casting', () => {
  test('cast base type', () => {
    const output = testProgram(
      `
      int main() {
        int a = 2;
        char b = (char) 2;

        float c = 5.0 / 3;
        int d = (int) c;
        char e = (char) c;
        int f = (int) (-c);

        int g = 5 / 3;
        float h = (float) g;

        printfLog(a, b, c, d, e, f, g, h);

        return 0;
      }
    `,
    )
    verifyProgramCompleted(output)
    const logOutput = output.getLogOutput()
    const expectedLogOutput = [
      { binary: intToBinary(2), type: INT_BASE_TYPE },
      { binary: intToBinary(2), type: CHAR_BASE_TYPE },
      { binary: 5 / 3, type: FLOAT_BASE_TYPE },
      { binary: intToBinary(1), type: INT_BASE_TYPE },
      { binary: intToBinary(1), type: CHAR_BASE_TYPE },
      { binary: intToBinary(-1), type: INT_BASE_TYPE },
      { binary: intToBinary(1), type: INT_BASE_TYPE },
      { binary: 1, type: FLOAT_BASE_TYPE },
    ]
    expectLogOutputToBe(logOutput, expectedLogOutput)
  })

  test('cast pointers', () => {
    const output = testProgram(
      `
      int main() {
        char* x = "abc";
        int* y = (int*) x;
        for (int i = 0; i < 4; i++) {
          printfLog(x[i], y[i]);
        }
        printfLog(x, y);

        int* z = (int*) 5.5;
        printfLog(z);
        return 0;
      }
    `,
    )
    verifyProgramCompleted(output)
    const logOutput = output.getLogOutput()
    const expectedLogOutput = [
      { binary: intToBinary(97), type: CHAR_BASE_TYPE },
      { binary: intToBinary(97), type: INT_BASE_TYPE },
      { binary: intToBinary(98), type: CHAR_BASE_TYPE },
      { binary: intToBinary(98), type: INT_BASE_TYPE },
      { binary: intToBinary(99), type: CHAR_BASE_TYPE },
      { binary: intToBinary(99), type: INT_BASE_TYPE },
      { binary: intToBinary(0), type: CHAR_BASE_TYPE },
      { binary: intToBinary(0), type: INT_BASE_TYPE },
      { binary: intToBinary(2), type: incrementPointerDepth(CHAR_BASE_TYPE) },
      { binary: intToBinary(2), type: incrementPointerDepth(INT_BASE_TYPE) },
      { binary: intToBinary(5), type: incrementPointerDepth(INT_BASE_TYPE) },
    ]
    expectLogOutputToBe(logOutput, expectedLogOutput)
  })
})
