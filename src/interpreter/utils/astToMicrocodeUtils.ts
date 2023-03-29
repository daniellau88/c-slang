// AST to Microcode should not touch OS, RTS, E or FD

import { CASTDeclaration, CASTFunctionDefinition, CASTNode } from '../../typings/programAST'
import { ProgramState } from '../programState'
import { CASTUnaryOperatorWithoutDerefence } from './typeUtils'
import { NotImplementedError, RuntimeError, shouldDerefExpression } from './utils'

// It should only insert microcodes that will subsequently change the above structures
export const astToMicrocode = (state: ProgramState, node: CASTNode) => {
  switch (node.type) {
    case 'Program':
      ;[...node.children].reverse().forEach(x => state.pushA(x))
      return
    case 'FunctionDefinition':
      const fdNode = node as CASTFunctionDefinition
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
    }
  }
}