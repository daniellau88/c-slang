import { describe, test } from '@jest/globals'

import { testProgram } from '../interpreter/cInterpreter'
import { FLOAT_BASE_TYPE, incrementPointerDepth, INT_BASE_TYPE } from '../interpreter/typeUtils'
import { intToBinary, RuntimeError } from '../interpreter/utils'
import { expectLogOutputToBe, expectThrowError, verifyProgramCompleted } from './utils'

describe('arithmetic', () => {
  test('integer binary arithmetic', () => {
    const output = testProgram(
      `
      int main() {
        int x = 10;
        int y = 3;
        int a = x + y;
        int b = x - y;
        int c = x * y;
        int d = x / y;
        int e = x % y;
        printfLog(x, y, a, b, c, d, e);
        return 0;
      }
    `,
    )

    verifyProgramCompleted(output)
    const logOutput = output.getLogOutput()
    const expectedLogOutput = [
      { binary: intToBinary(10), type: INT_BASE_TYPE },
      { binary: intToBinary(3), type: INT_BASE_TYPE },
      { binary: intToBinary(13), type: INT_BASE_TYPE },
      { binary: intToBinary(7), type: INT_BASE_TYPE },
      { binary: intToBinary(30), type: INT_BASE_TYPE },
      { binary: intToBinary(3), type: INT_BASE_TYPE },
      { binary: intToBinary(1), type: INT_BASE_TYPE },
    ]
    expectLogOutputToBe(logOutput, expectedLogOutput)
  })

  test('integer binary arithmetic bitwise', () => {
    const output = testProgram(
      `
      int main() {
        int x = 10;
        int y = 3;
        int a = x | y;
        int b = x ^ y;
        int c = x & y;
        int d = x << y;
        int e = x >> y;
        printfLog(x, y, a, b, c, d, e);
        return 0;
      }
    `,
    )

    verifyProgramCompleted(output)
    const logOutput = output.getLogOutput()
    const expectedLogOutput = [
      { binary: intToBinary(10), type: INT_BASE_TYPE },
      { binary: intToBinary(3), type: INT_BASE_TYPE },
      { binary: intToBinary(11), type: INT_BASE_TYPE },
      { binary: intToBinary(9), type: INT_BASE_TYPE },
      { binary: intToBinary(2), type: INT_BASE_TYPE },
      { binary: intToBinary(80), type: INT_BASE_TYPE },
      { binary: intToBinary(1), type: INT_BASE_TYPE },
    ]
    expectLogOutputToBe(logOutput, expectedLogOutput)
  })

  test('integer relational', () => {
    const output = testProgram(
      `
      int main() {
        int x = 10;
        int y = 3;
        int a = x == y;
        int b = x != y;
        int c = x > y;
        int d = x < y;
        int e = x >= y;
        int f = x <= y;
        printfLog(x, y, a, b, c, d, e, f);
        return 0;
      }
    `,
    )

    verifyProgramCompleted(output)
    const logOutput = output.getLogOutput()
    const expectedLogOutput = [
      { binary: intToBinary(10), type: INT_BASE_TYPE },
      { binary: intToBinary(3), type: INT_BASE_TYPE },
      { binary: intToBinary(0), type: INT_BASE_TYPE },
      { binary: intToBinary(1), type: INT_BASE_TYPE },
      { binary: intToBinary(1), type: INT_BASE_TYPE },
      { binary: intToBinary(0), type: INT_BASE_TYPE },
      { binary: intToBinary(1), type: INT_BASE_TYPE },
      { binary: intToBinary(0), type: INT_BASE_TYPE },
    ]
    expectLogOutputToBe(logOutput, expectedLogOutput)
  })

  test('integer unary skip dereference', () => {
    const output = testProgram(
      `
      int main() {
        int x = 10;
        int a = x++;
        int b = ++x;
        int c = x--;
        int d = --x;
        printfLog(x, a, b, c, d);
        return 0;
      }
    `,
    )

    verifyProgramCompleted(output)
    const logOutput = output.getLogOutput()
    const expectedLogOutput = [
      { binary: intToBinary(10), type: INT_BASE_TYPE },
      { binary: intToBinary(10), type: INT_BASE_TYPE },
      { binary: intToBinary(12), type: INT_BASE_TYPE },
      { binary: intToBinary(12), type: INT_BASE_TYPE },
      { binary: intToBinary(10), type: INT_BASE_TYPE },
    ]
    expectLogOutputToBe(logOutput, expectedLogOutput)
  })

  test('integer unary with dereference', () => {
    const output = testProgram(
      `
      int main() {
        int x = -10;
        int y = 8;
        int a = +x;
        int b = +y;
        int c = -x;
        int d = -y;
        int e = ~y;
        int f = !y;
        printfLog(x, y, a, b, c, d, e, f);
        return 0;
      }
    `,
    )

    verifyProgramCompleted(output)
    const logOutput = output.getLogOutput()
    const expectedLogOutput = [
      { binary: intToBinary(-10), type: INT_BASE_TYPE },
      { binary: intToBinary(8), type: INT_BASE_TYPE },
      { binary: intToBinary(10), type: INT_BASE_TYPE },
      { binary: intToBinary(8), type: INT_BASE_TYPE },
      { binary: intToBinary(10), type: INT_BASE_TYPE },
      { binary: intToBinary(-8), type: INT_BASE_TYPE },
      { binary: intToBinary(-9), type: INT_BASE_TYPE },
      { binary: intToBinary(0), type: INT_BASE_TYPE },
    ]
    expectLogOutputToBe(logOutput, expectedLogOutput)
  })

  test('integer division by 0', () => {
    const program = () =>
      testProgram(
        `
      int main() {
        int x = 5 / 0;
        return 0;
      }
    `,
      )
    expectThrowError(program, RuntimeError, 'Cannot divide by 0')
  })

  test('float arithmetic', () => {
    const output = testProgram(
      `
      int main() {
        float x = 10.5;
        float y = 3.0;
        float a = x + y;
        float b = x - y;
        float c = x * y;
        float d = x / y;
        printfLog(x, y, a, b, c, d);
        return 0;
      }
    `,
    )
    verifyProgramCompleted(output)
    const logOutput = output.getLogOutput()
    const expectedLogOutput = [
      { binary: 10.5, type: FLOAT_BASE_TYPE },
      { binary: 3, type: FLOAT_BASE_TYPE },
      { binary: 13.5, type: FLOAT_BASE_TYPE },
      { binary: 7.5, type: FLOAT_BASE_TYPE },
      { binary: 31.5, type: FLOAT_BASE_TYPE },
      { binary: 3.5, type: FLOAT_BASE_TYPE },
    ]
    expectLogOutputToBe(logOutput, expectedLogOutput)
  })

  test('float relational', () => {
    const output = testProgram(
      `
      int main() {
        float x = 10.3;
        float y = 12.5;
        int a = x == y;
        int b = x != y;
        int c = x > y;
        int d = x < y;
        int e = x >= y;
        int f = x <= y;
        printfLog(x, y, a, b, c, d, e, f);
        return 0;
      }
    `,
    )

    verifyProgramCompleted(output)
    const logOutput = output.getLogOutput()
    const expectedLogOutput = [
      { binary: 10.3, type: FLOAT_BASE_TYPE },
      { binary: 12.5, type: FLOAT_BASE_TYPE },
      { binary: intToBinary(0), type: INT_BASE_TYPE },
      { binary: intToBinary(1), type: INT_BASE_TYPE },
      { binary: intToBinary(0), type: INT_BASE_TYPE },
      { binary: intToBinary(1), type: INT_BASE_TYPE },
      { binary: intToBinary(0), type: INT_BASE_TYPE },
      { binary: intToBinary(1), type: INT_BASE_TYPE },
    ]
    expectLogOutputToBe(logOutput, expectedLogOutput)
  })

  test('float bitwise', () => {
    const program = () =>
      testProgram(
        `
      int main() {
        float x = 5.0 & 3.0;
        return 0;
      }
    `,
      )
    expectThrowError(program, RuntimeError, 'Operation not supported for floating point numbers')
  })

  test('float division by 0', () => {
    const program = () =>
      testProgram(
        `
      int main() {
        float x = 5.0 / 0;
        return 0;
      }
    `,
      )
    expectThrowError(program, RuntimeError, 'Cannot divide by 0')
  })

  test('unary address', () => {
    const output = testProgram(
      `
      int main() {
        int x = -10;
        int* a = &x;
        int b = *a + 1;
        float c = *a + 2;
        printfLog(x, a, b, c);
        return 0;
      }
    `,
    )

    verifyProgramCompleted(output)
    const logOutput = output.getLogOutput()
    const expectedLogOutput = [
      { binary: intToBinary(-10), type: INT_BASE_TYPE },
      { binary: 1, type: incrementPointerDepth(INT_BASE_TYPE) }, // Might need to change address if structure changes
      { binary: intToBinary(-9), type: INT_BASE_TYPE },
      { binary: -8, type: FLOAT_BASE_TYPE },
    ]
    expectLogOutputToBe(logOutput, expectedLogOutput)
  })

  test('unary address dereference constant', () => {
    const output = testProgram(
      `
      int main() {
        int* a = 1;
        float c = *a;
        printfLog(a, c);
        return 0;
      }
    `,
    )

    verifyProgramCompleted(output)
    const logOutput = output.getLogOutput()
    const expectedLogOutput = [
      { binary: 1, type: incrementPointerDepth(INT_BASE_TYPE) },
      { binary: 1072693248, type: FLOAT_BASE_TYPE }, // Might need to change address if structure changes
    ]
    expectLogOutputToBe(logOutput, expectedLogOutput)
  })

  test('address arithmetic', () => {
    const output = testProgram(
      `
      int main() {
        int a[5];
        int* b = &a + 2;
        int c = *b;
        printfLog(a, b, c);
        return 0;
      }
    `,
    )

    verifyProgramCompleted(output)
    const logOutput = output.getLogOutput()
    const expectedLogOutput = [
      { binary: intToBinary(0), type: INT_BASE_TYPE },
      { binary: 2, type: incrementPointerDepth(INT_BASE_TYPE) }, // Might need to change address if structure changes
      { binary: intToBinary(0), type: INT_BASE_TYPE },
    ]
    expectLogOutputToBe(logOutput, expectedLogOutput)
  })

  test('unary address dereference invalid address', () => {
    const program = () =>
      testProgram(
        `
        int main() {
          int* a = 5;
          float c = *a;
          printfLog(a, c);
          return 0;
        }
      `,
      )
    expectThrowError(program, RuntimeError, 'Invalid memory access')
  })
})
