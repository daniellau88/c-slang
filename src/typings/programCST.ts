interface CCSTNodeBase {
  type: string
}

export interface CCSTProgram extends CCSTNodeBase {
  type: 'Program'
  children: Array<CCSTFunctionDefinition | CCSTDeclarationStatement>
}

export interface CCSTFunctionDefinition extends CCSTNodeBase {
  type: 'FunctionDefinition'
  declarationSpecifier?: CCSTDeclarationSpecifier
  declarator: CCSTDeclarator
  declarationStatements: Array<CCSTDeclarationStatement>
  compoundStatement: CCSTCompoundStatement
}

export interface CCSTParameterTypeList extends CCSTNodeBase {
  type: 'ParameterTypeList'
  parameterList: CCSTParameterList
  hasVarArg: boolean
}

export interface CCSTParameterList extends CCSTNodeBase {
  type: 'ParameterList'
  parameterList?: CCSTParameterList
  parameterDeclaration: CCSTParameterDeclaration
}

interface CCSTParameterDeclarationBase extends CCSTNodeBase {
  type: 'ParameterDeclaration'
  declarationSpecifiers: CCSTDeclarationSpecifier
  subtype: string
}

interface CCSTParameterDeclarationBaseTypeDeclarator extends CCSTParameterDeclarationBase {
  subtype: 'Declarator'
  declarator: CCSTDeclarator
}

interface CCSTParameterDeclarationBaseTypeAbstractDeclaration extends CCSTParameterDeclarationBase {
  subtype: 'AbstractDeclarator'
  abstractDeclarator: CCSTAbstractDeclarator
}

interface CCSTParameterDeclarationBaseTypeNormal extends CCSTParameterDeclarationBase {
  subtype: 'Normal'
}

export type CCSTParameterDeclaration =
  | CCSTParameterDeclarationBaseTypeDeclarator
  | CCSTParameterDeclarationBaseTypeAbstractDeclaration
  | CCSTParameterDeclarationBaseTypeNormal

export interface CCSTLabeledStatement extends CCSTNodeBase {
  type: 'LabeledStatement'
  identifier: CCSTIdentifier
  statement: CCSTStatement
}

export interface CCSTDeclarationStatement extends CCSTNodeBase {
  type: 'DeclarationStatement'
  declarationSpecifiers: CCSTDeclarationSpecifier
  initDeclaratorList: CCSTInitDeclaratorList
}

export interface CCSTDeclarationSpecifier extends CCSTNodeBase {
  type: 'DeclarationSpecifier'
  typeSpecifier: CCSTTypeSpecifier
}

export interface CCSTInitDeclaratorList extends CCSTNodeBase {
  type: 'InitDeclaratorList'
  initDeclarators: Array<CCSTInitDeclarator>
}

export interface CCSTInitDeclarator extends CCSTNodeBase {
  type: 'InitDeclarator'
  declarator: CCSTDeclarator
  initializer?: CCSTInitializer
}

export interface CCSTDeclarator extends CCSTNodeBase {
  type: 'Declarator'
  pointer?: CCSTPointer
  directDeclarator: CCSTDirectDeclarator
}

interface CCSTDirectDeclaratorBase extends CCSTNodeBase {
  type: 'DirectDeclarator'
  subtype: string
}

interface CCSTDirectDeclaratorTypeIdentifier extends CCSTDirectDeclaratorBase {
  subtype: 'Identifier'
  identifier: CCSTIdentifier
}

interface CCSTDirectDeclaratorTypeNestedDeclarator extends CCSTDirectDeclaratorBase {
  subtype: 'NestedDeclarator'
  declarator: CCSTDeclarator
}

interface CCSTDirectDeclaratorTypeRecursiveArray extends CCSTDirectDeclaratorBase {
  subtype: 'RecursiveArray'
  directDeclarator: CCSTDirectDeclarator
  constantExpression?: CCSTConstantExpression
}

interface CCSTDirectDeclaratorTypeRecursiveFunction extends CCSTDirectDeclaratorBase {
  subtype: 'RecursiveFunction'
  directDeclarator: CCSTDirectDeclarator
  parameterTypeList?: CCSTParameterTypeList
}

interface CCSTDirectDeclaratorTypeRecursiveIdentifier extends CCSTDirectDeclaratorBase {
  subtype: 'RecursiveIdentifier'
  directDeclarator: CCSTDirectDeclarator
  identifiers: Array<CCSTIdentifier>
}

export type CCSTDirectDeclarator =
  | CCSTDirectDeclaratorTypeIdentifier
  | CCSTDirectDeclaratorTypeNestedDeclarator
  | CCSTDirectDeclaratorTypeRecursiveArray
  | CCSTDirectDeclaratorTypeRecursiveFunction
  | CCSTDirectDeclaratorTypeRecursiveIdentifier

interface CCSTInitializerBase extends CCSTNodeBase {
  type: 'Initializer'
  subtype: string
}

interface CCSTInitializerTypeConditionalExpression extends CCSTInitializerBase {
  subtype: 'ConditionalExpression'
  conditionalExpression: CCSTConditionalExpression
}

interface CCSTInitializerTypeArray extends CCSTInitializerBase {
  subtype: 'Array'
  initializerList: CCSTInitializerList
}

export type CCSTInitializer = CCSTInitializerTypeConditionalExpression | CCSTInitializerTypeArray

interface CCSTInitializerListBase extends CCSTNodeBase {
  type: 'InitializerList'
  subtype: string
}

interface CCSTInitializerListTypeInitializer extends CCSTInitializerListBase {
  subtype: 'Initializer'
  initializer: CCSTInitializer
}

interface CCSTInitializerListTypeRecursiveInitializer extends CCSTInitializerListBase {
  subtype: 'RecursiveInitializer'
  initializer: CCSTInitializer
  initializerList: CCSTInitializerList
}

export type CCSTInitializerList =
  | CCSTInitializerListTypeInitializer
  | CCSTInitializerListTypeRecursiveInitializer

export interface CCSTExpressionStatement extends CCSTNodeBase {
  type: 'ExpressionStatement'
  expression: CCSTExpression
}

interface CCSTExpressionBase extends CCSTNodeBase {
  type: 'Expression'
  subtype: string
}

interface CCSTExpressionTypeAssignment extends CCSTExpressionBase {
  subtype: 'Assignment'
  assignmentExpression: CCSTAssignmentExpression
}

interface CCSTExpressionTypeExpression extends CCSTExpressionBase {
  subtype: 'Expression'
  assignmentExpression: CCSTAssignmentExpression
  expression: CCSTExpression
}

export type CCSTExpression = CCSTExpressionTypeAssignment | CCSTExpressionTypeExpression

interface CCSTAssignmentExpressionBase extends CCSTNodeBase {
  type: 'AssignmentExpression'
}

interface CCSTAssignmentExpressionTypeConditional extends CCSTAssignmentExpressionBase {
  subtype: 'Conditional'
  conditionalExpression: CCSTConditionalExpression
}

interface CCSTAssignmentExpressionTypeAssignment extends CCSTAssignmentExpressionBase {
  subtype: 'Assignment'
  unaryExpression: CCSTUnaryExpression
  assignmentOperator: CCSTAssignmentOperator
  assignmentExpression: CCSTAssignmentExpression
}

export type CCSTAssignmentExpression =
  | CCSTAssignmentExpressionTypeConditional
  | CCSTAssignmentExpressionTypeAssignment

export interface CCSTConstantExpression extends CCSTNodeBase {
  type: 'ConstantExpression'
  conditionalExpression: CCSTConditionalExpression
}

interface CCSTConditionalExpressionBase extends CCSTNodeBase {
  type: 'ConditionalExpression'
}

interface CCSTConditionalExpressionTypeLogicalOr extends CCSTConditionalExpressionBase {
  subtype: 'LogicalOr'
  logicalOrExpression: CCSTLogicalOrExpression
}

interface CCSTConditionalExpressionTypeConditional extends CCSTConditionalExpressionBase {
  subtype: 'Conditional'
  logicalOrExpression: CCSTLogicalOrExpression
  expression: CCSTExpression
  conditionalExpression: CCSTConditionalExpression
}

export type CCSTConditionalExpression =
  | CCSTConditionalExpressionTypeLogicalOr
  | CCSTConditionalExpressionTypeConditional

interface CCSTLogicalOrExpressionBase extends CCSTNodeBase {
  type: 'LogicalOrExpression'
}

interface CCSTLogicalOrExpressionTypeLogicalAnd extends CCSTLogicalOrExpressionBase {
  subtype: 'LogicalAnd'
  logicalAndExpression: CCSTLogicalAndExpression
}

interface CCSTLogicalOrExpressionTypeLogicalOr extends CCSTLogicalOrExpressionBase {
  subtype: 'LogicalOr'
  logicalOrExpression: CCSTLogicalOrExpression
  logicalAndExpression: CCSTLogicalAndExpression
}

export type CCSTLogicalOrExpression =
  | CCSTLogicalOrExpressionTypeLogicalAnd
  | CCSTLogicalOrExpressionTypeLogicalOr

interface CCSTLogicalAndExpressionBase extends CCSTNodeBase {
  type: 'LogicalAndExpression'
}

interface CCSTLogicalAndExpressionTypeInclusiveOr extends CCSTLogicalAndExpressionBase {
  subtype: 'InclusiveOr'
  inclusiveOrExpression: CCSTInclusiveOrExpression
}

interface CCSTLogicalAndExpressionTypeLogicalAnd extends CCSTLogicalAndExpressionBase {
  subtype: 'LogicalAnd'
  logicalAndExpression: CCSTLogicalAndExpression
  inclusiveOrExpression: CCSTInclusiveOrExpression
}

export type CCSTLogicalAndExpression =
  | CCSTLogicalAndExpressionTypeInclusiveOr
  | CCSTLogicalAndExpressionTypeLogicalAnd

interface CCSTInclusiveOrExpressionBase extends CCSTNodeBase {
  type: 'InclusiveOrExpression'
}

interface CCSTInclusiveOrExpressionTypeExclusiveOr extends CCSTInclusiveOrExpressionBase {
  subtype: 'ExclusiveOr'
  exclusiveOrExpression: CCSTExclusiveOrExpression
}

interface CCSTInclusiveOrExpressionTypeInclusiveOr extends CCSTInclusiveOrExpressionBase {
  subtype: 'InclusiveOr'
  inclusiveOrExpression: CCSTInclusiveOrExpression
  exclusiveOrExpression: CCSTExclusiveOrExpression
}

export type CCSTInclusiveOrExpression =
  | CCSTInclusiveOrExpressionTypeExclusiveOr
  | CCSTInclusiveOrExpressionTypeInclusiveOr

interface CCSTExclusiveOrExpressionBase extends CCSTNodeBase {
  type: 'ExclusiveOrExpression'
}

interface CCSTExclusiveOrExpressionTypeAnd extends CCSTExclusiveOrExpressionBase {
  subtype: 'And'
  andExpression: CCSTAndExpression
}

interface CCSTExclusiveOrExpressionTypeExclusiveOr extends CCSTExclusiveOrExpressionBase {
  subtype: 'ExclusiveOr'
  exclusiveOrExpression: CCSTExclusiveOrExpression
  andExpression: CCSTAndExpression
}

export type CCSTExclusiveOrExpression =
  | CCSTExclusiveOrExpressionTypeAnd
  | CCSTExclusiveOrExpressionTypeExclusiveOr

interface CCSTAndExpressionBase extends CCSTNodeBase {
  type: 'AndExpression'
}

interface CCSTAndExpressionTypeEquality extends CCSTAndExpressionBase {
  subtype: 'Equality'
  equalityExpression: CCSTEqualityExpression
}

interface CCSTAndExpressionTypeAnd extends CCSTAndExpressionBase {
  subtype: 'And'
  andExpression: CCSTAndExpression
  equalityExpression: CCSTEqualityExpression
}

export type CCSTAndExpression = CCSTAndExpressionTypeEquality | CCSTAndExpressionTypeAnd

interface CCSTEqualityExpressionBase extends CCSTNodeBase {
  type: 'EqualityExpression'
}

interface CCSTEqualityExpressionTypeRelational extends CCSTEqualityExpressionBase {
  subtype: 'Relational'
  relationalExpression: CCSTRelationalExpression
}

interface CCSTEqualityExpressionTypeEquality extends CCSTEqualityExpressionBase {
  subtype: 'Equality'
  equalityOperator: 'Equal' | 'NotEqual'
  equalityExpression: CCSTEqualityExpression
  relationalExpression: CCSTRelationalExpression
}

export type CCSTEqualityExpression =
  | CCSTEqualityExpressionTypeRelational
  | CCSTEqualityExpressionTypeEquality

interface CCSTRelationalExpressionBase extends CCSTNodeBase {
  type: 'RelationalExpression'
}

interface CCSTRelationalExpressionTypeShift extends CCSTRelationalExpressionBase {
  subtype: 'Shift'
  shiftExpression: CCSTShiftExpression
}

interface CCSTRelationalExpressionTypeRelational extends CCSTRelationalExpressionBase {
  subtype: 'Relational'
  relationalOperator: 'GreaterThan' | 'LessThan' | 'LessThanOrEqual' | 'GreaterThanOrEqual'
  relationalExpression: CCSTRelationalExpression
  shiftExpression: CCSTShiftExpression
}

export type CCSTRelationalExpression =
  | CCSTRelationalExpressionTypeShift
  | CCSTRelationalExpressionTypeRelational

interface CCSTShiftExpressionBase extends CCSTNodeBase {
  type: 'ShiftExpression'
}

interface CCSTShiftExpressionTypeAdditive extends CCSTShiftExpressionBase {
  subtype: 'Additive'
  additiveExpression: CCSTAdditiveExpression
}

interface CCSTShiftExpressionTypeShift extends CCSTShiftExpressionBase {
  subtype: 'Shift'
  shiftOperator: 'ShiftLeft' | 'ShiftRight'
  shiftExpression: CCSTShiftExpression
  additiveExpression: CCSTAdditiveExpression
}

export type CCSTShiftExpression = CCSTShiftExpressionTypeAdditive | CCSTShiftExpressionTypeShift

interface CCSTAdditiveExpressionBase extends CCSTNodeBase {
  type: 'AdditiveExpression'
}

interface CCSTAdditiveExpressionTypeMultiplicative extends CCSTAdditiveExpressionBase {
  subtype: 'Multiplicative'
  multiplicativeExpression: CCSTMultiplicativeExpression
}

interface CCSTAdditiveExpressionTypeAdditive extends CCSTAdditiveExpressionBase {
  subtype: 'Additive'
  additiveOperator: 'Plus' | 'Minus'
  additiveExpression: CCSTAdditiveExpression
  multiplicativeExpression: CCSTMultiplicativeExpression
}

export type CCSTAdditiveExpression =
  | CCSTAdditiveExpressionTypeMultiplicative
  | CCSTAdditiveExpressionTypeAdditive

interface CCSTMultiplicativeExpressionBase extends CCSTNodeBase {
  type: 'MultiplicativeExpression'
}

interface CCSTMultiplicativeExpressionTypeCast extends CCSTMultiplicativeExpressionBase {
  subtype: 'Cast'
  castExpression: CCSTCastExpression
}

interface CCSTMultiplicativeExpressionTypeMultiplicative extends CCSTMultiplicativeExpressionBase {
  subtype: 'Multiplicative'
  multiplicativeOperator: 'Asterick' | 'Backslash' | 'Percent'
  multiplicativeExpression: CCSTMultiplicativeExpression
  castExpression: CCSTCastExpression
}

export type CCSTMultiplicativeExpression =
  | CCSTMultiplicativeExpressionTypeCast
  | CCSTMultiplicativeExpressionTypeMultiplicative

interface CCSTCastExpressionBase extends CCSTNodeBase {
  type: 'CastExpression'
}

interface CCSTCastExpressionTypeUnary extends CCSTCastExpressionBase {
  subtype: 'Unary'
  unaryExpression: CCSTUnaryExpression
}

interface CCSTCastExpressionTypeCast extends CCSTCastExpressionBase {
  subtype: 'Cast'
  typeName: CCSTTypeName
  castExpression: CCSTCastExpression
}

export type CCSTCastExpression = CCSTCastExpressionTypeUnary | CCSTCastExpressionTypeCast

export interface CCSTTypeName {
  type: 'TypeName'
  typeSpecifier: CCSTTypeSpecifier
  abstractDeclarator?: CCSTAbstractDeclarator
}

export interface CCSTAbstractDeclarator {
  type: 'AbstractDeclarator'
  pointer?: CCSTPointer
  abstractDeclarator?: CCSTDirectAbstractDeclarator
}

interface CCSTDirectAbstractDeclaratorBase {
  type: 'DirectAbstractDeclarator'
}

interface CCSTDirectAbstractDeclaratorTypeNestedAbstractDeclarator
  extends CCSTDirectAbstractDeclaratorBase {
  subtype: 'NestedAbstractDeclarator'
  abstractDeclarator: CCSTAbstractDeclarator
}

interface CCSTDirectAbstractDeclaratorTypeArray extends CCSTDirectAbstractDeclaratorBase {
  subtype: 'Array'
  constantExpression?: CCSTConstantExpression
}

interface CCSTDirectAbstractDeclaratorTypeParameters extends CCSTDirectAbstractDeclaratorBase {
  subtype: 'Parameters'
  parameterTypeList?: CCSTParameterTypeList
}

interface CCSTDirectAbstractDeclaratorTypeNestedArray extends CCSTDirectAbstractDeclaratorBase {
  subtype: 'NestedArray'
  constantExpression?: CCSTConstantExpression
  directAbstractDeclarator: CCSTDirectAbstractDeclarator
}

interface CCSTDirectAbstractDeclaratorTypeNestedParameters
  extends CCSTDirectAbstractDeclaratorBase {
  subtype: 'NestedParameters'
  parameterTypeList?: CCSTParameterTypeList
  directAbstractDeclarator: CCSTDirectAbstractDeclarator
}

export type CCSTDirectAbstractDeclarator =
  | CCSTDirectAbstractDeclaratorTypeNestedAbstractDeclarator
  | CCSTDirectAbstractDeclaratorTypeArray
  | CCSTDirectAbstractDeclaratorTypeParameters
  | CCSTDirectAbstractDeclaratorTypeNestedArray
  | CCSTDirectAbstractDeclaratorTypeNestedParameters

interface CCSTUnaryExpressionBase extends CCSTNodeBase {
  type: 'UnaryExpression'
}

interface CCSTUnaryExpressionTypePostfix extends CCSTUnaryExpressionBase {
  subtype: 'Postfix'
  postfixExpression: CCSTPostfixExpression
}

interface CCSTUnaryExpressionTypeIncrement extends CCSTUnaryExpressionBase {
  subtype: 'Increment'
  incrementType: 'Increment' | 'Decrement'
  unaryExpression: CCSTUnaryExpression
}

interface CCSTUnaryExpressionTypeUnaryOperator extends CCSTUnaryExpressionBase {
  subtype: 'UnaryOperator'
  unaryOperator: CCSTUnaryOperator
  castExpression: CCSTCastExpression
}

interface CCSTUnaryExpressionTypeSizeOf extends CCSTUnaryExpressionBase {
  subtype: 'SizeOf'
  typeName: CCSTTypeName
}

export type CCSTUnaryExpression =
  | CCSTUnaryExpressionTypePostfix
  | CCSTUnaryExpressionTypeIncrement
  | CCSTUnaryExpressionTypeUnaryOperator
  | CCSTUnaryExpressionTypeSizeOf

interface CCSTPostfixExpressionBase extends CCSTNodeBase {
  type: 'PostfixExpression'
}

interface CCSTPostfixExpressionTypePrimary extends CCSTPostfixExpressionBase {
  subtype: 'Primary'
  primaryExpression: CCSTPrimaryExpression
}

interface CCSTPostfixExpressionTypeArray extends CCSTPostfixExpressionBase {
  subtype: 'Array'
  postfixExpression: CCSTPostfixExpression
  assignmentExpression: CCSTAssignmentExpression
}

interface CCSTPostfixExpressionTypeFunctionCall extends CCSTPostfixExpressionBase {
  subtype: 'FunctionCall'
  postfixExpression: CCSTPostfixExpression
  expression: CCSTExpression
}

interface CCSTPostfixExpressionTypeMember extends CCSTPostfixExpressionBase {
  subtype: 'Member'
  postfixExpression: CCSTPostfixExpression
  identifier: CCSTIdentifier
}

interface CCSTPostfixExpressionTypeDerefMember extends CCSTPostfixExpressionBase {
  subtype: 'DerefMember'
  postfixExpression: CCSTPostfixExpression
  identifier: CCSTIdentifier
}

interface CCSTPostfixExpressionTypeIncrement extends CCSTPostfixExpressionBase {
  subtype: 'Increment'
  incrementType: 'Increment' | 'Decrement'
  postfixExpression: CCSTPostfixExpression
}

export type CCSTPostfixExpression =
  | CCSTPostfixExpressionTypePrimary
  | CCSTPostfixExpressionTypeArray
  | CCSTPostfixExpressionTypeFunctionCall
  | CCSTPostfixExpressionTypeMember
  | CCSTPostfixExpressionTypeDerefMember
  | CCSTPostfixExpressionTypeIncrement

interface CCSTPrimaryExpressionBase extends CCSTNodeBase {
  type: 'PrimaryExpression'
}

interface CCSTPrimaryExpressionTypeIdentifier extends CCSTPrimaryExpressionBase {
  subtype: 'Identifier'
  identifier: CCSTIdentifier
}

interface CCSTPrimaryExpressionTypeConstant extends CCSTPrimaryExpressionBase {
  subtype: 'Constant'
  constant: CCSTConstant
}

interface CCSTPrimaryExpressionTypeNestedExpression extends CCSTPrimaryExpressionBase {
  subtype: 'NestedExpression'
  expression: CCSTExpression
}

export type CCSTPrimaryExpression =
  | CCSTPrimaryExpressionTypeIdentifier
  | CCSTPrimaryExpressionTypeConstant
  | CCSTPrimaryExpressionTypeNestedExpression

interface CCSTConstantBase extends CCSTNodeBase {
  type: 'Constant'
}

interface CCSTConstantTypeInteger extends CCSTConstantBase {
  subtype: 'Integer'
  integerConstant: CCSTIntegerConstant
}

interface CCSTConstantTypeFloat extends CCSTConstantBase {
  subtype: 'Float'
  floatConstant: CCSTFloatConstant
}

interface CCSTConstantTypeCharacter extends CCSTConstantBase {
  subtype: 'Character'
  characterConstant: CCSTCharacterConstant
}

export type CCSTConstant =
  | CCSTConstantTypeInteger
  | CCSTConstantTypeFloat
  | CCSTConstantTypeCharacter

export interface CCSTIntegerConstant extends CCSTNodeBase {
  type: 'IntegerConstant'
  value: string
}

export interface CCSTFloatConstant extends CCSTNodeBase {
  type: 'FloatConstant'
  value: string
}

export interface CCSTCharacterConstant extends CCSTNodeBase {
  type: 'CharacterConstant'
  value: string
}

export interface CCSTCompoundStatement extends CCSTNodeBase {
  type: 'CompoundStatement'
  statements: Array<CCSTStatement>
}

export interface CCSTReturnStatement extends CCSTNodeBase {
  type: 'ReturnStatement'
  expression?: CCSTExpression
}

interface CCSTStatementBase extends CCSTNodeBase {
  type: 'Statement'
}

interface CCSTStatementTypeExpression extends CCSTStatementBase {
  subtype: 'Expression'
  statement: CCSTExpressionStatement
}

interface CCSTStatementTypeDeclaration extends CCSTStatementBase {
  subtype: 'Declaration'
  statement: CCSTDeclarationStatement
}

interface CCSTStatementTypeCompound extends CCSTStatementBase {
  subtype: 'Compound'
  statement: CCSTCompoundStatement
}

interface CCSTStatementTypeReturn extends CCSTStatementBase {
  subtype: 'Return'
  statement: CCSTReturnStatement
}

export type CCSTStatement =
  | CCSTStatementTypeExpression
  | CCSTStatementTypeDeclaration
  | CCSTStatementTypeCompound
  | CCSTStatementTypeReturn

export interface CCSTIdentifier extends CCSTNodeBase {
  type: 'Identifier'
  name: string
}

export interface CCSTTypeSpecifier extends CCSTNodeBase {
  type: 'TypeSpecifier'
  baseType: string
}

export interface CCSTPointer extends CCSTNodeBase {
  type: 'Pointer'
  text: string
}

export interface CCSTUnaryOperator extends CCSTNodeBase {
  type: 'UnaryOperator'
  operator: 'Ampersand' | 'Asterick' | 'Plus' | 'Minus' | 'Tilda' | 'Exclamationmark'
}

export interface CCSTAssignmentOperator extends CCSTNodeBase {
  type: 'AssignmentOperator'
  operator:
    | 'Equal'
    | 'TimesEqual'
    | 'DivideEqual'
    | 'ModuloEqual'
    | 'PlusEqual'
    | 'MinusEqual'
    | 'ShiftLeftEqual'
    | 'ShiftRightEqual'
    | 'BitwiseAndEqual'
    | 'BitwiseXorEqual'
    | 'BitwiseOrEqual'
}

export type CCSTNode =
  | CCSTProgram
  | CCSTFunctionDefinition
  | CCSTParameterTypeList
  | CCSTParameterList
  | CCSTParameterDeclaration
  | CCSTLabeledStatement
  | CCSTDeclarationStatement
  | CCSTDeclarationSpecifier
  | CCSTInitDeclaratorList
  | CCSTInitDeclarator
  | CCSTDeclarator
  | CCSTDirectDeclarator
  | CCSTInitializer
  | CCSTInitializerList
  | CCSTIdentifier
  | CCSTTypeSpecifier
  | CCSTPointer
  | CCSTExpressionStatement
  | CCSTExpression
  | CCSTConstantExpression
  | CCSTConditionalExpression
  | CCSTLogicalOrExpression
  | CCSTLogicalAndExpression
  | CCSTInclusiveOrExpression
  | CCSTExclusiveOrExpression
  | CCSTAndExpression
  | CCSTEqualityExpression
  | CCSTRelationalExpression
  | CCSTShiftExpression
  | CCSTAdditiveExpression
  | CCSTMultiplicativeExpression
  | CCSTCastExpression
  | CCSTUnaryExpression
  | CCSTTypeName
  | CCSTAbstractDeclarator
  | CCSTDirectAbstractDeclarator
  | CCSTPostfixExpression
  | CCSTPrimaryExpression
  | CCSTConstant
  | CCSTCharacterConstant
  | CCSTFloatConstant
  | CCSTIntegerConstant
  | CCSTAssignmentExpression
  | CCSTAssignmentOperator
  | CCSTUnaryOperator
  | CCSTStatement
  | CCSTCompoundStatement
  | CCSTReturnStatement
  | CCSTDeclarationStatement
