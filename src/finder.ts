import { SourceLocation } from 'estree'

import { Context } from './types'
import {
  CASTCompoundStatement,
  CASTDeclaration,
  CASTFunctionDefinition,
  CASTIdentifier,
  CASTNode,
} from './typings/programAST'
import { ancestor, findNodeAt, recursive, WalkerCallback } from './utils/walkers'

type Node = CASTNode

// Finds the innermost node that matches the given location
export function findIdentifierNode(
  root: Node,
  context: Context,
  loc: { line: number; column: number },
): CASTIdentifier | undefined {
  function findByLocationPredicate(type: string, node: Node) {
    const location = node.loc
    const nodeType = node.type
    if (nodeType && location) {
      return (
        nodeType === 'Identifier' &&
        location.start.line === loc.line &&
        location.start.column <= loc.column &&
        location.end.column >= loc.column
      )
    }
    return false
  }

  const found = findNodeAt(root, undefined, undefined, findByLocationPredicate, customWalker)
  return found?.node as CASTIdentifier
}

// Recursively searches up the ancestors of the identifier from innermost to outermost scope
export function findDeclarationNode(program: Node, identifier: CASTIdentifier): Node | undefined {
  const ancestors = findAncestors(program, identifier)
  if (!ancestors) return undefined

  const declarations: Node[] = []
  for (const root of ancestors) {
    recursive(root, undefined, {
      CompoundStatement(node: CASTCompoundStatement, state: any, callback) {
        if (containsNode(node, identifier)) {
          node.statements.map(n => callback(n, state))
        }
      },
      FunctionDefinition(node: CASTFunctionDefinition, state: any, callback: WalkerCallback<any>) {
        if (node.identifier.name === identifier.name) {
          declarations.push(node.identifier)
        } else if (containsNode(node, identifier)) {
          const param = node.parameters.find(n =>
            n.identifier ? n.identifier.name === identifier.name : false,
          )
          if (param) {
            declarations.push(param)
          } else {
            callback(node.body, state)
          }
        }
      },
      Declaration(node: CASTDeclaration, _state: any, _callback: WalkerCallback<any>) {
        if (node.identifier.name === identifier.name) {
          declarations.push(node.identifier)
        }
      },
    })
    if (declarations.length > 0) {
      return declarations.shift()
    }
  }

  return undefined
}

function containsNode(nodeOuter: Node, nodeInner: Node): boolean {
  const outerLoc = nodeOuter.loc
  const innerLoc = nodeInner.loc

  return (
    outerLoc != null &&
    innerLoc != null &&
    isInLoc(innerLoc.start.line, innerLoc.start.column, outerLoc) &&
    isInLoc(innerLoc.end.line, innerLoc.end.column, outerLoc)
  )
}

// This checks if a given (line, col) value is part of another node.
export function isInLoc(line: number, col: number, location: SourceLocation): boolean {
  if (location == null) {
    return false
  }

  if (location.start.line < line && location.end.line > line) {
    return true
  } else if (location.start.line === line && location.end.line > line) {
    return location.start.column <= col
  } else if (location.start.line < line && location.end.line === line) {
    return location.end.column >= col
  } else if (location.start.line === line && location.end.line === line) {
    if (location.start.column <= col && location.end.column >= col) {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}

export function findAncestors(root: Node, identifier: CASTIdentifier): Node[] | undefined {
  let foundAncestors: Node[] = []
  ancestor(
    root,
    {
      Identifier: (node: CASTIdentifier, ancestors: [Node]) => {
        if (identifier.name === node.name && identifier.loc === node.loc) {
          foundAncestors = Object.assign([], ancestors).reverse()
          foundAncestors.shift() // Remove the identifier node
        }
      },
      /* We need a separate visitor for VariablePattern because
    acorn walk ignores Identifers on the left side of expressions.
    Here is a github issue in acorn-walk related to this:
    https://github.com/acornjs/acorn/issues/686
    */
      VariablePattern: (node: any, ancestors: [Node]) => {
        if (identifier.name === node.name && identifier.loc === node.loc) {
          foundAncestors = Object.assign([], ancestors).reverse()
        }
      },
    },
    customWalker,
  )
  return foundAncestors
}

const customWalker = undefined
