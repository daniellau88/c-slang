import * as es from 'estree'

export type CNode =
  | CProgram
  | CExpression
  | CStatement
  | CTypedIdentifier
  | CFunctionDefinition
  | CFunctionParameterDeclarator
  | CDeclaration
  | CBaseType

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface BaseNode {
  type: string
  loc?: es.SourceLocation | null | undefined
}

export interface CProgram {
  type: 'Program'
  body: Array<CStatement | CFunctionDefinition>
}

export interface CFunctionDefinition {
  type: 'FunctionDefinition'
  functionIdentifier: CTypedIdentifier
  baseType: CBaseType
  body: CStatement
}

export interface CFunctionParameterDeclarator {
  type: 'FunctionParameterDeclarator'
  paramTypedIdentifier: CTypedIdentifier
  baseType: CBaseType
  isVarArg: boolean
}

export type CStatement =
  | CExpressionStatement
  | CCompoundStatement
  | CDeclarationStatement
  | CReturnStatement

export interface CExpressionStatement {
  type: 'ExpressionStatement'
  expression: CExpression
}

export interface CDeclarationStatement {
  type: 'DeclarationStatement'
  declarations: Array<CDeclaration>
}

export interface CDeclaration {
  type: 'Declaration'
  initTypedIdentifier: CTypedIdentifier
  baseType: CBaseType
  init?: CExpression // Or Array
}

export interface CExpressionMap {
  AssignmentExpression: CAssignmentExprssion
  BinaryExpression: CBinaryExpression
  Literal: CLiteral
  UnaryExpression: CUnaryExpression
  CastExpression: CCastExpression
  Identifier: CIdentifier
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface BaseExpression extends BaseNode {}

export interface CCompoundStatement extends BaseExpression {
  type: 'CompoundStatement'
  statements: Array<CStatement>
}

export interface CReturnStatement extends BaseExpression {
  type: 'ReturnStatement'
  expr?: CExpression
}

export interface CAssignmentExprssion extends BaseExpression {
  type: 'AssignmentExpression'
  operator: es.AssignmentOperator
  left: CExpression
  right: CExpression
}

export interface CUnaryExpression extends BaseExpression {
  type: 'UnaryExpression'
  operator: 'pre-increment' | 'pre-decrement' | 'size-of' | string
  prefix: true
  argument: CExpression
}

export interface CBinaryExpression extends BaseExpression {
  type: 'BinaryExpression'
  operator: '+' | '-' | '*' | '/' | '%'
  left: CExpression
  right: CExpression
}

export interface CCastExpression extends BaseExpression {
  type: 'CastExpression'
  castTypedIdentifier: CTypedIdentifier
  baseType: CBaseType
  expression: CExpression
}

export type CLiteral = CIntLiteralExpression | CFloatLiteralExpression

export type CExpression = CExpressionMap[keyof CExpressionMap]

export interface CIntLiteralExpression extends BaseNode, BaseExpression {
  type: 'LiteralInt'
  value: number
  raw?: string
}

export interface CFloatLiteralExpression extends BaseNode, BaseExpression {
  type: 'LiteralFloat'
  value: number
  raw?: string
}

export interface CIdentifier extends BaseExpression {
  type: 'Identifier'
  name: string
}

export type CType = 'int'

export interface CTypedIdentifier extends BaseNode {
  type: 'TypedIdentifier'
  typedIdentifier?: CTypedIdentifier | CIdentifier
  pointerDepth?: number
  arrayDimensions?: Array<CExpression | null>
  functionParams?: Array<CFunctionParameterDeclarator>
}

export interface CCastTypeName extends BaseNode {
  type: 'CastTypeName'
}

export interface CBaseType extends BaseNode {
  type: 'BaseType'
  specifiedType: CType
}
