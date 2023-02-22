// Generated from ./src/lang/Calc.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { CastNormalExpressionContext } from "./CalcParser";
import { CastTypeExpressionContext } from "./CalcParser";
import { IntegerConstantContext } from "./CalcParser";
import { FloatConstantContext } from "./CalcParser";
import { CharacterConstantContext } from "./CalcParser";
import { PostfixUnaryExpressionContext } from "./CalcParser";
import { IncrementUnaryExpressionContext } from "./CalcParser";
import { DecrementUnaryExpressionContext } from "./CalcParser";
import { CastUnaryExpressionContext } from "./CalcParser";
import { SizeOfUnaryExpressionContext } from "./CalcParser";
import { AdditiveNormalExpressionContext } from "./CalcParser";
import { AdditiveAdditionExpressionContext } from "./CalcParser";
import { AdditiveSubtractionExpressionContext } from "./CalcParser";
import { MultiplicativeNormalExpressionContext } from "./CalcParser";
import { MultiplicativeMultiplyExpressionContext } from "./CalcParser";
import { MultiplicativeDivideExpressionContext } from "./CalcParser";
import { MultiplicativeModuloExpressionContext } from "./CalcParser";
import { Unary_operatorContext } from "./CalcParser";
import { Assignment_operatorContext } from "./CalcParser";
import { End_statement_delimiterContext } from "./CalcParser";
import { PointerContext } from "./CalcParser";
import { Type_sign_specifierContext } from "./CalcParser";
import { Type_specifierContext } from "./CalcParser";
import { Type_qualifierContext } from "./CalcParser";
import { IdentifierContext } from "./CalcParser";
import { StartContext } from "./CalcParser";
import { ProgramContext } from "./CalcParser";
import { Function_definitionContext } from "./CalcParser";
import { Return_typeContext } from "./CalcParser";
import { Parameter_type_listContext } from "./CalcParser";
import { Parameter_listContext } from "./CalcParser";
import { Parameter_declarationContext } from "./CalcParser";
import { Array_declarationContext } from "./CalcParser";
import { Struct_specifierContext } from "./CalcParser";
import { Union_specifierContext } from "./CalcParser";
import { Struct_or_union_declarationContext } from "./CalcParser";
import { Specifier_qualifierContext } from "./CalcParser";
import { Struct_or_union_declarator_listContext } from "./CalcParser";
import { Struct_or_union_declaratorContext } from "./CalcParser";
import { StatementContext } from "./CalcParser";
import { Labeled_statementContext } from "./CalcParser";
import { Declaration_statementContext } from "./CalcParser";
import { Declaration_specifiersContext } from "./CalcParser";
import { Init_declarator_listContext } from "./CalcParser";
import { Init_declaratorContext } from "./CalcParser";
import { DeclaratorContext } from "./CalcParser";
import { Direct_declaratorContext } from "./CalcParser";
import { InitializerContext } from "./CalcParser";
import { Initializer_listContext } from "./CalcParser";
import { Expression_statementContext } from "./CalcParser";
import { ExpressionContext } from "./CalcParser";
import { Assignment_expressionContext } from "./CalcParser";
import { Constant_expressionContext } from "./CalcParser";
import { Conditional_expressionContext } from "./CalcParser";
import { Logical_or_expressionContext } from "./CalcParser";
import { Logical_and_expressionContext } from "./CalcParser";
import { Inclusive_or_expressionContext } from "./CalcParser";
import { Exclusive_or_expressionContext } from "./CalcParser";
import { And_expressionContext } from "./CalcParser";
import { Equality_expressionContext } from "./CalcParser";
import { Relational_expressionContext } from "./CalcParser";
import { Shift_expressionContext } from "./CalcParser";
import { Additive_expressionContext } from "./CalcParser";
import { Multiplicative_expressionContext } from "./CalcParser";
import { Cast_expressionContext } from "./CalcParser";
import { Type_nameContext } from "./CalcParser";
import { Abstract_declaratorContext } from "./CalcParser";
import { Direct_abstract_declaratorContext } from "./CalcParser";
import { Unary_expressionContext } from "./CalcParser";
import { Postfix_expressionContext } from "./CalcParser";
import { Primary_expressionContext } from "./CalcParser";
import { ConstantContext } from "./CalcParser";
import { Integer_constantContext } from "./CalcParser";
import { Float_constantContext } from "./CalcParser";
import { Character_constantContext } from "./CalcParser";
import { Compound_statementContext } from "./CalcParser";
import { If_statementContext } from "./CalcParser";
import { Switch_statementContext } from "./CalcParser";
import { Switch_bodyContext } from "./CalcParser";
import { Switch_case_bodyContext } from "./CalcParser";
import { Switch_default_bodyContext } from "./CalcParser";
import { While_statementContext } from "./CalcParser";
import { Do_statementContext } from "./CalcParser";
import { For_statementContext } from "./CalcParser";
import { Goto_statementContext } from "./CalcParser";
import { Continue_statementContext } from "./CalcParser";
import { Break_statementContext } from "./CalcParser";
import { Return_statementContext } from "./CalcParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `CalcParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface CalcVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `CastNormalExpression`
	 * labeled alternative in `CalcParser.cast_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCastNormalExpression?: (ctx: CastNormalExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `CastTypeExpression`
	 * labeled alternative in `CalcParser.cast_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCastTypeExpression?: (ctx: CastTypeExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `IntegerConstant`
	 * labeled alternative in `CalcParser.constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntegerConstant?: (ctx: IntegerConstantContext) => Result;

	/**
	 * Visit a parse tree produced by the `FloatConstant`
	 * labeled alternative in `CalcParser.constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFloatConstant?: (ctx: FloatConstantContext) => Result;

	/**
	 * Visit a parse tree produced by the `CharacterConstant`
	 * labeled alternative in `CalcParser.constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCharacterConstant?: (ctx: CharacterConstantContext) => Result;

	/**
	 * Visit a parse tree produced by the `PostfixUnaryExpression`
	 * labeled alternative in `CalcParser.unary_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostfixUnaryExpression?: (ctx: PostfixUnaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `IncrementUnaryExpression`
	 * labeled alternative in `CalcParser.unary_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIncrementUnaryExpression?: (ctx: IncrementUnaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `DecrementUnaryExpression`
	 * labeled alternative in `CalcParser.unary_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDecrementUnaryExpression?: (ctx: DecrementUnaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `CastUnaryExpression`
	 * labeled alternative in `CalcParser.unary_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCastUnaryExpression?: (ctx: CastUnaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `SizeOfUnaryExpression`
	 * labeled alternative in `CalcParser.unary_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSizeOfUnaryExpression?: (ctx: SizeOfUnaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `AdditiveNormalExpression`
	 * labeled alternative in `CalcParser.additive_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditiveNormalExpression?: (ctx: AdditiveNormalExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `AdditiveAdditionExpression`
	 * labeled alternative in `CalcParser.additive_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditiveAdditionExpression?: (ctx: AdditiveAdditionExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `AdditiveSubtractionExpression`
	 * labeled alternative in `CalcParser.additive_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditiveSubtractionExpression?: (ctx: AdditiveSubtractionExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `MultiplicativeNormalExpression`
	 * labeled alternative in `CalcParser.multiplicative_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicativeNormalExpression?: (ctx: MultiplicativeNormalExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `MultiplicativeMultiplyExpression`
	 * labeled alternative in `CalcParser.multiplicative_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicativeMultiplyExpression?: (ctx: MultiplicativeMultiplyExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `MultiplicativeDivideExpression`
	 * labeled alternative in `CalcParser.multiplicative_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicativeDivideExpression?: (ctx: MultiplicativeDivideExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `MultiplicativeModuloExpression`
	 * labeled alternative in `CalcParser.multiplicative_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicativeModuloExpression?: (ctx: MultiplicativeModuloExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.unary_operator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnary_operator?: (ctx: Unary_operatorContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.assignment_operator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment_operator?: (ctx: Assignment_operatorContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.end_statement_delimiter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnd_statement_delimiter?: (ctx: End_statement_delimiterContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.pointer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPointer?: (ctx: PointerContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.type_sign_specifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_sign_specifier?: (ctx: Type_sign_specifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.type_specifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_specifier?: (ctx: Type_specifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.type_qualifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_qualifier?: (ctx: Type_qualifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStart?: (ctx: StartContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.function_definition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_definition?: (ctx: Function_definitionContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.return_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturn_type?: (ctx: Return_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.parameter_type_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter_type_list?: (ctx: Parameter_type_listContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.parameter_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter_list?: (ctx: Parameter_listContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.parameter_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter_declaration?: (ctx: Parameter_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.array_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArray_declaration?: (ctx: Array_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.struct_specifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStruct_specifier?: (ctx: Struct_specifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.union_specifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnion_specifier?: (ctx: Union_specifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.struct_or_union_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStruct_or_union_declaration?: (ctx: Struct_or_union_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.specifier_qualifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecifier_qualifier?: (ctx: Specifier_qualifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.struct_or_union_declarator_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStruct_or_union_declarator_list?: (ctx: Struct_or_union_declarator_listContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.struct_or_union_declarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStruct_or_union_declarator?: (ctx: Struct_or_union_declaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.labeled_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabeled_statement?: (ctx: Labeled_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.declaration_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration_statement?: (ctx: Declaration_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.declaration_specifiers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration_specifiers?: (ctx: Declaration_specifiersContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.init_declarator_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInit_declarator_list?: (ctx: Init_declarator_listContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.init_declarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInit_declarator?: (ctx: Init_declaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.declarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclarator?: (ctx: DeclaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.direct_declarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDirect_declarator?: (ctx: Direct_declaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.initializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitializer?: (ctx: InitializerContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.initializer_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitializer_list?: (ctx: Initializer_listContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.expression_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression_statement?: (ctx: Expression_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.assignment_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment_expression?: (ctx: Assignment_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.constant_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstant_expression?: (ctx: Constant_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.conditional_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditional_expression?: (ctx: Conditional_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.logical_or_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogical_or_expression?: (ctx: Logical_or_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.logical_and_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogical_and_expression?: (ctx: Logical_and_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.inclusive_or_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInclusive_or_expression?: (ctx: Inclusive_or_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.exclusive_or_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExclusive_or_expression?: (ctx: Exclusive_or_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.and_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnd_expression?: (ctx: And_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.equality_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEquality_expression?: (ctx: Equality_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.relational_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelational_expression?: (ctx: Relational_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.shift_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShift_expression?: (ctx: Shift_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.additive_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditive_expression?: (ctx: Additive_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.multiplicative_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicative_expression?: (ctx: Multiplicative_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.cast_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCast_expression?: (ctx: Cast_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.type_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_name?: (ctx: Type_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.abstract_declarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAbstract_declarator?: (ctx: Abstract_declaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.direct_abstract_declarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDirect_abstract_declarator?: (ctx: Direct_abstract_declaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.unary_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnary_expression?: (ctx: Unary_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.postfix_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostfix_expression?: (ctx: Postfix_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.primary_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimary_expression?: (ctx: Primary_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstant?: (ctx: ConstantContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.integer_constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInteger_constant?: (ctx: Integer_constantContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.float_constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFloat_constant?: (ctx: Float_constantContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.character_constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCharacter_constant?: (ctx: Character_constantContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.compound_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompound_statement?: (ctx: Compound_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.if_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIf_statement?: (ctx: If_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.switch_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitch_statement?: (ctx: Switch_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.switch_body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitch_body?: (ctx: Switch_bodyContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.switch_case_body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitch_case_body?: (ctx: Switch_case_bodyContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.switch_default_body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitch_default_body?: (ctx: Switch_default_bodyContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.while_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhile_statement?: (ctx: While_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.do_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDo_statement?: (ctx: Do_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.for_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFor_statement?: (ctx: For_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.goto_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGoto_statement?: (ctx: Goto_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.continue_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContinue_statement?: (ctx: Continue_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.break_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBreak_statement?: (ctx: Break_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.return_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturn_statement?: (ctx: Return_statementContext) => Result;
}

