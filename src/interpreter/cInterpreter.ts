import { CASTNode } from '../typings/programAST'
import { ProgramState } from './programState'
import { BinaryWithType, BuiltinFunctionDefinition, MicroCode } from './typings'
import { astToMicrocode } from './utils/astToMicrocodeUtils'
import { executeMicrocode } from './utils/microcodeUtils'
import { INT_BASE_TYPE, VOID_BASE_TYPE } from './utils/typeUtils'
import { binaryToFormattedString, isMicrocode, parseStringToAST } from './utils/utils'

// Builtin functions must always add a value onto the OS (whether directly or indirectly)
const builtinFunctions: Record<string, BuiltinFunctionDefinition> = {
  printfLog: {
    func: function (state: ProgramState, ...arg: Array<BinaryWithType>) {
      state.pushLogOutput(...arg)
      state.pushOS(0, VOID_BASE_TYPE)
    },
    returnProgType: VOID_BASE_TYPE,
    arity: -1,
  },
  sizeof: {
    func: function (state: ProgramState, ...arg: Array<BinaryWithType>) {
      state.pushA({ tag: 'size_of_op', typeModifiers: arg[0].type })
    },
    returnProgType: INT_BASE_TYPE,
    arity: 1,
  },
}

/* ****************
 * interpreter loop
 * ****************/

const step_limit = 1000000

const execute = (program: string, withLog: boolean = false): ProgramState => {
  const ast = parseStringToAST(program)
  if (withLog) console.log(JSON.stringify(ast))
  const state = new ProgramState(ast, builtinFunctions)

  let i = 0
  if (withLog) state.printState()
  while (i < step_limit) {
    if (state.isAEmpty()) break
    const cmd = state.popA() as CASTNode | MicroCode
    if (withLog) console.log('cmd:', cmd)
    if (isMicrocode(cmd)) {
      executeMicrocode(state, cmd)
    } else {
      astToMicrocode(state, cmd)
    }
    if (withLog) state.printState()
    i++
  }

  if (i === step_limit) {
    throw new Error('step limit ' + step_limit + ' exceeded')
  }

  return state
}

/* *******
 * testing
 * *******/

const test = (program: string) => {
  console.log(
    '',
    `
    
****************
Test case: ` +
      program +
      '\n',
  )
  const programState = execute(program, true)

  console.log('Log outputs:')
  programState.getLogOutput().forEach(x => {
    console.log(binaryToFormattedString(x.binary, x.type))
  })
}

export const testProgram = (program: string): ProgramState => {
  return execute(program)
}

// Uncomment where necessary to see the logs of running a program

// test(
//   `
//   int main() {
//     int x = -10;
//     int* a = &x;
//     int b = *a + 1;
//     float c = *a + 2;
//     printfLog(x, a, b, c);
//     return 0;
//   }
// `,
// )
