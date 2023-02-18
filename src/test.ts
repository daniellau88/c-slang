import assert from 'assert'

import createContext from './createContext'
import { parse } from './parser/parser'

type ParserValues = string | number | Array<ParserValues> | { [x: string | number]: ParserValues }
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

const testExpresion = (expr: string, expectedMustHave: ParserValues) => {
  const context = createContext()
  const parsedProgram = parse(expr, context)
  console.log(JSON.stringify(parsedProgram))

  if (!parsedProgram || !parsedProgram.body) {
    assert(false)
  }

  const bodyExpr = parsedProgram.body as any as ParserValues
  const answer = isEqualToMustHave(bodyExpr, expectedMustHave)
  assert(answer)
}

const testAddition_1: ParserValues = [
  {
    type: 'ExpressionStatement',
    expression: {
      type: 'SequenceExpression',
      expressions: [
        {
          type: 'BinaryExpression',
          operator: '+',
          left: {
            type: 'Literal',
            value: 1,
          },
          right: {
            type: 'Literal',
            value: 2,
          },
        },
        {
          type: 'BinaryExpression',
          operator: '+',
          left: {
            type: 'Literal',
            value: 2,
          },
          right: {
            type: 'Literal',
            value: 3,
          },
        },
      ],
    },
  },
]
testExpresion('1 + 2;2 + 3;', testAddition_1)

const testMultiplication_1: ParserValues = [
  {
    type: 'ExpressionStatement',
    expression: {
      type: 'SequenceExpression',
      expressions: [
        {
          type: 'BinaryExpression',
          operator: '*',
          left: {
            type: 'Literal',
            value: 2,
          },
          right: {
            type: 'Literal',
            value: 3,
          },
        },
      ],
    },
  },
]
testExpresion('2 * 3;', testMultiplication_1)

const testMultipicationPrecedence_1: ParserValues = [
  {
    type: 'ExpressionStatement',
    expression: {
      type: 'SequenceExpression',
      expressions: [
        {
          type: 'BinaryExpression',
          operator: '+',
          left: {
            type: 'BinaryExpression',
            operator: '+',
            left: {
              type: 'Literal',
              value: 3,
            },
            right: {
              type: 'BinaryExpression',
              operator: '*',
              left: {
                type: 'Literal',
                value: 2,
              },
              right: {
                type: 'Literal',
                value: 1,
              },
            },
          },
          right: {
            type: 'Literal',
            value: 4,
          },
        },
      ],
    },
  },
]
testExpresion('3 + 2 * 1 + 4;', testMultipicationPrecedence_1)

const testIdentifier_1: ParserValues = [
  {
    type: 'ExpressionStatement',
    expression: {
      type: 'SequenceExpression',
      expressions: [
        {
          type: 'BinaryExpression',
          operator: '*',
          left: {
            type: 'Literal',
            value: 2,
          },
          right: {
            type: 'Identifier',
            name: 'a',
          },
        },
      ],
    },
  },
]
testExpresion('2 * a;', testIdentifier_1)
