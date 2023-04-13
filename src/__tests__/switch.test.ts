import { describe, test } from '@jest/globals'

import { testProgram } from '../interpreter/cInterpreter'
import { INT_BASE_TYPE } from '../interpreter/utils/typeUtils'
import { intToBinary } from '../interpreter/utils/utils'
import { expectLogOutputToBe, verifyProgramCompleted } from '../utils/testing'

describe('switch', () => {
  test('switch case without break', () => {
    const output = testProgram(
      `
      int main() {
        int x = 10;
        int i = 0;
        for (; i < x; i++)
          switch(x)
          {
            case 1:
              i = i + 2;
            case 9:
              i = i - 1;
            default:
              i = i + 1;
          }
        printfLog(i);
        return 0;
      }
      `,
    )
    verifyProgramCompleted(output)
    const logOutput = output.getLogOutput()
    const expectedLogOutput = [{ binary: intToBinary(10), type: INT_BASE_TYPE }]
    expectLogOutputToBe(logOutput, expectedLogOutput)
  })

  test('switch case without break', () => {
    const output = testProgram(
      `
      int main() {
        int x = 10;
        int i = 0;
        for (; i < x; i++)
          switch(x)
          {
            case 1:
              i = i + 2;
              break;
            case 9:
              i = i - 1;
              break;
            default:
              i = i + 1;
          }
        printfLog(i);
        return 0;
      }
      `,
    )
    verifyProgramCompleted(output)
    const logOutput = output.getLogOutput()
    const expectedLogOutput = [{ binary: intToBinary(10), type: INT_BASE_TYPE }]
    expectLogOutputToBe(logOutput, expectedLogOutput)
  })

  test('switch case with return', () => {
    const output = testProgram(
      `
      int a1(int a) {
        switch(a) {
          case 1:
            return 2;
          case 2:
            return 3;
        }
      }

      int main() {
        int x = a1(2);
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
})
