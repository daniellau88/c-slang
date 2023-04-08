import { Context, NodeWithInferredType } from '../types'
import {
  CASTCompoundStatement,
  CASTDeclaration,
  CASTFunctionCallExpression,
  CASTFunctionDefinition,
  CASTIdentifier,
  CASTNode,
  CASTProgram,
} from '../typings/programAST'
import { getVariableDeclarationName } from '../utils/astCreator'
import { ancestor, base, FullWalkerCallback } from '../utils/walkers'

class Declaration {
  public accessedBeforeDeclaration: boolean = false
  constructor(public isConstant: boolean) {}
}

export function validateAndAnnotate(
  program: CASTProgram,
  context: Context,
): NodeWithInferredType<CASTProgram> {
  const accessedBeforeDeclarationMap = new Map<CASTNode, Map<string, Declaration>>()
  const scopeHasCallExpressionMap = new Map<CASTNode, boolean>()
  function processBlock(node: CASTProgram | CASTCompoundStatement) {
    const initialisedIdentifiers = new Map<string, Declaration>()
    const statements = (() => {
      switch (node.type) {
        case 'CompoundStatement':
          return node.statements
        case 'Program':
          return node.children
      }
    })()
    for (const statement of statements) {
      if (statement.type === 'DeclarationStatement') {
        statement.declarations.forEach(element => {
          initialisedIdentifiers.set(getVariableDeclarationName(element), new Declaration(true))
        })
      } else if (statement.type === 'FunctionDefinition') {
        if (statement.identifier === null) {
          throw new Error(
            'Encountered a FunctionDeclaration node without an identifier. This should have been caught when parsing.',
          )
        }
        initialisedIdentifiers.set(statement.identifier.name, new Declaration(true))
      }
    }
    scopeHasCallExpressionMap.set(node, false)
    accessedBeforeDeclarationMap.set(node, initialisedIdentifiers)
  }
  function processFunction(node: CASTFunctionDefinition) {
    accessedBeforeDeclarationMap.set(
      node,
      new Map(
        node.parameters.map(param => [
          param.identifier ? param.identifier.name : '',
          new Declaration(false),
        ]),
      ),
    )
    scopeHasCallExpressionMap.set(node, false)
  }

  // initialise scope of variables
  ancestor(program as CASTNode, {
    Program: processBlock,
    CompoundStatement: processBlock,
    FunctionDefinition: processFunction,
  })

  function validateIdentifier(id: CASTIdentifier, ancestors: CASTNode[]) {
    const name = id.name
    const lastAncestor: CASTNode = ancestors[ancestors.length - 2]
    for (let i = ancestors.length - 1; i >= 0; i--) {
      const a = ancestors[i]
      const map = accessedBeforeDeclarationMap.get(a)
      if (map?.has(name)) {
        map.get(name)!.accessedBeforeDeclaration = true
        if (lastAncestor.type === 'AssignmentExpression' && lastAncestor.left === id) {
          // if (a.type === 'ForStatement' && a.init !== lastAncestor && a.update !== lastAncestor) {
          //   context.errors.push(new NoAssignmentToForVariable(lastAncestor))
          // }
        }
        break
      }
    }
  }
  const customWalker = {
    ...base,
    VariableDeclarator(node: CASTDeclaration, st: never, c: FullWalkerCallback<never>) {
      // don't visit the id
      if (node.init) {
        c(node.init, st, 'Expression')
      }
    },
  }
  ancestor(
    program,
    {
      Declaration(node: NodeWithInferredType<CASTDeclaration>, ancestors: CASTNode[]) {
        const lastAncestor = ancestors[ancestors.length - 2]
        const name = getVariableDeclarationName(node)
        const accessedBeforeDeclaration = accessedBeforeDeclarationMap
          .get(lastAncestor)!
          .get(name)!.accessedBeforeDeclaration
        node.typability = accessedBeforeDeclaration ? 'Untypable' : 'NotYetTyped'
      },
      Identifier: validateIdentifier,
      FunctionDefinition(
        node: NodeWithInferredType<CASTFunctionDefinition>,
        ancestors: CASTNode[],
      ) {
        // a function declaration can be typed if there are no function calls in the same scope before it
        const lastAncestor = ancestors[ancestors.length - 2]
        node.typability = scopeHasCallExpressionMap.get(lastAncestor) ? 'Untypable' : 'NotYetTyped'
      },
      FunctionCallExpression(call: CASTFunctionCallExpression, ancestors: CASTNode[]) {
        for (let i = ancestors.length - 1; i >= 0; i--) {
          const a = ancestors[i]
          if (scopeHasCallExpressionMap.has(a)) {
            scopeHasCallExpressionMap.set(a, true)
            break
          }
        }
      },
    },
    customWalker,
  )

  /*
  simple(program, {
    VariableDeclaration(node: TypeAnnotatedNode<es.VariableDeclaration>) {
      console.log(getVariableDecarationName(node) + " " + node.typability);
    },
    FunctionDeclaration(node: TypeAnnotatedNode<es.FunctionDeclaration>) {
      console.log(node.id!.name + " " + node.typability);
    }
  })

   */
  return program
}
