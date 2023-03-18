import assert from 'assert'

import createContext from './createContext'
import { convertCSTProgramToAST } from './parser/ASTConverter'
import { parse } from './parser/parser'

type CompletePartial<K> = {
  [attr in keyof K]?: K[attr] extends object
    ? CompletePartial<K[attr]>
    : K[attr] extends object | null
    ? CompletePartial<K[attr]> | null
    : K[attr] extends object | null | undefined
    ? CompletePartial<K[attr]> | null | undefined
    : K[attr]
}

type ParserValues = CompletePartial<{}>
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

  if (!parsedProgram || !parsedProgram) {
    assert(false)
  }

  const ast = convertCSTProgramToAST(parsedProgram)
  console.log(JSON.stringify(ast))

  const bodyExpr = parsedProgram.children as Array<ParserValues>
  if (bodyExpr.length !== expectedMustHave.length) {
    assert(false)
  }

  const answer = bodyExpr.map((x, i) => isEqualToMustHave(x, expectedMustHave[i]))
  assert(answer)
}

testExpression(
  `
int main() {
  x = 1 + 2;
  y = 2 + 3;
}
`,
  [{}],
)

testExpression(
  `
int **x(int *a) {
  return &a;
}
`,
  [{}],
)

testExpression(
  `
int (*x(int[3], int*))[3] {
  return a;
}
`,
  [{}],
)

testExpression(
  `
int (*x(int a))[3] {
  return a;
}
int z = 2, a = 3, *d = 4, (*e)[3];
int* y(int b) {
  x(2);
  return b + 2;
}
`,
  [{}, {}, {}],
)
