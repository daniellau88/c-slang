// Generated from ./src/lang/Calc.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { CalcListener } from "./CalcListener";
import { CalcVisitor } from "./CalcVisitor";


export class CalcParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly CARET = 2;
	public static readonly ASTERICK = 3;
	public static readonly BACKSLASH = 4;
	public static readonly PLUS = 5;
	public static readonly MINUS = 6;
	public static readonly PERCENT = 7;
	public static readonly AMPERSAND = 8;
	public static readonly TILDA = 9;
	public static readonly EXCLAMATION_MARK = 10;
	public static readonly VERTICAL_BAR = 11;
	public static readonly QUESTION_MARK = 12;
	public static readonly COLON = 13;
	public static readonly SEMICOLON = 14;
	public static readonly COMMA = 15;
	public static readonly FULLSTOP = 16;
	public static readonly RIGHT_ARROW = 17;
	public static readonly OPEN_PARENTHESES = 18;
	public static readonly CLOSE_PARENTHESES = 19;
	public static readonly OPEN_SQUARE_BRACKET = 20;
	public static readonly CLOSE_SQUARE_BRACKET = 21;
	public static readonly OPEN_CURLY_BRACKET = 22;
	public static readonly CLOSE_CURLY_BRACKET = 23;
	public static readonly INCREMENT = 24;
	public static readonly DECREMENT = 25;
	public static readonly EQUAL = 26;
	public static readonly TIMES_EQUAL = 27;
	public static readonly DIVIDE_EQUAL = 28;
	public static readonly MODULO_EQUAL = 29;
	public static readonly PLUS_EQUAL = 30;
	public static readonly MINUS_EQUAL = 31;
	public static readonly SHIFT_LEFT_EQUAL = 32;
	public static readonly SHIFT_RIGHT_EQUAL = 33;
	public static readonly BITWISE_AND_EQUAL = 34;
	public static readonly BITWISE_XOR_EQUAL = 35;
	public static readonly BITWISE_OR_EQUAL = 36;
	public static readonly BOOLEAN_AND = 37;
	public static readonly BOOLEAN_OR = 38;
	public static readonly EQUALITY_EQUAL = 39;
	public static readonly EQUALITY_NOT_EQUAL = 40;
	public static readonly RELATIONAL_GREATER_THAN = 41;
	public static readonly RELATIONAL_LESS_THAN = 42;
	public static readonly RELATIONAL_LESS_THAN_OR_EQUAL = 43;
	public static readonly RELATIONAL_GREATER_THAN_OR_EQUAL = 44;
	public static readonly SHIFT_LEFT = 45;
	public static readonly SHIFT_RIGHT = 46;
	public static readonly WHITESPACE = 47;
	public static readonly SIZE_OF = 48;
	public static readonly CASE = 49;
	public static readonly DEFAULT = 50;
	public static readonly IF = 51;
	public static readonly ELSE = 52;
	public static readonly SWITCH = 53;
	public static readonly WHILE = 54;
	public static readonly DO = 55;
	public static readonly FOR = 56;
	public static readonly GOTO = 57;
	public static readonly CONTINUE = 58;
	public static readonly BREAK = 59;
	public static readonly RETURN = 60;
	public static readonly VOID_TYPE_SPECIFIER = 61;
	public static readonly CHAR_TYPE_SPECIFIER = 62;
	public static readonly SHORT_TYPE_SPECIFIER = 63;
	public static readonly INT_TYPE_SPECIFIER = 64;
	public static readonly LONG_TYPE_SPECIFIER = 65;
	public static readonly FLOAT_TYPE_SPECIFIER = 66;
	public static readonly DOUBLE_TYPE_SPECIFIER = 67;
	public static readonly SIGNED_TYPE_SPECIFIER = 68;
	public static readonly UNSIGNED_TYPE_SPECIFIER = 69;
	public static readonly CONST_TYPE_QUALIFIER = 70;
	public static readonly VOLATILE_TYPE_QUALIFIER = 71;
	public static readonly INTEGER = 72;
	public static readonly FLOAT = 73;
	public static readonly CHAR = 74;
	public static readonly IDENTIFIER = 75;
	public static readonly RULE_unary_operator = 0;
	public static readonly RULE_assignment_operator = 1;
	public static readonly RULE_end_statement_delimiter = 2;
	public static readonly RULE_type_sign_specifier = 3;
	public static readonly RULE_type_specifier = 4;
	public static readonly RULE_type_qualifier = 5;
	public static readonly RULE_identifier = 6;
	public static readonly RULE_start = 7;
	public static readonly RULE_program = 8;
	public static readonly RULE_function_definition = 9;
	public static readonly RULE_return_type = 10;
	public static readonly RULE_parameter_type_list = 11;
	public static readonly RULE_parameter_list = 12;
	public static readonly RULE_parameter_declaration = 13;
	public static readonly RULE_array_declaration = 14;
	public static readonly RULE_statement = 15;
	public static readonly RULE_labeled_statement = 16;
	public static readonly RULE_declaration_statement = 17;
	public static readonly RULE_declaration_specifiers = 18;
	public static readonly RULE_init_declarator_list = 19;
	public static readonly RULE_init_declarator = 20;
	public static readonly RULE_declarator = 21;
	public static readonly RULE_pointer = 22;
	public static readonly RULE_direct_declarator = 23;
	public static readonly RULE_initializer = 24;
	public static readonly RULE_initializer_list = 25;
	public static readonly RULE_expression_statement = 26;
	public static readonly RULE_expression = 27;
	public static readonly RULE_assignment_expression = 28;
	public static readonly RULE_constant_expression = 29;
	public static readonly RULE_conditional_expression = 30;
	public static readonly RULE_logical_or_expression = 31;
	public static readonly RULE_logical_and_expression = 32;
	public static readonly RULE_inclusive_or_expression = 33;
	public static readonly RULE_exclusive_or_expression = 34;
	public static readonly RULE_and_expression = 35;
	public static readonly RULE_equality_expression = 36;
	public static readonly RULE_relational_expression = 37;
	public static readonly RULE_shift_expression = 38;
	public static readonly RULE_additive_expression = 39;
	public static readonly RULE_multiplicative_expression = 40;
	public static readonly RULE_cast_expression = 41;
	public static readonly RULE_type_name = 42;
	public static readonly RULE_abstract_declarator = 43;
	public static readonly RULE_direct_abstract_declarator = 44;
	public static readonly RULE_unary_expression = 45;
	public static readonly RULE_postfix_expression = 46;
	public static readonly RULE_primary_expression = 47;
	public static readonly RULE_constant = 48;
	public static readonly RULE_integer_constant = 49;
	public static readonly RULE_float_constant = 50;
	public static readonly RULE_character_constant = 51;
	public static readonly RULE_compound_statement = 52;
	public static readonly RULE_selection_statement = 53;
	public static readonly RULE_iteration_statement = 54;
	public static readonly RULE_jump_statement = 55;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"unary_operator", "assignment_operator", "end_statement_delimiter", "type_sign_specifier", 
		"type_specifier", "type_qualifier", "identifier", "start", "program", 
		"function_definition", "return_type", "parameter_type_list", "parameter_list", 
		"parameter_declaration", "array_declaration", "statement", "labeled_statement", 
		"declaration_statement", "declaration_specifiers", "init_declarator_list", 
		"init_declarator", "declarator", "pointer", "direct_declarator", "initializer", 
		"initializer_list", "expression_statement", "expression", "assignment_expression", 
		"constant_expression", "conditional_expression", "logical_or_expression", 
		"logical_and_expression", "inclusive_or_expression", "exclusive_or_expression", 
		"and_expression", "equality_expression", "relational_expression", "shift_expression", 
		"additive_expression", "multiplicative_expression", "cast_expression", 
		"type_name", "abstract_declarator", "direct_abstract_declarator", "unary_expression", 
		"postfix_expression", "primary_expression", "constant", "integer_constant", 
		"float_constant", "character_constant", "compound_statement", "selection_statement", 
		"iteration_statement", "jump_statement",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'...'", "'^'", "'*'", "'/'", "'+'", "'-'", "'%'", "'&'", "'~'", 
		"'!'", "'|'", "'?'", "':'", "';'", "','", "'.'", "'->'", "'('", "')'", 
		"'['", "']'", "'{'", "'}'", "'++'", "'--'", "'='", "'*='", "'/='", "'%='", 
		"'+='", "'-='", "'<<='", "'>>='", "'&='", "'^='", "'|='", "'&&'", "'||'", 
		"'=='", "'!='", "'>'", "'<'", "'<='", "'>='", "'<<'", "'>>'", undefined, 
		"'sizeof'", "'case'", "'default'", "'if'", "'else'", "'switch'", "'while'", 
		"'do'", "'for'", "'goto'", "'continue'", "'break'", "'return'", "'void'", 
		"'char'", "'short'", "'int'", "'long'", "'float'", "'double'", "'signed'", 
		"'unsigned'", "'const'", "'volatile'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, "CARET", "ASTERICK", "BACKSLASH", "PLUS", "MINUS", 
		"PERCENT", "AMPERSAND", "TILDA", "EXCLAMATION_MARK", "VERTICAL_BAR", "QUESTION_MARK", 
		"COLON", "SEMICOLON", "COMMA", "FULLSTOP", "RIGHT_ARROW", "OPEN_PARENTHESES", 
		"CLOSE_PARENTHESES", "OPEN_SQUARE_BRACKET", "CLOSE_SQUARE_BRACKET", "OPEN_CURLY_BRACKET", 
		"CLOSE_CURLY_BRACKET", "INCREMENT", "DECREMENT", "EQUAL", "TIMES_EQUAL", 
		"DIVIDE_EQUAL", "MODULO_EQUAL", "PLUS_EQUAL", "MINUS_EQUAL", "SHIFT_LEFT_EQUAL", 
		"SHIFT_RIGHT_EQUAL", "BITWISE_AND_EQUAL", "BITWISE_XOR_EQUAL", "BITWISE_OR_EQUAL", 
		"BOOLEAN_AND", "BOOLEAN_OR", "EQUALITY_EQUAL", "EQUALITY_NOT_EQUAL", "RELATIONAL_GREATER_THAN", 
		"RELATIONAL_LESS_THAN", "RELATIONAL_LESS_THAN_OR_EQUAL", "RELATIONAL_GREATER_THAN_OR_EQUAL", 
		"SHIFT_LEFT", "SHIFT_RIGHT", "WHITESPACE", "SIZE_OF", "CASE", "DEFAULT", 
		"IF", "ELSE", "SWITCH", "WHILE", "DO", "FOR", "GOTO", "CONTINUE", "BREAK", 
		"RETURN", "VOID_TYPE_SPECIFIER", "CHAR_TYPE_SPECIFIER", "SHORT_TYPE_SPECIFIER", 
		"INT_TYPE_SPECIFIER", "LONG_TYPE_SPECIFIER", "FLOAT_TYPE_SPECIFIER", "DOUBLE_TYPE_SPECIFIER", 
		"SIGNED_TYPE_SPECIFIER", "UNSIGNED_TYPE_SPECIFIER", "CONST_TYPE_QUALIFIER", 
		"VOLATILE_TYPE_QUALIFIER", "INTEGER", "FLOAT", "CHAR", "IDENTIFIER",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CalcParser._LITERAL_NAMES, CalcParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CalcParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Calc.g4"; }

	// @Override
	public get ruleNames(): string[] { return CalcParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return CalcParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(CalcParser._ATN, this);
	}
	// @RuleVersion(0)
	public unary_operator(): Unary_operatorContext {
		let _localctx: Unary_operatorContext = new Unary_operatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, CalcParser.RULE_unary_operator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 112;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CalcParser.ASTERICK) | (1 << CalcParser.PLUS) | (1 << CalcParser.MINUS) | (1 << CalcParser.AMPERSAND) | (1 << CalcParser.TILDA) | (1 << CalcParser.EXCLAMATION_MARK))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignment_operator(): Assignment_operatorContext {
		let _localctx: Assignment_operatorContext = new Assignment_operatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, CalcParser.RULE_assignment_operator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 114;
			_la = this._input.LA(1);
			if (!(((((_la - 26)) & ~0x1F) === 0 && ((1 << (_la - 26)) & ((1 << (CalcParser.EQUAL - 26)) | (1 << (CalcParser.TIMES_EQUAL - 26)) | (1 << (CalcParser.DIVIDE_EQUAL - 26)) | (1 << (CalcParser.MODULO_EQUAL - 26)) | (1 << (CalcParser.PLUS_EQUAL - 26)) | (1 << (CalcParser.MINUS_EQUAL - 26)) | (1 << (CalcParser.SHIFT_LEFT_EQUAL - 26)) | (1 << (CalcParser.SHIFT_RIGHT_EQUAL - 26)) | (1 << (CalcParser.BITWISE_AND_EQUAL - 26)) | (1 << (CalcParser.BITWISE_XOR_EQUAL - 26)) | (1 << (CalcParser.BITWISE_OR_EQUAL - 26)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public end_statement_delimiter(): End_statement_delimiterContext {
		let _localctx: End_statement_delimiterContext = new End_statement_delimiterContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, CalcParser.RULE_end_statement_delimiter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 116;
			this.match(CalcParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type_sign_specifier(): Type_sign_specifierContext {
		let _localctx: Type_sign_specifierContext = new Type_sign_specifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, CalcParser.RULE_type_sign_specifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 118;
			_la = this._input.LA(1);
			if (!(_la === CalcParser.SIGNED_TYPE_SPECIFIER || _la === CalcParser.UNSIGNED_TYPE_SPECIFIER)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type_specifier(): Type_specifierContext {
		let _localctx: Type_specifierContext = new Type_specifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, CalcParser.RULE_type_specifier);
		let _la: number;
		try {
			this.state = 139;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 120;
				this.match(CalcParser.VOID_TYPE_SPECIFIER);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 122;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CalcParser.SIGNED_TYPE_SPECIFIER || _la === CalcParser.UNSIGNED_TYPE_SPECIFIER) {
					{
					this.state = 121;
					this.type_sign_specifier();
					}
				}

				this.state = 124;
				this.match(CalcParser.CHAR_TYPE_SPECIFIER);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 126;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CalcParser.SIGNED_TYPE_SPECIFIER || _la === CalcParser.UNSIGNED_TYPE_SPECIFIER) {
					{
					this.state = 125;
					this.type_sign_specifier();
					}
				}

				this.state = 128;
				this.match(CalcParser.SHORT_TYPE_SPECIFIER);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 130;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CalcParser.SIGNED_TYPE_SPECIFIER || _la === CalcParser.UNSIGNED_TYPE_SPECIFIER) {
					{
					this.state = 129;
					this.type_sign_specifier();
					}
				}

				this.state = 132;
				this.match(CalcParser.INT_TYPE_SPECIFIER);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 134;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CalcParser.SIGNED_TYPE_SPECIFIER || _la === CalcParser.UNSIGNED_TYPE_SPECIFIER) {
					{
					this.state = 133;
					this.type_sign_specifier();
					}
				}

				this.state = 136;
				this.match(CalcParser.LONG_TYPE_SPECIFIER);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 137;
				this.match(CalcParser.FLOAT_TYPE_SPECIFIER);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 138;
				this.match(CalcParser.DOUBLE_TYPE_SPECIFIER);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type_qualifier(): Type_qualifierContext {
		let _localctx: Type_qualifierContext = new Type_qualifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, CalcParser.RULE_type_qualifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 141;
			_la = this._input.LA(1);
			if (!(_la === CalcParser.CONST_TYPE_QUALIFIER || _la === CalcParser.VOLATILE_TYPE_QUALIFIER)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, CalcParser.RULE_identifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 143;
			this.match(CalcParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public start(): StartContext {
		let _localctx: StartContext = new StartContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, CalcParser.RULE_start);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 145;
			this.program();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, CalcParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 151;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CalcParser.ASTERICK) | (1 << CalcParser.PLUS) | (1 << CalcParser.MINUS) | (1 << CalcParser.AMPERSAND) | (1 << CalcParser.TILDA) | (1 << CalcParser.EXCLAMATION_MARK) | (1 << CalcParser.SEMICOLON) | (1 << CalcParser.OPEN_PARENTHESES) | (1 << CalcParser.OPEN_CURLY_BRACKET) | (1 << CalcParser.INCREMENT) | (1 << CalcParser.DECREMENT))) !== 0) || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (CalcParser.SIZE_OF - 48)) | (1 << (CalcParser.CASE - 48)) | (1 << (CalcParser.DEFAULT - 48)) | (1 << (CalcParser.IF - 48)) | (1 << (CalcParser.SWITCH - 48)) | (1 << (CalcParser.WHILE - 48)) | (1 << (CalcParser.DO - 48)) | (1 << (CalcParser.FOR - 48)) | (1 << (CalcParser.GOTO - 48)) | (1 << (CalcParser.CONTINUE - 48)) | (1 << (CalcParser.BREAK - 48)) | (1 << (CalcParser.RETURN - 48)) | (1 << (CalcParser.VOID_TYPE_SPECIFIER - 48)) | (1 << (CalcParser.CHAR_TYPE_SPECIFIER - 48)) | (1 << (CalcParser.SHORT_TYPE_SPECIFIER - 48)) | (1 << (CalcParser.INT_TYPE_SPECIFIER - 48)) | (1 << (CalcParser.LONG_TYPE_SPECIFIER - 48)) | (1 << (CalcParser.FLOAT_TYPE_SPECIFIER - 48)) | (1 << (CalcParser.DOUBLE_TYPE_SPECIFIER - 48)) | (1 << (CalcParser.SIGNED_TYPE_SPECIFIER - 48)) | (1 << (CalcParser.UNSIGNED_TYPE_SPECIFIER - 48)) | (1 << (CalcParser.CONST_TYPE_QUALIFIER - 48)) | (1 << (CalcParser.VOLATILE_TYPE_QUALIFIER - 48)) | (1 << (CalcParser.INTEGER - 48)) | (1 << (CalcParser.FLOAT - 48)) | (1 << (CalcParser.CHAR - 48)) | (1 << (CalcParser.IDENTIFIER - 48)))) !== 0)) {
				{
				this.state = 149;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
				case 1:
					{
					this.state = 147;
					this.function_definition();
					}
					break;

				case 2:
					{
					this.state = 148;
					this.statement();
					}
					break;
				}
				}
				this.state = 153;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public function_definition(): Function_definitionContext {
		let _localctx: Function_definitionContext = new Function_definitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, CalcParser.RULE_function_definition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 154;
			_localctx._type = this.return_type();
			this.state = 155;
			_localctx._name = this.identifier();
			this.state = 156;
			this.match(CalcParser.OPEN_PARENTHESES);
			this.state = 157;
			_localctx._params = this.parameter_type_list();
			this.state = 158;
			this.match(CalcParser.CLOSE_PARENTHESES);
			this.state = 159;
			_localctx._body = this.compound_statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public return_type(): Return_typeContext {
		let _localctx: Return_typeContext = new Return_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, CalcParser.RULE_return_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 161;
			this.type_specifier();
			this.state = 165;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CalcParser.ASTERICK) {
				{
				{
				this.state = 162;
				this.pointer();
				}
				}
				this.state = 167;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameter_type_list(): Parameter_type_listContext {
		let _localctx: Parameter_type_listContext = new Parameter_type_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, CalcParser.RULE_parameter_type_list);
		try {
			this.state = 173;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 168;
				this.parameter_list(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 169;
				this.parameter_list(0);
				this.state = 170;
				this.match(CalcParser.COMMA);
				this.state = 171;
				this.match(CalcParser.T__0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public parameter_list(): Parameter_listContext;
	public parameter_list(_p: number): Parameter_listContext;
	// @RuleVersion(0)
	public parameter_list(_p?: number): Parameter_listContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Parameter_listContext = new Parameter_listContext(this._ctx, _parentState);
		let _prevctx: Parameter_listContext = _localctx;
		let _startState: number = 24;
		this.enterRecursionRule(_localctx, 24, CalcParser.RULE_parameter_list, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 176;
			this.parameter_declaration();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 183;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Parameter_listContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_parameter_list);
					this.state = 178;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 179;
					this.match(CalcParser.COMMA);
					this.state = 180;
					this.parameter_declaration();
					}
					}
				}
				this.state = 185;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameter_declaration(): Parameter_declarationContext {
		let _localctx: Parameter_declarationContext = new Parameter_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, CalcParser.RULE_parameter_declaration);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 186;
			this.declaration_specifiers();
			this.state = 190;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 187;
					this.pointer();
					}
					}
				}
				this.state = 192;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			}
			this.state = 194;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				{
				this.state = 193;
				this.identifier();
				}
				break;
			}
			this.state = 199;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 196;
					this.array_declaration();
					}
					}
				}
				this.state = 201;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public array_declaration(): Array_declarationContext {
		let _localctx: Array_declarationContext = new Array_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, CalcParser.RULE_array_declaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 202;
			this.match(CalcParser.OPEN_SQUARE_BRACKET);
			{
			this.state = 203;
			this.constant_expression();
			}
			this.state = 204;
			this.match(CalcParser.CLOSE_SQUARE_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, CalcParser.RULE_statement);
		try {
			this.state = 213;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 206;
				this.labeled_statement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 207;
				this.declaration_statement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 208;
				this.expression_statement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 209;
				this.compound_statement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 210;
				this.selection_statement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 211;
				this.iteration_statement();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 212;
				this.jump_statement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public labeled_statement(): Labeled_statementContext {
		let _localctx: Labeled_statementContext = new Labeled_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, CalcParser.RULE_labeled_statement);
		try {
			this.state = 227;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CalcParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 215;
				this.identifier();
				this.state = 216;
				this.match(CalcParser.COLON);
				this.state = 217;
				this.statement();
				}
				break;
			case CalcParser.CASE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 219;
				this.match(CalcParser.CASE);
				this.state = 220;
				this.constant_expression();
				this.state = 221;
				this.match(CalcParser.COLON);
				this.state = 222;
				this.statement();
				}
				break;
			case CalcParser.DEFAULT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 224;
				this.match(CalcParser.DEFAULT);
				this.state = 225;
				this.match(CalcParser.COLON);
				this.state = 226;
				this.statement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declaration_statement(): Declaration_statementContext {
		let _localctx: Declaration_statementContext = new Declaration_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, CalcParser.RULE_declaration_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 229;
			_localctx._type = this.declaration_specifiers();
			this.state = 230;
			_localctx._decl = this.init_declarator_list();
			this.state = 231;
			this.end_statement_delimiter();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declaration_specifiers(): Declaration_specifiersContext {
		let _localctx: Declaration_specifiersContext = new Declaration_specifiersContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, CalcParser.RULE_declaration_specifiers);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 236;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CalcParser.CONST_TYPE_QUALIFIER || _la === CalcParser.VOLATILE_TYPE_QUALIFIER) {
				{
				{
				this.state = 233;
				this.type_qualifier();
				}
				}
				this.state = 238;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 239;
			this.type_specifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public init_declarator_list(): Init_declarator_listContext {
		let _localctx: Init_declarator_listContext = new Init_declarator_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, CalcParser.RULE_init_declarator_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 241;
			this.init_declarator();
			this.state = 246;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CalcParser.COMMA) {
				{
				{
				this.state = 242;
				this.match(CalcParser.COMMA);
				this.state = 243;
				this.init_declarator();
				}
				}
				this.state = 248;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public init_declarator(): Init_declaratorContext {
		let _localctx: Init_declaratorContext = new Init_declaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, CalcParser.RULE_init_declarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 249;
			this.declarator();
			this.state = 252;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CalcParser.EQUAL) {
				{
				this.state = 250;
				this.match(CalcParser.EQUAL);
				this.state = 251;
				this.initializer();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declarator(): DeclaratorContext {
		let _localctx: DeclaratorContext = new DeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, CalcParser.RULE_declarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 255;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CalcParser.ASTERICK) {
				{
				this.state = 254;
				this.pointer();
				}
			}

			this.state = 257;
			this.direct_declarator(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pointer(): PointerContext {
		let _localctx: PointerContext = new PointerContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, CalcParser.RULE_pointer);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 259;
			this.match(CalcParser.ASTERICK);
			this.state = 263;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 260;
					this.type_qualifier();
					}
					}
				}
				this.state = 265;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
			}
			this.state = 267;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				{
				this.state = 266;
				this.pointer();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public direct_declarator(): Direct_declaratorContext;
	public direct_declarator(_p: number): Direct_declaratorContext;
	// @RuleVersion(0)
	public direct_declarator(_p?: number): Direct_declaratorContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Direct_declaratorContext = new Direct_declaratorContext(this._ctx, _parentState);
		let _prevctx: Direct_declaratorContext = _localctx;
		let _startState: number = 46;
		this.enterRecursionRule(_localctx, 46, CalcParser.RULE_direct_declarator, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 275;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CalcParser.IDENTIFIER:
				{
				this.state = 270;
				this.identifier();
				}
				break;
			case CalcParser.OPEN_PARENTHESES:
				{
				this.state = 271;
				this.match(CalcParser.OPEN_PARENTHESES);
				this.state = 272;
				this.declarator();
				this.state = 273;
				this.match(CalcParser.CLOSE_PARENTHESES);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 299;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 297;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
					case 1:
						{
						_localctx = new Direct_declaratorContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_direct_declarator);
						this.state = 277;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 278;
						this.match(CalcParser.OPEN_SQUARE_BRACKET);
						this.state = 280;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CalcParser.ASTERICK) | (1 << CalcParser.PLUS) | (1 << CalcParser.MINUS) | (1 << CalcParser.AMPERSAND) | (1 << CalcParser.TILDA) | (1 << CalcParser.EXCLAMATION_MARK) | (1 << CalcParser.OPEN_PARENTHESES) | (1 << CalcParser.INCREMENT) | (1 << CalcParser.DECREMENT))) !== 0) || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (CalcParser.SIZE_OF - 48)) | (1 << (CalcParser.INTEGER - 48)) | (1 << (CalcParser.FLOAT - 48)) | (1 << (CalcParser.CHAR - 48)) | (1 << (CalcParser.IDENTIFIER - 48)))) !== 0)) {
							{
							this.state = 279;
							this.constant_expression();
							}
						}

						this.state = 282;
						this.match(CalcParser.CLOSE_SQUARE_BRACKET);
						}
						break;

					case 2:
						{
						_localctx = new Direct_declaratorContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_direct_declarator);
						this.state = 283;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 284;
						this.match(CalcParser.OPEN_PARENTHESES);
						this.state = 285;
						this.parameter_type_list();
						this.state = 286;
						this.match(CalcParser.CLOSE_PARENTHESES);
						}
						break;

					case 3:
						{
						_localctx = new Direct_declaratorContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_direct_declarator);
						this.state = 288;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 289;
						this.match(CalcParser.OPEN_PARENTHESES);
						this.state = 293;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === CalcParser.IDENTIFIER) {
							{
							{
							this.state = 290;
							this.identifier();
							}
							}
							this.state = 295;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 296;
						this.match(CalcParser.CLOSE_PARENTHESES);
						}
						break;
					}
					}
				}
				this.state = 301;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public initializer(): InitializerContext {
		let _localctx: InitializerContext = new InitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, CalcParser.RULE_initializer);
		try {
			this.state = 312;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 302;
				this.assignment_expression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 303;
				this.match(CalcParser.OPEN_CURLY_BRACKET);
				this.state = 304;
				this.initializer_list(0);
				this.state = 305;
				this.match(CalcParser.CLOSE_CURLY_BRACKET);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 307;
				this.match(CalcParser.OPEN_CURLY_BRACKET);
				this.state = 308;
				this.initializer_list(0);
				this.state = 309;
				this.match(CalcParser.COMMA);
				this.state = 310;
				this.match(CalcParser.CLOSE_CURLY_BRACKET);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public initializer_list(): Initializer_listContext;
	public initializer_list(_p: number): Initializer_listContext;
	// @RuleVersion(0)
	public initializer_list(_p?: number): Initializer_listContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Initializer_listContext = new Initializer_listContext(this._ctx, _parentState);
		let _prevctx: Initializer_listContext = _localctx;
		let _startState: number = 50;
		this.enterRecursionRule(_localctx, 50, CalcParser.RULE_initializer_list, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 315;
			this.initializer();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 322;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Initializer_listContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_initializer_list);
					this.state = 317;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 318;
					this.match(CalcParser.COMMA);
					this.state = 319;
					this.initializer();
					}
					}
				}
				this.state = 324;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expression_statement(): Expression_statementContext {
		let _localctx: Expression_statementContext = new Expression_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, CalcParser.RULE_expression_statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 326;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CalcParser.ASTERICK) | (1 << CalcParser.PLUS) | (1 << CalcParser.MINUS) | (1 << CalcParser.AMPERSAND) | (1 << CalcParser.TILDA) | (1 << CalcParser.EXCLAMATION_MARK) | (1 << CalcParser.OPEN_PARENTHESES) | (1 << CalcParser.INCREMENT) | (1 << CalcParser.DECREMENT))) !== 0) || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (CalcParser.SIZE_OF - 48)) | (1 << (CalcParser.INTEGER - 48)) | (1 << (CalcParser.FLOAT - 48)) | (1 << (CalcParser.CHAR - 48)) | (1 << (CalcParser.IDENTIFIER - 48)))) !== 0)) {
				{
				this.state = 325;
				_localctx._expr = this.expression(0);
				}
			}

			this.state = 328;
			this.end_statement_delimiter();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 54;
		this.enterRecursionRule(_localctx, 54, CalcParser.RULE_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 331;
			this.assignment_expression();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 338;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new ExpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression);
					this.state = 333;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 334;
					this.match(CalcParser.COMMA);
					this.state = 335;
					this.assignment_expression();
					}
					}
				}
				this.state = 340;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignment_expression(): Assignment_expressionContext {
		let _localctx: Assignment_expressionContext = new Assignment_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, CalcParser.RULE_assignment_expression);
		try {
			this.state = 346;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 341;
				this.conditional_expression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 342;
				_localctx._assg = this.unary_expression();
				this.state = 343;
				_localctx._operator = this.assignment_operator();
				this.state = 344;
				_localctx._expr = this.assignment_expression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constant_expression(): Constant_expressionContext {
		let _localctx: Constant_expressionContext = new Constant_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, CalcParser.RULE_constant_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 348;
			this.conditional_expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conditional_expression(): Conditional_expressionContext {
		let _localctx: Conditional_expressionContext = new Conditional_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, CalcParser.RULE_conditional_expression);
		try {
			this.state = 357;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 350;
				this.logical_or_expression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 351;
				_localctx._cond = this.logical_or_expression(0);
				this.state = 352;
				this.match(CalcParser.QUESTION_MARK);
				this.state = 353;
				_localctx._if_true = this.expression(0);
				this.state = 354;
				this.match(CalcParser.COLON);
				this.state = 355;
				_localctx._if_false = this.conditional_expression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public logical_or_expression(): Logical_or_expressionContext;
	public logical_or_expression(_p: number): Logical_or_expressionContext;
	// @RuleVersion(0)
	public logical_or_expression(_p?: number): Logical_or_expressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Logical_or_expressionContext = new Logical_or_expressionContext(this._ctx, _parentState);
		let _prevctx: Logical_or_expressionContext = _localctx;
		let _startState: number = 62;
		this.enterRecursionRule(_localctx, 62, CalcParser.RULE_logical_or_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 360;
			this.logical_and_expression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 367;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Logical_or_expressionContext(_parentctx, _parentState);
					_localctx._left = _prevctx;
					this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_logical_or_expression);
					this.state = 362;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 363;
					_localctx._operator = this.match(CalcParser.BOOLEAN_OR);
					this.state = 364;
					_localctx._right = this.logical_and_expression(0);
					}
					}
				}
				this.state = 369;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public logical_and_expression(): Logical_and_expressionContext;
	public logical_and_expression(_p: number): Logical_and_expressionContext;
	// @RuleVersion(0)
	public logical_and_expression(_p?: number): Logical_and_expressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Logical_and_expressionContext = new Logical_and_expressionContext(this._ctx, _parentState);
		let _prevctx: Logical_and_expressionContext = _localctx;
		let _startState: number = 64;
		this.enterRecursionRule(_localctx, 64, CalcParser.RULE_logical_and_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 371;
			this.inclusive_or_expression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 378;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Logical_and_expressionContext(_parentctx, _parentState);
					_localctx._left = _prevctx;
					this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_logical_and_expression);
					this.state = 373;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 374;
					_localctx._operator = this.match(CalcParser.BOOLEAN_AND);
					this.state = 375;
					_localctx._right = this.inclusive_or_expression(0);
					}
					}
				}
				this.state = 380;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public inclusive_or_expression(): Inclusive_or_expressionContext;
	public inclusive_or_expression(_p: number): Inclusive_or_expressionContext;
	// @RuleVersion(0)
	public inclusive_or_expression(_p?: number): Inclusive_or_expressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Inclusive_or_expressionContext = new Inclusive_or_expressionContext(this._ctx, _parentState);
		let _prevctx: Inclusive_or_expressionContext = _localctx;
		let _startState: number = 66;
		this.enterRecursionRule(_localctx, 66, CalcParser.RULE_inclusive_or_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 382;
			this.exclusive_or_expression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 389;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Inclusive_or_expressionContext(_parentctx, _parentState);
					_localctx._left = _prevctx;
					this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_inclusive_or_expression);
					this.state = 384;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 385;
					_localctx._operator = this.match(CalcParser.VERTICAL_BAR);
					this.state = 386;
					_localctx._right = this.exclusive_or_expression(0);
					}
					}
				}
				this.state = 391;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public exclusive_or_expression(): Exclusive_or_expressionContext;
	public exclusive_or_expression(_p: number): Exclusive_or_expressionContext;
	// @RuleVersion(0)
	public exclusive_or_expression(_p?: number): Exclusive_or_expressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Exclusive_or_expressionContext = new Exclusive_or_expressionContext(this._ctx, _parentState);
		let _prevctx: Exclusive_or_expressionContext = _localctx;
		let _startState: number = 68;
		this.enterRecursionRule(_localctx, 68, CalcParser.RULE_exclusive_or_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 393;
			this.and_expression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 400;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Exclusive_or_expressionContext(_parentctx, _parentState);
					_localctx._left = _prevctx;
					this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_exclusive_or_expression);
					this.state = 395;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 396;
					_localctx._operator = this.match(CalcParser.CARET);
					this.state = 397;
					_localctx._right = this.and_expression(0);
					}
					}
				}
				this.state = 402;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public and_expression(): And_expressionContext;
	public and_expression(_p: number): And_expressionContext;
	// @RuleVersion(0)
	public and_expression(_p?: number): And_expressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: And_expressionContext = new And_expressionContext(this._ctx, _parentState);
		let _prevctx: And_expressionContext = _localctx;
		let _startState: number = 70;
		this.enterRecursionRule(_localctx, 70, CalcParser.RULE_and_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 404;
			this.equality_expression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 411;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new And_expressionContext(_parentctx, _parentState);
					_localctx._left = _prevctx;
					this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_and_expression);
					this.state = 406;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 407;
					_localctx._operator = this.match(CalcParser.AMPERSAND);
					this.state = 408;
					_localctx._right = this.equality_expression(0);
					}
					}
				}
				this.state = 413;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public equality_expression(): Equality_expressionContext;
	public equality_expression(_p: number): Equality_expressionContext;
	// @RuleVersion(0)
	public equality_expression(_p?: number): Equality_expressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Equality_expressionContext = new Equality_expressionContext(this._ctx, _parentState);
		let _prevctx: Equality_expressionContext = _localctx;
		let _startState: number = 72;
		this.enterRecursionRule(_localctx, 72, CalcParser.RULE_equality_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 415;
			this.relational_expression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 425;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 423;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
					case 1:
						{
						_localctx = new Equality_expressionContext(_parentctx, _parentState);
						_localctx._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_equality_expression);
						this.state = 417;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 418;
						_localctx._operator = this.match(CalcParser.EQUALITY_EQUAL);
						this.state = 419;
						_localctx._right = this.relational_expression(0);
						}
						break;

					case 2:
						{
						_localctx = new Equality_expressionContext(_parentctx, _parentState);
						_localctx._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_equality_expression);
						this.state = 420;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 421;
						_localctx._operator = this.match(CalcParser.EQUALITY_NOT_EQUAL);
						this.state = 422;
						_localctx._right = this.relational_expression(0);
						}
						break;
					}
					}
				}
				this.state = 427;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public relational_expression(): Relational_expressionContext;
	public relational_expression(_p: number): Relational_expressionContext;
	// @RuleVersion(0)
	public relational_expression(_p?: number): Relational_expressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Relational_expressionContext = new Relational_expressionContext(this._ctx, _parentState);
		let _prevctx: Relational_expressionContext = _localctx;
		let _startState: number = 74;
		this.enterRecursionRule(_localctx, 74, CalcParser.RULE_relational_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 429;
			this.shift_expression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 445;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 443;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
					case 1:
						{
						_localctx = new Relational_expressionContext(_parentctx, _parentState);
						_localctx._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_relational_expression);
						this.state = 431;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 432;
						_localctx._operator = this.match(CalcParser.RELATIONAL_GREATER_THAN);
						this.state = 433;
						_localctx._right = this.shift_expression(0);
						}
						break;

					case 2:
						{
						_localctx = new Relational_expressionContext(_parentctx, _parentState);
						_localctx._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_relational_expression);
						this.state = 434;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 435;
						_localctx._operator = this.match(CalcParser.RELATIONAL_LESS_THAN);
						this.state = 436;
						_localctx._right = this.shift_expression(0);
						}
						break;

					case 3:
						{
						_localctx = new Relational_expressionContext(_parentctx, _parentState);
						_localctx._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_relational_expression);
						this.state = 437;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 438;
						_localctx._operator = this.match(CalcParser.RELATIONAL_LESS_THAN_OR_EQUAL);
						this.state = 439;
						_localctx._right = this.shift_expression(0);
						}
						break;

					case 4:
						{
						_localctx = new Relational_expressionContext(_parentctx, _parentState);
						_localctx._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_relational_expression);
						this.state = 440;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 441;
						_localctx._operator = this.match(CalcParser.RELATIONAL_GREATER_THAN_OR_EQUAL);
						this.state = 442;
						_localctx._right = this.shift_expression(0);
						}
						break;
					}
					}
				}
				this.state = 447;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public shift_expression(): Shift_expressionContext;
	public shift_expression(_p: number): Shift_expressionContext;
	// @RuleVersion(0)
	public shift_expression(_p?: number): Shift_expressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Shift_expressionContext = new Shift_expressionContext(this._ctx, _parentState);
		let _prevctx: Shift_expressionContext = _localctx;
		let _startState: number = 76;
		this.enterRecursionRule(_localctx, 76, CalcParser.RULE_shift_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 449;
			this.additive_expression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 459;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 457;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
					case 1:
						{
						_localctx = new Shift_expressionContext(_parentctx, _parentState);
						_localctx._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_shift_expression);
						this.state = 451;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 452;
						_localctx._operator = this.match(CalcParser.SHIFT_LEFT);
						this.state = 453;
						_localctx._right = this.additive_expression(0);
						}
						break;

					case 2:
						{
						_localctx = new Shift_expressionContext(_parentctx, _parentState);
						_localctx._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_shift_expression);
						this.state = 454;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 455;
						_localctx._operator = this.match(CalcParser.SHIFT_RIGHT);
						this.state = 456;
						_localctx._right = this.additive_expression(0);
						}
						break;
					}
					}
				}
				this.state = 461;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public additive_expression(): Additive_expressionContext;
	public additive_expression(_p: number): Additive_expressionContext;
	// @RuleVersion(0)
	public additive_expression(_p?: number): Additive_expressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Additive_expressionContext = new Additive_expressionContext(this._ctx, _parentState);
		let _prevctx: Additive_expressionContext = _localctx;
		let _startState: number = 78;
		this.enterRecursionRule(_localctx, 78, CalcParser.RULE_additive_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			_localctx = new AdditiveNormalExpressionContext(_localctx);
			this._ctx = _localctx;
			_prevctx = _localctx;

			this.state = 463;
			this.multiplicative_expression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 473;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 471;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
					case 1:
						{
						_localctx = new AdditiveAdditionExpressionContext(new Additive_expressionContext(_parentctx, _parentState));
						(_localctx as AdditiveAdditionExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_additive_expression);
						this.state = 465;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 466;
						(_localctx as AdditiveAdditionExpressionContext)._operator = this.match(CalcParser.PLUS);
						this.state = 467;
						(_localctx as AdditiveAdditionExpressionContext)._right = this.multiplicative_expression(0);
						}
						break;

					case 2:
						{
						_localctx = new AdditiveSubtractionExpressionContext(new Additive_expressionContext(_parentctx, _parentState));
						(_localctx as AdditiveSubtractionExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_additive_expression);
						this.state = 468;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 469;
						(_localctx as AdditiveSubtractionExpressionContext)._operator = this.match(CalcParser.MINUS);
						this.state = 470;
						(_localctx as AdditiveSubtractionExpressionContext)._right = this.multiplicative_expression(0);
						}
						break;
					}
					}
				}
				this.state = 475;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public multiplicative_expression(): Multiplicative_expressionContext;
	public multiplicative_expression(_p: number): Multiplicative_expressionContext;
	// @RuleVersion(0)
	public multiplicative_expression(_p?: number): Multiplicative_expressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Multiplicative_expressionContext = new Multiplicative_expressionContext(this._ctx, _parentState);
		let _prevctx: Multiplicative_expressionContext = _localctx;
		let _startState: number = 80;
		this.enterRecursionRule(_localctx, 80, CalcParser.RULE_multiplicative_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			_localctx = new MultiplicativeNormalExpressionContext(_localctx);
			this._ctx = _localctx;
			_prevctx = _localctx;

			this.state = 477;
			this.cast_expression();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 490;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 488;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 45, this._ctx) ) {
					case 1:
						{
						_localctx = new MultiplicativeMultiplyExpressionContext(new Multiplicative_expressionContext(_parentctx, _parentState));
						(_localctx as MultiplicativeMultiplyExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_multiplicative_expression);
						this.state = 479;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 480;
						(_localctx as MultiplicativeMultiplyExpressionContext)._operator = this.match(CalcParser.ASTERICK);
						this.state = 481;
						(_localctx as MultiplicativeMultiplyExpressionContext)._right = this.cast_expression();
						}
						break;

					case 2:
						{
						_localctx = new MultiplicativeDivideExpressionContext(new Multiplicative_expressionContext(_parentctx, _parentState));
						(_localctx as MultiplicativeDivideExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_multiplicative_expression);
						this.state = 482;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 483;
						(_localctx as MultiplicativeDivideExpressionContext)._operator = this.match(CalcParser.BACKSLASH);
						this.state = 484;
						(_localctx as MultiplicativeDivideExpressionContext)._right = this.cast_expression();
						}
						break;

					case 3:
						{
						_localctx = new MultiplicativeModuloExpressionContext(new Multiplicative_expressionContext(_parentctx, _parentState));
						(_localctx as MultiplicativeModuloExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_multiplicative_expression);
						this.state = 485;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 486;
						(_localctx as MultiplicativeModuloExpressionContext)._operator = this.match(CalcParser.PERCENT);
						this.state = 487;
						(_localctx as MultiplicativeModuloExpressionContext)._right = this.cast_expression();
						}
						break;
					}
					}
				}
				this.state = 492;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cast_expression(): Cast_expressionContext {
		let _localctx: Cast_expressionContext = new Cast_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, CalcParser.RULE_cast_expression);
		try {
			this.state = 499;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
			case 1:
				_localctx = new CastNormalExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 493;
				this.unary_expression();
				}
				break;

			case 2:
				_localctx = new CastTypeExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 494;
				this.match(CalcParser.OPEN_PARENTHESES);
				this.state = 495;
				(_localctx as CastTypeExpressionContext)._type = this.type_name();
				this.state = 496;
				this.match(CalcParser.CLOSE_PARENTHESES);
				this.state = 497;
				(_localctx as CastTypeExpressionContext)._expr = this.cast_expression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type_name(): Type_nameContext {
		let _localctx: Type_nameContext = new Type_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, CalcParser.RULE_type_name);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 504;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CalcParser.CONST_TYPE_QUALIFIER || _la === CalcParser.VOLATILE_TYPE_QUALIFIER) {
				{
				{
				this.state = 501;
				this.type_qualifier();
				}
				}
				this.state = 506;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 507;
			this.type_specifier();
			this.state = 509;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CalcParser.ASTERICK) | (1 << CalcParser.OPEN_PARENTHESES) | (1 << CalcParser.OPEN_SQUARE_BRACKET))) !== 0)) {
				{
				this.state = 508;
				this.abstract_declarator();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public abstract_declarator(): Abstract_declaratorContext {
		let _localctx: Abstract_declaratorContext = new Abstract_declaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, CalcParser.RULE_abstract_declarator);
		let _la: number;
		try {
			this.state = 516;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 51, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 511;
				this.pointer();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 513;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CalcParser.ASTERICK) {
					{
					this.state = 512;
					this.pointer();
					}
				}

				this.state = 515;
				this.direct_abstract_declarator(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public direct_abstract_declarator(): Direct_abstract_declaratorContext;
	public direct_abstract_declarator(_p: number): Direct_abstract_declaratorContext;
	// @RuleVersion(0)
	public direct_abstract_declarator(_p?: number): Direct_abstract_declaratorContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Direct_abstract_declaratorContext = new Direct_abstract_declaratorContext(this._ctx, _parentState);
		let _prevctx: Direct_abstract_declaratorContext = _localctx;
		let _startState: number = 88;
		this.enterRecursionRule(_localctx, 88, CalcParser.RULE_direct_abstract_declarator, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 528;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CalcParser.OPEN_PARENTHESES:
				{
				this.state = 519;
				this.match(CalcParser.OPEN_PARENTHESES);
				this.state = 520;
				this.abstract_declarator();
				this.state = 521;
				this.match(CalcParser.CLOSE_PARENTHESES);
				}
				break;
			case CalcParser.OPEN_SQUARE_BRACKET:
				{
				this.state = 523;
				this.match(CalcParser.OPEN_SQUARE_BRACKET);
				this.state = 525;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CalcParser.ASTERICK) | (1 << CalcParser.PLUS) | (1 << CalcParser.MINUS) | (1 << CalcParser.AMPERSAND) | (1 << CalcParser.TILDA) | (1 << CalcParser.EXCLAMATION_MARK) | (1 << CalcParser.OPEN_PARENTHESES) | (1 << CalcParser.INCREMENT) | (1 << CalcParser.DECREMENT))) !== 0) || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (CalcParser.SIZE_OF - 48)) | (1 << (CalcParser.INTEGER - 48)) | (1 << (CalcParser.FLOAT - 48)) | (1 << (CalcParser.CHAR - 48)) | (1 << (CalcParser.IDENTIFIER - 48)))) !== 0)) {
					{
					this.state = 524;
					this.constant_expression();
					}
				}

				this.state = 527;
				this.match(CalcParser.CLOSE_SQUARE_BRACKET);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 538;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Direct_abstract_declaratorContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_direct_abstract_declarator);
					this.state = 530;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 531;
					this.match(CalcParser.OPEN_SQUARE_BRACKET);
					this.state = 533;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CalcParser.ASTERICK) | (1 << CalcParser.PLUS) | (1 << CalcParser.MINUS) | (1 << CalcParser.AMPERSAND) | (1 << CalcParser.TILDA) | (1 << CalcParser.EXCLAMATION_MARK) | (1 << CalcParser.OPEN_PARENTHESES) | (1 << CalcParser.INCREMENT) | (1 << CalcParser.DECREMENT))) !== 0) || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (CalcParser.SIZE_OF - 48)) | (1 << (CalcParser.INTEGER - 48)) | (1 << (CalcParser.FLOAT - 48)) | (1 << (CalcParser.CHAR - 48)) | (1 << (CalcParser.IDENTIFIER - 48)))) !== 0)) {
						{
						this.state = 532;
						this.constant_expression();
						}
					}

					this.state = 535;
					this.match(CalcParser.CLOSE_SQUARE_BRACKET);
					}
					}
				}
				this.state = 540;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unary_expression(): Unary_expressionContext {
		let _localctx: Unary_expressionContext = new Unary_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, CalcParser.RULE_unary_expression);
		try {
			this.state = 554;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CalcParser.OPEN_PARENTHESES:
			case CalcParser.INTEGER:
			case CalcParser.FLOAT:
			case CalcParser.CHAR:
			case CalcParser.IDENTIFIER:
				_localctx = new PostfixUnaryExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 541;
				(_localctx as PostfixUnaryExpressionContext)._expr = this.postfix_expression(0);
				}
				break;
			case CalcParser.INCREMENT:
				_localctx = new IncrementUnaryExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 542;
				this.match(CalcParser.INCREMENT);
				this.state = 543;
				(_localctx as IncrementUnaryExpressionContext)._expr = this.unary_expression();
				}
				break;
			case CalcParser.DECREMENT:
				_localctx = new DecrementUnaryExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 544;
				this.match(CalcParser.DECREMENT);
				this.state = 545;
				(_localctx as DecrementUnaryExpressionContext)._expr = this.unary_expression();
				}
				break;
			case CalcParser.ASTERICK:
			case CalcParser.PLUS:
			case CalcParser.MINUS:
			case CalcParser.AMPERSAND:
			case CalcParser.TILDA:
			case CalcParser.EXCLAMATION_MARK:
				_localctx = new CastUnaryExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 546;
				(_localctx as CastUnaryExpressionContext)._op = this.unary_operator();
				this.state = 547;
				(_localctx as CastUnaryExpressionContext)._expr = this.cast_expression();
				}
				break;
			case CalcParser.SIZE_OF:
				_localctx = new SizeOfUnaryExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 549;
				this.match(CalcParser.SIZE_OF);
				this.state = 550;
				this.match(CalcParser.OPEN_PARENTHESES);
				this.state = 551;
				(_localctx as SizeOfUnaryExpressionContext)._type = this.type_name();
				this.state = 552;
				this.match(CalcParser.CLOSE_PARENTHESES);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public postfix_expression(): Postfix_expressionContext;
	public postfix_expression(_p: number): Postfix_expressionContext;
	// @RuleVersion(0)
	public postfix_expression(_p?: number): Postfix_expressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Postfix_expressionContext = new Postfix_expressionContext(this._ctx, _parentState);
		let _prevctx: Postfix_expressionContext = _localctx;
		let _startState: number = 92;
		this.enterRecursionRule(_localctx, 92, CalcParser.RULE_postfix_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 557;
			this.primary_expression();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 581;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 579;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 57, this._ctx) ) {
					case 1:
						{
						_localctx = new Postfix_expressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_postfix_expression);
						this.state = 559;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 560;
						this.match(CalcParser.OPEN_SQUARE_BRACKET);
						this.state = 561;
						this.expression(0);
						this.state = 562;
						this.match(CalcParser.CLOSE_SQUARE_BRACKET);
						}
						break;

					case 2:
						{
						_localctx = new Postfix_expressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_postfix_expression);
						this.state = 564;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 565;
						this.match(CalcParser.OPEN_PARENTHESES);
						this.state = 566;
						this.expression(0);
						this.state = 567;
						this.match(CalcParser.CLOSE_PARENTHESES);
						}
						break;

					case 3:
						{
						_localctx = new Postfix_expressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_postfix_expression);
						this.state = 569;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 570;
						this.match(CalcParser.FULLSTOP);
						this.state = 571;
						this.identifier();
						}
						break;

					case 4:
						{
						_localctx = new Postfix_expressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_postfix_expression);
						this.state = 572;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 573;
						this.match(CalcParser.RIGHT_ARROW);
						this.state = 574;
						this.identifier();
						}
						break;

					case 5:
						{
						_localctx = new Postfix_expressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_postfix_expression);
						this.state = 575;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 576;
						this.match(CalcParser.INCREMENT);
						}
						break;

					case 6:
						{
						_localctx = new Postfix_expressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_postfix_expression);
						this.state = 577;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 578;
						this.match(CalcParser.DECREMENT);
						}
						break;
					}
					}
				}
				this.state = 583;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primary_expression(): Primary_expressionContext {
		let _localctx: Primary_expressionContext = new Primary_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, CalcParser.RULE_primary_expression);
		try {
			this.state = 590;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CalcParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 584;
				this.identifier();
				}
				break;
			case CalcParser.INTEGER:
			case CalcParser.FLOAT:
			case CalcParser.CHAR:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 585;
				this.constant();
				}
				break;
			case CalcParser.OPEN_PARENTHESES:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 586;
				this.match(CalcParser.OPEN_PARENTHESES);
				this.state = 587;
				this.expression(0);
				this.state = 588;
				this.match(CalcParser.CLOSE_PARENTHESES);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constant(): ConstantContext {
		let _localctx: ConstantContext = new ConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, CalcParser.RULE_constant);
		try {
			this.state = 595;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CalcParser.INTEGER:
				_localctx = new IntegerConstantContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 592;
				this.integer_constant();
				}
				break;
			case CalcParser.FLOAT:
				_localctx = new FloatConstantContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 593;
				this.float_constant();
				}
				break;
			case CalcParser.CHAR:
				_localctx = new CharacterConstantContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 594;
				this.character_constant();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public integer_constant(): Integer_constantContext {
		let _localctx: Integer_constantContext = new Integer_constantContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, CalcParser.RULE_integer_constant);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 597;
			this.match(CalcParser.INTEGER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public float_constant(): Float_constantContext {
		let _localctx: Float_constantContext = new Float_constantContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, CalcParser.RULE_float_constant);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 599;
			this.match(CalcParser.FLOAT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public character_constant(): Character_constantContext {
		let _localctx: Character_constantContext = new Character_constantContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, CalcParser.RULE_character_constant);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 601;
			this.match(CalcParser.CHAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public compound_statement(): Compound_statementContext {
		let _localctx: Compound_statementContext = new Compound_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, CalcParser.RULE_compound_statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 603;
			this.match(CalcParser.OPEN_CURLY_BRACKET);
			this.state = 607;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CalcParser.ASTERICK) | (1 << CalcParser.PLUS) | (1 << CalcParser.MINUS) | (1 << CalcParser.AMPERSAND) | (1 << CalcParser.TILDA) | (1 << CalcParser.EXCLAMATION_MARK) | (1 << CalcParser.SEMICOLON) | (1 << CalcParser.OPEN_PARENTHESES) | (1 << CalcParser.OPEN_CURLY_BRACKET) | (1 << CalcParser.INCREMENT) | (1 << CalcParser.DECREMENT))) !== 0) || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (CalcParser.SIZE_OF - 48)) | (1 << (CalcParser.CASE - 48)) | (1 << (CalcParser.DEFAULT - 48)) | (1 << (CalcParser.IF - 48)) | (1 << (CalcParser.SWITCH - 48)) | (1 << (CalcParser.WHILE - 48)) | (1 << (CalcParser.DO - 48)) | (1 << (CalcParser.FOR - 48)) | (1 << (CalcParser.GOTO - 48)) | (1 << (CalcParser.CONTINUE - 48)) | (1 << (CalcParser.BREAK - 48)) | (1 << (CalcParser.RETURN - 48)) | (1 << (CalcParser.VOID_TYPE_SPECIFIER - 48)) | (1 << (CalcParser.CHAR_TYPE_SPECIFIER - 48)) | (1 << (CalcParser.SHORT_TYPE_SPECIFIER - 48)) | (1 << (CalcParser.INT_TYPE_SPECIFIER - 48)) | (1 << (CalcParser.LONG_TYPE_SPECIFIER - 48)) | (1 << (CalcParser.FLOAT_TYPE_SPECIFIER - 48)) | (1 << (CalcParser.DOUBLE_TYPE_SPECIFIER - 48)) | (1 << (CalcParser.SIGNED_TYPE_SPECIFIER - 48)) | (1 << (CalcParser.UNSIGNED_TYPE_SPECIFIER - 48)) | (1 << (CalcParser.CONST_TYPE_QUALIFIER - 48)) | (1 << (CalcParser.VOLATILE_TYPE_QUALIFIER - 48)) | (1 << (CalcParser.INTEGER - 48)) | (1 << (CalcParser.FLOAT - 48)) | (1 << (CalcParser.CHAR - 48)) | (1 << (CalcParser.IDENTIFIER - 48)))) !== 0)) {
				{
				{
				this.state = 604;
				this.statement();
				}
				}
				this.state = 609;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 610;
			this.match(CalcParser.CLOSE_CURLY_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public selection_statement(): Selection_statementContext {
		let _localctx: Selection_statementContext = new Selection_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, CalcParser.RULE_selection_statement);
		try {
			this.state = 632;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 62, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 612;
				this.match(CalcParser.IF);
				this.state = 613;
				this.match(CalcParser.OPEN_PARENTHESES);
				this.state = 614;
				_localctx._cond = this.expression(0);
				this.state = 615;
				this.match(CalcParser.CLOSE_PARENTHESES);
				this.state = 616;
				_localctx._if_true = this.statement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 618;
				this.match(CalcParser.IF);
				this.state = 619;
				this.match(CalcParser.OPEN_PARENTHESES);
				this.state = 620;
				_localctx._cond = this.expression(0);
				this.state = 621;
				this.match(CalcParser.CLOSE_PARENTHESES);
				this.state = 622;
				_localctx._if_true = this.statement();
				this.state = 623;
				this.match(CalcParser.ELSE);
				this.state = 624;
				_localctx._if_false = this.statement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 626;
				this.match(CalcParser.SWITCH);
				this.state = 627;
				this.match(CalcParser.OPEN_PARENTHESES);
				this.state = 628;
				_localctx._cond = this.expression(0);
				this.state = 629;
				this.match(CalcParser.CLOSE_PARENTHESES);
				this.state = 630;
				_localctx._body = this.statement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public iteration_statement(): Iteration_statementContext {
		let _localctx: Iteration_statementContext = new Iteration_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, CalcParser.RULE_iteration_statement);
		let _la: number;
		try {
			this.state = 663;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CalcParser.WHILE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 634;
				this.match(CalcParser.WHILE);
				this.state = 635;
				this.match(CalcParser.OPEN_PARENTHESES);
				this.state = 636;
				_localctx._cond = this.expression(0);
				this.state = 637;
				this.match(CalcParser.CLOSE_PARENTHESES);
				this.state = 638;
				this.statement();
				}
				break;
			case CalcParser.DO:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 640;
				this.match(CalcParser.DO);
				this.state = 641;
				this.statement();
				this.state = 642;
				this.match(CalcParser.WHILE);
				this.state = 643;
				this.match(CalcParser.OPEN_PARENTHESES);
				this.state = 644;
				_localctx._cond = this.expression(0);
				this.state = 645;
				this.match(CalcParser.CLOSE_PARENTHESES);
				this.state = 646;
				this.end_statement_delimiter();
				}
				break;
			case CalcParser.FOR:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 648;
				this.match(CalcParser.FOR);
				this.state = 649;
				this.match(CalcParser.OPEN_PARENTHESES);
				this.state = 651;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CalcParser.ASTERICK) | (1 << CalcParser.PLUS) | (1 << CalcParser.MINUS) | (1 << CalcParser.AMPERSAND) | (1 << CalcParser.TILDA) | (1 << CalcParser.EXCLAMATION_MARK) | (1 << CalcParser.OPEN_PARENTHESES) | (1 << CalcParser.INCREMENT) | (1 << CalcParser.DECREMENT))) !== 0) || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (CalcParser.SIZE_OF - 48)) | (1 << (CalcParser.INTEGER - 48)) | (1 << (CalcParser.FLOAT - 48)) | (1 << (CalcParser.CHAR - 48)) | (1 << (CalcParser.IDENTIFIER - 48)))) !== 0)) {
					{
					this.state = 650;
					this.expression(0);
					}
				}

				this.state = 653;
				this.match(CalcParser.SEMICOLON);
				this.state = 655;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CalcParser.ASTERICK) | (1 << CalcParser.PLUS) | (1 << CalcParser.MINUS) | (1 << CalcParser.AMPERSAND) | (1 << CalcParser.TILDA) | (1 << CalcParser.EXCLAMATION_MARK) | (1 << CalcParser.OPEN_PARENTHESES) | (1 << CalcParser.INCREMENT) | (1 << CalcParser.DECREMENT))) !== 0) || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (CalcParser.SIZE_OF - 48)) | (1 << (CalcParser.INTEGER - 48)) | (1 << (CalcParser.FLOAT - 48)) | (1 << (CalcParser.CHAR - 48)) | (1 << (CalcParser.IDENTIFIER - 48)))) !== 0)) {
					{
					this.state = 654;
					this.expression(0);
					}
				}

				this.state = 657;
				this.match(CalcParser.SEMICOLON);
				this.state = 659;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CalcParser.ASTERICK) | (1 << CalcParser.PLUS) | (1 << CalcParser.MINUS) | (1 << CalcParser.AMPERSAND) | (1 << CalcParser.TILDA) | (1 << CalcParser.EXCLAMATION_MARK) | (1 << CalcParser.OPEN_PARENTHESES) | (1 << CalcParser.INCREMENT) | (1 << CalcParser.DECREMENT))) !== 0) || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (CalcParser.SIZE_OF - 48)) | (1 << (CalcParser.INTEGER - 48)) | (1 << (CalcParser.FLOAT - 48)) | (1 << (CalcParser.CHAR - 48)) | (1 << (CalcParser.IDENTIFIER - 48)))) !== 0)) {
					{
					this.state = 658;
					this.expression(0);
					}
				}

				this.state = 661;
				this.match(CalcParser.CLOSE_PARENTHESES);
				this.state = 662;
				this.statement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jump_statement(): Jump_statementContext {
		let _localctx: Jump_statementContext = new Jump_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, CalcParser.RULE_jump_statement);
		let _la: number;
		try {
			this.state = 678;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CalcParser.GOTO:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 665;
				this.match(CalcParser.GOTO);
				this.state = 666;
				this.identifier();
				this.state = 667;
				this.end_statement_delimiter();
				}
				break;
			case CalcParser.CONTINUE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 669;
				this.match(CalcParser.CONTINUE);
				this.state = 670;
				this.end_statement_delimiter();
				}
				break;
			case CalcParser.BREAK:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 671;
				this.match(CalcParser.BREAK);
				this.state = 672;
				this.end_statement_delimiter();
				}
				break;
			case CalcParser.RETURN:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 673;
				this.match(CalcParser.RETURN);
				this.state = 675;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CalcParser.ASTERICK) | (1 << CalcParser.PLUS) | (1 << CalcParser.MINUS) | (1 << CalcParser.AMPERSAND) | (1 << CalcParser.TILDA) | (1 << CalcParser.EXCLAMATION_MARK) | (1 << CalcParser.OPEN_PARENTHESES) | (1 << CalcParser.INCREMENT) | (1 << CalcParser.DECREMENT))) !== 0) || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (CalcParser.SIZE_OF - 48)) | (1 << (CalcParser.INTEGER - 48)) | (1 << (CalcParser.FLOAT - 48)) | (1 << (CalcParser.CHAR - 48)) | (1 << (CalcParser.IDENTIFIER - 48)))) !== 0)) {
					{
					this.state = 674;
					this.expression(0);
					}
				}

				this.state = 677;
				this.end_statement_delimiter();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 12:
			return this.parameter_list_sempred(_localctx as Parameter_listContext, predIndex);

		case 23:
			return this.direct_declarator_sempred(_localctx as Direct_declaratorContext, predIndex);

		case 25:
			return this.initializer_list_sempred(_localctx as Initializer_listContext, predIndex);

		case 27:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);

		case 31:
			return this.logical_or_expression_sempred(_localctx as Logical_or_expressionContext, predIndex);

		case 32:
			return this.logical_and_expression_sempred(_localctx as Logical_and_expressionContext, predIndex);

		case 33:
			return this.inclusive_or_expression_sempred(_localctx as Inclusive_or_expressionContext, predIndex);

		case 34:
			return this.exclusive_or_expression_sempred(_localctx as Exclusive_or_expressionContext, predIndex);

		case 35:
			return this.and_expression_sempred(_localctx as And_expressionContext, predIndex);

		case 36:
			return this.equality_expression_sempred(_localctx as Equality_expressionContext, predIndex);

		case 37:
			return this.relational_expression_sempred(_localctx as Relational_expressionContext, predIndex);

		case 38:
			return this.shift_expression_sempred(_localctx as Shift_expressionContext, predIndex);

		case 39:
			return this.additive_expression_sempred(_localctx as Additive_expressionContext, predIndex);

		case 40:
			return this.multiplicative_expression_sempred(_localctx as Multiplicative_expressionContext, predIndex);

		case 44:
			return this.direct_abstract_declarator_sempred(_localctx as Direct_abstract_declaratorContext, predIndex);

		case 46:
			return this.postfix_expression_sempred(_localctx as Postfix_expressionContext, predIndex);
		}
		return true;
	}
	private parameter_list_sempred(_localctx: Parameter_listContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private direct_declarator_sempred(_localctx: Direct_declaratorContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 3);

		case 2:
			return this.precpred(this._ctx, 2);

		case 3:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private initializer_list_sempred(_localctx: Initializer_listContext, predIndex: number): boolean {
		switch (predIndex) {
		case 4:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 5:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private logical_or_expression_sempred(_localctx: Logical_or_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 6:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private logical_and_expression_sempred(_localctx: Logical_and_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 7:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private inclusive_or_expression_sempred(_localctx: Inclusive_or_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 8:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private exclusive_or_expression_sempred(_localctx: Exclusive_or_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 9:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private and_expression_sempred(_localctx: And_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 10:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private equality_expression_sempred(_localctx: Equality_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 11:
			return this.precpred(this._ctx, 2);

		case 12:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private relational_expression_sempred(_localctx: Relational_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 13:
			return this.precpred(this._ctx, 4);

		case 14:
			return this.precpred(this._ctx, 3);

		case 15:
			return this.precpred(this._ctx, 2);

		case 16:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private shift_expression_sempred(_localctx: Shift_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 17:
			return this.precpred(this._ctx, 2);

		case 18:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private additive_expression_sempred(_localctx: Additive_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 19:
			return this.precpred(this._ctx, 2);

		case 20:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private multiplicative_expression_sempred(_localctx: Multiplicative_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 21:
			return this.precpred(this._ctx, 3);

		case 22:
			return this.precpred(this._ctx, 2);

		case 23:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private direct_abstract_declarator_sempred(_localctx: Direct_abstract_declaratorContext, predIndex: number): boolean {
		switch (predIndex) {
		case 24:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private postfix_expression_sempred(_localctx: Postfix_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 25:
			return this.precpred(this._ctx, 6);

		case 26:
			return this.precpred(this._ctx, 5);

		case 27:
			return this.precpred(this._ctx, 4);

		case 28:
			return this.precpred(this._ctx, 3);

		case 29:
			return this.precpred(this._ctx, 2);

		case 30:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03M\u02AB\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x03\x02\x03\x02\x03\x03\x03" +
		"\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x05\x06}\n\x06\x03" +
		"\x06\x03\x06\x05\x06\x81\n\x06\x03\x06\x03\x06\x05\x06\x85\n\x06\x03\x06" +
		"\x03\x06\x05\x06\x89\n\x06\x03\x06\x03\x06\x03\x06\x05\x06\x8E\n\x06\x03" +
		"\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x07\n\x98\n\n\f\n\x0E" +
		"\n\x9B\v\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x07\f" +
		"\xA6\n\f\f\f\x0E\f\xA9\v\f\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\xB0\n\r" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E\xB8\n\x0E\f\x0E" +
		"\x0E\x0E\xBB\v\x0E\x03\x0F\x03\x0F\x07\x0F\xBF\n\x0F\f\x0F\x0E\x0F\xC2" +
		"\v\x0F\x03\x0F\x05\x0F\xC5\n\x0F\x03\x0F\x07\x0F\xC8\n\x0F\f\x0F\x0E\x0F" +
		"\xCB\v\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x05\x11\xD8\n\x11\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x05\x12\xE6\n\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14\x07\x14\xED" +
		"\n\x14\f\x14\x0E\x14\xF0\v\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15" +
		"\x07\x15\xF7\n\x15\f\x15\x0E\x15\xFA\v\x15\x03\x16\x03\x16\x03\x16\x05" +
		"\x16\xFF\n\x16\x03\x17\x05\x17\u0102\n\x17\x03\x17\x03\x17\x03\x18\x03" +
		"\x18\x07\x18\u0108\n\x18\f\x18\x0E\x18\u010B\v\x18\x03\x18\x05\x18\u010E" +
		"\n\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\u0116\n" +
		"\x19\x03\x19\x03\x19\x03\x19\x05\x19\u011B\n\x19\x03\x19\x03\x19\x03\x19" +
		"\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x07\x19\u0126\n\x19\f" +
		"\x19\x0E\x19\u0129\v\x19\x03\x19\x07\x19\u012C\n\x19\f\x19\x0E\x19\u012F" +
		"\v\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A" +
		"\x03\x1A\x03\x1A\x05\x1A\u013B\n\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03" +
		"\x1B\x03\x1B\x07\x1B\u0143\n\x1B\f\x1B\x0E\x1B\u0146\v\x1B\x03\x1C\x05" +
		"\x1C\u0149\n\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
		"\x03\x1D\x07\x1D\u0153\n\x1D\f\x1D\x0E\x1D\u0156\v\x1D\x03\x1E\x03\x1E" +
		"\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u015D\n\x1E\x03\x1F\x03\x1F\x03 \x03" +
		" \x03 \x03 \x03 \x03 \x03 \x05 \u0168\n \x03!\x03!\x03!\x03!\x03!\x03" +
		"!\x07!\u0170\n!\f!\x0E!\u0173\v!\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x07" +
		"\"\u017B\n\"\f\"\x0E\"\u017E\v\"\x03#\x03#\x03#\x03#\x03#\x03#\x07#\u0186" +
		"\n#\f#\x0E#\u0189\v#\x03$\x03$\x03$\x03$\x03$\x03$\x07$\u0191\n$\f$\x0E" +
		"$\u0194\v$\x03%\x03%\x03%\x03%\x03%\x03%\x07%\u019C\n%\f%\x0E%\u019F\v" +
		"%\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x07&\u01AA\n&\f&\x0E&\u01AD" +
		"\v&\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'" +
		"\x03\'\x03\'\x03\'\x03\'\x07\'\u01BE\n\'\f\'\x0E\'\u01C1\v\'\x03(\x03" +
		"(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x07(\u01CC\n(\f(\x0E(\u01CF\v(\x03" +
		")\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x07)\u01DA\n)\f)\x0E)\u01DD" +
		"\v)\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x07*\u01EB" +
		"\n*\f*\x0E*\u01EE\v*\x03+\x03+\x03+\x03+\x03+\x03+\x05+\u01F6\n+\x03," +
		"\x07,\u01F9\n,\f,\x0E,\u01FC\v,\x03,\x03,\x05,\u0200\n,\x03-\x03-\x05" +
		"-\u0204\n-\x03-\x05-\u0207\n-\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x05." +
		"\u0210\n.\x03.\x05.\u0213\n.\x03.\x03.\x03.\x05.\u0218\n.\x03.\x07.\u021B" +
		"\n.\f.\x0E.\u021E\v.\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03" +
		"/\x03/\x03/\x03/\x05/\u022D\n/\x030\x030\x030\x030\x030\x030\x030\x03" +
		"0\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x03" +
		"0\x030\x070\u0246\n0\f0\x0E0\u0249\v0\x031\x031\x031\x031\x031\x031\x05" +
		"1\u0251\n1\x032\x032\x032\x052\u0256\n2\x033\x033\x034\x034\x035\x035" +
		"\x036\x036\x076\u0260\n6\f6\x0E6\u0263\v6\x036\x036\x037\x037\x037\x03" +
		"7\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x03" +
		"7\x037\x037\x057\u027B\n7\x038\x038\x038\x038\x038\x038\x038\x038\x03" +
		"8\x038\x038\x038\x038\x038\x038\x038\x038\x058\u028E\n8\x038\x038\x05" +
		"8\u0292\n8\x038\x038\x058\u0296\n8\x038\x038\x058\u029A\n8\x039\x039\x03" +
		"9\x039\x039\x039\x039\x039\x039\x039\x059\u02A6\n9\x039\x059\u02A9\n9" +
		"\x039\x02\x02\x12\x1A048@BDFHJLNPRZ^:\x02\x02\x04\x02\x06\x02\b\x02\n" +
		"\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C" +
		"\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026" +
		"\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02" +
		"R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02" +
		"n\x02p\x02\x02\x06\x05\x02\x05\x05\x07\b\n\f\x03\x02\x1C&\x03\x02FG\x03" +
		"\x02HI\x02\u02D4\x02r\x03\x02\x02\x02\x04t\x03\x02\x02\x02\x06v\x03\x02" +
		"\x02\x02\bx\x03\x02\x02\x02\n\x8D\x03\x02\x02\x02\f\x8F\x03\x02\x02\x02" +
		"\x0E\x91\x03\x02\x02\x02\x10\x93\x03\x02\x02\x02\x12\x99\x03\x02\x02\x02" +
		"\x14\x9C\x03\x02\x02\x02\x16\xA3\x03\x02\x02\x02\x18\xAF\x03\x02\x02\x02" +
		"\x1A\xB1\x03\x02\x02\x02\x1C\xBC\x03\x02\x02\x02\x1E\xCC\x03\x02\x02\x02" +
		" \xD7\x03\x02\x02\x02\"\xE5\x03\x02\x02\x02$\xE7\x03\x02\x02\x02&\xEE" +
		"\x03\x02\x02\x02(\xF3\x03\x02\x02\x02*\xFB\x03\x02\x02\x02,\u0101\x03" +
		"\x02\x02\x02.\u0105\x03\x02\x02\x020\u0115\x03\x02\x02\x022\u013A\x03" +
		"\x02\x02\x024\u013C\x03\x02\x02\x026\u0148\x03\x02\x02\x028\u014C\x03" +
		"\x02\x02\x02:\u015C\x03\x02\x02\x02<\u015E\x03\x02\x02\x02>\u0167\x03" +
		"\x02\x02\x02@\u0169\x03\x02\x02\x02B\u0174\x03\x02\x02\x02D\u017F\x03" +
		"\x02\x02\x02F\u018A\x03\x02\x02\x02H\u0195\x03\x02\x02\x02J\u01A0\x03" +
		"\x02\x02\x02L\u01AE\x03\x02\x02\x02N\u01C2\x03\x02\x02\x02P\u01D0\x03" +
		"\x02\x02\x02R\u01DE\x03\x02\x02\x02T\u01F5\x03\x02\x02\x02V\u01FA\x03" +
		"\x02\x02\x02X\u0206\x03\x02\x02\x02Z\u0212\x03\x02\x02\x02\\\u022C\x03" +
		"\x02\x02\x02^\u022E\x03\x02\x02\x02`\u0250\x03\x02\x02\x02b\u0255\x03" +
		"\x02\x02\x02d\u0257\x03\x02\x02\x02f\u0259\x03\x02\x02\x02h\u025B\x03" +
		"\x02\x02\x02j\u025D\x03\x02\x02\x02l\u027A\x03\x02\x02\x02n\u0299\x03" +
		"\x02\x02\x02p\u02A8\x03\x02\x02\x02rs\t\x02\x02\x02s\x03\x03\x02\x02\x02" +
		"tu\t\x03\x02\x02u\x05\x03\x02\x02\x02vw\x07\x10\x02\x02w\x07\x03\x02\x02" +
		"\x02xy\t\x04\x02\x02y\t\x03\x02\x02\x02z\x8E\x07?\x02\x02{}\x05\b\x05" +
		"\x02|{\x03\x02\x02\x02|}\x03\x02\x02\x02}~\x03\x02\x02\x02~\x8E\x07@\x02" +
		"\x02\x7F\x81\x05\b\x05\x02\x80\x7F\x03\x02\x02\x02\x80\x81\x03\x02\x02" +
		"\x02\x81\x82\x03\x02\x02\x02\x82\x8E\x07A\x02\x02\x83\x85\x05\b\x05\x02" +
		"\x84\x83\x03\x02\x02\x02\x84\x85\x03\x02\x02\x02\x85\x86\x03\x02\x02\x02" +
		"\x86\x8E\x07B\x02\x02\x87\x89\x05\b\x05\x02\x88\x87\x03\x02\x02\x02\x88" +
		"\x89\x03\x02\x02\x02\x89\x8A\x03\x02\x02\x02\x8A\x8E\x07C\x02\x02\x8B" +
		"\x8E\x07D\x02\x02\x8C\x8E\x07E\x02\x02\x8Dz\x03\x02\x02\x02\x8D|\x03\x02" +
		"\x02\x02\x8D\x80\x03\x02\x02\x02\x8D\x84\x03\x02\x02\x02\x8D\x88\x03\x02" +
		"\x02\x02\x8D\x8B\x03\x02\x02\x02\x8D\x8C\x03\x02\x02\x02\x8E\v\x03\x02" +
		"\x02\x02\x8F\x90\t\x05\x02\x02\x90\r\x03\x02\x02\x02\x91\x92\x07M\x02" +
		"\x02\x92\x0F\x03\x02\x02\x02\x93\x94\x05\x12\n\x02\x94\x11\x03\x02\x02" +
		"\x02\x95\x98\x05\x14\v\x02\x96\x98\x05 \x11\x02\x97\x95\x03\x02\x02\x02" +
		"\x97\x96\x03\x02\x02\x02\x98\x9B\x03\x02\x02\x02\x99\x97\x03\x02\x02\x02" +
		"\x99\x9A\x03\x02\x02\x02\x9A\x13\x03\x02\x02\x02\x9B\x99\x03\x02\x02\x02" +
		"\x9C\x9D\x05\x16\f\x02\x9D\x9E\x05\x0E\b\x02\x9E\x9F\x07\x14\x02\x02\x9F" +
		"\xA0\x05\x18\r\x02\xA0\xA1\x07\x15\x02\x02\xA1\xA2\x05j6\x02\xA2\x15\x03" +
		"\x02\x02\x02\xA3\xA7\x05\n\x06\x02\xA4\xA6\x05.\x18\x02\xA5\xA4\x03\x02" +
		"\x02\x02\xA6\xA9\x03\x02\x02\x02\xA7\xA5\x03\x02\x02\x02\xA7\xA8\x03\x02" +
		"\x02\x02\xA8\x17\x03\x02\x02\x02\xA9\xA7\x03\x02\x02\x02\xAA\xB0\x05\x1A" +
		"\x0E\x02\xAB\xAC\x05\x1A\x0E\x02\xAC\xAD\x07\x11\x02\x02\xAD\xAE\x07\x03" +
		"\x02\x02\xAE\xB0\x03\x02\x02\x02\xAF\xAA\x03\x02\x02\x02\xAF\xAB\x03\x02" +
		"\x02\x02\xB0\x19\x03\x02\x02\x02\xB1\xB2\b\x0E\x01\x02\xB2\xB3\x05\x1C" +
		"\x0F\x02\xB3\xB9\x03\x02\x02\x02\xB4\xB5\f\x03\x02\x02\xB5\xB6\x07\x11" +
		"\x02\x02\xB6\xB8\x05\x1C\x0F\x02\xB7\xB4\x03\x02\x02\x02\xB8\xBB\x03\x02" +
		"\x02\x02\xB9\xB7\x03\x02\x02\x02\xB9\xBA\x03\x02\x02\x02\xBA\x1B\x03\x02" +
		"\x02\x02\xBB\xB9\x03\x02\x02\x02\xBC\xC0\x05&\x14\x02\xBD\xBF\x05.\x18" +
		"\x02\xBE\xBD\x03\x02\x02\x02\xBF\xC2\x03\x02\x02\x02\xC0\xBE\x03\x02\x02" +
		"\x02\xC0\xC1\x03\x02\x02\x02\xC1\xC4\x03\x02\x02\x02\xC2\xC0\x03\x02\x02" +
		"\x02\xC3\xC5\x05\x0E\b\x02\xC4\xC3\x03\x02\x02\x02\xC4\xC5\x03\x02\x02" +
		"\x02\xC5\xC9\x03\x02\x02\x02\xC6\xC8\x05\x1E\x10\x02\xC7\xC6\x03\x02\x02" +
		"\x02\xC8\xCB\x03\x02\x02\x02\xC9\xC7\x03\x02\x02\x02\xC9\xCA\x03\x02\x02" +
		"\x02\xCA\x1D\x03\x02\x02\x02\xCB\xC9\x03\x02\x02\x02\xCC\xCD\x07\x16\x02" +
		"\x02\xCD\xCE\x05<\x1F\x02\xCE\xCF\x07\x17\x02\x02\xCF\x1F\x03\x02\x02" +
		"\x02\xD0\xD8\x05\"\x12\x02\xD1\xD8\x05$\x13\x02\xD2\xD8\x056\x1C\x02\xD3" +
		"\xD8\x05j6\x02\xD4\xD8\x05l7\x02\xD5\xD8\x05n8\x02\xD6\xD8\x05p9\x02\xD7" +
		"\xD0\x03\x02\x02\x02\xD7\xD1\x03\x02\x02\x02\xD7\xD2\x03\x02\x02\x02\xD7" +
		"\xD3\x03\x02\x02\x02\xD7\xD4\x03\x02\x02\x02\xD7\xD5\x03\x02\x02\x02\xD7" +
		"\xD6\x03\x02\x02\x02\xD8!\x03\x02\x02\x02\xD9\xDA\x05\x0E\b\x02\xDA\xDB" +
		"\x07\x0F\x02\x02\xDB\xDC\x05 \x11\x02\xDC\xE6\x03\x02\x02\x02\xDD\xDE" +
		"\x073\x02\x02\xDE\xDF\x05<\x1F\x02\xDF\xE0\x07\x0F\x02\x02\xE0\xE1\x05" +
		" \x11\x02\xE1\xE6\x03\x02\x02\x02\xE2\xE3\x074\x02\x02\xE3\xE4\x07\x0F" +
		"\x02\x02\xE4\xE6\x05 \x11\x02\xE5\xD9\x03\x02\x02\x02\xE5\xDD\x03\x02" +
		"\x02\x02\xE5\xE2\x03\x02\x02\x02\xE6#\x03\x02\x02\x02\xE7\xE8\x05&\x14" +
		"\x02\xE8\xE9\x05(\x15\x02\xE9\xEA\x05\x06\x04\x02\xEA%\x03\x02\x02\x02" +
		"\xEB\xED\x05\f\x07\x02\xEC\xEB\x03\x02\x02\x02\xED\xF0\x03\x02\x02\x02" +
		"\xEE\xEC\x03\x02\x02\x02\xEE\xEF\x03\x02\x02\x02\xEF\xF1\x03\x02\x02\x02" +
		"\xF0\xEE\x03\x02\x02\x02\xF1\xF2\x05\n\x06\x02\xF2\'\x03\x02\x02\x02\xF3" +
		"\xF8\x05*\x16\x02\xF4\xF5\x07\x11\x02\x02\xF5\xF7\x05*\x16\x02\xF6\xF4" +
		"\x03\x02\x02\x02\xF7\xFA\x03\x02\x02\x02\xF8\xF6\x03\x02\x02\x02\xF8\xF9" +
		"\x03\x02\x02\x02\xF9)\x03\x02\x02\x02\xFA\xF8\x03\x02\x02\x02\xFB\xFE" +
		"\x05,\x17\x02\xFC\xFD\x07\x1C\x02\x02\xFD\xFF\x052\x1A\x02\xFE\xFC\x03" +
		"\x02\x02\x02\xFE\xFF\x03\x02\x02\x02\xFF+\x03\x02\x02\x02\u0100\u0102" +
		"\x05.\x18\x02\u0101\u0100\x03\x02\x02\x02\u0101\u0102\x03\x02\x02\x02" +
		"\u0102\u0103\x03\x02\x02\x02\u0103\u0104\x050\x19\x02\u0104-\x03\x02\x02" +
		"\x02\u0105\u0109\x07\x05\x02\x02\u0106\u0108\x05\f\x07\x02\u0107\u0106" +
		"\x03\x02\x02\x02\u0108\u010B\x03\x02\x02\x02\u0109\u0107\x03\x02\x02\x02" +
		"\u0109\u010A\x03\x02\x02\x02\u010A\u010D\x03\x02\x02\x02\u010B\u0109\x03" +
		"\x02\x02\x02\u010C\u010E\x05.\x18\x02\u010D\u010C\x03\x02\x02\x02\u010D" +
		"\u010E\x03\x02\x02\x02\u010E/\x03\x02\x02\x02\u010F\u0110\b\x19\x01\x02" +
		"\u0110\u0116\x05\x0E\b\x02\u0111\u0112\x07\x14\x02\x02\u0112\u0113\x05" +
		",\x17\x02\u0113\u0114\x07\x15\x02\x02\u0114\u0116\x03\x02\x02\x02\u0115" +
		"\u010F\x03\x02\x02\x02\u0115\u0111\x03\x02\x02\x02\u0116\u012D\x03\x02" +
		"\x02\x02\u0117\u0118\f\x05\x02\x02\u0118\u011A\x07\x16\x02\x02\u0119\u011B" +
		"\x05<\x1F\x02\u011A\u0119\x03\x02\x02\x02\u011A\u011B\x03\x02\x02\x02" +
		"\u011B\u011C\x03\x02\x02\x02\u011C\u012C\x07\x17\x02\x02\u011D\u011E\f" +
		"\x04\x02\x02\u011E\u011F\x07\x14\x02\x02\u011F\u0120\x05\x18\r\x02\u0120" +
		"\u0121\x07\x15\x02\x02\u0121\u012C\x03\x02\x02\x02\u0122\u0123\f\x03\x02" +
		"\x02\u0123\u0127\x07\x14\x02\x02\u0124\u0126\x05\x0E\b\x02\u0125\u0124" +
		"\x03\x02\x02\x02\u0126\u0129\x03\x02\x02\x02\u0127\u0125\x03\x02\x02\x02" +
		"\u0127\u0128\x03\x02\x02\x02\u0128\u012A\x03\x02\x02\x02\u0129\u0127\x03" +
		"\x02\x02\x02\u012A\u012C\x07\x15\x02\x02\u012B\u0117\x03\x02\x02\x02\u012B" +
		"\u011D\x03\x02\x02\x02\u012B\u0122\x03\x02\x02\x02\u012C\u012F\x03\x02" +
		"\x02\x02\u012D\u012B\x03\x02\x02\x02\u012D\u012E\x03\x02\x02\x02\u012E" +
		"1\x03\x02\x02\x02\u012F\u012D\x03\x02\x02\x02\u0130\u013B\x05:\x1E\x02" +
		"\u0131\u0132\x07\x18\x02\x02\u0132\u0133\x054\x1B\x02\u0133\u0134\x07" +
		"\x19\x02\x02\u0134\u013B\x03\x02\x02\x02\u0135\u0136\x07\x18\x02\x02\u0136" +
		"\u0137\x054\x1B\x02\u0137\u0138\x07\x11\x02\x02\u0138\u0139\x07\x19\x02" +
		"\x02\u0139\u013B\x03\x02\x02\x02\u013A\u0130\x03\x02\x02\x02\u013A\u0131" +
		"\x03\x02\x02\x02\u013A\u0135\x03\x02\x02\x02\u013B3\x03\x02\x02\x02\u013C" +
		"\u013D\b\x1B\x01\x02\u013D\u013E\x052\x1A\x02\u013E\u0144\x03\x02\x02" +
		"\x02\u013F\u0140\f\x03\x02\x02\u0140\u0141\x07\x11\x02\x02\u0141\u0143" +
		"\x052\x1A\x02\u0142\u013F\x03\x02\x02\x02\u0143\u0146\x03\x02\x02\x02" +
		"\u0144\u0142\x03\x02\x02\x02\u0144\u0145\x03\x02\x02\x02\u01455\x03\x02" +
		"\x02\x02\u0146\u0144\x03\x02\x02\x02\u0147\u0149\x058\x1D\x02\u0148\u0147" +
		"\x03\x02\x02\x02\u0148\u0149\x03\x02\x02\x02\u0149\u014A\x03\x02\x02\x02" +
		"\u014A\u014B\x05\x06\x04\x02\u014B7\x03\x02\x02\x02\u014C\u014D\b\x1D" +
		"\x01\x02\u014D\u014E\x05:\x1E\x02\u014E\u0154\x03\x02\x02\x02\u014F\u0150" +
		"\f\x03\x02\x02\u0150\u0151\x07\x11\x02\x02\u0151\u0153\x05:\x1E\x02\u0152" +
		"\u014F\x03\x02\x02\x02\u0153\u0156\x03\x02\x02\x02\u0154\u0152\x03\x02" +
		"\x02\x02\u0154\u0155\x03\x02\x02\x02\u01559\x03\x02\x02\x02\u0156\u0154" +
		"\x03\x02\x02\x02\u0157\u015D\x05> \x02\u0158\u0159\x05\\/\x02\u0159\u015A" +
		"\x05\x04\x03\x02\u015A\u015B\x05:\x1E\x02\u015B\u015D\x03\x02\x02\x02" +
		"\u015C\u0157\x03\x02\x02\x02\u015C\u0158\x03\x02\x02\x02\u015D;\x03\x02" +
		"\x02\x02\u015E\u015F\x05> \x02\u015F=\x03\x02\x02\x02\u0160\u0168\x05" +
		"@!\x02\u0161\u0162\x05@!\x02\u0162\u0163\x07\x0E\x02\x02\u0163\u0164\x05" +
		"8\x1D\x02\u0164\u0165\x07\x0F\x02\x02\u0165\u0166\x05> \x02\u0166\u0168" +
		"\x03\x02\x02\x02\u0167\u0160\x03\x02\x02\x02\u0167\u0161\x03\x02\x02\x02" +
		"\u0168?\x03\x02\x02\x02\u0169\u016A\b!\x01\x02\u016A\u016B\x05B\"\x02" +
		"\u016B\u0171\x03\x02\x02\x02\u016C\u016D\f\x03\x02\x02\u016D\u016E\x07" +
		"(\x02\x02\u016E\u0170\x05B\"\x02\u016F\u016C\x03\x02\x02\x02\u0170\u0173" +
		"\x03\x02\x02\x02\u0171\u016F\x03\x02\x02\x02\u0171\u0172\x03\x02\x02\x02" +
		"\u0172A\x03\x02\x02\x02\u0173\u0171\x03\x02\x02\x02\u0174\u0175\b\"\x01" +
		"\x02\u0175\u0176\x05D#\x02\u0176\u017C\x03\x02\x02\x02\u0177\u0178\f\x03" +
		"\x02\x02\u0178\u0179\x07\'\x02\x02\u0179\u017B\x05D#\x02\u017A\u0177\x03" +
		"\x02\x02\x02\u017B\u017E\x03\x02\x02\x02\u017C\u017A\x03\x02\x02\x02\u017C" +
		"\u017D\x03\x02\x02\x02\u017DC\x03\x02\x02\x02\u017E\u017C\x03\x02\x02" +
		"\x02\u017F\u0180\b#\x01\x02\u0180\u0181\x05F$\x02\u0181\u0187\x03\x02" +
		"\x02\x02\u0182\u0183\f\x03\x02\x02\u0183\u0184\x07\r\x02\x02\u0184\u0186" +
		"\x05F$\x02\u0185\u0182\x03\x02\x02\x02\u0186\u0189\x03\x02\x02\x02\u0187" +
		"\u0185\x03\x02\x02\x02\u0187\u0188\x03\x02\x02\x02\u0188E\x03\x02\x02" +
		"\x02\u0189\u0187\x03\x02\x02\x02\u018A\u018B\b$\x01\x02\u018B\u018C\x05" +
		"H%\x02\u018C\u0192\x03\x02\x02\x02\u018D\u018E\f\x03\x02\x02\u018E\u018F" +
		"\x07\x04\x02\x02\u018F\u0191\x05H%\x02\u0190\u018D\x03\x02\x02\x02\u0191" +
		"\u0194\x03\x02\x02\x02\u0192\u0190\x03\x02\x02\x02\u0192\u0193\x03\x02" +
		"\x02\x02\u0193G\x03\x02\x02\x02\u0194\u0192\x03\x02\x02\x02\u0195\u0196" +
		"\b%\x01\x02\u0196\u0197\x05J&\x02\u0197\u019D\x03\x02\x02\x02\u0198\u0199" +
		"\f\x03\x02\x02\u0199\u019A\x07\n\x02\x02\u019A\u019C\x05J&\x02\u019B\u0198" +
		"\x03\x02\x02\x02\u019C\u019F\x03\x02\x02\x02\u019D\u019B\x03\x02\x02\x02" +
		"\u019D\u019E\x03\x02\x02\x02\u019EI\x03\x02\x02\x02\u019F\u019D\x03\x02" +
		"\x02\x02\u01A0\u01A1\b&\x01\x02\u01A1\u01A2\x05L\'\x02\u01A2\u01AB\x03" +
		"\x02\x02\x02\u01A3\u01A4\f\x04\x02\x02\u01A4\u01A5\x07)\x02\x02\u01A5" +
		"\u01AA\x05L\'\x02\u01A6\u01A7\f\x03\x02\x02\u01A7\u01A8\x07*\x02\x02\u01A8" +
		"\u01AA\x05L\'\x02\u01A9\u01A3\x03\x02\x02\x02\u01A9\u01A6\x03\x02\x02" +
		"\x02\u01AA\u01AD\x03\x02\x02\x02\u01AB\u01A9\x03\x02\x02\x02\u01AB\u01AC" +
		"\x03\x02\x02\x02\u01ACK\x03\x02\x02\x02\u01AD\u01AB\x03\x02\x02\x02\u01AE" +
		"\u01AF\b\'\x01\x02\u01AF\u01B0\x05N(\x02\u01B0\u01BF\x03\x02\x02\x02\u01B1" +
		"\u01B2\f\x06\x02\x02\u01B2\u01B3\x07+\x02\x02\u01B3\u01BE\x05N(\x02\u01B4" +
		"\u01B5\f\x05\x02\x02\u01B5\u01B6\x07,\x02\x02\u01B6\u01BE\x05N(\x02\u01B7" +
		"\u01B8\f\x04\x02\x02\u01B8\u01B9\x07-\x02\x02\u01B9\u01BE\x05N(\x02\u01BA" +
		"\u01BB\f\x03\x02\x02\u01BB\u01BC\x07.\x02\x02\u01BC\u01BE\x05N(\x02\u01BD" +
		"\u01B1\x03\x02\x02\x02\u01BD\u01B4\x03\x02\x02\x02\u01BD\u01B7\x03\x02" +
		"\x02\x02\u01BD\u01BA\x03\x02\x02\x02\u01BE\u01C1\x03\x02\x02\x02\u01BF" +
		"\u01BD\x03\x02\x02\x02\u01BF\u01C0\x03\x02\x02\x02\u01C0M\x03\x02\x02" +
		"\x02\u01C1\u01BF\x03\x02\x02\x02\u01C2\u01C3\b(\x01\x02\u01C3\u01C4\x05" +
		"P)\x02\u01C4\u01CD\x03\x02\x02\x02\u01C5\u01C6\f\x04\x02\x02\u01C6\u01C7" +
		"\x07/\x02\x02\u01C7\u01CC\x05P)\x02\u01C8\u01C9\f\x03\x02\x02\u01C9\u01CA" +
		"\x070\x02\x02\u01CA\u01CC\x05P)\x02\u01CB\u01C5\x03\x02\x02\x02\u01CB" +
		"\u01C8\x03\x02\x02\x02\u01CC\u01CF\x03\x02\x02\x02\u01CD\u01CB\x03\x02" +
		"\x02\x02\u01CD\u01CE\x03\x02\x02\x02\u01CEO\x03\x02\x02\x02\u01CF\u01CD" +
		"\x03\x02\x02\x02\u01D0\u01D1\b)\x01\x02\u01D1\u01D2\x05R*\x02\u01D2\u01DB" +
		"\x03\x02\x02\x02\u01D3\u01D4\f\x04\x02\x02\u01D4\u01D5\x07\x07\x02\x02" +
		"\u01D5\u01DA\x05R*\x02\u01D6\u01D7\f\x03\x02\x02\u01D7\u01D8\x07\b\x02" +
		"\x02\u01D8\u01DA\x05R*\x02\u01D9\u01D3\x03\x02\x02\x02\u01D9\u01D6\x03" +
		"\x02\x02\x02\u01DA\u01DD\x03\x02\x02\x02\u01DB\u01D9\x03\x02\x02\x02\u01DB" +
		"\u01DC\x03\x02\x02\x02\u01DCQ\x03\x02\x02\x02\u01DD\u01DB\x03\x02\x02" +
		"\x02\u01DE\u01DF\b*\x01\x02\u01DF\u01E0\x05T+\x02\u01E0\u01EC\x03\x02" +
		"\x02\x02\u01E1\u01E2\f\x05\x02\x02\u01E2\u01E3\x07\x05\x02\x02\u01E3\u01EB" +
		"\x05T+\x02\u01E4\u01E5\f\x04\x02\x02\u01E5\u01E6\x07\x06\x02\x02\u01E6" +
		"\u01EB\x05T+\x02\u01E7\u01E8\f\x03\x02\x02\u01E8\u01E9\x07\t\x02\x02\u01E9" +
		"\u01EB\x05T+\x02\u01EA\u01E1\x03\x02\x02\x02\u01EA\u01E4\x03\x02\x02\x02" +
		"\u01EA\u01E7\x03\x02\x02\x02\u01EB\u01EE\x03\x02\x02\x02\u01EC\u01EA\x03" +
		"\x02\x02\x02\u01EC\u01ED\x03\x02\x02\x02\u01EDS\x03\x02\x02\x02\u01EE" +
		"\u01EC\x03\x02\x02\x02\u01EF\u01F6\x05\\/\x02\u01F0\u01F1\x07\x14\x02" +
		"\x02\u01F1\u01F2\x05V,\x02\u01F2\u01F3\x07\x15\x02\x02\u01F3\u01F4\x05" +
		"T+\x02\u01F4\u01F6\x03\x02\x02\x02\u01F5\u01EF\x03\x02\x02\x02\u01F5\u01F0" +
		"\x03\x02\x02\x02\u01F6U\x03\x02\x02\x02\u01F7\u01F9\x05\f\x07\x02\u01F8" +
		"\u01F7\x03\x02\x02\x02\u01F9\u01FC\x03\x02\x02\x02\u01FA\u01F8\x03\x02" +
		"\x02\x02\u01FA\u01FB\x03\x02\x02\x02\u01FB\u01FD\x03\x02\x02\x02\u01FC" +
		"\u01FA\x03\x02\x02\x02\u01FD\u01FF\x05\n\x06\x02\u01FE\u0200\x05X-\x02" +
		"\u01FF\u01FE\x03\x02\x02\x02\u01FF\u0200\x03\x02\x02\x02\u0200W\x03\x02" +
		"\x02\x02\u0201\u0207\x05.\x18\x02\u0202\u0204\x05.\x18\x02\u0203\u0202" +
		"\x03\x02\x02\x02\u0203\u0204\x03\x02\x02\x02\u0204\u0205\x03\x02\x02\x02" +
		"\u0205\u0207\x05Z.\x02\u0206\u0201\x03\x02\x02\x02\u0206\u0203\x03\x02" +
		"\x02\x02\u0207Y\x03\x02\x02\x02\u0208\u0209\b.\x01\x02\u0209\u020A\x07" +
		"\x14\x02\x02\u020A\u020B\x05X-\x02\u020B\u020C\x07\x15\x02\x02\u020C\u0213" +
		"\x03\x02\x02\x02\u020D\u020F\x07\x16\x02\x02\u020E\u0210\x05<\x1F\x02" +
		"\u020F\u020E\x03\x02\x02\x02\u020F\u0210\x03\x02\x02\x02\u0210\u0211\x03" +
		"\x02\x02\x02\u0211\u0213\x07\x17\x02\x02\u0212\u0208\x03\x02\x02\x02\u0212" +
		"\u020D\x03\x02\x02\x02\u0213\u021C\x03\x02\x02\x02\u0214\u0215\f\x03\x02" +
		"\x02\u0215\u0217\x07\x16\x02\x02\u0216\u0218\x05<\x1F\x02\u0217\u0216" +
		"\x03\x02\x02\x02\u0217\u0218\x03\x02\x02\x02\u0218\u0219\x03\x02\x02\x02" +
		"\u0219\u021B\x07\x17\x02\x02\u021A\u0214\x03\x02\x02\x02\u021B\u021E\x03" +
		"\x02\x02\x02\u021C\u021A\x03\x02\x02\x02\u021C\u021D\x03\x02\x02\x02\u021D" +
		"[\x03\x02\x02\x02\u021E\u021C\x03\x02\x02\x02\u021F\u022D\x05^0\x02\u0220" +
		"\u0221\x07\x1A\x02\x02\u0221\u022D\x05\\/\x02\u0222\u0223\x07\x1B\x02" +
		"\x02\u0223\u022D\x05\\/\x02\u0224\u0225\x05\x02\x02\x02\u0225\u0226\x05" +
		"T+";
	private static readonly _serializedATNSegment1: string =
		"\x02\u0226\u022D\x03\x02\x02\x02\u0227\u0228\x072\x02\x02\u0228\u0229" +
		"\x07\x14\x02\x02\u0229\u022A\x05V,\x02\u022A\u022B\x07\x15\x02\x02\u022B" +
		"\u022D\x03\x02\x02\x02\u022C\u021F\x03\x02\x02\x02\u022C\u0220\x03\x02" +
		"\x02\x02\u022C\u0222\x03\x02\x02\x02\u022C\u0224\x03\x02\x02\x02\u022C" +
		"\u0227\x03\x02\x02\x02\u022D]\x03\x02\x02\x02\u022E\u022F\b0\x01\x02\u022F" +
		"\u0230\x05`1\x02\u0230\u0247\x03\x02\x02\x02\u0231\u0232\f\b\x02\x02\u0232" +
		"\u0233\x07\x16\x02\x02\u0233\u0234\x058\x1D\x02\u0234\u0235\x07\x17\x02" +
		"\x02\u0235\u0246\x03\x02\x02\x02\u0236\u0237\f\x07\x02\x02\u0237\u0238" +
		"\x07\x14\x02\x02\u0238\u0239\x058\x1D\x02\u0239\u023A\x07\x15\x02\x02" +
		"\u023A\u0246\x03\x02\x02\x02\u023B\u023C\f\x06\x02\x02\u023C\u023D\x07" +
		"\x12\x02\x02\u023D\u0246\x05\x0E\b\x02\u023E\u023F\f\x05\x02\x02\u023F" +
		"\u0240\x07\x13\x02\x02\u0240\u0246\x05\x0E\b\x02\u0241\u0242\f\x04\x02" +
		"\x02\u0242\u0246\x07\x1A\x02\x02\u0243\u0244\f\x03\x02\x02\u0244\u0246" +
		"\x07\x1B\x02\x02\u0245\u0231\x03\x02\x02\x02\u0245\u0236\x03\x02\x02\x02" +
		"\u0245\u023B\x03\x02\x02\x02\u0245\u023E\x03\x02\x02\x02\u0245\u0241\x03" +
		"\x02\x02\x02\u0245\u0243\x03\x02\x02\x02\u0246\u0249\x03\x02\x02\x02\u0247" +
		"\u0245\x03\x02\x02\x02\u0247\u0248\x03\x02\x02\x02\u0248_\x03\x02\x02" +
		"\x02\u0249\u0247\x03\x02\x02\x02\u024A\u0251\x05\x0E\b\x02\u024B\u0251" +
		"\x05b2\x02\u024C\u024D\x07\x14\x02\x02\u024D\u024E\x058\x1D\x02\u024E" +
		"\u024F\x07\x15\x02\x02\u024F\u0251\x03\x02\x02\x02\u0250\u024A\x03\x02" +
		"\x02\x02\u0250\u024B\x03\x02\x02\x02\u0250\u024C\x03\x02\x02\x02\u0251" +
		"a\x03\x02\x02\x02\u0252\u0256\x05d3\x02\u0253\u0256\x05f4\x02\u0254\u0256" +
		"\x05h5\x02\u0255\u0252\x03\x02\x02\x02\u0255\u0253\x03\x02\x02\x02\u0255" +
		"\u0254\x03\x02\x02\x02\u0256c\x03\x02\x02\x02\u0257\u0258\x07J\x02\x02" +
		"\u0258e\x03\x02\x02\x02\u0259\u025A\x07K\x02\x02\u025Ag\x03\x02\x02\x02" +
		"\u025B\u025C\x07L\x02\x02\u025Ci\x03\x02\x02\x02\u025D\u0261\x07\x18\x02" +
		"\x02\u025E\u0260\x05 \x11\x02\u025F\u025E\x03\x02\x02\x02\u0260\u0263" +
		"\x03\x02\x02\x02\u0261\u025F\x03\x02\x02\x02\u0261\u0262\x03\x02\x02\x02" +
		"\u0262\u0264\x03\x02\x02\x02\u0263\u0261\x03\x02\x02\x02\u0264\u0265\x07" +
		"\x19\x02\x02\u0265k\x03\x02\x02\x02\u0266\u0267\x075\x02\x02\u0267\u0268" +
		"\x07\x14\x02\x02\u0268\u0269\x058\x1D\x02\u0269\u026A\x07\x15\x02\x02" +
		"\u026A\u026B\x05 \x11\x02\u026B\u027B\x03\x02\x02\x02\u026C\u026D\x07" +
		"5\x02\x02\u026D\u026E\x07\x14\x02\x02\u026E\u026F\x058\x1D\x02\u026F\u0270" +
		"\x07\x15\x02\x02\u0270\u0271\x05 \x11\x02\u0271\u0272\x076\x02\x02\u0272" +
		"\u0273\x05 \x11\x02\u0273\u027B\x03\x02\x02\x02\u0274\u0275\x077\x02\x02" +
		"\u0275\u0276\x07\x14\x02\x02\u0276\u0277\x058\x1D\x02\u0277\u0278\x07" +
		"\x15\x02\x02\u0278\u0279\x05 \x11\x02\u0279\u027B\x03\x02\x02\x02\u027A" +
		"\u0266\x03\x02\x02\x02\u027A\u026C\x03\x02\x02\x02\u027A\u0274\x03\x02" +
		"\x02\x02\u027Bm\x03\x02\x02\x02\u027C\u027D\x078\x02\x02\u027D\u027E\x07" +
		"\x14\x02\x02\u027E\u027F\x058\x1D\x02\u027F\u0280\x07\x15\x02\x02\u0280" +
		"\u0281\x05 \x11\x02\u0281\u029A\x03\x02\x02\x02\u0282\u0283\x079\x02\x02" +
		"\u0283\u0284\x05 \x11\x02\u0284\u0285\x078\x02\x02\u0285\u0286\x07\x14" +
		"\x02\x02\u0286\u0287\x058\x1D\x02\u0287\u0288\x07\x15\x02\x02\u0288\u0289" +
		"\x05\x06\x04\x02\u0289\u029A\x03\x02\x02\x02\u028A\u028B\x07:\x02\x02" +
		"\u028B\u028D\x07\x14\x02\x02\u028C\u028E\x058\x1D\x02\u028D\u028C\x03" +
		"\x02\x02\x02\u028D\u028E\x03\x02\x02\x02\u028E\u028F\x03\x02\x02\x02\u028F" +
		"\u0291\x07\x10\x02\x02\u0290\u0292\x058\x1D\x02\u0291\u0290\x03\x02\x02" +
		"\x02\u0291\u0292\x03\x02\x02\x02\u0292\u0293\x03\x02\x02\x02\u0293\u0295" +
		"\x07\x10\x02\x02\u0294\u0296\x058\x1D\x02\u0295\u0294\x03\x02\x02\x02" +
		"\u0295\u0296\x03\x02\x02\x02\u0296\u0297\x03\x02\x02\x02\u0297\u0298\x07" +
		"\x15\x02\x02\u0298\u029A\x05 \x11\x02\u0299\u027C\x03\x02\x02\x02\u0299" +
		"\u0282\x03\x02\x02\x02\u0299\u028A\x03\x02\x02\x02\u029Ao\x03\x02\x02" +
		"\x02\u029B\u029C\x07;\x02\x02\u029C\u029D\x05\x0E\b\x02\u029D\u029E\x05" +
		"\x06\x04\x02\u029E\u02A9\x03\x02\x02\x02\u029F\u02A0\x07<\x02\x02\u02A0" +
		"\u02A9\x05\x06\x04\x02\u02A1\u02A2\x07=\x02\x02\u02A2\u02A9\x05\x06\x04" +
		"\x02\u02A3\u02A5\x07>\x02\x02\u02A4\u02A6\x058\x1D\x02\u02A5\u02A4\x03" +
		"\x02\x02\x02\u02A5\u02A6\x03\x02\x02\x02\u02A6\u02A7\x03\x02\x02\x02\u02A7" +
		"\u02A9\x05\x06\x04\x02\u02A8\u029B\x03\x02\x02\x02\u02A8\u029F\x03\x02" +
		"\x02\x02\u02A8\u02A1\x03\x02\x02\x02\u02A8\u02A3\x03\x02\x02\x02\u02A9" +
		"q\x03\x02\x02\x02G|\x80\x84\x88\x8D\x97\x99\xA7\xAF\xB9\xC0\xC4\xC9\xD7" +
		"\xE5\xEE\xF8\xFE\u0101\u0109\u010D\u0115\u011A\u0127\u012B\u012D\u013A" +
		"\u0144\u0148\u0154\u015C\u0167\u0171\u017C\u0187\u0192\u019D\u01A9\u01AB" +
		"\u01BD\u01BF\u01CB\u01CD\u01D9\u01DB\u01EA\u01EC\u01F5\u01FA\u01FF\u0203" +
		"\u0206\u020F\u0212\u0217\u021C\u022C\u0245\u0247\u0250\u0255\u0261\u027A" +
		"\u028D\u0291\u0295\u0299\u02A5\u02A8";
	public static readonly _serializedATN: string = Utils.join(
		[
			CalcParser._serializedATNSegment0,
			CalcParser._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CalcParser.__ATN) {
			CalcParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CalcParser._serializedATN));
		}

		return CalcParser.__ATN;
	}

}

export class Unary_operatorContext extends ParserRuleContext {
	public AMPERSAND(): TerminalNode | undefined { return this.tryGetToken(CalcParser.AMPERSAND, 0); }
	public ASTERICK(): TerminalNode | undefined { return this.tryGetToken(CalcParser.ASTERICK, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(CalcParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(CalcParser.MINUS, 0); }
	public TILDA(): TerminalNode | undefined { return this.tryGetToken(CalcParser.TILDA, 0); }
	public EXCLAMATION_MARK(): TerminalNode | undefined { return this.tryGetToken(CalcParser.EXCLAMATION_MARK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_unary_operator; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterUnary_operator) {
			listener.enterUnary_operator(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitUnary_operator) {
			listener.exitUnary_operator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitUnary_operator) {
			return visitor.visitUnary_operator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Assignment_operatorContext extends ParserRuleContext {
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(CalcParser.EQUAL, 0); }
	public TIMES_EQUAL(): TerminalNode | undefined { return this.tryGetToken(CalcParser.TIMES_EQUAL, 0); }
	public DIVIDE_EQUAL(): TerminalNode | undefined { return this.tryGetToken(CalcParser.DIVIDE_EQUAL, 0); }
	public MODULO_EQUAL(): TerminalNode | undefined { return this.tryGetToken(CalcParser.MODULO_EQUAL, 0); }
	public PLUS_EQUAL(): TerminalNode | undefined { return this.tryGetToken(CalcParser.PLUS_EQUAL, 0); }
	public MINUS_EQUAL(): TerminalNode | undefined { return this.tryGetToken(CalcParser.MINUS_EQUAL, 0); }
	public SHIFT_LEFT_EQUAL(): TerminalNode | undefined { return this.tryGetToken(CalcParser.SHIFT_LEFT_EQUAL, 0); }
	public SHIFT_RIGHT_EQUAL(): TerminalNode | undefined { return this.tryGetToken(CalcParser.SHIFT_RIGHT_EQUAL, 0); }
	public BITWISE_AND_EQUAL(): TerminalNode | undefined { return this.tryGetToken(CalcParser.BITWISE_AND_EQUAL, 0); }
	public BITWISE_XOR_EQUAL(): TerminalNode | undefined { return this.tryGetToken(CalcParser.BITWISE_XOR_EQUAL, 0); }
	public BITWISE_OR_EQUAL(): TerminalNode | undefined { return this.tryGetToken(CalcParser.BITWISE_OR_EQUAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_assignment_operator; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterAssignment_operator) {
			listener.enterAssignment_operator(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitAssignment_operator) {
			listener.exitAssignment_operator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitAssignment_operator) {
			return visitor.visitAssignment_operator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class End_statement_delimiterContext extends ParserRuleContext {
	public SEMICOLON(): TerminalNode { return this.getToken(CalcParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_end_statement_delimiter; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterEnd_statement_delimiter) {
			listener.enterEnd_statement_delimiter(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitEnd_statement_delimiter) {
			listener.exitEnd_statement_delimiter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitEnd_statement_delimiter) {
			return visitor.visitEnd_statement_delimiter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type_sign_specifierContext extends ParserRuleContext {
	public UNSIGNED_TYPE_SPECIFIER(): TerminalNode | undefined { return this.tryGetToken(CalcParser.UNSIGNED_TYPE_SPECIFIER, 0); }
	public SIGNED_TYPE_SPECIFIER(): TerminalNode | undefined { return this.tryGetToken(CalcParser.SIGNED_TYPE_SPECIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_type_sign_specifier; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterType_sign_specifier) {
			listener.enterType_sign_specifier(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitType_sign_specifier) {
			listener.exitType_sign_specifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitType_sign_specifier) {
			return visitor.visitType_sign_specifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type_specifierContext extends ParserRuleContext {
	public VOID_TYPE_SPECIFIER(): TerminalNode | undefined { return this.tryGetToken(CalcParser.VOID_TYPE_SPECIFIER, 0); }
	public CHAR_TYPE_SPECIFIER(): TerminalNode | undefined { return this.tryGetToken(CalcParser.CHAR_TYPE_SPECIFIER, 0); }
	public type_sign_specifier(): Type_sign_specifierContext | undefined {
		return this.tryGetRuleContext(0, Type_sign_specifierContext);
	}
	public SHORT_TYPE_SPECIFIER(): TerminalNode | undefined { return this.tryGetToken(CalcParser.SHORT_TYPE_SPECIFIER, 0); }
	public INT_TYPE_SPECIFIER(): TerminalNode | undefined { return this.tryGetToken(CalcParser.INT_TYPE_SPECIFIER, 0); }
	public LONG_TYPE_SPECIFIER(): TerminalNode | undefined { return this.tryGetToken(CalcParser.LONG_TYPE_SPECIFIER, 0); }
	public FLOAT_TYPE_SPECIFIER(): TerminalNode | undefined { return this.tryGetToken(CalcParser.FLOAT_TYPE_SPECIFIER, 0); }
	public DOUBLE_TYPE_SPECIFIER(): TerminalNode | undefined { return this.tryGetToken(CalcParser.DOUBLE_TYPE_SPECIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_type_specifier; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterType_specifier) {
			listener.enterType_specifier(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitType_specifier) {
			listener.exitType_specifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitType_specifier) {
			return visitor.visitType_specifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type_qualifierContext extends ParserRuleContext {
	public CONST_TYPE_QUALIFIER(): TerminalNode | undefined { return this.tryGetToken(CalcParser.CONST_TYPE_QUALIFIER, 0); }
	public VOLATILE_TYPE_QUALIFIER(): TerminalNode | undefined { return this.tryGetToken(CalcParser.VOLATILE_TYPE_QUALIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_type_qualifier; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterType_qualifier) {
			listener.enterType_qualifier(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitType_qualifier) {
			listener.exitType_qualifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitType_qualifier) {
			return visitor.visitType_qualifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(CalcParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_identifier; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StartContext extends ParserRuleContext {
	public program(): ProgramContext {
		return this.getRuleContext(0, ProgramContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_start; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterStart) {
			listener.enterStart(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitStart) {
			listener.exitStart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitStart) {
			return visitor.visitStart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProgramContext extends ParserRuleContext {
	public function_definition(): Function_definitionContext[];
	public function_definition(i: number): Function_definitionContext;
	public function_definition(i?: number): Function_definitionContext | Function_definitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Function_definitionContext);
		} else {
			return this.getRuleContext(i, Function_definitionContext);
		}
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_program; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Function_definitionContext extends ParserRuleContext {
	public _type!: Return_typeContext;
	public _name!: IdentifierContext;
	public _params!: Parameter_type_listContext;
	public _body!: Compound_statementContext;
	public OPEN_PARENTHESES(): TerminalNode { return this.getToken(CalcParser.OPEN_PARENTHESES, 0); }
	public CLOSE_PARENTHESES(): TerminalNode { return this.getToken(CalcParser.CLOSE_PARENTHESES, 0); }
	public return_type(): Return_typeContext {
		return this.getRuleContext(0, Return_typeContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public parameter_type_list(): Parameter_type_listContext {
		return this.getRuleContext(0, Parameter_type_listContext);
	}
	public compound_statement(): Compound_statementContext {
		return this.getRuleContext(0, Compound_statementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_function_definition; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterFunction_definition) {
			listener.enterFunction_definition(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitFunction_definition) {
			listener.exitFunction_definition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitFunction_definition) {
			return visitor.visitFunction_definition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Return_typeContext extends ParserRuleContext {
	public type_specifier(): Type_specifierContext {
		return this.getRuleContext(0, Type_specifierContext);
	}
	public pointer(): PointerContext[];
	public pointer(i: number): PointerContext;
	public pointer(i?: number): PointerContext | PointerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PointerContext);
		} else {
			return this.getRuleContext(i, PointerContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_return_type; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterReturn_type) {
			listener.enterReturn_type(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitReturn_type) {
			listener.exitReturn_type(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitReturn_type) {
			return visitor.visitReturn_type(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Parameter_type_listContext extends ParserRuleContext {
	public parameter_list(): Parameter_listContext {
		return this.getRuleContext(0, Parameter_listContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(CalcParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_parameter_type_list; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterParameter_type_list) {
			listener.enterParameter_type_list(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitParameter_type_list) {
			listener.exitParameter_type_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitParameter_type_list) {
			return visitor.visitParameter_type_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Parameter_listContext extends ParserRuleContext {
	public parameter_declaration(): Parameter_declarationContext {
		return this.getRuleContext(0, Parameter_declarationContext);
	}
	public parameter_list(): Parameter_listContext | undefined {
		return this.tryGetRuleContext(0, Parameter_listContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(CalcParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_parameter_list; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterParameter_list) {
			listener.enterParameter_list(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitParameter_list) {
			listener.exitParameter_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitParameter_list) {
			return visitor.visitParameter_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Parameter_declarationContext extends ParserRuleContext {
	public declaration_specifiers(): Declaration_specifiersContext {
		return this.getRuleContext(0, Declaration_specifiersContext);
	}
	public pointer(): PointerContext[];
	public pointer(i: number): PointerContext;
	public pointer(i?: number): PointerContext | PointerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PointerContext);
		} else {
			return this.getRuleContext(i, PointerContext);
		}
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public array_declaration(): Array_declarationContext[];
	public array_declaration(i: number): Array_declarationContext;
	public array_declaration(i?: number): Array_declarationContext | Array_declarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Array_declarationContext);
		} else {
			return this.getRuleContext(i, Array_declarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_parameter_declaration; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterParameter_declaration) {
			listener.enterParameter_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitParameter_declaration) {
			listener.exitParameter_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitParameter_declaration) {
			return visitor.visitParameter_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Array_declarationContext extends ParserRuleContext {
	public OPEN_SQUARE_BRACKET(): TerminalNode { return this.getToken(CalcParser.OPEN_SQUARE_BRACKET, 0); }
	public CLOSE_SQUARE_BRACKET(): TerminalNode { return this.getToken(CalcParser.CLOSE_SQUARE_BRACKET, 0); }
	public constant_expression(): Constant_expressionContext | undefined {
		return this.tryGetRuleContext(0, Constant_expressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_array_declaration; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterArray_declaration) {
			listener.enterArray_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitArray_declaration) {
			listener.exitArray_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitArray_declaration) {
			return visitor.visitArray_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public labeled_statement(): Labeled_statementContext | undefined {
		return this.tryGetRuleContext(0, Labeled_statementContext);
	}
	public declaration_statement(): Declaration_statementContext | undefined {
		return this.tryGetRuleContext(0, Declaration_statementContext);
	}
	public expression_statement(): Expression_statementContext | undefined {
		return this.tryGetRuleContext(0, Expression_statementContext);
	}
	public compound_statement(): Compound_statementContext | undefined {
		return this.tryGetRuleContext(0, Compound_statementContext);
	}
	public selection_statement(): Selection_statementContext | undefined {
		return this.tryGetRuleContext(0, Selection_statementContext);
	}
	public iteration_statement(): Iteration_statementContext | undefined {
		return this.tryGetRuleContext(0, Iteration_statementContext);
	}
	public jump_statement(): Jump_statementContext | undefined {
		return this.tryGetRuleContext(0, Jump_statementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_statement; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Labeled_statementContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public COLON(): TerminalNode { return this.getToken(CalcParser.COLON, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public CASE(): TerminalNode | undefined { return this.tryGetToken(CalcParser.CASE, 0); }
	public constant_expression(): Constant_expressionContext | undefined {
		return this.tryGetRuleContext(0, Constant_expressionContext);
	}
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(CalcParser.DEFAULT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_labeled_statement; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterLabeled_statement) {
			listener.enterLabeled_statement(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitLabeled_statement) {
			listener.exitLabeled_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitLabeled_statement) {
			return visitor.visitLabeled_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Declaration_statementContext extends ParserRuleContext {
	public _type!: Declaration_specifiersContext;
	public _decl!: Init_declarator_listContext;
	public end_statement_delimiter(): End_statement_delimiterContext {
		return this.getRuleContext(0, End_statement_delimiterContext);
	}
	public declaration_specifiers(): Declaration_specifiersContext {
		return this.getRuleContext(0, Declaration_specifiersContext);
	}
	public init_declarator_list(): Init_declarator_listContext {
		return this.getRuleContext(0, Init_declarator_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_declaration_statement; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterDeclaration_statement) {
			listener.enterDeclaration_statement(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitDeclaration_statement) {
			listener.exitDeclaration_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitDeclaration_statement) {
			return visitor.visitDeclaration_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Declaration_specifiersContext extends ParserRuleContext {
	public type_specifier(): Type_specifierContext {
		return this.getRuleContext(0, Type_specifierContext);
	}
	public type_qualifier(): Type_qualifierContext[];
	public type_qualifier(i: number): Type_qualifierContext;
	public type_qualifier(i?: number): Type_qualifierContext | Type_qualifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Type_qualifierContext);
		} else {
			return this.getRuleContext(i, Type_qualifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_declaration_specifiers; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterDeclaration_specifiers) {
			listener.enterDeclaration_specifiers(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitDeclaration_specifiers) {
			listener.exitDeclaration_specifiers(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitDeclaration_specifiers) {
			return visitor.visitDeclaration_specifiers(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Init_declarator_listContext extends ParserRuleContext {
	public init_declarator(): Init_declaratorContext[];
	public init_declarator(i: number): Init_declaratorContext;
	public init_declarator(i?: number): Init_declaratorContext | Init_declaratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Init_declaratorContext);
		} else {
			return this.getRuleContext(i, Init_declaratorContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CalcParser.COMMA);
		} else {
			return this.getToken(CalcParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_init_declarator_list; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterInit_declarator_list) {
			listener.enterInit_declarator_list(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitInit_declarator_list) {
			listener.exitInit_declarator_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitInit_declarator_list) {
			return visitor.visitInit_declarator_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Init_declaratorContext extends ParserRuleContext {
	public declarator(): DeclaratorContext {
		return this.getRuleContext(0, DeclaratorContext);
	}
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(CalcParser.EQUAL, 0); }
	public initializer(): InitializerContext | undefined {
		return this.tryGetRuleContext(0, InitializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_init_declarator; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterInit_declarator) {
			listener.enterInit_declarator(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitInit_declarator) {
			listener.exitInit_declarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitInit_declarator) {
			return visitor.visitInit_declarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclaratorContext extends ParserRuleContext {
	public direct_declarator(): Direct_declaratorContext {
		return this.getRuleContext(0, Direct_declaratorContext);
	}
	public pointer(): PointerContext | undefined {
		return this.tryGetRuleContext(0, PointerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_declarator; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterDeclarator) {
			listener.enterDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitDeclarator) {
			listener.exitDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitDeclarator) {
			return visitor.visitDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PointerContext extends ParserRuleContext {
	public ASTERICK(): TerminalNode { return this.getToken(CalcParser.ASTERICK, 0); }
	public type_qualifier(): Type_qualifierContext[];
	public type_qualifier(i: number): Type_qualifierContext;
	public type_qualifier(i?: number): Type_qualifierContext | Type_qualifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Type_qualifierContext);
		} else {
			return this.getRuleContext(i, Type_qualifierContext);
		}
	}
	public pointer(): PointerContext | undefined {
		return this.tryGetRuleContext(0, PointerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_pointer; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterPointer) {
			listener.enterPointer(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitPointer) {
			listener.exitPointer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitPointer) {
			return visitor.visitPointer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Direct_declaratorContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public OPEN_PARENTHESES(): TerminalNode | undefined { return this.tryGetToken(CalcParser.OPEN_PARENTHESES, 0); }
	public declarator(): DeclaratorContext | undefined {
		return this.tryGetRuleContext(0, DeclaratorContext);
	}
	public CLOSE_PARENTHESES(): TerminalNode | undefined { return this.tryGetToken(CalcParser.CLOSE_PARENTHESES, 0); }
	public direct_declarator(): Direct_declaratorContext | undefined {
		return this.tryGetRuleContext(0, Direct_declaratorContext);
	}
	public OPEN_SQUARE_BRACKET(): TerminalNode | undefined { return this.tryGetToken(CalcParser.OPEN_SQUARE_BRACKET, 0); }
	public CLOSE_SQUARE_BRACKET(): TerminalNode | undefined { return this.tryGetToken(CalcParser.CLOSE_SQUARE_BRACKET, 0); }
	public constant_expression(): Constant_expressionContext | undefined {
		return this.tryGetRuleContext(0, Constant_expressionContext);
	}
	public parameter_type_list(): Parameter_type_listContext | undefined {
		return this.tryGetRuleContext(0, Parameter_type_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_direct_declarator; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterDirect_declarator) {
			listener.enterDirect_declarator(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitDirect_declarator) {
			listener.exitDirect_declarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitDirect_declarator) {
			return visitor.visitDirect_declarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InitializerContext extends ParserRuleContext {
	public assignment_expression(): Assignment_expressionContext | undefined {
		return this.tryGetRuleContext(0, Assignment_expressionContext);
	}
	public OPEN_CURLY_BRACKET(): TerminalNode | undefined { return this.tryGetToken(CalcParser.OPEN_CURLY_BRACKET, 0); }
	public initializer_list(): Initializer_listContext | undefined {
		return this.tryGetRuleContext(0, Initializer_listContext);
	}
	public CLOSE_CURLY_BRACKET(): TerminalNode | undefined { return this.tryGetToken(CalcParser.CLOSE_CURLY_BRACKET, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(CalcParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_initializer; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterInitializer) {
			listener.enterInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitInitializer) {
			listener.exitInitializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitInitializer) {
			return visitor.visitInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Initializer_listContext extends ParserRuleContext {
	public initializer(): InitializerContext {
		return this.getRuleContext(0, InitializerContext);
	}
	public initializer_list(): Initializer_listContext | undefined {
		return this.tryGetRuleContext(0, Initializer_listContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(CalcParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_initializer_list; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterInitializer_list) {
			listener.enterInitializer_list(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitInitializer_list) {
			listener.exitInitializer_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitInitializer_list) {
			return visitor.visitInitializer_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expression_statementContext extends ParserRuleContext {
	public _expr!: ExpressionContext;
	public end_statement_delimiter(): End_statement_delimiterContext {
		return this.getRuleContext(0, End_statement_delimiterContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_expression_statement; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterExpression_statement) {
			listener.enterExpression_statement(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitExpression_statement) {
			listener.exitExpression_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitExpression_statement) {
			return visitor.visitExpression_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public assignment_expression(): Assignment_expressionContext {
		return this.getRuleContext(0, Assignment_expressionContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(CalcParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_expression; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Assignment_expressionContext extends ParserRuleContext {
	public _assg!: Unary_expressionContext;
	public _operator!: Assignment_operatorContext;
	public _expr!: Assignment_expressionContext;
	public conditional_expression(): Conditional_expressionContext | undefined {
		return this.tryGetRuleContext(0, Conditional_expressionContext);
	}
	public unary_expression(): Unary_expressionContext | undefined {
		return this.tryGetRuleContext(0, Unary_expressionContext);
	}
	public assignment_operator(): Assignment_operatorContext | undefined {
		return this.tryGetRuleContext(0, Assignment_operatorContext);
	}
	public assignment_expression(): Assignment_expressionContext | undefined {
		return this.tryGetRuleContext(0, Assignment_expressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_assignment_expression; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterAssignment_expression) {
			listener.enterAssignment_expression(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitAssignment_expression) {
			listener.exitAssignment_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitAssignment_expression) {
			return visitor.visitAssignment_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Constant_expressionContext extends ParserRuleContext {
	public conditional_expression(): Conditional_expressionContext {
		return this.getRuleContext(0, Conditional_expressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_constant_expression; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterConstant_expression) {
			listener.enterConstant_expression(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitConstant_expression) {
			listener.exitConstant_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitConstant_expression) {
			return visitor.visitConstant_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Conditional_expressionContext extends ParserRuleContext {
	public _cond!: Logical_or_expressionContext;
	public _if_true!: ExpressionContext;
	public _if_false!: Conditional_expressionContext;
	public logical_or_expression(): Logical_or_expressionContext {
		return this.getRuleContext(0, Logical_or_expressionContext);
	}
	public QUESTION_MARK(): TerminalNode | undefined { return this.tryGetToken(CalcParser.QUESTION_MARK, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(CalcParser.COLON, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public conditional_expression(): Conditional_expressionContext | undefined {
		return this.tryGetRuleContext(0, Conditional_expressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_conditional_expression; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterConditional_expression) {
			listener.enterConditional_expression(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitConditional_expression) {
			listener.exitConditional_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitConditional_expression) {
			return visitor.visitConditional_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Logical_or_expressionContext extends ParserRuleContext {
	public _left!: Logical_or_expressionContext;
	public _operator!: Token;
	public _right!: Logical_and_expressionContext;
	public logical_and_expression(): Logical_and_expressionContext {
		return this.getRuleContext(0, Logical_and_expressionContext);
	}
	public logical_or_expression(): Logical_or_expressionContext | undefined {
		return this.tryGetRuleContext(0, Logical_or_expressionContext);
	}
	public BOOLEAN_OR(): TerminalNode | undefined { return this.tryGetToken(CalcParser.BOOLEAN_OR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_logical_or_expression; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterLogical_or_expression) {
			listener.enterLogical_or_expression(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitLogical_or_expression) {
			listener.exitLogical_or_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitLogical_or_expression) {
			return visitor.visitLogical_or_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Logical_and_expressionContext extends ParserRuleContext {
	public _left!: Logical_and_expressionContext;
	public _operator!: Token;
	public _right!: Inclusive_or_expressionContext;
	public inclusive_or_expression(): Inclusive_or_expressionContext {
		return this.getRuleContext(0, Inclusive_or_expressionContext);
	}
	public logical_and_expression(): Logical_and_expressionContext | undefined {
		return this.tryGetRuleContext(0, Logical_and_expressionContext);
	}
	public BOOLEAN_AND(): TerminalNode | undefined { return this.tryGetToken(CalcParser.BOOLEAN_AND, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_logical_and_expression; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterLogical_and_expression) {
			listener.enterLogical_and_expression(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitLogical_and_expression) {
			listener.exitLogical_and_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitLogical_and_expression) {
			return visitor.visitLogical_and_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Inclusive_or_expressionContext extends ParserRuleContext {
	public _left!: Inclusive_or_expressionContext;
	public _operator!: Token;
	public _right!: Exclusive_or_expressionContext;
	public exclusive_or_expression(): Exclusive_or_expressionContext {
		return this.getRuleContext(0, Exclusive_or_expressionContext);
	}
	public inclusive_or_expression(): Inclusive_or_expressionContext | undefined {
		return this.tryGetRuleContext(0, Inclusive_or_expressionContext);
	}
	public VERTICAL_BAR(): TerminalNode | undefined { return this.tryGetToken(CalcParser.VERTICAL_BAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_inclusive_or_expression; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterInclusive_or_expression) {
			listener.enterInclusive_or_expression(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitInclusive_or_expression) {
			listener.exitInclusive_or_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitInclusive_or_expression) {
			return visitor.visitInclusive_or_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Exclusive_or_expressionContext extends ParserRuleContext {
	public _left!: Exclusive_or_expressionContext;
	public _operator!: Token;
	public _right!: And_expressionContext;
	public and_expression(): And_expressionContext {
		return this.getRuleContext(0, And_expressionContext);
	}
	public exclusive_or_expression(): Exclusive_or_expressionContext | undefined {
		return this.tryGetRuleContext(0, Exclusive_or_expressionContext);
	}
	public CARET(): TerminalNode | undefined { return this.tryGetToken(CalcParser.CARET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_exclusive_or_expression; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterExclusive_or_expression) {
			listener.enterExclusive_or_expression(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitExclusive_or_expression) {
			listener.exitExclusive_or_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitExclusive_or_expression) {
			return visitor.visitExclusive_or_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class And_expressionContext extends ParserRuleContext {
	public _left!: And_expressionContext;
	public _operator!: Token;
	public _right!: Equality_expressionContext;
	public equality_expression(): Equality_expressionContext {
		return this.getRuleContext(0, Equality_expressionContext);
	}
	public and_expression(): And_expressionContext | undefined {
		return this.tryGetRuleContext(0, And_expressionContext);
	}
	public AMPERSAND(): TerminalNode | undefined { return this.tryGetToken(CalcParser.AMPERSAND, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_and_expression; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterAnd_expression) {
			listener.enterAnd_expression(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitAnd_expression) {
			listener.exitAnd_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitAnd_expression) {
			return visitor.visitAnd_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Equality_expressionContext extends ParserRuleContext {
	public _left!: Equality_expressionContext;
	public _operator!: Token;
	public _right!: Relational_expressionContext;
	public relational_expression(): Relational_expressionContext {
		return this.getRuleContext(0, Relational_expressionContext);
	}
	public equality_expression(): Equality_expressionContext | undefined {
		return this.tryGetRuleContext(0, Equality_expressionContext);
	}
	public EQUALITY_EQUAL(): TerminalNode | undefined { return this.tryGetToken(CalcParser.EQUALITY_EQUAL, 0); }
	public EQUALITY_NOT_EQUAL(): TerminalNode | undefined { return this.tryGetToken(CalcParser.EQUALITY_NOT_EQUAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_equality_expression; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterEquality_expression) {
			listener.enterEquality_expression(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitEquality_expression) {
			listener.exitEquality_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitEquality_expression) {
			return visitor.visitEquality_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Relational_expressionContext extends ParserRuleContext {
	public _left!: Relational_expressionContext;
	public _operator!: Token;
	public _right!: Shift_expressionContext;
	public shift_expression(): Shift_expressionContext {
		return this.getRuleContext(0, Shift_expressionContext);
	}
	public relational_expression(): Relational_expressionContext | undefined {
		return this.tryGetRuleContext(0, Relational_expressionContext);
	}
	public RELATIONAL_GREATER_THAN(): TerminalNode | undefined { return this.tryGetToken(CalcParser.RELATIONAL_GREATER_THAN, 0); }
	public RELATIONAL_LESS_THAN(): TerminalNode | undefined { return this.tryGetToken(CalcParser.RELATIONAL_LESS_THAN, 0); }
	public RELATIONAL_LESS_THAN_OR_EQUAL(): TerminalNode | undefined { return this.tryGetToken(CalcParser.RELATIONAL_LESS_THAN_OR_EQUAL, 0); }
	public RELATIONAL_GREATER_THAN_OR_EQUAL(): TerminalNode | undefined { return this.tryGetToken(CalcParser.RELATIONAL_GREATER_THAN_OR_EQUAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_relational_expression; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterRelational_expression) {
			listener.enterRelational_expression(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitRelational_expression) {
			listener.exitRelational_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitRelational_expression) {
			return visitor.visitRelational_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Shift_expressionContext extends ParserRuleContext {
	public _left!: Shift_expressionContext;
	public _operator!: Token;
	public _right!: Additive_expressionContext;
	public additive_expression(): Additive_expressionContext {
		return this.getRuleContext(0, Additive_expressionContext);
	}
	public shift_expression(): Shift_expressionContext | undefined {
		return this.tryGetRuleContext(0, Shift_expressionContext);
	}
	public SHIFT_LEFT(): TerminalNode | undefined { return this.tryGetToken(CalcParser.SHIFT_LEFT, 0); }
	public SHIFT_RIGHT(): TerminalNode | undefined { return this.tryGetToken(CalcParser.SHIFT_RIGHT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_shift_expression; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterShift_expression) {
			listener.enterShift_expression(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitShift_expression) {
			listener.exitShift_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitShift_expression) {
			return visitor.visitShift_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Additive_expressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_additive_expression; }
	public copyFrom(ctx: Additive_expressionContext): void {
		super.copyFrom(ctx);
	}
}
export class AdditiveNormalExpressionContext extends Additive_expressionContext {
	public multiplicative_expression(): Multiplicative_expressionContext {
		return this.getRuleContext(0, Multiplicative_expressionContext);
	}
	constructor(ctx: Additive_expressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterAdditiveNormalExpression) {
			listener.enterAdditiveNormalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitAdditiveNormalExpression) {
			listener.exitAdditiveNormalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitAdditiveNormalExpression) {
			return visitor.visitAdditiveNormalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AdditiveAdditionExpressionContext extends Additive_expressionContext {
	public _left!: Additive_expressionContext;
	public _operator!: Token;
	public _right!: Multiplicative_expressionContext;
	public additive_expression(): Additive_expressionContext {
		return this.getRuleContext(0, Additive_expressionContext);
	}
	public PLUS(): TerminalNode { return this.getToken(CalcParser.PLUS, 0); }
	public multiplicative_expression(): Multiplicative_expressionContext {
		return this.getRuleContext(0, Multiplicative_expressionContext);
	}
	constructor(ctx: Additive_expressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterAdditiveAdditionExpression) {
			listener.enterAdditiveAdditionExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitAdditiveAdditionExpression) {
			listener.exitAdditiveAdditionExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitAdditiveAdditionExpression) {
			return visitor.visitAdditiveAdditionExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AdditiveSubtractionExpressionContext extends Additive_expressionContext {
	public _left!: Additive_expressionContext;
	public _operator!: Token;
	public _right!: Multiplicative_expressionContext;
	public additive_expression(): Additive_expressionContext {
		return this.getRuleContext(0, Additive_expressionContext);
	}
	public MINUS(): TerminalNode { return this.getToken(CalcParser.MINUS, 0); }
	public multiplicative_expression(): Multiplicative_expressionContext {
		return this.getRuleContext(0, Multiplicative_expressionContext);
	}
	constructor(ctx: Additive_expressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterAdditiveSubtractionExpression) {
			listener.enterAdditiveSubtractionExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitAdditiveSubtractionExpression) {
			listener.exitAdditiveSubtractionExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitAdditiveSubtractionExpression) {
			return visitor.visitAdditiveSubtractionExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Multiplicative_expressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_multiplicative_expression; }
	public copyFrom(ctx: Multiplicative_expressionContext): void {
		super.copyFrom(ctx);
	}
}
export class MultiplicativeNormalExpressionContext extends Multiplicative_expressionContext {
	public cast_expression(): Cast_expressionContext {
		return this.getRuleContext(0, Cast_expressionContext);
	}
	constructor(ctx: Multiplicative_expressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterMultiplicativeNormalExpression) {
			listener.enterMultiplicativeNormalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitMultiplicativeNormalExpression) {
			listener.exitMultiplicativeNormalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitMultiplicativeNormalExpression) {
			return visitor.visitMultiplicativeNormalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MultiplicativeMultiplyExpressionContext extends Multiplicative_expressionContext {
	public _left!: Multiplicative_expressionContext;
	public _operator!: Token;
	public _right!: Cast_expressionContext;
	public multiplicative_expression(): Multiplicative_expressionContext {
		return this.getRuleContext(0, Multiplicative_expressionContext);
	}
	public ASTERICK(): TerminalNode { return this.getToken(CalcParser.ASTERICK, 0); }
	public cast_expression(): Cast_expressionContext {
		return this.getRuleContext(0, Cast_expressionContext);
	}
	constructor(ctx: Multiplicative_expressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterMultiplicativeMultiplyExpression) {
			listener.enterMultiplicativeMultiplyExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitMultiplicativeMultiplyExpression) {
			listener.exitMultiplicativeMultiplyExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitMultiplicativeMultiplyExpression) {
			return visitor.visitMultiplicativeMultiplyExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MultiplicativeDivideExpressionContext extends Multiplicative_expressionContext {
	public _left!: Multiplicative_expressionContext;
	public _operator!: Token;
	public _right!: Cast_expressionContext;
	public multiplicative_expression(): Multiplicative_expressionContext {
		return this.getRuleContext(0, Multiplicative_expressionContext);
	}
	public BACKSLASH(): TerminalNode { return this.getToken(CalcParser.BACKSLASH, 0); }
	public cast_expression(): Cast_expressionContext {
		return this.getRuleContext(0, Cast_expressionContext);
	}
	constructor(ctx: Multiplicative_expressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterMultiplicativeDivideExpression) {
			listener.enterMultiplicativeDivideExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitMultiplicativeDivideExpression) {
			listener.exitMultiplicativeDivideExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitMultiplicativeDivideExpression) {
			return visitor.visitMultiplicativeDivideExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MultiplicativeModuloExpressionContext extends Multiplicative_expressionContext {
	public _left!: Multiplicative_expressionContext;
	public _operator!: Token;
	public _right!: Cast_expressionContext;
	public multiplicative_expression(): Multiplicative_expressionContext {
		return this.getRuleContext(0, Multiplicative_expressionContext);
	}
	public PERCENT(): TerminalNode { return this.getToken(CalcParser.PERCENT, 0); }
	public cast_expression(): Cast_expressionContext {
		return this.getRuleContext(0, Cast_expressionContext);
	}
	constructor(ctx: Multiplicative_expressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterMultiplicativeModuloExpression) {
			listener.enterMultiplicativeModuloExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitMultiplicativeModuloExpression) {
			listener.exitMultiplicativeModuloExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitMultiplicativeModuloExpression) {
			return visitor.visitMultiplicativeModuloExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Cast_expressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_cast_expression; }
	public copyFrom(ctx: Cast_expressionContext): void {
		super.copyFrom(ctx);
	}
}
export class CastNormalExpressionContext extends Cast_expressionContext {
	public unary_expression(): Unary_expressionContext {
		return this.getRuleContext(0, Unary_expressionContext);
	}
	constructor(ctx: Cast_expressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterCastNormalExpression) {
			listener.enterCastNormalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitCastNormalExpression) {
			listener.exitCastNormalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitCastNormalExpression) {
			return visitor.visitCastNormalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CastTypeExpressionContext extends Cast_expressionContext {
	public _type!: Type_nameContext;
	public _expr!: Cast_expressionContext;
	public OPEN_PARENTHESES(): TerminalNode { return this.getToken(CalcParser.OPEN_PARENTHESES, 0); }
	public CLOSE_PARENTHESES(): TerminalNode { return this.getToken(CalcParser.CLOSE_PARENTHESES, 0); }
	public type_name(): Type_nameContext {
		return this.getRuleContext(0, Type_nameContext);
	}
	public cast_expression(): Cast_expressionContext {
		return this.getRuleContext(0, Cast_expressionContext);
	}
	constructor(ctx: Cast_expressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterCastTypeExpression) {
			listener.enterCastTypeExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitCastTypeExpression) {
			listener.exitCastTypeExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitCastTypeExpression) {
			return visitor.visitCastTypeExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type_nameContext extends ParserRuleContext {
	public type_specifier(): Type_specifierContext {
		return this.getRuleContext(0, Type_specifierContext);
	}
	public type_qualifier(): Type_qualifierContext[];
	public type_qualifier(i: number): Type_qualifierContext;
	public type_qualifier(i?: number): Type_qualifierContext | Type_qualifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Type_qualifierContext);
		} else {
			return this.getRuleContext(i, Type_qualifierContext);
		}
	}
	public abstract_declarator(): Abstract_declaratorContext | undefined {
		return this.tryGetRuleContext(0, Abstract_declaratorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_type_name; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterType_name) {
			listener.enterType_name(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitType_name) {
			listener.exitType_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitType_name) {
			return visitor.visitType_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Abstract_declaratorContext extends ParserRuleContext {
	public pointer(): PointerContext | undefined {
		return this.tryGetRuleContext(0, PointerContext);
	}
	public direct_abstract_declarator(): Direct_abstract_declaratorContext | undefined {
		return this.tryGetRuleContext(0, Direct_abstract_declaratorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_abstract_declarator; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterAbstract_declarator) {
			listener.enterAbstract_declarator(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitAbstract_declarator) {
			listener.exitAbstract_declarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitAbstract_declarator) {
			return visitor.visitAbstract_declarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Direct_abstract_declaratorContext extends ParserRuleContext {
	public OPEN_PARENTHESES(): TerminalNode | undefined { return this.tryGetToken(CalcParser.OPEN_PARENTHESES, 0); }
	public abstract_declarator(): Abstract_declaratorContext | undefined {
		return this.tryGetRuleContext(0, Abstract_declaratorContext);
	}
	public CLOSE_PARENTHESES(): TerminalNode | undefined { return this.tryGetToken(CalcParser.CLOSE_PARENTHESES, 0); }
	public OPEN_SQUARE_BRACKET(): TerminalNode | undefined { return this.tryGetToken(CalcParser.OPEN_SQUARE_BRACKET, 0); }
	public CLOSE_SQUARE_BRACKET(): TerminalNode | undefined { return this.tryGetToken(CalcParser.CLOSE_SQUARE_BRACKET, 0); }
	public constant_expression(): Constant_expressionContext | undefined {
		return this.tryGetRuleContext(0, Constant_expressionContext);
	}
	public direct_abstract_declarator(): Direct_abstract_declaratorContext | undefined {
		return this.tryGetRuleContext(0, Direct_abstract_declaratorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_direct_abstract_declarator; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterDirect_abstract_declarator) {
			listener.enterDirect_abstract_declarator(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitDirect_abstract_declarator) {
			listener.exitDirect_abstract_declarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitDirect_abstract_declarator) {
			return visitor.visitDirect_abstract_declarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Unary_expressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_unary_expression; }
	public copyFrom(ctx: Unary_expressionContext): void {
		super.copyFrom(ctx);
	}
}
export class PostfixUnaryExpressionContext extends Unary_expressionContext {
	public _expr!: Postfix_expressionContext;
	public postfix_expression(): Postfix_expressionContext {
		return this.getRuleContext(0, Postfix_expressionContext);
	}
	constructor(ctx: Unary_expressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterPostfixUnaryExpression) {
			listener.enterPostfixUnaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitPostfixUnaryExpression) {
			listener.exitPostfixUnaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitPostfixUnaryExpression) {
			return visitor.visitPostfixUnaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IncrementUnaryExpressionContext extends Unary_expressionContext {
	public _expr!: Unary_expressionContext;
	public INCREMENT(): TerminalNode { return this.getToken(CalcParser.INCREMENT, 0); }
	public unary_expression(): Unary_expressionContext {
		return this.getRuleContext(0, Unary_expressionContext);
	}
	constructor(ctx: Unary_expressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterIncrementUnaryExpression) {
			listener.enterIncrementUnaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitIncrementUnaryExpression) {
			listener.exitIncrementUnaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitIncrementUnaryExpression) {
			return visitor.visitIncrementUnaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DecrementUnaryExpressionContext extends Unary_expressionContext {
	public _expr!: Unary_expressionContext;
	public DECREMENT(): TerminalNode { return this.getToken(CalcParser.DECREMENT, 0); }
	public unary_expression(): Unary_expressionContext {
		return this.getRuleContext(0, Unary_expressionContext);
	}
	constructor(ctx: Unary_expressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterDecrementUnaryExpression) {
			listener.enterDecrementUnaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitDecrementUnaryExpression) {
			listener.exitDecrementUnaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitDecrementUnaryExpression) {
			return visitor.visitDecrementUnaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CastUnaryExpressionContext extends Unary_expressionContext {
	public _op!: Unary_operatorContext;
	public _expr!: Cast_expressionContext;
	public unary_operator(): Unary_operatorContext {
		return this.getRuleContext(0, Unary_operatorContext);
	}
	public cast_expression(): Cast_expressionContext {
		return this.getRuleContext(0, Cast_expressionContext);
	}
	constructor(ctx: Unary_expressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterCastUnaryExpression) {
			listener.enterCastUnaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitCastUnaryExpression) {
			listener.exitCastUnaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitCastUnaryExpression) {
			return visitor.visitCastUnaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SizeOfUnaryExpressionContext extends Unary_expressionContext {
	public _type!: Type_nameContext;
	public SIZE_OF(): TerminalNode { return this.getToken(CalcParser.SIZE_OF, 0); }
	public OPEN_PARENTHESES(): TerminalNode { return this.getToken(CalcParser.OPEN_PARENTHESES, 0); }
	public CLOSE_PARENTHESES(): TerminalNode { return this.getToken(CalcParser.CLOSE_PARENTHESES, 0); }
	public type_name(): Type_nameContext {
		return this.getRuleContext(0, Type_nameContext);
	}
	constructor(ctx: Unary_expressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterSizeOfUnaryExpression) {
			listener.enterSizeOfUnaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitSizeOfUnaryExpression) {
			listener.exitSizeOfUnaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitSizeOfUnaryExpression) {
			return visitor.visitSizeOfUnaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Postfix_expressionContext extends ParserRuleContext {
	public primary_expression(): Primary_expressionContext | undefined {
		return this.tryGetRuleContext(0, Primary_expressionContext);
	}
	public postfix_expression(): Postfix_expressionContext | undefined {
		return this.tryGetRuleContext(0, Postfix_expressionContext);
	}
	public OPEN_SQUARE_BRACKET(): TerminalNode | undefined { return this.tryGetToken(CalcParser.OPEN_SQUARE_BRACKET, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public CLOSE_SQUARE_BRACKET(): TerminalNode | undefined { return this.tryGetToken(CalcParser.CLOSE_SQUARE_BRACKET, 0); }
	public OPEN_PARENTHESES(): TerminalNode | undefined { return this.tryGetToken(CalcParser.OPEN_PARENTHESES, 0); }
	public CLOSE_PARENTHESES(): TerminalNode | undefined { return this.tryGetToken(CalcParser.CLOSE_PARENTHESES, 0); }
	public FULLSTOP(): TerminalNode | undefined { return this.tryGetToken(CalcParser.FULLSTOP, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public RIGHT_ARROW(): TerminalNode | undefined { return this.tryGetToken(CalcParser.RIGHT_ARROW, 0); }
	public INCREMENT(): TerminalNode | undefined { return this.tryGetToken(CalcParser.INCREMENT, 0); }
	public DECREMENT(): TerminalNode | undefined { return this.tryGetToken(CalcParser.DECREMENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_postfix_expression; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterPostfix_expression) {
			listener.enterPostfix_expression(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitPostfix_expression) {
			listener.exitPostfix_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitPostfix_expression) {
			return visitor.visitPostfix_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Primary_expressionContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public constant(): ConstantContext | undefined {
		return this.tryGetRuleContext(0, ConstantContext);
	}
	public OPEN_PARENTHESES(): TerminalNode | undefined { return this.tryGetToken(CalcParser.OPEN_PARENTHESES, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public CLOSE_PARENTHESES(): TerminalNode | undefined { return this.tryGetToken(CalcParser.CLOSE_PARENTHESES, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_primary_expression; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterPrimary_expression) {
			listener.enterPrimary_expression(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitPrimary_expression) {
			listener.exitPrimary_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitPrimary_expression) {
			return visitor.visitPrimary_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_constant; }
	public copyFrom(ctx: ConstantContext): void {
		super.copyFrom(ctx);
	}
}
export class IntegerConstantContext extends ConstantContext {
	public integer_constant(): Integer_constantContext {
		return this.getRuleContext(0, Integer_constantContext);
	}
	constructor(ctx: ConstantContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterIntegerConstant) {
			listener.enterIntegerConstant(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitIntegerConstant) {
			listener.exitIntegerConstant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitIntegerConstant) {
			return visitor.visitIntegerConstant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FloatConstantContext extends ConstantContext {
	public float_constant(): Float_constantContext {
		return this.getRuleContext(0, Float_constantContext);
	}
	constructor(ctx: ConstantContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterFloatConstant) {
			listener.enterFloatConstant(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitFloatConstant) {
			listener.exitFloatConstant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitFloatConstant) {
			return visitor.visitFloatConstant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CharacterConstantContext extends ConstantContext {
	public character_constant(): Character_constantContext {
		return this.getRuleContext(0, Character_constantContext);
	}
	constructor(ctx: ConstantContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterCharacterConstant) {
			listener.enterCharacterConstant(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitCharacterConstant) {
			listener.exitCharacterConstant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitCharacterConstant) {
			return visitor.visitCharacterConstant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Integer_constantContext extends ParserRuleContext {
	public INTEGER(): TerminalNode { return this.getToken(CalcParser.INTEGER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_integer_constant; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterInteger_constant) {
			listener.enterInteger_constant(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitInteger_constant) {
			listener.exitInteger_constant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitInteger_constant) {
			return visitor.visitInteger_constant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Float_constantContext extends ParserRuleContext {
	public FLOAT(): TerminalNode { return this.getToken(CalcParser.FLOAT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_float_constant; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterFloat_constant) {
			listener.enterFloat_constant(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitFloat_constant) {
			listener.exitFloat_constant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitFloat_constant) {
			return visitor.visitFloat_constant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Character_constantContext extends ParserRuleContext {
	public CHAR(): TerminalNode { return this.getToken(CalcParser.CHAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_character_constant; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterCharacter_constant) {
			listener.enterCharacter_constant(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitCharacter_constant) {
			listener.exitCharacter_constant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitCharacter_constant) {
			return visitor.visitCharacter_constant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Compound_statementContext extends ParserRuleContext {
	public OPEN_CURLY_BRACKET(): TerminalNode { return this.getToken(CalcParser.OPEN_CURLY_BRACKET, 0); }
	public CLOSE_CURLY_BRACKET(): TerminalNode { return this.getToken(CalcParser.CLOSE_CURLY_BRACKET, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_compound_statement; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterCompound_statement) {
			listener.enterCompound_statement(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitCompound_statement) {
			listener.exitCompound_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitCompound_statement) {
			return visitor.visitCompound_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Selection_statementContext extends ParserRuleContext {
	public _cond!: ExpressionContext;
	public _if_true!: StatementContext;
	public _if_false!: StatementContext;
	public _body!: StatementContext;
	public IF(): TerminalNode | undefined { return this.tryGetToken(CalcParser.IF, 0); }
	public OPEN_PARENTHESES(): TerminalNode { return this.getToken(CalcParser.OPEN_PARENTHESES, 0); }
	public CLOSE_PARENTHESES(): TerminalNode { return this.getToken(CalcParser.CLOSE_PARENTHESES, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(CalcParser.ELSE, 0); }
	public SWITCH(): TerminalNode | undefined { return this.tryGetToken(CalcParser.SWITCH, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_selection_statement; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterSelection_statement) {
			listener.enterSelection_statement(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitSelection_statement) {
			listener.exitSelection_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitSelection_statement) {
			return visitor.visitSelection_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Iteration_statementContext extends ParserRuleContext {
	public _cond!: ExpressionContext;
	public WHILE(): TerminalNode | undefined { return this.tryGetToken(CalcParser.WHILE, 0); }
	public OPEN_PARENTHESES(): TerminalNode { return this.getToken(CalcParser.OPEN_PARENTHESES, 0); }
	public CLOSE_PARENTHESES(): TerminalNode { return this.getToken(CalcParser.CLOSE_PARENTHESES, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public DO(): TerminalNode | undefined { return this.tryGetToken(CalcParser.DO, 0); }
	public end_statement_delimiter(): End_statement_delimiterContext | undefined {
		return this.tryGetRuleContext(0, End_statement_delimiterContext);
	}
	public FOR(): TerminalNode | undefined { return this.tryGetToken(CalcParser.FOR, 0); }
	public SEMICOLON(): TerminalNode[];
	public SEMICOLON(i: number): TerminalNode;
	public SEMICOLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CalcParser.SEMICOLON);
		} else {
			return this.getToken(CalcParser.SEMICOLON, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_iteration_statement; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterIteration_statement) {
			listener.enterIteration_statement(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitIteration_statement) {
			listener.exitIteration_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitIteration_statement) {
			return visitor.visitIteration_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Jump_statementContext extends ParserRuleContext {
	public GOTO(): TerminalNode | undefined { return this.tryGetToken(CalcParser.GOTO, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public end_statement_delimiter(): End_statement_delimiterContext {
		return this.getRuleContext(0, End_statement_delimiterContext);
	}
	public CONTINUE(): TerminalNode | undefined { return this.tryGetToken(CalcParser.CONTINUE, 0); }
	public BREAK(): TerminalNode | undefined { return this.tryGetToken(CalcParser.BREAK, 0); }
	public RETURN(): TerminalNode | undefined { return this.tryGetToken(CalcParser.RETURN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_jump_statement; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterJump_statement) {
			listener.enterJump_statement(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitJump_statement) {
			listener.exitJump_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitJump_statement) {
			return visitor.visitJump_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


