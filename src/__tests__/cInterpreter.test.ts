import { describe, expect, test } from '@jest/globals'

import { testProgram } from '../interpreter/cInterpreter'
import { ProgramState } from '../interpreter/programState'
import { intToBinary } from '../interpreter/utils'
import { CASTTypeModifier } from '../typings/programAST'

const intBaseType: Array<CASTTypeModifier> = [
  { type: 'TypeModifier', subtype: 'BaseType', baseType: 'int' },
]

const verifyProgramCompleted = (output: ProgramState) => {
  expect(output.getRTSLength()).toBe(0)
  expect(output.getOSLength()).toBe(1)
  const retVal = output.peekOS()
  expect(retVal?.binary).toBe(intToBinary(0))
  expect(retVal?.type).toStrictEqual(intBaseType)
  expect(output.getRTSStart()).toBe(-1)
}

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
  })
})
