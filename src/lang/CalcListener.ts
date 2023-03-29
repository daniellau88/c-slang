// Generated from ./src/lang/Calc.g4 by ANTLR 4.9.0-SNAPSHOT

import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener'

import { CastExpressionTypeUnaryContext } from './CalcParser'
import { CastExpressionTypeCastContext } from './CalcParser'
import { ConstantTypeIntegerContext } from './CalcParser'
import { ConstantTypeFloatContext } from './CalcParser'
import { ConstantTypeCharacterContext } from './CalcParser'
import { DirectDeclaratorTypeIdentifierContext } from './CalcParser'
import { DirectDeclaratorTypeNestedDeclaratorContext } from './CalcParser'
import { DirectDeclaratorTypeRecursiveArrayContext } from './CalcParser'
import { DirectDeclaratorTypeRecursiveParametersContext } from './CalcParser'
import { DirectDeclaratorTypeRecursiveIdentifiersContext } from './CalcParser'
import { PostfixExpressionTypePrimaryContext } from './CalcParser'
import { PostfixExpressionTypeArrayContext } from './CalcParser'
import { PostfixExpressionTypeFunctionCallContext } from './CalcParser'
import { PostfixExpressionTypeMemberContext } from './CalcParser'
import { PostfixExpressionTypeDerefMemberContext } from './CalcParser'
import { PostfixExpressionTypeIncrementContext } from './CalcParser'
import { PostfixExpressionTypeDecrementContext } from './CalcParser'
import { UnaryExpressionTypePostfixContext } from './CalcParser'
import { UnaryExpressionTypeIncrementContext } from './CalcParser'
import { UnaryExpressionTypeDecrementContext } from './CalcParser'
import { UnaryExpressionTypeUnaryOperatorContext } from './CalcParser'
import { UnaryExpressionTypeSizeOfContext } from './CalcParser'
import { LogicalOrExpressionTypeLogicalAndContext } from './CalcParser'
import { LogicalOrExpressionTypeLogicalOrContext } from './CalcParser'
import { AndExpressionTypeEqualityContext } from './CalcParser'
import { AndExpressionTypeAndContext } from './CalcParser'
import { AdditiveExpressionTypeMultiplicativeContext } from './CalcParser'
import { AdditiveExpressionTypeAdditiveAddContext } from './CalcParser'
import { AdditiveExpressionTypeAdditiveMinusContext } from './CalcParser'
import { AbstractDeclaratorTypePointerContext } from './CalcParser'
import { AbstractDeclaratorTypeDirectAbstractDeclaratorContext } from './CalcParser'
import { DirectAbstractDeclaratorTypeNestedAbstractDeclaratorContext } from './CalcParser'
import { DirectAbstractDeclaratorTypeArrayContext } from './CalcParser'
import { DirectAbstractDeclaratorTypeParametersContext } from './CalcParser'
import { DirectAbstractDeclaratorTypeRecursiveArrayContext } from './CalcParser'
import { DirectAbstractDeclaratorTypeRecursiveParametersContext } from './CalcParser'
import { MultiplicativeExpressionTypeCastContext } from './CalcParser'
import { MultiplicativeExpressionTypeMultiplicativeAsterickContext } from './CalcParser'
import { MultiplicativeExpressionTypeMultiplicativeBackslashContext } from './CalcParser'
import { MultiplicativeExpressionTypeMultiplicativePercentContext } from './CalcParser'
import { PrimaryExpressionTypeIdentifierContext } from './CalcParser'
import { PrimaryExpressionTypeConstantContext } from './CalcParser'
import { PrimaryExpressionTypeNestedExpressionContext } from './CalcParser'
import { ExclusiveOrExpressionTypeAndContext } from './CalcParser'
import { ExclusiveOrExpressionTypeExclusiveOrContext } from './CalcParser'
import { EqualityExpressionTypeRelationalContext } from './CalcParser'
import { EqualityExpressionTypeEqualityEqualContext } from './CalcParser'
import { EqualityExpressionTypeEqualityNotEqualContext } from './CalcParser'
import { InitializerListTypeInitializerContext } from './CalcParser'
import { InitializerListTypeRecursiveInitializerContext } from './CalcParser'
import { InclusiveOrExpressionTypeExclusiveOrContext } from './CalcParser'
import { InclusiveOrExpressionTypeInclusiveOrContext } from './CalcParser'
import { ConditionalExpressionTypeLogicalOrContext } from './CalcParser'
import { ConditionalExpressionTypeConditionalContext } from './CalcParser'
import { StatementTypeLabeledContext } from './CalcParser'
import { StatementTypeDeclarationContext } from './CalcParser'
import { StatementTypeExpressionContext } from './CalcParser'
import { StatementTypeCompoundContext } from './CalcParser'
import { StatementTypeIfContext } from './CalcParser'
import { StatementTypeSwitchContext } from './CalcParser'
import { StatementTypeWhileContext } from './CalcParser'
import { StatementTypeDoContext } from './CalcParser'
import { StatementTypeForContext } from './CalcParser'
import { StatementTypeGotoContext } from './CalcParser'
import { StatementTypeContinueContext } from './CalcParser'
import { StatementTypeBreakContext } from './CalcParser'
import { StatementTypeReturnContext } from './CalcParser'
import { ShfitExpressionTypeAdditiveContext } from './CalcParser'
import { ShfitExpressionTypeShiftLeftContext } from './CalcParser'
import { ShfitExpressionTypeShiftRightContext } from './CalcParser'
import { ExpressionTypeAssignmentContext } from './CalcParser'
import { ExpressionTypeExpressionContext } from './CalcParser'
import { ParameterDeclarationTypeDeclaratorContext } from './CalcParser'
import { ParameterDeclarationTypeAbstractDeclaratorContext } from './CalcParser'
import { ParameterDeclarationTypeNormalContext } from './CalcParser'
import { AssignmentExpressionTypeConditionalContext } from './CalcParser'
import { AssignmentExpressionTypeAssignmentContext } from './CalcParser'
import { InitializerTypeConditionalExpressionContext } from './CalcParser'
import { InitializerTypeArrayContext } from './CalcParser'
import { LogicalAndExpressionTypeInclusiveOrContext } from './CalcParser'
import { LogicalAndExpressionTypeLogicalAndContext } from './CalcParser'
import { RelationalExpressionTypeShiftContext } from './CalcParser'
import { RelationalExpressionTypeRelationalGTContext } from './CalcParser'
import { RelationalExpressionTypeRelationalLTContext } from './CalcParser'
import { RelationalExpressionTypeRelationalLTOEContext } from './CalcParser'
import { RelationalExpressionTypeRelationalGTOEContext } from './CalcParser'
import { Unary_operatorContext } from './CalcParser'
import { Assignment_operatorContext } from './CalcParser'
import { End_statement_delimiterContext } from './CalcParser'
import { PointerContext } from './CalcParser'
import { Type_sign_specifierContext } from './CalcParser'
import { Type_specifierContext } from './CalcParser'
import { Type_qualifierContext } from './CalcParser'
import { IdentifierContext } from './CalcParser'
import { StartContext } from './CalcParser'
import { ProgramContext } from './CalcParser'
import { Function_definitionContext } from './CalcParser'
import { Parameter_type_listContext } from './CalcParser'
import { Parameter_listContext } from './CalcParser'
import { Parameter_declarationContext } from './CalcParser'
import { Struct_specifierContext } from './CalcParser'
import { Union_specifierContext } from './CalcParser'
import { Struct_or_union_declarationContext } from './CalcParser'
import { Specifier_qualifierContext } from './CalcParser'
import { Struct_or_union_declarator_listContext } from './CalcParser'
import { Struct_or_union_declaratorContext } from './CalcParser'
import { StatementContext } from './CalcParser'
import { Labeled_statementContext } from './CalcParser'
import { Declaration_statementContext } from './CalcParser'
import { Declaration_specifiersContext } from './CalcParser'
import { Init_declarator_listContext } from './CalcParser'
import { Init_declaratorContext } from './CalcParser'
import { DeclaratorContext } from './CalcParser'
import { Direct_declaratorContext } from './CalcParser'
import { InitializerContext } from './CalcParser'
import { Initializer_listContext } from './CalcParser'
import { Expression_statementContext } from './CalcParser'
import { ExpressionContext } from './CalcParser'
import { Assignment_expressionContext } from './CalcParser'
import { Constant_expressionContext } from './CalcParser'
import { Conditional_expressionContext } from './CalcParser'
import { Logical_or_expressionContext } from './CalcParser'
import { Logical_and_expressionContext } from './CalcParser'
import { Inclusive_or_expressionContext } from './CalcParser'
import { Exclusive_or_expressionContext } from './CalcParser'
import { And_expressionContext } from './CalcParser'
import { Equality_expressionContext } from './CalcParser'
import { Relational_expressionContext } from './CalcParser'
import { Shift_expressionContext } from './CalcParser'
import { Additive_expressionContext } from './CalcParser'
import { Multiplicative_expressionContext } from './CalcParser'
import { Cast_expressionContext } from './CalcParser'
import { Type_nameContext } from './CalcParser'
import { Abstract_declaratorContext } from './CalcParser'
import { Direct_abstract_declaratorContext } from './CalcParser'
import { Unary_expressionContext } from './CalcParser'
import { Postfix_expressionContext } from './CalcParser'
import { Primary_expressionContext } from './CalcParser'
import { ConstantContext } from './CalcParser'
import { Integer_constantContext } from './CalcParser'
import { Float_constantContext } from './CalcParser'
import { Character_constantContext } from './CalcParser'
import { Compound_statementContext } from './CalcParser'
import { If_statementContext } from './CalcParser'
import { Switch_statementContext } from './CalcParser'
import { Switch_bodyContext } from './CalcParser'
import { Switch_case_bodyContext } from './CalcParser'
import { Switch_default_bodyContext } from './CalcParser'
import { While_statementContext } from './CalcParser'
import { Do_statementContext } from './CalcParser'
import { For_statementContext } from './CalcParser'
import { For_init_declarationContext } from './CalcParser'
import { Goto_statementContext } from './CalcParser'
import { Continue_statementContext } from './CalcParser'
import { Break_statementContext } from './CalcParser'
import { Return_statementContext } from './CalcParser'

/**
 * This interface defines a complete listener for a parse tree produced by
 * `CalcParser`.
 */
export interface CalcListener extends ParseTreeListener {
  /**
   * Enter a parse tree produced by the `CastExpressionTypeUnary`
   * labeled alternative in `CalcParser.cast_expression`.
   * @param ctx the parse tree
   */
  enterCastExpressionTypeUnary?: (ctx: CastExpressionTypeUnaryContext) => void
  /**
   * Exit a parse tree produced by the `CastExpressionTypeUnary`
   * labeled alternative in `CalcParser.cast_expression`.
   * @param ctx the parse tree
   */
  exitCastExpressionTypeUnary?: (ctx: CastExpressionTypeUnaryContext) => void

  /**
   * Enter a parse tree produced by the `CastExpressionTypeCast`
   * labeled alternative in `CalcParser.cast_expression`.
   * @param ctx the parse tree
   */
  enterCastExpressionTypeCast?: (ctx: CastExpressionTypeCastContext) => void
  /**
   * Exit a parse tree produced by the `CastExpressionTypeCast`
   * labeled alternative in `CalcParser.cast_expression`.
   * @param ctx the parse tree
   */
  exitCastExpressionTypeCast?: (ctx: CastExpressionTypeCastContext) => void

  /**
   * Enter a parse tree produced by the `ConstantTypeInteger`
   * labeled alternative in `CalcParser.constant`.
   * @param ctx the parse tree
   */
  enterConstantTypeInteger?: (ctx: ConstantTypeIntegerContext) => void
  /**
   * Exit a parse tree produced by the `ConstantTypeInteger`
   * labeled alternative in `CalcParser.constant`.
   * @param ctx the parse tree
   */
  exitConstantTypeInteger?: (ctx: ConstantTypeIntegerContext) => void

  /**
   * Enter a parse tree produced by the `ConstantTypeFloat`
   * labeled alternative in `CalcParser.constant`.
   * @param ctx the parse tree
   */
  enterConstantTypeFloat?: (ctx: ConstantTypeFloatContext) => void
  /**
   * Exit a parse tree produced by the `ConstantTypeFloat`
   * labeled alternative in `CalcParser.constant`.
   * @param ctx the parse tree
   */
  exitConstantTypeFloat?: (ctx: ConstantTypeFloatContext) => void

  /**
   * Enter a parse tree produced by the `ConstantTypeCharacter`
   * labeled alternative in `CalcParser.constant`.
   * @param ctx the parse tree
   */
  enterConstantTypeCharacter?: (ctx: ConstantTypeCharacterContext) => void
  /**
   * Exit a parse tree produced by the `ConstantTypeCharacter`
   * labeled alternative in `CalcParser.constant`.
   * @param ctx the parse tree
   */
  exitConstantTypeCharacter?: (ctx: ConstantTypeCharacterContext) => void

  /**
   * Enter a parse tree produced by the `DirectDeclaratorTypeIdentifier`
   * labeled alternative in `CalcParser.direct_declarator`.
   * @param ctx the parse tree
   */
  enterDirectDeclaratorTypeIdentifier?: (ctx: DirectDeclaratorTypeIdentifierContext) => void
  /**
   * Exit a parse tree produced by the `DirectDeclaratorTypeIdentifier`
   * labeled alternative in `CalcParser.direct_declarator`.
   * @param ctx the parse tree
   */
  exitDirectDeclaratorTypeIdentifier?: (ctx: DirectDeclaratorTypeIdentifierContext) => void

  /**
   * Enter a parse tree produced by the `DirectDeclaratorTypeNestedDeclarator`
   * labeled alternative in `CalcParser.direct_declarator`.
   * @param ctx the parse tree
   */
  enterDirectDeclaratorTypeNestedDeclarator?: (
    ctx: DirectDeclaratorTypeNestedDeclaratorContext,
  ) => void
  /**
   * Exit a parse tree produced by the `DirectDeclaratorTypeNestedDeclarator`
   * labeled alternative in `CalcParser.direct_declarator`.
   * @param ctx the parse tree
   */
  exitDirectDeclaratorTypeNestedDeclarator?: (
    ctx: DirectDeclaratorTypeNestedDeclaratorContext,
  ) => void

  /**
   * Enter a parse tree produced by the `DirectDeclaratorTypeRecursiveArray`
   * labeled alternative in `CalcParser.direct_declarator`.
   * @param ctx the parse tree
   */
  enterDirectDeclaratorTypeRecursiveArray?: (ctx: DirectDeclaratorTypeRecursiveArrayContext) => void
  /**
   * Exit a parse tree produced by the `DirectDeclaratorTypeRecursiveArray`
   * labeled alternative in `CalcParser.direct_declarator`.
   * @param ctx the parse tree
   */
  exitDirectDeclaratorTypeRecursiveArray?: (ctx: DirectDeclaratorTypeRecursiveArrayContext) => void

  /**
   * Enter a parse tree produced by the `DirectDeclaratorTypeRecursiveParameters`
   * labeled alternative in `CalcParser.direct_declarator`.
   * @param ctx the parse tree
   */
  enterDirectDeclaratorTypeRecursiveParameters?: (
    ctx: DirectDeclaratorTypeRecursiveParametersContext,
  ) => void
  /**
   * Exit a parse tree produced by the `DirectDeclaratorTypeRecursiveParameters`
   * labeled alternative in `CalcParser.direct_declarator`.
   * @param ctx the parse tree
   */
  exitDirectDeclaratorTypeRecursiveParameters?: (
    ctx: DirectDeclaratorTypeRecursiveParametersContext,
  ) => void

  /**
   * Enter a parse tree produced by the `DirectDeclaratorTypeRecursiveIdentifiers`
   * labeled alternative in `CalcParser.direct_declarator`.
   * @param ctx the parse tree
   */
  enterDirectDeclaratorTypeRecursiveIdentifiers?: (
    ctx: DirectDeclaratorTypeRecursiveIdentifiersContext,
  ) => void
  /**
   * Exit a parse tree produced by the `DirectDeclaratorTypeRecursiveIdentifiers`
   * labeled alternative in `CalcParser.direct_declarator`.
   * @param ctx the parse tree
   */
  exitDirectDeclaratorTypeRecursiveIdentifiers?: (
    ctx: DirectDeclaratorTypeRecursiveIdentifiersContext,
  ) => void

  /**
   * Enter a parse tree produced by the `PostfixExpressionTypePrimary`
   * labeled alternative in `CalcParser.postfix_expression`.
   * @param ctx the parse tree
   */
  enterPostfixExpressionTypePrimary?: (ctx: PostfixExpressionTypePrimaryContext) => void
  /**
   * Exit a parse tree produced by the `PostfixExpressionTypePrimary`
   * labeled alternative in `CalcParser.postfix_expression`.
   * @param ctx the parse tree
   */
  exitPostfixExpressionTypePrimary?: (ctx: PostfixExpressionTypePrimaryContext) => void

  /**
   * Enter a parse tree produced by the `PostfixExpressionTypeArray`
   * labeled alternative in `CalcParser.postfix_expression`.
   * @param ctx the parse tree
   */
  enterPostfixExpressionTypeArray?: (ctx: PostfixExpressionTypeArrayContext) => void
  /**
   * Exit a parse tree produced by the `PostfixExpressionTypeArray`
   * labeled alternative in `CalcParser.postfix_expression`.
   * @param ctx the parse tree
   */
  exitPostfixExpressionTypeArray?: (ctx: PostfixExpressionTypeArrayContext) => void

  /**
   * Enter a parse tree produced by the `PostfixExpressionTypeFunctionCall`
   * labeled alternative in `CalcParser.postfix_expression`.
   * @param ctx the parse tree
   */
  enterPostfixExpressionTypeFunctionCall?: (ctx: PostfixExpressionTypeFunctionCallContext) => void
  /**
   * Exit a parse tree produced by the `PostfixExpressionTypeFunctionCall`
   * labeled alternative in `CalcParser.postfix_expression`.
   * @param ctx the parse tree
   */
  exitPostfixExpressionTypeFunctionCall?: (ctx: PostfixExpressionTypeFunctionCallContext) => void

  /**
   * Enter a parse tree produced by the `PostfixExpressionTypeMember`
   * labeled alternative in `CalcParser.postfix_expression`.
   * @param ctx the parse tree
   */
  enterPostfixExpressionTypeMember?: (ctx: PostfixExpressionTypeMemberContext) => void
  /**
   * Exit a parse tree produced by the `PostfixExpressionTypeMember`
   * labeled alternative in `CalcParser.postfix_expression`.
   * @param ctx the parse tree
   */
  exitPostfixExpressionTypeMember?: (ctx: PostfixExpressionTypeMemberContext) => void

  /**
   * Enter a parse tree produced by the `PostfixExpressionTypeDerefMember`
   * labeled alternative in `CalcParser.postfix_expression`.
   * @param ctx the parse tree
   */
  enterPostfixExpressionTypeDerefMember?: (ctx: PostfixExpressionTypeDerefMemberContext) => void
  /**
   * Exit a parse tree produced by the `PostfixExpressionTypeDerefMember`
   * labeled alternative in `CalcParser.postfix_expression`.
   * @param ctx the parse tree
   */
  exitPostfixExpressionTypeDerefMember?: (ctx: PostfixExpressionTypeDerefMemberContext) => void

  /**
   * Enter a parse tree produced by the `PostfixExpressionTypeIncrement`
   * labeled alternative in `CalcParser.postfix_expression`.
   * @param ctx the parse tree
   */
  enterPostfixExpressionTypeIncrement?: (ctx: PostfixExpressionTypeIncrementContext) => void
  /**
   * Exit a parse tree produced by the `PostfixExpressionTypeIncrement`
   * labeled alternative in `CalcParser.postfix_expression`.
   * @param ctx the parse tree
   */
  exitPostfixExpressionTypeIncrement?: (ctx: PostfixExpressionTypeIncrementContext) => void

  /**
   * Enter a parse tree produced by the `PostfixExpressionTypeDecrement`
   * labeled alternative in `CalcParser.postfix_expression`.
   * @param ctx the parse tree
   */
  enterPostfixExpressionTypeDecrement?: (ctx: PostfixExpressionTypeDecrementContext) => void
  /**
   * Exit a parse tree produced by the `PostfixExpressionTypeDecrement`
   * labeled alternative in `CalcParser.postfix_expression`.
   * @param ctx the parse tree
   */
  exitPostfixExpressionTypeDecrement?: (ctx: PostfixExpressionTypeDecrementContext) => void

  /**
   * Enter a parse tree produced by the `UnaryExpressionTypePostfix`
   * labeled alternative in `CalcParser.unary_expression`.
   * @param ctx the parse tree
   */
  enterUnaryExpressionTypePostfix?: (ctx: UnaryExpressionTypePostfixContext) => void
  /**
   * Exit a parse tree produced by the `UnaryExpressionTypePostfix`
   * labeled alternative in `CalcParser.unary_expression`.
   * @param ctx the parse tree
   */
  exitUnaryExpressionTypePostfix?: (ctx: UnaryExpressionTypePostfixContext) => void

  /**
   * Enter a parse tree produced by the `UnaryExpressionTypeIncrement`
   * labeled alternative in `CalcParser.unary_expression`.
   * @param ctx the parse tree
   */
  enterUnaryExpressionTypeIncrement?: (ctx: UnaryExpressionTypeIncrementContext) => void
  /**
   * Exit a parse tree produced by the `UnaryExpressionTypeIncrement`
   * labeled alternative in `CalcParser.unary_expression`.
   * @param ctx the parse tree
   */
  exitUnaryExpressionTypeIncrement?: (ctx: UnaryExpressionTypeIncrementContext) => void

  /**
   * Enter a parse tree produced by the `UnaryExpressionTypeDecrement`
   * labeled alternative in `CalcParser.unary_expression`.
   * @param ctx the parse tree
   */
  enterUnaryExpressionTypeDecrement?: (ctx: UnaryExpressionTypeDecrementContext) => void
  /**
   * Exit a parse tree produced by the `UnaryExpressionTypeDecrement`
   * labeled alternative in `CalcParser.unary_expression`.
   * @param ctx the parse tree
   */
  exitUnaryExpressionTypeDecrement?: (ctx: UnaryExpressionTypeDecrementContext) => void

  /**
   * Enter a parse tree produced by the `UnaryExpressionTypeUnaryOperator`
   * labeled alternative in `CalcParser.unary_expression`.
   * @param ctx the parse tree
   */
  enterUnaryExpressionTypeUnaryOperator?: (ctx: UnaryExpressionTypeUnaryOperatorContext) => void
  /**
   * Exit a parse tree produced by the `UnaryExpressionTypeUnaryOperator`
   * labeled alternative in `CalcParser.unary_expression`.
   * @param ctx the parse tree
   */
  exitUnaryExpressionTypeUnaryOperator?: (ctx: UnaryExpressionTypeUnaryOperatorContext) => void

  /**
   * Enter a parse tree produced by the `UnaryExpressionTypeSizeOf`
   * labeled alternative in `CalcParser.unary_expression`.
   * @param ctx the parse tree
   */
  enterUnaryExpressionTypeSizeOf?: (ctx: UnaryExpressionTypeSizeOfContext) => void
  /**
   * Exit a parse tree produced by the `UnaryExpressionTypeSizeOf`
   * labeled alternative in `CalcParser.unary_expression`.
   * @param ctx the parse tree
   */
  exitUnaryExpressionTypeSizeOf?: (ctx: UnaryExpressionTypeSizeOfContext) => void

  /**
   * Enter a parse tree produced by the `LogicalOrExpressionTypeLogicalAnd`
   * labeled alternative in `CalcParser.logical_or_expression`.
   * @param ctx the parse tree
   */
  enterLogicalOrExpressionTypeLogicalAnd?: (ctx: LogicalOrExpressionTypeLogicalAndContext) => void
  /**
   * Exit a parse tree produced by the `LogicalOrExpressionTypeLogicalAnd`
   * labeled alternative in `CalcParser.logical_or_expression`.
   * @param ctx the parse tree
   */
  exitLogicalOrExpressionTypeLogicalAnd?: (ctx: LogicalOrExpressionTypeLogicalAndContext) => void

  /**
   * Enter a parse tree produced by the `LogicalOrExpressionTypeLogicalOr`
   * labeled alternative in `CalcParser.logical_or_expression`.
   * @param ctx the parse tree
   */
  enterLogicalOrExpressionTypeLogicalOr?: (ctx: LogicalOrExpressionTypeLogicalOrContext) => void
  /**
   * Exit a parse tree produced by the `LogicalOrExpressionTypeLogicalOr`
   * labeled alternative in `CalcParser.logical_or_expression`.
   * @param ctx the parse tree
   */
  exitLogicalOrExpressionTypeLogicalOr?: (ctx: LogicalOrExpressionTypeLogicalOrContext) => void

  /**
   * Enter a parse tree produced by the `AndExpressionTypeEquality`
   * labeled alternative in `CalcParser.and_expression`.
   * @param ctx the parse tree
   */
  enterAndExpressionTypeEquality?: (ctx: AndExpressionTypeEqualityContext) => void
  /**
   * Exit a parse tree produced by the `AndExpressionTypeEquality`
   * labeled alternative in `CalcParser.and_expression`.
   * @param ctx the parse tree
   */
  exitAndExpressionTypeEquality?: (ctx: AndExpressionTypeEqualityContext) => void

  /**
   * Enter a parse tree produced by the `AndExpressionTypeAnd`
   * labeled alternative in `CalcParser.and_expression`.
   * @param ctx the parse tree
   */
  enterAndExpressionTypeAnd?: (ctx: AndExpressionTypeAndContext) => void
  /**
   * Exit a parse tree produced by the `AndExpressionTypeAnd`
   * labeled alternative in `CalcParser.and_expression`.
   * @param ctx the parse tree
   */
  exitAndExpressionTypeAnd?: (ctx: AndExpressionTypeAndContext) => void

  /**
   * Enter a parse tree produced by the `AdditiveExpressionTypeMultiplicative`
   * labeled alternative in `CalcParser.additive_expression`.
   * @param ctx the parse tree
   */
  enterAdditiveExpressionTypeMultiplicative?: (
    ctx: AdditiveExpressionTypeMultiplicativeContext,
  ) => void
  /**
   * Exit a parse tree produced by the `AdditiveExpressionTypeMultiplicative`
   * labeled alternative in `CalcParser.additive_expression`.
   * @param ctx the parse tree
   */
  exitAdditiveExpressionTypeMultiplicative?: (
    ctx: AdditiveExpressionTypeMultiplicativeContext,
  ) => void

  /**
   * Enter a parse tree produced by the `AdditiveExpressionTypeAdditiveAdd`
   * labeled alternative in `CalcParser.additive_expression`.
   * @param ctx the parse tree
   */
  enterAdditiveExpressionTypeAdditiveAdd?: (ctx: AdditiveExpressionTypeAdditiveAddContext) => void
  /**
   * Exit a parse tree produced by the `AdditiveExpressionTypeAdditiveAdd`
   * labeled alternative in `CalcParser.additive_expression`.
   * @param ctx the parse tree
   */
  exitAdditiveExpressionTypeAdditiveAdd?: (ctx: AdditiveExpressionTypeAdditiveAddContext) => void

  /**
   * Enter a parse tree produced by the `AdditiveExpressionTypeAdditiveMinus`
   * labeled alternative in `CalcParser.additive_expression`.
   * @param ctx the parse tree
   */
  enterAdditiveExpressionTypeAdditiveMinus?: (
    ctx: AdditiveExpressionTypeAdditiveMinusContext,
  ) => void
  /**
   * Exit a parse tree produced by the `AdditiveExpressionTypeAdditiveMinus`
   * labeled alternative in `CalcParser.additive_expression`.
   * @param ctx the parse tree
   */
  exitAdditiveExpressionTypeAdditiveMinus?: (
    ctx: AdditiveExpressionTypeAdditiveMinusContext,
  ) => void

  /**
   * Enter a parse tree produced by the `AbstractDeclaratorTypePointer`
   * labeled alternative in `CalcParser.abstract_declarator`.
   * @param ctx the parse tree
   */
  enterAbstractDeclaratorTypePointer?: (ctx: AbstractDeclaratorTypePointerContext) => void
  /**
   * Exit a parse tree produced by the `AbstractDeclaratorTypePointer`
   * labeled alternative in `CalcParser.abstract_declarator`.
   * @param ctx the parse tree
   */
  exitAbstractDeclaratorTypePointer?: (ctx: AbstractDeclaratorTypePointerContext) => void

  /**
   * Enter a parse tree produced by the `AbstractDeclaratorTypeDirectAbstractDeclarator`
   * labeled alternative in `CalcParser.abstract_declarator`.
   * @param ctx the parse tree
   */
  enterAbstractDeclaratorTypeDirectAbstractDeclarator?: (
    ctx: AbstractDeclaratorTypeDirectAbstractDeclaratorContext,
  ) => void
  /**
   * Exit a parse tree produced by the `AbstractDeclaratorTypeDirectAbstractDeclarator`
   * labeled alternative in `CalcParser.abstract_declarator`.
   * @param ctx the parse tree
   */
  exitAbstractDeclaratorTypeDirectAbstractDeclarator?: (
    ctx: AbstractDeclaratorTypeDirectAbstractDeclaratorContext,
  ) => void

  /**
   * Enter a parse tree produced by the `DirectAbstractDeclaratorTypeNestedAbstractDeclarator`
   * labeled alternative in `CalcParser.direct_abstract_declarator`.
   * @param ctx the parse tree
   */
  enterDirectAbstractDeclaratorTypeNestedAbstractDeclarator?: (
    ctx: DirectAbstractDeclaratorTypeNestedAbstractDeclaratorContext,
  ) => void
  /**
   * Exit a parse tree produced by the `DirectAbstractDeclaratorTypeNestedAbstractDeclarator`
   * labeled alternative in `CalcParser.direct_abstract_declarator`.
   * @param ctx the parse tree
   */
  exitDirectAbstractDeclaratorTypeNestedAbstractDeclarator?: (
    ctx: DirectAbstractDeclaratorTypeNestedAbstractDeclaratorContext,
  ) => void

  /**
   * Enter a parse tree produced by the `DirectAbstractDeclaratorTypeArray`
   * labeled alternative in `CalcParser.direct_abstract_declarator`.
   * @param ctx the parse tree
   */
  enterDirectAbstractDeclaratorTypeArray?: (ctx: DirectAbstractDeclaratorTypeArrayContext) => void
  /**
   * Exit a parse tree produced by the `DirectAbstractDeclaratorTypeArray`
   * labeled alternative in `CalcParser.direct_abstract_declarator`.
   * @param ctx the parse tree
   */
  exitDirectAbstractDeclaratorTypeArray?: (ctx: DirectAbstractDeclaratorTypeArrayContext) => void

  /**
   * Enter a parse tree produced by the `DirectAbstractDeclaratorTypeParameters`
   * labeled alternative in `CalcParser.direct_abstract_declarator`.
   * @param ctx the parse tree
   */
  enterDirectAbstractDeclaratorTypeParameters?: (
    ctx: DirectAbstractDeclaratorTypeParametersContext,
  ) => void
  /**
   * Exit a parse tree produced by the `DirectAbstractDeclaratorTypeParameters`
   * labeled alternative in `CalcParser.direct_abstract_declarator`.
   * @param ctx the parse tree
   */
  exitDirectAbstractDeclaratorTypeParameters?: (
    ctx: DirectAbstractDeclaratorTypeParametersContext,
  ) => void

  /**
   * Enter a parse tree produced by the `DirectAbstractDeclaratorTypeRecursiveArray`
   * labeled alternative in `CalcParser.direct_abstract_declarator`.
   * @param ctx the parse tree
   */
  enterDirectAbstractDeclaratorTypeRecursiveArray?: (
    ctx: DirectAbstractDeclaratorTypeRecursiveArrayContext,
  ) => void
  /**
   * Exit a parse tree produced by the `DirectAbstractDeclaratorTypeRecursiveArray`
   * labeled alternative in `CalcParser.direct_abstract_declarator`.
   * @param ctx the parse tree
   */
  exitDirectAbstractDeclaratorTypeRecursiveArray?: (
    ctx: DirectAbstractDeclaratorTypeRecursiveArrayContext,
  ) => void

  /**
   * Enter a parse tree produced by the `DirectAbstractDeclaratorTypeRecursiveParameters`
   * labeled alternative in `CalcParser.direct_abstract_declarator`.
   * @param ctx the parse tree
   */
  enterDirectAbstractDeclaratorTypeRecursiveParameters?: (
    ctx: DirectAbstractDeclaratorTypeRecursiveParametersContext,
  ) => void
  /**
   * Exit a parse tree produced by the `DirectAbstractDeclaratorTypeRecursiveParameters`
   * labeled alternative in `CalcParser.direct_abstract_declarator`.
   * @param ctx the parse tree
   */
  exitDirectAbstractDeclaratorTypeRecursiveParameters?: (
    ctx: DirectAbstractDeclaratorTypeRecursiveParametersContext,
  ) => void

  /**
   * Enter a parse tree produced by the `MultiplicativeExpressionTypeCast`
   * labeled alternative in `CalcParser.multiplicative_expression`.
   * @param ctx the parse tree
   */
  enterMultiplicativeExpressionTypeCast?: (ctx: MultiplicativeExpressionTypeCastContext) => void
  /**
   * Exit a parse tree produced by the `MultiplicativeExpressionTypeCast`
   * labeled alternative in `CalcParser.multiplicative_expression`.
   * @param ctx the parse tree
   */
  exitMultiplicativeExpressionTypeCast?: (ctx: MultiplicativeExpressionTypeCastContext) => void

  /**
   * Enter a parse tree produced by the `MultiplicativeExpressionTypeMultiplicativeAsterick`
   * labeled alternative in `CalcParser.multiplicative_expression`.
   * @param ctx the parse tree
   */
  enterMultiplicativeExpressionTypeMultiplicativeAsterick?: (
    ctx: MultiplicativeExpressionTypeMultiplicativeAsterickContext,
  ) => void
  /**
   * Exit a parse tree produced by the `MultiplicativeExpressionTypeMultiplicativeAsterick`
   * labeled alternative in `CalcParser.multiplicative_expression`.
   * @param ctx the parse tree
   */
  exitMultiplicativeExpressionTypeMultiplicativeAsterick?: (
    ctx: MultiplicativeExpressionTypeMultiplicativeAsterickContext,
  ) => void

  /**
   * Enter a parse tree produced by the `MultiplicativeExpressionTypeMultiplicativeBackslash`
   * labeled alternative in `CalcParser.multiplicative_expression`.
   * @param ctx the parse tree
   */
  enterMultiplicativeExpressionTypeMultiplicativeBackslash?: (
    ctx: MultiplicativeExpressionTypeMultiplicativeBackslashContext,
  ) => void
  /**
   * Exit a parse tree produced by the `MultiplicativeExpressionTypeMultiplicativeBackslash`
   * labeled alternative in `CalcParser.multiplicative_expression`.
   * @param ctx the parse tree
   */
  exitMultiplicativeExpressionTypeMultiplicativeBackslash?: (
    ctx: MultiplicativeExpressionTypeMultiplicativeBackslashContext,
  ) => void

  /**
   * Enter a parse tree produced by the `MultiplicativeExpressionTypeMultiplicativePercent`
   * labeled alternative in `CalcParser.multiplicative_expression`.
   * @param ctx the parse tree
   */
  enterMultiplicativeExpressionTypeMultiplicativePercent?: (
    ctx: MultiplicativeExpressionTypeMultiplicativePercentContext,
  ) => void
  /**
   * Exit a parse tree produced by the `MultiplicativeExpressionTypeMultiplicativePercent`
   * labeled alternative in `CalcParser.multiplicative_expression`.
   * @param ctx the parse tree
   */
  exitMultiplicativeExpressionTypeMultiplicativePercent?: (
    ctx: MultiplicativeExpressionTypeMultiplicativePercentContext,
  ) => void

  /**
   * Enter a parse tree produced by the `PrimaryExpressionTypeIdentifier`
   * labeled alternative in `CalcParser.primary_expression`.
   * @param ctx the parse tree
   */
  enterPrimaryExpressionTypeIdentifier?: (ctx: PrimaryExpressionTypeIdentifierContext) => void
  /**
   * Exit a parse tree produced by the `PrimaryExpressionTypeIdentifier`
   * labeled alternative in `CalcParser.primary_expression`.
   * @param ctx the parse tree
   */
  exitPrimaryExpressionTypeIdentifier?: (ctx: PrimaryExpressionTypeIdentifierContext) => void

  /**
   * Enter a parse tree produced by the `PrimaryExpressionTypeConstant`
   * labeled alternative in `CalcParser.primary_expression`.
   * @param ctx the parse tree
   */
  enterPrimaryExpressionTypeConstant?: (ctx: PrimaryExpressionTypeConstantContext) => void
  /**
   * Exit a parse tree produced by the `PrimaryExpressionTypeConstant`
   * labeled alternative in `CalcParser.primary_expression`.
   * @param ctx the parse tree
   */
  exitPrimaryExpressionTypeConstant?: (ctx: PrimaryExpressionTypeConstantContext) => void

  /**
   * Enter a parse tree produced by the `PrimaryExpressionTypeNestedExpression`
   * labeled alternative in `CalcParser.primary_expression`.
   * @param ctx the parse tree
   */
  enterPrimaryExpressionTypeNestedExpression?: (
    ctx: PrimaryExpressionTypeNestedExpressionContext,
  ) => void
  /**
   * Exit a parse tree produced by the `PrimaryExpressionTypeNestedExpression`
   * labeled alternative in `CalcParser.primary_expression`.
   * @param ctx the parse tree
   */
  exitPrimaryExpressionTypeNestedExpression?: (
    ctx: PrimaryExpressionTypeNestedExpressionContext,
  ) => void

  /**
   * Enter a parse tree produced by the `ExclusiveOrExpressionTypeAnd`
   * labeled alternative in `CalcParser.exclusive_or_expression`.
   * @param ctx the parse tree
   */
  enterExclusiveOrExpressionTypeAnd?: (ctx: ExclusiveOrExpressionTypeAndContext) => void
  /**
   * Exit a parse tree produced by the `ExclusiveOrExpressionTypeAnd`
   * labeled alternative in `CalcParser.exclusive_or_expression`.
   * @param ctx the parse tree
   */
  exitExclusiveOrExpressionTypeAnd?: (ctx: ExclusiveOrExpressionTypeAndContext) => void

  /**
   * Enter a parse tree produced by the `ExclusiveOrExpressionTypeExclusiveOr`
   * labeled alternative in `CalcParser.exclusive_or_expression`.
   * @param ctx the parse tree
   */
  enterExclusiveOrExpressionTypeExclusiveOr?: (
    ctx: ExclusiveOrExpressionTypeExclusiveOrContext,
  ) => void
  /**
   * Exit a parse tree produced by the `ExclusiveOrExpressionTypeExclusiveOr`
   * labeled alternative in `CalcParser.exclusive_or_expression`.
   * @param ctx the parse tree
   */
  exitExclusiveOrExpressionTypeExclusiveOr?: (
    ctx: ExclusiveOrExpressionTypeExclusiveOrContext,
  ) => void

  /**
   * Enter a parse tree produced by the `EqualityExpressionTypeRelational`
   * labeled alternative in `CalcParser.equality_expression`.
   * @param ctx the parse tree
   */
  enterEqualityExpressionTypeRelational?: (ctx: EqualityExpressionTypeRelationalContext) => void
  /**
   * Exit a parse tree produced by the `EqualityExpressionTypeRelational`
   * labeled alternative in `CalcParser.equality_expression`.
   * @param ctx the parse tree
   */
  exitEqualityExpressionTypeRelational?: (ctx: EqualityExpressionTypeRelationalContext) => void

  /**
   * Enter a parse tree produced by the `EqualityExpressionTypeEqualityEqual`
   * labeled alternative in `CalcParser.equality_expression`.
   * @param ctx the parse tree
   */
  enterEqualityExpressionTypeEqualityEqual?: (
    ctx: EqualityExpressionTypeEqualityEqualContext,
  ) => void
  /**
   * Exit a parse tree produced by the `EqualityExpressionTypeEqualityEqual`
   * labeled alternative in `CalcParser.equality_expression`.
   * @param ctx the parse tree
   */
  exitEqualityExpressionTypeEqualityEqual?: (
    ctx: EqualityExpressionTypeEqualityEqualContext,
  ) => void

  /**
   * Enter a parse tree produced by the `EqualityExpressionTypeEqualityNotEqual`
   * labeled alternative in `CalcParser.equality_expression`.
   * @param ctx the parse tree
   */
  enterEqualityExpressionTypeEqualityNotEqual?: (
    ctx: EqualityExpressionTypeEqualityNotEqualContext,
  ) => void
  /**
   * Exit a parse tree produced by the `EqualityExpressionTypeEqualityNotEqual`
   * labeled alternative in `CalcParser.equality_expression`.
   * @param ctx the parse tree
   */
  exitEqualityExpressionTypeEqualityNotEqual?: (
    ctx: EqualityExpressionTypeEqualityNotEqualContext,
  ) => void

  /**
   * Enter a parse tree produced by the `InitializerListTypeInitializer`
   * labeled alternative in `CalcParser.initializer_list`.
   * @param ctx the parse tree
   */
  enterInitializerListTypeInitializer?: (ctx: InitializerListTypeInitializerContext) => void
  /**
   * Exit a parse tree produced by the `InitializerListTypeInitializer`
   * labeled alternative in `CalcParser.initializer_list`.
   * @param ctx the parse tree
   */
  exitInitializerListTypeInitializer?: (ctx: InitializerListTypeInitializerContext) => void

  /**
   * Enter a parse tree produced by the `InitializerListTypeRecursiveInitializer`
   * labeled alternative in `CalcParser.initializer_list`.
   * @param ctx the parse tree
   */
  enterInitializerListTypeRecursiveInitializer?: (
    ctx: InitializerListTypeRecursiveInitializerContext,
  ) => void
  /**
   * Exit a parse tree produced by the `InitializerListTypeRecursiveInitializer`
   * labeled alternative in `CalcParser.initializer_list`.
   * @param ctx the parse tree
   */
  exitInitializerListTypeRecursiveInitializer?: (
    ctx: InitializerListTypeRecursiveInitializerContext,
  ) => void

  /**
   * Enter a parse tree produced by the `InclusiveOrExpressionTypeExclusiveOr`
   * labeled alternative in `CalcParser.inclusive_or_expression`.
   * @param ctx the parse tree
   */
  enterInclusiveOrExpressionTypeExclusiveOr?: (
    ctx: InclusiveOrExpressionTypeExclusiveOrContext,
  ) => void
  /**
   * Exit a parse tree produced by the `InclusiveOrExpressionTypeExclusiveOr`
   * labeled alternative in `CalcParser.inclusive_or_expression`.
   * @param ctx the parse tree
   */
  exitInclusiveOrExpressionTypeExclusiveOr?: (
    ctx: InclusiveOrExpressionTypeExclusiveOrContext,
  ) => void

  /**
   * Enter a parse tree produced by the `InclusiveOrExpressionTypeInclusiveOr`
   * labeled alternative in `CalcParser.inclusive_or_expression`.
   * @param ctx the parse tree
   */
  enterInclusiveOrExpressionTypeInclusiveOr?: (
    ctx: InclusiveOrExpressionTypeInclusiveOrContext,
  ) => void
  /**
   * Exit a parse tree produced by the `InclusiveOrExpressionTypeInclusiveOr`
   * labeled alternative in `CalcParser.inclusive_or_expression`.
   * @param ctx the parse tree
   */
  exitInclusiveOrExpressionTypeInclusiveOr?: (
    ctx: InclusiveOrExpressionTypeInclusiveOrContext,
  ) => void

  /**
   * Enter a parse tree produced by the `ConditionalExpressionTypeLogicalOr`
   * labeled alternative in `CalcParser.conditional_expression`.
   * @param ctx the parse tree
   */
  enterConditionalExpressionTypeLogicalOr?: (ctx: ConditionalExpressionTypeLogicalOrContext) => void
  /**
   * Exit a parse tree produced by the `ConditionalExpressionTypeLogicalOr`
   * labeled alternative in `CalcParser.conditional_expression`.
   * @param ctx the parse tree
   */
  exitConditionalExpressionTypeLogicalOr?: (ctx: ConditionalExpressionTypeLogicalOrContext) => void

  /**
   * Enter a parse tree produced by the `ConditionalExpressionTypeConditional`
   * labeled alternative in `CalcParser.conditional_expression`.
   * @param ctx the parse tree
   */
  enterConditionalExpressionTypeConditional?: (
    ctx: ConditionalExpressionTypeConditionalContext,
  ) => void
  /**
   * Exit a parse tree produced by the `ConditionalExpressionTypeConditional`
   * labeled alternative in `CalcParser.conditional_expression`.
   * @param ctx the parse tree
   */
  exitConditionalExpressionTypeConditional?: (
    ctx: ConditionalExpressionTypeConditionalContext,
  ) => void

  /**
   * Enter a parse tree produced by the `StatementTypeLabeled`
   * labeled alternative in `CalcParser.statement`.
   * @param ctx the parse tree
   */
  enterStatementTypeLabeled?: (ctx: StatementTypeLabeledContext) => void
  /**
   * Exit a parse tree produced by the `StatementTypeLabeled`
   * labeled alternative in `CalcParser.statement`.
   * @param ctx the parse tree
   */
  exitStatementTypeLabeled?: (ctx: StatementTypeLabeledContext) => void

  /**
   * Enter a parse tree produced by the `StatementTypeDeclaration`
   * labeled alternative in `CalcParser.statement`.
   * @param ctx the parse tree
   */
  enterStatementTypeDeclaration?: (ctx: StatementTypeDeclarationContext) => void
  /**
   * Exit a parse tree produced by the `StatementTypeDeclaration`
   * labeled alternative in `CalcParser.statement`.
   * @param ctx the parse tree
   */
  exitStatementTypeDeclaration?: (ctx: StatementTypeDeclarationContext) => void

  /**
   * Enter a parse tree produced by the `StatementTypeExpression`
   * labeled alternative in `CalcParser.statement`.
   * @param ctx the parse tree
   */
  enterStatementTypeExpression?: (ctx: StatementTypeExpressionContext) => void
  /**
   * Exit a parse tree produced by the `StatementTypeExpression`
   * labeled alternative in `CalcParser.statement`.
   * @param ctx the parse tree
   */
  exitStatementTypeExpression?: (ctx: StatementTypeExpressionContext) => void

  /**
   * Enter a parse tree produced by the `StatementTypeCompound`
   * labeled alternative in `CalcParser.statement`.
   * @param ctx the parse tree
   */
  enterStatementTypeCompound?: (ctx: StatementTypeCompoundContext) => void
  /**
   * Exit a parse tree produced by the `StatementTypeCompound`
   * labeled alternative in `CalcParser.statement`.
   * @param ctx the parse tree
   */
  exitStatementTypeCompound?: (ctx: StatementTypeCompoundContext) => void

  /**
   * Enter a parse tree produced by the `StatementTypeIf`
   * labeled alternative in `CalcParser.statement`.
   * @param ctx the parse tree
   */
  enterStatementTypeIf?: (ctx: StatementTypeIfContext) => void
  /**
   * Exit a parse tree produced by the `StatementTypeIf`
   * labeled alternative in `CalcParser.statement`.
   * @param ctx the parse tree
   */
  exitStatementTypeIf?: (ctx: StatementTypeIfContext) => void

  /**
   * Enter a parse tree produced by the `StatementTypeSwitch`
   * labeled alternative in `CalcParser.statement`.
   * @param ctx the parse tree
   */
  enterStatementTypeSwitch?: (ctx: StatementTypeSwitchContext) => void
  /**
   * Exit a parse tree produced by the `StatementTypeSwitch`
   * labeled alternative in `CalcParser.statement`.
   * @param ctx the parse tree
   */
  exitStatementTypeSwitch?: (ctx: StatementTypeSwitchContext) => void

  /**
   * Enter a parse tree produced by the `StatementTypeWhile`
   * labeled alternative in `CalcParser.statement`.
   * @param ctx the parse tree
   */
  enterStatementTypeWhile?: (ctx: StatementTypeWhileContext) => void
  /**
   * Exit a parse tree produced by the `StatementTypeWhile`
   * labeled alternative in `CalcParser.statement`.
   * @param ctx the parse tree
   */
  exitStatementTypeWhile?: (ctx: StatementTypeWhileContext) => void

  /**
   * Enter a parse tree produced by the `StatementTypeDo`
   * labeled alternative in `CalcParser.statement`.
   * @param ctx the parse tree
   */
  enterStatementTypeDo?: (ctx: StatementTypeDoContext) => void
  /**
   * Exit a parse tree produced by the `StatementTypeDo`
   * labeled alternative in `CalcParser.statement`.
   * @param ctx the parse tree
   */
  exitStatementTypeDo?: (ctx: StatementTypeDoContext) => void

  /**
   * Enter a parse tree produced by the `StatementTypeFor`
   * labeled alternative in `CalcParser.statement`.
   * @param ctx the parse tree
   */
  enterStatementTypeFor?: (ctx: StatementTypeForContext) => void
  /**
   * Exit a parse tree produced by the `StatementTypeFor`
   * labeled alternative in `CalcParser.statement`.
   * @param ctx the parse tree
   */
  exitStatementTypeFor?: (ctx: StatementTypeForContext) => void

  /**
   * Enter a parse tree produced by the `StatementTypeGoto`
   * labeled alternative in `CalcParser.statement`.
   * @param ctx the parse tree
   */
  enterStatementTypeGoto?: (ctx: StatementTypeGotoContext) => void
  /**
   * Exit a parse tree produced by the `StatementTypeGoto`
   * labeled alternative in `CalcParser.statement`.
   * @param ctx the parse tree
   */
  exitStatementTypeGoto?: (ctx: StatementTypeGotoContext) => void

  /**
   * Enter a parse tree produced by the `StatementTypeContinue`
   * labeled alternative in `CalcParser.statement`.
   * @param ctx the parse tree
   */
  enterStatementTypeContinue?: (ctx: StatementTypeContinueContext) => void
  /**
   * Exit a parse tree produced by the `StatementTypeContinue`
   * labeled alternative in `CalcParser.statement`.
   * @param ctx the parse tree
   */
  exitStatementTypeContinue?: (ctx: StatementTypeContinueContext) => void

  /**
   * Enter a parse tree produced by the `StatementTypeBreak`
   * labeled alternative in `CalcParser.statement`.
   * @param ctx the parse tree
   */
  enterStatementTypeBreak?: (ctx: StatementTypeBreakContext) => void
  /**
   * Exit a parse tree produced by the `StatementTypeBreak`
   * labeled alternative in `CalcParser.statement`.
   * @param ctx the parse tree
   */
  exitStatementTypeBreak?: (ctx: StatementTypeBreakContext) => void

  /**
   * Enter a parse tree produced by the `StatementTypeReturn`
   * labeled alternative in `CalcParser.statement`.
   * @param ctx the parse tree
   */
  enterStatementTypeReturn?: (ctx: StatementTypeReturnContext) => void
  /**
   * Exit a parse tree produced by the `StatementTypeReturn`
   * labeled alternative in `CalcParser.statement`.
   * @param ctx the parse tree
   */
  exitStatementTypeReturn?: (ctx: StatementTypeReturnContext) => void

  /**
   * Enter a parse tree produced by the `ShfitExpressionTypeAdditive`
   * labeled alternative in `CalcParser.shift_expression`.
   * @param ctx the parse tree
   */
  enterShfitExpressionTypeAdditive?: (ctx: ShfitExpressionTypeAdditiveContext) => void
  /**
   * Exit a parse tree produced by the `ShfitExpressionTypeAdditive`
   * labeled alternative in `CalcParser.shift_expression`.
   * @param ctx the parse tree
   */
  exitShfitExpressionTypeAdditive?: (ctx: ShfitExpressionTypeAdditiveContext) => void

  /**
   * Enter a parse tree produced by the `ShfitExpressionTypeShiftLeft`
   * labeled alternative in `CalcParser.shift_expression`.
   * @param ctx the parse tree
   */
  enterShfitExpressionTypeShiftLeft?: (ctx: ShfitExpressionTypeShiftLeftContext) => void
  /**
   * Exit a parse tree produced by the `ShfitExpressionTypeShiftLeft`
   * labeled alternative in `CalcParser.shift_expression`.
   * @param ctx the parse tree
   */
  exitShfitExpressionTypeShiftLeft?: (ctx: ShfitExpressionTypeShiftLeftContext) => void

  /**
   * Enter a parse tree produced by the `ShfitExpressionTypeShiftRight`
   * labeled alternative in `CalcParser.shift_expression`.
   * @param ctx the parse tree
   */
  enterShfitExpressionTypeShiftRight?: (ctx: ShfitExpressionTypeShiftRightContext) => void
  /**
   * Exit a parse tree produced by the `ShfitExpressionTypeShiftRight`
   * labeled alternative in `CalcParser.shift_expression`.
   * @param ctx the parse tree
   */
  exitShfitExpressionTypeShiftRight?: (ctx: ShfitExpressionTypeShiftRightContext) => void

  /**
   * Enter a parse tree produced by the `ExpressionTypeAssignment`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  enterExpressionTypeAssignment?: (ctx: ExpressionTypeAssignmentContext) => void
  /**
   * Exit a parse tree produced by the `ExpressionTypeAssignment`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  exitExpressionTypeAssignment?: (ctx: ExpressionTypeAssignmentContext) => void

  /**
   * Enter a parse tree produced by the `ExpressionTypeExpression`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  enterExpressionTypeExpression?: (ctx: ExpressionTypeExpressionContext) => void
  /**
   * Exit a parse tree produced by the `ExpressionTypeExpression`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  exitExpressionTypeExpression?: (ctx: ExpressionTypeExpressionContext) => void

  /**
   * Enter a parse tree produced by the `ParameterDeclarationTypeDeclarator`
   * labeled alternative in `CalcParser.parameter_declaration`.
   * @param ctx the parse tree
   */
  enterParameterDeclarationTypeDeclarator?: (ctx: ParameterDeclarationTypeDeclaratorContext) => void
  /**
   * Exit a parse tree produced by the `ParameterDeclarationTypeDeclarator`
   * labeled alternative in `CalcParser.parameter_declaration`.
   * @param ctx the parse tree
   */
  exitParameterDeclarationTypeDeclarator?: (ctx: ParameterDeclarationTypeDeclaratorContext) => void

  /**
   * Enter a parse tree produced by the `ParameterDeclarationTypeAbstractDeclarator`
   * labeled alternative in `CalcParser.parameter_declaration`.
   * @param ctx the parse tree
   */
  enterParameterDeclarationTypeAbstractDeclarator?: (
    ctx: ParameterDeclarationTypeAbstractDeclaratorContext,
  ) => void
  /**
   * Exit a parse tree produced by the `ParameterDeclarationTypeAbstractDeclarator`
   * labeled alternative in `CalcParser.parameter_declaration`.
   * @param ctx the parse tree
   */
  exitParameterDeclarationTypeAbstractDeclarator?: (
    ctx: ParameterDeclarationTypeAbstractDeclaratorContext,
  ) => void

  /**
   * Enter a parse tree produced by the `ParameterDeclarationTypeNormal`
   * labeled alternative in `CalcParser.parameter_declaration`.
   * @param ctx the parse tree
   */
  enterParameterDeclarationTypeNormal?: (ctx: ParameterDeclarationTypeNormalContext) => void
  /**
   * Exit a parse tree produced by the `ParameterDeclarationTypeNormal`
   * labeled alternative in `CalcParser.parameter_declaration`.
   * @param ctx the parse tree
   */
  exitParameterDeclarationTypeNormal?: (ctx: ParameterDeclarationTypeNormalContext) => void

  /**
   * Enter a parse tree produced by the `AssignmentExpressionTypeConditional`
   * labeled alternative in `CalcParser.assignment_expression`.
   * @param ctx the parse tree
   */
  enterAssignmentExpressionTypeConditional?: (
    ctx: AssignmentExpressionTypeConditionalContext,
  ) => void
  /**
   * Exit a parse tree produced by the `AssignmentExpressionTypeConditional`
   * labeled alternative in `CalcParser.assignment_expression`.
   * @param ctx the parse tree
   */
  exitAssignmentExpressionTypeConditional?: (
    ctx: AssignmentExpressionTypeConditionalContext,
  ) => void

  /**
   * Enter a parse tree produced by the `AssignmentExpressionTypeAssignment`
   * labeled alternative in `CalcParser.assignment_expression`.
   * @param ctx the parse tree
   */
  enterAssignmentExpressionTypeAssignment?: (ctx: AssignmentExpressionTypeAssignmentContext) => void
  /**
   * Exit a parse tree produced by the `AssignmentExpressionTypeAssignment`
   * labeled alternative in `CalcParser.assignment_expression`.
   * @param ctx the parse tree
   */
  exitAssignmentExpressionTypeAssignment?: (ctx: AssignmentExpressionTypeAssignmentContext) => void

  /**
   * Enter a parse tree produced by the `InitializerTypeConditionalExpression`
   * labeled alternative in `CalcParser.initializer`.
   * @param ctx the parse tree
   */
  enterInitializerTypeConditionalExpression?: (
    ctx: InitializerTypeConditionalExpressionContext,
  ) => void
  /**
   * Exit a parse tree produced by the `InitializerTypeConditionalExpression`
   * labeled alternative in `CalcParser.initializer`.
   * @param ctx the parse tree
   */
  exitInitializerTypeConditionalExpression?: (
    ctx: InitializerTypeConditionalExpressionContext,
  ) => void

  /**
   * Enter a parse tree produced by the `InitializerTypeArray`
   * labeled alternative in `CalcParser.initializer`.
   * @param ctx the parse tree
   */
  enterInitializerTypeArray?: (ctx: InitializerTypeArrayContext) => void
  /**
   * Exit a parse tree produced by the `InitializerTypeArray`
   * labeled alternative in `CalcParser.initializer`.
   * @param ctx the parse tree
   */
  exitInitializerTypeArray?: (ctx: InitializerTypeArrayContext) => void

  /**
   * Enter a parse tree produced by the `LogicalAndExpressionTypeInclusiveOr`
   * labeled alternative in `CalcParser.logical_and_expression`.
   * @param ctx the parse tree
   */
  enterLogicalAndExpressionTypeInclusiveOr?: (
    ctx: LogicalAndExpressionTypeInclusiveOrContext,
  ) => void
  /**
   * Exit a parse tree produced by the `LogicalAndExpressionTypeInclusiveOr`
   * labeled alternative in `CalcParser.logical_and_expression`.
   * @param ctx the parse tree
   */
  exitLogicalAndExpressionTypeInclusiveOr?: (
    ctx: LogicalAndExpressionTypeInclusiveOrContext,
  ) => void

  /**
   * Enter a parse tree produced by the `LogicalAndExpressionTypeLogicalAnd`
   * labeled alternative in `CalcParser.logical_and_expression`.
   * @param ctx the parse tree
   */
  enterLogicalAndExpressionTypeLogicalAnd?: (ctx: LogicalAndExpressionTypeLogicalAndContext) => void
  /**
   * Exit a parse tree produced by the `LogicalAndExpressionTypeLogicalAnd`
   * labeled alternative in `CalcParser.logical_and_expression`.
   * @param ctx the parse tree
   */
  exitLogicalAndExpressionTypeLogicalAnd?: (ctx: LogicalAndExpressionTypeLogicalAndContext) => void

  /**
   * Enter a parse tree produced by the `RelationalExpressionTypeShift`
   * labeled alternative in `CalcParser.relational_expression`.
   * @param ctx the parse tree
   */
  enterRelationalExpressionTypeShift?: (ctx: RelationalExpressionTypeShiftContext) => void
  /**
   * Exit a parse tree produced by the `RelationalExpressionTypeShift`
   * labeled alternative in `CalcParser.relational_expression`.
   * @param ctx the parse tree
   */
  exitRelationalExpressionTypeShift?: (ctx: RelationalExpressionTypeShiftContext) => void

  /**
   * Enter a parse tree produced by the `RelationalExpressionTypeRelationalGT`
   * labeled alternative in `CalcParser.relational_expression`.
   * @param ctx the parse tree
   */
  enterRelationalExpressionTypeRelationalGT?: (
    ctx: RelationalExpressionTypeRelationalGTContext,
  ) => void
  /**
   * Exit a parse tree produced by the `RelationalExpressionTypeRelationalGT`
   * labeled alternative in `CalcParser.relational_expression`.
   * @param ctx the parse tree
   */
  exitRelationalExpressionTypeRelationalGT?: (
    ctx: RelationalExpressionTypeRelationalGTContext,
  ) => void

  /**
   * Enter a parse tree produced by the `RelationalExpressionTypeRelationalLT`
   * labeled alternative in `CalcParser.relational_expression`.
   * @param ctx the parse tree
   */
  enterRelationalExpressionTypeRelationalLT?: (
    ctx: RelationalExpressionTypeRelationalLTContext,
  ) => void
  /**
   * Exit a parse tree produced by the `RelationalExpressionTypeRelationalLT`
   * labeled alternative in `CalcParser.relational_expression`.
   * @param ctx the parse tree
   */
  exitRelationalExpressionTypeRelationalLT?: (
    ctx: RelationalExpressionTypeRelationalLTContext,
  ) => void

  /**
   * Enter a parse tree produced by the `RelationalExpressionTypeRelationalLTOE`
   * labeled alternative in `CalcParser.relational_expression`.
   * @param ctx the parse tree
   */
  enterRelationalExpressionTypeRelationalLTOE?: (
    ctx: RelationalExpressionTypeRelationalLTOEContext,
  ) => void
  /**
   * Exit a parse tree produced by the `RelationalExpressionTypeRelationalLTOE`
   * labeled alternative in `CalcParser.relational_expression`.
   * @param ctx the parse tree
   */
  exitRelationalExpressionTypeRelationalLTOE?: (
    ctx: RelationalExpressionTypeRelationalLTOEContext,
  ) => void

  /**
   * Enter a parse tree produced by the `RelationalExpressionTypeRelationalGTOE`
   * labeled alternative in `CalcParser.relational_expression`.
   * @param ctx the parse tree
   */
  enterRelationalExpressionTypeRelationalGTOE?: (
    ctx: RelationalExpressionTypeRelationalGTOEContext,
  ) => void
  /**
   * Exit a parse tree produced by the `RelationalExpressionTypeRelationalGTOE`
   * labeled alternative in `CalcParser.relational_expression`.
   * @param ctx the parse tree
   */
  exitRelationalExpressionTypeRelationalGTOE?: (
    ctx: RelationalExpressionTypeRelationalGTOEContext,
  ) => void

  /**
   * Enter a parse tree produced by `CalcParser.unary_operator`.
   * @param ctx the parse tree
   */
  enterUnary_operator?: (ctx: Unary_operatorContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.unary_operator`.
   * @param ctx the parse tree
   */
  exitUnary_operator?: (ctx: Unary_operatorContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.assignment_operator`.
   * @param ctx the parse tree
   */
  enterAssignment_operator?: (ctx: Assignment_operatorContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.assignment_operator`.
   * @param ctx the parse tree
   */
  exitAssignment_operator?: (ctx: Assignment_operatorContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.end_statement_delimiter`.
   * @param ctx the parse tree
   */
  enterEnd_statement_delimiter?: (ctx: End_statement_delimiterContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.end_statement_delimiter`.
   * @param ctx the parse tree
   */
  exitEnd_statement_delimiter?: (ctx: End_statement_delimiterContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.pointer`.
   * @param ctx the parse tree
   */
  enterPointer?: (ctx: PointerContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.pointer`.
   * @param ctx the parse tree
   */
  exitPointer?: (ctx: PointerContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.type_sign_specifier`.
   * @param ctx the parse tree
   */
  enterType_sign_specifier?: (ctx: Type_sign_specifierContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.type_sign_specifier`.
   * @param ctx the parse tree
   */
  exitType_sign_specifier?: (ctx: Type_sign_specifierContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.type_specifier`.
   * @param ctx the parse tree
   */
  enterType_specifier?: (ctx: Type_specifierContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.type_specifier`.
   * @param ctx the parse tree
   */
  exitType_specifier?: (ctx: Type_specifierContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.type_qualifier`.
   * @param ctx the parse tree
   */
  enterType_qualifier?: (ctx: Type_qualifierContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.type_qualifier`.
   * @param ctx the parse tree
   */
  exitType_qualifier?: (ctx: Type_qualifierContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.identifier`.
   * @param ctx the parse tree
   */
  enterIdentifier?: (ctx: IdentifierContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.identifier`.
   * @param ctx the parse tree
   */
  exitIdentifier?: (ctx: IdentifierContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.start`.
   * @param ctx the parse tree
   */
  enterStart?: (ctx: StartContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.start`.
   * @param ctx the parse tree
   */
  exitStart?: (ctx: StartContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.program`.
   * @param ctx the parse tree
   */
  enterProgram?: (ctx: ProgramContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.program`.
   * @param ctx the parse tree
   */
  exitProgram?: (ctx: ProgramContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.function_definition`.
   * @param ctx the parse tree
   */
  enterFunction_definition?: (ctx: Function_definitionContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.function_definition`.
   * @param ctx the parse tree
   */
  exitFunction_definition?: (ctx: Function_definitionContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.parameter_type_list`.
   * @param ctx the parse tree
   */
  enterParameter_type_list?: (ctx: Parameter_type_listContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.parameter_type_list`.
   * @param ctx the parse tree
   */
  exitParameter_type_list?: (ctx: Parameter_type_listContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.parameter_list`.
   * @param ctx the parse tree
   */
  enterParameter_list?: (ctx: Parameter_listContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.parameter_list`.
   * @param ctx the parse tree
   */
  exitParameter_list?: (ctx: Parameter_listContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.parameter_declaration`.
   * @param ctx the parse tree
   */
  enterParameter_declaration?: (ctx: Parameter_declarationContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.parameter_declaration`.
   * @param ctx the parse tree
   */
  exitParameter_declaration?: (ctx: Parameter_declarationContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.struct_specifier`.
   * @param ctx the parse tree
   */
  enterStruct_specifier?: (ctx: Struct_specifierContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.struct_specifier`.
   * @param ctx the parse tree
   */
  exitStruct_specifier?: (ctx: Struct_specifierContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.union_specifier`.
   * @param ctx the parse tree
   */
  enterUnion_specifier?: (ctx: Union_specifierContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.union_specifier`.
   * @param ctx the parse tree
   */
  exitUnion_specifier?: (ctx: Union_specifierContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.struct_or_union_declaration`.
   * @param ctx the parse tree
   */
  enterStruct_or_union_declaration?: (ctx: Struct_or_union_declarationContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.struct_or_union_declaration`.
   * @param ctx the parse tree
   */
  exitStruct_or_union_declaration?: (ctx: Struct_or_union_declarationContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.specifier_qualifier`.
   * @param ctx the parse tree
   */
  enterSpecifier_qualifier?: (ctx: Specifier_qualifierContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.specifier_qualifier`.
   * @param ctx the parse tree
   */
  exitSpecifier_qualifier?: (ctx: Specifier_qualifierContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.struct_or_union_declarator_list`.
   * @param ctx the parse tree
   */
  enterStruct_or_union_declarator_list?: (ctx: Struct_or_union_declarator_listContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.struct_or_union_declarator_list`.
   * @param ctx the parse tree
   */
  exitStruct_or_union_declarator_list?: (ctx: Struct_or_union_declarator_listContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.struct_or_union_declarator`.
   * @param ctx the parse tree
   */
  enterStruct_or_union_declarator?: (ctx: Struct_or_union_declaratorContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.struct_or_union_declarator`.
   * @param ctx the parse tree
   */
  exitStruct_or_union_declarator?: (ctx: Struct_or_union_declaratorContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.statement`.
   * @param ctx the parse tree
   */
  enterStatement?: (ctx: StatementContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.statement`.
   * @param ctx the parse tree
   */
  exitStatement?: (ctx: StatementContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.labeled_statement`.
   * @param ctx the parse tree
   */
  enterLabeled_statement?: (ctx: Labeled_statementContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.labeled_statement`.
   * @param ctx the parse tree
   */
  exitLabeled_statement?: (ctx: Labeled_statementContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.declaration_statement`.
   * @param ctx the parse tree
   */
  enterDeclaration_statement?: (ctx: Declaration_statementContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.declaration_statement`.
   * @param ctx the parse tree
   */
  exitDeclaration_statement?: (ctx: Declaration_statementContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.declaration_specifiers`.
   * @param ctx the parse tree
   */
  enterDeclaration_specifiers?: (ctx: Declaration_specifiersContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.declaration_specifiers`.
   * @param ctx the parse tree
   */
  exitDeclaration_specifiers?: (ctx: Declaration_specifiersContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.init_declarator_list`.
   * @param ctx the parse tree
   */
  enterInit_declarator_list?: (ctx: Init_declarator_listContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.init_declarator_list`.
   * @param ctx the parse tree
   */
  exitInit_declarator_list?: (ctx: Init_declarator_listContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.init_declarator`.
   * @param ctx the parse tree
   */
  enterInit_declarator?: (ctx: Init_declaratorContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.init_declarator`.
   * @param ctx the parse tree
   */
  exitInit_declarator?: (ctx: Init_declaratorContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.declarator`.
   * @param ctx the parse tree
   */
  enterDeclarator?: (ctx: DeclaratorContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.declarator`.
   * @param ctx the parse tree
   */
  exitDeclarator?: (ctx: DeclaratorContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.direct_declarator`.
   * @param ctx the parse tree
   */
  enterDirect_declarator?: (ctx: Direct_declaratorContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.direct_declarator`.
   * @param ctx the parse tree
   */
  exitDirect_declarator?: (ctx: Direct_declaratorContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.initializer`.
   * @param ctx the parse tree
   */
  enterInitializer?: (ctx: InitializerContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.initializer`.
   * @param ctx the parse tree
   */
  exitInitializer?: (ctx: InitializerContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.initializer_list`.
   * @param ctx the parse tree
   */
  enterInitializer_list?: (ctx: Initializer_listContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.initializer_list`.
   * @param ctx the parse tree
   */
  exitInitializer_list?: (ctx: Initializer_listContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.expression_statement`.
   * @param ctx the parse tree
   */
  enterExpression_statement?: (ctx: Expression_statementContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.expression_statement`.
   * @param ctx the parse tree
   */
  exitExpression_statement?: (ctx: Expression_statementContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.expression`.
   * @param ctx the parse tree
   */
  enterExpression?: (ctx: ExpressionContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.expression`.
   * @param ctx the parse tree
   */
  exitExpression?: (ctx: ExpressionContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.assignment_expression`.
   * @param ctx the parse tree
   */
  enterAssignment_expression?: (ctx: Assignment_expressionContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.assignment_expression`.
   * @param ctx the parse tree
   */
  exitAssignment_expression?: (ctx: Assignment_expressionContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.constant_expression`.
   * @param ctx the parse tree
   */
  enterConstant_expression?: (ctx: Constant_expressionContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.constant_expression`.
   * @param ctx the parse tree
   */
  exitConstant_expression?: (ctx: Constant_expressionContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.conditional_expression`.
   * @param ctx the parse tree
   */
  enterConditional_expression?: (ctx: Conditional_expressionContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.conditional_expression`.
   * @param ctx the parse tree
   */
  exitConditional_expression?: (ctx: Conditional_expressionContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.logical_or_expression`.
   * @param ctx the parse tree
   */
  enterLogical_or_expression?: (ctx: Logical_or_expressionContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.logical_or_expression`.
   * @param ctx the parse tree
   */
  exitLogical_or_expression?: (ctx: Logical_or_expressionContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.logical_and_expression`.
   * @param ctx the parse tree
   */
  enterLogical_and_expression?: (ctx: Logical_and_expressionContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.logical_and_expression`.
   * @param ctx the parse tree
   */
  exitLogical_and_expression?: (ctx: Logical_and_expressionContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.inclusive_or_expression`.
   * @param ctx the parse tree
   */
  enterInclusive_or_expression?: (ctx: Inclusive_or_expressionContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.inclusive_or_expression`.
   * @param ctx the parse tree
   */
  exitInclusive_or_expression?: (ctx: Inclusive_or_expressionContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.exclusive_or_expression`.
   * @param ctx the parse tree
   */
  enterExclusive_or_expression?: (ctx: Exclusive_or_expressionContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.exclusive_or_expression`.
   * @param ctx the parse tree
   */
  exitExclusive_or_expression?: (ctx: Exclusive_or_expressionContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.and_expression`.
   * @param ctx the parse tree
   */
  enterAnd_expression?: (ctx: And_expressionContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.and_expression`.
   * @param ctx the parse tree
   */
  exitAnd_expression?: (ctx: And_expressionContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.equality_expression`.
   * @param ctx the parse tree
   */
  enterEquality_expression?: (ctx: Equality_expressionContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.equality_expression`.
   * @param ctx the parse tree
   */
  exitEquality_expression?: (ctx: Equality_expressionContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.relational_expression`.
   * @param ctx the parse tree
   */
  enterRelational_expression?: (ctx: Relational_expressionContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.relational_expression`.
   * @param ctx the parse tree
   */
  exitRelational_expression?: (ctx: Relational_expressionContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.shift_expression`.
   * @param ctx the parse tree
   */
  enterShift_expression?: (ctx: Shift_expressionContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.shift_expression`.
   * @param ctx the parse tree
   */
  exitShift_expression?: (ctx: Shift_expressionContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.additive_expression`.
   * @param ctx the parse tree
   */
  enterAdditive_expression?: (ctx: Additive_expressionContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.additive_expression`.
   * @param ctx the parse tree
   */
  exitAdditive_expression?: (ctx: Additive_expressionContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.multiplicative_expression`.
   * @param ctx the parse tree
   */
  enterMultiplicative_expression?: (ctx: Multiplicative_expressionContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.multiplicative_expression`.
   * @param ctx the parse tree
   */
  exitMultiplicative_expression?: (ctx: Multiplicative_expressionContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.cast_expression`.
   * @param ctx the parse tree
   */
  enterCast_expression?: (ctx: Cast_expressionContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.cast_expression`.
   * @param ctx the parse tree
   */
  exitCast_expression?: (ctx: Cast_expressionContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.type_name`.
   * @param ctx the parse tree
   */
  enterType_name?: (ctx: Type_nameContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.type_name`.
   * @param ctx the parse tree
   */
  exitType_name?: (ctx: Type_nameContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.abstract_declarator`.
   * @param ctx the parse tree
   */
  enterAbstract_declarator?: (ctx: Abstract_declaratorContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.abstract_declarator`.
   * @param ctx the parse tree
   */
  exitAbstract_declarator?: (ctx: Abstract_declaratorContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.direct_abstract_declarator`.
   * @param ctx the parse tree
   */
  enterDirect_abstract_declarator?: (ctx: Direct_abstract_declaratorContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.direct_abstract_declarator`.
   * @param ctx the parse tree
   */
  exitDirect_abstract_declarator?: (ctx: Direct_abstract_declaratorContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.unary_expression`.
   * @param ctx the parse tree
   */
  enterUnary_expression?: (ctx: Unary_expressionContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.unary_expression`.
   * @param ctx the parse tree
   */
  exitUnary_expression?: (ctx: Unary_expressionContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.postfix_expression`.
   * @param ctx the parse tree
   */
  enterPostfix_expression?: (ctx: Postfix_expressionContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.postfix_expression`.
   * @param ctx the parse tree
   */
  exitPostfix_expression?: (ctx: Postfix_expressionContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.primary_expression`.
   * @param ctx the parse tree
   */
  enterPrimary_expression?: (ctx: Primary_expressionContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.primary_expression`.
   * @param ctx the parse tree
   */
  exitPrimary_expression?: (ctx: Primary_expressionContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.constant`.
   * @param ctx the parse tree
   */
  enterConstant?: (ctx: ConstantContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.constant`.
   * @param ctx the parse tree
   */
  exitConstant?: (ctx: ConstantContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.integer_constant`.
   * @param ctx the parse tree
   */
  enterInteger_constant?: (ctx: Integer_constantContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.integer_constant`.
   * @param ctx the parse tree
   */
  exitInteger_constant?: (ctx: Integer_constantContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.float_constant`.
   * @param ctx the parse tree
   */
  enterFloat_constant?: (ctx: Float_constantContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.float_constant`.
   * @param ctx the parse tree
   */
  exitFloat_constant?: (ctx: Float_constantContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.character_constant`.
   * @param ctx the parse tree
   */
  enterCharacter_constant?: (ctx: Character_constantContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.character_constant`.
   * @param ctx the parse tree
   */
  exitCharacter_constant?: (ctx: Character_constantContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.compound_statement`.
   * @param ctx the parse tree
   */
  enterCompound_statement?: (ctx: Compound_statementContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.compound_statement`.
   * @param ctx the parse tree
   */
  exitCompound_statement?: (ctx: Compound_statementContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.if_statement`.
   * @param ctx the parse tree
   */
  enterIf_statement?: (ctx: If_statementContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.if_statement`.
   * @param ctx the parse tree
   */
  exitIf_statement?: (ctx: If_statementContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.switch_statement`.
   * @param ctx the parse tree
   */
  enterSwitch_statement?: (ctx: Switch_statementContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.switch_statement`.
   * @param ctx the parse tree
   */
  exitSwitch_statement?: (ctx: Switch_statementContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.switch_body`.
   * @param ctx the parse tree
   */
  enterSwitch_body?: (ctx: Switch_bodyContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.switch_body`.
   * @param ctx the parse tree
   */
  exitSwitch_body?: (ctx: Switch_bodyContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.switch_case_body`.
   * @param ctx the parse tree
   */
  enterSwitch_case_body?: (ctx: Switch_case_bodyContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.switch_case_body`.
   * @param ctx the parse tree
   */
  exitSwitch_case_body?: (ctx: Switch_case_bodyContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.switch_default_body`.
   * @param ctx the parse tree
   */
  enterSwitch_default_body?: (ctx: Switch_default_bodyContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.switch_default_body`.
   * @param ctx the parse tree
   */
  exitSwitch_default_body?: (ctx: Switch_default_bodyContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.while_statement`.
   * @param ctx the parse tree
   */
  enterWhile_statement?: (ctx: While_statementContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.while_statement`.
   * @param ctx the parse tree
   */
  exitWhile_statement?: (ctx: While_statementContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.do_statement`.
   * @param ctx the parse tree
   */
  enterDo_statement?: (ctx: Do_statementContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.do_statement`.
   * @param ctx the parse tree
   */
  exitDo_statement?: (ctx: Do_statementContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.for_statement`.
   * @param ctx the parse tree
   */
  enterFor_statement?: (ctx: For_statementContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.for_statement`.
   * @param ctx the parse tree
   */
  exitFor_statement?: (ctx: For_statementContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.for_init_declaration`.
   * @param ctx the parse tree
   */
  enterFor_init_declaration?: (ctx: For_init_declarationContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.for_init_declaration`.
   * @param ctx the parse tree
   */
  exitFor_init_declaration?: (ctx: For_init_declarationContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.goto_statement`.
   * @param ctx the parse tree
   */
  enterGoto_statement?: (ctx: Goto_statementContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.goto_statement`.
   * @param ctx the parse tree
   */
  exitGoto_statement?: (ctx: Goto_statementContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.continue_statement`.
   * @param ctx the parse tree
   */
  enterContinue_statement?: (ctx: Continue_statementContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.continue_statement`.
   * @param ctx the parse tree
   */
  exitContinue_statement?: (ctx: Continue_statementContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.break_statement`.
   * @param ctx the parse tree
   */
  enterBreak_statement?: (ctx: Break_statementContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.break_statement`.
   * @param ctx the parse tree
   */
  exitBreak_statement?: (ctx: Break_statementContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.return_statement`.
   * @param ctx the parse tree
   */
  enterReturn_statement?: (ctx: Return_statementContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.return_statement`.
   * @param ctx the parse tree
   */
  exitReturn_statement?: (ctx: Return_statementContext) => void
}
