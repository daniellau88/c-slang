// AST to Microcode should not touch OS, RTS, E or FD

import { CASTDeclaration, CASTNode } from '../../typings/programAST'
import { ProgramState } from '../programState'
import { CASTUnaryOperatorWithoutDerefence } from './typeUtils'
import { NotImplementedError, RuntimeError, shouldDerefExpression } from './utils'

// It should only insert microcodes that will subsequently change the above structures
export function* astToMicrocode(state: ProgramState, node: CASTNode) {
  switch (node.type) {
    case 'Program':
      ;[...node.children].reverse().forEach(x => state.pushA(x))
      return
    case 'FunctionDefinition':
      const fdNode = node
      if (fdNode.identifier.name === 'main') {
        state.setGlobalLength(state.getRTSLength())
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
      ;[...node.statements].reverse().forEach(x => {
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
      if (shouldDerefExpression(node.right)) state.pushA({ tag: 'deref' })
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
    case 'SizeOfExpression': {
      state.pushA({ tag: 'size_of_op', typeModifiers: node.typeArg.typeModifiers })
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
    case 'ArrayAccessExpression': {
      state.pushA({ tag: 'array_add_comp' })
      if (shouldDerefExpression(node.indexExpression)) state.pushA({ tag: 'deref' })
      state.pushA(node.indexExpression)
      if (shouldDerefExpression(node.expression)) state.pushA({ tag: 'deref' })
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
      return
    }
    // statements
    case 'IfStatement': {
      state.pushA({ tag: 'conditional_statement_op', ifTrue: node.ifTrue, ifFalse: node.ifFalse })
      state.pushA(node.condition)
      return
    }

    case 'WhileStatement': {
      state.pushA({ tag: 'while_op', condition: node.condition, statement: node.statement })
      state.pushA(node.condition)
      return
    }
    case 'DoStatement': {
      state.pushA({ tag: 'break_marker' })
      state.pushA({ tag: 'while_op', condition: node.condition, statement: node.statement })
      state.pushA(node.condition)
      state.pushA({ tag: 'continue_marker' })
      state.pushA(node.statement)
      return
    }

    case 'ForStatement': {
      const declarations: CASTDeclaration[] = []
      if (node.initDeclaration) {
        node.initDeclaration.declarations.forEach(x => {
          declarations.push(x)
        })
      }
      state.pushA({ tag: 'exit_scope', declarations: declarations })
      state.pushA({
        tag: 'for_op',
        statement: node.statement,
        testExpression: node.testExpression,
        updateExpression: node.updateExpression,
      })
      if (node.testExpression) {
        state.pushA(node.testExpression)
      }
      if (node.initDeclaration) state.pushA(node.initDeclaration)
      state.pushA({ tag: 'enter_scope', declarations: declarations })
      return
    }

    case 'BreakStatement': {
      state.pushA({ tag: 'break_op' })
      return
    }

    case 'ContinueStatement': {
      state.pushA({ tag: 'continue_op' })
      return
    }

    case 'SwitchStatement': {
      state.pushA({ tag: 'pop_os' })
      state.pushA({ tag: 'pop_os' })
      state.pushA({ tag: 'break_marker' })
      ;[...node.body.clauses].reverse().forEach(x => {
        if (x.subtype === 'Default') {
          state.pushA({ tag: 'switch_body_op', subtype: 'Default', statements: x.statements })
        } else {
          state.pushA({ tag: 'switch_body_op', subtype: 'Case', statements: x.statements })
          state.pushA(x.expression)
        }
      })
      if (shouldDerefExpression(node.expression)) state.pushA({ tag: 'deref' })
      state.pushA(node.expression)
      state.pushA({ tag: 'load_int', value: 0 })
      return
    }
  }
}
