import {
  CASTBinaryOperator,
  CASTDeclaration,
  CASTFunctionDefinition,
  CASTNode,
  CASTTypeModifier,
  CASTTypeModifierBaseType,
} from '../typings/programAST'
import { Env, ERecord, EScope, MicroCode, MicroCodeBinaryOperator } from './typings'
import {
  binaryToInt,
  binaryToRawString,
  intToBinary,
  isMicrocode,
  LogicError,
  NotImplementedError,
  parseStringToAST,
  peek,
  pop,
  popStackAndType,
  printBinariesWithTypes,
  push,
  pushStackAndType,
  RuntimeError,
} from './utils'

let A: Array<CASTNode | MicroCode>

let OS: Array<number>
let OSType: Array<Array<CASTTypeModifier>>

let RTS: Array<number>
let RTSType: Array<Array<CASTTypeModifier>>

let FD: Array<CASTFunctionDefinition>
let FDNameLookup: Record<string, number>

let E: Array<EScope>

let LogOutput: Array<string>

const pushOS = (binary: number, type: Array<CASTTypeModifier>) => {
  pushStackAndType(OS, OSType, binary, type)
}

const popOS = (): { binary: number; type: Array<CASTTypeModifier> } => {
  return popStackAndType(OS, OSType)
}

const pushRTS = (binary: number, type: Array<CASTTypeModifier>) => {
  pushStackAndType(RTS, RTSType, binary, type)
}

const popRTS = (): { binary: number; type: Array<CASTTypeModifier> } => {
  return popStackAndType(RTS, RTSType)
}

const getGlobalEnvironmentScope = (e: Env) => {
  return e[0]
}

const lookup = (e: Env, key: string): ERecord | undefined => {
  const currentEnv = peek(e)
  if (!currentEnv) {
    return undefined
  }

  let currentEntry: EScope | undefined = currentEnv
  while (currentEntry) {
    if (key in currentEntry.record) {
      return currentEntry.record[key]
    }
    currentEntry = currentEntry.parent
  }
  return undefined
}

const builtInFunctions = {
  printfLog: function (arg: number) {
    LogOutput.push(binaryToRawString(arg))
  },
}

// AST to Microcode should not touch OS, RTS, E or FD
// It should only insert microcodes that will subsequently change the above structures
const astToMicrocode = (node: CASTNode) => {
  switch (node.type) {
    case 'Program':
      ;[...node.children].reverse().forEach(x => push(A, x))
      return
    case 'FunctionDefinition':
      const fdNode = node as CASTFunctionDefinition
      if (fdNode.identifier.name === 'main')
        push(A, { tag: 'func_call', funcIndex: FD.length, arity: 0, isBuiltin: false })
      push(A, { tag: 'load_func', function: fdNode })
      return
    case 'CompoundStatement': {
      const declarations: CASTDeclaration[] = []
      node.statements.forEach(x => {
        if (x.type === 'DeclarationStatement') {
          x.declarations.forEach(y => declarations.push(y))
        }
      })

      push(A, { tag: 'exit_scope', declarations: declarations })

      const reversedStatements = [...node.statements]
      reversedStatements.reverse()
      reversedStatements.forEach((x, i) => {
        if (i > 0) push(A, { tag: 'pop_os' })
        push(A, x)
      })
      push(A, { tag: 'enter_scope', declarations: declarations })
      return
    }
    case 'ExpressionStatement': {
      ;[...node.expressions].reverse().forEach((x, i) => {
        if (i > 0) push(A, { tag: 'pop_os' })
        push(A, x)
      })
      return
    }
    case 'DeclarationStatement': {
      ;[...node.declarations].reverse().forEach((x, i) => {
        if (i > 0) push(A, { tag: 'pop_os' })
        push(A, x)
      })
      return
    }
    case 'Declaration': {
      push(A, { tag: 'decl', declaration: node })
      return
    }
    case 'Literal': {
      switch (node.subtype) {
        case 'Int':
          push(A, { tag: 'load_int', value: parseInt(node.value) })
          return
        case 'Float':
          push(A, { tag: 'load_float', value: parseFloat(node.value) })
          return
        default:
          throw new NotImplementedError()
      }
      return
    }
    case 'BinaryExpression': {
      push(A, { tag: 'bin_op_auto_promotion', operator: node.operator })
      push(A, node.right)
      push(A, node.left) // Do the left first
      return
    }
    case 'FunctionCallExpression': {
      if (node.expression.type === 'Identifier') {
        const funcName = node.expression.name
        if (funcName in builtInFunctions) {
          push(A, {
            tag: 'builtin_func_call',
            builtinId: funcName,
          })
          return
        } else {
          push(A, { tag: 'func_call', funcIndex: FD.length, arity: 0, isBuiltin: false })
        }
      } else {
        throw new NotImplementedError()
      }

      ;[...node.argumentExpression].reverse().forEach(x => {
        push(A, x)
      })
    }
  }
}

// Microcode are allowed to touch any of the given structures
const microcode = (node: MicroCode) => {
  switch (node.tag) {
    case 'load_func': {
      FD[FD.length] = node.function
      FDNameLookup[node.function.identifier.name] = FD.length
      return
    }
    case 'load_int': {
      pushOS(intToBinary(node.value), [
        { type: 'TypeModifier', subtype: 'BaseType', baseType: 'int' },
      ])
      return
    }
    case 'load_float': {
      pushOS(node.value, [{ type: 'TypeModifier', subtype: 'BaseType', baseType: 'float' }])
      return
    }
    case 'func_call': {
      const functionToCall = FD[node.funcIndex]
      const args = []
      for (let i = 0; i < node.arity; i++) {
        args.push(popRTS())
      }
      push(A, { tag: 'pop_e' })
      push(E, { parent: getGlobalEnvironmentScope(E), record: {} })
      push(A, functionToCall.body)
      return
    }
    case 'pop_os':
      popOS()
      return
    case 'pop_rts':
      popRTS()
      return
    case 'pop_e':
      pop(E)
      return
    case 'enter_scope': {
      const curEnv = pop(E)
      const newEnv: EScope = {
        parent: curEnv,
        record: {},
      }
      node.declarations.forEach(x => {
        newEnv.record[x.identifier.name] = {
          type: x.declarationType,
          address: RTS.length,
          assigned: false,
        }
        pushRTS(0, x.declarationType.typeModifiers)
      })
      push(E, newEnv)
      return
    }
    case 'exit_scope': {
      const curEnv = pop(E)
      if (!curEnv || !curEnv.parent) {
        throw new LogicError('No more scope to pop')
      }
      for (let i = 0; i < node.declarations.length; i++) popRTS()
      push(E, curEnv.parent)
      return
    }
    case 'decl': {
      const name = node.declaration.identifier.name
      const init = node.declaration.init
      const record = lookup(E, name)
      if (!record) {
        throw new LogicError('Memory not allocated for declaration on RTS')
      }

      if (record.assigned) {
        throw new RuntimeError('Invalid redeclaration of ' + name)
      }
      record.assigned = true

      if (init) {
        pushOS(record.address, node.declaration.declarationType.typeModifiers)
        push(A, { tag: 'assgn' })
        push(A, init)
      }
      return
    }
    case 'assgn': {
      const { binary: val, type: valType } = popOS()
      const { binary: addr } = popOS()

      RTS[addr] = val
      pushOS(val, valType)
      return
    }
    case 'bin_op_auto_promotion': {
      const { binary: rightOp, type: rightOpType } = popOS()
      const { binary: leftOp, type: leftOpType } = popOS()

      const leftBaseType = leftOpType[0]
      const rightBaseType = rightOpType[0]
      if (isBaseTypeModifier(leftBaseType) && isBaseTypeModifier(rightBaseType)) {
        let newLeftOp = leftOp
        let newRightOp = rightOp

        const leftBaseTypePriority = getBaseTypePromotionPriority(leftBaseType)
        const rightBaseTypePriority = getBaseTypePromotionPriority(rightBaseType)
        const maxPriority = Math.max(leftBaseTypePriority, rightBaseTypePriority)
        const newType: Array<CASTTypeModifier> = [
          {
            type: 'TypeModifier',
            subtype: 'BaseType',
            baseType: maxPriority === ArithmeticType.Float ? 'float' : 'int',
          },
        ]

        const newOperator = (() => {
          switch (node.operator) {
            case CASTBinaryOperator.Plus:
              return maxPriority === ArithmeticType.Float
                ? MicroCodeBinaryOperator.FloatAddition
                : MicroCodeBinaryOperator.IntAddition
            case CASTBinaryOperator.Minus:
              return maxPriority === ArithmeticType.Float
                ? MicroCodeBinaryOperator.FloatSubtraction
                : MicroCodeBinaryOperator.IntSubtraction
            case CASTBinaryOperator.Multiply:
              return maxPriority === ArithmeticType.Float
                ? MicroCodeBinaryOperator.FloatMultiply
                : MicroCodeBinaryOperator.IntMultiply
            case CASTBinaryOperator.Divide:
              return maxPriority === ArithmeticType.Float
                ? MicroCodeBinaryOperator.FloatDivision
                : MicroCodeBinaryOperator.IntDivision
            default:
              throw new NotImplementedError()
          }
        })()

        if (leftBaseTypePriority < maxPriority) {
          newLeftOp = binaryToInt(newLeftOp)
        }
        if (rightBaseTypePriority < maxPriority) {
          newRightOp = binaryToInt(newRightOp)
        }

        pushOS(newLeftOp, newType)
        pushOS(newRightOp, newType)
        push(A, { tag: 'bin_op', operator: newOperator })
        return
      }

      throw new NotImplementedError()
    }
    case 'bin_op': {
      const { binary: rightOp } = popOS()
      const { binary: leftOp } = popOS()

      if (node.operator === MicroCodeBinaryOperator.IntAddition) {
        const leftOpInt = binaryToInt(leftOp)
        const rightOpInt = binaryToInt(rightOp)
        const result = leftOpInt + rightOpInt
        pushOS(intToBinary(result), [
          { type: 'TypeModifier', subtype: 'BaseType', baseType: 'int' },
        ])
        return
      }
      if (node.operator === MicroCodeBinaryOperator.FloatAddition) {
        const leftOpInt = leftOp
        const rightOpInt = rightOp
        const result = leftOpInt + rightOpInt
        pushOS(result, [{ type: 'TypeModifier', subtype: 'BaseType', baseType: 'float' }])
        return
      }
      throw new NotImplementedError()
    }
    default:
      throw new NotImplementedError()
  }
}

const isBaseTypeModifier = (
  typeModifier: CASTTypeModifier,
): typeModifier is CASTTypeModifierBaseType => {
  return typeModifier.subtype === 'BaseType'
}

enum ArithmeticType {
  Integer = 0,
  Float = 1,
}

const getBaseTypePromotionPriority = (typeModifier: CASTTypeModifierBaseType): ArithmeticType => {
  switch (typeModifier.baseType) {
    case 'int':
    case 'char':
    case 'void':
      return ArithmeticType.Integer
    case 'float':
      return ArithmeticType.Float
  }
}

/* ****************
 * interpreter loop
 * ****************/

const step_limit = 1000000
const printOS = () => {
  printBinariesWithTypes(OS, OSType, 'OS:')
}
const printRTS = () => {
  printBinariesWithTypes(RTS, RTSType, 'RTS:')
}
const printE = () => {
  console.log('E::', E)
}

const printState = () => {
  printOS()
  printRTS()
  printE()
  console.log('')
}

const initializeState = (ast: CASTNode) => {
  A = [ast]
  OS = []
  OSType = []
  RTS = []
  RTSType = []
  FD = []
  FDNameLookup = {}
  E = [{ record: {} }]
  LogOutput = []
}

const execute = (program: string) => {
  const ast = parseStringToAST(program)
  console.log(JSON.stringify(ast))
  initializeState(ast)

  let i = 0
  printState()
  while (i < step_limit) {
    if (A.length === 0) break
    const cmd = A.pop() as CASTNode | MicroCode
    console.log('cmd:', cmd)
    if (isMicrocode(cmd)) {
      microcode(cmd)
    } else {
      astToMicrocode(cmd)
    }
    printState()
    i++
  }
  if (i === step_limit) {
    throw new Error('step limit ' + step_limit + ' exceeded')
  }
  if (OS.length > 1 || OS.length < 1) {
    throw new Error('internal error: stash must be singleton but is: ' + OS)
  }
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
  execute(program)
}

test(
  `
int main() {
  int x = 1 + 2;
  int y = 2 + 3;
  float d = 3.0 + 2;
}
`,
)
