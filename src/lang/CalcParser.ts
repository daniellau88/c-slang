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
	public static readonly STRUCT = 61;
	public static readonly UNION = 62;
	public static readonly VOID_TYPE_SPECIFIER = 63;
	public static readonly CHAR_TYPE_SPECIFIER = 64;
	public static readonly SHORT_TYPE_SPECIFIER = 65;
	public static readonly INT_TYPE_SPECIFIER = 66;
	public static readonly LONG_TYPE_SPECIFIER = 67;
	public static readonly FLOAT_TYPE_SPECIFIER = 68;
	public static readonly DOUBLE_TYPE_SPECIFIER = 69;
	public static readonly SIGNED_TYPE_SPECIFIER = 70;
	public static readonly UNSIGNED_TYPE_SPECIFIER = 71;
	public static readonly CONST_TYPE_QUALIFIER = 72;
	public static readonly VOLATILE_TYPE_QUALIFIER = 73;
	public static readonly INTEGER = 74;
	public static readonly FLOAT = 75;
	public static readonly CHAR = 76;
	public static readonly IDENTIFIER = 77;
	public static readonly RULE_unary_operator = 0;
	public static readonly RULE_assignment_operator = 1;
	public static readonly RULE_end_statement_delimiter = 2;
	public static readonly RULE_pointer = 3;
	public static readonly RULE_type_sign_specifier = 4;
	public static readonly RULE_type_specifier = 5;
	public static readonly RULE_type_qualifier = 6;
	public static readonly RULE_identifier = 7;
	public static readonly RULE_start = 8;
	public static readonly RULE_program = 9;
	public static readonly RULE_function_definition = 10;
	public static readonly RULE_return_type = 11;
	public static readonly RULE_parameter_type_list = 12;
	public static readonly RULE_parameter_list = 13;
	public static readonly RULE_parameter_declaration = 14;
	public static readonly RULE_array_declaration = 15;
	public static readonly RULE_struct_specifier = 16;
	public static readonly RULE_union_specifier = 17;
	public static readonly RULE_struct_or_union_declaration = 18;
	public static readonly RULE_specifier_qualifier = 19;
	public static readonly RULE_struct_or_union_declarator_list = 20;
	public static readonly RULE_struct_or_union_declarator = 21;
	public static readonly RULE_statement = 22;
	public static readonly RULE_labeled_statement = 23;
	public static readonly RULE_declaration_statement = 24;
	public static readonly RULE_declaration_specifiers = 25;
	public static readonly RULE_init_declarator_list = 26;
	public static readonly RULE_init_declarator = 27;
	public static readonly RULE_declarator = 28;
	public static readonly RULE_direct_declarator = 29;
	public static readonly RULE_initializer = 30;
	public static readonly RULE_initializer_list = 31;
	public static readonly RULE_expression_statement = 32;
	public static readonly RULE_expression = 33;
	public static readonly RULE_assignment_expression = 34;
	public static readonly RULE_constant_expression = 35;
	public static readonly RULE_conditional_expression = 36;
	public static readonly RULE_logical_or_expression = 37;
	public static readonly RULE_logical_and_expression = 38;
	public static readonly RULE_inclusive_or_expression = 39;
	public static readonly RULE_exclusive_or_expression = 40;
	public static readonly RULE_and_expression = 41;
	public static readonly RULE_equality_expression = 42;
	public static readonly RULE_relational_expression = 43;
	public static readonly RULE_shift_expression = 44;
	public static readonly RULE_additive_expression = 45;
	public static readonly RULE_multiplicative_expression = 46;
	public static readonly RULE_cast_expression = 47;
	public static readonly RULE_type_name = 48;
	public static readonly RULE_abstract_declarator = 49;
	public static readonly RULE_direct_abstract_declarator = 50;
	public static readonly RULE_unary_expression = 51;
	public static readonly RULE_postfix_expression = 52;
	public static readonly RULE_primary_expression = 53;
	public static readonly RULE_constant = 54;
	public static readonly RULE_integer_constant = 55;
	public static readonly RULE_float_constant = 56;
	public static readonly RULE_character_constant = 57;
	public static readonly RULE_compound_statement = 58;
	public static readonly RULE_if_statement = 59;
	public static readonly RULE_switch_statement = 60;
	public static readonly RULE_switch_body = 61;
	public static readonly RULE_switch_case_body = 62;
	public static readonly RULE_switch_default_body = 63;
	public static readonly RULE_while_statement = 64;
	public static readonly RULE_do_statement = 65;
	public static readonly RULE_for_statement = 66;
	public static readonly RULE_goto_statement = 67;
	public static readonly RULE_continue_statement = 68;
	public static readonly RULE_break_statement = 69;
	public static readonly RULE_return_statement = 70;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"unary_operator", "assignment_operator", "end_statement_delimiter", "pointer", 
		"type_sign_specifier", "type_specifier", "type_qualifier", "identifier", 
		"start", "program", "function_definition", "return_type", "parameter_type_list", 
		"parameter_list", "parameter_declaration", "array_declaration", "struct_specifier", 
		"union_specifier", "struct_or_union_declaration", "specifier_qualifier", 
		"struct_or_union_declarator_list", "struct_or_union_declarator", "statement", 
		"labeled_statement", "declaration_statement", "declaration_specifiers", 
		"init_declarator_list", "init_declarator", "declarator", "direct_declarator", 
		"initializer", "initializer_list", "expression_statement", "expression", 
		"assignment_expression", "constant_expression", "conditional_expression", 
		"logical_or_expression", "logical_and_expression", "inclusive_or_expression", 
		"exclusive_or_expression", "and_expression", "equality_expression", "relational_expression", 
		"shift_expression", "additive_expression", "multiplicative_expression", 
		"cast_expression", "type_name", "abstract_declarator", "direct_abstract_declarator", 
		"unary_expression", "postfix_expression", "primary_expression", "constant", 
		"integer_constant", "float_constant", "character_constant", "compound_statement", 
		"if_statement", "switch_statement", "switch_body", "switch_case_body", 
		"switch_default_body", "while_statement", "do_statement", "for_statement", 
		"goto_statement", "continue_statement", "break_statement", "return_statement",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'...'", "'^'", "'*'", "'/'", "'+'", "'-'", "'%'", "'&'", "'~'", 
		"'!'", "'|'", "'?'", "':'", "';'", "','", "'.'", "'->'", "'('", "')'", 
		"'['", "']'", "'{'", "'}'", "'++'", "'--'", "'='", "'*='", "'/='", "'%='", 
		"'+='", "'-='", "'<<='", "'>>='", "'&='", "'^='", "'|='", "'&&'", "'||'", 
		"'=='", "'!='", "'>'", "'<'", "'<='", "'>='", "'<<'", "'>>'", undefined, 
		"'sizeof'", "'case'", "'default'", "'if'", "'else'", "'switch'", "'while'", 
		"'do'", "'for'", "'goto'", "'continue'", "'break'", "'return'", "'struct'", 
		"'union'", "'void'", "'char'", "'short'", "'int'", "'long'", "'float'", 
		"'double'", "'signed'", "'unsigned'", "'const'", "'volatile'",
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
		"RETURN", "STRUCT", "UNION", "VOID_TYPE_SPECIFIER", "CHAR_TYPE_SPECIFIER", 
		"SHORT_TYPE_SPECIFIER", "INT_TYPE_SPECIFIER", "LONG_TYPE_SPECIFIER", "FLOAT_TYPE_SPECIFIER", 
		"DOUBLE_TYPE_SPECIFIER", "SIGNED_TYPE_SPECIFIER", "UNSIGNED_TYPE_SPECIFIER", 
		"CONST_TYPE_QUALIFIER", "VOLATILE_TYPE_QUALIFIER", "INTEGER", "FLOAT", 
		"CHAR", "IDENTIFIER",
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
			this.state = 142;
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
			this.state = 144;
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
			this.state = 146;
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
	public pointer(): PointerContext {
		let _localctx: PointerContext = new PointerContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, CalcParser.RULE_pointer);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 149;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 148;
					this.match(CalcParser.ASTERICK);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 151;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
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
		this.enterRule(_localctx, 8, CalcParser.RULE_type_sign_specifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 153;
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
		this.enterRule(_localctx, 10, CalcParser.RULE_type_specifier);
		let _la: number;
		try {
			this.state = 176;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 155;
				this.match(CalcParser.VOID_TYPE_SPECIFIER);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 157;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CalcParser.SIGNED_TYPE_SPECIFIER || _la === CalcParser.UNSIGNED_TYPE_SPECIFIER) {
					{
					this.state = 156;
					this.type_sign_specifier();
					}
				}

				this.state = 159;
				this.match(CalcParser.CHAR_TYPE_SPECIFIER);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 161;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CalcParser.SIGNED_TYPE_SPECIFIER || _la === CalcParser.UNSIGNED_TYPE_SPECIFIER) {
					{
					this.state = 160;
					this.type_sign_specifier();
					}
				}

				this.state = 163;
				this.match(CalcParser.SHORT_TYPE_SPECIFIER);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 165;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CalcParser.SIGNED_TYPE_SPECIFIER || _la === CalcParser.UNSIGNED_TYPE_SPECIFIER) {
					{
					this.state = 164;
					this.type_sign_specifier();
					}
				}

				this.state = 167;
				this.match(CalcParser.INT_TYPE_SPECIFIER);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 169;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CalcParser.SIGNED_TYPE_SPECIFIER || _la === CalcParser.UNSIGNED_TYPE_SPECIFIER) {
					{
					this.state = 168;
					this.type_sign_specifier();
					}
				}

				this.state = 171;
				this.match(CalcParser.LONG_TYPE_SPECIFIER);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 172;
				this.match(CalcParser.FLOAT_TYPE_SPECIFIER);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 173;
				this.match(CalcParser.DOUBLE_TYPE_SPECIFIER);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 174;
				this.struct_specifier();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 175;
				this.union_specifier();
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
		this.enterRule(_localctx, 12, CalcParser.RULE_type_qualifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 178;
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
		this.enterRule(_localctx, 14, CalcParser.RULE_identifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 180;
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
		this.enterRule(_localctx, 16, CalcParser.RULE_start);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 182;
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
		this.enterRule(_localctx, 18, CalcParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 194;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CalcParser.ASTERICK) | (1 << CalcParser.PLUS) | (1 << CalcParser.MINUS) | (1 << CalcParser.AMPERSAND) | (1 << CalcParser.TILDA) | (1 << CalcParser.EXCLAMATION_MARK) | (1 << CalcParser.OPEN_PARENTHESES) | (1 << CalcParser.OPEN_CURLY_BRACKET) | (1 << CalcParser.INCREMENT) | (1 << CalcParser.DECREMENT))) !== 0) || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (CalcParser.SIZE_OF - 48)) | (1 << (CalcParser.IF - 48)) | (1 << (CalcParser.SWITCH - 48)) | (1 << (CalcParser.WHILE - 48)) | (1 << (CalcParser.DO - 48)) | (1 << (CalcParser.FOR - 48)) | (1 << (CalcParser.GOTO - 48)) | (1 << (CalcParser.CONTINUE - 48)) | (1 << (CalcParser.BREAK - 48)) | (1 << (CalcParser.RETURN - 48)) | (1 << (CalcParser.STRUCT - 48)) | (1 << (CalcParser.UNION - 48)) | (1 << (CalcParser.VOID_TYPE_SPECIFIER - 48)) | (1 << (CalcParser.CHAR_TYPE_SPECIFIER - 48)) | (1 << (CalcParser.SHORT_TYPE_SPECIFIER - 48)) | (1 << (CalcParser.INT_TYPE_SPECIFIER - 48)) | (1 << (CalcParser.LONG_TYPE_SPECIFIER - 48)) | (1 << (CalcParser.FLOAT_TYPE_SPECIFIER - 48)) | (1 << (CalcParser.DOUBLE_TYPE_SPECIFIER - 48)) | (1 << (CalcParser.SIGNED_TYPE_SPECIFIER - 48)) | (1 << (CalcParser.UNSIGNED_TYPE_SPECIFIER - 48)) | (1 << (CalcParser.CONST_TYPE_QUALIFIER - 48)) | (1 << (CalcParser.VOLATILE_TYPE_QUALIFIER - 48)) | (1 << (CalcParser.INTEGER - 48)) | (1 << (CalcParser.FLOAT - 48)) | (1 << (CalcParser.CHAR - 48)) | (1 << (CalcParser.IDENTIFIER - 48)))) !== 0)) {
				{
				this.state = 192;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
				case 1:
					{
					this.state = 184;
					this.function_definition();
					}
					break;

				case 2:
					{
					{
					this.state = 185;
					this.struct_specifier();
					this.state = 186;
					this.end_statement_delimiter();
					}
					}
					break;

				case 3:
					{
					{
					this.state = 188;
					this.union_specifier();
					this.state = 189;
					this.end_statement_delimiter();
					}
					}
					break;

				case 4:
					{
					this.state = 191;
					this.statement();
					}
					break;
				}
				}
				this.state = 196;
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
		this.enterRule(_localctx, 20, CalcParser.RULE_function_definition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 197;
			_localctx._type = this.return_type();
			this.state = 198;
			_localctx._name = this.identifier();
			this.state = 199;
			this.match(CalcParser.OPEN_PARENTHESES);
			this.state = 200;
			_localctx._params = this.parameter_type_list();
			this.state = 201;
			this.match(CalcParser.CLOSE_PARENTHESES);
			this.state = 202;
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
		this.enterRule(_localctx, 22, CalcParser.RULE_return_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 204;
			this.type_specifier();
			this.state = 206;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CalcParser.ASTERICK) {
				{
				this.state = 205;
				this.pointer();
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
	public parameter_type_list(): Parameter_type_listContext {
		let _localctx: Parameter_type_listContext = new Parameter_type_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, CalcParser.RULE_parameter_type_list);
		try {
			this.state = 213;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 208;
				this.parameter_list(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 209;
				this.parameter_list(0);
				this.state = 210;
				this.match(CalcParser.COMMA);
				this.state = 211;
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
		let _startState: number = 26;
		this.enterRecursionRule(_localctx, 26, CalcParser.RULE_parameter_list, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 216;
			this.parameter_declaration();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 223;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
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
					this.state = 218;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 219;
					this.match(CalcParser.COMMA);
					this.state = 220;
					this.parameter_declaration();
					}
					}
				}
				this.state = 225;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
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
		this.enterRule(_localctx, 28, CalcParser.RULE_parameter_declaration);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 226;
			this.declaration_specifiers();
			this.state = 228;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				{
				this.state = 227;
				this.pointer();
				}
				break;
			}
			this.state = 231;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				{
				this.state = 230;
				this.identifier();
				}
				break;
			}
			this.state = 236;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 233;
					this.array_declaration();
					}
					}
				}
				this.state = 238;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
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
		this.enterRule(_localctx, 30, CalcParser.RULE_array_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 239;
			this.match(CalcParser.OPEN_SQUARE_BRACKET);
			this.state = 241;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CalcParser.ASTERICK) | (1 << CalcParser.PLUS) | (1 << CalcParser.MINUS) | (1 << CalcParser.AMPERSAND) | (1 << CalcParser.TILDA) | (1 << CalcParser.EXCLAMATION_MARK) | (1 << CalcParser.OPEN_PARENTHESES) | (1 << CalcParser.INCREMENT) | (1 << CalcParser.DECREMENT))) !== 0) || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (CalcParser.SIZE_OF - 48)) | (1 << (CalcParser.INTEGER - 48)) | (1 << (CalcParser.FLOAT - 48)) | (1 << (CalcParser.CHAR - 48)) | (1 << (CalcParser.IDENTIFIER - 48)))) !== 0)) {
				{
				this.state = 240;
				this.constant_expression();
				}
			}

			this.state = 243;
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
	public struct_specifier(): Struct_specifierContext {
		let _localctx: Struct_specifierContext = new Struct_specifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, CalcParser.RULE_struct_specifier);
		let _la: number;
		try {
			this.state = 261;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 245;
				this.match(CalcParser.STRUCT);
				this.state = 247;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CalcParser.IDENTIFIER) {
					{
					this.state = 246;
					this.identifier();
					}
				}

				this.state = 249;
				this.match(CalcParser.OPEN_CURLY_BRACKET);
				this.state = 253;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 250;
					this.struct_or_union_declaration();
					this.state = 251;
					this.end_statement_delimiter();
					}
					}
					this.state = 255;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 61)) & ~0x1F) === 0 && ((1 << (_la - 61)) & ((1 << (CalcParser.STRUCT - 61)) | (1 << (CalcParser.UNION - 61)) | (1 << (CalcParser.VOID_TYPE_SPECIFIER - 61)) | (1 << (CalcParser.CHAR_TYPE_SPECIFIER - 61)) | (1 << (CalcParser.SHORT_TYPE_SPECIFIER - 61)) | (1 << (CalcParser.INT_TYPE_SPECIFIER - 61)) | (1 << (CalcParser.LONG_TYPE_SPECIFIER - 61)) | (1 << (CalcParser.FLOAT_TYPE_SPECIFIER - 61)) | (1 << (CalcParser.DOUBLE_TYPE_SPECIFIER - 61)) | (1 << (CalcParser.SIGNED_TYPE_SPECIFIER - 61)) | (1 << (CalcParser.UNSIGNED_TYPE_SPECIFIER - 61)) | (1 << (CalcParser.CONST_TYPE_QUALIFIER - 61)) | (1 << (CalcParser.VOLATILE_TYPE_QUALIFIER - 61)))) !== 0));
				this.state = 257;
				this.match(CalcParser.CLOSE_CURLY_BRACKET);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 259;
				this.match(CalcParser.STRUCT);
				this.state = 260;
				this.identifier();
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
	public union_specifier(): Union_specifierContext {
		let _localctx: Union_specifierContext = new Union_specifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, CalcParser.RULE_union_specifier);
		let _la: number;
		try {
			this.state = 277;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 263;
				this.match(CalcParser.UNION);
				this.state = 265;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CalcParser.IDENTIFIER) {
					{
					this.state = 264;
					this.identifier();
					}
				}

				this.state = 267;
				this.match(CalcParser.OPEN_CURLY_BRACKET);
				this.state = 269;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 268;
					this.struct_or_union_declaration();
					}
					}
					this.state = 271;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 61)) & ~0x1F) === 0 && ((1 << (_la - 61)) & ((1 << (CalcParser.STRUCT - 61)) | (1 << (CalcParser.UNION - 61)) | (1 << (CalcParser.VOID_TYPE_SPECIFIER - 61)) | (1 << (CalcParser.CHAR_TYPE_SPECIFIER - 61)) | (1 << (CalcParser.SHORT_TYPE_SPECIFIER - 61)) | (1 << (CalcParser.INT_TYPE_SPECIFIER - 61)) | (1 << (CalcParser.LONG_TYPE_SPECIFIER - 61)) | (1 << (CalcParser.FLOAT_TYPE_SPECIFIER - 61)) | (1 << (CalcParser.DOUBLE_TYPE_SPECIFIER - 61)) | (1 << (CalcParser.SIGNED_TYPE_SPECIFIER - 61)) | (1 << (CalcParser.UNSIGNED_TYPE_SPECIFIER - 61)) | (1 << (CalcParser.CONST_TYPE_QUALIFIER - 61)) | (1 << (CalcParser.VOLATILE_TYPE_QUALIFIER - 61)))) !== 0));
				this.state = 273;
				this.match(CalcParser.CLOSE_CURLY_BRACKET);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 275;
				this.match(CalcParser.UNION);
				this.state = 276;
				this.identifier();
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
	public struct_or_union_declaration(): Struct_or_union_declarationContext {
		let _localctx: Struct_or_union_declarationContext = new Struct_or_union_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, CalcParser.RULE_struct_or_union_declaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 279;
			this.specifier_qualifier();
			this.state = 280;
			this.struct_or_union_declarator_list(0);
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
	public specifier_qualifier(): Specifier_qualifierContext {
		let _localctx: Specifier_qualifierContext = new Specifier_qualifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, CalcParser.RULE_specifier_qualifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 285;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CalcParser.CONST_TYPE_QUALIFIER || _la === CalcParser.VOLATILE_TYPE_QUALIFIER) {
				{
				{
				this.state = 282;
				this.type_qualifier();
				}
				}
				this.state = 287;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 288;
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

	public struct_or_union_declarator_list(): Struct_or_union_declarator_listContext;
	public struct_or_union_declarator_list(_p: number): Struct_or_union_declarator_listContext;
	// @RuleVersion(0)
	public struct_or_union_declarator_list(_p?: number): Struct_or_union_declarator_listContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Struct_or_union_declarator_listContext = new Struct_or_union_declarator_listContext(this._ctx, _parentState);
		let _prevctx: Struct_or_union_declarator_listContext = _localctx;
		let _startState: number = 40;
		this.enterRecursionRule(_localctx, 40, CalcParser.RULE_struct_or_union_declarator_list, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 291;
			this.struct_or_union_declarator();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 298;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Struct_or_union_declarator_listContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_struct_or_union_declarator_list);
					this.state = 293;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 294;
					this.match(CalcParser.COMMA);
					this.state = 295;
					this.struct_or_union_declarator();
					}
					}
				}
				this.state = 300;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
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
	public struct_or_union_declarator(): Struct_or_union_declaratorContext {
		let _localctx: Struct_or_union_declaratorContext = new Struct_or_union_declaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, CalcParser.RULE_struct_or_union_declarator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 301;
			this.declarator();
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
		this.enterRule(_localctx, 44, CalcParser.RULE_statement);
		try {
			this.state = 316;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 303;
				this.labeled_statement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 304;
				this.declaration_statement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 305;
				this.expression_statement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 306;
				this.compound_statement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 307;
				this.if_statement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 308;
				this.switch_statement();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 309;
				this.while_statement();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 310;
				this.do_statement();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 311;
				this.for_statement();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 312;
				this.goto_statement();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 313;
				this.continue_statement();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 314;
				this.break_statement();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 315;
				this.return_statement();
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
		this.enterRule(_localctx, 46, CalcParser.RULE_labeled_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 318;
			this.identifier();
			this.state = 319;
			this.match(CalcParser.COLON);
			this.state = 320;
			this.statement();
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
		this.enterRule(_localctx, 48, CalcParser.RULE_declaration_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 322;
			_localctx._type = this.declaration_specifiers();
			this.state = 323;
			_localctx._decl = this.init_declarator_list();
			this.state = 324;
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
		this.enterRule(_localctx, 50, CalcParser.RULE_declaration_specifiers);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 329;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CalcParser.CONST_TYPE_QUALIFIER || _la === CalcParser.VOLATILE_TYPE_QUALIFIER) {
				{
				{
				this.state = 326;
				this.type_qualifier();
				}
				}
				this.state = 331;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 332;
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
		this.enterRule(_localctx, 52, CalcParser.RULE_init_declarator_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 334;
			this.init_declarator();
			this.state = 339;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CalcParser.COMMA) {
				{
				{
				this.state = 335;
				this.match(CalcParser.COMMA);
				this.state = 336;
				this.init_declarator();
				}
				}
				this.state = 341;
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
		this.enterRule(_localctx, 54, CalcParser.RULE_init_declarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 342;
			this.declarator();
			this.state = 345;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CalcParser.EQUAL) {
				{
				this.state = 343;
				this.match(CalcParser.EQUAL);
				this.state = 344;
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
		this.enterRule(_localctx, 56, CalcParser.RULE_declarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 348;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CalcParser.ASTERICK) {
				{
				this.state = 347;
				this.pointer();
				}
			}

			this.state = 350;
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
		let _startState: number = 58;
		this.enterRecursionRule(_localctx, 58, CalcParser.RULE_direct_declarator, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 358;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CalcParser.IDENTIFIER:
				{
				this.state = 353;
				this.identifier();
				}
				break;
			case CalcParser.OPEN_PARENTHESES:
				{
				this.state = 354;
				this.match(CalcParser.OPEN_PARENTHESES);
				this.state = 355;
				this.declarator();
				this.state = 356;
				this.match(CalcParser.CLOSE_PARENTHESES);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 382;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 380;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
					case 1:
						{
						_localctx = new Direct_declaratorContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_direct_declarator);
						this.state = 360;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 361;
						this.match(CalcParser.OPEN_SQUARE_BRACKET);
						this.state = 363;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CalcParser.ASTERICK) | (1 << CalcParser.PLUS) | (1 << CalcParser.MINUS) | (1 << CalcParser.AMPERSAND) | (1 << CalcParser.TILDA) | (1 << CalcParser.EXCLAMATION_MARK) | (1 << CalcParser.OPEN_PARENTHESES) | (1 << CalcParser.INCREMENT) | (1 << CalcParser.DECREMENT))) !== 0) || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (CalcParser.SIZE_OF - 48)) | (1 << (CalcParser.INTEGER - 48)) | (1 << (CalcParser.FLOAT - 48)) | (1 << (CalcParser.CHAR - 48)) | (1 << (CalcParser.IDENTIFIER - 48)))) !== 0)) {
							{
							this.state = 362;
							this.constant_expression();
							}
						}

						this.state = 365;
						this.match(CalcParser.CLOSE_SQUARE_BRACKET);
						}
						break;

					case 2:
						{
						_localctx = new Direct_declaratorContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_direct_declarator);
						this.state = 366;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 367;
						this.match(CalcParser.OPEN_PARENTHESES);
						this.state = 368;
						this.parameter_type_list();
						this.state = 369;
						this.match(CalcParser.CLOSE_PARENTHESES);
						}
						break;

					case 3:
						{
						_localctx = new Direct_declaratorContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_direct_declarator);
						this.state = 371;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 372;
						this.match(CalcParser.OPEN_PARENTHESES);
						this.state = 376;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === CalcParser.IDENTIFIER) {
							{
							{
							this.state = 373;
							this.identifier();
							}
							}
							this.state = 378;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 379;
						this.match(CalcParser.CLOSE_PARENTHESES);
						}
						break;
					}
					}
				}
				this.state = 384;
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
	// @RuleVersion(0)
	public initializer(): InitializerContext {
		let _localctx: InitializerContext = new InitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, CalcParser.RULE_initializer);
		let _la: number;
		try {
			this.state = 393;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CalcParser.ASTERICK:
			case CalcParser.PLUS:
			case CalcParser.MINUS:
			case CalcParser.AMPERSAND:
			case CalcParser.TILDA:
			case CalcParser.EXCLAMATION_MARK:
			case CalcParser.OPEN_PARENTHESES:
			case CalcParser.INCREMENT:
			case CalcParser.DECREMENT:
			case CalcParser.SIZE_OF:
			case CalcParser.INTEGER:
			case CalcParser.FLOAT:
			case CalcParser.CHAR:
			case CalcParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 385;
				this.conditional_expression();
				}
				break;
			case CalcParser.OPEN_CURLY_BRACKET:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 386;
				this.match(CalcParser.OPEN_CURLY_BRACKET);
				this.state = 387;
				this.initializer_list(0);
				this.state = 389;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CalcParser.COMMA) {
					{
					this.state = 388;
					this.match(CalcParser.COMMA);
					}
				}

				this.state = 391;
				this.match(CalcParser.CLOSE_CURLY_BRACKET);
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
		let _startState: number = 62;
		this.enterRecursionRule(_localctx, 62, CalcParser.RULE_initializer_list, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 396;
			this.initializer();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 403;
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
					_localctx = new Initializer_listContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_initializer_list);
					this.state = 398;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 399;
					this.match(CalcParser.COMMA);
					this.state = 400;
					this.initializer();
					}
					}
				}
				this.state = 405;
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
	// @RuleVersion(0)
	public expression_statement(): Expression_statementContext {
		let _localctx: Expression_statementContext = new Expression_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, CalcParser.RULE_expression_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 406;
			_localctx._expr = this.expression(0);
			this.state = 407;
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
		let _startState: number = 66;
		this.enterRecursionRule(_localctx, 66, CalcParser.RULE_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 410;
			this.assignment_expression();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 417;
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
					_localctx = new ExpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression);
					this.state = 412;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 413;
					this.match(CalcParser.COMMA);
					this.state = 414;
					this.assignment_expression();
					}
					}
				}
				this.state = 419;
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
	// @RuleVersion(0)
	public assignment_expression(): Assignment_expressionContext {
		let _localctx: Assignment_expressionContext = new Assignment_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, CalcParser.RULE_assignment_expression);
		try {
			this.state = 425;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 420;
				this.conditional_expression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 421;
				_localctx._assg = this.unary_expression();
				this.state = 422;
				_localctx._operator = this.assignment_operator();
				this.state = 423;
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
		this.enterRule(_localctx, 70, CalcParser.RULE_constant_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 427;
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
		this.enterRule(_localctx, 72, CalcParser.RULE_conditional_expression);
		try {
			this.state = 436;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 429;
				this.logical_or_expression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 430;
				_localctx._cond = this.logical_or_expression(0);
				this.state = 431;
				this.match(CalcParser.QUESTION_MARK);
				this.state = 432;
				_localctx._if_true = this.expression(0);
				this.state = 433;
				this.match(CalcParser.COLON);
				this.state = 434;
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
		let _startState: number = 74;
		this.enterRecursionRule(_localctx, 74, CalcParser.RULE_logical_or_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 439;
			this.logical_and_expression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 446;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
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
					this.state = 441;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 442;
					_localctx._operator = this.match(CalcParser.BOOLEAN_OR);
					this.state = 443;
					_localctx._right = this.logical_and_expression(0);
					}
					}
				}
				this.state = 448;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
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
		let _startState: number = 76;
		this.enterRecursionRule(_localctx, 76, CalcParser.RULE_logical_and_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 450;
			this.inclusive_or_expression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 457;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
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
					this.state = 452;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 453;
					_localctx._operator = this.match(CalcParser.BOOLEAN_AND);
					this.state = 454;
					_localctx._right = this.inclusive_or_expression(0);
					}
					}
				}
				this.state = 459;
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
		let _startState: number = 78;
		this.enterRecursionRule(_localctx, 78, CalcParser.RULE_inclusive_or_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 461;
			this.exclusive_or_expression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 468;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
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
					this.state = 463;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 464;
					_localctx._operator = this.match(CalcParser.VERTICAL_BAR);
					this.state = 465;
					_localctx._right = this.exclusive_or_expression(0);
					}
					}
				}
				this.state = 470;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
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
		let _startState: number = 80;
		this.enterRecursionRule(_localctx, 80, CalcParser.RULE_exclusive_or_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 472;
			this.and_expression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 479;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
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
					this.state = 474;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 475;
					_localctx._operator = this.match(CalcParser.CARET);
					this.state = 476;
					_localctx._right = this.and_expression(0);
					}
					}
				}
				this.state = 481;
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
		let _startState: number = 82;
		this.enterRecursionRule(_localctx, 82, CalcParser.RULE_and_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 483;
			this.equality_expression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 490;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
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
					this.state = 485;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 486;
					_localctx._operator = this.match(CalcParser.AMPERSAND);
					this.state = 487;
					_localctx._right = this.equality_expression(0);
					}
					}
				}
				this.state = 492;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
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
		let _startState: number = 84;
		this.enterRecursionRule(_localctx, 84, CalcParser.RULE_equality_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 494;
			this.relational_expression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 504;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 502;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
					case 1:
						{
						_localctx = new Equality_expressionContext(_parentctx, _parentState);
						_localctx._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_equality_expression);
						this.state = 496;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 497;
						_localctx._operator = this.match(CalcParser.EQUALITY_EQUAL);
						this.state = 498;
						_localctx._right = this.relational_expression(0);
						}
						break;

					case 2:
						{
						_localctx = new Equality_expressionContext(_parentctx, _parentState);
						_localctx._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_equality_expression);
						this.state = 499;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 500;
						_localctx._operator = this.match(CalcParser.EQUALITY_NOT_EQUAL);
						this.state = 501;
						_localctx._right = this.relational_expression(0);
						}
						break;
					}
					}
				}
				this.state = 506;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
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
		let _startState: number = 86;
		this.enterRecursionRule(_localctx, 86, CalcParser.RULE_relational_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 508;
			this.shift_expression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 524;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 522;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 46, this._ctx) ) {
					case 1:
						{
						_localctx = new Relational_expressionContext(_parentctx, _parentState);
						_localctx._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_relational_expression);
						this.state = 510;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 511;
						_localctx._operator = this.match(CalcParser.RELATIONAL_GREATER_THAN);
						this.state = 512;
						_localctx._right = this.shift_expression(0);
						}
						break;

					case 2:
						{
						_localctx = new Relational_expressionContext(_parentctx, _parentState);
						_localctx._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_relational_expression);
						this.state = 513;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 514;
						_localctx._operator = this.match(CalcParser.RELATIONAL_LESS_THAN);
						this.state = 515;
						_localctx._right = this.shift_expression(0);
						}
						break;

					case 3:
						{
						_localctx = new Relational_expressionContext(_parentctx, _parentState);
						_localctx._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_relational_expression);
						this.state = 516;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 517;
						_localctx._operator = this.match(CalcParser.RELATIONAL_LESS_THAN_OR_EQUAL);
						this.state = 518;
						_localctx._right = this.shift_expression(0);
						}
						break;

					case 4:
						{
						_localctx = new Relational_expressionContext(_parentctx, _parentState);
						_localctx._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_relational_expression);
						this.state = 519;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 520;
						_localctx._operator = this.match(CalcParser.RELATIONAL_GREATER_THAN_OR_EQUAL);
						this.state = 521;
						_localctx._right = this.shift_expression(0);
						}
						break;
					}
					}
				}
				this.state = 526;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
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
		let _startState: number = 88;
		this.enterRecursionRule(_localctx, 88, CalcParser.RULE_shift_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 528;
			this.additive_expression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 538;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 536;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
					case 1:
						{
						_localctx = new Shift_expressionContext(_parentctx, _parentState);
						_localctx._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_shift_expression);
						this.state = 530;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 531;
						_localctx._operator = this.match(CalcParser.SHIFT_LEFT);
						this.state = 532;
						_localctx._right = this.additive_expression(0);
						}
						break;

					case 2:
						{
						_localctx = new Shift_expressionContext(_parentctx, _parentState);
						_localctx._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_shift_expression);
						this.state = 533;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 534;
						_localctx._operator = this.match(CalcParser.SHIFT_RIGHT);
						this.state = 535;
						_localctx._right = this.additive_expression(0);
						}
						break;
					}
					}
				}
				this.state = 540;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
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
		let _startState: number = 90;
		this.enterRecursionRule(_localctx, 90, CalcParser.RULE_additive_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			_localctx = new AdditiveNormalExpressionContext(_localctx);
			this._ctx = _localctx;
			_prevctx = _localctx;

			this.state = 542;
			this.multiplicative_expression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 552;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 550;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 50, this._ctx) ) {
					case 1:
						{
						_localctx = new AdditiveAdditionExpressionContext(new Additive_expressionContext(_parentctx, _parentState));
						(_localctx as AdditiveAdditionExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_additive_expression);
						this.state = 544;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 545;
						(_localctx as AdditiveAdditionExpressionContext)._operator = this.match(CalcParser.PLUS);
						this.state = 546;
						(_localctx as AdditiveAdditionExpressionContext)._right = this.multiplicative_expression(0);
						}
						break;

					case 2:
						{
						_localctx = new AdditiveSubtractionExpressionContext(new Additive_expressionContext(_parentctx, _parentState));
						(_localctx as AdditiveSubtractionExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_additive_expression);
						this.state = 547;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 548;
						(_localctx as AdditiveSubtractionExpressionContext)._operator = this.match(CalcParser.MINUS);
						this.state = 549;
						(_localctx as AdditiveSubtractionExpressionContext)._right = this.multiplicative_expression(0);
						}
						break;
					}
					}
				}
				this.state = 554;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
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
		let _startState: number = 92;
		this.enterRecursionRule(_localctx, 92, CalcParser.RULE_multiplicative_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			_localctx = new MultiplicativeNormalExpressionContext(_localctx);
			this._ctx = _localctx;
			_prevctx = _localctx;

			this.state = 556;
			this.cast_expression();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 569;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 567;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 52, this._ctx) ) {
					case 1:
						{
						_localctx = new MultiplicativeMultiplyExpressionContext(new Multiplicative_expressionContext(_parentctx, _parentState));
						(_localctx as MultiplicativeMultiplyExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_multiplicative_expression);
						this.state = 558;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 559;
						(_localctx as MultiplicativeMultiplyExpressionContext)._operator = this.match(CalcParser.ASTERICK);
						this.state = 560;
						(_localctx as MultiplicativeMultiplyExpressionContext)._right = this.cast_expression();
						}
						break;

					case 2:
						{
						_localctx = new MultiplicativeDivideExpressionContext(new Multiplicative_expressionContext(_parentctx, _parentState));
						(_localctx as MultiplicativeDivideExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_multiplicative_expression);
						this.state = 561;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 562;
						(_localctx as MultiplicativeDivideExpressionContext)._operator = this.match(CalcParser.BACKSLASH);
						this.state = 563;
						(_localctx as MultiplicativeDivideExpressionContext)._right = this.cast_expression();
						}
						break;

					case 3:
						{
						_localctx = new MultiplicativeModuloExpressionContext(new Multiplicative_expressionContext(_parentctx, _parentState));
						(_localctx as MultiplicativeModuloExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_multiplicative_expression);
						this.state = 564;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 565;
						(_localctx as MultiplicativeModuloExpressionContext)._operator = this.match(CalcParser.PERCENT);
						this.state = 566;
						(_localctx as MultiplicativeModuloExpressionContext)._right = this.cast_expression();
						}
						break;
					}
					}
				}
				this.state = 571;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
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
		this.enterRule(_localctx, 94, CalcParser.RULE_cast_expression);
		try {
			this.state = 578;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 54, this._ctx) ) {
			case 1:
				_localctx = new CastNormalExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 572;
				this.unary_expression();
				}
				break;

			case 2:
				_localctx = new CastTypeExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 573;
				this.match(CalcParser.OPEN_PARENTHESES);
				this.state = 574;
				(_localctx as CastTypeExpressionContext)._type = this.type_name();
				this.state = 575;
				this.match(CalcParser.CLOSE_PARENTHESES);
				this.state = 576;
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
		this.enterRule(_localctx, 96, CalcParser.RULE_type_name);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 583;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CalcParser.CONST_TYPE_QUALIFIER || _la === CalcParser.VOLATILE_TYPE_QUALIFIER) {
				{
				{
				this.state = 580;
				this.type_qualifier();
				}
				}
				this.state = 585;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 586;
			this.type_specifier();
			this.state = 588;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CalcParser.ASTERICK) | (1 << CalcParser.OPEN_PARENTHESES) | (1 << CalcParser.OPEN_SQUARE_BRACKET))) !== 0)) {
				{
				this.state = 587;
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
		this.enterRule(_localctx, 98, CalcParser.RULE_abstract_declarator);
		let _la: number;
		try {
			this.state = 595;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 58, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 590;
				this.pointer();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 592;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CalcParser.ASTERICK) {
					{
					this.state = 591;
					this.pointer();
					}
				}

				this.state = 594;
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
		let _startState: number = 100;
		this.enterRecursionRule(_localctx, 100, CalcParser.RULE_direct_abstract_declarator, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 607;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CalcParser.OPEN_PARENTHESES:
				{
				this.state = 598;
				this.match(CalcParser.OPEN_PARENTHESES);
				this.state = 599;
				this.abstract_declarator();
				this.state = 600;
				this.match(CalcParser.CLOSE_PARENTHESES);
				}
				break;
			case CalcParser.OPEN_SQUARE_BRACKET:
				{
				this.state = 602;
				this.match(CalcParser.OPEN_SQUARE_BRACKET);
				this.state = 604;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CalcParser.ASTERICK) | (1 << CalcParser.PLUS) | (1 << CalcParser.MINUS) | (1 << CalcParser.AMPERSAND) | (1 << CalcParser.TILDA) | (1 << CalcParser.EXCLAMATION_MARK) | (1 << CalcParser.OPEN_PARENTHESES) | (1 << CalcParser.INCREMENT) | (1 << CalcParser.DECREMENT))) !== 0) || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (CalcParser.SIZE_OF - 48)) | (1 << (CalcParser.INTEGER - 48)) | (1 << (CalcParser.FLOAT - 48)) | (1 << (CalcParser.CHAR - 48)) | (1 << (CalcParser.IDENTIFIER - 48)))) !== 0)) {
					{
					this.state = 603;
					this.constant_expression();
					}
				}

				this.state = 606;
				this.match(CalcParser.CLOSE_SQUARE_BRACKET);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 617;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
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
					this.state = 609;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 610;
					this.match(CalcParser.OPEN_SQUARE_BRACKET);
					this.state = 612;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CalcParser.ASTERICK) | (1 << CalcParser.PLUS) | (1 << CalcParser.MINUS) | (1 << CalcParser.AMPERSAND) | (1 << CalcParser.TILDA) | (1 << CalcParser.EXCLAMATION_MARK) | (1 << CalcParser.OPEN_PARENTHESES) | (1 << CalcParser.INCREMENT) | (1 << CalcParser.DECREMENT))) !== 0) || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (CalcParser.SIZE_OF - 48)) | (1 << (CalcParser.INTEGER - 48)) | (1 << (CalcParser.FLOAT - 48)) | (1 << (CalcParser.CHAR - 48)) | (1 << (CalcParser.IDENTIFIER - 48)))) !== 0)) {
						{
						this.state = 611;
						this.constant_expression();
						}
					}

					this.state = 614;
					this.match(CalcParser.CLOSE_SQUARE_BRACKET);
					}
					}
				}
				this.state = 619;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
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
		this.enterRule(_localctx, 102, CalcParser.RULE_unary_expression);
		try {
			this.state = 633;
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
				this.state = 620;
				(_localctx as PostfixUnaryExpressionContext)._expr = this.postfix_expression(0);
				}
				break;
			case CalcParser.INCREMENT:
				_localctx = new IncrementUnaryExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 621;
				this.match(CalcParser.INCREMENT);
				this.state = 622;
				(_localctx as IncrementUnaryExpressionContext)._expr = this.unary_expression();
				}
				break;
			case CalcParser.DECREMENT:
				_localctx = new DecrementUnaryExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 623;
				this.match(CalcParser.DECREMENT);
				this.state = 624;
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
				this.state = 625;
				(_localctx as CastUnaryExpressionContext)._op = this.unary_operator();
				this.state = 626;
				(_localctx as CastUnaryExpressionContext)._expr = this.cast_expression();
				}
				break;
			case CalcParser.SIZE_OF:
				_localctx = new SizeOfUnaryExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 628;
				this.match(CalcParser.SIZE_OF);
				this.state = 629;
				this.match(CalcParser.OPEN_PARENTHESES);
				this.state = 630;
				(_localctx as SizeOfUnaryExpressionContext)._type = this.type_name();
				this.state = 631;
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
		let _startState: number = 104;
		this.enterRecursionRule(_localctx, 104, CalcParser.RULE_postfix_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 636;
			this.primary_expression();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 660;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 658;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 64, this._ctx) ) {
					case 1:
						{
						_localctx = new Postfix_expressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_postfix_expression);
						this.state = 638;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 639;
						this.match(CalcParser.OPEN_SQUARE_BRACKET);
						this.state = 640;
						this.assignment_expression();
						this.state = 641;
						this.match(CalcParser.CLOSE_SQUARE_BRACKET);
						}
						break;

					case 2:
						{
						_localctx = new Postfix_expressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_postfix_expression);
						this.state = 643;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 644;
						this.match(CalcParser.OPEN_PARENTHESES);
						this.state = 645;
						this.expression(0);
						this.state = 646;
						this.match(CalcParser.CLOSE_PARENTHESES);
						}
						break;

					case 3:
						{
						_localctx = new Postfix_expressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_postfix_expression);
						this.state = 648;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 649;
						this.match(CalcParser.FULLSTOP);
						this.state = 650;
						this.identifier();
						}
						break;

					case 4:
						{
						_localctx = new Postfix_expressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_postfix_expression);
						this.state = 651;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 652;
						this.match(CalcParser.RIGHT_ARROW);
						this.state = 653;
						this.identifier();
						}
						break;

					case 5:
						{
						_localctx = new Postfix_expressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_postfix_expression);
						this.state = 654;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 655;
						this.match(CalcParser.INCREMENT);
						}
						break;

					case 6:
						{
						_localctx = new Postfix_expressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_postfix_expression);
						this.state = 656;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 657;
						this.match(CalcParser.DECREMENT);
						}
						break;
					}
					}
				}
				this.state = 662;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
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
		this.enterRule(_localctx, 106, CalcParser.RULE_primary_expression);
		try {
			this.state = 669;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CalcParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 663;
				this.identifier();
				}
				break;
			case CalcParser.INTEGER:
			case CalcParser.FLOAT:
			case CalcParser.CHAR:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 664;
				this.constant();
				}
				break;
			case CalcParser.OPEN_PARENTHESES:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 665;
				this.match(CalcParser.OPEN_PARENTHESES);
				this.state = 666;
				this.expression(0);
				this.state = 667;
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
		this.enterRule(_localctx, 108, CalcParser.RULE_constant);
		try {
			this.state = 674;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CalcParser.INTEGER:
				_localctx = new IntegerConstantContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 671;
				this.integer_constant();
				}
				break;
			case CalcParser.FLOAT:
				_localctx = new FloatConstantContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 672;
				this.float_constant();
				}
				break;
			case CalcParser.CHAR:
				_localctx = new CharacterConstantContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 673;
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
		this.enterRule(_localctx, 110, CalcParser.RULE_integer_constant);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 676;
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
		this.enterRule(_localctx, 112, CalcParser.RULE_float_constant);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 678;
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
		this.enterRule(_localctx, 114, CalcParser.RULE_character_constant);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 680;
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
		this.enterRule(_localctx, 116, CalcParser.RULE_compound_statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 682;
			this.match(CalcParser.OPEN_CURLY_BRACKET);
			this.state = 686;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CalcParser.ASTERICK) | (1 << CalcParser.PLUS) | (1 << CalcParser.MINUS) | (1 << CalcParser.AMPERSAND) | (1 << CalcParser.TILDA) | (1 << CalcParser.EXCLAMATION_MARK) | (1 << CalcParser.OPEN_PARENTHESES) | (1 << CalcParser.OPEN_CURLY_BRACKET) | (1 << CalcParser.INCREMENT) | (1 << CalcParser.DECREMENT))) !== 0) || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (CalcParser.SIZE_OF - 48)) | (1 << (CalcParser.IF - 48)) | (1 << (CalcParser.SWITCH - 48)) | (1 << (CalcParser.WHILE - 48)) | (1 << (CalcParser.DO - 48)) | (1 << (CalcParser.FOR - 48)) | (1 << (CalcParser.GOTO - 48)) | (1 << (CalcParser.CONTINUE - 48)) | (1 << (CalcParser.BREAK - 48)) | (1 << (CalcParser.RETURN - 48)) | (1 << (CalcParser.STRUCT - 48)) | (1 << (CalcParser.UNION - 48)) | (1 << (CalcParser.VOID_TYPE_SPECIFIER - 48)) | (1 << (CalcParser.CHAR_TYPE_SPECIFIER - 48)) | (1 << (CalcParser.SHORT_TYPE_SPECIFIER - 48)) | (1 << (CalcParser.INT_TYPE_SPECIFIER - 48)) | (1 << (CalcParser.LONG_TYPE_SPECIFIER - 48)) | (1 << (CalcParser.FLOAT_TYPE_SPECIFIER - 48)) | (1 << (CalcParser.DOUBLE_TYPE_SPECIFIER - 48)) | (1 << (CalcParser.SIGNED_TYPE_SPECIFIER - 48)) | (1 << (CalcParser.UNSIGNED_TYPE_SPECIFIER - 48)) | (1 << (CalcParser.CONST_TYPE_QUALIFIER - 48)) | (1 << (CalcParser.VOLATILE_TYPE_QUALIFIER - 48)) | (1 << (CalcParser.INTEGER - 48)) | (1 << (CalcParser.FLOAT - 48)) | (1 << (CalcParser.CHAR - 48)) | (1 << (CalcParser.IDENTIFIER - 48)))) !== 0)) {
				{
				{
				this.state = 683;
				this.statement();
				}
				}
				this.state = 688;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 689;
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
	public if_statement(): If_statementContext {
		let _localctx: If_statementContext = new If_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, CalcParser.RULE_if_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 691;
			this.match(CalcParser.IF);
			this.state = 692;
			this.match(CalcParser.OPEN_PARENTHESES);
			this.state = 693;
			_localctx._cond = this.expression(0);
			this.state = 694;
			this.match(CalcParser.CLOSE_PARENTHESES);
			this.state = 695;
			_localctx._if_true = this.statement();
			this.state = 698;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 69, this._ctx) ) {
			case 1:
				{
				this.state = 696;
				this.match(CalcParser.ELSE);
				this.state = 697;
				_localctx._if_false = this.statement();
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
	// @RuleVersion(0)
	public switch_statement(): Switch_statementContext {
		let _localctx: Switch_statementContext = new Switch_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, CalcParser.RULE_switch_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 700;
			this.match(CalcParser.SWITCH);
			this.state = 701;
			this.match(CalcParser.OPEN_PARENTHESES);
			this.state = 702;
			_localctx._cond = this.expression(0);
			this.state = 703;
			this.match(CalcParser.CLOSE_PARENTHESES);
			this.state = 704;
			this.switch_body();
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
	public switch_body(): Switch_bodyContext {
		let _localctx: Switch_bodyContext = new Switch_bodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, CalcParser.RULE_switch_body);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 706;
			this.match(CalcParser.OPEN_CURLY_BRACKET);
			this.state = 710;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CalcParser.CASE) {
				{
				{
				this.state = 707;
				this.switch_case_body();
				}
				}
				this.state = 712;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 714;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CalcParser.DEFAULT) {
				{
				this.state = 713;
				this.switch_default_body();
				}
			}

			this.state = 716;
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
	public switch_case_body(): Switch_case_bodyContext {
		let _localctx: Switch_case_bodyContext = new Switch_case_bodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, CalcParser.RULE_switch_case_body);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 718;
			this.match(CalcParser.CASE);
			this.state = 719;
			this.expression(0);
			this.state = 720;
			this.match(CalcParser.COLON);
			this.state = 721;
			this.statement();
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
	public switch_default_body(): Switch_default_bodyContext {
		let _localctx: Switch_default_bodyContext = new Switch_default_bodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, CalcParser.RULE_switch_default_body);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 723;
			this.match(CalcParser.DEFAULT);
			this.state = 724;
			this.match(CalcParser.COLON);
			this.state = 725;
			this.statement();
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
	public while_statement(): While_statementContext {
		let _localctx: While_statementContext = new While_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, CalcParser.RULE_while_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 727;
			this.match(CalcParser.WHILE);
			this.state = 728;
			this.match(CalcParser.OPEN_PARENTHESES);
			this.state = 729;
			_localctx._cond = this.expression(0);
			this.state = 730;
			this.match(CalcParser.CLOSE_PARENTHESES);
			this.state = 731;
			this.statement();
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
	public do_statement(): Do_statementContext {
		let _localctx: Do_statementContext = new Do_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, CalcParser.RULE_do_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 733;
			this.match(CalcParser.DO);
			this.state = 734;
			this.statement();
			this.state = 735;
			this.match(CalcParser.WHILE);
			this.state = 736;
			this.match(CalcParser.OPEN_PARENTHESES);
			this.state = 737;
			_localctx._cond = this.expression(0);
			this.state = 738;
			this.match(CalcParser.CLOSE_PARENTHESES);
			this.state = 739;
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
	public for_statement(): For_statementContext {
		let _localctx: For_statementContext = new For_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, CalcParser.RULE_for_statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 741;
			this.match(CalcParser.FOR);
			this.state = 742;
			this.match(CalcParser.OPEN_PARENTHESES);
			this.state = 744;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CalcParser.ASTERICK) | (1 << CalcParser.PLUS) | (1 << CalcParser.MINUS) | (1 << CalcParser.AMPERSAND) | (1 << CalcParser.TILDA) | (1 << CalcParser.EXCLAMATION_MARK) | (1 << CalcParser.OPEN_PARENTHESES) | (1 << CalcParser.INCREMENT) | (1 << CalcParser.DECREMENT))) !== 0) || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (CalcParser.SIZE_OF - 48)) | (1 << (CalcParser.INTEGER - 48)) | (1 << (CalcParser.FLOAT - 48)) | (1 << (CalcParser.CHAR - 48)) | (1 << (CalcParser.IDENTIFIER - 48)))) !== 0)) {
				{
				this.state = 743;
				this.expression(0);
				}
			}

			this.state = 746;
			this.match(CalcParser.SEMICOLON);
			this.state = 748;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CalcParser.ASTERICK) | (1 << CalcParser.PLUS) | (1 << CalcParser.MINUS) | (1 << CalcParser.AMPERSAND) | (1 << CalcParser.TILDA) | (1 << CalcParser.EXCLAMATION_MARK) | (1 << CalcParser.OPEN_PARENTHESES) | (1 << CalcParser.INCREMENT) | (1 << CalcParser.DECREMENT))) !== 0) || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (CalcParser.SIZE_OF - 48)) | (1 << (CalcParser.INTEGER - 48)) | (1 << (CalcParser.FLOAT - 48)) | (1 << (CalcParser.CHAR - 48)) | (1 << (CalcParser.IDENTIFIER - 48)))) !== 0)) {
				{
				this.state = 747;
				this.expression(0);
				}
			}

			this.state = 750;
			this.match(CalcParser.SEMICOLON);
			this.state = 752;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CalcParser.ASTERICK) | (1 << CalcParser.PLUS) | (1 << CalcParser.MINUS) | (1 << CalcParser.AMPERSAND) | (1 << CalcParser.TILDA) | (1 << CalcParser.EXCLAMATION_MARK) | (1 << CalcParser.OPEN_PARENTHESES) | (1 << CalcParser.INCREMENT) | (1 << CalcParser.DECREMENT))) !== 0) || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (CalcParser.SIZE_OF - 48)) | (1 << (CalcParser.INTEGER - 48)) | (1 << (CalcParser.FLOAT - 48)) | (1 << (CalcParser.CHAR - 48)) | (1 << (CalcParser.IDENTIFIER - 48)))) !== 0)) {
				{
				this.state = 751;
				this.expression(0);
				}
			}

			this.state = 754;
			this.match(CalcParser.CLOSE_PARENTHESES);
			this.state = 755;
			this.statement();
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
	public goto_statement(): Goto_statementContext {
		let _localctx: Goto_statementContext = new Goto_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, CalcParser.RULE_goto_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 757;
			this.match(CalcParser.GOTO);
			this.state = 758;
			this.identifier();
			this.state = 759;
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
	public continue_statement(): Continue_statementContext {
		let _localctx: Continue_statementContext = new Continue_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, CalcParser.RULE_continue_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 761;
			this.match(CalcParser.CONTINUE);
			this.state = 762;
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
	public break_statement(): Break_statementContext {
		let _localctx: Break_statementContext = new Break_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, CalcParser.RULE_break_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 764;
			this.match(CalcParser.BREAK);
			this.state = 765;
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
	public return_statement(): Return_statementContext {
		let _localctx: Return_statementContext = new Return_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, CalcParser.RULE_return_statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 767;
			this.match(CalcParser.RETURN);
			this.state = 769;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CalcParser.ASTERICK) | (1 << CalcParser.PLUS) | (1 << CalcParser.MINUS) | (1 << CalcParser.AMPERSAND) | (1 << CalcParser.TILDA) | (1 << CalcParser.EXCLAMATION_MARK) | (1 << CalcParser.OPEN_PARENTHESES) | (1 << CalcParser.INCREMENT) | (1 << CalcParser.DECREMENT))) !== 0) || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (CalcParser.SIZE_OF - 48)) | (1 << (CalcParser.INTEGER - 48)) | (1 << (CalcParser.FLOAT - 48)) | (1 << (CalcParser.CHAR - 48)) | (1 << (CalcParser.IDENTIFIER - 48)))) !== 0)) {
				{
				this.state = 768;
				this.expression(0);
				}
			}

			this.state = 771;
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 13:
			return this.parameter_list_sempred(_localctx as Parameter_listContext, predIndex);

		case 20:
			return this.struct_or_union_declarator_list_sempred(_localctx as Struct_or_union_declarator_listContext, predIndex);

		case 29:
			return this.direct_declarator_sempred(_localctx as Direct_declaratorContext, predIndex);

		case 31:
			return this.initializer_list_sempred(_localctx as Initializer_listContext, predIndex);

		case 33:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);

		case 37:
			return this.logical_or_expression_sempred(_localctx as Logical_or_expressionContext, predIndex);

		case 38:
			return this.logical_and_expression_sempred(_localctx as Logical_and_expressionContext, predIndex);

		case 39:
			return this.inclusive_or_expression_sempred(_localctx as Inclusive_or_expressionContext, predIndex);

		case 40:
			return this.exclusive_or_expression_sempred(_localctx as Exclusive_or_expressionContext, predIndex);

		case 41:
			return this.and_expression_sempred(_localctx as And_expressionContext, predIndex);

		case 42:
			return this.equality_expression_sempred(_localctx as Equality_expressionContext, predIndex);

		case 43:
			return this.relational_expression_sempred(_localctx as Relational_expressionContext, predIndex);

		case 44:
			return this.shift_expression_sempred(_localctx as Shift_expressionContext, predIndex);

		case 45:
			return this.additive_expression_sempred(_localctx as Additive_expressionContext, predIndex);

		case 46:
			return this.multiplicative_expression_sempred(_localctx as Multiplicative_expressionContext, predIndex);

		case 50:
			return this.direct_abstract_declarator_sempred(_localctx as Direct_abstract_declaratorContext, predIndex);

		case 52:
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
	private struct_or_union_declarator_list_sempred(_localctx: Struct_or_union_declarator_listContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private direct_declarator_sempred(_localctx: Direct_declaratorContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.precpred(this._ctx, 3);

		case 3:
			return this.precpred(this._ctx, 2);

		case 4:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private initializer_list_sempred(_localctx: Initializer_listContext, predIndex: number): boolean {
		switch (predIndex) {
		case 5:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 6:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private logical_or_expression_sempred(_localctx: Logical_or_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 7:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private logical_and_expression_sempred(_localctx: Logical_and_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 8:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private inclusive_or_expression_sempred(_localctx: Inclusive_or_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 9:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private exclusive_or_expression_sempred(_localctx: Exclusive_or_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 10:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private and_expression_sempred(_localctx: And_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 11:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private equality_expression_sempred(_localctx: Equality_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 12:
			return this.precpred(this._ctx, 2);

		case 13:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private relational_expression_sempred(_localctx: Relational_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 14:
			return this.precpred(this._ctx, 4);

		case 15:
			return this.precpred(this._ctx, 3);

		case 16:
			return this.precpred(this._ctx, 2);

		case 17:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private shift_expression_sempred(_localctx: Shift_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 18:
			return this.precpred(this._ctx, 2);

		case 19:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private additive_expression_sempred(_localctx: Additive_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 20:
			return this.precpred(this._ctx, 2);

		case 21:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private multiplicative_expression_sempred(_localctx: Multiplicative_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 22:
			return this.precpred(this._ctx, 3);

		case 23:
			return this.precpred(this._ctx, 2);

		case 24:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private direct_abstract_declarator_sempred(_localctx: Direct_abstract_declaratorContext, predIndex: number): boolean {
		switch (predIndex) {
		case 25:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private postfix_expression_sempred(_localctx: Postfix_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 26:
			return this.precpred(this._ctx, 6);

		case 27:
			return this.precpred(this._ctx, 5);

		case 28:
			return this.precpred(this._ctx, 4);

		case 29:
			return this.precpred(this._ctx, 3);

		case 30:
			return this.precpred(this._ctx, 2);

		case 31:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03O\u0308\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03" +
		"\x05\x06\x05\x98\n\x05\r\x05\x0E\x05\x99\x03\x06\x03\x06\x03\x07\x03\x07" +
		"\x05\x07\xA0\n\x07\x03\x07\x03\x07\x05\x07\xA4\n\x07\x03\x07\x03\x07\x05" +
		"\x07\xA8\n\x07\x03\x07\x03\x07\x05\x07\xAC\n\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x05\x07\xB3\n\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n" +
		"\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x07\v\xC3\n\v\f\v\x0E" +
		"\v\xC6\v\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x05\r" +
		"\xD1\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xD8\n\x0E\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\xE0\n\x0F\f\x0F\x0E" +
		"\x0F\xE3\v\x0F\x03\x10\x03\x10\x05\x10\xE7\n\x10\x03\x10\x05\x10\xEA\n" +
		"\x10\x03\x10\x07\x10\xED\n\x10\f\x10\x0E\x10\xF0\v\x10\x03\x11\x03\x11" +
		"\x05\x11\xF4\n\x11\x03\x11\x03\x11\x03\x12\x03\x12\x05\x12\xFA\n\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x06\x12\u0100\n\x12\r\x12\x0E\x12\u0101\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x05\x12\u0108\n\x12\x03\x13\x03\x13\x05\x13" +
		"\u010C\n\x13\x03\x13\x03\x13\x06\x13\u0110\n\x13\r\x13\x0E\x13\u0111\x03" +
		"\x13\x03\x13\x03\x13\x03\x13\x05\x13\u0118\n\x13\x03\x14\x03\x14\x03\x14" +
		"\x03\x15\x07\x15\u011E\n\x15\f\x15\x0E\x15\u0121\v\x15\x03\x15\x03\x15" +
		"\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x07\x16\u012B\n\x16\f" +
		"\x16\x0E\x16\u012E\v\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18" +
		"\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18" +
		"\x05\x18\u013F\n\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03" +
		"\x1A\x03\x1A\x03\x1B\x07\x1B\u014A\n\x1B\f\x1B\x0E\x1B\u014D\v\x1B\x03" +
		"\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x07\x1C\u0154\n\x1C\f\x1C\x0E\x1C" +
		"\u0157\v\x1C\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u015C\n\x1D\x03\x1E\x05\x1E" +
		"\u015F\n\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03" +
		"\x1F\x05\x1F\u0169\n\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u016E\n\x1F\x03" +
		"\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x07" +
		"\x1F\u0179\n\x1F\f\x1F\x0E\x1F\u017C\v\x1F\x03\x1F\x07\x1F\u017F\n\x1F" +
		"\f\x1F\x0E\x1F\u0182\v\x1F\x03 \x03 \x03 \x03 \x05 \u0188\n \x03 \x03" +
		" \x05 \u018C\n \x03!\x03!\x03!\x03!\x03!\x03!\x07!\u0194\n!\f!\x0E!\u0197" +
		"\v!\x03\"\x03\"\x03\"\x03#\x03#\x03#\x03#\x03#\x03#\x07#\u01A2\n#\f#\x0E" +
		"#\u01A5\v#\x03$\x03$\x03$\x03$\x03$\x05$\u01AC\n$\x03%\x03%\x03&\x03&" +
		"\x03&\x03&\x03&\x03&\x03&\x05&\u01B7\n&\x03\'\x03\'\x03\'\x03\'\x03\'" +
		"\x03\'\x07\'\u01BF\n\'\f\'\x0E\'\u01C2\v\'\x03(\x03(\x03(\x03(\x03(\x03" +
		"(\x07(\u01CA\n(\f(\x0E(\u01CD\v(\x03)\x03)\x03)\x03)\x03)\x03)\x07)\u01D5" +
		"\n)\f)\x0E)\u01D8\v)\x03*\x03*\x03*\x03*\x03*\x03*\x07*\u01E0\n*\f*\x0E" +
		"*\u01E3\v*\x03+\x03+\x03+\x03+\x03+\x03+\x07+\u01EB\n+\f+\x0E+\u01EE\v" +
		"+\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x07,\u01F9\n,\f,\x0E,\u01FC" +
		"\v,\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03" +
		"-\x03-\x07-\u020D\n-\f-\x0E-\u0210\v-\x03.\x03.\x03.\x03.\x03.\x03.\x03" +
		".\x03.\x03.\x07.\u021B\n.\f.\x0E.\u021E\v.\x03/\x03/\x03/\x03/\x03/\x03" +
		"/\x03/\x03/\x03/\x07/\u0229\n/\f/\x0E/\u022C\v/\x030\x030\x030\x030\x03" +
		"0\x030\x030\x030\x030\x030\x030\x030\x070\u023A\n0\f0\x0E0\u023D\v0\x03" +
		"1\x031\x031\x031\x031\x031\x051\u0245\n1\x032\x072\u0248\n2\f2\x0E2\u024B" +
		"\v2\x032\x032\x052\u024F\n2\x033\x033\x053\u0253\n3\x033\x053\u0256\n" +
		"3\x034\x034\x034\x034\x034\x034\x034\x054\u025F\n4\x034\x054\u0262\n4" +
		"\x034\x034\x034\x054\u0267\n4\x034\x074\u026A\n4\f4\x0E4\u026D\v4\x03" +
		"5\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x055\u027C" +
		"\n5\x036\x036\x036\x036\x036\x036\x036\x036\x036\x036\x036\x036\x036\x03" +
		"6\x036\x036\x036\x036\x036\x036\x036\x036\x036\x076\u0295\n6\f6\x0E6\u0298" +
		"\v6\x037\x037\x037\x037\x037\x037\x057\u02A0\n7\x038\x038\x038\x058\u02A5" +
		"\n8\x039\x039\x03:\x03:\x03;\x03;\x03<\x03<\x07<\u02AF\n<\f<\x0E<\u02B2" +
		"\v<\x03<\x03<\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x05=\u02BD\n=\x03>\x03" +
		">\x03>\x03>\x03>\x03>\x03?\x03?\x07?\u02C7\n?\f?\x0E?\u02CA\v?\x03?\x05" +
		"?\u02CD\n?\x03?\x03?\x03@\x03@\x03@\x03@\x03@\x03A\x03A\x03A\x03A\x03" +
		"B\x03B\x03B\x03B\x03B\x03B\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03" +
		"D\x03D\x03D\x05D\u02EB\nD\x03D\x03D\x05D\u02EF\nD\x03D\x03D\x05D\u02F3" +
		"\nD\x03D\x03D\x03D\x03E\x03E\x03E\x03E\x03F\x03F\x03F\x03G\x03G\x03G\x03" +
		"H\x03H\x05H\u0304\nH\x03H\x03H\x03H\x02\x02\x13\x1C*<@DLNPRTVXZ\\^fjI" +
		"\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14" +
		"\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02" +
		"*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02" +
		"F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02" +
		"b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02" +
		"~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02" +
		"\x02\x06\x05\x02\x05\x05\x07\b\n\f\x03\x02\x1C&\x03\x02HI\x03\x02JK\x02" +
		"\u032D\x02\x90\x03\x02\x02\x02\x04\x92\x03\x02\x02\x02\x06\x94\x03\x02" +
		"\x02\x02\b\x97\x03\x02\x02\x02\n\x9B\x03\x02\x02\x02\f\xB2\x03\x02\x02" +
		"\x02\x0E\xB4\x03\x02\x02\x02\x10\xB6\x03\x02\x02\x02\x12\xB8\x03\x02\x02" +
		"\x02\x14\xC4\x03\x02\x02\x02\x16\xC7\x03\x02\x02\x02\x18\xCE\x03\x02\x02" +
		"\x02\x1A\xD7\x03\x02\x02\x02\x1C\xD9\x03\x02\x02\x02\x1E\xE4\x03\x02\x02" +
		"\x02 \xF1\x03\x02\x02\x02\"\u0107\x03\x02\x02\x02$\u0117\x03\x02\x02\x02" +
		"&\u0119\x03\x02\x02\x02(\u011F\x03\x02\x02\x02*\u0124\x03\x02\x02\x02" +
		",\u012F\x03\x02\x02\x02.\u013E\x03\x02\x02\x020\u0140\x03\x02\x02\x02" +
		"2\u0144\x03\x02\x02\x024\u014B\x03\x02\x02\x026\u0150\x03\x02\x02\x02" +
		"8\u0158\x03\x02\x02\x02:\u015E\x03\x02\x02\x02<\u0168\x03\x02\x02\x02" +
		">\u018B\x03\x02\x02\x02@\u018D\x03\x02\x02\x02B\u0198\x03\x02\x02\x02" +
		"D\u019B\x03\x02\x02\x02F\u01AB\x03\x02\x02\x02H\u01AD\x03\x02\x02\x02" +
		"J\u01B6\x03\x02\x02\x02L\u01B8\x03\x02\x02\x02N\u01C3\x03\x02\x02\x02" +
		"P\u01CE\x03\x02\x02\x02R\u01D9\x03\x02\x02\x02T\u01E4\x03\x02\x02\x02" +
		"V\u01EF\x03\x02\x02\x02X\u01FD\x03\x02\x02\x02Z\u0211\x03\x02\x02\x02" +
		"\\\u021F\x03\x02\x02\x02^\u022D\x03\x02\x02\x02`\u0244\x03\x02\x02\x02" +
		"b\u0249\x03\x02\x02\x02d\u0255\x03\x02\x02\x02f\u0261\x03\x02\x02\x02" +
		"h\u027B\x03\x02\x02\x02j\u027D\x03\x02\x02\x02l\u029F\x03\x02\x02\x02" +
		"n\u02A4\x03\x02\x02\x02p\u02A6\x03\x02\x02\x02r\u02A8\x03\x02\x02\x02" +
		"t\u02AA\x03\x02\x02\x02v\u02AC\x03\x02\x02\x02x\u02B5\x03\x02\x02\x02" +
		"z\u02BE\x03\x02\x02\x02|\u02C4\x03\x02\x02\x02~\u02D0\x03\x02\x02\x02" +
		"\x80\u02D5\x03\x02\x02\x02\x82\u02D9\x03\x02\x02\x02\x84\u02DF\x03\x02" +
		"\x02\x02\x86\u02E7\x03\x02\x02\x02\x88\u02F7\x03\x02\x02\x02\x8A\u02FB" +
		"\x03\x02\x02\x02\x8C\u02FE\x03\x02\x02\x02\x8E\u0301\x03\x02\x02\x02\x90" +
		"\x91\t\x02\x02\x02\x91\x03\x03\x02\x02\x02\x92\x93\t\x03\x02\x02\x93\x05" +
		"\x03\x02\x02\x02\x94\x95\x07\x10\x02\x02\x95\x07\x03\x02\x02\x02\x96\x98" +
		"\x07\x05\x02\x02\x97\x96\x03\x02\x02\x02\x98\x99\x03\x02\x02\x02\x99\x97" +
		"\x03\x02\x02\x02\x99\x9A\x03\x02\x02\x02\x9A\t\x03\x02\x02\x02\x9B\x9C" +
		"\t\x04\x02\x02\x9C\v\x03\x02\x02\x02\x9D\xB3\x07A\x02\x02\x9E\xA0\x05" +
		"\n\x06\x02\x9F\x9E\x03\x02\x02\x02\x9F\xA0\x03\x02\x02\x02\xA0\xA1\x03" +
		"\x02\x02\x02\xA1\xB3\x07B\x02\x02\xA2\xA4\x05\n\x06\x02\xA3\xA2\x03\x02" +
		"\x02\x02\xA3\xA4\x03\x02\x02\x02\xA4\xA5\x03\x02\x02\x02\xA5\xB3\x07C" +
		"\x02\x02\xA6\xA8\x05\n\x06\x02\xA7\xA6\x03\x02\x02\x02\xA7\xA8\x03\x02" +
		"\x02\x02\xA8\xA9\x03\x02\x02\x02\xA9\xB3\x07D\x02\x02\xAA\xAC\x05\n\x06" +
		"\x02\xAB\xAA\x03\x02\x02\x02\xAB\xAC\x03\x02\x02\x02\xAC\xAD\x03\x02\x02" +
		"\x02\xAD\xB3\x07E\x02\x02\xAE\xB3\x07F\x02\x02\xAF\xB3\x07G\x02\x02\xB0" +
		"\xB3\x05\"\x12\x02\xB1\xB3\x05$\x13\x02\xB2\x9D\x03\x02\x02\x02\xB2\x9F" +
		"\x03\x02\x02\x02\xB2\xA3\x03\x02\x02\x02\xB2\xA7\x03\x02\x02\x02\xB2\xAB" +
		"\x03\x02\x02\x02\xB2\xAE\x03\x02\x02\x02\xB2\xAF\x03\x02\x02\x02\xB2\xB0" +
		"\x03\x02\x02\x02\xB2\xB1\x03\x02\x02\x02\xB3\r\x03\x02\x02\x02\xB4\xB5" +
		"\t\x05\x02\x02\xB5\x0F\x03\x02\x02\x02\xB6\xB7\x07O\x02\x02\xB7\x11\x03" +
		"\x02\x02\x02\xB8\xB9\x05\x14\v\x02\xB9\x13\x03\x02\x02\x02\xBA\xC3\x05" +
		"\x16\f\x02\xBB\xBC\x05\"\x12\x02\xBC\xBD\x05\x06\x04\x02\xBD\xC3\x03\x02" +
		"\x02\x02\xBE\xBF\x05$\x13\x02\xBF\xC0\x05\x06\x04\x02\xC0\xC3\x03\x02" +
		"\x02\x02\xC1\xC3\x05.\x18\x02\xC2\xBA\x03\x02\x02\x02\xC2\xBB\x03\x02" +
		"\x02\x02\xC2\xBE\x03\x02\x02\x02\xC2\xC1\x03\x02\x02\x02\xC3\xC6\x03\x02" +
		"\x02\x02\xC4\xC2\x03\x02\x02\x02\xC4\xC5\x03\x02\x02\x02\xC5\x15\x03\x02" +
		"\x02\x02\xC6\xC4\x03\x02\x02\x02\xC7\xC8\x05\x18\r\x02\xC8\xC9\x05\x10" +
		"\t\x02\xC9\xCA\x07\x14\x02\x02\xCA\xCB\x05\x1A\x0E\x02\xCB\xCC\x07\x15" +
		"\x02\x02\xCC\xCD\x05v<\x02\xCD\x17\x03\x02\x02\x02\xCE\xD0\x05\f\x07\x02" +
		"\xCF\xD1\x05\b\x05\x02\xD0\xCF\x03\x02\x02\x02\xD0\xD1\x03\x02\x02\x02" +
		"\xD1\x19\x03\x02\x02\x02\xD2\xD8\x05\x1C\x0F\x02\xD3\xD4\x05\x1C\x0F\x02" +
		"\xD4\xD5\x07\x11\x02\x02\xD5\xD6\x07\x03\x02\x02\xD6\xD8\x03\x02\x02\x02" +
		"\xD7\xD2\x03\x02\x02\x02\xD7\xD3\x03\x02\x02\x02\xD8\x1B\x03\x02\x02\x02" +
		"\xD9\xDA\b\x0F\x01\x02\xDA\xDB\x05\x1E\x10\x02\xDB\xE1\x03\x02\x02\x02" +
		"\xDC\xDD\f\x03\x02\x02\xDD\xDE\x07\x11\x02\x02\xDE\xE0\x05\x1E\x10\x02" +
		"\xDF\xDC\x03\x02\x02\x02\xE0\xE3\x03\x02\x02\x02\xE1\xDF\x03\x02\x02\x02" +
		"\xE1\xE2\x03\x02\x02\x02\xE2\x1D\x03\x02\x02\x02\xE3\xE1\x03\x02\x02\x02" +
		"\xE4\xE6\x054\x1B\x02\xE5\xE7\x05\b\x05\x02\xE6\xE5\x03\x02\x02\x02\xE6" +
		"\xE7\x03\x02\x02\x02\xE7\xE9\x03\x02\x02\x02\xE8\xEA\x05\x10\t\x02\xE9" +
		"\xE8\x03\x02\x02\x02\xE9\xEA\x03\x02\x02\x02\xEA\xEE\x03\x02\x02\x02\xEB" +
		"\xED\x05 \x11\x02\xEC\xEB\x03\x02\x02\x02\xED\xF0\x03\x02\x02\x02\xEE" +
		"\xEC\x03\x02\x02\x02\xEE\xEF\x03\x02\x02\x02\xEF\x1F\x03\x02\x02\x02\xF0" +
		"\xEE\x03\x02\x02\x02\xF1\xF3\x07\x16\x02\x02\xF2\xF4\x05H%\x02\xF3\xF2" +
		"\x03\x02\x02\x02\xF3\xF4\x03\x02\x02\x02\xF4\xF5\x03\x02\x02\x02\xF5\xF6" +
		"\x07\x17\x02\x02\xF6!\x03\x02\x02\x02\xF7\xF9\x07?\x02\x02\xF8\xFA\x05" +
		"\x10\t\x02\xF9\xF8\x03\x02\x02\x02\xF9\xFA\x03\x02\x02\x02\xFA\xFB\x03" +
		"\x02\x02\x02\xFB\xFF\x07\x18\x02\x02\xFC\xFD\x05&\x14\x02\xFD\xFE\x05" +
		"\x06\x04\x02\xFE\u0100\x03\x02\x02\x02\xFF\xFC\x03\x02\x02\x02\u0100\u0101" +
		"\x03\x02\x02\x02\u0101\xFF\x03\x02\x02\x02\u0101\u0102\x03\x02\x02\x02" +
		"\u0102\u0103\x03\x02\x02\x02\u0103\u0104\x07\x19\x02\x02\u0104\u0108\x03" +
		"\x02\x02\x02\u0105\u0106\x07?\x02\x02\u0106\u0108\x05\x10\t\x02\u0107" +
		"\xF7\x03\x02\x02\x02\u0107\u0105\x03\x02\x02\x02\u0108#\x03\x02\x02\x02" +
		"\u0109\u010B\x07@\x02\x02\u010A\u010C\x05\x10\t\x02\u010B\u010A\x03\x02" +
		"\x02\x02\u010B\u010C\x03\x02\x02\x02\u010C\u010D\x03\x02\x02\x02\u010D" +
		"\u010F\x07\x18\x02\x02\u010E\u0110\x05&\x14\x02\u010F\u010E\x03\x02\x02" +
		"\x02\u0110\u0111\x03\x02\x02\x02\u0111\u010F\x03\x02\x02\x02\u0111\u0112" +
		"\x03\x02\x02\x02\u0112\u0113\x03\x02\x02\x02\u0113\u0114\x07\x19\x02\x02" +
		"\u0114\u0118\x03\x02\x02\x02\u0115\u0116\x07@\x02\x02\u0116\u0118\x05" +
		"\x10\t\x02\u0117\u0109\x03\x02\x02\x02\u0117\u0115\x03\x02\x02\x02\u0118" +
		"%\x03\x02\x02\x02\u0119\u011A\x05(\x15\x02\u011A\u011B\x05*\x16\x02\u011B" +
		"\'\x03\x02\x02\x02\u011C\u011E\x05\x0E\b\x02\u011D\u011C\x03\x02\x02\x02" +
		"\u011E\u0121\x03\x02\x02\x02\u011F\u011D\x03\x02\x02\x02\u011F\u0120\x03" +
		"\x02\x02\x02\u0120\u0122\x03\x02\x02\x02\u0121\u011F\x03\x02\x02\x02\u0122" +
		"\u0123\x05\f\x07\x02\u0123)\x03\x02\x02\x02\u0124\u0125\b\x16\x01\x02" +
		"\u0125\u0126\x05,\x17\x02\u0126\u012C\x03\x02\x02\x02\u0127\u0128\f\x03" +
		"\x02\x02\u0128\u0129\x07\x11\x02\x02\u0129\u012B\x05,\x17\x02\u012A\u0127" +
		"\x03\x02\x02\x02\u012B\u012E\x03\x02\x02\x02\u012C\u012A\x03\x02\x02\x02" +
		"\u012C\u012D\x03\x02\x02\x02\u012D+\x03\x02\x02\x02\u012E\u012C\x03\x02" +
		"\x02\x02\u012F\u0130\x05:\x1E\x02\u0130-\x03\x02\x02\x02\u0131\u013F\x05" +
		"0\x19\x02\u0132\u013F\x052\x1A\x02\u0133\u013F\x05B\"\x02\u0134\u013F" +
		"\x05v<\x02\u0135\u013F\x05x=\x02\u0136\u013F\x05z>\x02\u0137\u013F\x05" +
		"\x82B\x02\u0138\u013F\x05\x84C\x02\u0139\u013F\x05\x86D\x02\u013A\u013F" +
		"\x05\x88E\x02\u013B\u013F\x05\x8AF\x02\u013C\u013F\x05\x8CG\x02\u013D" +
		"\u013F\x05\x8EH\x02\u013E\u0131\x03\x02\x02\x02\u013E\u0132\x03\x02\x02" +
		"\x02\u013E\u0133\x03\x02\x02\x02\u013E\u0134\x03\x02\x02\x02\u013E\u0135" +
		"\x03\x02\x02\x02\u013E\u0136\x03\x02\x02\x02\u013E\u0137\x03\x02\x02\x02" +
		"\u013E\u0138\x03\x02\x02\x02\u013E\u0139\x03\x02\x02\x02\u013E\u013A\x03" +
		"\x02\x02\x02\u013E\u013B\x03\x02\x02\x02\u013E\u013C\x03\x02\x02\x02\u013E" +
		"\u013D\x03\x02\x02\x02\u013F/\x03\x02\x02\x02\u0140\u0141\x05\x10\t\x02" +
		"\u0141\u0142\x07\x0F\x02\x02\u0142\u0143\x05.\x18\x02\u01431\x03\x02\x02" +
		"\x02\u0144\u0145\x054\x1B\x02\u0145\u0146\x056\x1C\x02\u0146\u0147\x05" +
		"\x06\x04\x02\u01473\x03\x02\x02\x02\u0148\u014A\x05\x0E\b\x02\u0149\u0148" +
		"\x03\x02\x02\x02\u014A\u014D\x03\x02\x02\x02\u014B\u0149\x03\x02\x02\x02" +
		"\u014B\u014C\x03\x02\x02\x02\u014C\u014E\x03\x02\x02\x02\u014D\u014B\x03" +
		"\x02\x02\x02\u014E\u014F\x05\f\x07\x02\u014F5\x03\x02\x02\x02\u0150\u0155" +
		"\x058\x1D\x02\u0151\u0152\x07\x11\x02\x02\u0152\u0154\x058\x1D\x02\u0153" +
		"\u0151\x03\x02\x02\x02\u0154\u0157\x03\x02\x02\x02\u0155\u0153\x03\x02" +
		"\x02\x02\u0155\u0156\x03\x02\x02\x02\u01567\x03\x02\x02\x02\u0157\u0155" +
		"\x03\x02\x02\x02\u0158\u015B\x05:\x1E\x02\u0159\u015A\x07\x1C\x02\x02" +
		"\u015A\u015C\x05> \x02\u015B\u0159\x03\x02\x02\x02\u015B\u015C\x03\x02" +
		"\x02\x02\u015C9\x03\x02\x02\x02\u015D\u015F\x05\b\x05\x02\u015E\u015D" +
		"\x03\x02\x02\x02\u015E\u015F\x03\x02\x02\x02\u015F\u0160\x03\x02\x02\x02" +
		"\u0160\u0161\x05<\x1F\x02\u0161;\x03\x02\x02\x02\u0162\u0163\b\x1F\x01" +
		"\x02\u0163\u0169\x05\x10\t\x02\u0164\u0165\x07\x14\x02\x02\u0165\u0166" +
		"\x05:\x1E\x02\u0166\u0167\x07\x15\x02\x02\u0167\u0169\x03\x02\x02\x02" +
		"\u0168\u0162\x03\x02\x02\x02\u0168\u0164\x03\x02\x02\x02\u0169\u0180\x03" +
		"\x02\x02\x02\u016A\u016B\f\x05\x02\x02\u016B\u016D\x07\x16\x02\x02\u016C" +
		"\u016E\x05H%\x02\u016D\u016C\x03\x02\x02\x02\u016D\u016E\x03\x02\x02\x02" +
		"\u016E\u016F\x03\x02\x02\x02\u016F\u017F\x07\x17\x02\x02\u0170\u0171\f" +
		"\x04\x02\x02\u0171\u0172\x07\x14\x02\x02\u0172\u0173\x05\x1A\x0E\x02\u0173" +
		"\u0174\x07\x15\x02\x02\u0174\u017F\x03\x02\x02\x02\u0175\u0176\f\x03\x02" +
		"\x02\u0176\u017A\x07\x14\x02\x02\u0177\u0179\x05\x10\t\x02\u0178\u0177" +
		"\x03\x02\x02\x02\u0179\u017C\x03\x02\x02\x02\u017A\u0178\x03\x02\x02\x02" +
		"\u017A\u017B\x03\x02\x02\x02\u017B\u017D\x03\x02\x02\x02\u017C\u017A\x03" +
		"\x02\x02\x02\u017D\u017F\x07\x15\x02\x02\u017E\u016A\x03\x02\x02\x02\u017E" +
		"\u0170\x03\x02\x02\x02\u017E\u0175\x03\x02\x02\x02\u017F\u0182\x03\x02" +
		"\x02\x02\u0180\u017E\x03\x02\x02\x02\u0180\u0181\x03\x02\x02\x02\u0181" +
		"=\x03\x02\x02\x02\u0182\u0180\x03\x02\x02\x02\u0183\u018C\x05J&\x02\u0184" +
		"\u0185\x07\x18\x02\x02\u0185\u0187\x05@!\x02\u0186\u0188\x07\x11\x02\x02" +
		"\u0187\u0186\x03\x02\x02\x02\u0187\u0188\x03\x02\x02\x02\u0188\u0189\x03" +
		"\x02\x02\x02\u0189\u018A\x07\x19\x02\x02\u018A\u018C\x03\x02\x02\x02\u018B" +
		"\u0183\x03\x02\x02\x02\u018B\u0184\x03\x02\x02\x02\u018C?\x03\x02\x02" +
		"\x02\u018D\u018E\b!\x01\x02\u018E\u018F\x05> \x02\u018F\u0195\x03\x02" +
		"\x02\x02\u0190\u0191\f\x03\x02\x02\u0191\u0192\x07\x11\x02\x02\u0192\u0194" +
		"\x05> \x02\u0193\u0190\x03\x02\x02\x02\u0194\u0197\x03\x02\x02\x02\u0195" +
		"\u0193\x03\x02\x02\x02\u0195\u0196\x03\x02\x02\x02\u0196A\x03\x02\x02" +
		"\x02\u0197\u0195\x03\x02\x02\x02\u0198\u0199\x05D#\x02\u0199\u019A\x05" +
		"\x06\x04\x02\u019AC\x03\x02\x02\x02\u019B\u019C\b#\x01\x02\u019C\u019D" +
		"\x05F$\x02\u019D\u01A3\x03\x02\x02\x02\u019E\u019F\f\x03\x02\x02\u019F" +
		"\u01A0\x07\x11\x02\x02\u01A0\u01A2\x05F$\x02\u01A1\u019E\x03\x02\x02\x02" +
		"\u01A2\u01A5\x03\x02\x02\x02\u01A3\u01A1\x03\x02\x02\x02\u01A3\u01A4\x03" +
		"\x02\x02\x02\u01A4E\x03\x02\x02\x02\u01A5\u01A3\x03\x02\x02\x02\u01A6" +
		"\u01AC\x05J&\x02\u01A7\u01A8\x05h5\x02\u01A8\u01A9\x05\x04\x03\x02\u01A9" +
		"\u01AA\x05F$\x02\u01AA\u01AC\x03\x02\x02\x02\u01AB\u01A6\x03\x02\x02\x02" +
		"\u01AB\u01A7\x03\x02\x02\x02\u01ACG\x03\x02\x02\x02\u01AD\u01AE\x05J&" +
		"\x02\u01AEI\x03\x02\x02\x02\u01AF\u01B7\x05L\'\x02\u01B0\u01B1\x05L\'" +
		"\x02\u01B1\u01B2\x07\x0E\x02\x02\u01B2\u01B3\x05D#\x02\u01B3\u01B4\x07" +
		"\x0F\x02\x02\u01B4\u01B5\x05J&\x02\u01B5\u01B7\x03\x02\x02\x02\u01B6\u01AF" +
		"\x03\x02\x02\x02\u01B6\u01B0\x03\x02\x02\x02\u01B7K\x03\x02\x02\x02\u01B8" +
		"\u01B9\b\'\x01\x02\u01B9\u01BA\x05N(\x02\u01BA\u01C0\x03\x02\x02\x02\u01BB" +
		"\u01BC\f\x03\x02\x02\u01BC\u01BD\x07(\x02\x02\u01BD\u01BF\x05N(\x02\u01BE" +
		"\u01BB\x03\x02\x02\x02\u01BF\u01C2\x03\x02\x02\x02\u01C0\u01BE\x03\x02" +
		"\x02\x02\u01C0\u01C1\x03\x02\x02\x02\u01C1M\x03\x02\x02\x02\u01C2\u01C0" +
		"\x03\x02\x02\x02\u01C3\u01C4\b(\x01\x02\u01C4\u01C5\x05P)\x02\u01C5\u01CB" +
		"\x03\x02\x02\x02\u01C6\u01C7\f\x03\x02\x02\u01C7\u01C8\x07\'\x02\x02\u01C8" +
		"\u01CA\x05P)\x02\u01C9\u01C6\x03\x02\x02\x02\u01CA\u01CD\x03\x02\x02\x02" +
		"\u01CB\u01C9\x03\x02\x02\x02\u01CB\u01CC\x03\x02\x02\x02\u01CCO\x03\x02" +
		"\x02\x02\u01CD\u01CB\x03\x02\x02\x02\u01CE\u01CF\b)\x01\x02\u01CF\u01D0" +
		"\x05R*\x02\u01D0\u01D6\x03\x02\x02\x02\u01D1\u01D2\f\x03\x02\x02\u01D2" +
		"\u01D3\x07\r\x02\x02\u01D3\u01D5\x05R*\x02\u01D4\u01D1\x03\x02\x02\x02" +
		"\u01D5\u01D8\x03\x02\x02\x02\u01D6\u01D4\x03\x02\x02\x02\u01D6\u01D7\x03" +
		"\x02\x02\x02\u01D7Q\x03\x02\x02\x02\u01D8\u01D6\x03\x02\x02\x02\u01D9" +
		"\u01DA\b*\x01\x02\u01DA\u01DB\x05T+\x02\u01DB\u01E1\x03\x02\x02\x02\u01DC" +
		"\u01DD\f\x03\x02\x02\u01DD\u01DE\x07\x04\x02\x02\u01DE\u01E0\x05T+\x02" +
		"\u01DF\u01DC\x03\x02\x02\x02\u01E0\u01E3\x03\x02\x02\x02\u01E1\u01DF\x03" +
		"\x02\x02\x02\u01E1\u01E2\x03\x02\x02\x02\u01E2S\x03\x02\x02\x02\u01E3" +
		"\u01E1\x03\x02\x02\x02\u01E4\u01E5\b+\x01\x02\u01E5\u01E6\x05V,\x02\u01E6" +
		"\u01EC\x03\x02\x02\x02\u01E7\u01E8\f\x03\x02\x02\u01E8\u01E9\x07\n\x02" +
		"\x02\u01E9\u01EB\x05V,\x02\u01EA\u01E7\x03\x02\x02\x02\u01EB\u01EE\x03" +
		"\x02\x02\x02\u01EC\u01EA\x03\x02\x02\x02\u01EC\u01ED\x03\x02\x02\x02\u01ED" +
		"U\x03\x02\x02\x02\u01EE\u01EC\x03\x02\x02\x02\u01EF\u01F0\b,\x01\x02\u01F0" +
		"\u01F1\x05X-\x02\u01F1\u01FA\x03\x02\x02\x02\u01F2\u01F3\f\x04\x02\x02" +
		"\u01F3\u01F4\x07)\x02\x02\u01F4\u01F9\x05X-\x02\u01F5\u01F6\f\x03\x02" +
		"\x02\u01F6\u01F7\x07*\x02\x02\u01F7\u01F9\x05X-\x02\u01F8\u01F2\x03\x02" +
		"\x02\x02\u01F8\u01F5\x03\x02\x02\x02\u01F9\u01FC\x03\x02\x02\x02\u01FA" +
		"\u01F8\x03\x02\x02\x02\u01FA\u01FB\x03\x02\x02\x02\u01FBW\x03\x02\x02" +
		"\x02\u01FC\u01FA\x03\x02\x02\x02\u01FD\u01FE\b-\x01\x02\u01FE\u01FF\x05" +
		"Z.\x02\u01FF\u020E\x03\x02\x02\x02\u0200\u0201\f\x06\x02\x02\u0201\u0202" +
		"\x07+\x02\x02\u0202\u020D\x05Z.\x02\u0203\u0204\f\x05\x02\x02\u0204\u0205" +
		"\x07,\x02\x02\u0205\u020D\x05Z.\x02\u0206\u0207\f\x04\x02\x02\u0207\u0208" +
		"\x07-\x02\x02\u0208\u020D\x05Z.\x02\u0209\u020A\f\x03\x02\x02\u020A\u020B" +
		"\x07.\x02\x02\u020B\u020D\x05Z.\x02\u020C\u0200\x03\x02\x02\x02\u020C" +
		"\u0203\x03\x02\x02\x02\u020C\u0206\x03\x02\x02\x02\u020C\u0209\x03\x02" +
		"\x02\x02\u020D\u0210\x03\x02\x02\x02\u020E\u020C\x03\x02\x02\x02\u020E" +
		"\u020F\x03\x02\x02\x02\u020FY\x03\x02\x02\x02";
	private static readonly _serializedATNSegment1: string =
		"\u0210\u020E\x03\x02\x02\x02\u0211\u0212\b.\x01\x02\u0212\u0213\x05\\" +
		"/\x02\u0213\u021C\x03\x02\x02\x02\u0214\u0215\f\x04\x02\x02\u0215\u0216" +
		"\x07/\x02\x02\u0216\u021B\x05\\/\x02\u0217\u0218\f\x03\x02\x02\u0218\u0219" +
		"\x070\x02\x02\u0219\u021B\x05\\/\x02\u021A\u0214\x03\x02\x02\x02\u021A" +
		"\u0217\x03\x02\x02\x02\u021B\u021E\x03\x02\x02\x02\u021C\u021A\x03\x02" +
		"\x02\x02\u021C\u021D\x03\x02\x02\x02\u021D[\x03\x02\x02\x02\u021E\u021C" +
		"\x03\x02\x02\x02\u021F\u0220\b/\x01\x02\u0220\u0221\x05^0\x02\u0221\u022A" +
		"\x03\x02\x02\x02\u0222\u0223\f\x04\x02\x02\u0223\u0224\x07\x07\x02\x02" +
		"\u0224\u0229\x05^0\x02\u0225\u0226\f\x03\x02\x02\u0226\u0227\x07\b\x02" +
		"\x02\u0227\u0229\x05^0\x02\u0228\u0222\x03\x02\x02\x02\u0228\u0225\x03" +
		"\x02\x02\x02\u0229\u022C\x03\x02\x02\x02\u022A\u0228\x03\x02\x02\x02\u022A" +
		"\u022B\x03\x02\x02\x02\u022B]\x03\x02\x02\x02\u022C\u022A\x03\x02\x02" +
		"\x02\u022D\u022E\b0\x01\x02\u022E\u022F\x05`1\x02\u022F\u023B\x03\x02" +
		"\x02\x02\u0230\u0231\f\x05\x02\x02\u0231\u0232\x07\x05\x02\x02\u0232\u023A" +
		"\x05`1\x02\u0233\u0234\f\x04\x02\x02\u0234\u0235\x07\x06\x02\x02\u0235" +
		"\u023A\x05`1\x02\u0236\u0237\f\x03\x02\x02\u0237\u0238\x07\t\x02\x02\u0238" +
		"\u023A\x05`1\x02\u0239\u0230\x03\x02\x02\x02\u0239\u0233\x03\x02\x02\x02" +
		"\u0239\u0236\x03\x02\x02\x02\u023A\u023D\x03\x02\x02\x02\u023B\u0239\x03" +
		"\x02\x02\x02\u023B\u023C\x03\x02\x02\x02\u023C_\x03\x02\x02\x02\u023D" +
		"\u023B\x03\x02\x02\x02\u023E\u0245\x05h5\x02\u023F\u0240\x07\x14\x02\x02" +
		"\u0240\u0241\x05b2\x02\u0241\u0242\x07\x15\x02\x02\u0242\u0243\x05`1\x02" +
		"\u0243\u0245\x03\x02\x02\x02\u0244\u023E\x03\x02\x02\x02\u0244\u023F\x03" +
		"\x02\x02\x02\u0245a\x03\x02\x02\x02\u0246\u0248\x05\x0E\b\x02\u0247\u0246" +
		"\x03\x02\x02\x02\u0248\u024B\x03\x02\x02\x02\u0249\u0247\x03\x02\x02\x02" +
		"\u0249\u024A\x03\x02\x02\x02\u024A\u024C\x03\x02\x02\x02\u024B\u0249\x03" +
		"\x02\x02\x02\u024C\u024E\x05\f\x07\x02\u024D\u024F\x05d3\x02\u024E\u024D" +
		"\x03\x02\x02\x02\u024E\u024F\x03\x02\x02\x02\u024Fc\x03\x02\x02\x02\u0250" +
		"\u0256\x05\b\x05\x02\u0251\u0253\x05\b\x05\x02\u0252\u0251\x03\x02\x02" +
		"\x02\u0252\u0253\x03\x02\x02\x02\u0253\u0254\x03\x02\x02\x02\u0254\u0256" +
		"\x05f4\x02\u0255\u0250\x03\x02\x02\x02\u0255\u0252\x03\x02\x02\x02\u0256" +
		"e\x03\x02\x02\x02\u0257\u0258\b4\x01\x02\u0258\u0259\x07\x14\x02\x02\u0259" +
		"\u025A\x05d3\x02\u025A\u025B\x07\x15\x02\x02\u025B\u0262\x03\x02\x02\x02" +
		"\u025C\u025E\x07\x16\x02\x02\u025D\u025F\x05H%\x02\u025E\u025D\x03\x02" +
		"\x02\x02\u025E\u025F\x03\x02\x02\x02\u025F\u0260\x03\x02\x02\x02\u0260" +
		"\u0262\x07\x17\x02\x02\u0261\u0257\x03\x02\x02\x02\u0261\u025C\x03\x02" +
		"\x02\x02\u0262\u026B\x03\x02\x02\x02\u0263\u0264\f\x03\x02\x02\u0264\u0266" +
		"\x07\x16\x02\x02\u0265\u0267\x05H%\x02\u0266\u0265\x03\x02\x02\x02\u0266" +
		"\u0267\x03\x02\x02\x02\u0267\u0268\x03\x02\x02\x02\u0268\u026A\x07\x17" +
		"\x02\x02\u0269\u0263\x03\x02\x02\x02\u026A\u026D\x03\x02\x02\x02\u026B" +
		"\u0269\x03\x02\x02\x02\u026B\u026C\x03\x02\x02\x02\u026Cg\x03\x02\x02" +
		"\x02\u026D\u026B\x03\x02\x02\x02\u026E\u027C\x05j6\x02\u026F\u0270\x07" +
		"\x1A\x02\x02\u0270\u027C\x05h5\x02\u0271\u0272\x07\x1B\x02\x02\u0272\u027C" +
		"\x05h5\x02\u0273\u0274\x05\x02\x02\x02\u0274\u0275\x05`1\x02\u0275\u027C" +
		"\x03\x02\x02\x02\u0276\u0277\x072\x02\x02\u0277\u0278\x07\x14\x02\x02" +
		"\u0278\u0279\x05b2\x02\u0279\u027A\x07\x15\x02\x02\u027A\u027C\x03\x02" +
		"\x02\x02\u027B\u026E\x03\x02\x02\x02\u027B\u026F\x03\x02\x02\x02\u027B" +
		"\u0271\x03\x02\x02\x02\u027B\u0273\x03\x02\x02\x02\u027B\u0276\x03\x02" +
		"\x02\x02\u027Ci\x03\x02\x02\x02\u027D\u027E\b6\x01\x02\u027E\u027F\x05" +
		"l7\x02\u027F\u0296\x03\x02\x02\x02\u0280\u0281\f\b\x02\x02\u0281\u0282" +
		"\x07\x16\x02\x02\u0282\u0283\x05F$\x02\u0283\u0284\x07\x17\x02\x02\u0284" +
		"\u0295\x03\x02\x02\x02\u0285\u0286\f\x07\x02\x02\u0286\u0287\x07\x14\x02" +
		"\x02\u0287\u0288\x05D#\x02\u0288\u0289\x07\x15\x02\x02\u0289\u0295\x03" +
		"\x02\x02\x02\u028A\u028B\f\x06\x02\x02\u028B\u028C\x07\x12\x02\x02\u028C" +
		"\u0295\x05\x10\t\x02\u028D\u028E\f\x05\x02\x02\u028E\u028F\x07\x13\x02" +
		"\x02\u028F\u0295\x05\x10\t\x02\u0290\u0291\f\x04\x02\x02\u0291\u0295\x07" +
		"\x1A\x02\x02\u0292\u0293\f\x03\x02\x02\u0293\u0295\x07\x1B\x02\x02\u0294" +
		"\u0280\x03\x02\x02\x02\u0294\u0285\x03\x02\x02\x02\u0294\u028A\x03\x02" +
		"\x02\x02\u0294\u028D\x03\x02\x02\x02\u0294\u0290\x03\x02\x02\x02\u0294" +
		"\u0292\x03\x02\x02\x02\u0295\u0298\x03\x02\x02\x02\u0296\u0294\x03\x02" +
		"\x02\x02\u0296\u0297\x03\x02\x02\x02\u0297k\x03\x02\x02\x02\u0298\u0296" +
		"\x03\x02\x02\x02\u0299\u02A0\x05\x10\t\x02\u029A\u02A0\x05n8\x02\u029B" +
		"\u029C\x07\x14\x02\x02\u029C\u029D\x05D#\x02\u029D\u029E\x07\x15\x02\x02" +
		"\u029E\u02A0\x03\x02\x02\x02\u029F\u0299\x03\x02\x02\x02\u029F\u029A\x03" +
		"\x02\x02\x02\u029F\u029B\x03\x02\x02\x02\u02A0m\x03\x02\x02\x02\u02A1" +
		"\u02A5\x05p9\x02\u02A2\u02A5\x05r:\x02\u02A3\u02A5\x05t;\x02\u02A4\u02A1" +
		"\x03\x02\x02\x02\u02A4\u02A2\x03\x02\x02\x02\u02A4\u02A3\x03\x02\x02\x02" +
		"\u02A5o\x03\x02\x02\x02\u02A6\u02A7\x07L\x02\x02\u02A7q\x03\x02\x02\x02" +
		"\u02A8\u02A9\x07M\x02\x02\u02A9s\x03\x02\x02\x02\u02AA\u02AB\x07N\x02" +
		"\x02\u02ABu\x03\x02\x02\x02\u02AC\u02B0\x07\x18\x02\x02\u02AD\u02AF\x05" +
		".\x18\x02\u02AE\u02AD\x03\x02\x02\x02\u02AF\u02B2\x03\x02\x02\x02\u02B0" +
		"\u02AE\x03\x02\x02\x02\u02B0\u02B1\x03\x02\x02\x02\u02B1\u02B3\x03\x02" +
		"\x02\x02\u02B2\u02B0\x03\x02\x02\x02\u02B3\u02B4\x07\x19\x02\x02\u02B4" +
		"w\x03\x02\x02\x02\u02B5\u02B6\x075\x02\x02\u02B6\u02B7\x07\x14\x02\x02" +
		"\u02B7\u02B8\x05D#\x02\u02B8\u02B9\x07\x15\x02\x02\u02B9\u02BC\x05.\x18" +
		"\x02\u02BA\u02BB\x076\x02\x02\u02BB\u02BD\x05.\x18\x02\u02BC\u02BA\x03" +
		"\x02\x02\x02\u02BC\u02BD\x03\x02\x02\x02\u02BDy\x03\x02\x02\x02\u02BE" +
		"\u02BF\x077\x02\x02\u02BF\u02C0\x07\x14\x02\x02\u02C0\u02C1\x05D#\x02" +
		"\u02C1\u02C2\x07\x15\x02\x02\u02C2\u02C3\x05|?\x02\u02C3{\x03\x02\x02" +
		"\x02\u02C4\u02C8\x07\x18\x02\x02\u02C5\u02C7\x05~@\x02\u02C6\u02C5\x03" +
		"\x02\x02\x02\u02C7\u02CA\x03\x02\x02\x02\u02C8\u02C6\x03\x02\x02\x02\u02C8" +
		"\u02C9\x03\x02\x02\x02\u02C9\u02CC\x03\x02\x02\x02\u02CA\u02C8\x03\x02" +
		"\x02\x02\u02CB\u02CD\x05\x80A\x02\u02CC\u02CB\x03\x02\x02\x02\u02CC\u02CD" +
		"\x03\x02\x02\x02\u02CD\u02CE\x03\x02\x02\x02\u02CE\u02CF\x07\x19\x02\x02" +
		"\u02CF}\x03\x02\x02\x02\u02D0\u02D1\x073\x02\x02\u02D1\u02D2\x05D#\x02" +
		"\u02D2\u02D3\x07\x0F\x02\x02\u02D3\u02D4\x05.\x18\x02\u02D4\x7F\x03\x02" +
		"\x02\x02\u02D5\u02D6\x074\x02\x02\u02D6\u02D7\x07\x0F\x02\x02\u02D7\u02D8" +
		"\x05.\x18\x02\u02D8\x81\x03\x02\x02\x02\u02D9\u02DA\x078\x02\x02\u02DA" +
		"\u02DB\x07\x14\x02\x02\u02DB\u02DC\x05D#\x02\u02DC\u02DD\x07\x15\x02\x02" +
		"\u02DD\u02DE\x05.\x18\x02\u02DE\x83\x03\x02\x02\x02\u02DF\u02E0\x079\x02" +
		"\x02\u02E0\u02E1\x05.\x18\x02\u02E1\u02E2\x078\x02\x02\u02E2\u02E3\x07" +
		"\x14\x02\x02\u02E3\u02E4\x05D#\x02\u02E4\u02E5\x07\x15\x02\x02\u02E5\u02E6" +
		"\x05\x06\x04\x02\u02E6\x85\x03\x02\x02\x02\u02E7\u02E8\x07:\x02\x02\u02E8" +
		"\u02EA\x07\x14\x02\x02\u02E9\u02EB\x05D#\x02\u02EA\u02E9\x03\x02\x02\x02" +
		"\u02EA\u02EB\x03\x02\x02\x02\u02EB\u02EC\x03\x02\x02\x02\u02EC\u02EE\x07" +
		"\x10\x02\x02\u02ED\u02EF\x05D#\x02\u02EE\u02ED\x03\x02\x02\x02\u02EE\u02EF" +
		"\x03\x02\x02\x02\u02EF\u02F0\x03\x02\x02\x02\u02F0\u02F2\x07\x10\x02\x02" +
		"\u02F1\u02F3\x05D#\x02\u02F2\u02F1\x03\x02\x02\x02\u02F2\u02F3\x03\x02" +
		"\x02\x02\u02F3\u02F4\x03\x02\x02\x02\u02F4\u02F5\x07\x15\x02\x02\u02F5" +
		"\u02F6\x05.\x18\x02\u02F6\x87\x03\x02\x02\x02\u02F7\u02F8\x07;\x02\x02" +
		"\u02F8\u02F9\x05\x10\t\x02\u02F9\u02FA\x05\x06\x04\x02\u02FA\x89\x03\x02" +
		"\x02\x02\u02FB\u02FC\x07<\x02\x02\u02FC\u02FD\x05\x06\x04\x02\u02FD\x8B" +
		"\x03\x02\x02\x02\u02FE\u02FF\x07=\x02\x02\u02FF\u0300\x05\x06\x04\x02" +
		"\u0300\x8D\x03\x02\x02\x02\u0301\u0303\x07>\x02\x02\u0302\u0304\x05D#" +
		"\x02\u0303\u0302\x03\x02\x02\x02\u0303\u0304\x03\x02\x02\x02\u0304\u0305" +
		"\x03\x02\x02\x02\u0305\u0306\x05\x06\x04\x02\u0306\x8F\x03\x02\x02\x02" +
		"N\x99\x9F\xA3\xA7\xAB\xB2\xC2\xC4\xD0\xD7\xE1\xE6\xE9\xEE\xF3\xF9\u0101" +
		"\u0107\u010B\u0111\u0117\u011F\u012C\u013E\u014B\u0155\u015B\u015E\u0168" +
		"\u016D\u017A\u017E\u0180\u0187\u018B\u0195\u01A3\u01AB\u01B6\u01C0\u01CB" +
		"\u01D6\u01E1\u01EC\u01F8\u01FA\u020C\u020E\u021A\u021C\u0228\u022A\u0239" +
		"\u023B\u0244\u0249\u024E\u0252\u0255\u025E\u0261\u0266\u026B\u027B\u0294" +
		"\u0296\u029F\u02A4\u02B0\u02BC\u02C8\u02CC\u02EA\u02EE\u02F2\u0303";
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


export class PointerContext extends ParserRuleContext {
	public ASTERICK(): TerminalNode[];
	public ASTERICK(i: number): TerminalNode;
	public ASTERICK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CalcParser.ASTERICK);
		} else {
			return this.getToken(CalcParser.ASTERICK, i);
		}
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
	public struct_specifier(): Struct_specifierContext | undefined {
		return this.tryGetRuleContext(0, Struct_specifierContext);
	}
	public union_specifier(): Union_specifierContext | undefined {
		return this.tryGetRuleContext(0, Union_specifierContext);
	}
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
	public struct_specifier(): Struct_specifierContext[];
	public struct_specifier(i: number): Struct_specifierContext;
	public struct_specifier(i?: number): Struct_specifierContext | Struct_specifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Struct_specifierContext);
		} else {
			return this.getRuleContext(i, Struct_specifierContext);
		}
	}
	public end_statement_delimiter(): End_statement_delimiterContext[];
	public end_statement_delimiter(i: number): End_statement_delimiterContext;
	public end_statement_delimiter(i?: number): End_statement_delimiterContext | End_statement_delimiterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(End_statement_delimiterContext);
		} else {
			return this.getRuleContext(i, End_statement_delimiterContext);
		}
	}
	public union_specifier(): Union_specifierContext[];
	public union_specifier(i: number): Union_specifierContext;
	public union_specifier(i?: number): Union_specifierContext | Union_specifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Union_specifierContext);
		} else {
			return this.getRuleContext(i, Union_specifierContext);
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
	public pointer(): PointerContext | undefined {
		return this.tryGetRuleContext(0, PointerContext);
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
	public pointer(): PointerContext | undefined {
		return this.tryGetRuleContext(0, PointerContext);
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


export class Struct_specifierContext extends ParserRuleContext {
	public STRUCT(): TerminalNode { return this.getToken(CalcParser.STRUCT, 0); }
	public OPEN_CURLY_BRACKET(): TerminalNode | undefined { return this.tryGetToken(CalcParser.OPEN_CURLY_BRACKET, 0); }
	public CLOSE_CURLY_BRACKET(): TerminalNode | undefined { return this.tryGetToken(CalcParser.CLOSE_CURLY_BRACKET, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public struct_or_union_declaration(): Struct_or_union_declarationContext[];
	public struct_or_union_declaration(i: number): Struct_or_union_declarationContext;
	public struct_or_union_declaration(i?: number): Struct_or_union_declarationContext | Struct_or_union_declarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Struct_or_union_declarationContext);
		} else {
			return this.getRuleContext(i, Struct_or_union_declarationContext);
		}
	}
	public end_statement_delimiter(): End_statement_delimiterContext[];
	public end_statement_delimiter(i: number): End_statement_delimiterContext;
	public end_statement_delimiter(i?: number): End_statement_delimiterContext | End_statement_delimiterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(End_statement_delimiterContext);
		} else {
			return this.getRuleContext(i, End_statement_delimiterContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_struct_specifier; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterStruct_specifier) {
			listener.enterStruct_specifier(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitStruct_specifier) {
			listener.exitStruct_specifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitStruct_specifier) {
			return visitor.visitStruct_specifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Union_specifierContext extends ParserRuleContext {
	public UNION(): TerminalNode { return this.getToken(CalcParser.UNION, 0); }
	public OPEN_CURLY_BRACKET(): TerminalNode | undefined { return this.tryGetToken(CalcParser.OPEN_CURLY_BRACKET, 0); }
	public CLOSE_CURLY_BRACKET(): TerminalNode | undefined { return this.tryGetToken(CalcParser.CLOSE_CURLY_BRACKET, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public struct_or_union_declaration(): Struct_or_union_declarationContext[];
	public struct_or_union_declaration(i: number): Struct_or_union_declarationContext;
	public struct_or_union_declaration(i?: number): Struct_or_union_declarationContext | Struct_or_union_declarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Struct_or_union_declarationContext);
		} else {
			return this.getRuleContext(i, Struct_or_union_declarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_union_specifier; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterUnion_specifier) {
			listener.enterUnion_specifier(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitUnion_specifier) {
			listener.exitUnion_specifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitUnion_specifier) {
			return visitor.visitUnion_specifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Struct_or_union_declarationContext extends ParserRuleContext {
	public specifier_qualifier(): Specifier_qualifierContext {
		return this.getRuleContext(0, Specifier_qualifierContext);
	}
	public struct_or_union_declarator_list(): Struct_or_union_declarator_listContext {
		return this.getRuleContext(0, Struct_or_union_declarator_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_struct_or_union_declaration; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterStruct_or_union_declaration) {
			listener.enterStruct_or_union_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitStruct_or_union_declaration) {
			listener.exitStruct_or_union_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitStruct_or_union_declaration) {
			return visitor.visitStruct_or_union_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Specifier_qualifierContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return CalcParser.RULE_specifier_qualifier; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterSpecifier_qualifier) {
			listener.enterSpecifier_qualifier(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitSpecifier_qualifier) {
			listener.exitSpecifier_qualifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitSpecifier_qualifier) {
			return visitor.visitSpecifier_qualifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Struct_or_union_declarator_listContext extends ParserRuleContext {
	public struct_or_union_declarator(): Struct_or_union_declaratorContext {
		return this.getRuleContext(0, Struct_or_union_declaratorContext);
	}
	public struct_or_union_declarator_list(): Struct_or_union_declarator_listContext | undefined {
		return this.tryGetRuleContext(0, Struct_or_union_declarator_listContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(CalcParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_struct_or_union_declarator_list; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterStruct_or_union_declarator_list) {
			listener.enterStruct_or_union_declarator_list(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitStruct_or_union_declarator_list) {
			listener.exitStruct_or_union_declarator_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitStruct_or_union_declarator_list) {
			return visitor.visitStruct_or_union_declarator_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Struct_or_union_declaratorContext extends ParserRuleContext {
	public declarator(): DeclaratorContext {
		return this.getRuleContext(0, DeclaratorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_struct_or_union_declarator; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterStruct_or_union_declarator) {
			listener.enterStruct_or_union_declarator(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitStruct_or_union_declarator) {
			listener.exitStruct_or_union_declarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitStruct_or_union_declarator) {
			return visitor.visitStruct_or_union_declarator(this);
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
	public if_statement(): If_statementContext | undefined {
		return this.tryGetRuleContext(0, If_statementContext);
	}
	public switch_statement(): Switch_statementContext | undefined {
		return this.tryGetRuleContext(0, Switch_statementContext);
	}
	public while_statement(): While_statementContext | undefined {
		return this.tryGetRuleContext(0, While_statementContext);
	}
	public do_statement(): Do_statementContext | undefined {
		return this.tryGetRuleContext(0, Do_statementContext);
	}
	public for_statement(): For_statementContext | undefined {
		return this.tryGetRuleContext(0, For_statementContext);
	}
	public goto_statement(): Goto_statementContext | undefined {
		return this.tryGetRuleContext(0, Goto_statementContext);
	}
	public continue_statement(): Continue_statementContext | undefined {
		return this.tryGetRuleContext(0, Continue_statementContext);
	}
	public break_statement(): Break_statementContext | undefined {
		return this.tryGetRuleContext(0, Break_statementContext);
	}
	public return_statement(): Return_statementContext | undefined {
		return this.tryGetRuleContext(0, Return_statementContext);
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
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public COLON(): TerminalNode { return this.getToken(CalcParser.COLON, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
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
	public conditional_expression(): Conditional_expressionContext | undefined {
		return this.tryGetRuleContext(0, Conditional_expressionContext);
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
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
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
	public assignment_expression(): Assignment_expressionContext | undefined {
		return this.tryGetRuleContext(0, Assignment_expressionContext);
	}
	public CLOSE_SQUARE_BRACKET(): TerminalNode | undefined { return this.tryGetToken(CalcParser.CLOSE_SQUARE_BRACKET, 0); }
	public OPEN_PARENTHESES(): TerminalNode | undefined { return this.tryGetToken(CalcParser.OPEN_PARENTHESES, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
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


export class If_statementContext extends ParserRuleContext {
	public _cond!: ExpressionContext;
	public _if_true!: StatementContext;
	public _if_false!: StatementContext;
	public IF(): TerminalNode { return this.getToken(CalcParser.IF, 0); }
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_if_statement; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterIf_statement) {
			listener.enterIf_statement(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitIf_statement) {
			listener.exitIf_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitIf_statement) {
			return visitor.visitIf_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Switch_statementContext extends ParserRuleContext {
	public _cond!: ExpressionContext;
	public SWITCH(): TerminalNode { return this.getToken(CalcParser.SWITCH, 0); }
	public OPEN_PARENTHESES(): TerminalNode { return this.getToken(CalcParser.OPEN_PARENTHESES, 0); }
	public CLOSE_PARENTHESES(): TerminalNode { return this.getToken(CalcParser.CLOSE_PARENTHESES, 0); }
	public switch_body(): Switch_bodyContext {
		return this.getRuleContext(0, Switch_bodyContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_switch_statement; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterSwitch_statement) {
			listener.enterSwitch_statement(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitSwitch_statement) {
			listener.exitSwitch_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitSwitch_statement) {
			return visitor.visitSwitch_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Switch_bodyContext extends ParserRuleContext {
	public OPEN_CURLY_BRACKET(): TerminalNode { return this.getToken(CalcParser.OPEN_CURLY_BRACKET, 0); }
	public CLOSE_CURLY_BRACKET(): TerminalNode { return this.getToken(CalcParser.CLOSE_CURLY_BRACKET, 0); }
	public switch_case_body(): Switch_case_bodyContext[];
	public switch_case_body(i: number): Switch_case_bodyContext;
	public switch_case_body(i?: number): Switch_case_bodyContext | Switch_case_bodyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Switch_case_bodyContext);
		} else {
			return this.getRuleContext(i, Switch_case_bodyContext);
		}
	}
	public switch_default_body(): Switch_default_bodyContext | undefined {
		return this.tryGetRuleContext(0, Switch_default_bodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_switch_body; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterSwitch_body) {
			listener.enterSwitch_body(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitSwitch_body) {
			listener.exitSwitch_body(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitSwitch_body) {
			return visitor.visitSwitch_body(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Switch_case_bodyContext extends ParserRuleContext {
	public CASE(): TerminalNode { return this.getToken(CalcParser.CASE, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public COLON(): TerminalNode { return this.getToken(CalcParser.COLON, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_switch_case_body; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterSwitch_case_body) {
			listener.enterSwitch_case_body(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitSwitch_case_body) {
			listener.exitSwitch_case_body(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitSwitch_case_body) {
			return visitor.visitSwitch_case_body(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Switch_default_bodyContext extends ParserRuleContext {
	public DEFAULT(): TerminalNode { return this.getToken(CalcParser.DEFAULT, 0); }
	public COLON(): TerminalNode { return this.getToken(CalcParser.COLON, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_switch_default_body; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterSwitch_default_body) {
			listener.enterSwitch_default_body(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitSwitch_default_body) {
			listener.exitSwitch_default_body(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitSwitch_default_body) {
			return visitor.visitSwitch_default_body(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class While_statementContext extends ParserRuleContext {
	public _cond!: ExpressionContext;
	public WHILE(): TerminalNode { return this.getToken(CalcParser.WHILE, 0); }
	public OPEN_PARENTHESES(): TerminalNode { return this.getToken(CalcParser.OPEN_PARENTHESES, 0); }
	public CLOSE_PARENTHESES(): TerminalNode { return this.getToken(CalcParser.CLOSE_PARENTHESES, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_while_statement; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterWhile_statement) {
			listener.enterWhile_statement(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitWhile_statement) {
			listener.exitWhile_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitWhile_statement) {
			return visitor.visitWhile_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Do_statementContext extends ParserRuleContext {
	public _cond!: ExpressionContext;
	public DO(): TerminalNode { return this.getToken(CalcParser.DO, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public WHILE(): TerminalNode { return this.getToken(CalcParser.WHILE, 0); }
	public OPEN_PARENTHESES(): TerminalNode { return this.getToken(CalcParser.OPEN_PARENTHESES, 0); }
	public CLOSE_PARENTHESES(): TerminalNode { return this.getToken(CalcParser.CLOSE_PARENTHESES, 0); }
	public end_statement_delimiter(): End_statement_delimiterContext {
		return this.getRuleContext(0, End_statement_delimiterContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_do_statement; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterDo_statement) {
			listener.enterDo_statement(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitDo_statement) {
			listener.exitDo_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitDo_statement) {
			return visitor.visitDo_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class For_statementContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(CalcParser.FOR, 0); }
	public OPEN_PARENTHESES(): TerminalNode { return this.getToken(CalcParser.OPEN_PARENTHESES, 0); }
	public SEMICOLON(): TerminalNode[];
	public SEMICOLON(i: number): TerminalNode;
	public SEMICOLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CalcParser.SEMICOLON);
		} else {
			return this.getToken(CalcParser.SEMICOLON, i);
		}
	}
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_for_statement; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterFor_statement) {
			listener.enterFor_statement(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitFor_statement) {
			listener.exitFor_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitFor_statement) {
			return visitor.visitFor_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Goto_statementContext extends ParserRuleContext {
	public GOTO(): TerminalNode { return this.getToken(CalcParser.GOTO, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public end_statement_delimiter(): End_statement_delimiterContext {
		return this.getRuleContext(0, End_statement_delimiterContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_goto_statement; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterGoto_statement) {
			listener.enterGoto_statement(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitGoto_statement) {
			listener.exitGoto_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitGoto_statement) {
			return visitor.visitGoto_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Continue_statementContext extends ParserRuleContext {
	public CONTINUE(): TerminalNode { return this.getToken(CalcParser.CONTINUE, 0); }
	public end_statement_delimiter(): End_statement_delimiterContext {
		return this.getRuleContext(0, End_statement_delimiterContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_continue_statement; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterContinue_statement) {
			listener.enterContinue_statement(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitContinue_statement) {
			listener.exitContinue_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitContinue_statement) {
			return visitor.visitContinue_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Break_statementContext extends ParserRuleContext {
	public BREAK(): TerminalNode { return this.getToken(CalcParser.BREAK, 0); }
	public end_statement_delimiter(): End_statement_delimiterContext {
		return this.getRuleContext(0, End_statement_delimiterContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_break_statement; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterBreak_statement) {
			listener.enterBreak_statement(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitBreak_statement) {
			listener.exitBreak_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitBreak_statement) {
			return visitor.visitBreak_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Return_statementContext extends ParserRuleContext {
	public RETURN(): TerminalNode { return this.getToken(CalcParser.RETURN, 0); }
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
	public get ruleIndex(): number { return CalcParser.RULE_return_statement; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterReturn_statement) {
			listener.enterReturn_statement(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitReturn_statement) {
			listener.exitReturn_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitReturn_statement) {
			return visitor.visitReturn_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


