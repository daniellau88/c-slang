import { describe, test } from '@jest/globals'

import { testProgram } from '../interpreter/cInterpreter'
import { FLOAT_BASE_TYPE, INT_BASE_TYPE } from '../interpreter/utils/typeUtils'
import { intToBinary, RuntimeError } from '../interpreter/utils/utils'
import { expectLogOutputToBe, expectThrowError, verifyProgramCompleted } from './utils'

describe('loop', () => {
  test('regular for loop', () => {
    const output = testProgram(
      `
            int main() {
                int x = 0;
                for (int i = 0; i < 10; i++) {
                    x = x + 2;
                }
                printfLog(x);
                return 0;
            }
            `,
    )
    verifyProgramCompleted(output)
    const logOutput = output.getLogOutput()
    const expectedLogOutput = [{ binary: intToBinary(20), type: INT_BASE_TYPE }]
    expectLogOutputToBe(logOutput, expectedLogOutput)
  })

  test('regular while loop', () => {
    const output = testProgram(
      `
            int main() {
                int x = 0;
                while (x < 20) {
                    x = x + 2
                }
                printfLog(x);
                return 0;
            }
            `,
    )
    verifyProgramCompleted(output)
    const logOutput = output.getLogOutput()
    const expectedLogOutput = [{ binary: intToBinary(20), type: INT_BASE_TYPE }]
    expectLogOutputToBe(logOutput, expectedLogOutput)
  })

  test('regular do while loop', () => {
    const output = testProgram(
      `
            int main() {
                int x = 0;
                do {
                    x = x + 2;
                } while(x < 20);
                printfLog(x);
                return 0;
            }
            `,
    )
    verifyProgramCompleted(output)
    const logOutput = output.getLogOutput()
    const expectedLogOutput = [{ binary: intToBinary(20), type: INT_BASE_TYPE }]
    expectLogOutputToBe(logOutput, expectedLogOutput)
  })

  test('for loop with break', () => {
    const output = testProgram(
      `
            int main() {
                int x = 0;
                for (int i = 0; i < 10; i++) {
                    x = x + 2;
                    if (x == 10) {
                        break;
                    }
                }
                printfLog(x);
                return 0;
            }
            `,
    )
    verifyProgramCompleted(output)
    const logOutput = output.getLogOutput()
    const expectedLogOutput = [{ binary: intToBinary(10), type: INT_BASE_TYPE }]
    expectLogOutputToBe(logOutput, expectedLogOutput)
  })

  test('while loop with break', () => {
    const output = testProgram(
      `
            int main() {
                int x = 0;
                while (x < 20) {
                    x = x + 2
                    if (x == 10) {
                        break;
                    }
                }
                printfLog(x);
                return 0;
            }
            `,
    )
    verifyProgramCompleted(output)
    const logOutput = output.getLogOutput()
    const expectedLogOutput = [{ binary: intToBinary(10), type: INT_BASE_TYPE }]
    expectLogOutputToBe(logOutput, expectedLogOutput)
  })

  test('do while loop with break', () => {
      const output = testProgram(
          `
          int main() {
              int x = 0;
              do {
                  x = x + 2;
                  if(x == 10) {
                      break;
                  }
              } while(x < 20);
              printfLog(x);
              return 0;
          }
          `,
      )
      verifyProgramCompleted(output)
      const logOutput = output.getLogOutput()
      const expectedLogOutput = [
          { binary: intToBinary(10), type: INT_BASE_TYPE }
        ]
        expectLogOutputToBe(logOutput, expectedLogOutput)
  })
  test('for loop with continue', () => {
    const output = testProgram(
      `
            int main() {
                int x = 0;
                for (int i = 0; i < 10; i++) {
                    if (i % 2 == 0) {
                        continue;
                    }
                    x = x + 2;
                }
                printfLog(x);
                return 0;
            }
            `,
    )
    verifyProgramCompleted(output)
    const logOutput = output.getLogOutput()
    const expectedLogOutput = [{ binary: intToBinary(10), type: INT_BASE_TYPE }]
    expectLogOutputToBe(logOutput, expectedLogOutput)
  })

  test('while loop with continue', () => {
    const output = testProgram(
      `
            int main() {
                int x = 0;
                int i = 0;
                while (i < 10) {
                    i++;
                    if (i % 2 == 0) {
                        continue;
                    }
                    x = x + 2;
                }
                printfLog(x);
                return 0;
            }
            `,
    )
    verifyProgramCompleted(output)
    const logOutput = output.getLogOutput()
    const expectedLogOutput = [{ binary: intToBinary(10), type: INT_BASE_TYPE }]
    expectLogOutputToBe(logOutput, expectedLogOutput)
  })

  test('do while loop with continue', () => {
      const output = testProgram(
          `
          int main() {
              int x = 0;
              int i = 0;
              do {
                  i++;
                  if (i % 2 == 0) {
                      continue;
                  }
                  x = x + 2;
              } while(x < 10);
              printfLog(x);
              return 0;
          }
          `,
      )
      verifyProgramCompleted(output)
      const logOutput = output.getLogOutput()
      const expectedLogOutput = [
          { binary: intToBinary(10), type: INT_BASE_TYPE }
        ]
        expectLogOutputToBe(logOutput, expectedLogOutput)
  })
})
