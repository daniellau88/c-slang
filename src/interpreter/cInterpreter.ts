import {
  CASTBinaryOperator,
  CASTDeclaration,
  CASTFunctionDefinition,
  CASTNode,
  CASTTypeModifier,
  CASTTypeModifierBaseType,
} from '../typings/programAST'
import { ProgramState } from './programState'
import { BinaryWithType, ERecord, EScope, MicroCode, MicroCodeBinaryOperator } from './typings'
import {
  binaryToInt,
  intToBinary,
  isMicrocode,
  LogicError,
  NotImplementedError,
  parseStringToAST,
  RuntimeError,
} from './utils'

const builtinFunctions = {
  printfLog: function (state: ProgramState, ...arg: Array<BinaryWithType>) {
    state.pushLogOutput(...arg)
  },
}

// AST to Microcode should not touch OS, RTS, E or FD
// It should only insert microcodes that will subsequently change the above structures
const astToMicrocode = (state: ProgramState, node: CASTNode) => {
  switch (node.type) {
    case 'Program':
      ;[...node.children].reverse().forEach(x => state.pushA(x))
      return
    case 'FunctionDefinition':
      const fdNode = node as CASTFunctionDefinition
      if (fdNode.identifier.name === 'main') {
        state.pushA({ tag: 'func_apply', arity: 0 })
        state.pushA(fdNode.identifier)
      }
      state.pushA({ tag: 'load_func', function: fdNode })
      return
    case 'CompoundStatement': {
      const declarations: CASTDeclaration[] = []
      node.statements.forEach(x => {
        if (x.type === 'DeclarationStatement') {
          x.declarations.forEach(y => declarations.push(y))
        }
      })

      state.pushA({ tag: 'exit_scope', declarations: declarations })

      const reversedStatements = [...node.statements]
      reversedStatements.reverse()
      reversedStatements.forEach(x => {
        state.pushA(x)
        // Statements will pop OS upon ending
      })
      state.pushA({ tag: 'enter_scope', declarations: declarations })
      return
    }
    case 'ExpressionStatement': {
      ;[...node.expressions].reverse().forEach((x, i) => {
        state.pushA({ tag: 'pop_os' })
        state.pushA(x)
      })
      return
    }
    case 'DeclarationStatement': {
      ;[...node.declarations].reverse().forEach((x, i) => {
        state.pushA({ tag: 'pop_os' })
        state.pushA(x)
      })
      return
    }
    case 'Declaration': {
      state.pushA({ tag: 'decl', declaration: node })
      return
    }
    case 'Literal': {
      switch (node.subtype) {
        case 'Int':
          state.pushA({ tag: 'load_int', value: parseInt(node.value) })
          return
        case 'Float':
          state.pushA({ tag: 'load_float', value: parseFloat(node.value) })
          return
        default:
          throw new NotImplementedError()
      }
      return
    }
    case 'BinaryExpression': {
      state.pushA({ tag: 'bin_op_auto_promotion', operator: node.operator })
      if (node.right.type === 'Identifier') state.pushA({ tag: 'deref' })
      state.pushA(node.right)
      if (node.left.type === 'Identifier') state.pushA({ tag: 'deref' })
      state.pushA(node.left) // Do the left first
      return
    }
    case 'Identifier': {
      state.pushA({ tag: 'load_var', name: node.name })
      return
    }
    case 'FunctionCallExpression': {
      state.pushA({ tag: 'func_apply', arity: node.argumentExpression.length })
      const reversedArgumentExpression = [...node.argumentExpression]
      reversedArgumentExpression.reverse()
      reversedArgumentExpression.forEach(x => {
        if (x.type === 'Identifier') state.pushA({ tag: 'deref' })
        state.pushA(x)
      })
      state.pushA(node.expression)
      return
    }
    case 'ReturnStatement': {
      const hasExpression = Boolean(node.expression)
      state.pushA({ tag: 'return', withExpression: hasExpression })

      if (node.expression) {
        state.pushA(node.expression)
        if (node.expression.type === 'Identifier') state.pushA({ tag: 'deref' })
      }
    }
  }
}

// Microcode are allowed to touch any of the given structures
const microcode = (state: ProgramState, node: MicroCode) => {
  switch (node.tag) {
    case 'load_func': {
      const newIndex = state.getFDLength()
      const funcName = node.function.identifier.name
      if (state.hasKeyGlobalE(funcName)) {
        throw new RuntimeError('Function ' + funcName + ' has already been defined')
      }
      state.pushFD({ subtype: 'func', funcDef: node.function })
      state.addRecordToGlobalE(funcName, {
        subtype: 'func',
        funcIndex: newIndex,
      })
      return
    }
    case 'load_int': {
      state.pushOS(intToBinary(node.value), [
        { type: 'TypeModifier', subtype: 'BaseType', baseType: 'int' },
      ])
      return
    }
    case 'load_float': {
      state.pushOS(node.value, [{ type: 'TypeModifier', subtype: 'BaseType', baseType: 'float' }])
      return
    }
    case 'load_var': {
      const record = state.lookupE(node.name)
      if (!record) {
        throw new RuntimeError('Variable ' + node.name + ' not declared')
      }

      switch (record.subtype) {
        case 'func': {
          state.pushOS(record.funcIndex, [
            { type: 'TypeModifier', subtype: 'Pointer', pointerDepth: 1 },
          ])
          return
        }
        case 'variable': {
          if (!record.assigned) {
            throw new RuntimeError('Variable ' + node.name + ' not declared yet')
          }
          const address = record.address
          state.pushOS(address, [
            { type: 'TypeModifier', subtype: 'Pointer', pointerDepth: 1 },
            ...record.variableType.typeModifiers,
          ])
          return
        }
      }
      return
    }
    case 'deref': {
      const { binary, type } = state.popOS()
      if (type[0].subtype !== 'Pointer') throw new Error('Argument given is not a pointer')
      state.pushOS(state.getRTSAtIndex(binary).binary, type.splice(1))
      return
    }
    case 'func_apply': {
      const args: Array<BinaryWithType> = []
      for (let i = 0; i < node.arity; i++) {
        args.push(state.popOS())
      }
      args.reverse()

      const { binary: funcId } = state.popOS()
      const functionToCall = state.getFDAtIndex(funcId)

      if (
        functionToCall.subtype === 'func' &&
        functionToCall.funcDef.parameters.length !== args.length
      ) {
        throw new RuntimeError('Wrong number of arguments given for function')
      }

      if (functionToCall.subtype === 'builtin_func') {
        const retVal = functionToCall.func(state, ...args)

        state.pushOS(retVal, [{ type: 'TypeModifier', subtype: 'BaseType', baseType: 'int' }])
        return
      }

      const previousRTSStart = state.getRTSStart()
      state.setRTSStart(state.getRTSLength())
      state.pushRTS(previousRTSStart, [
        { type: 'TypeModifier', subtype: 'Pointer', pointerDepth: 1 },
      ])

      const funcParameters = functionToCall.funcDef.parameters
      const newRecord: Record<string, ERecord> = {}
      for (let i = 0; i < args.length; i++) {
        const rtsIndex = state.getRTSLength()
        const parameter = funcParameters[i]
        const identifierName = parameter.identifier?.name
        if (identifierName)
          newRecord[identifierName] = {
            subtype: 'variable',
            address: rtsIndex,
            variableType: parameter.paramType,
            assigned: true,
          }
        state.pushRTS(args[i].binary, args[i].type)
      }
      state.pushE({ parent: state.getGlobalE(), record: {} })
      state.pushA({ tag: 'exit_func' })
      state.pushA(functionToCall.funcDef.body)
      return
    }
    case 'exit_func':
      if (!state.getReturnRegister().assigned) {
        throw new RuntimeError('Return function not called')
      }

      state.shrinkRTSToIndex(state.getRTSStart())
      state.shrinkRTSToIndex(state.getRTSStart())

      const { binary: previousRTSStart } = state.popRTS()
      state.setRTSStart(previousRTSStart)
      state.popE()

      state.setReturnRegisterAssigned(false)
      const binaryWithType = state.getReturnRegister().binary
      if (binaryWithType !== undefined) {
        state.pushOS(binaryWithType.binary, binaryWithType.type)
      }
      return
    case 'pop_os':
      state.popOS()
      return
    case 'pop_rts':
      state.popRTS()
      return
    case 'pop_e':
      state.popE()
      return
    case 'enter_scope': {
      const curEnv = state.popE()
      const newEnv: EScope = {
        parent: curEnv,
        record: {},
      }
      node.declarations.forEach(x => {
        newEnv.record[x.identifier.name] = {
          subtype: 'variable',
          variableType: x.declarationType,
          address: state.getRTSLength(),
          assigned: false,
        }
        state.pushRTS(0, x.declarationType.typeModifiers)
      })
      state.pushE(newEnv)
      return
    }
    case 'exit_scope': {
      const curEnv = state.popE()
      if (!curEnv || !curEnv.parent) {
        throw new LogicError('No more scope to pop')
      }
      for (let i = 0; i < node.declarations.length; i++) state.popRTS()
      state.pushE(curEnv.parent)
      return
    }
    case 'decl': {
      const name = node.declaration.identifier.name
      const init = node.declaration.init
      const record = state.lookupE(name)
      if (!record) {
        throw new LogicError('Memory not allocated for declaration on RTS')
      }

      if (record.subtype === 'func') {
        throw new LogicError('Function cannot be redeclared')
      }

      if (record.assigned) {
        throw new RuntimeError('Invalid redeclaration of ' + name)
      }
      record.assigned = true

      if (init) {
        state.pushOS(record.address, node.declaration.declarationType.typeModifiers)
        state.pushA({ tag: 'assgn' })
        if (init.type === 'Identifier') state.pushA({ tag: 'deref' })
        state.pushA(init)
      }
      return
    }
    case 'assgn': {
      const { binary: val, type: valType } = state.popOS()
      const { binary: addr } = state.popOS() // TODO: type checking

      state.setRTSAtIndex(addr, val, valType)
      state.pushOS(val, valType)
      return
    }
    case 'bin_op_auto_promotion': {
      const { binary: rightOp, type: rightOpType } = state.popOS()
      const { binary: leftOp, type: leftOpType } = state.popOS()

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

        state.pushOS(newLeftOp, newType)
        state.pushOS(newRightOp, newType)
        state.pushA({ tag: 'bin_op', operator: newOperator })
        return
      }

      throw new NotImplementedError()
    }
    case 'bin_op': {
      const { binary: rightOp } = state.popOS()
      const { binary: leftOp } = state.popOS()

      if (node.operator === MicroCodeBinaryOperator.IntAddition) {
        const leftOpInt = binaryToInt(leftOp)
        const rightOpInt = binaryToInt(rightOp)
        const result = leftOpInt + rightOpInt
        state.pushOS(intToBinary(result), [
          { type: 'TypeModifier', subtype: 'BaseType', baseType: 'int' },
        ])
        return
      }
      if (node.operator === MicroCodeBinaryOperator.FloatAddition) {
        const leftOpInt = leftOp
        const rightOpInt = rightOp
        const result = leftOpInt + rightOpInt
        state.pushOS(result, [{ type: 'TypeModifier', subtype: 'BaseType', baseType: 'float' }])
        return
      }
      throw new NotImplementedError()
    }
    case 'return': {
      state.setReturnRegisterAssigned(true)
      if (node.withExpression) {
        const returnValueAndType = state.popOS()
        state.setReturnRegisterBinary(returnValueAndType)
      }
      return
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

const execute = (program: string): ProgramState => {
  const ast = parseStringToAST(program)
  console.log(JSON.stringify(ast))
  const state = new ProgramState(ast, builtinFunctions)

  let i = 0
  state.printState()
  while (i < step_limit) {
    if (state.isAEmpty()) break
    const cmd = state.popA() as CASTNode | MicroCode
    console.log('cmd:', cmd)
    if (isMicrocode(cmd)) {
      microcode(state, cmd)
    } else {
      astToMicrocode(state, cmd)
    }
    state.printState()
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
  execute(program)
}

export const testProgram = (program: string): ProgramState => {
  return execute(program)
}

test(
  `
int main() {
  int x = 1 + 2;
  int y = 2 + 3;
  float d = 3.0 + 2;
  printfLog(x, y, d);
  return 0;
}
`,
)
