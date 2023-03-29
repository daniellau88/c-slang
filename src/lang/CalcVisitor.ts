// Generated from ./src/lang/Calc.g4 by ANTLR 4.9.0-SNAPSHOT

import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor'

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `CalcParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface CalcVisitor<Result> extends ParseTreeVisitor<Result> {
  /**
   * Visit a parse tree produced by the `CastExpressionTypeUnary`
   * labeled alternative in `CalcParser.cast_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCastExpressionTypeUnary?: (ctx: CastExpressionTypeUnaryContext) => Result

  /**
   * Visit a parse tree produced by the `CastExpressionTypeCast`
   * labeled alternative in `CalcParser.cast_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCastExpressionTypeCast?: (ctx: CastExpressionTypeCastContext) => Result

  /**
   * Visit a parse tree produced by the `ConstantTypeInteger`
   * labeled alternative in `CalcParser.constant`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitConstantTypeInteger?: (ctx: ConstantTypeIntegerContext) => Result

  /**
   * Visit a parse tree produced by the `ConstantTypeFloat`
   * labeled alternative in `CalcParser.constant`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitConstantTypeFloat?: (ctx: ConstantTypeFloatContext) => Result

  /**
   * Visit a parse tree produced by the `ConstantTypeCharacter`
   * labeled alternative in `CalcParser.constant`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitConstantTypeCharacter?: (ctx: ConstantTypeCharacterContext) => Result

  /**
   * Visit a parse tree produced by the `DirectDeclaratorTypeIdentifier`
   * labeled alternative in `CalcParser.direct_declarator`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDirectDeclaratorTypeIdentifier?: (ctx: DirectDeclaratorTypeIdentifierContext) => Result

  /**
   * Visit a parse tree produced by the `DirectDeclaratorTypeNestedDeclarator`
   * labeled alternative in `CalcParser.direct_declarator`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDirectDeclaratorTypeNestedDeclarator?: (
    ctx: DirectDeclaratorTypeNestedDeclaratorContext,
  ) => Result

  /**
   * Visit a parse tree produced by the `DirectDeclaratorTypeRecursiveArray`
   * labeled alternative in `CalcParser.direct_declarator`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDirectDeclaratorTypeRecursiveArray?: (
    ctx: DirectDeclaratorTypeRecursiveArrayContext,
  ) => Result

  /**
   * Visit a parse tree produced by the `DirectDeclaratorTypeRecursiveParameters`
   * labeled alternative in `CalcParser.direct_declarator`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDirectDeclaratorTypeRecursiveParameters?: (
    ctx: DirectDeclaratorTypeRecursiveParametersContext,
  ) => Result

  /**
   * Visit a parse tree produced by the `DirectDeclaratorTypeRecursiveIdentifiers`
   * labeled alternative in `CalcParser.direct_declarator`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDirectDeclaratorTypeRecursiveIdentifiers?: (
    ctx: DirectDeclaratorTypeRecursiveIdentifiersContext,
  ) => Result

  /**
   * Visit a parse tree produced by the `PostfixExpressionTypePrimary`
   * labeled alternative in `CalcParser.postfix_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPostfixExpressionTypePrimary?: (ctx: PostfixExpressionTypePrimaryContext) => Result

  /**
   * Visit a parse tree produced by the `PostfixExpressionTypeArray`
   * labeled alternative in `CalcParser.postfix_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPostfixExpressionTypeArray?: (ctx: PostfixExpressionTypeArrayContext) => Result

  /**
   * Visit a parse tree produced by the `PostfixExpressionTypeFunctionCall`
   * labeled alternative in `CalcParser.postfix_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPostfixExpressionTypeFunctionCall?: (ctx: PostfixExpressionTypeFunctionCallContext) => Result

  /**
   * Visit a parse tree produced by the `PostfixExpressionTypeMember`
   * labeled alternative in `CalcParser.postfix_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPostfixExpressionTypeMember?: (ctx: PostfixExpressionTypeMemberContext) => Result

  /**
   * Visit a parse tree produced by the `PostfixExpressionTypeDerefMember`
   * labeled alternative in `CalcParser.postfix_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPostfixExpressionTypeDerefMember?: (ctx: PostfixExpressionTypeDerefMemberContext) => Result

  /**
   * Visit a parse tree produced by the `PostfixExpressionTypeIncrement`
   * labeled alternative in `CalcParser.postfix_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPostfixExpressionTypeIncrement?: (ctx: PostfixExpressionTypeIncrementContext) => Result

  /**
   * Visit a parse tree produced by the `PostfixExpressionTypeDecrement`
   * labeled alternative in `CalcParser.postfix_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPostfixExpressionTypeDecrement?: (ctx: PostfixExpressionTypeDecrementContext) => Result

  /**
   * Visit a parse tree produced by the `UnaryExpressionTypePostfix`
   * labeled alternative in `CalcParser.unary_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitUnaryExpressionTypePostfix?: (ctx: UnaryExpressionTypePostfixContext) => Result

  /**
   * Visit a parse tree produced by the `UnaryExpressionTypeIncrement`
   * labeled alternative in `CalcParser.unary_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitUnaryExpressionTypeIncrement?: (ctx: UnaryExpressionTypeIncrementContext) => Result

  /**
   * Visit a parse tree produced by the `UnaryExpressionTypeDecrement`
   * labeled alternative in `CalcParser.unary_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitUnaryExpressionTypeDecrement?: (ctx: UnaryExpressionTypeDecrementContext) => Result

  /**
   * Visit a parse tree produced by the `UnaryExpressionTypeUnaryOperator`
   * labeled alternative in `CalcParser.unary_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitUnaryExpressionTypeUnaryOperator?: (ctx: UnaryExpressionTypeUnaryOperatorContext) => Result

  /**
   * Visit a parse tree produced by the `UnaryExpressionTypeSizeOf`
   * labeled alternative in `CalcParser.unary_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitUnaryExpressionTypeSizeOf?: (ctx: UnaryExpressionTypeSizeOfContext) => Result

  /**
   * Visit a parse tree produced by the `LogicalOrExpressionTypeLogicalAnd`
   * labeled alternative in `CalcParser.logical_or_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitLogicalOrExpressionTypeLogicalAnd?: (ctx: LogicalOrExpressionTypeLogicalAndContext) => Result

  /**
   * Visit a parse tree produced by the `LogicalOrExpressionTypeLogicalOr`
   * labeled alternative in `CalcParser.logical_or_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitLogicalOrExpressionTypeLogicalOr?: (ctx: LogicalOrExpressionTypeLogicalOrContext) => Result

  /**
   * Visit a parse tree produced by the `AndExpressionTypeEquality`
   * labeled alternative in `CalcParser.and_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAndExpressionTypeEquality?: (ctx: AndExpressionTypeEqualityContext) => Result

  /**
   * Visit a parse tree produced by the `AndExpressionTypeAnd`
   * labeled alternative in `CalcParser.and_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAndExpressionTypeAnd?: (ctx: AndExpressionTypeAndContext) => Result

  /**
   * Visit a parse tree produced by the `AdditiveExpressionTypeMultiplicative`
   * labeled alternative in `CalcParser.additive_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAdditiveExpressionTypeMultiplicative?: (
    ctx: AdditiveExpressionTypeMultiplicativeContext,
  ) => Result

  /**
   * Visit a parse tree produced by the `AdditiveExpressionTypeAdditiveAdd`
   * labeled alternative in `CalcParser.additive_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAdditiveExpressionTypeAdditiveAdd?: (ctx: AdditiveExpressionTypeAdditiveAddContext) => Result

  /**
   * Visit a parse tree produced by the `AdditiveExpressionTypeAdditiveMinus`
   * labeled alternative in `CalcParser.additive_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAdditiveExpressionTypeAdditiveMinus?: (
    ctx: AdditiveExpressionTypeAdditiveMinusContext,
  ) => Result

  /**
   * Visit a parse tree produced by the `AbstractDeclaratorTypePointer`
   * labeled alternative in `CalcParser.abstract_declarator`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAbstractDeclaratorTypePointer?: (ctx: AbstractDeclaratorTypePointerContext) => Result

  /**
   * Visit a parse tree produced by the `AbstractDeclaratorTypeDirectAbstractDeclarator`
   * labeled alternative in `CalcParser.abstract_declarator`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAbstractDeclaratorTypeDirectAbstractDeclarator?: (
    ctx: AbstractDeclaratorTypeDirectAbstractDeclaratorContext,
  ) => Result

  /**
   * Visit a parse tree produced by the `DirectAbstractDeclaratorTypeNestedAbstractDeclarator`
   * labeled alternative in `CalcParser.direct_abstract_declarator`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDirectAbstractDeclaratorTypeNestedAbstractDeclarator?: (
    ctx: DirectAbstractDeclaratorTypeNestedAbstractDeclaratorContext,
  ) => Result

  /**
   * Visit a parse tree produced by the `DirectAbstractDeclaratorTypeArray`
   * labeled alternative in `CalcParser.direct_abstract_declarator`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDirectAbstractDeclaratorTypeArray?: (ctx: DirectAbstractDeclaratorTypeArrayContext) => Result

  /**
   * Visit a parse tree produced by the `DirectAbstractDeclaratorTypeParameters`
   * labeled alternative in `CalcParser.direct_abstract_declarator`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDirectAbstractDeclaratorTypeParameters?: (
    ctx: DirectAbstractDeclaratorTypeParametersContext,
  ) => Result

  /**
   * Visit a parse tree produced by the `DirectAbstractDeclaratorTypeRecursiveArray`
   * labeled alternative in `CalcParser.direct_abstract_declarator`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDirectAbstractDeclaratorTypeRecursiveArray?: (
    ctx: DirectAbstractDeclaratorTypeRecursiveArrayContext,
  ) => Result

  /**
   * Visit a parse tree produced by the `DirectAbstractDeclaratorTypeRecursiveParameters`
   * labeled alternative in `CalcParser.direct_abstract_declarator`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDirectAbstractDeclaratorTypeRecursiveParameters?: (
    ctx: DirectAbstractDeclaratorTypeRecursiveParametersContext,
  ) => Result

  /**
   * Visit a parse tree produced by the `MultiplicativeExpressionTypeCast`
   * labeled alternative in `CalcParser.multiplicative_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitMultiplicativeExpressionTypeCast?: (ctx: MultiplicativeExpressionTypeCastContext) => Result

  /**
   * Visit a parse tree produced by the `MultiplicativeExpressionTypeMultiplicativeAsterick`
   * labeled alternative in `CalcParser.multiplicative_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitMultiplicativeExpressionTypeMultiplicativeAsterick?: (
    ctx: MultiplicativeExpressionTypeMultiplicativeAsterickContext,
  ) => Result

  /**
   * Visit a parse tree produced by the `MultiplicativeExpressionTypeMultiplicativeBackslash`
   * labeled alternative in `CalcParser.multiplicative_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitMultiplicativeExpressionTypeMultiplicativeBackslash?: (
    ctx: MultiplicativeExpressionTypeMultiplicativeBackslashContext,
  ) => Result

  /**
   * Visit a parse tree produced by the `MultiplicativeExpressionTypeMultiplicativePercent`
   * labeled alternative in `CalcParser.multiplicative_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitMultiplicativeExpressionTypeMultiplicativePercent?: (
    ctx: MultiplicativeExpressionTypeMultiplicativePercentContext,
  ) => Result

  /**
   * Visit a parse tree produced by the `PrimaryExpressionTypeIdentifier`
   * labeled alternative in `CalcParser.primary_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPrimaryExpressionTypeIdentifier?: (ctx: PrimaryExpressionTypeIdentifierContext) => Result

  /**
   * Visit a parse tree produced by the `PrimaryExpressionTypeConstant`
   * labeled alternative in `CalcParser.primary_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPrimaryExpressionTypeConstant?: (ctx: PrimaryExpressionTypeConstantContext) => Result

  /**
   * Visit a parse tree produced by the `PrimaryExpressionTypeNestedExpression`
   * labeled alternative in `CalcParser.primary_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPrimaryExpressionTypeNestedExpression?: (
    ctx: PrimaryExpressionTypeNestedExpressionContext,
  ) => Result

  /**
   * Visit a parse tree produced by the `ExclusiveOrExpressionTypeAnd`
   * labeled alternative in `CalcParser.exclusive_or_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExclusiveOrExpressionTypeAnd?: (ctx: ExclusiveOrExpressionTypeAndContext) => Result

  /**
   * Visit a parse tree produced by the `ExclusiveOrExpressionTypeExclusiveOr`
   * labeled alternative in `CalcParser.exclusive_or_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExclusiveOrExpressionTypeExclusiveOr?: (
    ctx: ExclusiveOrExpressionTypeExclusiveOrContext,
  ) => Result

  /**
   * Visit a parse tree produced by the `EqualityExpressionTypeRelational`
   * labeled alternative in `CalcParser.equality_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitEqualityExpressionTypeRelational?: (ctx: EqualityExpressionTypeRelationalContext) => Result

  /**
   * Visit a parse tree produced by the `EqualityExpressionTypeEqualityEqual`
   * labeled alternative in `CalcParser.equality_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitEqualityExpressionTypeEqualityEqual?: (
    ctx: EqualityExpressionTypeEqualityEqualContext,
  ) => Result

  /**
   * Visit a parse tree produced by the `EqualityExpressionTypeEqualityNotEqual`
   * labeled alternative in `CalcParser.equality_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitEqualityExpressionTypeEqualityNotEqual?: (
    ctx: EqualityExpressionTypeEqualityNotEqualContext,
  ) => Result

  /**
   * Visit a parse tree produced by the `InitializerListTypeInitializer`
   * labeled alternative in `CalcParser.initializer_list`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitInitializerListTypeInitializer?: (ctx: InitializerListTypeInitializerContext) => Result

  /**
   * Visit a parse tree produced by the `InitializerListTypeRecursiveInitializer`
   * labeled alternative in `CalcParser.initializer_list`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitInitializerListTypeRecursiveInitializer?: (
    ctx: InitializerListTypeRecursiveInitializerContext,
  ) => Result

  /**
   * Visit a parse tree produced by the `InclusiveOrExpressionTypeExclusiveOr`
   * labeled alternative in `CalcParser.inclusive_or_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitInclusiveOrExpressionTypeExclusiveOr?: (
    ctx: InclusiveOrExpressionTypeExclusiveOrContext,
  ) => Result

  /**
   * Visit a parse tree produced by the `InclusiveOrExpressionTypeInclusiveOr`
   * labeled alternative in `CalcParser.inclusive_or_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitInclusiveOrExpressionTypeInclusiveOr?: (
    ctx: InclusiveOrExpressionTypeInclusiveOrContext,
  ) => Result

  /**
   * Visit a parse tree produced by the `ConditionalExpressionTypeLogicalOr`
   * labeled alternative in `CalcParser.conditional_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitConditionalExpressionTypeLogicalOr?: (
    ctx: ConditionalExpressionTypeLogicalOrContext,
  ) => Result

  /**
   * Visit a parse tree produced by the `ConditionalExpressionTypeConditional`
   * labeled alternative in `CalcParser.conditional_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitConditionalExpressionTypeConditional?: (
    ctx: ConditionalExpressionTypeConditionalContext,
  ) => Result

  /**
   * Visit a parse tree produced by the `StatementTypeLabeled`
   * labeled alternative in `CalcParser.statement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStatementTypeLabeled?: (ctx: StatementTypeLabeledContext) => Result

  /**
   * Visit a parse tree produced by the `StatementTypeDeclaration`
   * labeled alternative in `CalcParser.statement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStatementTypeDeclaration?: (ctx: StatementTypeDeclarationContext) => Result

  /**
   * Visit a parse tree produced by the `StatementTypeExpression`
   * labeled alternative in `CalcParser.statement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStatementTypeExpression?: (ctx: StatementTypeExpressionContext) => Result

  /**
   * Visit a parse tree produced by the `StatementTypeCompound`
   * labeled alternative in `CalcParser.statement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStatementTypeCompound?: (ctx: StatementTypeCompoundContext) => Result

  /**
   * Visit a parse tree produced by the `StatementTypeIf`
   * labeled alternative in `CalcParser.statement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStatementTypeIf?: (ctx: StatementTypeIfContext) => Result

  /**
   * Visit a parse tree produced by the `StatementTypeSwitch`
   * labeled alternative in `CalcParser.statement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStatementTypeSwitch?: (ctx: StatementTypeSwitchContext) => Result

  /**
   * Visit a parse tree produced by the `StatementTypeWhile`
   * labeled alternative in `CalcParser.statement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStatementTypeWhile?: (ctx: StatementTypeWhileContext) => Result

  /**
   * Visit a parse tree produced by the `StatementTypeDo`
   * labeled alternative in `CalcParser.statement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStatementTypeDo?: (ctx: StatementTypeDoContext) => Result

  /**
   * Visit a parse tree produced by the `StatementTypeFor`
   * labeled alternative in `CalcParser.statement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStatementTypeFor?: (ctx: StatementTypeForContext) => Result

  /**
   * Visit a parse tree produced by the `StatementTypeGoto`
   * labeled alternative in `CalcParser.statement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStatementTypeGoto?: (ctx: StatementTypeGotoContext) => Result

  /**
   * Visit a parse tree produced by the `StatementTypeContinue`
   * labeled alternative in `CalcParser.statement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStatementTypeContinue?: (ctx: StatementTypeContinueContext) => Result

  /**
   * Visit a parse tree produced by the `StatementTypeBreak`
   * labeled alternative in `CalcParser.statement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStatementTypeBreak?: (ctx: StatementTypeBreakContext) => Result

  /**
   * Visit a parse tree produced by the `StatementTypeReturn`
   * labeled alternative in `CalcParser.statement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStatementTypeReturn?: (ctx: StatementTypeReturnContext) => Result

  /**
   * Visit a parse tree produced by the `ShfitExpressionTypeAdditive`
   * labeled alternative in `CalcParser.shift_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitShfitExpressionTypeAdditive?: (ctx: ShfitExpressionTypeAdditiveContext) => Result

  /**
   * Visit a parse tree produced by the `ShfitExpressionTypeShiftLeft`
   * labeled alternative in `CalcParser.shift_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitShfitExpressionTypeShiftLeft?: (ctx: ShfitExpressionTypeShiftLeftContext) => Result

  /**
   * Visit a parse tree produced by the `ShfitExpressionTypeShiftRight`
   * labeled alternative in `CalcParser.shift_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitShfitExpressionTypeShiftRight?: (ctx: ShfitExpressionTypeShiftRightContext) => Result

  /**
   * Visit a parse tree produced by the `ExpressionTypeAssignment`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExpressionTypeAssignment?: (ctx: ExpressionTypeAssignmentContext) => Result

  /**
   * Visit a parse tree produced by the `ExpressionTypeExpression`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExpressionTypeExpression?: (ctx: ExpressionTypeExpressionContext) => Result

  /**
   * Visit a parse tree produced by the `ParameterDeclarationTypeDeclarator`
   * labeled alternative in `CalcParser.parameter_declaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitParameterDeclarationTypeDeclarator?: (
    ctx: ParameterDeclarationTypeDeclaratorContext,
  ) => Result

  /**
   * Visit a parse tree produced by the `ParameterDeclarationTypeAbstractDeclarator`
   * labeled alternative in `CalcParser.parameter_declaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitParameterDeclarationTypeAbstractDeclarator?: (
    ctx: ParameterDeclarationTypeAbstractDeclaratorContext,
  ) => Result

  /**
   * Visit a parse tree produced by the `ParameterDeclarationTypeNormal`
   * labeled alternative in `CalcParser.parameter_declaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitParameterDeclarationTypeNormal?: (ctx: ParameterDeclarationTypeNormalContext) => Result

  /**
   * Visit a parse tree produced by the `AssignmentExpressionTypeConditional`
   * labeled alternative in `CalcParser.assignment_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAssignmentExpressionTypeConditional?: (
    ctx: AssignmentExpressionTypeConditionalContext,
  ) => Result

  /**
   * Visit a parse tree produced by the `AssignmentExpressionTypeAssignment`
   * labeled alternative in `CalcParser.assignment_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAssignmentExpressionTypeAssignment?: (
    ctx: AssignmentExpressionTypeAssignmentContext,
  ) => Result

  /**
   * Visit a parse tree produced by the `InitializerTypeConditionalExpression`
   * labeled alternative in `CalcParser.initializer`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitInitializerTypeConditionalExpression?: (
    ctx: InitializerTypeConditionalExpressionContext,
  ) => Result

  /**
   * Visit a parse tree produced by the `InitializerTypeArray`
   * labeled alternative in `CalcParser.initializer`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitInitializerTypeArray?: (ctx: InitializerTypeArrayContext) => Result

  /**
   * Visit a parse tree produced by the `LogicalAndExpressionTypeInclusiveOr`
   * labeled alternative in `CalcParser.logical_and_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitLogicalAndExpressionTypeInclusiveOr?: (
    ctx: LogicalAndExpressionTypeInclusiveOrContext,
  ) => Result

  /**
   * Visit a parse tree produced by the `LogicalAndExpressionTypeLogicalAnd`
   * labeled alternative in `CalcParser.logical_and_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitLogicalAndExpressionTypeLogicalAnd?: (
    ctx: LogicalAndExpressionTypeLogicalAndContext,
  ) => Result

  /**
   * Visit a parse tree produced by the `RelationalExpressionTypeShift`
   * labeled alternative in `CalcParser.relational_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitRelationalExpressionTypeShift?: (ctx: RelationalExpressionTypeShiftContext) => Result

  /**
   * Visit a parse tree produced by the `RelationalExpressionTypeRelationalGT`
   * labeled alternative in `CalcParser.relational_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitRelationalExpressionTypeRelationalGT?: (
    ctx: RelationalExpressionTypeRelationalGTContext,
  ) => Result

  /**
   * Visit a parse tree produced by the `RelationalExpressionTypeRelationalLT`
   * labeled alternative in `CalcParser.relational_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitRelationalExpressionTypeRelationalLT?: (
    ctx: RelationalExpressionTypeRelationalLTContext,
  ) => Result

  /**
   * Visit a parse tree produced by the `RelationalExpressionTypeRelationalLTOE`
   * labeled alternative in `CalcParser.relational_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitRelationalExpressionTypeRelationalLTOE?: (
    ctx: RelationalExpressionTypeRelationalLTOEContext,
  ) => Result

  /**
   * Visit a parse tree produced by the `RelationalExpressionTypeRelationalGTOE`
   * labeled alternative in `CalcParser.relational_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitRelationalExpressionTypeRelationalGTOE?: (
    ctx: RelationalExpressionTypeRelationalGTOEContext,
  ) => Result

  /**
   * Visit a parse tree produced by `CalcParser.unary_operator`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitUnary_operator?: (ctx: Unary_operatorContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.assignment_operator`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAssignment_operator?: (ctx: Assignment_operatorContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.end_statement_delimiter`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitEnd_statement_delimiter?: (ctx: End_statement_delimiterContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.pointer`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPointer?: (ctx: PointerContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.type_sign_specifier`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitType_sign_specifier?: (ctx: Type_sign_specifierContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.type_specifier`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitType_specifier?: (ctx: Type_specifierContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.type_qualifier`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitType_qualifier?: (ctx: Type_qualifierContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.identifier`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitIdentifier?: (ctx: IdentifierContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.start`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStart?: (ctx: StartContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.program`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitProgram?: (ctx: ProgramContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.function_definition`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFunction_definition?: (ctx: Function_definitionContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.parameter_type_list`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitParameter_type_list?: (ctx: Parameter_type_listContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.parameter_list`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitParameter_list?: (ctx: Parameter_listContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.parameter_declaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitParameter_declaration?: (ctx: Parameter_declarationContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.struct_specifier`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStruct_specifier?: (ctx: Struct_specifierContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.union_specifier`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitUnion_specifier?: (ctx: Union_specifierContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.struct_or_union_declaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStruct_or_union_declaration?: (ctx: Struct_or_union_declarationContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.specifier_qualifier`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSpecifier_qualifier?: (ctx: Specifier_qualifierContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.struct_or_union_declarator_list`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStruct_or_union_declarator_list?: (ctx: Struct_or_union_declarator_listContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.struct_or_union_declarator`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStruct_or_union_declarator?: (ctx: Struct_or_union_declaratorContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.statement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStatement?: (ctx: StatementContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.labeled_statement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitLabeled_statement?: (ctx: Labeled_statementContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.declaration_statement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDeclaration_statement?: (ctx: Declaration_statementContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.declaration_specifiers`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDeclaration_specifiers?: (ctx: Declaration_specifiersContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.init_declarator_list`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitInit_declarator_list?: (ctx: Init_declarator_listContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.init_declarator`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitInit_declarator?: (ctx: Init_declaratorContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.declarator`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDeclarator?: (ctx: DeclaratorContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.direct_declarator`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDirect_declarator?: (ctx: Direct_declaratorContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.initializer`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitInitializer?: (ctx: InitializerContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.initializer_list`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitInitializer_list?: (ctx: Initializer_listContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.expression_statement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExpression_statement?: (ctx: Expression_statementContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExpression?: (ctx: ExpressionContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.assignment_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAssignment_expression?: (ctx: Assignment_expressionContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.constant_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitConstant_expression?: (ctx: Constant_expressionContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.conditional_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitConditional_expression?: (ctx: Conditional_expressionContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.logical_or_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitLogical_or_expression?: (ctx: Logical_or_expressionContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.logical_and_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitLogical_and_expression?: (ctx: Logical_and_expressionContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.inclusive_or_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitInclusive_or_expression?: (ctx: Inclusive_or_expressionContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.exclusive_or_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExclusive_or_expression?: (ctx: Exclusive_or_expressionContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.and_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAnd_expression?: (ctx: And_expressionContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.equality_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitEquality_expression?: (ctx: Equality_expressionContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.relational_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitRelational_expression?: (ctx: Relational_expressionContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.shift_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitShift_expression?: (ctx: Shift_expressionContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.additive_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAdditive_expression?: (ctx: Additive_expressionContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.multiplicative_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitMultiplicative_expression?: (ctx: Multiplicative_expressionContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.cast_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCast_expression?: (ctx: Cast_expressionContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.type_name`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitType_name?: (ctx: Type_nameContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.abstract_declarator`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAbstract_declarator?: (ctx: Abstract_declaratorContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.direct_abstract_declarator`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDirect_abstract_declarator?: (ctx: Direct_abstract_declaratorContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.unary_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitUnary_expression?: (ctx: Unary_expressionContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.postfix_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPostfix_expression?: (ctx: Postfix_expressionContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.primary_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPrimary_expression?: (ctx: Primary_expressionContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.constant`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitConstant?: (ctx: ConstantContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.integer_constant`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitInteger_constant?: (ctx: Integer_constantContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.float_constant`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFloat_constant?: (ctx: Float_constantContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.character_constant`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCharacter_constant?: (ctx: Character_constantContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.compound_statement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCompound_statement?: (ctx: Compound_statementContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.if_statement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitIf_statement?: (ctx: If_statementContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.switch_statement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSwitch_statement?: (ctx: Switch_statementContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.switch_body`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSwitch_body?: (ctx: Switch_bodyContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.switch_case_body`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSwitch_case_body?: (ctx: Switch_case_bodyContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.switch_default_body`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSwitch_default_body?: (ctx: Switch_default_bodyContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.while_statement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitWhile_statement?: (ctx: While_statementContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.do_statement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDo_statement?: (ctx: Do_statementContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.for_statement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFor_statement?: (ctx: For_statementContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.for_init_declaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFor_init_declaration?: (ctx: For_init_declarationContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.goto_statement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitGoto_statement?: (ctx: Goto_statementContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.continue_statement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitContinue_statement?: (ctx: Continue_statementContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.break_statement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitBreak_statement?: (ctx: Break_statementContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.return_statement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitReturn_statement?: (ctx: Return_statementContext) => Result
}
