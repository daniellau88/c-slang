// Generated from ./src/lang/Calc.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
import { StatementContext } from "./CalcParser";
import { Labeled_statementContext } from "./CalcParser";
import { Declaration_statementContext } from "./CalcParser";
import { Declaration_specifiersContext } from "./CalcParser";
import { Init_declarator_listContext } from "./CalcParser";
import { Init_declaratorContext } from "./CalcParser";
import { DeclaratorContext } from "./CalcParser";
import { PointerContext } from "./CalcParser";
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
import { Selection_statementContext } from "./CalcParser";
import { Iteration_statementContext } from "./CalcParser";
import { Jump_statementContext } from "./CalcParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `CalcParser`.
 */
export interface CalcListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `CastNormalExpression`
	 * labeled alternative in `CalcParser.cast_expression`.
	 * @param ctx the parse tree
	 */
	enterCastNormalExpression?: (ctx: CastNormalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `CastNormalExpression`
	 * labeled alternative in `CalcParser.cast_expression`.
	 * @param ctx the parse tree
	 */
	exitCastNormalExpression?: (ctx: CastNormalExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `CastTypeExpression`
	 * labeled alternative in `CalcParser.cast_expression`.
	 * @param ctx the parse tree
	 */
	enterCastTypeExpression?: (ctx: CastTypeExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `CastTypeExpression`
	 * labeled alternative in `CalcParser.cast_expression`.
	 * @param ctx the parse tree
	 */
	exitCastTypeExpression?: (ctx: CastTypeExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `IntegerConstant`
	 * labeled alternative in `CalcParser.constant`.
	 * @param ctx the parse tree
	 */
	enterIntegerConstant?: (ctx: IntegerConstantContext) => void;
	/**
	 * Exit a parse tree produced by the `IntegerConstant`
	 * labeled alternative in `CalcParser.constant`.
	 * @param ctx the parse tree
	 */
	exitIntegerConstant?: (ctx: IntegerConstantContext) => void;

	/**
	 * Enter a parse tree produced by the `FloatConstant`
	 * labeled alternative in `CalcParser.constant`.
	 * @param ctx the parse tree
	 */
	enterFloatConstant?: (ctx: FloatConstantContext) => void;
	/**
	 * Exit a parse tree produced by the `FloatConstant`
	 * labeled alternative in `CalcParser.constant`.
	 * @param ctx the parse tree
	 */
	exitFloatConstant?: (ctx: FloatConstantContext) => void;

	/**
	 * Enter a parse tree produced by the `CharacterConstant`
	 * labeled alternative in `CalcParser.constant`.
	 * @param ctx the parse tree
	 */
	enterCharacterConstant?: (ctx: CharacterConstantContext) => void;
	/**
	 * Exit a parse tree produced by the `CharacterConstant`
	 * labeled alternative in `CalcParser.constant`.
	 * @param ctx the parse tree
	 */
	exitCharacterConstant?: (ctx: CharacterConstantContext) => void;

	/**
	 * Enter a parse tree produced by the `PostfixUnaryExpression`
	 * labeled alternative in `CalcParser.unary_expression`.
	 * @param ctx the parse tree
	 */
	enterPostfixUnaryExpression?: (ctx: PostfixUnaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `PostfixUnaryExpression`
	 * labeled alternative in `CalcParser.unary_expression`.
	 * @param ctx the parse tree
	 */
	exitPostfixUnaryExpression?: (ctx: PostfixUnaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `IncrementUnaryExpression`
	 * labeled alternative in `CalcParser.unary_expression`.
	 * @param ctx the parse tree
	 */
	enterIncrementUnaryExpression?: (ctx: IncrementUnaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `IncrementUnaryExpression`
	 * labeled alternative in `CalcParser.unary_expression`.
	 * @param ctx the parse tree
	 */
	exitIncrementUnaryExpression?: (ctx: IncrementUnaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `DecrementUnaryExpression`
	 * labeled alternative in `CalcParser.unary_expression`.
	 * @param ctx the parse tree
	 */
	enterDecrementUnaryExpression?: (ctx: DecrementUnaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `DecrementUnaryExpression`
	 * labeled alternative in `CalcParser.unary_expression`.
	 * @param ctx the parse tree
	 */
	exitDecrementUnaryExpression?: (ctx: DecrementUnaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `CastUnaryExpression`
	 * labeled alternative in `CalcParser.unary_expression`.
	 * @param ctx the parse tree
	 */
	enterCastUnaryExpression?: (ctx: CastUnaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `CastUnaryExpression`
	 * labeled alternative in `CalcParser.unary_expression`.
	 * @param ctx the parse tree
	 */
	exitCastUnaryExpression?: (ctx: CastUnaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `SizeOfUnaryExpression`
	 * labeled alternative in `CalcParser.unary_expression`.
	 * @param ctx the parse tree
	 */
	enterSizeOfUnaryExpression?: (ctx: SizeOfUnaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `SizeOfUnaryExpression`
	 * labeled alternative in `CalcParser.unary_expression`.
	 * @param ctx the parse tree
	 */
	exitSizeOfUnaryExpression?: (ctx: SizeOfUnaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `AdditiveNormalExpression`
	 * labeled alternative in `CalcParser.additive_expression`.
	 * @param ctx the parse tree
	 */
	enterAdditiveNormalExpression?: (ctx: AdditiveNormalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `AdditiveNormalExpression`
	 * labeled alternative in `CalcParser.additive_expression`.
	 * @param ctx the parse tree
	 */
	exitAdditiveNormalExpression?: (ctx: AdditiveNormalExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `AdditiveAdditionExpression`
	 * labeled alternative in `CalcParser.additive_expression`.
	 * @param ctx the parse tree
	 */
	enterAdditiveAdditionExpression?: (ctx: AdditiveAdditionExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `AdditiveAdditionExpression`
	 * labeled alternative in `CalcParser.additive_expression`.
	 * @param ctx the parse tree
	 */
	exitAdditiveAdditionExpression?: (ctx: AdditiveAdditionExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `AdditiveSubtractionExpression`
	 * labeled alternative in `CalcParser.additive_expression`.
	 * @param ctx the parse tree
	 */
	enterAdditiveSubtractionExpression?: (ctx: AdditiveSubtractionExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `AdditiveSubtractionExpression`
	 * labeled alternative in `CalcParser.additive_expression`.
	 * @param ctx the parse tree
	 */
	exitAdditiveSubtractionExpression?: (ctx: AdditiveSubtractionExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `MultiplicativeNormalExpression`
	 * labeled alternative in `CalcParser.multiplicative_expression`.
	 * @param ctx the parse tree
	 */
	enterMultiplicativeNormalExpression?: (ctx: MultiplicativeNormalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `MultiplicativeNormalExpression`
	 * labeled alternative in `CalcParser.multiplicative_expression`.
	 * @param ctx the parse tree
	 */
	exitMultiplicativeNormalExpression?: (ctx: MultiplicativeNormalExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `MultiplicativeMultiplyExpression`
	 * labeled alternative in `CalcParser.multiplicative_expression`.
	 * @param ctx the parse tree
	 */
	enterMultiplicativeMultiplyExpression?: (ctx: MultiplicativeMultiplyExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `MultiplicativeMultiplyExpression`
	 * labeled alternative in `CalcParser.multiplicative_expression`.
	 * @param ctx the parse tree
	 */
	exitMultiplicativeMultiplyExpression?: (ctx: MultiplicativeMultiplyExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `MultiplicativeDivideExpression`
	 * labeled alternative in `CalcParser.multiplicative_expression`.
	 * @param ctx the parse tree
	 */
	enterMultiplicativeDivideExpression?: (ctx: MultiplicativeDivideExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `MultiplicativeDivideExpression`
	 * labeled alternative in `CalcParser.multiplicative_expression`.
	 * @param ctx the parse tree
	 */
	exitMultiplicativeDivideExpression?: (ctx: MultiplicativeDivideExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `MultiplicativeModuloExpression`
	 * labeled alternative in `CalcParser.multiplicative_expression`.
	 * @param ctx the parse tree
	 */
	enterMultiplicativeModuloExpression?: (ctx: MultiplicativeModuloExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `MultiplicativeModuloExpression`
	 * labeled alternative in `CalcParser.multiplicative_expression`.
	 * @param ctx the parse tree
	 */
	exitMultiplicativeModuloExpression?: (ctx: MultiplicativeModuloExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CalcParser.unary_operator`.
	 * @param ctx the parse tree
	 */
	enterUnary_operator?: (ctx: Unary_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `CalcParser.unary_operator`.
	 * @param ctx the parse tree
	 */
	exitUnary_operator?: (ctx: Unary_operatorContext) => void;

	/**
	 * Enter a parse tree produced by `CalcParser.assignment_operator`.
	 * @param ctx the parse tree
	 */
	enterAssignment_operator?: (ctx: Assignment_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `CalcParser.assignment_operator`.
	 * @param ctx the parse tree
	 */
	exitAssignment_operator?: (ctx: Assignment_operatorContext) => void;

	/**
	 * Enter a parse tree produced by `CalcParser.end_statement_delimiter`.
	 * @param ctx the parse tree
	 */
	enterEnd_statement_delimiter?: (ctx: End_statement_delimiterContext) => void;
	/**
	 * Exit a parse tree produced by `CalcParser.end_statement_delimiter`.
	 * @param ctx the parse tree
	 */
	exitEnd_statement_delimiter?: (ctx: End_statement_delimiterContext) => void;

	/**
	 * Enter a parse tree produced by `CalcParser.type_sign_specifier`.
	 * @param ctx the parse tree
	 */
	enterType_sign_specifier?: (ctx: Type_sign_specifierContext) => void;
	/**
	 * Exit a parse tree produced by `CalcParser.type_sign_specifier`.
	 * @param ctx the parse tree
	 */
	exitType_sign_specifier?: (ctx: Type_sign_specifierContext) => void;

	/**
	 * Enter a parse tree produced by `CalcParser.type_specifier`.
	 * @param ctx the parse tree
	 */
	enterType_specifier?: (ctx: Type_specifierContext) => void;
	/**
	 * Exit a parse tree produced by `CalcParser.type_specifier`.
	 * @param ctx the parse tree
	 */
	exitType_specifier?: (ctx: Type_specifierContext) => void;

	/**
	 * Enter a parse tree produced by `CalcParser.type_qualifier`.
	 * @param ctx the parse tree
	 */
	enterType_qualifier?: (ctx: Type_qualifierContext) => void;
	/**
	 * Exit a parse tree produced by `CalcParser.type_qualifier`.
	 * @param ctx the parse tree
	 */
	exitType_qualifier?: (ctx: Type_qualifierContext) => void;

	/**
	 * Enter a parse tree produced by `CalcParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `CalcParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `CalcParser.start`.
	 * @param ctx the parse tree
	 */
	enterStart?: (ctx: StartContext) => void;
	/**
	 * Exit a parse tree produced by `CalcParser.start`.
	 * @param ctx the parse tree
	 */
	exitStart?: (ctx: StartContext) => void;

	/**
	 * Enter a parse tree produced by `CalcParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `CalcParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `CalcParser.function_definition`.
	 * @param ctx the parse tree
	 */
	enterFunction_definition?: (ctx: Function_definitionContext) => void;
	/**
	 * Exit a parse tree produced by `CalcParser.function_definition`.
	 * @param ctx the parse tree
	 */
	exitFunction_definition?: (ctx: Function_definitionContext) => void;

	/**
	 * Enter a parse tree produced by `CalcParser.return_type`.
	 * @param ctx the parse tree
	 */
	enterReturn_type?: (ctx: Return_typeContext) => void;
	/**
	 * Exit a parse tree produced by `CalcParser.return_type`.
	 * @param ctx the parse tree
	 */
	exitReturn_type?: (ctx: Return_typeContext) => void;

	/**
	 * Enter a parse tree produced by `CalcParser.parameter_type_list`.
	 * @param ctx the parse tree
	 */
	enterParameter_type_list?: (ctx: Parameter_type_listContext) => void;
	/**
	 * Exit a parse tree produced by `CalcParser.parameter_type_list`.
	 * @param ctx the parse tree
	 */
	exitParameter_type_list?: (ctx: Parameter_type_listContext) => void;

	/**
	 * Enter a parse tree produced by `CalcParser.parameter_list`.
	 * @param ctx the parse tree
	 */
	enterParameter_list?: (ctx: Parameter_listContext) => void;
	/**
	 * Exit a parse tree produced by `CalcParser.parameter_list`.
	 * @param ctx the parse tree
	 */
	exitParameter_list?: (ctx: Parameter_listContext) => void;

	/**
	 * Enter a parse tree produced by `CalcParser.parameter_declaration`.
	 * @param ctx the parse tree
	 */
	enterParameter_declaration?: (ctx: Parameter_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `CalcParser.parameter_declaration`.
	 * @param ctx the parse tree
	 */
	exitParameter_declaration?: (ctx: Parameter_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `CalcParser.array_declaration`.
	 * @param ctx the parse tree
	 */
	enterArray_declaration?: (ctx: Array_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `CalcParser.array_declaration`.
	 * @param ctx the parse tree
	 */
	exitArray_declaration?: (ctx: Array_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `CalcParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `CalcParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `CalcParser.labeled_statement`.
	 * @param ctx the parse tree
	 */
	enterLabeled_statement?: (ctx: Labeled_statementContext) => void;
	/**
	 * Exit a parse tree produced by `CalcParser.labeled_statement`.
	 * @param ctx the parse tree
	 */
	exitLabeled_statement?: (ctx: Labeled_statementContext) => void;

	/**
	 * Enter a parse tree produced by `CalcParser.declaration_statement`.
	 * @param ctx the parse tree
	 */
	enterDeclaration_statement?: (ctx: Declaration_statementContext) => void;
	/**
	 * Exit a parse tree produced by `CalcParser.declaration_statement`.
	 * @param ctx the parse tree
	 */
	exitDeclaration_statement?: (ctx: Declaration_statementContext) => void;

	/**
	 * Enter a parse tree produced by `CalcParser.declaration_specifiers`.
	 * @param ctx the parse tree
	 */
	enterDeclaration_specifiers?: (ctx: Declaration_specifiersContext) => void;
	/**
	 * Exit a parse tree produced by `CalcParser.declaration_specifiers`.
	 * @param ctx the parse tree
	 */
	exitDeclaration_specifiers?: (ctx: Declaration_specifiersContext) => void;

	/**
	 * Enter a parse tree produced by `CalcParser.init_declarator_list`.
	 * @param ctx the parse tree
	 */
	enterInit_declarator_list?: (ctx: Init_declarator_listContext) => void;
	/**
	 * Exit a parse tree produced by `CalcParser.init_declarator_list`.
	 * @param ctx the parse tree
	 */
	exitInit_declarator_list?: (ctx: Init_declarator_listContext) => void;

	/**
	 * Enter a parse tree produced by `CalcParser.init_declarator`.
	 * @param ctx the parse tree
	 */
	enterInit_declarator?: (ctx: Init_declaratorContext) => void;
	/**
	 * Exit a parse tree produced by `CalcParser.init_declarator`.
	 * @param ctx the parse tree
	 */
	exitInit_declarator?: (ctx: Init_declaratorContext) => void;

	/**
	 * Enter a parse tree produced by `CalcParser.declarator`.
	 * @param ctx the parse tree
	 */
	enterDeclarator?: (ctx: DeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `CalcParser.declarator`.
	 * @param ctx the parse tree
	 */
	exitDeclarator?: (ctx: DeclaratorContext) => void;

	/**
	 * Enter a parse tree produced by `CalcParser.pointer`.
	 * @param ctx the parse tree
	 */
	enterPointer?: (ctx: PointerContext) => void;
	/**
	 * Exit a parse tree produced by `CalcParser.pointer`.
	 * @param ctx the parse tree
	 */
	exitPointer?: (ctx: PointerContext) => void;

	/**
	 * Enter a parse tree produced by `CalcParser.direct_declarator`.
	 * @param ctx the parse tree
	 */
	enterDirect_declarator?: (ctx: Direct_declaratorContext) => void;
	/**
	 * Exit a parse tree produced by `CalcParser.direct_declarator`.
	 * @param ctx the parse tree
	 */
	exitDirect_declarator?: (ctx: Direct_declaratorContext) => void;

	/**
	 * Enter a parse tree produced by `CalcParser.initializer`.
	 * @param ctx the parse tree
	 */
	enterInitializer?: (ctx: InitializerContext) => void;
	/**
	 * Exit a parse tree produced by `CalcParser.initializer`.
	 * @param ctx the parse tree
	 */
	exitInitializer?: (ctx: InitializerContext) => void;

	/**
	 * Enter a parse tree produced by `CalcParser.initializer_list`.
	 * @param ctx the parse tree
	 */
	enterInitializer_list?: (ctx: Initializer_listContext) => void;
	/**
	 * Exit a parse tree produced by `CalcParser.initializer_list`.
	 * @param ctx the parse tree
	 */
	exitInitializer_list?: (ctx: Initializer_listContext) => void;

	/**
	 * Enter a parse tree produced by `CalcParser.expression_statement`.
	 * @param ctx the parse tree
	 */
	enterExpression_statement?: (ctx: Expression_statementContext) => void;
	/**
	 * Exit a parse tree produced by `CalcParser.expression_statement`.
	 * @param ctx the parse tree
	 */
	exitExpression_statement?: (ctx: Expression_statementContext) => void;

	/**
	 * Enter a parse tree produced by `CalcParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CalcParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CalcParser.assignment_expression`.
	 * @param ctx the parse tree
	 */
	enterAssignment_expression?: (ctx: Assignment_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `CalcParser.assignment_expression`.
	 * @param ctx the parse tree
	 */
	exitAssignment_expression?: (ctx: Assignment_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `CalcParser.constant_expression`.
	 * @param ctx the parse tree
	 */
	enterConstant_expression?: (ctx: Constant_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `CalcParser.constant_expression`.
	 * @param ctx the parse tree
	 */
	exitConstant_expression?: (ctx: Constant_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `CalcParser.conditional_expression`.
	 * @param ctx the parse tree
	 */
	enterConditional_expression?: (ctx: Conditional_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `CalcParser.conditional_expression`.
	 * @param ctx the parse tree
	 */
	exitConditional_expression?: (ctx: Conditional_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `CalcParser.logical_or_expression`.
	 * @param ctx the parse tree
	 */
	enterLogical_or_expression?: (ctx: Logical_or_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `CalcParser.logical_or_expression`.
	 * @param ctx the parse tree
	 */
	exitLogical_or_expression?: (ctx: Logical_or_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `CalcParser.logical_and_expression`.
	 * @param ctx the parse tree
	 */
	enterLogical_and_expression?: (ctx: Logical_and_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `CalcParser.logical_and_expression`.
	 * @param ctx the parse tree
	 */
	exitLogical_and_expression?: (ctx: Logical_and_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `CalcParser.inclusive_or_expression`.
	 * @param ctx the parse tree
	 */
	enterInclusive_or_expression?: (ctx: Inclusive_or_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `CalcParser.inclusive_or_expression`.
	 * @param ctx the parse tree
	 */
	exitInclusive_or_expression?: (ctx: Inclusive_or_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `CalcParser.exclusive_or_expression`.
	 * @param ctx the parse tree
	 */
	enterExclusive_or_expression?: (ctx: Exclusive_or_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `CalcParser.exclusive_or_expression`.
	 * @param ctx the parse tree
	 */
	exitExclusive_or_expression?: (ctx: Exclusive_or_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `CalcParser.and_expression`.
	 * @param ctx the parse tree
	 */
	enterAnd_expression?: (ctx: And_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `CalcParser.and_expression`.
	 * @param ctx the parse tree
	 */
	exitAnd_expression?: (ctx: And_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `CalcParser.equality_expression`.
	 * @param ctx the parse tree
	 */
	enterEquality_expression?: (ctx: Equality_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `CalcParser.equality_expression`.
	 * @param ctx the parse tree
	 */
	exitEquality_expression?: (ctx: Equality_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `CalcParser.relational_expression`.
	 * @param ctx the parse tree
	 */
	enterRelational_expression?: (ctx: Relational_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `CalcParser.relational_expression`.
	 * @param ctx the parse tree
	 */
	exitRelational_expression?: (ctx: Relational_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `CalcParser.shift_expression`.
	 * @param ctx the parse tree
	 */
	enterShift_expression?: (ctx: Shift_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `CalcParser.shift_expression`.
	 * @param ctx the parse tree
	 */
	exitShift_expression?: (ctx: Shift_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `CalcParser.additive_expression`.
	 * @param ctx the parse tree
	 */
	enterAdditive_expression?: (ctx: Additive_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `CalcParser.additive_expression`.
	 * @param ctx the parse tree
	 */
	exitAdditive_expression?: (ctx: Additive_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `CalcParser.multiplicative_expression`.
	 * @param ctx the parse tree
	 */
	enterMultiplicative_expression?: (ctx: Multiplicative_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `CalcParser.multiplicative_expression`.
	 * @param ctx the parse tree
	 */
	exitMultiplicative_expression?: (ctx: Multiplicative_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `CalcParser.cast_expression`.
	 * @param ctx the parse tree
	 */
	enterCast_expression?: (ctx: Cast_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `CalcParser.cast_expression`.
	 * @param ctx the parse tree
	 */
	exitCast_expression?: (ctx: Cast_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `CalcParser.type_name`.
	 * @param ctx the parse tree
	 */
	enterType_name?: (ctx: Type_nameContext) => void;
	/**
	 * Exit a parse tree produced by `CalcParser.type_name`.
	 * @param ctx the parse tree
	 */
	exitType_name?: (ctx: Type_nameContext) => void;

	/**
	 * Enter a parse tree produced by `CalcParser.abstract_declarator`.
	 * @param ctx the parse tree
	 */
	enterAbstract_declarator?: (ctx: Abstract_declaratorContext) => void;
	/**
	 * Exit a parse tree produced by `CalcParser.abstract_declarator`.
	 * @param ctx the parse tree
	 */
	exitAbstract_declarator?: (ctx: Abstract_declaratorContext) => void;

	/**
	 * Enter a parse tree produced by `CalcParser.direct_abstract_declarator`.
	 * @param ctx the parse tree
	 */
	enterDirect_abstract_declarator?: (ctx: Direct_abstract_declaratorContext) => void;
	/**
	 * Exit a parse tree produced by `CalcParser.direct_abstract_declarator`.
	 * @param ctx the parse tree
	 */
	exitDirect_abstract_declarator?: (ctx: Direct_abstract_declaratorContext) => void;

	/**
	 * Enter a parse tree produced by `CalcParser.unary_expression`.
	 * @param ctx the parse tree
	 */
	enterUnary_expression?: (ctx: Unary_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `CalcParser.unary_expression`.
	 * @param ctx the parse tree
	 */
	exitUnary_expression?: (ctx: Unary_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `CalcParser.postfix_expression`.
	 * @param ctx the parse tree
	 */
	enterPostfix_expression?: (ctx: Postfix_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `CalcParser.postfix_expression`.
	 * @param ctx the parse tree
	 */
	exitPostfix_expression?: (ctx: Postfix_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `CalcParser.primary_expression`.
	 * @param ctx the parse tree
	 */
	enterPrimary_expression?: (ctx: Primary_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `CalcParser.primary_expression`.
	 * @param ctx the parse tree
	 */
	exitPrimary_expression?: (ctx: Primary_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `CalcParser.constant`.
	 * @param ctx the parse tree
	 */
	enterConstant?: (ctx: ConstantContext) => void;
	/**
	 * Exit a parse tree produced by `CalcParser.constant`.
	 * @param ctx the parse tree
	 */
	exitConstant?: (ctx: ConstantContext) => void;

	/**
	 * Enter a parse tree produced by `CalcParser.integer_constant`.
	 * @param ctx the parse tree
	 */
	enterInteger_constant?: (ctx: Integer_constantContext) => void;
	/**
	 * Exit a parse tree produced by `CalcParser.integer_constant`.
	 * @param ctx the parse tree
	 */
	exitInteger_constant?: (ctx: Integer_constantContext) => void;

	/**
	 * Enter a parse tree produced by `CalcParser.float_constant`.
	 * @param ctx the parse tree
	 */
	enterFloat_constant?: (ctx: Float_constantContext) => void;
	/**
	 * Exit a parse tree produced by `CalcParser.float_constant`.
	 * @param ctx the parse tree
	 */
	exitFloat_constant?: (ctx: Float_constantContext) => void;

	/**
	 * Enter a parse tree produced by `CalcParser.character_constant`.
	 * @param ctx the parse tree
	 */
	enterCharacter_constant?: (ctx: Character_constantContext) => void;
	/**
	 * Exit a parse tree produced by `CalcParser.character_constant`.
	 * @param ctx the parse tree
	 */
	exitCharacter_constant?: (ctx: Character_constantContext) => void;

	/**
	 * Enter a parse tree produced by `CalcParser.compound_statement`.
	 * @param ctx the parse tree
	 */
	enterCompound_statement?: (ctx: Compound_statementContext) => void;
	/**
	 * Exit a parse tree produced by `CalcParser.compound_statement`.
	 * @param ctx the parse tree
	 */
	exitCompound_statement?: (ctx: Compound_statementContext) => void;

	/**
	 * Enter a parse tree produced by `CalcParser.selection_statement`.
	 * @param ctx the parse tree
	 */
	enterSelection_statement?: (ctx: Selection_statementContext) => void;
	/**
	 * Exit a parse tree produced by `CalcParser.selection_statement`.
	 * @param ctx the parse tree
	 */
	exitSelection_statement?: (ctx: Selection_statementContext) => void;

	/**
	 * Enter a parse tree produced by `CalcParser.iteration_statement`.
	 * @param ctx the parse tree
	 */
	enterIteration_statement?: (ctx: Iteration_statementContext) => void;
	/**
	 * Exit a parse tree produced by `CalcParser.iteration_statement`.
	 * @param ctx the parse tree
	 */
	exitIteration_statement?: (ctx: Iteration_statementContext) => void;

	/**
	 * Enter a parse tree produced by `CalcParser.jump_statement`.
	 * @param ctx the parse tree
	 */
	enterJump_statement?: (ctx: Jump_statementContext) => void;
	/**
	 * Exit a parse tree produced by `CalcParser.jump_statement`.
	 * @param ctx the parse tree
	 */
	exitJump_statement?: (ctx: Jump_statementContext) => void;
}

