import { describe, test } from '@jest/globals'

import { WORD_SIZE } from '../constants'
import { testProgram } from '../interpreter/cInterpreter'
import {
  CHAR_BASE_TYPE,
  incrementPointerDepth,
  INT_BASE_TYPE,
} from '../interpreter/utils/typeUtils'
import { intToBinary } from '../interpreter/utils/utils'
import { rawCode } from '../utils/parser'
import { expectLogOutputToBe, verifyProgramCompleted } from '../utils/testing'

describe('string', () => {
  test('string literal', () => {
    const output = testProgram(
      `
      int main() {
        char a[5] = "abcd";
        for (int i = 0; i < 5; i++) {
          printfLog(a[i]);
        }
        printfLog(sizeof(a));

        char b[3] = "abcd";
        for (int i = 0; i < 3; i++) {
          printfLog(b[i]);
        }
        printfLog(sizeof(b));

        char c[6] = "abcd";
        for (int i = 0; i < 6; i++) {
          printfLog(c[i]);
        }
        printfLog(sizeof(c));
        return 0;
      }
      `,
    )

    verifyProgramCompleted(output)
    const logOutput = output.getLogOutput()
    const expectedLogOutput = [
      { binary: intToBinary(97), type: CHAR_BASE_TYPE },
      { binary: intToBinary(98), type: CHAR_BASE_TYPE },
      { binary: intToBinary(99), type: CHAR_BASE_TYPE },
      { binary: intToBinary(100), type: CHAR_BASE_TYPE },
      { binary: intToBinary(0), type: CHAR_BASE_TYPE },
      { binary: intToBinary(5 * WORD_SIZE), type: INT_BASE_TYPE },
      { binary: intToBinary(97), type: CHAR_BASE_TYPE },
      { binary: intToBinary(98), type: CHAR_BASE_TYPE },
      { binary: intToBinary(99), type: CHAR_BASE_TYPE },
      { binary: intToBinary(3 * WORD_SIZE), type: INT_BASE_TYPE },
      { binary: intToBinary(97), type: CHAR_BASE_TYPE },
      { binary: intToBinary(98), type: CHAR_BASE_TYPE },
      { binary: intToBinary(99), type: CHAR_BASE_TYPE },
      { binary: intToBinary(100), type: CHAR_BASE_TYPE },
      { binary: intToBinary(0), type: CHAR_BASE_TYPE },
      { binary: intToBinary(0), type: CHAR_BASE_TYPE },
      { binary: intToBinary(6 * WORD_SIZE), type: INT_BASE_TYPE },
    ]
    expectLogOutputToBe(logOutput, expectedLogOutput)
  })

  test('array of string literal', () => {
    const output = testProgram(
      `
      int main() {
        char* a[3] = {"ab", "cd", "efgh"};
        for (int i = 0; i < 3; i++) {
          int cur_index = 0;
          while (a[i][cur_index] != 0) {
            printfLog(a[i][cur_index]);
            cur_index++;
          }
        }
        printfLog(sizeof(a));

        char b[3][3] = {"abcdef", "gh", "efgh"};
        for (int i = 0; i < 3; i++) {
          for (int j = 0; j < 3; j++) {
            printfLog(b[i][j]);
          }
        }
        printfLog(sizeof(b));
        return 0;
      }
      `,
    )

    verifyProgramCompleted(output)
    const logOutput = output.getLogOutput()
    const expectedLogOutput = [
      { binary: intToBinary(97), type: CHAR_BASE_TYPE },
      { binary: intToBinary(98), type: CHAR_BASE_TYPE },
      { binary: intToBinary(99), type: CHAR_BASE_TYPE },
      { binary: intToBinary(100), type: CHAR_BASE_TYPE },
      { binary: intToBinary(101), type: CHAR_BASE_TYPE },
      { binary: intToBinary(102), type: CHAR_BASE_TYPE },
      { binary: intToBinary(103), type: CHAR_BASE_TYPE },
      { binary: intToBinary(104), type: CHAR_BASE_TYPE },
      { binary: intToBinary(3 * WORD_SIZE), type: INT_BASE_TYPE },
      { binary: intToBinary(97), type: CHAR_BASE_TYPE },
      { binary: intToBinary(98), type: CHAR_BASE_TYPE },
      { binary: intToBinary(99), type: CHAR_BASE_TYPE },
      { binary: intToBinary(103), type: CHAR_BASE_TYPE },
      { binary: intToBinary(104), type: CHAR_BASE_TYPE },
      { binary: intToBinary(0), type: CHAR_BASE_TYPE },
      { binary: intToBinary(101), type: CHAR_BASE_TYPE },
      { binary: intToBinary(102), type: CHAR_BASE_TYPE },
      { binary: intToBinary(103), type: CHAR_BASE_TYPE },
      { binary: intToBinary(9 * WORD_SIZE), type: INT_BASE_TYPE },
    ]
    expectLogOutputToBe(logOutput, expectedLogOutput)
  })

  test('string literal unknown length', () => {
    const output = testProgram(
      `
      int main() {
        char b[] = "abcde";
        for (int i = 0; i < 6; i++) {
          printfLog(b[i]);
        }
        printfLog(sizeof(b));
        return 0;
      }
      `,
    )

    verifyProgramCompleted(output)
    const logOutput = output.getLogOutput()
    const expectedLogOutput = [
      { binary: intToBinary(97), type: CHAR_BASE_TYPE },
      { binary: intToBinary(98), type: CHAR_BASE_TYPE },
      { binary: intToBinary(99), type: CHAR_BASE_TYPE },
      { binary: intToBinary(100), type: CHAR_BASE_TYPE },
      { binary: intToBinary(101), type: CHAR_BASE_TYPE },
      { binary: intToBinary(0), type: CHAR_BASE_TYPE },
      { binary: intToBinary(6 * WORD_SIZE), type: INT_BASE_TYPE },
    ]
    expectLogOutputToBe(logOutput, expectedLogOutput)
  })

  test('reassign string pointer', () => {
    const output = testProgram(
      `
      int main() {
        int* x = "abcd";
        printfLog(x, *x);
        x = "fghi";
        printfLog(x, *x);
        return 0;
      }
      `,
    )

    verifyProgramCompleted(output)
    const logOutput = output.getLogOutput()
    const expectedLogOutput = [
      { binary: intToBinary(2), type: incrementPointerDepth(INT_BASE_TYPE) },
      { binary: intToBinary(97), type: INT_BASE_TYPE },
      { binary: intToBinary(7), type: incrementPointerDepth(INT_BASE_TYPE) },
      { binary: intToBinary(102), type: INT_BASE_TYPE },
    ]
    expectLogOutputToBe(logOutput, expectedLogOutput)
  })

  test('type mismatch string literal', () => {
    const output = testProgram(
      `
      int main() {
        int x = { "abcd" };
        int* y = "abcd";
        int* z = { "abcd", 1 };
        printfLog(x, y, *z);
        return 0;
      }
      `,
    )

    verifyProgramCompleted(output)
    const logOutput = output.getLogOutput()
    const expectedLogOutput = [
      { binary: intToBinary(2), type: INT_BASE_TYPE },
      { binary: intToBinary(4), type: incrementPointerDepth(INT_BASE_TYPE) },
      { binary: intToBinary(97), type: INT_BASE_TYPE },
    ]
    expectLogOutputToBe(logOutput, expectedLogOutput)
  })

  test('string literal auto convert to pointer', () => {
    const output = testProgram(
      `
      int main() {
        int* x = "abcd" + 1;
        printfLog(x, *x);
        return 0;
      }
      `,
    )

    verifyProgramCompleted(output)
    const logOutput = output.getLogOutput()
    const expectedLogOutput = [
      { binary: intToBinary(2), type: incrementPointerDepth(INT_BASE_TYPE) },
      { binary: intToBinary(98), type: INT_BASE_TYPE },
    ]
    expectLogOutputToBe(logOutput, expectedLogOutput)
  })

  test('strings as argument', () => {
    const output = testProgram(
      rawCode`
      int strlen(char *str) {
        int len = 0;
        while (*str != '\0') {
          len++;
          str++;
        }
        return len;
      }

      int main() {
        printfLog(strlen("abcd"));
        return 0;
      }
      `,
    )

    verifyProgramCompleted(output)
    const logOutput = output.getLogOutput()
    const expectedLogOutput = [{ binary: intToBinary(4), type: INT_BASE_TYPE }]
    expectLogOutputToBe(logOutput, expectedLogOutput)
  })
})
