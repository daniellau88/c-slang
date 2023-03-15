import assert from 'assert'

import createContext from './createContext'
import { parse } from './parser/parser'
import { CNode } from './typings/programAST'

type CompletePartial<K> = {
  [attr in keyof K]?: K[attr] extends object
    ? CompletePartial<K[attr]>
    : K[attr] extends object | null
    ? CompletePartial<K[attr]> | null
    : K[attr] extends object | null | undefined
    ? CompletePartial<K[attr]> | null | undefined
    : K[attr]
}

type ParserValues = CompletePartial<CNode>
const isEqualToMustHave = (value: ParserValues, mustHaveValue: ParserValues): boolean => {
  if (typeof mustHaveValue === 'string' || typeof mustHaveValue === 'number') {
    return value === mustHaveValue
  }

  const mustHaveValueObj = mustHaveValue as { [x: string | number]: ParserValues }
  const valueObj = value as { [x: string | number]: ParserValues }
  for (const key in mustHaveValueObj) {
    if (!(key in valueObj)) {
      return false
    }

    const isObjEqualToMustHave = isEqualToMustHave(valueObj[key], mustHaveValueObj[key])
    if (!isObjEqualToMustHave) {
      return false
    }
  }
  return true
}

const testExpression = (expr: string, expectedMustHave: Array<ParserValues>) => {
  const context = createContext()
  const parsedProgram = parse(expr, context)
  console.log(JSON.stringify(parsedProgram))

  if (!parsedProgram || !parsedProgram) {
    assert(false)
  }

  const bodyExpr = parsedProgram.children as Array<ParserValues>
  console.log(bodyExpr)
  if (bodyExpr.length !== expectedMustHave.length) {
    assert(false)
  }

  const answer = bodyExpr.map((x, i) => isEqualToMustHave(x, expectedMustHave[i]))
  assert(answer)
}

// const autoWrapInMainFunction = (stmts: Array<ParserValues>): Array<ParserValues> => {
//   return [
//     {
//       type: 'FunctionDefinition',
//       functionIdentifier: {
//         type: 'TypedIdentifier',
//         typedIdentifier: {
//           type: 'Identifier',
//           name: 'main'
//         },
//       },
//       baseType: {
//         type: 'BaseType',
//         specifiedType: 'int'
//       },
//       body: {
//         type: 'CompoundStatement',
//         statements: stmts as Array<CompletePartial<CStatement>>,
//       },
//     },
//   ]
// }

// const testAddition_1: Array<ParserValues> = [
//   {
//     type: 'ExpressionStatement',
//     expression: {
//       type: 'AssignmentExpression',
//       operator: '=',
//       left: {
//         type: 'Identifier',
//         name: 'x',
//       },
//       right: {
//         type: 'BinaryExpression',
//         operator: '+',
//         left: {
//           type: 'LiteralInt',
//           value: 1,
//         },
//         right: {
//           type: 'LiteralInt',
//           value: 2,
//         },
//       },
//     },
//   },
//   {
//     type: 'ExpressionStatement',
//     expression: {
//       type: 'AssignmentExpression',
//       operator: '=',
//       left: {
//         type: 'Identifier',
//         name: 'y',
//       },
//       right: {
//         type: 'BinaryExpression',
//         operator: '+',
//         left: {
//           type: 'LiteralInt',
//           value: 2,
//         },
//         right: {
//           type: 'LiteralInt',
//           value: 3,
//         },
//       },
//     },
//   },
// ]

testExpression(
  `
int main() {
  x = 1 + 2;
  y = 2 + 3;
}
`,
  [{}],
)

// const testMultiplication_1: Array<ParserValues> = [
//   {
//     type: 'ExpressionStatement',
//     expression: {
//       type: 'BinaryExpression',
//       operator: '*',
//       left: {
//         type: 'LiteralInt',
//         value: 2,
//       },
//       right: {
//         type: 'LiteralInt',
//         value: 3,
//       },
//     },
//   },
// ]
// testExpression(
//   `
// int main() {
//   2 * 3;
// }
// `,
//   autoWrapInMainFunction(testMultiplication_1),
// )

// const testMultipicationPrecedence_1: Array<ParserValues> = [
//   {
//     type: 'ExpressionStatement',
//     expression: {
//       type: 'BinaryExpression',
//       operator: '+',
//       left: {
//         type: 'BinaryExpression',
//         operator: '+',
//         left: {
//           type: 'LiteralInt',
//           value: 3,
//         },
//         right: {
//           type: 'BinaryExpression',
//           operator: '*',
//           left: {
//             type: 'LiteralInt',
//             value: 2,
//           },
//           right: {
//             type: 'LiteralInt',
//             value: 1,
//           },
//         },
//       },
//       right: {
//         type: 'LiteralInt',
//         value: 4,
//       },
//     },
//   },
// ]

// testExpression(
//   'int main() { 3 + 2 * 1 + 4; }',
//   autoWrapInMainFunction(testMultipicationPrecedence_1),
// )

// const testIdentifier_1: Array<ParserValues> = [
//   {
//     type: 'CompoundStatement',
//     statements: [
//       {
//         type: 'ExpressionStatement',
//         expression: {
//           type: 'BinaryExpression',
//           operator: '*',
//           left: {
//             type: 'LiteralInt',
//             value: 2,
//           },
//           right: {
//             type: 'Identifier',
//             name: 'a',
//           },
//         },
//       },
//     ],
//   },
// ]
// testExpression('int main() { 2 * a; }', autoWrapInMainFunction(testIdentifier_1))

// const testFunction_1: Array<ParserValues> = [
//   {
//     type: 'FunctionDefinition',
//     functionIdentifier: {
//       type: 'TypedIdentifier',
//       typedIdentifier: {
//         type: 'Identifier',
//         name: 'x',
//       },
//       pointerDepth: 2,
//       functionParams: [
//         {
//           type: 'FunctionParameterDeclarator',
//           paramTypedIdentifier: {
//             type: 'TypedIdentifier',
//             typedIdentifier: {
//               type: 'Identifier',
//               name: 'a'
//             },
//             pointerDepth: 1,
//           },
//           baseType: {
//             type: 'BaseType',
//             specifiedType: 'int'
//           },
//           isVarArg: false
//         }
//       ],
//     },
//     body: {
//       type: 'CompoundStatement',
//       statements: [
//         {
//           type: 'ReturnStatement',
//           expr: {
//             type: 'UnaryExpression',
//             operator: '&',
//             prefix: true,
//             argument: {
//               type: 'Identifier',
//               name: 'a',
//             }
//           },
//         },
//       ],
//     },
//   },
// ]

// testExpression(
//   `
// int **x(int *a) {
//   return &a;
// }
// `,
//   testFunction_1,
// )

// const testProgram_1: Array<ParserValues> = [
//   {
//     type: 'FunctionDefinition',
//     returnType: { type: 'TypeName', types: 'int' },
//     params: {
//       type: 'FunctionParamaters',
//       paramsList: [
//         {
//           type: 'FunctionParameterDeclaration',
//           paramType: { type: 'TypeName', types: 'int' },
//           isVarArg: false,
//           pointers: '',
//           identifier: { type: 'Identifier', name: 'a' },
//         },
//       ],
//     },
//     identifier: { type: 'Identifier', name: 'a' },
//     body: {
//       type: 'CompoundStatement',
//       statements: [
//         {
//           type: 'ReturnStatement',
//           expr: {
//             type: 'Identifier',
//             name: 'a',
//           },
//         },
//       ],
//     },
//   },
// ]

testExpression(
  `
int x(int a) {
  return a;
}

int x = 2;
int* y(int b) {
  return b + 2;
}
`,
  [{}, {}, {}],
)

// testExpression(
//   `
// int main() {

// }
// `,
//   testProgram_1,
// )
