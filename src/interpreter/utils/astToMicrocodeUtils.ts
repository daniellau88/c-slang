// AST to Microcode should not touch OS, RTS, E or FD

import {
  CannotDereferenceTypeError,
  ExpressionCannotBeString,
  FunctionCannotReturnArray,
  SwitchCaseCannotBeVariable,
} from '../../errors/errors'
import {
  InternalUnreachableRuntimeError,
  NotImplementedRuntimeError,
} from '../../errors/runtimeSourceError'
import {
  CASTAssignmentOperator,
  CASTBinaryOperator,
  CASTDeclaration,
  CASTExpression,
  CASTNode,
  CASTUnaryOperator,
} from '../../typings/programAST'
import { dummyLocation } from '../../utils/dummyAstCreator'
import { ProgramState } from '../programState'
import {
  CASTUnaryOperatorWithoutDerefence,
  convertAssignmentOperatorToBinaryOperator,
} from './arithmeticUtils'
import { setIsNestedFlag, setIsStringFlag } from './arrayUtils'
import {
  CASTUnaryOperatorIncrement,
  convertCASTTypeModifierToProgramTypeModifier,
  getUnaryOperatorIncrementType,
} from './typeUtils'
import {
  isCASTArrayExpression,
  isCASTExpressionList,
  isCASTStringLiteral,
  shouldAllocateString,
  shouldDerefExpression,
} from './utils'

// It should only insert microcodes that will subsequently change the above structures
export function astToMicrocode(state: ProgramState, node: CASTNode) {
  switch (node.type) {
    case 'Program':
      ;[...node.children].reverse().forEach(x => state.pushA(x))
      return
    case 'FunctionDefinition':
      const fdNode = node
      if (fdNode.identifier.name === 'main') {
        state.setGlobalLength(state.getRTSLength())
        state.pushA({
          tag: 'func_apply',
          arity: 0,
          node: {
            type: 'FunctionCallExpression',
            expression: { type: 'Identifier', name: 'main', loc: dummyLocation() },
            argumentExpression: [],
            loc: dummyLocation(),
          },
        })
        state.pushA(fdNode.identifier)
      }
      state.pushA({ tag: 'load_func', function: fdNode, node: node })
      return
    case 'CompoundStatement': {
      const declarations: CASTDeclaration[] = []
      node.statements.forEach(x => {
        if (x.type === 'DeclarationStatement') {
          x.declarations.forEach(y => declarations.push(y))
        }
      })

      state.pushA({ tag: 'exit_scope', declarations: declarations, node: node })
      ;[...node.statements].reverse().forEach(x => {
        state.pushA(x)
        // Statements will pop OS upon ending
      })
      state.pushA({ tag: 'enter_scope', declarations: declarations, node: node })
      return
    }
    case 'ExpressionStatement': {
      ;[...node.expressions].reverse().forEach(x => {
        state.pushA({ tag: 'pop_os', node: node })
        state.pushA(x)
      })
      return
    }
    case 'DeclarationStatement': {
      ;[...node.declarations].reverse().forEach(x => {
        state.pushA({ tag: 'pop_os', node: node })
        state.pushA(x)
      })
      return
    }
    case 'Declaration': {
      state.pushA({ tag: 'decl', declaration: node, node: node })
      return
    }
    case 'Literal': {
      switch (node.subtype) {
        case 'Int':
          state.pushA({ tag: 'load_int', value: parseInt(node.value), node: node })
          return
        case 'Float':
          state.pushA({ tag: 'load_float', value: parseFloat(node.value), node: node })
          return
        case 'Char':
          state.pushA({ tag: 'load_char', value: node.value, node: node })
          return
        default:
          throw new NotImplementedRuntimeError(node)
      }
      return
    }
    case 'StringLiteral': {
      state.pushA({ tag: 'load_string', value: node.value, node: node })
      return
    }
    case 'ArrayExpression': {
      state.pushA({ tag: 'load_int', value: node.elements.length, node: node })
      const allNested = node.elements.every(isCASTExpressionList)
      let flags = 0
      flags = setIsNestedFlag(flags, allNested)
      flags = setIsStringFlag(flags, false)
      if (allNested) {
        state.pushA({ tag: 'load_int', value: flags, node: node })
      } else {
        state.pushA({ tag: 'load_int', value: flags, node: node })
      }
      ;[...node.elements].reverse().forEach(x => {
        let currentNode: CASTExpression = x
        while (!allNested && isCASTArrayExpression(currentNode)) {
          if (currentNode.type === 'ArrayExpression') {
            currentNode = currentNode.elements[0] // Take only first element if not all are nested
          } else {
            break
          }
        }
        // Only when not all are nested, then allocate the string, otherwise leave it to "assgn_list" to do it
        if (!allNested && isCASTStringLiteral(currentNode))
          state.pushA({ tag: 'allocate_str', node: x })
        if (shouldDerefExpression(currentNode)) state.pushA({ tag: 'deref', node: x })
        state.pushA(currentNode)
      })
      return
    }
    case 'AssignmentExpression': {
      if (isCASTArrayExpression(node.right)) {
        state.pushA({ tag: 'assgn_list', node: node })
      } else {
        state.pushA({ tag: 'assgn', node: node })
      }

      state.pushA(node.left)

      const isBasicAssignment = node.operator === CASTAssignmentOperator.Equal
      if (!isBasicAssignment) {
        state.pushA({
          tag: 'bin_op_auto_promotion',
          operator: convertAssignmentOperatorToBinaryOperator(node.operator),
          node: node,
        })
      }
      if (shouldAllocateString(node.right)) state.pushA({ tag: 'allocate_str', node: node })
      if (shouldDerefExpression(node.right)) state.pushA({ tag: 'deref', node: node.right })
      state.pushA(node.right)
      if (!isBasicAssignment) {
        if (shouldAllocateString(node.right)) throw new ExpressionCannotBeString(node)
        if (shouldDerefExpression(node.left)) state.pushA({ tag: 'deref', node: node.left })
        state.pushA(node.left)
      }
      return
    }
    case 'BinaryExpression': {
      state.pushA({ tag: 'bin_op_auto_promotion', operator: node.operator, node: node })
      if (shouldAllocateString(node.right)) state.pushA({ tag: 'allocate_str', node: node.right })
      if (shouldDerefExpression(node.right)) state.pushA({ tag: 'deref', node: node.right })
      state.pushA(node.right)
      if (shouldAllocateString(node.left)) state.pushA({ tag: 'allocate_str', node: node.left })
      if (shouldDerefExpression(node.left)) state.pushA({ tag: 'deref', node: node.left })
      state.pushA(node.left) // Do the left first
      return
    }
    case 'ConditionalExpression': {
      state.pushA({ tag: 'conditional_op', ifFalse: node.ifFalse, ifTrue: node.ifTrue, node: node })
      if (shouldAllocateString(node.predicate))
        state.pushA({ tag: 'allocate_str', node: node.predicate })
      if (shouldDerefExpression(node.predicate)) state.pushA({ tag: 'deref', node: node.predicate })
      state.pushA(node.predicate)
      return
    }
    case 'CastExpression': {
      state.pushA({
        tag: 'cast_value',
        castType: node.castType.typeModifiers.map(convertCASTTypeModifierToProgramTypeModifier),
        node: node,
      })
      if (shouldAllocateString(node.expression))
        state.pushA({ tag: 'allocate_str', node: node.expression })
      if (shouldDerefExpression(node.expression))
        state.pushA({ tag: 'deref', node: node.expression })
      state.pushA(node.expression)
      return
    }
    case 'SizeOfExpression': {
      state.pushA({ tag: 'size_of_op', typeModifiers: node.typeArg.typeModifiers, node: node })
      return
    }
    case 'UnaryExpression': {
      const isIncrement = CASTUnaryOperatorIncrement.includes(node.operator)
      if (isIncrement) {
        const incrementType = getUnaryOperatorIncrementType(node.operator)
        const binOp =
          incrementType.incrementType === 'increment'
            ? CASTBinaryOperator.Plus
            : CASTBinaryOperator.Minus

        // Increment expressions cannot be string
        if (shouldAllocateString(node.expression))
          throw new ExpressionCannotBeString(node.expression)
        if (incrementType.unaryType === 'post') {
          state.pushA({ tag: 'pop_os', node: node })
        }
        state.pushA({ tag: 'assgn', node: node })
        state.pushA(node.expression)
        state.pushA({ tag: 'bin_op_auto_promotion', operator: binOp, node: node })
        state.pushA({ tag: 'load_int', value: 1, node: node })
        state.pushA({ tag: 'deref', node: node.expression })
        state.pushA(node.expression) // Have to evaluate expression twice (if is post) because the first needs to be derefed
        if (incrementType.unaryType === 'post') {
          state.pushA({ tag: 'deref', node: node.expression })
          state.pushA(node.expression)
        }
        return
      }

      state.pushA({ tag: 'unary_op', operator: node.operator, node: node })
      const shouldDeref = shouldDerefExpression(node.expression)
      const isSkipDerefenceOperator = CASTUnaryOperatorWithoutDerefence.includes(node.operator)

      const shouldAllocateStr = shouldAllocateString(node.expression)
      // Only these operations are allowed for string literals
      const canConvertStringToUnary = [
        CASTUnaryOperator.Address,
        CASTUnaryOperator.Dereference,
        CASTUnaryOperator.LogicalNot,
      ].includes(node.operator)
      if (shouldAllocateStr) {
        if (canConvertStringToUnary) state.pushA({ tag: 'allocate_str', node: node })
        else throw new ExpressionCannotBeString(node)
      }

      if (!shouldDeref && isSkipDerefenceOperator) {
        throw new CannotDereferenceTypeError(node.expression)
      }
      if (shouldDeref && !isSkipDerefenceOperator) {
        state.pushA({ tag: 'deref', node: node.expression })
      }
      state.pushA(node.expression)
      return
    }
    case 'ArrayAccessExpression': {
      state.pushA({ tag: 'array_add_comp', node: node })
      if (shouldAllocateString(node.indexExpression)) throw new ExpressionCannotBeString(node)
      if (shouldDerefExpression(node.indexExpression))
        state.pushA({ tag: 'deref', node: node.indexExpression })
      state.pushA(node.indexExpression)
      if (shouldAllocateString(node.expression))
        state.pushA({ tag: 'allocate_str', node: node.expression })
      if (shouldDerefExpression(node.expression))
        state.pushA({ tag: 'deref', node: node.expression })
      state.pushA(node.expression)
      return
    }
    case 'Identifier': {
      state.pushA({ tag: 'load_var', identifier: node, node: node })
      return
    }
    case 'FunctionCallExpression': {
      state.pushA({ tag: 'func_apply', arity: node.argumentExpression.length, node: node })
      // Insert from left to right into OS (i.e. evaluate left first)
      node.argumentExpression.forEach(x => {
        if (shouldAllocateString(x)) state.pushA({ tag: 'allocate_str', node: x })
        if (shouldDerefExpression(x)) state.pushA({ tag: 'deref', node: x })
        state.pushA(x)
      })
      state.pushA(node.expression)
      return
    }
    case 'ReturnStatement': {
      const hasExpression = Boolean(node.expression)
      state.pushA({ tag: 'return', withExpression: hasExpression, node: node })

      if (node.expression && isCASTArrayExpression(node.expression))
        throw new FunctionCannotReturnArray(node)

      if (node.expression) {
        if (shouldAllocateString(node.expression))
          state.pushA({ tag: 'allocate_str', node: node.expression })
        if (shouldDerefExpression(node.expression))
          state.pushA({ tag: 'deref', node: node.expression })
        state.pushA(node.expression)
      }
      return
    }
    // statements
    case 'IfStatement': {
      state.pushA({
        tag: 'conditional_statement_op',
        ifTrue: node.ifTrue,
        ifFalse: node.ifFalse,
        node: node,
      })
      if (shouldAllocateString(node.condition))
        state.pushA({ tag: 'allocate_str', node: node.condition })
      if (shouldDerefExpression(node.condition)) state.pushA({ tag: 'deref', node: node.condition })
      state.pushA(node.condition)
      return
    }

    case 'WhileStatement': {
      state.pushA({
        tag: 'while_op',
        condition: node.condition,
        statement: node.statement,
        node: node,
      })
      if (shouldAllocateString(node.condition))
        state.pushA({ tag: 'allocate_str', node: node.condition })
      if (shouldDerefExpression(node.condition)) state.pushA({ tag: 'deref', node: node.condition })
      state.pushA(node.condition)
      return
    }
    case 'DoStatement': {
      state.pushA({ tag: 'break_marker', node: node })
      state.pushA({
        tag: 'while_op',
        condition: node.condition,
        statement: node.statement,
        node: node,
      })
      if (shouldAllocateString(node.condition))
        state.pushA({ tag: 'allocate_str', node: node.condition })
      if (shouldDerefExpression(node.condition)) state.pushA({ tag: 'deref', node: node.condition })
      state.pushA(node.condition)
      state.pushA({ tag: 'continue_marker', node: node })
      state.pushA(node.statement)
      return
    }

    case 'ForStatement': {
      const declarations: CASTDeclaration[] = []
      if (node.initDeclaration && node.initDeclaration.type === 'DeclarationStatement') {
        node.initDeclaration.declarations.forEach(x => {
          declarations.push(x)
        })
      }
      state.pushA({ tag: 'exit_scope', declarations: declarations, node: node })
      state.pushA({
        tag: 'for_op',
        statement: node.statement,
        testExpression: node.testExpression,
        updateExpression: node.updateExpression,
        node: node,
      })
      if (node.testExpression) {
        if (shouldAllocateString(node.testExpression))
          state.pushA({ tag: 'allocate_str', node: node.testExpression })
        if (shouldDerefExpression(node.testExpression))
          state.pushA({ tag: 'deref', node: node.testExpression })
        state.pushA(node.testExpression)
      }
      if (node.initDeclaration) state.pushA(node.initDeclaration)
      state.pushA({ tag: 'enter_scope', declarations: declarations, node: node })
      return
    }

    case 'BreakStatement': {
      state.pushA({ tag: 'break_op', node: node })
      return
    }

    case 'ContinueStatement': {
      state.pushA({ tag: 'continue_op', node: node })
      return
    }

    case 'SwitchStatement': {
      state.pushA({ tag: 'break_marker', node: node })
      // cleaning up OS
      state.pushA({ tag: 'pop_os', node: node })
      ;[...node.body.clauses].reverse().forEach(x => {
        if (x.subtype === 'Default') {
          state.pushA({
            tag: 'switch_body_op',
            subtype: 'Default',
            statements: x.statements,
            node: node,
          })
          // no comparison should be done, default is automatic pass
          state.pushA({ tag: 'load_int', value: 1, node: node })
        } else {
          state.pushA({
            tag: 'switch_body_op',
            subtype: 'Case',
            statements: x.statements,
            node: node,
          })
          // do the case comparison first
          state.pushA({
            tag: 'bin_op_auto_promotion',
            operator: CASTBinaryOperator.EqualityEqual,
            node: node,
          })
          if (shouldAllocateString(x.expression))
            throw new ExpressionCannotBeString(node.expression)
          if (shouldDerefExpression(x.expression))
            throw new SwitchCaseCannotBeVariable(x.expression)
          state.pushA(x.expression)
          if (shouldAllocateString(node.expression))
            throw new ExpressionCannotBeString(node.expression)
          if (shouldDerefExpression(node.expression))
            state.pushA({ tag: 'deref', node: node.expression })
          state.pushA(node.expression)
        }
      })
      // to know that there is already a case body that has passed the test, we need to add this
      // to track the status. Initial is false (no case has been passed)
      state.pushA({ tag: 'load_int', value: 0, node: node })
      return
    }

    case 'Dummy':
    case 'FunctionParameter': {
      throw new InternalUnreachableRuntimeError(node)
    }

    case 'LabeledStatement':
    case 'GotoStatement': {
      throw new NotImplementedRuntimeError(node)
    }
  }
}
