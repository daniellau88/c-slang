// Generated from ./src/lang/Calc.g4 by ANTLR 4.9.0-SNAPSHOT

import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor'

import { Unary_operatorContext } from './CalcParser'
import { Assignment_operatorContext } from './CalcParser'
import { End_statement_delimiterContext } from './CalcParser'
import { Type_specifierContext } from './CalcParser'
import { Type_qualifierContext } from './CalcParser'
import { StartContext } from './CalcParser'
import { StatementContext } from './CalcParser'
import { Declaration_statementContext } from './CalcParser'
import { Declaration_specifierContext } from './CalcParser'
import { Init_declarator_listContext } from './CalcParser'
import { Init_declaratorContext } from './CalcParser'
import { DeclaratorContext } from './CalcParser'
import { PointerContext } from './CalcParser'
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
import { Specifier_qualifierContext } from './CalcParser'
import { Unary_expressionContext } from './CalcParser'
import { Postfix_expressionContext } from './CalcParser'
import { Primary_expressionContext } from './CalcParser'
import { ConstantContext } from './CalcParser'
import { Integer_constantContext } from './CalcParser'
import { Float_constantContext } from './CalcParser'
import { Character_constantContext } from './CalcParser'
import { Compound_statementContext } from './CalcParser'

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `CalcParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface CalcVisitor<Result> extends ParseTreeVisitor<Result> {
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
   * Visit a parse tree produced by `CalcParser.start`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStart?: (ctx: StartContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.statement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStatement?: (ctx: StatementContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.declaration_statement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDeclaration_statement?: (ctx: Declaration_statementContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.declaration_specifier`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDeclaration_specifier?: (ctx: Declaration_specifierContext) => Result

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
   * Visit a parse tree produced by `CalcParser.pointer`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPointer?: (ctx: PointerContext) => Result

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
   * Visit a parse tree produced by `CalcParser.specifier_qualifier`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSpecifier_qualifier?: (ctx: Specifier_qualifierContext) => Result

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
}
