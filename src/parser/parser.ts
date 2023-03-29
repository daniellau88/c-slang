/* tslint:disable:max-classes-per-file */
import { CharStreams, CommonTokenStream, ParserRuleContext } from 'antlr4ts'
import { ErrorNode } from 'antlr4ts/tree/ErrorNode'
import { ParseTree } from 'antlr4ts/tree/ParseTree'
import { RuleNode } from 'antlr4ts/tree/RuleNode'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'
import * as es from 'estree'

import { CalcLexer } from '../lang/CalcLexer'
import {
  AbstractDeclaratorTypeDirectAbstractDeclaratorContext,
  AbstractDeclaratorTypePointerContext,
  AdditiveExpressionTypeAdditiveAddContext,
  AdditiveExpressionTypeAdditiveMinusContext,
  AdditiveExpressionTypeMultiplicativeContext,
  AndExpressionTypeAndContext,
  AndExpressionTypeEqualityContext,
  Assignment_operatorContext,
  AssignmentExpressionTypeAssignmentContext,
  AssignmentExpressionTypeConditionalContext,
  Break_statementContext,
  CalcParser,
  CastExpressionTypeCastContext,
  CastExpressionTypeUnaryContext,
  Character_constantContext,
  Compound_statementContext,
  ConditionalExpressionTypeConditionalContext,
  ConditionalExpressionTypeLogicalOrContext,
  Constant_expressionContext,
  ConstantTypeCharacterContext,
  ConstantTypeFloatContext,
  ConstantTypeIntegerContext,
  Continue_statementContext,
  Declaration_specifiersContext,
  Declaration_statementContext,
  DeclaratorContext,
  DirectAbstractDeclaratorTypeArrayContext,
  DirectAbstractDeclaratorTypeNestedAbstractDeclaratorContext,
  DirectAbstractDeclaratorTypeParametersContext,
  DirectAbstractDeclaratorTypeRecursiveArrayContext,
  DirectAbstractDeclaratorTypeRecursiveParametersContext,
  DirectDeclaratorTypeIdentifierContext,
  DirectDeclaratorTypeNestedDeclaratorContext,
  DirectDeclaratorTypeRecursiveArrayContext,
  DirectDeclaratorTypeRecursiveIdentifiersContext,
  DirectDeclaratorTypeRecursiveParametersContext,
  Do_statementContext,
  EqualityExpressionTypeEqualityEqualContext,
  EqualityExpressionTypeEqualityNotEqualContext,
  EqualityExpressionTypeRelationalContext,
  ExclusiveOrExpressionTypeAndContext,
  ExclusiveOrExpressionTypeExclusiveOrContext,
  Expression_statementContext,
  ExpressionTypeAssignmentContext,
  ExpressionTypeExpressionContext,
  Float_constantContext,
  For_init_declarationContext,
  For_statementContext,
  Function_definitionContext,
  Goto_statementContext,
  IdentifierContext,
  If_statementContext,
  InclusiveOrExpressionTypeExclusiveOrContext,
  InclusiveOrExpressionTypeInclusiveOrContext,
  Init_declarator_listContext,
  Init_declaratorContext,
  InitializerListTypeInitializerContext,
  InitializerListTypeRecursiveInitializerContext,
  InitializerTypeArrayContext,
  InitializerTypeConditionalExpressionContext,
  Integer_constantContext,
  Labeled_statementContext,
  LogicalAndExpressionTypeInclusiveOrContext,
  LogicalAndExpressionTypeLogicalAndContext,
  LogicalOrExpressionTypeLogicalAndContext,
  LogicalOrExpressionTypeLogicalOrContext,
  MultiplicativeExpressionTypeCastContext,
  MultiplicativeExpressionTypeMultiplicativeAsterickContext,
  MultiplicativeExpressionTypeMultiplicativeBackslashContext,
  MultiplicativeExpressionTypeMultiplicativePercentContext,
  Parameter_listContext,
  Parameter_type_listContext,
  ParameterDeclarationTypeAbstractDeclaratorContext,
  ParameterDeclarationTypeDeclaratorContext,
  ParameterDeclarationTypeNormalContext,
  PointerContext,
  PostfixExpressionTypeArrayContext,
  PostfixExpressionTypeDecrementContext,
  PostfixExpressionTypeDerefMemberContext,
  PostfixExpressionTypeFunctionCallContext,
  PostfixExpressionTypeIncrementContext,
  PostfixExpressionTypeMemberContext,
  PostfixExpressionTypePrimaryContext,
  PrimaryExpressionTypeConstantContext,
  PrimaryExpressionTypeIdentifierContext,
  PrimaryExpressionTypeNestedExpressionContext,
  ProgramContext,
  RelationalExpressionTypeRelationalGTContext,
  RelationalExpressionTypeRelationalGTOEContext,
  RelationalExpressionTypeRelationalLTContext,
  RelationalExpressionTypeRelationalLTOEContext,
  RelationalExpressionTypeShiftContext,
  Return_statementContext,
  ShfitExpressionTypeAdditiveContext,
  ShfitExpressionTypeShiftLeftContext,
  ShfitExpressionTypeShiftRightContext,
  StatementTypeBreakContext,
  StatementTypeCompoundContext,
  StatementTypeContinueContext,
  StatementTypeDeclarationContext,
  StatementTypeDoContext,
  StatementTypeExpressionContext,
  StatementTypeForContext,
  StatementTypeGotoContext,
  StatementTypeIfContext,
  StatementTypeLabeledContext,
  StatementTypeReturnContext,
  StatementTypeSwitchContext,
  StatementTypeWhileContext,
  Switch_bodyContext,
  Switch_case_bodyContext,
  Switch_default_bodyContext,
  Switch_statementContext,
  Type_nameContext,
  Type_specifierContext,
  Unary_operatorContext,
  UnaryExpressionTypeDecrementContext,
  UnaryExpressionTypeIncrementContext,
  UnaryExpressionTypePostfixContext,
  UnaryExpressionTypeSizeOfContext,
  UnaryExpressionTypeUnaryOperatorContext,
  While_statementContext,
} from '../lang/CalcParser'
import { CalcVisitor } from '../lang/CalcVisitor'
import { Context, ErrorSeverity, ErrorType, SourceError } from '../types'
import {
  CCSTAbstractDeclarator,
  CCSTAdditiveExpression,
  CCSTAndExpression,
  CCSTAssignmentExpression,
  CCSTAssignmentOperator,
  CCSTBreakStatement,
  CCSTCastExpression,
  CCSTCharacterConstant,
  CCSTCompoundStatement,
  CCSTConditionalExpression,
  CCSTConstant,
  CCSTConstantExpression,
  CCSTContinueStatement,
  CCSTDeclarationSpecifier,
  CCSTDeclarationStatement,
  CCSTDeclarator,
  CCSTDirectAbstractDeclarator,
  CCSTDirectDeclarator,
  CCSTDoStatement,
  CCSTEqualityExpression,
  CCSTExclusiveOrExpression,
  CCSTExpression,
  CCSTExpressionStatement,
  CCSTFloatConstant,
  CCSTForInitDeclaration,
  CCSTForStatement,
  CCSTFunctionDefinition,
  CCSTGotoStatement,
  CCSTIdentifier,
  CCSTIfStatement,
  CCSTInclusiveOrExpression,
  CCSTInitDeclarator,
  CCSTInitDeclaratorList,
  CCSTInitializer,
  CCSTInitializerList,
  CCSTIntegerConstant,
  CCSTLabeledStatement,
  CCSTLogicalAndExpression,
  CCSTLogicalOrExpression,
  CCSTMultiplicativeExpression,
  CCSTNode,
  CCSTParameterDeclaration,
  CCSTParameterList,
  CCSTParameterTypeList,
  CCSTPointer,
  CCSTPostfixExpression,
  CCSTPrimaryExpression,
  CCSTProgram,
  CCSTRelationalExpression,
  CCSTReturnStatement,
  CCSTShiftExpression,
  CCSTStatement,
  CCSTSwitchBody,
  CCSTSwitchCaseBody,
  CCSTSwitchDefaultBody,
  CCSTSwitchStatement,
  CCSTTypeName,
  CCSTTypeSpecifier,
  CCSTUnaryExpression,
  CCSTUnaryOperator,
  CCSTWhileStatement,
} from '../typings/programCST'
import { stripIndent } from '../utils/formatters'

export class DisallowedConstructError implements SourceError {
  public type = ErrorType.SYNTAX
  public severity = ErrorSeverity.ERROR
  public nodeType: string

  constructor(public node: es.Node) {
    this.nodeType = this.formatNodeType(this.node.type)
  }

  get location() {
    return this.node.loc!
  }

  public explain() {
    return `${this.nodeType} are not allowed`
  }

  public elaborate() {
    return stripIndent`
      You are trying to use ${this.nodeType}, which is not allowed (yet).
    `
  }

  /**
   * Converts estree node.type into english
   * e.g. ThisExpression -> 'this' expressions
   *      Property -> Properties
   *      EmptyStatement -> Empty Statements
   */
  private formatNodeType(nodeType: string) {
    switch (nodeType) {
      case 'ThisExpression':
        return "'this' expressions"
      case 'Property':
        return 'Properties'
      default: {
        const words = nodeType.split(/(?=[A-Z])/)
        return words.map((word, i) => (i === 0 ? word : word.toLowerCase())).join(' ') + 's'
      }
    }
  }
}

export class FatalSyntaxError implements SourceError {
  public type = ErrorType.SYNTAX
  public severity = ErrorSeverity.ERROR
  public constructor(public location: es.SourceLocation, public message: string) {}

  public explain() {
    return this.message
  }

  public elaborate() {
    return 'There is a syntax error in your program'
  }
}

export class MissingSemicolonError implements SourceError {
  public type = ErrorType.SYNTAX
  public severity = ErrorSeverity.ERROR
  public constructor(public location: es.SourceLocation) {}

  public explain() {
    return 'Missing semicolon at the end of statement'
  }

  public elaborate() {
    return 'Every statement must be terminated by a semicolon.'
  }
}

export class TrailingCommaError implements SourceError {
  public type: ErrorType.SYNTAX
  public severity: ErrorSeverity.WARNING
  public constructor(public location: es.SourceLocation) {}

  public explain() {
    return 'Trailing comma'
  }

  public elaborate() {
    return 'Please remove the trailing comma'
  }
}

function contextToLocation(ctx: ParserRuleContext): es.SourceLocation {
  return {
    start: {
      line: ctx.start.line,
      column: ctx.start.charPositionInLine,
    },
    end: {
      line: ctx.stop ? ctx.stop.line : ctx.start.line,
      column: ctx.stop ? ctx.stop.charPositionInLine : ctx.start.charPositionInLine,
    },
  }
}
class ExpressionGenerator implements CalcVisitor<CCSTNode> {
  visitProgram(ctx: ProgramContext): CCSTProgram {
    const definitions: Array<CCSTFunctionDefinition | CCSTDeclarationStatement> = []
    if (ctx.children) {
      ctx.children.forEach(x => {
        definitions.push(this.visit(x) as CCSTFunctionDefinition | CCSTDeclarationStatement)
      })
    }
    return {
      type: 'Program',
      children: definitions,
    }
  }

  visitFunction_definition(ctx: Function_definitionContext): CCSTFunctionDefinition {
    const declarationSpecifiersContext = ctx.declaration_specifiers()
    let declarationSpecifiers: CCSTDeclarationSpecifier | undefined = undefined
    if (declarationSpecifiersContext) {
      declarationSpecifiers = this.visitDeclaration_specifiers(declarationSpecifiersContext)
    }

    const declarationStatements = ctx
      .declaration_statement()
      .map(x => this.visitDeclaration_statement(x))

    return {
      type: 'FunctionDefinition',
      declarationSpecifier: declarationSpecifiers,
      declarator: this.visitDeclarator(ctx.declarator()),
      declarationStatements: declarationStatements,
      compoundStatement: this.visitCompound_statement(ctx.compound_statement()),
    }
  }

  visitParameter_type_list(ctx: Parameter_type_listContext): CCSTParameterTypeList {
    return {
      type: 'ParameterTypeList',
      parameterList: this.visitParameter_list(ctx.parameter_list()),
      hasVarArg: Boolean(ctx.VAR_ARG()),
    }
  }

  visitParameter_list(ctx: Parameter_listContext): CCSTParameterList {
    const parameterListContext = ctx.parameter_list()
    let parameterList: CCSTParameterList | undefined = undefined
    if (parameterListContext) {
      parameterList = this.visitParameter_list(parameterListContext)
    }

    return {
      type: 'ParameterList',
      parameterDeclaration: this.visit(ctx.parameter_declaration()) as CCSTParameterDeclaration,
      parameterList: parameterList,
    }
  }

  visitParameterDeclarationTypeDeclarator(
    ctx: ParameterDeclarationTypeDeclaratorContext,
  ): CCSTParameterDeclaration {
    return {
      type: 'ParameterDeclaration',
      subtype: 'Declarator',
      declarationSpecifiers: this.visitDeclaration_specifiers(ctx.declaration_specifiers()),
      declarator: this.visitDeclarator(ctx.declarator()),
    }
  }

  visitParameterDeclarationTypeAbstractDeclarator(
    ctx: ParameterDeclarationTypeAbstractDeclaratorContext,
  ): CCSTParameterDeclaration {
    return {
      type: 'ParameterDeclaration',
      subtype: 'AbstractDeclarator',
      declarationSpecifiers: this.visitDeclaration_specifiers(ctx.declaration_specifiers()),
      abstractDeclarator: this.visit(ctx.abstract_declarator()) as CCSTAbstractDeclarator,
    }
  }

  visitParameterDeclarationTypeNormal(
    ctx: ParameterDeclarationTypeNormalContext,
  ): CCSTParameterDeclaration {
    return {
      type: 'ParameterDeclaration',
      subtype: 'Normal',
      declarationSpecifiers: this.visitDeclaration_specifiers(ctx.declaration_specifiers()),
    }
  }

  visitLabeled_statement(ctx: Labeled_statementContext): CCSTLabeledStatement {
    return {
      type: 'LabeledStatement',
      identifier: this.visitIdentifier(ctx.identifier()),
      statement: this.visit(ctx.statement()) as CCSTStatement,
    }
  }

  visitDeclaration_statement(ctx: Declaration_statementContext): CCSTDeclarationStatement {
    return {
      type: 'DeclarationStatement',
      declarationSpecifiers: this.visitDeclaration_specifiers(ctx.declaration_specifiers()),
      initDeclaratorList: this.visitInit_declarator_list(ctx.init_declarator_list()),
    }
  }

  visitDeclaration_specifiers(ctx: Declaration_specifiersContext): CCSTDeclarationSpecifier {
    return {
      type: 'DeclarationSpecifier',
      typeSpecifier: this.visitType_specifier(ctx.type_specifier()),
    }
  }

  visitInit_declarator_list(ctx: Init_declarator_listContext): CCSTInitDeclaratorList {
    const initDeclarators = ctx.init_declarator().map(x => this.visitInit_declarator(x))

    return {
      type: 'InitDeclaratorList',
      initDeclarators: initDeclarators,
    }
  }

  visitInit_declarator(ctx: Init_declaratorContext): CCSTInitDeclarator {
    const initializerContext = ctx.initializer()
    let initializer: CCSTInitializer | undefined = undefined
    if (initializerContext) {
      initializer = this.visit(initializerContext) as CCSTInitializer
    }

    return {
      type: 'InitDeclarator',
      declarator: this.visitDeclarator(ctx.declarator()),
      initializer: initializer,
    }
  }

  visitDeclarator(ctx: DeclaratorContext): CCSTDeclarator {
    const pointerContext = ctx.pointer()
    let pointer: CCSTPointer | undefined = undefined
    if (pointerContext) {
      pointer = this.visitPointer(pointerContext)
    }

    return {
      type: 'Declarator',
      pointer: pointer,
      directDeclarator: this.visit(ctx.direct_declarator()) as CCSTDirectDeclarator,
    }
  }

  visitDirectDeclaratorTypeIdentifier(
    ctx: DirectDeclaratorTypeIdentifierContext,
  ): CCSTDirectDeclarator {
    return {
      type: 'DirectDeclarator',
      subtype: 'Identifier',
      identifier: this.visitIdentifier(ctx.identifier()),
    }
  }

  visitDirectDeclaratorTypeNestedDeclarator(
    ctx: DirectDeclaratorTypeNestedDeclaratorContext,
  ): CCSTDirectDeclarator {
    return {
      type: 'DirectDeclarator',
      subtype: 'NestedDeclarator',
      declarator: this.visitDeclarator(ctx.declarator()),
    }
  }

  visitDirectDeclaratorTypeRecursiveArray(
    ctx: DirectDeclaratorTypeRecursiveArrayContext,
  ): CCSTDirectDeclarator {
    const constantExpressionCtx = ctx.constant_expression()
    let constantExpression: CCSTConstantExpression | undefined = undefined
    if (constantExpressionCtx) {
      constantExpression = this.visitConstant_expression(constantExpressionCtx)
    }

    return {
      type: 'DirectDeclarator',
      subtype: 'RecursiveArray',
      directDeclarator: this.visit(ctx.direct_declarator()) as CCSTDirectDeclarator,
      constantExpression: constantExpression,
    }
  }

  visitDirectDeclaratorTypeRecursiveParameters(
    ctx: DirectDeclaratorTypeRecursiveParametersContext,
  ): CCSTDirectDeclarator {
    const parameterTypeListContext = ctx.parameter_type_list()
    let parameterTypeList: CCSTParameterTypeList | undefined = undefined
    if (parameterTypeListContext) {
      parameterTypeList = this.visitParameter_type_list(parameterTypeListContext)
    }

    return {
      type: 'DirectDeclarator',
      subtype: 'RecursiveParameters',
      directDeclarator: this.visit(ctx.direct_declarator()) as CCSTDirectDeclarator,
      parameterTypeList: parameterTypeList,
    }
  }

  visitDirectDeclaratorTypeRecursiveIdentifiers(
    ctx: DirectDeclaratorTypeRecursiveIdentifiersContext,
  ): CCSTDirectDeclarator {
    return {
      type: 'DirectDeclarator',
      subtype: 'RecursiveIdentifier',
      directDeclarator: this.visit(ctx.direct_declarator()) as CCSTDirectDeclarator,
      identifiers: ctx.identifier().map(x => this.visitIdentifier(x)),
    }
  }

  visitInitializerTypeConditionalExpression(
    ctx: InitializerTypeConditionalExpressionContext,
  ): CCSTInitializer {
    return {
      type: 'Initializer',
      subtype: 'ConditionalExpression',
      conditionalExpression: this.visit(ctx.conditional_expression()) as CCSTConditionalExpression,
    }
  }

  visitInitializerTypeArray(ctx: InitializerTypeArrayContext): CCSTInitializer {
    return {
      type: 'Initializer',
      subtype: 'Array',
      initializerList: this.visit(ctx.initializer_list()) as CCSTInitializerList,
    }
  }

  visitInitializerListTypeInitializer(
    ctx: InitializerListTypeInitializerContext,
  ): CCSTInitializerList {
    return {
      type: 'InitializerList',
      subtype: 'Initializer',
      initializer: this.visit(ctx.initializer()) as CCSTInitializer,
    }
  }

  visitInitializerListTypeRecursiveInitializer(
    ctx: InitializerListTypeRecursiveInitializerContext,
  ): CCSTInitializerList {
    return {
      type: 'InitializerList',
      subtype: 'RecursiveInitializer',
      initializerList: this.visit(ctx.initializer_list()) as CCSTInitializerList,
      initializer: this.visit(ctx.initializer()) as CCSTInitializer,
    }
  }

  visitExpression_statement(ctx: Expression_statementContext): CCSTExpressionStatement {
    return {
      type: 'ExpressionStatement',
      expression: this.visit(ctx.expression()) as CCSTExpression,
    }
  }

  visitExpressionTypeAssignment(ctx: ExpressionTypeAssignmentContext): CCSTExpression {
    return {
      type: 'Expression',
      subtype: 'Assignment',
      assignmentExpression: this.visit(ctx.assignment_expression()) as CCSTAssignmentExpression,
    }
  }

  visitExpressionTypeExpression(ctx: ExpressionTypeExpressionContext): CCSTExpression {
    return {
      type: 'Expression',
      subtype: 'Expression',
      assignmentExpression: this.visit(ctx.assignment_expression()) as CCSTAssignmentExpression,
      expression: this.visit(ctx.expression()) as CCSTExpression,
    }
  }

  visitAssignmentExpressionTypeConditional(
    ctx: AssignmentExpressionTypeConditionalContext,
  ): CCSTAssignmentExpression {
    return {
      type: 'AssignmentExpression',
      subtype: 'Conditional',
      conditionalExpression: this.visit(ctx.conditional_expression()) as CCSTConditionalExpression,
    }
  }

  visitAssignmentExpressionTypeAssignment(
    ctx: AssignmentExpressionTypeAssignmentContext,
  ): CCSTAssignmentExpression {
    return {
      type: 'AssignmentExpression',
      subtype: 'Assignment',
      unaryExpression: this.visit(ctx.unary_expression()) as CCSTUnaryExpression,
      assignmentExpression: this.visit(ctx.assignment_expression()) as CCSTAssignmentExpression,
      assignmentOperator: this.visitAssignment_operator(ctx.assignment_operator()),
    }
  }

  visitConstant_expression(ctx: Constant_expressionContext): CCSTConstantExpression {
    return {
      type: 'ConstantExpression',
      conditionalExpression: this.visit(ctx.conditional_expression()) as CCSTConditionalExpression,
    }
  }

  visitConditionalExpressionTypeConditional(
    ctx: ConditionalExpressionTypeConditionalContext,
  ): CCSTConditionalExpression {
    return {
      type: 'ConditionalExpression',
      subtype: 'Conditional',
      expression: this.visit(ctx.expression()) as CCSTExpression,
      conditionalExpression: this.visit(ctx.conditional_expression()) as CCSTConditionalExpression,
      logicalOrExpression: this.visit(ctx.logical_or_expression()) as CCSTLogicalOrExpression,
    }
  }

  visitConditionalExpressionTypeLogicalOr(
    ctx: ConditionalExpressionTypeLogicalOrContext,
  ): CCSTConditionalExpression {
    return {
      type: 'ConditionalExpression',
      subtype: 'LogicalOr',
      logicalOrExpression: this.visit(ctx.logical_or_expression()) as CCSTLogicalOrExpression,
    }
  }

  visitLogicalOrExpressionTypeLogicalAnd(
    ctx: LogicalOrExpressionTypeLogicalAndContext,
  ): CCSTLogicalOrExpression {
    return {
      type: 'LogicalOrExpression',
      subtype: 'LogicalAnd',
      logicalAndExpression: this.visit(ctx.logical_and_expression()) as CCSTLogicalAndExpression,
    }
  }

  visitLogicalOrExpressionTypeLogicalOr(
    ctx: LogicalOrExpressionTypeLogicalOrContext,
  ): CCSTLogicalOrExpression {
    return {
      type: 'LogicalOrExpression',
      subtype: 'LogicalOr',
      logicalAndExpression: this.visit(ctx.logical_and_expression()) as CCSTLogicalAndExpression,
      logicalOrExpression: this.visit(ctx.logical_or_expression()) as CCSTLogicalOrExpression,
    }
  }

  visitLogicalAndExpressionTypeLogicalAnd(
    ctx: LogicalAndExpressionTypeLogicalAndContext,
  ): CCSTLogicalAndExpression {
    return {
      type: 'LogicalAndExpression',
      subtype: 'LogicalAnd',
      logicalAndExpression: this.visit(ctx.logical_and_expression()) as CCSTLogicalAndExpression,
      inclusiveOrExpression: this.visit(ctx.inclusive_or_expression()) as CCSTInclusiveOrExpression,
    }
  }

  visitLogicalAndExpressionTypeInclusiveOr(
    ctx: LogicalAndExpressionTypeInclusiveOrContext,
  ): CCSTLogicalAndExpression {
    return {
      type: 'LogicalAndExpression',
      subtype: 'InclusiveOr',
      inclusiveOrExpression: this.visit(ctx.inclusive_or_expression()) as CCSTInclusiveOrExpression,
    }
  }

  visitInclusiveOrExpressionTypeExclusiveOr(
    ctx: InclusiveOrExpressionTypeExclusiveOrContext,
  ): CCSTInclusiveOrExpression {
    return {
      type: 'InclusiveOrExpression',
      subtype: 'ExclusiveOr',
      exclusiveOrExpression: this.visit(ctx.exclusive_or_expression()) as CCSTExclusiveOrExpression,
    }
  }

  visitInclusiveOrExpressionTypeInclusiveOr(
    ctx: InclusiveOrExpressionTypeInclusiveOrContext,
  ): CCSTInclusiveOrExpression {
    return {
      type: 'InclusiveOrExpression',
      subtype: 'InclusiveOr',
      exclusiveOrExpression: this.visit(ctx.exclusive_or_expression()) as CCSTExclusiveOrExpression,
      inclusiveOrExpression: this.visit(ctx.inclusive_or_expression()) as CCSTInclusiveOrExpression,
    }
  }

  visitExclusiveOrExpressionTypeAnd(
    ctx: ExclusiveOrExpressionTypeAndContext,
  ): CCSTExclusiveOrExpression {
    return {
      type: 'ExclusiveOrExpression',
      subtype: 'And',
      andExpression: this.visit(ctx.and_expression()) as CCSTAndExpression,
    }
  }

  visitExclusiveOrExpressionTypeExclusiveOr(
    ctx: ExclusiveOrExpressionTypeExclusiveOrContext,
  ): CCSTExclusiveOrExpression {
    return {
      type: 'ExclusiveOrExpression',
      subtype: 'ExclusiveOr',
      andExpression: this.visit(ctx.and_expression()) as CCSTAndExpression,
      exclusiveOrExpression: this.visit(ctx.exclusive_or_expression()) as CCSTExclusiveOrExpression,
    }
  }

  visitAndExpressionTypeAnd(ctx: AndExpressionTypeAndContext): CCSTAndExpression {
    return {
      type: 'AndExpression',
      subtype: 'And',
      andExpression: this.visit(ctx.and_expression()) as CCSTAndExpression,
      equalityExpression: this.visit(ctx.equality_expression()) as CCSTEqualityExpression,
    }
  }

  visitAndExpressionTypeEquality(ctx: AndExpressionTypeEqualityContext): CCSTAndExpression {
    return {
      type: 'AndExpression',
      subtype: 'Equality',
      equalityExpression: this.visit(ctx.equality_expression()) as CCSTEqualityExpression,
    }
  }

  visitEqualityExpressionTypeEqualityEqual(
    ctx: EqualityExpressionTypeEqualityEqualContext,
  ): CCSTEqualityExpression {
    return {
      type: 'EqualityExpression',
      subtype: 'Equality',
      equalityOperator: 'Equal',
      equalityExpression: this.visit(ctx.equality_expression()) as CCSTEqualityExpression,
      relationalExpression: this.visit(ctx.relational_expression()) as CCSTRelationalExpression,
    }
  }

  visitEqualityExpressionTypeEqualityNotEqual(
    ctx: EqualityExpressionTypeEqualityNotEqualContext,
  ): CCSTEqualityExpression {
    return {
      type: 'EqualityExpression',
      subtype: 'Equality',
      equalityOperator: 'NotEqual',
      equalityExpression: this.visit(ctx.equality_expression()) as CCSTEqualityExpression,
      relationalExpression: this.visit(ctx.relational_expression()) as CCSTRelationalExpression,
    }
  }

  visitEqualityExpressionTypeRelational(
    ctx: EqualityExpressionTypeRelationalContext,
  ): CCSTEqualityExpression {
    return {
      type: 'EqualityExpression',
      subtype: 'Relational',
      relationalExpression: this.visit(ctx.relational_expression()) as CCSTRelationalExpression,
    }
  }

  visitRelationalExpressionTypeRelationalGT(
    ctx: RelationalExpressionTypeRelationalGTContext,
  ): CCSTRelationalExpression {
    return {
      type: 'RelationalExpression',
      subtype: 'Relational',
      relationalOperator: 'GreaterThan',
      relationalExpression: this.visit(ctx.relational_expression()) as CCSTRelationalExpression,
      shiftExpression: this.visit(ctx.shift_expression()) as CCSTShiftExpression,
    }
  }

  visitRelationalExpressionTypeRelationalGTOE(
    ctx: RelationalExpressionTypeRelationalGTOEContext,
  ): CCSTRelationalExpression {
    return {
      type: 'RelationalExpression',
      subtype: 'Relational',
      relationalOperator: 'GreaterThanOrEqual',
      relationalExpression: this.visit(ctx.relational_expression()) as CCSTRelationalExpression,
      shiftExpression: this.visit(ctx.shift_expression()) as CCSTShiftExpression,
    }
  }

  visitRelationalExpressionTypeRelationalLT(
    ctx: RelationalExpressionTypeRelationalLTContext,
  ): CCSTRelationalExpression {
    return {
      type: 'RelationalExpression',
      subtype: 'Relational',
      relationalOperator: 'LessThan',
      relationalExpression: this.visit(ctx.relational_expression()) as CCSTRelationalExpression,
      shiftExpression: this.visit(ctx.shift_expression()) as CCSTShiftExpression,
    }
  }

  visitRelationalExpressionTypeRelationalLTOE(
    ctx: RelationalExpressionTypeRelationalLTOEContext,
  ): CCSTRelationalExpression {
    return {
      type: 'RelationalExpression',
      subtype: 'Relational',
      relationalOperator: 'LessThanOrEqual',
      relationalExpression: this.visit(ctx.relational_expression()) as CCSTRelationalExpression,
      shiftExpression: this.visit(ctx.shift_expression()) as CCSTShiftExpression,
    }
  }

  visitRelationalExpressionTypeShift(
    ctx: RelationalExpressionTypeShiftContext,
  ): CCSTRelationalExpression {
    return {
      type: 'RelationalExpression',
      subtype: 'Shift',
      shiftExpression: this.visit(ctx.shift_expression()) as CCSTShiftExpression,
    }
  }

  visitShfitExpressionTypeShiftLeft(ctx: ShfitExpressionTypeShiftLeftContext): CCSTShiftExpression {
    return {
      type: 'ShiftExpression',
      subtype: 'Shift',
      shiftOperator: 'ShiftLeft',
      shiftExpression: this.visit(ctx.shift_expression()) as CCSTShiftExpression,
      additiveExpression: this.visit(ctx.additive_expression()) as CCSTAdditiveExpression,
    }
  }

  visitShfitExpressionTypeShiftRight(
    ctx: ShfitExpressionTypeShiftRightContext,
  ): CCSTShiftExpression {
    return {
      type: 'ShiftExpression',
      subtype: 'Shift',
      shiftOperator: 'ShiftRight',
      shiftExpression: this.visit(ctx.shift_expression()) as CCSTShiftExpression,
      additiveExpression: this.visit(ctx.additive_expression()) as CCSTAdditiveExpression,
    }
  }

  visitShfitExpressionTypeAdditive(ctx: ShfitExpressionTypeAdditiveContext): CCSTShiftExpression {
    return {
      type: 'ShiftExpression',
      subtype: 'Additive',
      additiveExpression: this.visit(ctx.additive_expression()) as CCSTAdditiveExpression,
    }
  }

  visitAdditiveExpressionTypeAdditiveAdd(
    ctx: AdditiveExpressionTypeAdditiveAddContext,
  ): CCSTAdditiveExpression {
    return {
      type: 'AdditiveExpression',
      subtype: 'Additive',
      additiveOperator: 'Plus',
      additiveExpression: this.visit(ctx.additive_expression()) as CCSTAdditiveExpression,
      multiplicativeExpression: this.visit(
        ctx.multiplicative_expression(),
      ) as CCSTMultiplicativeExpression,
    }
  }

  visitAdditiveExpressionTypeAdditiveMinus(
    ctx: AdditiveExpressionTypeAdditiveMinusContext,
  ): CCSTAdditiveExpression {
    return {
      type: 'AdditiveExpression',
      subtype: 'Additive',
      additiveOperator: 'Minus',
      additiveExpression: this.visit(ctx.additive_expression()) as CCSTAdditiveExpression,
      multiplicativeExpression: this.visit(
        ctx.multiplicative_expression(),
      ) as CCSTMultiplicativeExpression,
    }
  }

  visitAdditiveExpressionTypeMultiplicative(
    ctx: AdditiveExpressionTypeMultiplicativeContext,
  ): CCSTAdditiveExpression {
    return {
      type: 'AdditiveExpression',
      subtype: 'Multiplicative',
      multiplicativeExpression: this.visit(
        ctx.multiplicative_expression(),
      ) as CCSTMultiplicativeExpression,
    }
  }

  visitMultiplicativeExpressionTypeCast(
    ctx: MultiplicativeExpressionTypeCastContext,
  ): CCSTMultiplicativeExpression {
    return {
      type: 'MultiplicativeExpression',
      subtype: 'Cast',
      castExpression: this.visit(ctx.cast_expression()) as CCSTCastExpression,
    }
  }

  visitMultiplicativeExpressionTypeMultiplicativeAsterick(
    ctx: MultiplicativeExpressionTypeMultiplicativeAsterickContext,
  ): CCSTMultiplicativeExpression {
    return {
      type: 'MultiplicativeExpression',
      subtype: 'Multiplicative',
      multiplicativeOperator: 'Asterick',
      multiplicativeExpression: this.visit(
        ctx.multiplicative_expression(),
      ) as CCSTMultiplicativeExpression,
      castExpression: this.visit(ctx.cast_expression()) as CCSTCastExpression,
    }
  }

  visitMultiplicativeExpressionTypeMultiplicativeBackslash(
    ctx: MultiplicativeExpressionTypeMultiplicativeBackslashContext,
  ): CCSTMultiplicativeExpression {
    return {
      type: 'MultiplicativeExpression',
      subtype: 'Multiplicative',
      multiplicativeOperator: 'Backslash',
      multiplicativeExpression: this.visit(
        ctx.multiplicative_expression(),
      ) as CCSTMultiplicativeExpression,
      castExpression: this.visit(ctx.cast_expression()) as CCSTCastExpression,
    }
  }

  visitMultiplicativeExpressionTypeMultiplicativePercent(
    ctx: MultiplicativeExpressionTypeMultiplicativePercentContext,
  ): CCSTMultiplicativeExpression {
    return {
      type: 'MultiplicativeExpression',
      subtype: 'Multiplicative',
      multiplicativeOperator: 'Percent',
      multiplicativeExpression: this.visit(
        ctx.multiplicative_expression(),
      ) as CCSTMultiplicativeExpression,
      castExpression: this.visit(ctx.cast_expression()) as CCSTCastExpression,
    }
  }

  visitCastExpressionTypeCast(ctx: CastExpressionTypeCastContext): CCSTCastExpression {
    return {
      type: 'CastExpression',
      subtype: 'Cast',
      typeName: this.visitType_name(ctx.type_name()),
      castExpression: this.visit(ctx.cast_expression()) as CCSTCastExpression,
    }
  }

  visitCastExpressionTypeUnary(ctx: CastExpressionTypeUnaryContext): CCSTCastExpression {
    return {
      type: 'CastExpression',
      subtype: 'Unary',
      unaryExpression: this.visit(ctx.unary_expression()) as CCSTUnaryExpression,
    }
  }

  visitType_name(ctx: Type_nameContext): CCSTTypeName {
    const abstractDeclaratorCtx = ctx.abstract_declarator()
    let abstractDeclarator: CCSTAbstractDeclarator | undefined = undefined
    if (abstractDeclaratorCtx) {
      abstractDeclarator = this.visit(abstractDeclaratorCtx) as CCSTAbstractDeclarator
    }

    return {
      type: 'TypeName',
      typeSpecifier: this.visitType_specifier(ctx.type_specifier()),
      abstractDeclarator: abstractDeclarator,
    }
  }

  visitAbstractDeclaratorTypeDirectAbstractDeclarator(
    ctx: AbstractDeclaratorTypeDirectAbstractDeclaratorContext,
  ): CCSTAbstractDeclarator {
    const pointerCtx = ctx.pointer()
    let pointer: CCSTPointer | undefined = undefined
    if (pointerCtx) {
      pointer = this.visitPointer(pointerCtx)
    }

    return {
      type: 'AbstractDeclarator',
      pointer: pointer,
      directAbstractDeclarator: this.visit(
        ctx.direct_abstract_declarator(),
      ) as CCSTDirectAbstractDeclarator,
    }
  }

  visitAbstractDeclaratorTypePointer(
    ctx: AbstractDeclaratorTypePointerContext,
  ): CCSTAbstractDeclarator {
    return {
      type: 'AbstractDeclarator',
      pointer: this.visitPointer(ctx.pointer()),
    }
  }

  visitDirectAbstractDeclaratorTypeArray(
    ctx: DirectAbstractDeclaratorTypeArrayContext,
  ): CCSTDirectAbstractDeclarator {
    const constantExpressionCtx = ctx.constant_expression()
    let constantExpression: CCSTConstantExpression | undefined = undefined
    if (constantExpressionCtx) {
      constantExpression = this.visit(constantExpressionCtx) as CCSTConstantExpression
    }

    return {
      type: 'DirectAbstractDeclarator',
      subtype: 'Array',
      constantExpression: constantExpression,
    }
  }

  visitDirectAbstractDeclaratorTypeNestedAbstractDeclarator(
    ctx: DirectAbstractDeclaratorTypeNestedAbstractDeclaratorContext,
  ): CCSTDirectAbstractDeclarator {
    return {
      type: 'DirectAbstractDeclarator',
      subtype: 'NestedAbstractDeclarator',
      abstractDeclarator: this.visit(ctx.abstract_declarator()) as CCSTAbstractDeclarator,
    }
  }

  visitDirectAbstractDeclaratorTypeRecursiveArray(
    ctx: DirectAbstractDeclaratorTypeRecursiveArrayContext,
  ): CCSTDirectAbstractDeclarator {
    const constantExpressionCtx = ctx.constant_expression()
    let constantExpression: CCSTConstantExpression | undefined = undefined
    if (constantExpressionCtx) {
      constantExpression = this.visit(constantExpressionCtx) as CCSTConstantExpression
    }

    return {
      type: 'DirectAbstractDeclarator',
      subtype: 'RecursiveArray',
      constantExpression: constantExpression,
      directAbstractDeclarator: this.visit(
        ctx.direct_abstract_declarator(),
      ) as CCSTDirectAbstractDeclarator,
    }
  }

  visitDirectAbstractDeclaratorTypeRecursiveParameters(
    ctx: DirectAbstractDeclaratorTypeRecursiveParametersContext,
  ): CCSTDirectAbstractDeclarator {
    const parameterTypeListCtx = ctx.parameter_type_list()
    let parameterTypeList: CCSTParameterTypeList | undefined = undefined
    if (parameterTypeListCtx) {
      parameterTypeList = this.visitParameter_type_list(parameterTypeListCtx)
    }

    return {
      type: 'DirectAbstractDeclarator',
      subtype: 'RecursiveParameters',
      parameterTypeList: parameterTypeList,
      directAbstractDeclarator: this.visit(
        ctx.direct_abstract_declarator(),
      ) as CCSTDirectAbstractDeclarator,
    }
  }

  visitDirectAbstractDeclaratorTypeParameters(
    ctx: DirectAbstractDeclaratorTypeParametersContext,
  ): CCSTDirectAbstractDeclarator {
    const parameterTypeListCtx = ctx.parameter_type_list()
    let parameterTypeList: CCSTParameterTypeList | undefined = undefined
    if (parameterTypeListCtx) {
      parameterTypeList = this.visitParameter_type_list(parameterTypeListCtx)
    }

    return {
      type: 'DirectAbstractDeclarator',
      subtype: 'Parameters',
      parameterTypeList: parameterTypeList,
    }
  }

  visitUnaryExpressionTypeDecrement(ctx: UnaryExpressionTypeDecrementContext): CCSTUnaryExpression {
    return {
      type: 'UnaryExpression',
      subtype: 'Increment',
      incrementType: 'Decrement',
      unaryExpression: this.visit(ctx.unary_expression()) as CCSTUnaryExpression,
    }
  }

  visitUnaryExpressionTypeIncrement(ctx: UnaryExpressionTypeIncrementContext): CCSTUnaryExpression {
    return {
      type: 'UnaryExpression',
      subtype: 'Increment',
      incrementType: 'Increment',
      unaryExpression: this.visit(ctx.unary_expression()) as CCSTUnaryExpression,
    }
  }

  visitUnaryExpressionTypePostfix(ctx: UnaryExpressionTypePostfixContext): CCSTUnaryExpression {
    return {
      type: 'UnaryExpression',
      subtype: 'Postfix',
      postfixExpression: this.visit(ctx.postfix_expression()) as CCSTPostfixExpression,
    }
  }

  visitUnaryExpressionTypeSizeOf(ctx: UnaryExpressionTypeSizeOfContext): CCSTUnaryExpression {
    return {
      type: 'UnaryExpression',
      subtype: 'SizeOf',
      typeName: this.visitType_name(ctx.type_name()),
    }
  }

  visitUnaryExpressionTypeUnaryOperator(
    ctx: UnaryExpressionTypeUnaryOperatorContext,
  ): CCSTUnaryExpression {
    return {
      type: 'UnaryExpression',
      subtype: 'UnaryOperator',
      unaryOperator: this.visitUnary_operator(ctx.unary_operator()),
      castExpression: this.visit(ctx.cast_expression()) as CCSTCastExpression,
    }
  }

  visitPostfixExpressionTypeArray(ctx: PostfixExpressionTypeArrayContext): CCSTPostfixExpression {
    return {
      type: 'PostfixExpression',
      subtype: 'Array',
      assignmentExpression: this.visit(ctx.assignment_expression()) as CCSTAssignmentExpression,
      postfixExpression: this.visit(ctx.postfix_expression()) as CCSTPostfixExpression,
    }
  }

  visitPostfixExpressionTypeDecrement(
    ctx: PostfixExpressionTypeDecrementContext,
  ): CCSTPostfixExpression {
    return {
      type: 'PostfixExpression',
      subtype: 'Increment',
      incrementType: 'Decrement',
      postfixExpression: this.visit(ctx.postfix_expression()) as CCSTPostfixExpression,
    }
  }

  visitPostfixExpressionTypeDerefMember(
    ctx: PostfixExpressionTypeDerefMemberContext,
  ): CCSTPostfixExpression {
    return {
      type: 'PostfixExpression',
      subtype: 'DerefMember',
      identifier: this.visitIdentifier(ctx.identifier()),
      postfixExpression: this.visit(ctx.postfix_expression()) as CCSTPostfixExpression,
    }
  }

  visitPostfixExpressionTypeFunctionCall(
    ctx: PostfixExpressionTypeFunctionCallContext,
  ): CCSTPostfixExpression {
    return {
      type: 'PostfixExpression',
      subtype: 'FunctionCall',
      expression: this.visit(ctx.expression()) as CCSTExpression,
      postfixExpression: this.visit(ctx.postfix_expression()) as CCSTPostfixExpression,
    }
  }

  visitPostfixExpressionTypeIncrement(
    ctx: PostfixExpressionTypeIncrementContext,
  ): CCSTPostfixExpression {
    return {
      type: 'PostfixExpression',
      subtype: 'Increment',
      incrementType: 'Increment',
      postfixExpression: this.visit(ctx.postfix_expression()) as CCSTPostfixExpression,
    }
  }

  visitPostfixExpressionTypeMember(ctx: PostfixExpressionTypeMemberContext): CCSTPostfixExpression {
    return {
      type: 'PostfixExpression',
      subtype: 'Member',
      identifier: this.visitIdentifier(ctx.identifier()),
      postfixExpression: this.visit(ctx.postfix_expression()) as CCSTPostfixExpression,
    }
  }

  visitPostfixExpressionTypePrimary(
    ctx: PostfixExpressionTypePrimaryContext,
  ): CCSTPostfixExpression {
    return {
      type: 'PostfixExpression',
      subtype: 'Primary',
      primaryExpression: this.visit(ctx.primary_expression()) as CCSTPrimaryExpression,
    }
  }

  visitPrimaryExpressionTypeConstant(
    ctx: PrimaryExpressionTypeConstantContext,
  ): CCSTPrimaryExpression {
    return {
      type: 'PrimaryExpression',
      subtype: 'Constant',
      constant: this.visit(ctx.constant()) as CCSTConstant,
    }
  }

  visitPrimaryExpressionTypeIdentifier(
    ctx: PrimaryExpressionTypeIdentifierContext,
  ): CCSTPrimaryExpression {
    return {
      type: 'PrimaryExpression',
      subtype: 'Identifier',
      identifier: this.visitIdentifier(ctx.identifier()),
    }
  }

  visitPrimaryExpressionTypeNestedExpression(
    ctx: PrimaryExpressionTypeNestedExpressionContext,
  ): CCSTPrimaryExpression {
    return {
      type: 'PrimaryExpression',
      subtype: 'NestedExpression',
      expression: this.visit(ctx.expression()) as CCSTExpression,
    }
  }

  visitConstantTypeCharacter(ctx: ConstantTypeCharacterContext): CCSTConstant {
    return {
      type: 'Constant',
      subtype: 'Character',
      characterConstant: this.visitCharacter_constant(ctx.character_constant()),
    }
  }

  visitConstantTypeFloat(ctx: ConstantTypeFloatContext): CCSTConstant {
    return {
      type: 'Constant',
      subtype: 'Float',
      floatConstant: this.visitFloat_constant(ctx.float_constant()),
    }
  }

  visitConstantTypeInteger(ctx: ConstantTypeIntegerContext): CCSTConstant {
    return {
      type: 'Constant',
      subtype: 'Integer',
      integerConstant: this.visitInteger_constant(ctx.integer_constant()),
    }
  }

  visitCharacter_constant(ctx: Character_constantContext): CCSTCharacterConstant {
    return {
      type: 'CharacterConstant',
      value: ctx.text,
    }
  }

  visitFloat_constant(ctx: Float_constantContext): CCSTFloatConstant {
    return {
      type: 'FloatConstant',
      value: ctx.text,
    }
  }

  visitInteger_constant(ctx: Integer_constantContext): CCSTIntegerConstant {
    return {
      type: 'IntegerConstant',
      value: ctx.text,
    }
  }

  visitCompound_statement(ctx: Compound_statementContext): CCSTCompoundStatement {
    const statements = ctx.statement().map(x => this.visit(x) as CCSTStatement)
    return {
      type: 'CompoundStatement',
      statements: statements,
    }
  }

  visitIf_statement(ctx: If_statementContext): CCSTIfStatement {
    return {
      type: 'IfStatement',
      expression: this.visit(ctx.expression()) as CCSTExpression,
      ifTrue: this.visit(ctx._if_true) as CCSTStatement,
      ifFalse:
        ctx._if_false !== undefined ? (this.visit(ctx._if_false) as CCSTStatement) : undefined,
    }
  }

  visitSwitch_statement(ctx: Switch_statementContext): CCSTSwitchStatement {
    return {
      type: 'SwitchStatement',
      expression: this.visit(ctx.expression()) as CCSTExpression,
      switchBody: this.visitSwitch_body(ctx.switch_body()),
    }
  }

  visitSwitch_body(ctx: Switch_bodyContext): CCSTSwitchBody {
    const switchDefaultBodyContext = ctx.switch_default_body()
    return {
      type: 'SwitchBody',
      switchCaseBodies: ctx.switch_case_body().map(x => this.visitSwitch_case_body(x)),
      switchDefaultBody:
        switchDefaultBodyContext !== undefined
          ? this.visitSwitch_default_body(switchDefaultBodyContext)
          : undefined,
    }
  }

  visitSwitch_case_body(ctx: Switch_case_bodyContext): CCSTSwitchCaseBody {
    return {
      type: 'SwitchCaseBody',
      expression: this.visit(ctx.expression()) as CCSTExpression,
      statements: ctx.statement().map(x => this.visit(x) as CCSTStatement),
    }
  }

  visitSwitch_default_body(ctx: Switch_default_bodyContext): CCSTSwitchDefaultBody {
    return {
      type: 'SwitchDefaultBody',
      statements: ctx.statement().map(x => this.visit(x) as CCSTStatement),
    }
  }

  visitWhile_statement(ctx: While_statementContext): CCSTWhileStatement {
    return {
      type: 'WhileStatement',
      expression: this.visit(ctx.expression()) as CCSTExpression,
      statement: this.visit(ctx.statement()) as CCSTStatement,
    }
  }

  visitDo_statement(ctx: Do_statementContext): CCSTDoStatement {
    return {
      type: 'DoStatement',
      expression: this.visit(ctx.expression()) as CCSTExpression,
      statement: this.visit(ctx.statement()) as CCSTStatement,
    }
  }

  visitFor_statement(ctx: For_statementContext): CCSTForStatement {
    const initDeclarationContext = ctx._init
    const testExpressionContext = ctx._test
    const updateExpressionContext = ctx._update
    return {
      type: 'ForStatement',
      initDeclaration:
        initDeclarationContext !== undefined
          ? this.visitFor_init_declaration(initDeclarationContext)
          : undefined,
      testExpression:
        testExpressionContext !== undefined
          ? (this.visit(testExpressionContext) as CCSTExpression)
          : undefined,
      updateExpression:
        updateExpressionContext !== undefined
          ? (this.visit(updateExpressionContext) as CCSTExpression)
          : undefined,
      statement: this.visit(ctx.statement()) as CCSTStatement,
    }
  }

  visitFor_init_declaration(ctx: For_init_declarationContext): CCSTForInitDeclaration {
    return {
      type: 'ForInitDeclaration',
      declarationSpecifiers: this.visitDeclaration_specifiers(ctx.declaration_specifiers()),
      initDeclaratorList: this.visitInit_declarator_list(ctx.init_declarator_list()),
    }
  }

  visitGoto_statement(ctx: Goto_statementContext): CCSTGotoStatement {
    return {
      type: 'GotoStatement',
      identifier: this.visitIdentifier(ctx.identifier()),
    }
  }

  visitContinue_statement(ctx: Continue_statementContext): CCSTContinueStatement {
    return {
      type: 'ContinueStatement',
    }
  }

  visitBreak_statement(ctx: Break_statementContext): CCSTBreakStatement {
    return {
      type: 'BreakStatement',
    }
  }

  visitReturn_statement(ctx: Return_statementContext): CCSTReturnStatement {
    const expressionCtx = ctx.expression()
    let expression = undefined
    if (expressionCtx) {
      expression = this.visit(expressionCtx) as CCSTExpression
    }

    return {
      type: 'ReturnStatement',
      expression: expression,
    }
  }

  visitStatementTypeLabeled(ctx: StatementTypeLabeledContext): CCSTStatement {
    return {
      type: 'Statement',
      subtype: 'Labeled',
      statement: this.visitLabeled_statement(ctx.labeled_statement()),
    }
  }

  visitStatementTypeDeclaration(ctx: StatementTypeDeclarationContext): CCSTStatement {
    return {
      type: 'Statement',
      subtype: 'Declaration',
      statement: this.visitDeclaration_statement(ctx.declaration_statement()),
    }
  }

  visitStatementTypeExpression(ctx: StatementTypeExpressionContext): CCSTStatement {
    return {
      type: 'Statement',
      subtype: 'Expression',
      statement: this.visitExpression_statement(ctx.expression_statement()),
    }
  }

  visitStatementTypeCompound(ctx: StatementTypeCompoundContext): CCSTStatement {
    return {
      type: 'Statement',
      subtype: 'Compound',
      statement: this.visitCompound_statement(ctx.compound_statement()),
    }
  }

  visitStatementTypeIf(ctx: StatementTypeIfContext): CCSTStatement {
    return {
      type: 'Statement',
      subtype: 'If',
      statement: this.visitIf_statement(ctx.if_statement()),
    }
  }

  visitStatementTypeSwitch(ctx: StatementTypeSwitchContext): CCSTStatement {
    return {
      type: 'Statement',
      subtype: 'Switch',
      statement: this.visitSwitch_statement(ctx.switch_statement()),
    }
  }

  visitStatementTypeWhile(ctx: StatementTypeWhileContext): CCSTStatement {
    return {
      type: 'Statement',
      subtype: 'While',
      statement: this.visitWhile_statement(ctx.while_statement()),
    }
  }

  visitStatementTypeDo(ctx: StatementTypeDoContext): CCSTStatement {
    return {
      type: 'Statement',
      subtype: 'Do',
      statement: this.visitDo_statement(ctx.do_statement()),
    }
  }

  visitStatementTypeFor(ctx: StatementTypeForContext): CCSTStatement {
    return {
      type: 'Statement',
      subtype: 'For',
      statement: this.visitFor_statement(ctx.for_statement()),
    }
  }

  visitStatementTypeGoto(ctx: StatementTypeGotoContext): CCSTStatement {
    return {
      type: 'Statement',
      subtype: 'Goto',
      statement: this.visitGoto_statement(ctx.goto_statement()),
    }
  }

  visitStatementTypeContinue(ctx: StatementTypeContinueContext): CCSTStatement {
    return {
      type: 'Statement',
      subtype: 'Continue',
      statement: this.visitContinue_statement(ctx.continue_statement()),
    }
  }

  visitStatementTypeBreak(ctx: StatementTypeBreakContext): CCSTStatement {
    return {
      type: 'Statement',
      subtype: 'Break',
      statement: this.visitBreak_statement(ctx.break_statement()),
    }
  }

  visitStatementTypeReturn(ctx: StatementTypeReturnContext): CCSTStatement {
    return {
      type: 'Statement',
      subtype: 'Return',
      statement: this.visitReturn_statement(ctx.return_statement()),
    }
  }

  visitIdentifier(ctx: IdentifierContext): CCSTIdentifier {
    return {
      type: 'Identifier',
      name: ctx.text,
    }
  }

  visitPointer(ctx: PointerContext): CCSTPointer {
    return {
      type: 'Pointer',
      text: ctx.text,
    }
  }

  visitType_specifier(ctx: Type_specifierContext): CCSTTypeSpecifier {
    return {
      type: 'TypeSpecifier',
      baseType: ctx.text,
    }
  }

  visitAssignment_operator(ctx: Assignment_operatorContext): CCSTAssignmentOperator {
    return {
      type: 'AssignmentOperator',
      operator: ctx.BITWISE_AND_EQUAL()
        ? 'BitwiseAndEqual'
        : ctx.BITWISE_OR_EQUAL()
        ? 'BitwiseOrEqual'
        : ctx.BITWISE_XOR_EQUAL()
        ? 'BitwiseXorEqual'
        : ctx.DIVIDE_EQUAL()
        ? 'DivideEqual'
        : ctx.EQUAL()
        ? 'Equal'
        : ctx.MINUS_EQUAL()
        ? 'MinusEqual'
        : ctx.MODULO_EQUAL()
        ? 'ModuloEqual'
        : ctx.PLUS_EQUAL()
        ? 'PlusEqual'
        : ctx.SHIFT_LEFT_EQUAL()
        ? 'ShiftLeftEqual'
        : ctx.SHIFT_RIGHT_EQUAL()
        ? 'ShiftRightEqual'
        : 'TimesEqual',
    }
  }

  visitUnary_operator(ctx: Unary_operatorContext): CCSTUnaryOperator {
    return {
      type: 'UnaryOperator',
      operator: ctx.AMPERSAND()
        ? 'Ampersand'
        : ctx.ASTERICK()
        ? 'Asterick'
        : ctx.EXCLAMATION_MARK()
        ? 'Exclamationmark'
        : ctx.MINUS()
        ? 'Minus'
        : ctx.PLUS()
        ? 'Plus'
        : 'Tilda',
    }
  }

  visit(tree: ParseTree): CCSTNode {
    return tree.accept(this)
  }

  visitChildren(node: RuleNode): CCSTNode {
    throw new Error('Visit method not defined for type')
  }

  visitTerminal(node: TerminalNode): CCSTNode {
    return node.accept(this)
  }

  visitErrorNode(node: ErrorNode): CCSTNode {
    throw new FatalSyntaxError(
      {
        start: {
          line: node.symbol.line,
          column: node.symbol.charPositionInLine,
        },
        end: {
          line: node.symbol.line,
          column: node.symbol.charPositionInLine + 1,
        },
      },
      `invalid syntax ${node.text}`,
    )
  }
}

function convertExpression(expression: ProgramContext): CCSTNode {
  const generator = new ExpressionGenerator()
  return expression.accept(generator)
}

function convertSource(expression: ProgramContext): CCSTProgram {
  return convertExpression(expression) as CCSTProgram
}

export function parse(source: string, context: Context) {
  let program: CCSTProgram | undefined

  if (context.variant === 'calc') {
    const inputStream = CharStreams.fromString(source)
    const lexer = new CalcLexer(inputStream)
    const tokenStream = new CommonTokenStream(lexer)
    const parser = new CalcParser(tokenStream)
    parser.buildParseTree = true
    try {
      const tree = parser.program()
      program = convertSource(tree)
    } catch (error) {
      if (error instanceof FatalSyntaxError) {
        context.errors.push(error)
      } else {
        throw error
      }
    }
    const hasErrors = context.errors.find(m => m.severity === ErrorSeverity.ERROR)
    if (program && !hasErrors) {
      return program
    } else {
      return undefined
    }
  } else {
    return undefined
  }
}
