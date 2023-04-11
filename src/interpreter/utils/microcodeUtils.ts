import {
  CannotPerformLossyConversion,
  CannotPerformOperation,
  CannotReturnNonVoidValue,
  CannotReturnVoidValue,
  FunctionCannotReturnArray,
  InvalidArraySize,
  InvalidFreeMemoryValue,
  InvalidMallocSize,
  InvalidNumberOfArguments,
  ReturnNotCalled,
  UndefinedVariable,
  UnknownSize,
  VariableRedeclaration,
  VoidHasNoValue,
} from '../../errors/errors'
import {
  InternalUnreachableRuntimeError,
  NotImplementedRuntimeError,
} from '../../errors/runtimeSourceError'
import { CASTBinaryOperator, CASTExpression, CASTLiteral } from '../../typings/programAST'
import { ProgramState } from '../programState'
import {
  BinaryWithType,
  MicroCode,
  MicroCodeBinaryOperator,
  ProgramType,
  ProgramTypeModifier,
} from '../typings'
import {
  ArithmeticType,
  CASTUnaryOperatorWithoutDerefence,
  convertBinaryOperatorToMicroCodeBinaryOperator,
  doBinaryOperation,
  doUnaryOperationWithDereference,
  doUnaryOperationWithoutDereference,
  getBaseTypePromotionPriority,
  isNonArithmeticBinaryOperator,
} from './arithmeticUtils'
import { doAssignmentList } from './arrayUtils'
import { convertValueToType } from './typeConversionUtils'
import {
  CASTUnaryOperatorIncrement,
  CHAR_BASE_TYPE,
  convertCASTTypeModifierToProgramTypeModifier,
  decrementPointerDepth,
  FLOAT_BASE_TYPE,
  getArrayItemsType,
  getStaticSizeFromProgramType,
  incrementPointerDepth,
  INT_BASE_TYPE,
  isArray,
  isBaseType,
  isParameters,
  isPointer,
  isTypeEquivalent,
  isVoid,
  VOID_BASE_TYPE,
} from './typeUtils'
import {
  binaryToInt,
  derefBinary,
  getExpressionLength,
  intToBinary,
  isExpressionList,
  isMicrocode,
  isTruthy,
  shouldDerefExpression,
} from './utils'
import { ImplicitCastWarning } from './warning'

export const wordSize = 8

// Microcode are allowed to touch any of the given structures
export function executeMicrocode(state: ProgramState, node: MicroCode) {
  switch (node.tag) {
    case 'load_func': {
      const newIndex = state.getFDLength()
      const funcName = node.function.identifier.name
      if (state.hasKeyGlobalE(funcName)) {
        throw new VariableRedeclaration(node.function, funcName)
      }

      const functionReturnType = node.function.returnType.typeModifiers.map(
        convertCASTTypeModifierToProgramTypeModifier,
      )

      // Disallow return of arrays from functions: https://stackoverflow.com/a/32622114
      if (isArray(functionReturnType)) {
        throw new FunctionCannotReturnArray(node.node)
      }

      state.pushFD({
        subtype: 'func',
        arity: node.function.parameters.length,
        identifier: node.function.identifier,
        parameters: node.function.parameters,
        body: node.function.body,
        returnProgType: node.function.returnType.typeModifiers.map(
          convertCASTTypeModifierToProgramTypeModifier,
        ),
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
    case 'load_char': {
      state.pushOS(intToBinary(node.value.charCodeAt(0)), CHAR_BASE_TYPE)
      return
    }
    case 'load_string': {
      for (let i = 0; i < node.value.length; i++) {
        state.pushOS(intToBinary(node.value.charCodeAt(i)), CHAR_BASE_TYPE)
      }
      state.pushOS(0, CHAR_BASE_TYPE) // C strings end with \0
      state.pushOS(0, INT_BASE_TYPE)
      state.pushOS(intToBinary(node.value.length + 1), INT_BASE_TYPE)
      return
    }
    case 'load_var': {
      const name = node.identifier.name
      const record = state.lookupE(name)
      if (!record) {
        throw new UndefinedVariable(node.identifier, name)
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
      if (isVoid(type)) throw new VoidHasNoValue(node.node)

      const { binary: newBinary, type: newType } = derefBinary(state, { binary, type })
      state.pushOS(newBinary, newType)
      return
    }
    case 'func_apply': {
      const args: Array<BinaryWithType> = []
      for (let i = 0; i < node.arity; i++) {
        const item = state.popOS()
        if (isVoid(item.type)) throw new VoidHasNoValue(node.node)
        args.push(item)
      }
      args.reverse()

      const { binary: funcId } = state.popOS()
      const functionToCall = state.getFDAtIndex(binaryToInt(funcId))

      if (functionToCall.arity !== -1 && functionToCall.arity !== args.length) {
        throw new InvalidNumberOfArguments(
          node.node,
          functionToCall.arity,
          args.length,
          functionToCall,
        )
      }

      if (functionToCall.subtype === 'builtin_func') {
        functionToCall.func(state, args, node.node)
        return
      }

      state.saveAndUpdateRTSStartOntoStack()

      state.extendFunctionE()
      state.extendScopeE()

      const funcParameters = functionToCall.parameters
      for (let i = 0; i < args.length; i++) {
        const rtsIndex = state.getRTSLength()
        const parameter = funcParameters[i]
        const arg = args[i]
        const identifierName = parameter.identifier?.name
        if (identifierName) {
          if (parameter.paramType.typeModifiers[0].subtype === 'Array') {
            const paramTypeCopy = parameter.paramType.typeModifiers.map(x => {
              return { ...x }
            })
            if (paramTypeCopy[0].subtype === 'Array' && paramTypeCopy[0].size === undefined) {
              const inferredSize = arg.type[0].subtype === 'Array' ? arg.type[0].size : undefined
              if (inferredSize !== undefined) {
                paramTypeCopy[0].size = {
                  type: 'Literal',
                  subtype: 'Int',
                  value: inferredSize.toString(),
                } as CASTLiteral
              }
            }

            state.addRecordToE(identifierName, {
              subtype: 'variable',
              address: binaryToInt(arg.binary),
              variableType: paramTypeCopy.map(convertCASTTypeModifierToProgramTypeModifier),
            })
            state.pushRTS(arg.binary, arg.type)
            continue
          }
          const variableType = parameter.paramType.typeModifiers.map(
            convertCASTTypeModifierToProgramTypeModifier,
          )

          state.addRecordToE(identifierName, {
            subtype: 'variable',
            address: rtsIndex,
            variableType: variableType,
          })

          const [newValue, isChanged] = convertValueToType(arg.binary, arg.type, variableType)
          if (isChanged) {
            state.pushWarning(new ImplicitCastWarning(node.node, arg.type, variableType))
          }
          state.pushRTS(newValue, variableType)
        }
      }

      state.pushA({ tag: 'exit_func', node: node.node, funcNode: functionToCall })
      ;[...functionToCall.body.statements].reverse().forEach(x => state.pushA(x))
      return
    }
    case 'exit_func':
      const returnType = node.funcNode.returnProgType
      const isVoidReturn = isVoid(returnType)
      if (!isVoidReturn && !state.getReturnRegister().assigned) {
        throw new ReturnNotCalled(node.node, node.funcNode)
      }

      if (
        isVoidReturn &&
        state.getReturnRegister().assigned &&
        state.getReturnRegister().binary !== undefined
      ) {
        throw new CannotReturnNonVoidValue(node.node)
      }

      if (!isVoidReturn && state.getReturnRegister().binary === undefined) {
        throw new CannotReturnVoidValue(node.node)
      }

      state.shrinkRTSToIndex(state.getRTSStart())

      state.popAndRestoreRTSStartOntoStack()
      state.popFunctionE()

      const binaryWithType = state.getReturnRegister().binary
      if (isVoidReturn) {
        state.pushOS(0, VOID_BASE_TYPE)
      } else if (binaryWithType) {
        state.pushOS(binaryWithType.binary, binaryWithType.type)
      } else {
        throw new InternalUnreachableRuntimeError(node.node)
      }

      state.resetReturnRegister()

      return
    case 'pop_os':
      state.popOS()
      return
    case 'duplicate_top_os': {
      const topOS = state.peekOS()
      if (topOS) {
        state.pushOS(topOS.binary, topOS.type)
      }
      return
    }
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
        throw new VariableRedeclaration(node.declaration, name)
      }

      const typeModifiers = node.declaration.declarationType.typeModifiers.map(x => {
        return { ...x }
      })

      if (init) {
        if (isExpressionList(init)) {
          state.pushA({ tag: 'assgn_list', node: node.declaration })

          const expressionLength = getExpressionLength(init)
          // Modify the size of incomplete element (e.g. int a[][5]), so that interpreter knows how much space to allocate
          if (typeModifiers[0].subtype === 'Array' && typeModifiers[0].size === undefined) {
            typeModifiers[0].size = {
              type: 'Literal',
              subtype: 'Int',
              value: expressionLength.toString(),
              loc: init.loc,
            }
          }
        } else {
          state.pushA({ tag: 'assgn', node: node.declaration })
        }
      }

      state.pushA({
        tag: 'decl_eval_type_modifier_i',
        oldTypeModifiers: typeModifiers,
        newTypeModifiers: [],
        currentIndex: -1,
        name: name,
        node: node.declaration,
      })

      if (init) {
        if (shouldDerefExpression(init)) state.pushA({ tag: 'deref', node: init })
        state.pushA(init)
      }
      return
    }
    case 'decl_eval_type_modifier_i': {
      const curIndex = node.currentIndex
      const oldTypeModifiers = node.oldTypeModifiers
      const newTypeModifiers = node.newTypeModifiers
      if (curIndex !== -1) {
        const currentModifier = node.oldTypeModifiers[curIndex]
        if (currentModifier.subtype !== 'Array') {
          throw new InternalUnreachableRuntimeError(node.node)
        }

        const { binary, type } = state.popOS() // Assert type should be int
        if (!isTypeEquivalent(type, INT_BASE_TYPE)) {
          throw new InvalidArraySize(node.node, { binary, type })
        }

        const intValue = binaryToInt(binary)
        if (intValue < 0) {
          throw new InvalidArraySize(node.node, { binary, type })
        }

        const currentModifierCopy: ProgramTypeModifier = {
          subtype: 'Array',
          size: intValue,
        }
        newTypeModifiers.push(currentModifierCopy)
      }

      for (let i = curIndex + 1; i < oldTypeModifiers.length; i++) {
        const currentModifier = oldTypeModifiers[i]
        if (currentModifier.subtype == 'Array' && currentModifier.size !== undefined) {
          state.pushA({ ...node, currentIndex: i })
          if (shouldDerefExpression(currentModifier.size))
            state.pushA({ tag: 'deref', node: currentModifier.size })
          state.pushA(currentModifier.size)
          return
        }
        newTypeModifiers.push(convertCASTTypeModifierToProgramTypeModifier(currentModifier))
      }

      state.pushA({
        tag: 'decl_alloc_mem',
        typeModifiers: newTypeModifiers,
        name: node.name,
        node: node.node,
      })
      state.pushA({
        tag: 'load_int',
        value: getStaticSizeFromProgramType(newTypeModifiers),
        node: node.node,
      })
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
      const { binary: addr, type: addrType } = state.popOS()
      const { binary: val, type: valType } = state.popOS()
      if (isVoid(valType)) {
        throw new VoidHasNoValue(node.node)
      }
      const newType = decrementPointerDepth(addrType)
      let newValue = 0
      let isChanged = false
      try {
        ;[newValue, isChanged] = convertValueToType(val, valType, newType)
        if (isChanged) {
          state.pushWarning(new ImplicitCastWarning(node.node, valType, newType))
        }
      } catch (e) {
        throw new CannotPerformLossyConversion(node.node, valType, newType)
      }
      state.setMemoryAtIndex(binaryToInt(addr), newValue, newType)
      state.pushOS(newValue, newType)
      return
    }
    case 'assgn_list': {
      const { binary: address, type: addressType } = state.popOS()
      const addressInt = binaryToInt(address)
      const currentType = decrementPointerDepth(addressType)

      doAssignmentList(node.node, state, addressInt, currentType)
      state.pushOS(address, addressType)
      return
    }
    case 'bin_op_auto_promotion': {
      const { binary: rightOp, type: rightOpType } = state.popOS()
      const { binary: leftOp, type: leftOpType } = state.popOS()

      if (isVoid(rightOpType) || isVoid(leftOpType)) throw new VoidHasNoValue(node.node)

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
        state.pushA({ tag: 'bin_op', operator: newOperator, node: node.node })
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
              return MicroCodeBinaryOperator.IntAddition
            case CASTBinaryOperator.Minus:
              return MicroCodeBinaryOperator.IntSubtraction
            default:
              throw new CannotPerformOperation(node.node, node.operator, [leftOpType, rightOpType])
          }
        })()
        state.pushA({ tag: 'bin_op', operator: microcodeOperator, node: node.node })
        state.pushA({
          tag: 'bin_op',
          operator: MicroCodeBinaryOperator.IntDivision,
          node: node.node,
        })
        state.pushA({ tag: 'load_int', value: wordSize, node: node.node })
        state.pushA({
          tag: 'bin_op',
          operator: MicroCodeBinaryOperator.IntMultiply,
          node: node.node,
        })
        const leftOpSize = getStaticSizeFromProgramType(decrementPointerDepth(leftOpType))
        state.pushA({ tag: 'load_int', value: leftOpSize, node: node.node })
        return
      } else if (
        isTypeEquivalent(leftOpType, rightOpType) &&
        isNonArithmeticBinaryOperator(node.operator)
      ) {
        state.pushOS(leftOp, leftOpType)
        state.pushOS(rightOp, rightOpType)
        // Treat all remaining ones as integer
        state.pushA({
          tag: 'bin_op',
          operator: convertBinaryOperatorToMicroCodeBinaryOperator(
            ArithmeticType.Integer,
            node.operator,
          ),
          node: node.node,
        })
        return
      } else if (
        isPointer(leftOpType) &&
        isPointer(rightOpType) &&
        node.operator === CASTBinaryOperator.Minus
      ) {
        // Allows only subtraction between pointers
        state.pushOS(leftOp, INT_BASE_TYPE)
        state.pushOS(rightOp, INT_BASE_TYPE)
        state.pushA({
          tag: 'bin_op',
          operator: MicroCodeBinaryOperator.IntSubtraction,
          node: node.node,
        })
        return
      }

      throw new CannotPerformOperation(node.node, node.operator, [leftOpType, rightOpType])
    }
    case 'bin_op': {
      const rightOpWithType = state.popOS()
      const leftOpWithType = state.popOS()
      if (isVoid(leftOpWithType.type) || isVoid(rightOpWithType.type))
        throw new VoidHasNoValue(node.node)

      const result = doBinaryOperation(leftOpWithType, rightOpWithType, node.operator)
      state.pushOS(result.binary, result.type)
      return
    }
    case 'conditional_op': {
      const predicate = state.popOS()
      const expressionToPush = predicate.binary === 0 ? node.ifFalse : node.ifTrue
      if (shouldDerefExpression(expressionToPush))
        state.pushA({ tag: 'deref', node: expressionToPush })
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
            if (typeModifier.size === undefined) throw new InvalidArraySize(node.node)
            expressions.push(typeModifier.size)
            break
          }
          case 'BaseType': {
            if (typeModifier.baseType === 'void') throw new VoidHasNoValue(node.node)
            expressions.push({ tag: 'load_int', value: 8, node: node.node })
            shouldBreak = true
            break
          }
          case 'Pointer': {
            expressions.push({ tag: 'load_int', value: 8, node: node.node })
            shouldBreak = true
            break
          }
          case 'Parameters': {
            throw new UnknownSize(node.node)
          }
        }
        if (shouldBreak) break
      }
      expressions.forEach((x, i) => {
        if (i !== expressions.length - 1)
          state.pushA({
            tag: 'bin_op',
            operator: MicroCodeBinaryOperator.IntMultiply,
            node: node.node,
          })
        if (!isMicrocode(x) && shouldDerefExpression(x)) state.pushA({ tag: 'deref', node: x })
        state.pushA(x)
      })
      return
    }
    case 'unary_op': {
      const operand = state.popOS()
      if (isVoid(operand.type)) throw new VoidHasNoValue(node.node)

      const isSkipDerefenceOperator = CASTUnaryOperatorWithoutDerefence.includes(node.operator)
      const isIncrementOperator = CASTUnaryOperatorIncrement.includes(node.operator)
      if (isIncrementOperator) {
        throw new InternalUnreachableRuntimeError(node.node)
      }

      let result: BinaryWithType
      if (isSkipDerefenceOperator) {
        result = doUnaryOperationWithoutDereference(operand, node.operator)
      } else {
        result = doUnaryOperationWithDereference(operand, node.operator)
      }
      state.pushOS(result.binary, result.type)
      return
    }
    case 'return': {
      state.setReturnRegisterAssigned(true)
      if (node.withExpression) {
        const returnValueAndType = state.popOS()
        if (isVoid(returnValueAndType.type)) throw new VoidHasNoValue(node.node)
        state.setReturnRegisterBinary(returnValueAndType)
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
        throw new InternalUnreachableRuntimeError(node.node)
      }
      return
    }
    case 'array_add_comp': {
      const { binary: indexBinary, type: indexType } = state.popOS()
      const { binary: arrayAddressBinary, type: arrayAddressType } = state.popOS()
      if (isVoid(indexType)) throw new VoidHasNoValue(node.node)

      if (isArray(arrayAddressType)) {
        const arrayItemsType = getArrayItemsType(arrayAddressType)
        state.pushOS(arrayAddressBinary, incrementPointerDepth(arrayItemsType))
      } else {
        state.pushOS(arrayAddressBinary, arrayAddressType)
      }
      state.pushOS(indexBinary, indexType)

      state.pushA({
        tag: 'bin_op_auto_promotion',
        operator: CASTBinaryOperator.Plus,
        node: node.node,
      })
      return
    }
    case 'conditional_statement_op': {
      const { binary: indexBinary, type: indexType } = state.popOS()
      if (isVoid(indexType)) throw new VoidHasNoValue(node.node)

      if (isTruthy(indexBinary)) {
        state.pushA(node.ifTrue)
      } else {
        if (node.ifFalse) state.pushA(node.ifFalse)
      }
      return
    }

    case 'while_op': {
      const { binary: indexBinary, type: indexType } = state.popOS()
      if (isVoid(indexType)) throw new VoidHasNoValue(node.node)
      if (isTruthy(indexBinary)) {
        state.pushA({ tag: 'break_marker', node: node.node })
        state.pushA(node)
        state.pushA(node.condition)
        state.pushA({ tag: 'continue_marker', node: node.node })
        state.pushA(node.statement)
      }
      return
    }

    case 'for_op': {
      let testExpressionValue = true
      if (node.testExpression) {
        const { binary: indexBinary, type: indexType } = state.popOS()
        if (isVoid(indexType)) throw new VoidHasNoValue(node.node)
        testExpressionValue = isTruthy(indexBinary)
      }
      if (testExpressionValue) {
        state.pushA({ tag: 'break_marker', node: node.node })
        state.pushA(node)
        if (node.testExpression) state.pushA(node.testExpression)
        if (node.updateExpression) {
          state.pushA({ tag: 'pop_os', node: node.node })
          state.pushA(node.updateExpression)
        }
        state.pushA({ tag: 'continue_marker', node: node.node })
        state.pushA(node.statement)
      }
      return
    }

    case 'break_op': {
      while (true) {
        const cmd = state.popA()
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
      while (true) {
        const cmd = state.popA()
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

    case 'switch_body_op': {
      const { binary: caseCheck, type: typeLeft } = state.popOS()
      const { binary: passedCheck, type: typeCheck } = state.popOS()
      if (isTruthy(passedCheck) || isTruthy(caseCheck)) {
        ;[...node.statements].reverse().forEach(x => {
          state.pushA(x)
        })
        // "case" has been passed. Update status to 1
        state.pushOS(intToBinary(1), INT_BASE_TYPE)
      } else {
        state.pushOS(intToBinary(0), INT_BASE_TYPE)
      }
      return
    }

    case 'malloc_op': {
      const { binary: size, type: typeSize } = node.size
      if (isVoid(typeSize)) throw new VoidHasNoValue(node.node)
      if (binaryToInt(size) <= 0) {
        throw new InvalidMallocSize(node.node, binaryToInt(size))
      }
      const allocatedAddress = state.allocateHeap(Math.ceil(binaryToInt(size) / wordSize))
      state.pushOS(intToBinary(allocatedAddress), incrementPointerDepth(VOID_BASE_TYPE))
      return
    }

    case 'free_op': {
      const { binary: address, type: typeAddress } = node.address
      if (isVoid(typeAddress)) throw new VoidHasNoValue(node.node)
      const addressIndex = binaryToInt(address)
      if (!isPointer(typeAddress)) {
        throw new InvalidFreeMemoryValue(node.node, { binary: address, type: typeAddress })
      }
      state.freeHeapMemory(addressIndex)
      state.pushOS(0, VOID_BASE_TYPE)
      return
    }

    case 'cast_value': {
      const { binary: value, type: valueType } = state.popOS()
      const castType = node.castType
      let newValue: number = value
      let isChanged: boolean = false

      if (
        // isArray(castType) ||
        // isArray(valueType) ||
        isParameters(castType) ||
        isParameters(valueType)
      ) {
        throw new NotImplementedRuntimeError(node.node)
      }

      ;[newValue, isChanged] = convertValueToType(newValue, valueType, castType)
      state.pushOS(newValue, castType)
      return
    }

    default:
      throw new InternalUnreachableRuntimeError((node as MicroCode).node)
  }
}
