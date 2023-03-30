import {
  CASTBinaryOperator,
  CASTExpression,
  CASTTypeModifier,
  ProgramType,
} from '../../typings/programAST'
import { ProgramState } from '../programState'
import { BinaryWithType, MicroCode, MicroCodeBinaryOperator } from '../typings'
import {
  ArithmeticType,
  CASTUnaryOperatorWithoutDerefence,
  convertBinaryOperatorToMicroCodeBinaryOperator,
  decrementPointerDepth,
  doBinaryOperation,
  doUnaryOperationWithDereference,
  doUnaryOperationWithoutDereference,
  FLOAT_BASE_TYPE,
  getArrayItemsType,
  getBaseTypePromotionPriority,
  incrementPointerDepth,
  INT_BASE_TYPE,
  isBaseType,
  isPointer,
  isTypeEquivalent,
  VOID_BASE_TYPE,
} from './typeUtils'
import {
  binaryToInt,
  intToBinary,
  isMicrocode,
  LogicError,
  NotImplementedError,
  RuntimeError,
  shouldDerefExpression,
} from './utils'

export const wordSize = 8

// Microcode are allowed to touch any of the given structures
export function* executeMicrocode(state: ProgramState, node: MicroCode) {
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
          state.pushOS(intToBinary(record.funcIndex), incrementPointerDepth(fd.returnProgType))
          return
        }
        case 'variable': {
          const address = record.address
          state.pushOS(intToBinary(address), incrementPointerDepth(record.variableType))
          return
        }
      }
      return
    }
    case 'deref': {
      const { binary, type } = state.popOS()
      if (type[0].subtype !== 'Pointer') throw new Error('Argument given is not a pointer')
      const newType = decrementPointerDepth(type)
      if (newType[0].subtype === 'Array') {
        state.pushOS(binary, newType)
        return
      }
      state.pushOS(state.getRTSAtIndex(binaryToInt(binary)), newType)
      return
    }
    case 'func_apply': {
      const args: Array<BinaryWithType> = []
      for (let i = 0; i < node.arity; i++) {
        args.push(state.popOS())
      }
      args.reverse()

      const { binary: funcId } = state.popOS()
      const functionToCall = state.getFDAtIndex(binaryToInt(funcId))

      if (functionToCall.arity !== -1 && functionToCall.arity !== args.length) {
        throw new RuntimeError('Wrong number of arguments given for function')
      }

      if (functionToCall.subtype === 'builtin_func') {
        functionToCall.func(state, ...args)
        return
      }

      state.saveAndUpdateRTSStartOntoStack()

      state.extendFunctionE()
      state.extendScopeE()

      const funcParameters = functionToCall.parameters
      for (let i = 0; i < args.length; i++) {
        const rtsIndex = state.getRTSLength()
        const parameter = funcParameters[i]
        const identifierName = parameter.identifier?.name
        if (identifierName)
          state.addRecordToE(identifierName, {
            subtype: 'variable',
            address: rtsIndex,
            variableType: parameter.paramType.typeModifiers,
          })
        state.pushRTS(args[i].binary, args[i].type)
      }

      state.pushA({ tag: 'exit_func' })
      ;[...functionToCall.body.statements].reverse().forEach(x => state.pushA(x))
      return
    }
    case 'exit_func':
      if (!state.getReturnRegister().assigned) {
        throw new RuntimeError('Return function not called')
      }

      state.shrinkRTSToIndex(state.getRTSStart())

      state.popAndRestoreRTSStartOntoStack()
      state.popFunctionE()

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
      state.saveAndUpdateRTSStartOntoStack()
      state.extendScopeE()
      return
    }
    case 'exit_scope': {
      state.popScopeE()
      state.shrinkRTSToIndex(state.getRTSStart())
      state.popAndRestoreRTSStartOntoStack()
      return
    }
    case 'decl': {
      const name = node.declaration.identifier.name
      const init = node.declaration.init
      const record = state.lookupE(name)
      if (record) {
        throw new RuntimeError('Invalid redeclaration of ' + name)
      }

      if (init) {
        state.pushA({ tag: 'assgn' })
        if (shouldDerefExpression(init)) state.pushA({ tag: 'deref' })
        state.pushA(init)
      }

      state.pushA({
        tag: 'decl_eval_type_modifier_i',
        oldTypeModifiers: node.declaration.declarationType.typeModifiers,
        newTypeModifiers: [],
        currentIndex: -1,
        name: name,
      })
      return
    }
    case 'decl_eval_type_modifier_i': {
      const curIndex = node.currentIndex
      const oldTypeModifiers = node.oldTypeModifiers
      const newTypeModifiers = node.newTypeModifiers
      if (curIndex !== -1) {
        const currentModifier = node.oldTypeModifiers[curIndex]
        if (currentModifier.subtype !== 'Array') {
          throw new LogicError('Subtype should be array')
        }

        const { binary, type } = state.popOS() // Assert type should be int
        if (!isTypeEquivalent(type, INT_BASE_TYPE)) {
          throw new RuntimeError('Array size is not integer')
        }

        const intValue = binaryToInt(binary)
        if (intValue < 0) {
          throw new RuntimeError('Array size cannot be negative')
        }

        const currentModifierCopy: CASTTypeModifier = {
          ...currentModifier,
          size: { type: 'Literal', subtype: 'Int', value: intValue.toString() },
        }
        newTypeModifiers.push(currentModifierCopy)
      }

      for (let i = curIndex + 1; i < oldTypeModifiers.length; i++) {
        const currentModifier = oldTypeModifiers[i]
        if (currentModifier.subtype == 'Array' && currentModifier.size !== undefined) {
          state.pushA({ ...node, currentIndex: i })
          if (shouldDerefExpression(currentModifier.size)) state.pushA({ tag: 'deref' })
          state.pushA(currentModifier.size)
          return
        }
        newTypeModifiers.push(currentModifier)
      }

      state.pushA({ tag: 'decl_alloc_mem', typeModifiers: newTypeModifiers, name: node.name })
      state.pushA({ tag: 'size_of_op', typeModifiers: newTypeModifiers })
      return
    }
    case 'decl_alloc_mem': {
      const { binary: allocationSizeBinary, type } = state.popOS()
      const allocationSize = binaryToInt(allocationSizeBinary)
      const currentRTSAddress = state.getRTSLength()
      state.allocateSizeOnRTS(allocationSize / wordSize, node.typeModifiers)

      state.addRecordToE(node.name, {
        subtype: 'variable',
        address: currentRTSAddress,
        variableType: node.typeModifiers,
      })

      state.pushOS(intToBinary(currentRTSAddress), incrementPointerDepth(node.typeModifiers))
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
          }
        }
      }

      state.setRTSAtIndex(binaryToInt(addr), newValue, newType)
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
      } else if (
        isPointer(leftOpType) &&
        isBaseType(rightOpType) &&
        getBaseTypePromotionPriority(rightOpType) === ArithmeticType.Integer
      ) {
        state.pushOS(leftOp, leftOpType)
        state.pushOS(rightOp, rightOpType)
        const microcodeOperator = (() => {
          switch (node.operator) {
            case CASTBinaryOperator.Plus:
              return MicroCodeBinaryOperator.PointerAddition
            case CASTBinaryOperator.Minus:
              return MicroCodeBinaryOperator.PointerSubtraction
            default:
              throw new RuntimeError('Cannot perform operation between pointer and integer')
          }
        })()
        state.pushA({ tag: 'bin_op', operator: microcodeOperator })
        state.pushA({ tag: 'bin_op', operator: MicroCodeBinaryOperator.IntDivision })
        state.pushA({ tag: 'load_int', value: wordSize })
        state.pushA({ tag: 'bin_op', operator: MicroCodeBinaryOperator.IntMultiply })
        state.pushA({ tag: 'size_of_op', typeModifiers: decrementPointerDepth(leftOpType) })
        return
      }

      throw new RuntimeError(
        'Cannot perform operation between type ' + leftOpType[0].type + ' and ',
      )
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
    case 'size_of_op': {
      const typeModifiers = node.typeModifiers
      const expressions: Array<CASTExpression | MicroCode> = []
      for (let i = 0; i < typeModifiers.length; i++) {
        const typeModifier = typeModifiers[i]
        let shouldBreak = false
        switch (typeModifier.subtype) {
          case 'Array': {
            if (typeModifier.size === undefined) throw new RuntimeError('Array size is not defined')
            expressions.push(typeModifier.size)
            break
          }
          case 'BaseType': {
            expressions.push({ tag: 'load_int', value: 8 })
            shouldBreak = true
            break
          }
          case 'Pointer': {
            expressions.push({ tag: 'load_int', value: 8 })
            shouldBreak = true
            break
          }
          case 'Parameters': {
            throw new RuntimeError('Cannot get size of function')
          }
        }
        if (shouldBreak) break
      }
      expressions.forEach((x, i) => {
        if (i !== expressions.length - 1)
          state.pushA({ tag: 'bin_op', operator: MicroCodeBinaryOperator.IntMultiply })
        if (!isMicrocode(x) && shouldDerefExpression(x)) state.pushA({ tag: 'deref' })
        state.pushA(x)
      })
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
      } else {
        state.setReturnRegisterBinary({ binary: 0, type: VOID_BASE_TYPE }) // TODO: Fix void base type
      }
      let nextInstruction = state.peekA()
      while (nextInstruction !== undefined) {
        if (isMicrocode(nextInstruction) && nextInstruction.tag === 'exit_scope') {
          state.shrinkRTSToIndex(state.getRTSStart())
          state.popAndRestoreRTSStartOntoStack()
        }
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
    case 'array_add_comp': {
      const { binary: indexBinary, type: indexType } = state.popOS()
      const { binary: arrayAddressBinary, type: arrayAddressType } = state.popOS()

      const arrayItemsType = getArrayItemsType(arrayAddressType)
      state.pushOS(arrayAddressBinary, incrementPointerDepth(arrayItemsType))
      state.pushOS(indexBinary, indexType)

      state.pushA({ tag: 'bin_op_auto_promotion', operator: CASTBinaryOperator.Plus })
      return
    }
    case 'conditional_statement_op': {
      const { binary: indexBinary, type: indexType } = state.popOS()
      if(Boolean(binaryToInt(indexBinary))) {
        state.pushA(node.ifTrue)
      } else {
        if(node.ifFalse) state.pushA(node.ifFalse)
      }
      return
    }

    case 'while_op': {
      const { binary: indexBinary, type: indexType } = state.popOS()
      if(Boolean(binaryToInt(indexBinary))) {
        state.pushA({tag: 'break_marker'})
        state.pushA(node)
        state.pushA(node.condition)
        state.pushA({tag: 'continue_marker'})
        state.pushA(node.statement)
      } 
      return
    }

    case 'for_op': {
    let testExpressionValue = true
    if(node.testExpression) {
      const { binary: indexBinary, type: indexType } = state.popOS()
      testExpressionValue = Boolean(binaryToInt(indexBinary))
    }
    if (testExpressionValue) {
      state.pushA({tag: 'break_marker'})
      state.pushA(node)
      if(node.testExpression) state.pushA(node.testExpression)
      if(node.updateExpression) {
        state.pushA({ tag: 'pop_os' })
        state.pushA(node.updateExpression)
      }
      state.pushA({tag: 'continue_marker'})
      state.pushA(node.statement)
    }
    return
    }

    case 'break_op': {
      while(true) {
        let cmd = state.popA()
        if (isMicrocode(cmd)) {
          if (cmd.tag == 'exit_scope') {
            state.popScopeE()
            state.shrinkRTSToIndex(state.getRTSStart())
            state.popAndRestoreRTSStartOntoStack()
          } else if (cmd.tag == 'break_marker') {
            break
          }
        }
      }
      return
    }
    
    case 'break_marker': {
      return
    }

    case 'continue_op': {
      while(true) {
        let cmd = state.popA()
        if (isMicrocode(cmd)) {
          if (cmd.tag == 'exit_scope') {
            state.popScopeE()
            state.shrinkRTSToIndex(state.getRTSStart())
            state.popAndRestoreRTSStartOntoStack()
          } else if (cmd.tag == 'continue_marker') {
            break
          }
        }
      }
    }

    case 'continue_marker': {
      return
    }

    default:
      throw new NotImplementedError()
  }
}
