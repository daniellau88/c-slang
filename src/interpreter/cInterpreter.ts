import {
  CASTDeclaration,
  CASTExpression,
  CASTFunctionDefinition,
  CASTNode,
  ProgramType,
} from '../typings/programAST'
import { ProgramState } from './programState'
import {
  ArithmeticType,
  CASTUnaryOperatorWithoutDerefence,
  convertBinaryOperatorToMicroCodeBinaryOperator,
  decrementPointerDepth,
  doBinaryOperation,
  doUnaryOperationWithDereference,
  doUnaryOperationWithoutDereference,
  FLOAT_BASE_TYPE,
  getBaseTypePromotionPriority,
  incrementPointerDepth,
  INT_BASE_TYPE,
  isBaseType,
  isPointer,
  isTypeEquivalent,
  POINTER_BASE_TYPE,
  VOID_BASE_TYPE,
} from './typeUtils'
import { BinaryWithType, BuiltinFunctionDefinition, ERecord, EScope, MicroCode } from './typings'
import {
  binaryToFormattedString,
  binaryToInt,
  intToBinary,
  isMicrocode,
  LogicError,
  NotImplementedError,
  parseStringToAST,
  RuntimeError,
  shouldDerefExpression,
} from './utils'

const builtinFunctions: Record<string, BuiltinFunctionDefinition> = {
  printfLog: {
    func: function (state: ProgramState, ...arg: Array<BinaryWithType>) {
      state.pushLogOutput(...arg)
    },
    returnProgType: VOID_BASE_TYPE,
    arity: -1,
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
      ;[...node.expressions].reverse().forEach(x => {
        state.pushA({ tag: 'pop_os' })
        state.pushA(x)
      })
      return
    }
    case 'DeclarationStatement': {
      ;[...node.declarations].reverse().forEach(x => {
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
    case 'AssignmentExpression': {
      state.pushA({ tag: 'assgn' })
      state.pushA(node.right)
      state.pushA(node.left)
      return
    }
    case 'BinaryExpression': {
      state.pushA({ tag: 'bin_op_auto_promotion', operator: node.operator })
      if (shouldDerefExpression(node.right)) state.pushA({ tag: 'deref' })
      state.pushA(node.right)
      if (shouldDerefExpression(node.left)) state.pushA({ tag: 'deref' })
      state.pushA(node.left) // Do the left first
      return
    }
    case 'ConditionalExpression': {
      state.pushA({ tag: 'conditional_op', ifFalse: node.ifFalse, ifTrue: node.ifTrue })
      if (shouldDerefExpression(node.predicate)) state.pushA({ tag: 'deref' })
      state.pushA(node.predicate)
      return
    }
    case 'UnaryExpression': {
      state.pushA({ tag: 'unary_op', operator: node.operator })
      const shouldDeref = shouldDerefExpression(node.expression)
      const isSkipDerefenceOperator = CASTUnaryOperatorWithoutDerefence.includes(node.operator)
      if (!shouldDeref && isSkipDerefenceOperator) {
        throw new RuntimeError('Cannot dereference non-address')
      }
      if (shouldDeref && !isSkipDerefenceOperator) {
        state.pushA({ tag: 'deref' })
      }
      state.pushA(node.expression)
      return
    }
    case 'Identifier': {
      state.pushA({ tag: 'load_var', name: node.name })
      return
    }
    case 'FunctionCallExpression': {
      state.pushA({ tag: 'func_apply', arity: node.argumentExpression.length })
      // Insert from left to right into OS (i.e. evaluate left first)
      node.argumentExpression.forEach(x => {
        if (shouldDerefExpression(x)) state.pushA({ tag: 'deref' })
        state.pushA(x)
      })
      state.pushA(node.expression)
      return
    }
    case 'ReturnStatement': {
      const hasExpression = Boolean(node.expression)
      state.pushA({ tag: 'return', withExpression: hasExpression })

      if (node.expression) {
        if (shouldDerefExpression(node.expression)) state.pushA({ tag: 'deref' })
        state.pushA(node.expression)
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
      state.pushFD({
        subtype: 'func',
        arity: node.function.parameters.length,
        identifier: node.function.identifier,
        parameters: node.function.parameters,
        body: node.function.body,
        returnProgType: node.function.returnType.typeModifiers,
      })
      state.addRecordToGlobalE(funcName, {
        subtype: 'func',
        funcIndex: newIndex,
      })
      return
    }
    case 'load_int': {
      state.pushOS(intToBinary(node.value), INT_BASE_TYPE)
      return
    }
    case 'load_float': {
      state.pushOS(node.value, FLOAT_BASE_TYPE)
      return
    }
    case 'load_var': {
      const record = state.lookupE(node.name)
      if (!record) {
        throw new RuntimeError('Variable ' + node.name + ' not declared')
      }

      switch (record.subtype) {
        case 'func': {
          const fd = state.getFDAtIndex(record.funcIndex)
          state.pushOS(record.funcIndex, incrementPointerDepth(fd.returnProgType))
          return
        }
        case 'variable': {
          if (!record.assigned) {
            throw new RuntimeError('Variable ' + node.name + ' not declared yet')
          }
          const address = record.address
          state.pushOS(address, incrementPointerDepth(record.variableType.typeModifiers))
          return
        }
      }
      return
    }
    case 'deref': {
      const { binary, type } = state.popOS()
      if (type[0].subtype !== 'Pointer') throw new Error('Argument given is not a pointer')
      state.pushOS(state.getRTSAtIndex(binary), decrementPointerDepth(type))
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

      if (functionToCall.arity !== -1 && functionToCall.arity !== args.length) {
        throw new RuntimeError('Wrong number of arguments given for function')
      }

      if (functionToCall.subtype === 'builtin_func') {
        const retVal = functionToCall.func(state, ...args)

        state.pushOS(retVal, incrementPointerDepth(functionToCall.returnProgType))
        return
      }

      const previousRTSStart = state.getRTSStart()
      state.setRTSStart(state.getRTSLength())
      state.pushRTS(previousRTSStart, POINTER_BASE_TYPE)

      const funcParameters = functionToCall.parameters
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
      state.pushE({ parent: state.getGlobalE(), record: newRecord })
      state.pushA({ tag: 'exit_func' })
      state.pushA(functionToCall.body)
      return
    }
    case 'exit_func':
      if (!state.getReturnRegister().assigned) {
        throw new RuntimeError('Return function not called')
      }

      state.shrinkRTSToIndex(state.getRTSStart())

      const previousRTSStart = state.popRTS()
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

      state.pushOS(
        record.address,
        incrementPointerDepth(node.declaration.declarationType.typeModifiers),
      )

      if (init) {
        state.pushA({ tag: 'assgn' })
        if (shouldDerefExpression(init)) state.pushA({ tag: 'deref' })
        state.pushA(init)
      }
      return
    }
    case 'assgn': {
      const { binary: val, type: valType } = state.popOS()
      const { binary: addr, type: addrType } = state.popOS()
      const newType = decrementPointerDepth(addrType)

      let newValue = val // TODO: type checking
      if (!isTypeEquivalent(valType, newType)) {
        if (valType.length === 0) {
        } // If value's type is unknown, use address's type
        else {
          if (isBaseType(newType) && isBaseType(valType)) {
            const newArithmeticType = getBaseTypePromotionPriority(newType)
            const valArithmeticType = getBaseTypePromotionPriority(valType)
            const maxPriority = Math.max(newArithmeticType, valArithmeticType)

            if (valArithmeticType < maxPriority) {
              // Promote value if smaller
              newValue = binaryToInt(val)
            }

            if (newArithmeticType < maxPriority) {
              throw new RuntimeError('Cannot perform lossy assignment')
            }
          } else if (isPointer(addrType) && isBaseType(valType)) {
            // Pointers are float in nature
            const valArithmeticType = getBaseTypePromotionPriority(valType)
            if (valArithmeticType === ArithmeticType.Integer) {
              newValue = binaryToInt(val)
            }
          }
        }
      }

      state.setRTSAtIndex(addr, newValue, newType)
      state.pushOS(newValue, newType)
      return
    }
    case 'bin_op_auto_promotion': {
      const { binary: rightOp, type: rightOpType } = state.popOS()
      const { binary: leftOp, type: leftOpType } = state.popOS()

      if (isBaseType(leftOpType) && isBaseType(rightOpType)) {
        let newLeftOp = leftOp
        let newRightOp = rightOp

        const leftBaseTypePriority = getBaseTypePromotionPriority(leftOpType)
        const rightBaseTypePriority = getBaseTypePromotionPriority(rightOpType)
        const maxPriority = Math.max(leftBaseTypePriority, rightBaseTypePriority)
        const newType: ProgramType =
          maxPriority === ArithmeticType.Float ? FLOAT_BASE_TYPE : INT_BASE_TYPE

        const newOperator = convertBinaryOperatorToMicroCodeBinaryOperator(
          maxPriority,
          node.operator,
        )

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
      const rightOpWithType = state.popOS()
      const leftOpWithType = state.popOS()

      const result = doBinaryOperation(leftOpWithType, rightOpWithType, node.operator)
      state.pushOS(result.binary, result.type)
      return
    }
    case 'conditional_op': {
      const predicate = state.popOS()
      const expressionToPush = predicate.binary === 0 ? node.ifFalse : node.ifTrue
      if (shouldDerefExpression(expressionToPush)) state.pushA({ tag: 'deref' })
      state.pushA(expressionToPush)
      return
    }
    case 'unary_op': {
      const operand = state.popOS()
      let result: BinaryWithType
      const isSkipDerefenceOperator = CASTUnaryOperatorWithoutDerefence.includes(node.operator)
      if (isSkipDerefenceOperator) {
        result = doUnaryOperationWithoutDereference(operand, node.operator, state)
      } else {
        result = doUnaryOperationWithDereference(operand, node.operator, state)
      }
      state.pushOS(result.binary, result.type)
      return
    }
    case 'return': {
      state.setReturnRegisterAssigned(true)
      if (node.withExpression) {
        const returnValueAndType = state.popOS()
        state.setReturnRegisterBinary(returnValueAndType)
      }
      let nextInstruction = state.peekA()
      while (nextInstruction !== undefined) {
        if (isMicrocode(nextInstruction) && nextInstruction.tag === 'exit_func') {
          break
        }
        state.popA()
        nextInstruction = state.peekA()
      }
      if (nextInstruction === undefined) {
        throw new LogicError('Microcode exit function not found')
      }
      return
    }
    default:
      throw new NotImplementedError()
  }
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
      microcode(state, cmd)
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
//     int b = *x;
//     float c = *x;
//     printfLog(x, a, b, c);
//     return 0;
//   }
// `,
// )
