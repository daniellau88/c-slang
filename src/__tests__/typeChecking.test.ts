import { CannotPerformLossyConversion } from '../errors/errors'
import { testProgram } from '../interpreter/cInterpreter'
import { CHAR_BASE_TYPE, FLOAT_BASE_TYPE, INT_BASE_TYPE } from '../interpreter/utils/typeUtils'
import { intToBinary } from '../interpreter/utils/utils'
import { expectLogOutputToBe, expectThrowError, verifyProgramCompleted } from '../utils/testing'

describe('type checking', () => {
  test('simple types', () => {
    const output = testProgram(
      `
        int main() {
          int a = 10;
          int b = 10.5;
          float c = 5.5;
          float d = 6;
          char e = 97;
          char f = 97.5;
          char g = a != b? 'a' : 'b';
          printfLog(a, b, c, d, e, f, g);
          return 0;
        }
        `,
    )
    verifyProgramCompleted(output)
    const logOutput = output.getLogOutput()
    const expectedLogOutput = [
      { binary: intToBinary(10), type: INT_BASE_TYPE },
      { binary: intToBinary(10), type: INT_BASE_TYPE },
      { binary: 5.5, type: FLOAT_BASE_TYPE },
      { binary: 6, type: FLOAT_BASE_TYPE },
      { binary: intToBinary(97), type: CHAR_BASE_TYPE },
      { binary: intToBinary(97), type: CHAR_BASE_TYPE },
      { binary: intToBinary(98), type: CHAR_BASE_TYPE },
    ]
    expectLogOutputToBe(logOutput, expectedLogOutput)
  })
  test('function implicit casting 1', () => {
    const output = testProgram(
      `
        int test(int a, float b, char c) {
          printfLog(a, b, c);
          return 0;
        }
        
        int main() {
          test(5.5, 7, 97);
          return 0;
        }
        `,
    )
    verifyProgramCompleted(output)
    const logOutput = output.getLogOutput()
    const expectedLogOutput = [
      { binary: intToBinary(5), type: INT_BASE_TYPE },
      { binary: 7, type: FLOAT_BASE_TYPE },
      { binary: intToBinary(97), type: CHAR_BASE_TYPE },
    ]
    expectLogOutputToBe(logOutput, expectedLogOutput)
  })
  test('function implicit casting 2', () => {
    const output = testProgram(
      `
        int test(int a, float b, char c) {
            printfLog(a, b, c);
            return 0;
          }
        float square(float a) {
          return a * a;
        }
        
        int main() {
          test(square(5), square(7), 49);
          return 0;
        }
        `,
    )
    verifyProgramCompleted(output)
    const logOutput = output.getLogOutput()
    const expectedLogOutput = [
      { binary: intToBinary(25), type: INT_BASE_TYPE },
      { binary: 49, type: FLOAT_BASE_TYPE },
      { binary: intToBinary(49), type: CHAR_BASE_TYPE },
    ]
    expectLogOutputToBe(logOutput, expectedLogOutput)
  })
  test('float to pointer error', () => {
    const program = () =>
      testProgram(
        `
        int main() {
          int *a = 1.5;
          return 0;
        }
        `,
      )
    expectThrowError(
      program,
      CannotPerformLossyConversion,
      'Cannot perform lossy conversion from float to int pointer.',
    )
  })
  test('float to array error', () => {
    const program = () =>
      testProgram(
        `
        int main() {
          int a[3] = 1.5;
          return 0;
        }
        `,
      )
    expectThrowError(
      program,
      CannotPerformLossyConversion,
      'Cannot perform lossy conversion from float to array.',
    )
  })
  test('pointer to array error', () => {
    const program = () =>
      testProgram(
        `
        int main() {
          int *a = malloc(sizeof(int));
          int b[3] = a;
          return 0;
        }
        `,
      )
    expectThrowError(
      program,
      CannotPerformLossyConversion,
      'Cannot perform lossy conversion from int pointer to array.',
    )
  })
  test('array to pointer', () => {
    const output = testProgram(
      `
          int main() {
            int a[3] = {1, 2, 3};
            int *b = a;
            printfLog(b[0], b[1], b[2]);
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
    ]
    expectLogOutputToBe(logOutput, expectedLogOutput)
  })
  test('implicit array to pointer in function', () => {
    const output = testProgram(
      `
          void test(int* a) {
            printfLog(a[0], a[1]);
          }
          int main() {
            int a[2] = {1, 2};
            test(a);
            return 0;
          }
        `,
    )
    verifyProgramCompleted(output)
    const logOutput = output.getLogOutput()
    const expectedLogOutput = [
      { binary: intToBinary(1), type: INT_BASE_TYPE },
      { binary: intToBinary(2), type: INT_BASE_TYPE },
    ]
    expectLogOutputToBe(logOutput, expectedLogOutput)
  })
  test('implicit array in function return value', () => {
    const output = testProgram(
      `
          float test() {
            return 3;
          }
          int main() {
            printfLog(test());
            return 0;
          }
        `,
    )
    verifyProgramCompleted(output)
    const logOutput = output.getLogOutput()
    const expectedLogOutput = [{ binary: 3, type: FLOAT_BASE_TYPE }]
    expectLogOutputToBe(logOutput, expectedLogOutput)
  })
})
