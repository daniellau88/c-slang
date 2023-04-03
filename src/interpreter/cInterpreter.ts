import { Context, CustomBuiltIns } from '../types'
import { CASTProgram } from '../typings/programAST'
import { ProgramState } from './programState'
import { BinaryWithType, BuiltinFunctionDefinition } from './typings'
import { astToMicrocode } from './utils/astToMicrocodeUtils'
import { executeMicrocode } from './utils/microcodeUtils'
import { incrementPointerDepth, INT_BASE_TYPE, VOID_BASE_TYPE } from './utils/typeUtils'
import { binaryToFormattedString, isMicrocode, parseStringToAST } from './utils/utils'

// Builtin functions must always add a value onto the OS (whether directly or indirectly)
export const defaultExternalBuiltinFunctions: CustomBuiltIns = {
  printfLog: () => {},
}

export const builtinFunctions: Record<string, BuiltinFunctionDefinition> = {
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
  malloc: {
    func: function (state: ProgramState, ...arg: Array<BinaryWithType>) {
      state.pushA({ tag: 'malloc_op', size: arg[0] })
    },
    returnProgType: incrementPointerDepth(VOID_BASE_TYPE),
    arity: 1,
  },
  free: {
    func: function (state: ProgramState, ...arg: Array<BinaryWithType>) {
      state.pushA({ tag: 'free_op', address: arg[0] })
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
  newPrintfLog.func = (state: ProgramState, ...arg: Array<any>) => {
    if (context) externalBuiltinFunctions.printfLog(context.externalContext, arg)
    builtinFunctions.printfLog.func(state, ...arg)
  }
  programState.defineBuiltInFunction('printfLog', newPrintfLog)

  programState.defineBuiltInFunction('sizeof', builtinFunctions.sizeof)
  programState.defineBuiltInFunction('malloc', builtinFunctions.malloc)
  programState.defineBuiltInFunction('free', builtinFunctions.free)
}

/* ****************
 * interpreter loop
 * ****************/

const step_limit = 1000000

export function* execute(state: ProgramState, withLog: boolean = false) {
  let i = 0
  if (withLog) state.printState()
  while (i < step_limit) {
    if (state.isAEmpty()) break
    const cmd = state.popA()
    if (withLog) console.log('cmd:', cmd)
    if (isMicrocode(cmd)) {
      yield executeMicrocode(state, cmd)
    } else {
      yield astToMicrocode(state, cmd)
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
    if (withLog && e.explain) console.error(e.explain())
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
