import assert from 'assert'

import {
  CASTArrayAccessExpression,
  CASTAssignmentOperator,
  CASTBaseType,
  CASTBinaryOperator,
  CASTCompoundStatement,
  CASTDeclaration,
  CASTDeclarationStatement,
  CASTExpression,
  CASTExpressionStatement,
  CASTFunctionCallExpression,
  CASTFunctionDefinition,
  CASTFunctionParameter,
  CASTIdentifier,
  CASTLiteral,
  CASTProgram,
  CASTReturnStatement,
  CASTSizeOfExpression,
  CASTStatement,
  CASTType,
  CASTTypeModifier,
  CASTUnaryExpression,
  CASTUnaryOperator,
  ProgramType,
} from '../typings/programAST'
import {
  CCSTAbstractDeclarator,
  CCSTAdditiveExpression,
  CCSTAndExpression,
  CCSTAssignmentExpression,
  CCSTAssignmentOperator,
  CCSTCastExpression,
  CCSTCompoundStatement,
  CCSTConditionalExpression,
  CCSTConstant,
  CCSTConstantExpression,
  CCSTDeclarationSpecifier,
  CCSTDeclarationStatement,
  CCSTDeclarator,
  CCSTDirectAbstractDeclarator,
  CCSTDirectDeclarator,
  CCSTEqualityExpression,
  CCSTExclusiveOrExpression,
  CCSTExpression,
  CCSTExpressionStatement,
  CCSTFunctionDefinition,
  CCSTIdentifier,
  CCSTInclusiveOrExpression,
  CCSTInitDeclarator,
  CCSTInitDeclaratorList,
  CCSTInitializer,
  CCSTInitializerList,
  CCSTLogicalAndExpression,
  CCSTLogicalOrExpression,
  CCSTMultiplicativeExpression,
  CCSTParameterDeclaration,
  CCSTParameterList,
  CCSTParameterTypeList,
  CCSTPostfixExpression,
  CCSTPrimaryExpression,
  CCSTProgram,
  CCSTRelationalExpression,
  CCSTReturnStatement,
  CCSTShiftExpression,
  CCSTStatement,
  CCSTTypeName,
  CCSTTypeSpecifier,
  CCSTUnaryExpression,
  CCSTUnaryOperator,
} from '../typings/programCST'

export function convertCSTProgramToAST(node: CCSTProgram): CASTProgram {
  return {
    type: 'Program',
    children: node.children.map(x => {
      return x.type === 'DeclarationStatement'
        ? visitCCSTDeclarationStatement(x)
        : visitCCSTFunctionDefinition(x)
    }),
  }
}

interface TypedIdentifier {
  type: CASTType
  identifier: CASTIdentifier
}

function visitCCSTDeclarator(node: CCSTDeclarator): TypedIdentifier {
  const directDeclarator = visitCCSTDirectDeclarator(node.directDeclarator)
  const pointer = node.pointer
  if (pointer) {
    directDeclarator.type.typeModifiers.push({
      type: 'TypeModifier',
      subtype: 'Pointer',
      pointerDepth: pointer.text.length,
    })
  }
  return directDeclarator
}

function visitCCSTDirectDeclarator(node: CCSTDirectDeclarator): TypedIdentifier {
  switch (node.subtype) {
    case 'Identifier':
      return {
        type: { type: 'Type', typeModifiers: [] },
        identifier: { type: 'Identifier', name: node.identifier.name },
      }
    case 'NestedDeclarator':
      return visitCCSTDeclarator(node.declarator)
    case 'RecursiveIdentifier':
      throw new Error('Not implemented')
    case 'RecursiveArray':
    case 'RecursiveParameters':
      const arr: CASTTypeModifier[] = []
      let currentDirectDeclarator: CCSTDirectDeclarator = node

      while (
        currentDirectDeclarator.subtype === 'RecursiveArray' ||
        currentDirectDeclarator.subtype === 'RecursiveParameters'
      ) {
        if (currentDirectDeclarator.subtype === 'RecursiveArray') {
          let size: CASTExpression | undefined = undefined
          if (currentDirectDeclarator.constantExpression) {
            size = visitCCSTConstantExpression(currentDirectDeclarator.constantExpression)
          }
          arr.push({
            type: 'TypeModifier',
            subtype: 'Array',
            size: size,
          })
        }

        if (currentDirectDeclarator.subtype === 'RecursiveParameters') {
          const parameterTypeList = currentDirectDeclarator.parameterTypeList
          arr.push({
            type: 'TypeModifier',
            subtype: 'Parameters',
            parameterTypeList: parameterTypeList
              ? visitCCSTParameterTypeList(parameterTypeList)
              : [],
          })
        }

        currentDirectDeclarator = currentDirectDeclarator.directDeclarator
      }
      arr.reverse()
      const nestedDeclarators = visitCCSTDirectDeclarator(currentDirectDeclarator)
      const modifiers = [...nestedDeclarators.type.typeModifiers].concat(...arr)
      return {
        ...nestedDeclarators,
        type: {
          type: 'Type',
          typeModifiers: modifiers,
        },
      }
  }
}

function visitCCSTParameterTypeList(node: CCSTParameterTypeList): Array<CASTFunctionParameter> {
  if (node.hasVarArg) {
    throw new Error('Not implemented')
  }

  return visitCCSTParameterList(node.parameterList)
}

function visitCCSTParameterList(node: CCSTParameterList): Array<CASTFunctionParameter> {
  const arr: Array<CASTFunctionParameter> = []
  let currentNode: CCSTParameterList | undefined = node
  while (currentNode) {
    arr.push(visitCCSTParameterDeclaration(currentNode.parameterDeclaration))
    currentNode = currentNode.parameterList
  }
  arr.reverse()
  return arr
}

function visitCCSTParameterDeclaration(node: CCSTParameterDeclaration): CASTFunctionParameter {
  const declarationSpecifier = visitCCSTDeclarationSpecifier(node.declarationSpecifiers)
  switch (node.subtype) {
    case 'Normal':
      return {
        type: 'FunctionParameter',
        paramType: declarationSpecifier,
        isVarArg: false,
      }
    case 'Declarator':
      const declarator = visitCCSTDeclarator(node.declarator)
      declarator.type.typeModifiers.push(declarationSpecifier.typeModifiers[0]) // This should be a base type
      return {
        type: 'FunctionParameter',
        paramType: declarator.type,
        identifier: declarator.identifier,
        isVarArg: false,
      }
    case 'AbstractDeclarator':
      const abstractDeclarator = visitCCSTAbstractDeclarator(node.abstractDeclarator)
      abstractDeclarator.type.typeModifiers.push(declarationSpecifier.typeModifiers[0]) // This should be a base type
      return {
        type: 'FunctionParameter',
        paramType: abstractDeclarator.type,
        isVarArg: false,
      }
  }
}

function visitCCSTFunctionDefinition(node: CCSTFunctionDefinition): CASTFunctionDefinition {
  const declarationSpecifier = node.declarationSpecifier
    ? visitCCSTDeclarationSpecifier(node.declarationSpecifier)
    : undefined

  const declaratorTypedIdentifier = visitCCSTDeclarator(node.declarator)
  const declaratorType = declaratorTypedIdentifier.type
  const declaratorParameters = declaratorType.typeModifiers[0]
  assert(declaratorParameters.subtype === 'Parameters')
  const declaratorReturnType = declaratorType.typeModifiers.splice(1)
  if (declarationSpecifier) {
    declaratorReturnType.push(declarationSpecifier.typeModifiers[0])
  }
  const declaratorIdentifier = declaratorTypedIdentifier.identifier

  return {
    type: 'FunctionDefinition',
    identifier: declaratorIdentifier,
    parameters: declaratorParameters.parameterTypeList,
    returnType: { type: 'Type', typeModifiers: declaratorReturnType },
    body: visitCCSTCompoundStatement(node.compoundStatement),
  }
}

function visitCCSTDeclarationSpecifier(node: CCSTDeclarationSpecifier): CASTType {
  return visitCCSTTypeSpecifier(node.typeSpecifier)
}

function visitCCSTTypeSpecifier(node: CCSTTypeSpecifier): CASTType {
  return {
    type: 'Type',
    typeModifiers: [
      { type: 'TypeModifier', subtype: 'BaseType', baseType: node.baseType as CASTBaseType },
    ],
  }
}

function visitCCSTStatement(node: CCSTStatement): CASTStatement {
  const statement = node.statement
  const statementType = statement.type
  switch (statementType) {
    case 'CompoundStatement':
      return visitCCSTCompoundStatement(statement)
    case 'DeclarationStatement':
      return visitCCSTDeclarationStatement(statement)
    case 'ReturnStatement':
      return visitCCSTReturnStatement(statement)
    case 'ExpressionStatement':
      return visitCCSTExpressionStatement(statement)
    default:
      throw new Error('Not supported')
  }
}

function visitCCSTDeclarationStatement(node: CCSTDeclarationStatement): CASTDeclarationStatement {
  const baseType = visitCCSTDeclarationSpecifier(node.declarationSpecifiers)

  return {
    type: 'DeclarationStatement',
    declarations: visitCCSTInitDeclaratorList(node.initDeclaratorList).map(x => {
      x.declarationType.typeModifiers.push(baseType.typeModifiers[0])
      return x
    }),
  }
}

function visitCCSTInitDeclaratorList(node: CCSTInitDeclaratorList): Array<CASTDeclaration> {
  return node.initDeclarators.map(x => visitCCSTInitDeclarator(x))
}

function visitCCSTInitDeclarator(node: CCSTInitDeclarator): CASTDeclaration {
  const declaratorTypedIdentifier = visitCCSTDeclarator(node.declarator)
  let init: CASTExpression | undefined = undefined
  if (node.initializer) {
    init = visitCCSTInitializer(node.initializer)
  }

  return {
    type: 'Declaration',
    identifier: declaratorTypedIdentifier.identifier,
    declarationType: declaratorTypedIdentifier.type,
    init: init,
  }
}

function visitCCSTInitializer(node: CCSTInitializer): CASTExpression {
  return node.subtype === 'Array'
    ? visitCCSTInitializerList(node.initializerList)
    : visitCCSTConditionalExpression(node.conditionalExpression)
}

function visitCCSTInitializerList(node: CCSTInitializerList): CASTExpression {
  let currentNode: CCSTInitializerList | undefined = node
  const arr: Array<CASTExpression> = []
  while (currentNode) {
    arr.push(visitCCSTInitializer(currentNode.initializer))
    currentNode =
      currentNode.subtype === 'RecursiveInitializer' ? currentNode.initializerList : undefined
  }
  return {
    type: 'ArrayExpression',
    elements: arr,
  }
}

function visitCCSTCompoundStatement(node: CCSTCompoundStatement): CASTCompoundStatement {
  return {
    type: 'CompoundStatement',
    statements: node.statements.map(x => visitCCSTStatement(x)),
  }
}

function visitCCSTReturnStatement(node: CCSTReturnStatement): CASTReturnStatement {
  let expression: CASTExpression | undefined = undefined
  if (node.expression) {
    expression = visitCCSTExpression(node.expression)[0] // TODO: Assume first expression
  }
  return {
    type: 'ReturnStatement',
    expression: expression,
  }
}

function visitCCSTExpressionStatement(node: CCSTExpressionStatement): CASTExpressionStatement {
  return {
    type: 'ExpressionStatement',
    expressions: visitCCSTExpression(node.expression),
  }
}

function visitCCSTExpression(node: CCSTExpression): Array<CASTExpression> {
  const arr: Array<CASTExpression> = []
  let currentNode: CCSTExpression | undefined = node
  while (currentNode) {
    arr.push(visitCCSTAssignmentExpression(currentNode.assignmentExpression))
    currentNode = currentNode.subtype === 'Expression' ? currentNode.expression : undefined
  }

  return arr
}

function visitCCSTAssignmentExpression(node: CCSTAssignmentExpression): CASTExpression {
  return node.subtype === 'Assignment'
    ? {
        type: 'AssignmentExpression',
        operator: visitCCSTAssignmentOperator(node.assignmentOperator),
        left: visitCCSTUnaryExpression(node.unaryExpression),
        right: visitCCSTAssignmentExpression(node.assignmentExpression),
      }
    : visitCCSTConditionalExpression(node.conditionalExpression)
}

function visitCCSTAssignmentOperator(node: CCSTAssignmentOperator): CASTAssignmentOperator {
  switch (node.operator) {
    case 'BitwiseAndEqual':
      return CASTAssignmentOperator.BitwiseAndEqual
    case 'BitwiseOrEqual':
      return CASTAssignmentOperator.BitwiseOrEqual
    case 'BitwiseXorEqual':
      return CASTAssignmentOperator.BitwiseXorEqual
    case 'DivideEqual':
      return CASTAssignmentOperator.DivideEqual
    case 'Equal':
      return CASTAssignmentOperator.Equal
    case 'MinusEqual':
      return CASTAssignmentOperator.MinusEqual
    case 'ModuloEqual':
      return CASTAssignmentOperator.ModuloEqual
    case 'PlusEqual':
      return CASTAssignmentOperator.PlusEqual
    case 'ShiftLeftEqual':
      return CASTAssignmentOperator.ShiftLeftEqual
    case 'ShiftRightEqual':
      return CASTAssignmentOperator.ShiftRightEqual
    case 'TimesEqual':
      return CASTAssignmentOperator.TimesEqual
  }
}

function visitCCSTConstantExpression(node: CCSTConstantExpression): CASTExpression {
  return visitCCSTConditionalExpression(node.conditionalExpression)
}

function visitCCSTConditionalExpression(node: CCSTConditionalExpression): CASTExpression {
  return node.subtype === 'Conditional'
    ? {
        type: 'ConditionalExpression',
        predicate: visitCCSTLogicalOrExpression(node.logicalOrExpression),
        ifTrue: visitCCSTExpression(node.expression)[0], // TODO: Assume only singular expression
        ifFalse: visitCCSTConditionalExpression(node.conditionalExpression),
      }
    : visitCCSTLogicalOrExpression(node.logicalOrExpression)
}

function visitCCSTLogicalOrExpression(node: CCSTLogicalOrExpression): CASTExpression {
  return node.subtype === 'LogicalOr'
    ? {
        type: 'BinaryExpression',
        operator: CASTBinaryOperator.LogicalOr,
        left: visitCCSTLogicalOrExpression(node.logicalOrExpression),
        right: visitCCSTLogicalAndExpression(node.logicalAndExpression),
      }
    : visitCCSTLogicalAndExpression(node.logicalAndExpression)
}

function visitCCSTLogicalAndExpression(node: CCSTLogicalAndExpression): CASTExpression {
  return node.subtype === 'LogicalAnd'
    ? {
        type: 'BinaryExpression',
        operator: CASTBinaryOperator.LogicalAnd,
        left: visitCCSTLogicalAndExpression(node.logicalAndExpression),
        right: visitCCSTInclusiveOrExpression(node.inclusiveOrExpression),
      }
    : visitCCSTInclusiveOrExpression(node.inclusiveOrExpression)
}

function visitCCSTInclusiveOrExpression(node: CCSTInclusiveOrExpression): CASTExpression {
  return node.subtype === 'InclusiveOr'
    ? {
        type: 'BinaryExpression',
        operator: CASTBinaryOperator.InclusiveOr,
        left: visitCCSTInclusiveOrExpression(node.inclusiveOrExpression),
        right: visitCCSTExclusiveOrExpression(node.exclusiveOrExpression),
      }
    : visitCCSTExclusiveOrExpression(node.exclusiveOrExpression)
}

function visitCCSTExclusiveOrExpression(node: CCSTExclusiveOrExpression): CASTExpression {
  return node.subtype === 'ExclusiveOr'
    ? {
        type: 'BinaryExpression',
        operator: CASTBinaryOperator.ExclusiveOr,
        left: visitCCSTExclusiveOrExpression(node.exclusiveOrExpression),
        right: visitCCSTAndExpression(node.andExpression),
      }
    : visitCCSTAndExpression(node.andExpression)
}

function visitCCSTAndExpression(node: CCSTAndExpression): CASTExpression {
  return node.subtype === 'And'
    ? {
        type: 'BinaryExpression',
        operator: CASTBinaryOperator.BitwiseAnd,
        left: visitCCSTAndExpression(node.andExpression),
        right: visitCCSTEqualityExpression(node.equalityExpression),
      }
    : visitCCSTEqualityExpression(node.equalityExpression)
}

function visitCCSTEqualityExpression(node: CCSTEqualityExpression): CASTExpression {
  return node.subtype === 'Equality'
    ? {
        type: 'BinaryExpression',
        operator:
          node.equalityOperator === 'Equal'
            ? CASTBinaryOperator.EqualityEqual
            : CASTBinaryOperator.EqualityNotEqual,
        left: visitCCSTEqualityExpression(node.equalityExpression),
        right: visitCCSTRelationalExpression(node.relationalExpression),
      }
    : visitCCSTRelationalExpression(node.relationalExpression)
}

function visitCCSTRelationalExpression(node: CCSTRelationalExpression): CASTExpression {
  return node.subtype === 'Relational'
    ? {
        type: 'BinaryExpression',
        operator:
          node.relationalOperator === 'GreaterThan'
            ? CASTBinaryOperator.RelationalGreaterThan
            : node.relationalOperator === 'LessThan'
            ? CASTBinaryOperator.RelationalLessThan
            : node.relationalOperator === 'GreaterThanOrEqual'
            ? CASTBinaryOperator.RelationalGreaterThanOrEqual
            : CASTBinaryOperator.RelationalLessThanOrEqual,
        left: visitCCSTRelationalExpression(node.relationalExpression),
        right: visitCCSTShiftExpression(node.shiftExpression),
      }
    : visitCCSTShiftExpression(node.shiftExpression)
}

function visitCCSTShiftExpression(node: CCSTShiftExpression): CASTExpression {
  return node.subtype === 'Shift'
    ? {
        type: 'BinaryExpression',
        operator:
          node.shiftOperator === 'ShiftLeft'
            ? CASTBinaryOperator.ShiftLeft
            : CASTBinaryOperator.ShiftRight,
        left: visitCCSTShiftExpression(node.shiftExpression),
        right: visitCCSTAdditiveExpression(node.additiveExpression),
      }
    : visitCCSTAdditiveExpression(node.additiveExpression)
}

function visitCCSTAdditiveExpression(node: CCSTAdditiveExpression): CASTExpression {
  return node.subtype === 'Additive'
    ? {
        type: 'BinaryExpression',
        operator:
          node.additiveOperator === 'Plus' ? CASTBinaryOperator.Plus : CASTBinaryOperator.Minus,
        left: visitCCSTAdditiveExpression(node.additiveExpression),
        right: visitCCSTMultiplicativeExpression(node.multiplicativeExpression),
      }
    : visitCCSTMultiplicativeExpression(node.multiplicativeExpression)
}

function visitCCSTMultiplicativeExpression(node: CCSTMultiplicativeExpression): CASTExpression {
  return node.subtype === 'Multiplicative'
    ? {
        type: 'BinaryExpression',
        operator:
          node.multiplicativeOperator === 'Asterick'
            ? CASTBinaryOperator.Multiply
            : node.multiplicativeOperator === 'Backslash'
            ? CASTBinaryOperator.Divide
            : CASTBinaryOperator.Modulo,
        left: visitCCSTMultiplicativeExpression(node.multiplicativeExpression),
        right: visitCCSTCastExpression(node.castExpression),
      }
    : visitCCSTCastExpression(node.castExpression)
}

function visitCCSTCastExpression(node: CCSTCastExpression): CASTExpression {
  return node.subtype === 'Cast'
    ? {
        type: 'CastExpression',
        castType: visitCCSTTypeName(node.typeName),
        expression: visitCCSTCastExpression(node.castExpression),
      }
    : visitCCSTUnaryExpression(node.unaryExpression)
}

function visitCCSTUnaryExpression(
  node: CCSTUnaryExpression,
):
  | CASTUnaryExpression
  | CASTArrayAccessExpression
  | CASTFunctionCallExpression
  | CASTSizeOfExpression
  | CASTIdentifier {
  return node.subtype === 'Increment'
    ? {
        type: 'UnaryExpression',
        operator:
          node.incrementType === 'Increment'
            ? CASTUnaryOperator.PreIncrement
            : CASTUnaryOperator.PreDecrement,
        expression: visitCCSTUnaryExpression(node.unaryExpression),
      }
    : node.subtype === 'UnaryOperator'
    ? {
        type: 'UnaryExpression',
        operator: visitCCSTUnaryOperator(node.unaryOperator),
        expression: visitCCSTCastExpression(node.castExpression),
      }
    : node.subtype === 'SizeOf'
    ? {
        type: 'SizeOfExpression',
        typeArg: visitCCSTTypeName(node.typeName),
      }
    : (visitCCSTPostfixExpression(node.postfixExpression) as CASTUnaryExpression | CASTIdentifier)
}

function visitCCSTUnaryOperator(node: CCSTUnaryOperator): CASTUnaryOperator {
  switch (node.operator) {
    case 'Ampersand':
      return CASTUnaryOperator.Address
    case 'Asterick':
      return CASTUnaryOperator.Dereference
    case 'Exclamationmark':
      return CASTUnaryOperator.LogicalNot
    case 'Minus':
      return CASTUnaryOperator.Negate
    case 'Plus':
      return CASTUnaryOperator.Positive
    case 'Tilda':
      return CASTUnaryOperator.BitwiseNot
  }
}

function visitCCSTPostfixExpression(node: CCSTPostfixExpression): CASTExpression {
  if (node.subtype === 'DerefMember' || node.subtype === 'Member') {
    throw new Error('Not supported')
  }
  return node.subtype === 'Increment'
    ? {
        type: 'UnaryExpression',
        operator:
          node.incrementType === 'Increment'
            ? CASTUnaryOperator.PostIncrement
            : CASTUnaryOperator.PostDecrement,
        expression: visitCCSTPostfixExpression(node.postfixExpression),
      }
    : node.subtype === 'Array'
    ? {
        type: 'ArrayAccessExpression',
        expression: visitCCSTPostfixExpression(node.postfixExpression),
        indexExpression: visitCCSTAssignmentExpression(node.assignmentExpression),
      }
    : node.subtype === 'FunctionCall'
    ? {
        type: 'FunctionCallExpression',
        expression: visitCCSTPostfixExpression(node.postfixExpression),
        argumentExpression: visitCCSTExpression(node.expression),
      }
    : visitCCSTPrimaryExpression(node.primaryExpression)
}

function visitCCSTPrimaryExpression(node: CCSTPrimaryExpression): CASTExpression {
  return node.subtype === 'Identifier'
    ? visitCCSTIdentifier(node.identifier)
    : node.subtype === 'Constant'
    ? visitCCSTConstant(node.constant)
    : visitCCSTExpression(node.expression)[0] // TODO: Assume only first element
}

function visitCCSTIdentifier(node: CCSTIdentifier): CASTIdentifier {
  return {
    type: 'Identifier',
    name: node.name,
  }
}

function visitCCSTConstant(node: CCSTConstant): CASTLiteral {
  return node.subtype === 'Character'
    ? {
        type: 'Literal',
        subtype: 'Char',
        value: node.characterConstant.value,
      }
    : node.subtype === 'Float'
    ? {
        type: 'Literal',
        subtype: 'Float',
        value: node.floatConstant.value,
      }
    : {
        type: 'Literal',
        subtype: 'Int',
        value: node.integerConstant.value,
      }
}

function visitCCSTTypeName(node: CCSTTypeName): CASTType {
  let typeModifiers: ProgramType = []
  if (node.abstractDeclarator) {
    typeModifiers = visitCCSTAbstractDeclarator(node.abstractDeclarator).type.typeModifiers
  }

  const typeSpecifier = visitCCSTTypeSpecifier(node.typeSpecifier)
  const baseType = typeSpecifier.typeModifiers[0]
  typeModifiers.push(baseType)

  return {
    type: 'Type',
    typeModifiers: typeModifiers,
  }
}

type OptionalTypedIdentifier = Omit<TypedIdentifier, 'identifier'>

function visitCCSTAbstractDeclarator(node: CCSTAbstractDeclarator): OptionalTypedIdentifier {
  let directAbstractDeclarator: OptionalTypedIdentifier = {
    type: { type: 'Type', typeModifiers: [] },
  }
  if (node.directAbstractDeclarator) {
    directAbstractDeclarator = visitCCSTDirectAbstractDeclarator(node.directAbstractDeclarator)
  }

  const pointer = node.pointer
  if (pointer) {
    directAbstractDeclarator.type.typeModifiers.push({
      type: 'TypeModifier',
      subtype: 'Pointer',
      pointerDepth: pointer.text.length,
    })
  }
  return directAbstractDeclarator
}

function visitCCSTDirectAbstractDeclarator(
  node: CCSTDirectAbstractDeclarator,
): OptionalTypedIdentifier {
  switch (node.subtype) {
    case 'NestedAbstractDeclarator':
      return visitCCSTAbstractDeclarator(node.abstractDeclarator)
    case 'Array':
      return {
        type: {
          type: 'Type',
          typeModifiers: [
            {
              type: 'TypeModifier',
              subtype: 'Array',
              size: node.constantExpression
                ? visitCCSTConstantExpression(node.constantExpression)
                : undefined,
            },
          ],
        },
      }
    case 'Parameters':
      return {
        type: {
          type: 'Type',
          typeModifiers: [
            {
              type: 'TypeModifier',
              subtype: 'Parameters',
              parameterTypeList: node.parameterTypeList
                ? visitCCSTParameterTypeList(node.parameterTypeList)
                : [],
            },
          ],
        },
      }
    case 'RecursiveArray':
    case 'RecursiveParameters':
      const arr: CASTTypeModifier[] = []
      let currentDirectAbstractDeclarator: CCSTDirectAbstractDeclarator = node

      while (
        currentDirectAbstractDeclarator.subtype === 'RecursiveArray' ||
        currentDirectAbstractDeclarator.subtype === 'RecursiveParameters'
      ) {
        if (currentDirectAbstractDeclarator.subtype === 'RecursiveArray') {
          let size: CASTExpression | undefined = undefined
          if (currentDirectAbstractDeclarator.constantExpression) {
            size = visitCCSTConstantExpression(currentDirectAbstractDeclarator.constantExpression)
          }
          arr.push({
            type: 'TypeModifier',
            subtype: 'Array',
            size: size,
          })
        }

        if (currentDirectAbstractDeclarator.subtype === 'RecursiveParameters') {
          const parameterTypeList = currentDirectAbstractDeclarator.parameterTypeList
          arr.push({
            type: 'TypeModifier',
            subtype: 'Parameters',
            parameterTypeList: parameterTypeList
              ? visitCCSTParameterTypeList(parameterTypeList)
              : [],
          })
        }

        currentDirectAbstractDeclarator = currentDirectAbstractDeclarator.directAbstractDeclarator
      }
      arr.reverse()
      const nestedDeclarators = visitCCSTDirectAbstractDeclarator(currentDirectAbstractDeclarator)
      const modifiers = [...nestedDeclarators.type.typeModifiers].concat(...arr)
      return {
        ...nestedDeclarators,
        type: {
          type: 'Type',
          typeModifiers: modifiers,
        },
      }
  }
}
