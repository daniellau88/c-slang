import * as es from 'estree'

export type CASTNode =
  | CASTProgram
  | CASTFunctionDefinition
  | CASTExpression
  | CASTStatement
  | CASTDeclaration

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface BaseNode {
  type: string
  loc?: es.SourceLocation | null | undefined
}

export interface CASTProgram extends BaseNode {
  type: 'Program'
  children: Array<CASTStatement | CASTFunctionDefinition>
}

export interface CASTFunctionDefinition {
  type: 'FunctionDefinition'
  identifier: CASTIdentifier
  parameters: Array<CASTFunctionParameter>
  body: CASTCompoundStatement
  returnType: CASTType
}

export interface CASTFunctionParameter {
  type: 'FunctionParameter'
  identifier?: CASTIdentifier
  paramType: CASTType
  isVarArg: boolean
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface BaseStatement extends BaseNode {}

export interface CASTExpressionStatement extends BaseStatement {
  type: 'ExpressionStatement'
  expressions: Array<CASTExpression>
}

export interface CASTDeclarationStatement extends BaseStatement {
  type: 'DeclarationStatement'
  declarations: Array<CASTDeclaration>
}

export interface CASTDeclaration extends BaseNode {
  type: 'Declaration'
  declarationType: CASTType
  identifier: CASTIdentifier
  init?: CASTExpression
}

export interface CASTCompoundStatement extends BaseExpression {
  type: 'CompoundStatement'
  statements: Array<CASTStatement>
}

export interface CASTReturnStatement extends BaseExpression {
  type: 'ReturnStatement'
  expression?: CASTExpression
}

export type CASTStatement =
  | CASTExpressionStatement
  | CASTCompoundStatement
  | CASTDeclarationStatement
  | CASTReturnStatement

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface BaseExpression extends BaseNode {}

export interface CASTExpressionMap {
  AssignmentExpression: CASTAssignmentExprssion
  BinaryExpression: CASTBinaryExpression
  ConditionalExpression: CASTConditionalExprssion
  Literal: CASTLiteral
  UnaryExpression: CASTUnaryExpression
  CastExpression: CASTCastExpression
  Identifier: CASTIdentifier
  SizeOfExpression: CASTSizeOfExpression
  ArrayAccessExpression: CASTArrayAccessExpression
  FunctionCallExpression: CASTFunctionCallExpression
  ArrayExpression: CASTArrayExpression
}

export type CASTAssignableExpressions =
  | CASTUnaryExpression
  | CASTArrayAccessExpression
  | CASTFunctionCallExpression
  | CASTSizeOfExpression
  | CASTIdentifier

export interface CASTAssignmentExprssion extends BaseExpression {
  type: 'AssignmentExpression'
  operator: CASTAssignmentOperator
  left: CASTAssignableExpressions
  right: CASTExpression
}

export enum CASTAssignmentOperator {
  Equal,
  TimesEqual,
  DivideEqual,
  ModuloEqual,
  PlusEqual,
  MinusEqual,
  ShiftLeftEqual,
  ShiftRightEqual,
  BitwiseAndEqual,
  BitwiseXorEqual,
  BitwiseOrEqual,
}

export interface CASTConditionalExprssion extends BaseExpression {
  type: 'ConditionalExpression'
  predicate: CASTExpression
  ifTrue: CASTExpression
  ifFalse: CASTExpression
}

export enum CASTUnaryOperator {
  PreIncrement,
  PreDecrement,
  Address,
  Dereference,
  Positive,
  Negate,
  BitwiseNot,
  LogicalNot,
  PostIncrement,
  PostDecrement,
}

export interface CASTUnaryExpression extends BaseExpression {
  type: 'UnaryExpression'
  operator: CASTUnaryOperator
  expression: CASTExpression
}

export enum CASTBinaryOperator {
  Plus,
  Minus,
  Multiply,
  Divide,
  Modulo,
  LogicalOr,
  LogicalAnd,
  InclusiveOr,
  ExclusiveOr,
  BitwiseAnd,
  EqualityEqual,
  EqualityNotEqual,
  RelationalGreaterThan,
  RelationalLessThan,
  RelationalGreaterThanOrEqual,
  RelationalLessThanOrEqual,
  ShiftLeft,
  ShiftRight,
}

export interface CASTBinaryExpression extends BaseExpression {
  type: 'BinaryExpression'
  operator: CASTBinaryOperator
  left: CASTExpression
  right: CASTExpression
}

export interface CASTCastExpression extends BaseExpression {
  type: 'CastExpression'
  castType: CASTType
  expression: CASTExpression
}

export interface CASTSizeOfExpression extends BaseExpression {
  type: 'SizeOfExpression'
  typeArg: CASTType
}

export interface CASTArrayAccessExpression extends BaseExpression {
  type: 'ArrayAccessExpression'
  expression: CASTExpression
  indexExpression: CASTExpression
}

export interface CASTFunctionCallExpression extends BaseExpression {
  type: 'FunctionCallExpression'
  expression: CASTExpression
  argumentExpression: Array<CASTExpression>
}

export type CASTLiteral =
  | CASTIntLiteralExpression
  | CASTFloatLiteralExpression
  | CASTCharLiteralExpression

export interface CASTIntLiteralExpression extends BaseNode, BaseExpression {
  type: 'Literal'
  subtype: 'Int'
  value: string
}

export interface CASTFloatLiteralExpression extends BaseNode, BaseExpression {
  type: 'Literal'
  subtype: 'Float'
  value: string
}

export interface CASTCharLiteralExpression extends BaseNode, BaseExpression {
  type: 'Literal'
  subtype: 'Char'
  value: string
}

export interface CASTArrayExpression extends BaseNode, BaseExpression {
  type: 'ArrayExpression'
  elements: Array<CASTExpression>
}

export type CASTExpression = CASTExpressionMap[keyof CASTExpressionMap]

export interface CASTIdentifier extends BaseExpression {
  type: 'Identifier'
  name: string
}

interface CASTTypeModifierBase {
  type: 'TypeModifier'
}

export type CASTBaseType = 'int' | 'float' | 'char' | 'void'

export interface CASTTypeModifierBaseType extends CASTTypeModifierBase {
  subtype: 'BaseType'
  baseType: CASTBaseType
}

interface CASTTypeModifierArray extends CASTTypeModifierBase {
  subtype: 'Array'
  size?: CASTExpression
}

export interface CASTTypeModifierPointer extends CASTTypeModifierBase {
  subtype: 'Pointer'
  pointerDepth: number
}

interface CASTTypeModifierParameters extends CASTTypeModifierBase {
  subtype: 'Parameters'
  parameterTypeList: Array<CASTFunctionParameter>
}

export type CASTTypeModifier =
  | CASTTypeModifierBaseType
  | CASTTypeModifierArray
  | CASTTypeModifierPointer
  | CASTTypeModifierParameters

export type ProgramType = Array<CASTTypeModifier>

export interface CASTType {
  type: 'Type'
  typeModifiers: ProgramType
}
