import { RuntimeSourceError } from '../errors/runtimeSourceError'
import { TimeoutError } from '../errors/timeoutErrors'
import { Context, CustomBuiltIns } from '../types'
import { CASTNode, CASTProgram } from '../typings/programAST'
import { ProgramState } from './programState'
import { AgendaNode, BinaryWithType, BuiltinFunctionDefinition } from './typings'
import { astToMicrocode } from './utils/astToMicrocodeUtils'
import { errorHandler } from './utils/errorHandlerUtils'
import { executeMicrocode } from './utils/microcodeUtils'
import {
  getStaticSizeFromProgramType,
  incrementPointerDepth,
  INT_BASE_TYPE,
  VOID_BASE_TYPE,
} from './utils/typeUtils'
import { binaryToFormattedString, intToBinary, isMicrocode, parseStringToAST } from './utils/utils'

// Builtin functions must always add a value onto the OS (whether directly or indirectly)
export const defaultExternalBuiltinFunctions: CustomBuiltIns = {
  printfLog: () => {},
}

export const builtinFunctions: Record<string, BuiltinFunctionDefinition> = {
  printfLog: {
    func: function (state: ProgramState, args: Array<BinaryWithType>) {
      state.pushLogOutput(...args)
      state.pushOS(0, VOID_BASE_TYPE)
    },
    returnProgType: VOID_BASE_TYPE,
    arity: -1,
  },
  sizeof: {
    func: function (state: ProgramState, args: Array<BinaryWithType>, node: CASTNode) {
      const size = getStaticSizeFromProgramType(args[0].type)
      state.pushOS(intToBinary(size), INT_BASE_TYPE)
    },
    returnProgType: INT_BASE_TYPE,
    arity: 1,
  },
  malloc: {
    func: function (state: ProgramState, args: Array<BinaryWithType>, node: CASTNode) {
      state.pushA({ tag: 'malloc_op', size: args[0], node: node })
    },
    returnProgType: incrementPointerDepth(VOID_BASE_TYPE),
    arity: 1,
  },
  free: {
    func: function (state: ProgramState, args: Array<BinaryWithType>, node: CASTNode) {
      state.pushA({ tag: 'free_op', address: args[0], node: node })
    },
    returnProgType: VOID_BASE_TYPE,
    arity: 1,
  },
}

export const importBuiltins = (
  programState: ProgramState,
  externalBuiltinFunctions: CustomBuiltIns,
  context?: Context,
) => {
  const newPrintfLog = {
    ...builtinFunctions.printfLog,
  }
  newPrintfLog.func = (state: ProgramState, args: Array<BinaryWithType>, node: CASTNode) => {
    if (context) externalBuiltinFunctions.printfLog(context.externalContext, args, node)
    builtinFunctions.printfLog.func(state, args, node)
  }
  programState.defineBuiltInFunction('printfLog', newPrintfLog)

  programState.defineBuiltInFunction('sizeof', builtinFunctions.sizeof)
  programState.defineBuiltInFunction('malloc', builtinFunctions.malloc)
  programState.defineBuiltInFunction('free', builtinFunctions.free)
}

/* ****************
 * interpreter loop
 * ****************/

const step_limit = 1e8 // About 1 minute of execution time

export function* execute(state: ProgramState, withLog: boolean = false) {
  let i = 0
  if (withLog) state.printState()
  let lastCmd: AgendaNode | undefined
  while (i < step_limit) {
    if (state.isAEmpty()) break
    const cmd = state.popA()
    if (withLog) console.log('cmd:', cmd)
    try {
      if (isMicrocode(cmd)) {
        yield executeMicrocode(state, cmd)
      } else {
        yield astToMicrocode(state, cmd)
      }
    } catch (e) {
      const node = isMicrocode(cmd) ? cmd.node : cmd
      errorHandler(e, node)
    }
    if (withLog) state.printState()
    lastCmd = cmd
    i++
  }

  if (i === step_limit && lastCmd !== undefined) {
    throw new TimeoutError(isMicrocode(lastCmd) ? lastCmd.node : lastCmd)
  }

  return state
}

/* *******
 * testing
 * *******/

export const testProgram = (program: string, withLog: boolean = false): ProgramState => {
  const programAST = parseStringToAST(program) as CASTProgram
  const programState = new ProgramState()

  programState.initializeAST(programAST)
  importBuiltins(programState, defaultExternalBuiltinFunctions)

  const programGenerator = execute(programState, withLog)

  try {
    let programStep = programGenerator.next()
    while (!programStep.done) {
      programStep = programGenerator.next()
    }
  } catch (e) {
    if (withLog && e instanceof RuntimeSourceError) console.error(e.explain())
    throw e
  }
  return programState
}

const test = (program: string) => {
  console.log(
    '',
    `
    
****************
Test case: ` +
      program +
      '\n',
  )
  const programState = testProgram(program, true)

  console.log('Log outputs:')
  programState.getLogOutput().forEach(x => {
    console.log(binaryToFormattedString(x.binary, x.type))
  })
}

// Uncomment where necessary to see the logs of running a program
// test (`
// int main() {
//   int* a = 10;
//   float* b = a;
//   printfLog(*b);
//   return 0;
// }
// `)
// test (`
// int main() {
//   int a = 10;
//   float b = 20;
//   int *c = &b;
//   printfLog(*c);
//   return 0;
// }
// `)
test(`
  int test(int a, float b, char c) {
    printfLog(a, b, c);
    return 0;
  }
  int square(int a) {
    return a * a;
  }

  int main() {
    test(square(5), square(7), 49);
    return 0;
  }
`)
// test(`
//   int main() {
//     int a = "hello";
//     printfLog(a);
//     return 0;
//   }
// `)
