import { CASTNode, CASTProgram } from '../typings/programAST'
import { ProgramState } from './programState'
import { BinaryWithType, BuiltinFunctionDefinition, MicroCode } from './typings'
import { astToMicrocode } from './utils/astToMicrocodeUtils'
import { executeMicrocode } from './utils/microcodeUtils'
import { INT_BASE_TYPE, VOID_BASE_TYPE } from './utils/typeUtils'
import { binaryToFormattedString, isMicrocode, parseStringToAST } from './utils/utils'

// Builtin functions must always add a value onto the OS (whether directly or indirectly)
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
}

/* ****************
 * interpreter loop
 * ****************/

const step_limit = 1000000

export const initializeProgramStateWithProgramAST = (programAST: CASTProgram): ProgramState => {
  const programState = new ProgramState()
  programState.initializeAST(programAST)
  programState.initializeBuiltInFunctions(builtinFunctions)
  return programState
}

export function* execute(state: ProgramState, withLog: boolean = false) {
  let i = 0
  if (withLog) state.printState()
  while (i < step_limit) {
    if (state.isAEmpty()) break
    const cmd = state.popA() as CASTNode | MicroCode
    if (withLog) console.log('cmd:', cmd)
    if (isMicrocode(cmd)) {
      yield* executeMicrocode(state, cmd)
    } else {
      yield* astToMicrocode(state, cmd)
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
  console.log("PROGRAM AST")
  console.log(programAST)
  const programState = initializeProgramStateWithProgramAST(programAST)
  const programGenerator = execute(programState, withLog)

  let programStep = programGenerator.next()
  while (!programStep.done) {
    programStep = programGenerator.next()
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
// test(
//   `
//   int main() {
//     int x = 10;
//     if (x == 5) {
//       x++;
//     } else if (x == 3){
//       x--;
//     } else {
//       x = 0;
//     }
//     printfLog(x);
//     return 0;
//   }
// `,
// )

// test(
//   `
//   int main() {
//     int x = 0;
//     while(x != 5) {
//       x++;
//       if (x == 2) {
//         break;
//       }
//     }
//     printfLog(x);
//     return 0;
//   }
//   `
// )
test(
  `
  int main() {
    for(int i = 0; i < 100; i++) {
      if(i == 10) {
        continue;
      }
      printfLog(i);
    }
    return 0;
  }
  `
)
// test(
//   `
//   int main() {
//     int x = 0;
//     do {
//       if(x == 5) {
//         continue;
//       }
//       x++;
//       printfLog(x);
//     }
//     while(x < 10);
//     printfLog(x);
//     return 0;
//   }
//   `
// )