import * as es from 'estree'

export type CASTNode =
  | CASTProgram
  | CASTFunctionDefinition
  | CASTFunctionParameter
  | CASTExpression
  | CASTStatement
  | CASTDeclaration
  | CASTDummyNode

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface BaseNode {
  type: string
  loc: es.SourceLocation
}

export interface CASTDummyNode extends BaseNode {
  type: 'Dummy'
}

export interface CASTProgram extends BaseNode {
  type: 'Program'
  children: Array<CASTDeclarationStatement | CASTFunctionDefinition>
}

export interface CASTFunctionDefinition extends BaseNode {
  type: 'FunctionDefinition'
  identifier: CASTIdentifier
  parameters: Array<CASTFunctionParameter>
  body: CASTCompoundStatement
  returnType: CASTType
}

export interface CASTFunctionParameter extends BaseNode {
  type: 'FunctionParameter'
  identifier?: CASTIdentifier
  paramType: CASTType
  isVarArg: boolean
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface BaseStatement extends BaseNode {}

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

export interface CASTExpressionStatement extends BaseStatement {
  type: 'ExpressionStatement'
  expressions: Array<CASTExpression>
}

export interface CASTCompoundStatement extends BaseStatement {
  type: 'CompoundStatement'
  statements: Array<CASTStatement>
}

export interface CASTIfStatement extends BaseStatement {
  type: 'IfStatement'
  condition: CASTExpression
  ifTrue: CASTStatement
  ifFalse?: CASTStatement
}

export interface CASTSwitchStatement extends BaseStatement {
  type: 'SwitchStatement'
  expression: CASTExpression
  body: CASTSwitchBody
}

export interface CASTSwitchBody extends BaseNode {
  type: 'SwitchBody'
  clauses: Array<CASTSwitchClauseBody>
}

interface CASTSwitchClauseBodyBase extends BaseNode {
  type: 'SwitchClauseBody'
}

interface CASTSwitchClauseBodyBaseTypeCase extends CASTSwitchClauseBodyBase {
  subtype: 'Case'
  expression: CASTExpression
  statements: Array<CASTStatement>
}

interface CASTSwitchClauseBodyBaseTypeDefault extends CASTSwitchClauseBodyBase {
  subtype: 'Default'
  statements: Array<CASTStatement>
}

export type CASTSwitchClauseBody =
  | CASTSwitchClauseBodyBaseTypeCase
  | CASTSwitchClauseBodyBaseTypeDefault

export interface CASTWhileStatement extends BaseStatement {
  type: 'WhileStatement'
  condition: CASTExpression
  statement: CASTStatement
}

export interface CASTDoStatement extends BaseStatement {
  type: 'DoStatement'
  condition: CASTExpression
  statement: CASTStatement
}

export interface CASTForStatement extends BaseStatement {
  type: 'ForStatement'
  statement: CASTStatement
  initDeclaration?: CASTDeclarationStatement | CASTExpressionStatement
  testExpression?: CASTExpression
  updateExpression?: CASTExpression
}

export interface CASTGotoStatement extends BaseStatement {
  type: 'GotoStatement'
  identifier: CASTIdentifier
}

export interface CASTContinueStatement extends BaseStatement {
  type: 'ContinueStatement'
}

export interface CASTBreakStatement extends BaseStatement {
  type: 'BreakStatement'
}

export interface CASTReturnStatement extends BaseStatement {
  type: 'ReturnStatement'
  expression?: CASTExpression
}

export type CASTStatement =
  | CASTDeclarationStatement
  | CASTExpressionStatement
  | CASTCompoundStatement
  | CASTIfStatement
  | CASTSwitchStatement
  | CASTWhileStatement
  | CASTDoStatement
  | CASTForStatement
  | CASTGotoStatement
  | CASTContinueStatement
  | CASTBreakStatement
  | CASTReturnStatement

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface BaseExpression extends BaseNode {}

export interface CASTExpressionMap {
  AssignmentExpression: CASTAssignmentExpression
  BinaryExpression: CASTBinaryExpression
  ConditionalExpression: CASTConditionalExprssion
  Literal: CASTLiteral
  StringLiteral: CASTStringLiteral
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

export interface CASTAssignmentExpression extends BaseExpression {
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
  PreIncrement = 'PreIncrement',
  PreDecrement = 'PreDecrement',
  Address = 'Address',
  Dereference = 'Dereference',
  Positive = 'Positive',
  Negate = 'Negate',
  BitwiseNot = 'BitwiseNot',
  LogicalNot = 'LogicalNot',
  PostIncrement = 'PostIncrement',
  PostDecrement = 'PostDecrement',
}

export interface CASTUnaryExpression extends BaseExpression {
  type: 'UnaryExpression'
  operator: CASTUnaryOperator
  expression: CASTExpression
}

export enum CASTBinaryOperator {
  Plus = 'Plus',
  Minus = 'Minus',
  Multiply = 'Multiply',
  Divide = 'Divide',
  Modulo = 'Modulo',
  LogicalOr = 'LogicalOr',
  LogicalAnd = 'LogicalAnd',
  InclusiveOr = 'InclusiveOr',
  ExclusiveOr = 'ExclusiveOr',
  BitwiseAnd = 'BitwiseAnd',
  EqualityEqual = 'EqualityEqual',
  EqualityNotEqual = 'EqualityNotEqual',
  RelationalGreaterThan = 'RelationalGreaterThan',
  RelationalLessThan = 'RelationalLessThan',
  RelationalGreaterThanOrEqual = 'RelationalGreaterThanOrEqual',
  RelationalLessThanOrEqual = 'RelationalLessThanOrEqual',
  ShiftLeft = 'ShiftLeft',
  ShiftRight = 'ShiftRight',
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

export interface CASTStringLiteral extends BaseNode, BaseExpression {
  type: 'StringLiteral'
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

interface CASTTypeModifierBase extends BaseNode {
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

export type CASTTypeModifiers = Array<CASTTypeModifier>

export interface CASTType extends BaseNode {
  type: 'Type'
  typeModifiers: CASTTypeModifiers
}
