// Generated from ./src/lang/Calc.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class CalcLexer extends Lexer {
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

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "CARET", "ASTERICK", "BACKSLASH", "PLUS", "MINUS", "PERCENT", 
		"AMPERSAND", "TILDA", "EXCLAMATION_MARK", "VERTICAL_BAR", "QUESTION_MARK", 
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
		"CONST_TYPE_QUALIFIER", "VOLATILE_TYPE_QUALIFIER", "NON_ZERO_DIGIT", "DIGIT", 
		"ALPHABET", "ALPHABET_AND_UNDERSCORE", "INTEGER", "FLOAT", "CHAR", "IDENTIFIER",
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
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CalcLexer._LITERAL_NAMES, CalcLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CalcLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(CalcLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "Calc.g4"; }

	// @Override
	public get ruleNames(): string[] { return CalcLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return CalcLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return CalcLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return CalcLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02O\u01E8\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
		"\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04" +
		"+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03" +
		"\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03" +
		"\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03" +
		"\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x03" +
		"\x12\x03\x12\x03\x13\x03\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03\x16\x03" +
		"\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x1A\x03" +
		"\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03" +
		"\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03" +
		"!\x03!\x03!\x03!\x03\"\x03\"\x03\"\x03\"\x03#\x03#\x03#\x03$\x03$\x03" +
		"$\x03%\x03%\x03%\x03&\x03&\x03&\x03\'\x03\'\x03\'\x03(\x03(\x03(\x03)" +
		"\x03)\x03)\x03*\x03*\x03+\x03+\x03,\x03,\x03,\x03-\x03-\x03-\x03.\x03" +
		".\x03.\x03/\x03/\x03/\x030\x060\u011C\n0\r0\x0E0\u011D\x030\x030\x031" +
		"\x031\x031\x031\x031\x031\x031\x032\x032\x032\x032\x032\x033\x033\x03" +
		"3\x033\x033\x033\x033\x033\x034\x034\x034\x035\x035\x035\x035\x035\x03" +
		"6\x036\x036\x036\x036\x036\x036\x037\x037\x037\x037\x037\x037\x038\x03" +
		"8\x038\x039\x039\x039\x039\x03:\x03:\x03:\x03:\x03:\x03;\x03;\x03;\x03" +
		";\x03;\x03;\x03;\x03;\x03;\x03<\x03<\x03<\x03<\x03<\x03<\x03=\x03=\x03" +
		"=\x03=\x03=\x03=\x03=\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03?\x03?\x03" +
		"?\x03?\x03?\x03?\x03@\x03@\x03@\x03@\x03@\x03A\x03A\x03A\x03A\x03A\x03" +
		"B\x03B\x03B\x03B\x03B\x03B\x03C\x03C\x03C\x03C\x03D\x03D\x03D\x03D\x03" +
		"D\x03E\x03E\x03E\x03E\x03E\x03E\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03" +
		"G\x03G\x03G\x03G\x03G\x03G\x03G\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03" +
		"H\x03H\x03I\x03I\x03I\x03I\x03I\x03I\x03J\x03J\x03J\x03J\x03J\x03J\x03" +
		"J\x03J\x03J\x03K\x03K\x03L\x03L\x03M\x03M\x03N\x03N\x03O\x03O\x07O\u01C9" +
		"\nO\fO\x0EO\u01CC\vO\x03P\x03P\x07P\u01D0\nP\fP\x0EP\u01D3\vP\x03P\x03" +
		"P\x03P\x07P\u01D8\nP\fP\x0EP\u01DB\vP\x03Q\x03Q\x03Q\x03Q\x03R\x03R\x03" +
		"R\x07R\u01E4\nR\fR\x0ER\u01E7\vR\x02\x02\x02S\x03\x02\x03\x05\x02\x04" +
		"\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v" +
		"\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!" +
		"\x02\x12#\x02\x13%\x02\x14\'\x02\x15)\x02\x16+\x02\x17-\x02\x18/\x02\x19" +
		"1\x02\x1A3\x02\x1B5\x02\x1C7\x02\x1D9\x02\x1E;\x02\x1F=\x02 ?\x02!A\x02" +
		"\"C\x02#E\x02$G\x02%I\x02&K\x02\'M\x02(O\x02)Q\x02*S\x02+U\x02,W\x02-" +
		"Y\x02.[\x02/]\x020_\x021a\x022c\x023e\x024g\x025i\x026k\x027m\x028o\x02" +
		"9q\x02:s\x02;u\x02<w\x02=y\x02>{\x02?}\x02@\x7F\x02A\x81\x02B\x83\x02" +
		"C\x85\x02D\x87\x02E\x89\x02F\x8B\x02G\x8D\x02H\x8F\x02I\x91\x02J\x93\x02" +
		"K\x95\x02\x02\x97\x02\x02\x99\x02\x02\x9B\x02\x02\x9D\x02L\x9F\x02M\xA1" +
		"\x02N\xA3\x02O\x03\x02\x07\x05\x02\v\f\x0F\x0F\"\"\x03\x023;\x03\x022" +
		";\x04\x02C\\c|\x05\x02C\\aac|\x02\u01E9\x02\x03\x03\x02\x02\x02\x02\x05" +
		"\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03" +
		"\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03" +
		"\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03" +
		"\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03" +
		"\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02" +
		"\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x02)\x03\x02\x02\x02" +
		"\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03\x02\x02\x02\x021\x03" +
		"\x02\x02\x02\x023\x03\x02\x02\x02\x025\x03\x02\x02\x02\x027\x03\x02\x02" +
		"\x02\x029\x03\x02\x02\x02\x02;\x03\x02\x02\x02\x02=\x03\x02\x02\x02\x02" +
		"?\x03\x02\x02\x02\x02A\x03\x02\x02\x02\x02C\x03\x02\x02\x02\x02E\x03\x02" +
		"\x02\x02\x02G\x03\x02\x02\x02\x02I\x03\x02\x02\x02\x02K\x03\x02\x02\x02" +
		"\x02M\x03\x02\x02\x02\x02O\x03\x02\x02\x02\x02Q\x03\x02\x02\x02\x02S\x03" +
		"\x02\x02\x02\x02U\x03\x02\x02\x02\x02W\x03\x02\x02\x02\x02Y\x03\x02\x02" +
		"\x02\x02[\x03\x02\x02\x02\x02]\x03\x02\x02\x02\x02_\x03\x02\x02\x02\x02" +
		"a\x03\x02\x02\x02\x02c\x03\x02\x02\x02\x02e\x03\x02\x02\x02\x02g\x03\x02" +
		"\x02\x02\x02i\x03\x02\x02\x02\x02k\x03\x02\x02\x02\x02m\x03\x02\x02\x02" +
		"\x02o\x03\x02\x02\x02\x02q\x03\x02\x02\x02\x02s\x03\x02\x02\x02\x02u\x03" +
		"\x02\x02\x02\x02w\x03\x02\x02\x02\x02y\x03\x02\x02\x02\x02{\x03\x02\x02" +
		"\x02\x02}\x03\x02\x02\x02\x02\x7F\x03\x02\x02\x02\x02\x81\x03\x02\x02" +
		"\x02\x02\x83\x03\x02\x02\x02\x02\x85\x03\x02\x02\x02\x02\x87\x03\x02\x02" +
		"\x02\x02\x89\x03\x02\x02\x02\x02\x8B\x03\x02\x02\x02\x02\x8D\x03\x02\x02" +
		"\x02\x02\x8F\x03\x02\x02\x02\x02\x91\x03\x02\x02\x02\x02\x93\x03\x02\x02" +
		"\x02\x02\x9D\x03\x02\x02\x02\x02\x9F\x03\x02\x02\x02\x02\xA1\x03\x02\x02" +
		"\x02\x02\xA3\x03\x02\x02\x02\x03\xA5\x03\x02\x02\x02\x05\xA9\x03\x02\x02" +
		"\x02\x07\xAB\x03\x02\x02\x02\t\xAD\x03\x02\x02\x02\v\xAF\x03\x02\x02\x02" +
		"\r\xB1\x03\x02\x02\x02\x0F\xB3\x03\x02\x02\x02\x11\xB5\x03\x02\x02\x02" +
		"\x13\xB7\x03\x02\x02\x02\x15\xB9\x03\x02\x02\x02\x17\xBB\x03\x02\x02\x02" +
		"\x19\xBD\x03\x02\x02\x02\x1B\xBF\x03\x02\x02\x02\x1D\xC1\x03\x02\x02\x02" +
		"\x1F\xC3\x03\x02\x02\x02!\xC5\x03\x02\x02\x02#\xC7\x03\x02\x02\x02%\xCA" +
		"\x03\x02\x02\x02\'\xCC\x03\x02\x02\x02)\xCE\x03\x02\x02\x02+\xD0\x03\x02" +
		"\x02\x02-\xD2\x03\x02\x02\x02/\xD4\x03\x02\x02\x021\xD6\x03\x02\x02\x02" +
		"3\xD9\x03\x02\x02\x025\xDC\x03\x02\x02\x027\xDE\x03\x02\x02\x029\xE1\x03" +
		"\x02\x02\x02;\xE4\x03\x02\x02\x02=\xE7\x03\x02\x02\x02?\xEA\x03\x02\x02" +
		"\x02A\xED\x03\x02\x02\x02C\xF1\x03\x02\x02\x02E\xF5\x03\x02\x02\x02G\xF8" +
		"\x03\x02\x02\x02I\xFB\x03\x02\x02\x02K\xFE\x03\x02\x02\x02M\u0101\x03" +
		"\x02\x02\x02O\u0104\x03\x02\x02\x02Q\u0107\x03\x02\x02\x02S\u010A\x03" +
		"\x02\x02\x02U\u010C\x03\x02\x02\x02W\u010E\x03\x02\x02\x02Y\u0111\x03" +
		"\x02\x02\x02[\u0114\x03\x02\x02\x02]\u0117\x03\x02\x02\x02_\u011B\x03" +
		"\x02\x02\x02a\u0121\x03\x02\x02\x02c\u0128\x03\x02\x02\x02e\u012D\x03" +
		"\x02\x02\x02g\u0135\x03\x02\x02\x02i\u0138\x03\x02\x02\x02k\u013D\x03" +
		"\x02\x02\x02m\u0144\x03\x02\x02\x02o\u014A\x03\x02\x02\x02q\u014D\x03" +
		"\x02\x02\x02s\u0151\x03\x02\x02\x02u\u0156\x03\x02\x02\x02w\u015F\x03" +
		"\x02\x02\x02y\u0165\x03\x02\x02\x02{\u016C\x03\x02\x02\x02}\u0173\x03" +
		"\x02\x02\x02\x7F\u0179\x03\x02\x02\x02\x81\u017E\x03\x02\x02\x02\x83\u0183" +
		"\x03\x02\x02\x02\x85\u0189\x03\x02\x02\x02\x87\u018D\x03\x02\x02\x02\x89" +
		"\u0192\x03\x02\x02\x02\x8B\u0198\x03\x02\x02\x02\x8D\u019F\x03\x02\x02" +
		"\x02\x8F\u01A6\x03\x02\x02\x02\x91\u01AF\x03\x02\x02\x02\x93\u01B5\x03" +
		"\x02\x02\x02\x95\u01BE\x03\x02\x02\x02\x97\u01C0\x03\x02\x02\x02\x99\u01C2" +
		"\x03\x02\x02\x02\x9B\u01C4\x03\x02\x02\x02\x9D\u01C6\x03\x02\x02\x02\x9F" +
		"\u01CD\x03\x02\x02\x02\xA1\u01DC\x03\x02\x02\x02\xA3\u01E0\x03\x02\x02" +
		"\x02\xA5\xA6\x070\x02\x02\xA6\xA7\x070\x02\x02\xA7\xA8\x070\x02\x02\xA8" +
		"\x04\x03\x02\x02\x02\xA9\xAA\x07`\x02\x02\xAA\x06\x03\x02\x02\x02\xAB" +
		"\xAC\x07,\x02\x02\xAC\b\x03\x02\x02\x02\xAD\xAE\x071\x02\x02\xAE\n\x03" +
		"\x02\x02\x02\xAF\xB0\x07-\x02\x02\xB0\f\x03\x02\x02\x02\xB1\xB2\x07/\x02" +
		"\x02\xB2\x0E\x03\x02\x02\x02\xB3\xB4\x07\'\x02\x02\xB4\x10\x03\x02\x02" +
		"\x02\xB5\xB6\x07(\x02\x02\xB6\x12\x03\x02\x02\x02\xB7\xB8\x07\x80\x02" +
		"\x02\xB8\x14\x03\x02\x02\x02\xB9\xBA\x07#\x02\x02\xBA\x16\x03\x02\x02" +
		"\x02\xBB\xBC\x07~\x02\x02\xBC\x18\x03\x02\x02\x02\xBD\xBE\x07A\x02\x02" +
		"\xBE\x1A\x03\x02\x02\x02\xBF\xC0\x07<\x02\x02\xC0\x1C\x03\x02\x02\x02" +
		"\xC1\xC2\x07=\x02\x02\xC2\x1E\x03\x02\x02\x02\xC3\xC4\x07.\x02\x02\xC4" +
		" \x03\x02\x02\x02\xC5\xC6\x070\x02\x02\xC6\"\x03\x02\x02\x02\xC7\xC8\x07" +
		"/\x02\x02\xC8\xC9\x07@\x02\x02\xC9$\x03\x02\x02\x02\xCA\xCB\x07*\x02\x02" +
		"\xCB&\x03\x02\x02\x02\xCC\xCD\x07+\x02\x02\xCD(\x03\x02\x02\x02\xCE\xCF" +
		"\x07]\x02\x02\xCF*\x03\x02\x02\x02\xD0\xD1\x07_\x02\x02\xD1,\x03\x02\x02" +
		"\x02\xD2\xD3\x07}\x02\x02\xD3.\x03\x02\x02\x02\xD4\xD5\x07\x7F\x02\x02" +
		"\xD50\x03\x02\x02\x02\xD6\xD7\x07-\x02\x02\xD7\xD8\x07-\x02\x02\xD82\x03" +
		"\x02\x02\x02\xD9\xDA\x07/\x02\x02\xDA\xDB\x07/\x02\x02\xDB4\x03\x02\x02" +
		"\x02\xDC\xDD\x07?\x02\x02\xDD6\x03\x02\x02\x02\xDE\xDF\x07,\x02\x02\xDF" +
		"\xE0\x07?\x02\x02\xE08\x03\x02\x02\x02\xE1\xE2\x071\x02\x02\xE2\xE3\x07" +
		"?\x02\x02\xE3:\x03\x02\x02\x02\xE4\xE5\x07\'\x02\x02\xE5\xE6\x07?\x02" +
		"\x02\xE6<\x03\x02\x02\x02\xE7\xE8\x07-\x02\x02\xE8\xE9\x07?\x02\x02\xE9" +
		">\x03\x02\x02\x02\xEA\xEB\x07/\x02\x02\xEB\xEC\x07?\x02\x02\xEC@\x03\x02" +
		"\x02\x02\xED\xEE\x07>\x02\x02\xEE\xEF\x07>\x02\x02\xEF\xF0\x07?\x02\x02" +
		"\xF0B\x03\x02\x02\x02\xF1\xF2\x07@\x02\x02\xF2\xF3\x07@\x02\x02\xF3\xF4" +
		"\x07?\x02\x02\xF4D\x03\x02\x02\x02\xF5\xF6\x07(\x02\x02\xF6\xF7\x07?\x02" +
		"\x02\xF7F\x03\x02\x02\x02\xF8\xF9\x07`\x02\x02\xF9\xFA\x07?\x02\x02\xFA" +
		"H\x03\x02\x02\x02\xFB\xFC\x07~\x02\x02\xFC\xFD\x07?\x02\x02\xFDJ\x03\x02" +
		"\x02\x02\xFE\xFF\x07(\x02\x02\xFF\u0100\x07(\x02\x02\u0100L\x03\x02\x02" +
		"\x02\u0101\u0102\x07~\x02\x02\u0102\u0103\x07~\x02\x02\u0103N\x03\x02" +
		"\x02\x02\u0104\u0105\x07?\x02\x02\u0105\u0106\x07?\x02\x02\u0106P\x03" +
		"\x02\x02\x02\u0107\u0108\x07#\x02\x02\u0108\u0109\x07?\x02\x02\u0109R" +
		"\x03\x02\x02\x02\u010A\u010B\x07@\x02\x02\u010BT\x03\x02\x02\x02\u010C" +
		"\u010D\x07>\x02\x02\u010DV\x03\x02\x02\x02\u010E\u010F\x07>\x02\x02\u010F" +
		"\u0110\x07?\x02\x02\u0110X\x03\x02\x02\x02\u0111\u0112\x07@\x02\x02\u0112" +
		"\u0113\x07?\x02\x02\u0113Z\x03\x02\x02\x02\u0114\u0115\x07>\x02\x02\u0115" +
		"\u0116\x07>\x02\x02\u0116\\\x03\x02\x02\x02\u0117\u0118\x07@\x02\x02\u0118" +
		"\u0119\x07@\x02\x02\u0119^\x03\x02\x02\x02\u011A\u011C\t\x02\x02\x02\u011B" +
		"\u011A\x03\x02\x02\x02\u011C\u011D\x03\x02\x02\x02\u011D\u011B\x03\x02" +
		"\x02\x02\u011D\u011E\x03\x02\x02\x02\u011E\u011F\x03\x02\x02\x02\u011F" +
		"\u0120\b0\x02\x02\u0120`\x03\x02\x02\x02\u0121\u0122\x07u\x02\x02\u0122" +
		"\u0123\x07k\x02\x02\u0123\u0124\x07|\x02\x02\u0124\u0125\x07g\x02\x02" +
		"\u0125\u0126\x07q\x02\x02\u0126\u0127\x07h\x02\x02\u0127b\x03\x02\x02" +
		"\x02\u0128\u0129\x07e\x02\x02\u0129\u012A\x07c\x02\x02\u012A\u012B\x07" +
		"u\x02\x02\u012B\u012C\x07g\x02\x02\u012Cd\x03\x02\x02\x02\u012D\u012E" +
		"\x07f\x02\x02\u012E\u012F\x07g\x02\x02\u012F\u0130\x07h\x02\x02\u0130" +
		"\u0131\x07c\x02\x02\u0131\u0132\x07w\x02\x02\u0132\u0133\x07n\x02\x02" +
		"\u0133\u0134\x07v\x02\x02\u0134f\x03\x02\x02\x02\u0135\u0136\x07k\x02" +
		"\x02\u0136\u0137\x07h\x02\x02\u0137h\x03\x02\x02\x02\u0138\u0139\x07g" +
		"\x02\x02\u0139\u013A\x07n\x02\x02\u013A\u013B\x07u\x02\x02\u013B\u013C" +
		"\x07g\x02\x02\u013Cj\x03\x02\x02\x02\u013D\u013E\x07u\x02\x02\u013E\u013F" +
		"\x07y\x02\x02\u013F\u0140\x07k\x02\x02\u0140\u0141\x07v\x02\x02\u0141" +
		"\u0142\x07e\x02\x02\u0142\u0143\x07j\x02\x02\u0143l\x03\x02\x02\x02\u0144" +
		"\u0145\x07y\x02\x02\u0145\u0146\x07j\x02\x02\u0146\u0147\x07k\x02\x02" +
		"\u0147\u0148\x07n\x02\x02\u0148\u0149\x07g\x02\x02\u0149n\x03\x02\x02" +
		"\x02\u014A\u014B\x07f\x02\x02\u014B\u014C\x07q\x02\x02\u014Cp\x03\x02" +
		"\x02\x02\u014D\u014E\x07h\x02\x02\u014E\u014F\x07q\x02\x02\u014F\u0150" +
		"\x07t\x02\x02\u0150r\x03\x02\x02\x02\u0151\u0152\x07i\x02\x02\u0152\u0153" +
		"\x07q\x02\x02\u0153\u0154\x07v\x02\x02\u0154\u0155\x07q\x02\x02\u0155" +
		"t\x03\x02\x02\x02\u0156\u0157\x07e\x02\x02\u0157\u0158\x07q\x02\x02\u0158" +
		"\u0159\x07p\x02\x02\u0159\u015A\x07v\x02\x02\u015A\u015B\x07k\x02\x02" +
		"\u015B\u015C\x07p\x02\x02\u015C\u015D\x07w\x02\x02\u015D\u015E\x07g\x02" +
		"\x02\u015Ev\x03\x02\x02\x02\u015F\u0160\x07d\x02\x02\u0160\u0161\x07t" +
		"\x02\x02\u0161\u0162\x07g\x02\x02\u0162\u0163\x07c\x02\x02\u0163\u0164" +
		"\x07m\x02\x02\u0164x\x03\x02\x02\x02\u0165\u0166\x07t\x02\x02\u0166\u0167" +
		"\x07g\x02\x02\u0167\u0168\x07v\x02\x02\u0168\u0169\x07w\x02\x02\u0169" +
		"\u016A\x07t\x02\x02\u016A\u016B\x07p\x02\x02\u016Bz\x03\x02\x02\x02\u016C" +
		"\u016D\x07u\x02\x02\u016D\u016E\x07v\x02\x02\u016E\u016F\x07t\x02\x02" +
		"\u016F\u0170\x07w\x02\x02\u0170\u0171\x07e\x02\x02\u0171\u0172\x07v\x02" +
		"\x02\u0172|\x03\x02\x02\x02\u0173\u0174\x07w\x02\x02\u0174\u0175\x07p" +
		"\x02\x02\u0175\u0176\x07k\x02\x02\u0176\u0177\x07q\x02\x02\u0177\u0178" +
		"\x07p\x02\x02\u0178~\x03\x02\x02\x02\u0179\u017A\x07x\x02\x02\u017A\u017B" +
		"\x07q\x02\x02\u017B\u017C\x07k\x02\x02\u017C\u017D\x07f\x02\x02\u017D" +
		"\x80\x03\x02\x02\x02\u017E\u017F\x07e\x02\x02\u017F\u0180\x07j\x02\x02" +
		"\u0180\u0181\x07c\x02\x02\u0181\u0182\x07t\x02\x02\u0182\x82\x03\x02\x02" +
		"\x02\u0183\u0184\x07u\x02\x02\u0184\u0185\x07j\x02\x02\u0185\u0186\x07" +
		"q\x02\x02\u0186\u0187\x07t\x02\x02\u0187\u0188\x07v\x02\x02\u0188\x84" +
		"\x03\x02\x02\x02\u0189\u018A\x07k\x02\x02\u018A\u018B\x07p\x02\x02\u018B" +
		"\u018C\x07v\x02\x02\u018C\x86\x03\x02\x02\x02\u018D\u018E\x07n\x02\x02" +
		"\u018E\u018F\x07q\x02\x02\u018F\u0190\x07p\x02\x02\u0190\u0191\x07i\x02" +
		"\x02\u0191\x88\x03\x02\x02\x02\u0192\u0193\x07h\x02\x02\u0193\u0194\x07" +
		"n\x02\x02\u0194\u0195\x07q\x02\x02\u0195\u0196\x07c\x02\x02\u0196\u0197" +
		"\x07v\x02\x02\u0197\x8A\x03\x02\x02\x02\u0198\u0199\x07f\x02\x02\u0199" +
		"\u019A\x07q\x02\x02\u019A\u019B\x07w\x02\x02\u019B\u019C\x07d\x02\x02" +
		"\u019C\u019D\x07n\x02\x02\u019D\u019E\x07g\x02\x02\u019E\x8C\x03\x02\x02" +
		"\x02\u019F\u01A0\x07u\x02\x02\u01A0\u01A1\x07k\x02\x02\u01A1\u01A2\x07" +
		"i\x02\x02\u01A2\u01A3\x07p\x02\x02\u01A3\u01A4\x07g\x02\x02\u01A4\u01A5" +
		"\x07f\x02\x02\u01A5\x8E\x03\x02\x02\x02\u01A6\u01A7\x07w\x02\x02\u01A7" +
		"\u01A8\x07p\x02\x02\u01A8\u01A9\x07u\x02\x02\u01A9\u01AA\x07k\x02\x02" +
		"\u01AA\u01AB\x07i\x02\x02\u01AB\u01AC\x07p\x02\x02\u01AC\u01AD\x07g\x02" +
		"\x02\u01AD\u01AE\x07f\x02\x02\u01AE\x90\x03\x02\x02\x02\u01AF\u01B0\x07" +
		"e\x02\x02\u01B0\u01B1\x07q\x02\x02\u01B1\u01B2\x07p\x02\x02\u01B2\u01B3" +
		"\x07u\x02\x02\u01B3\u01B4\x07v\x02\x02\u01B4\x92\x03\x02\x02\x02\u01B5" +
		"\u01B6\x07x\x02\x02\u01B6\u01B7\x07q\x02\x02\u01B7\u01B8\x07n\x02\x02" +
		"\u01B8\u01B9\x07c\x02\x02\u01B9\u01BA\x07v\x02\x02\u01BA\u01BB\x07k\x02" +
		"\x02\u01BB\u01BC\x07n\x02\x02\u01BC\u01BD\x07g\x02\x02\u01BD\x94\x03\x02" +
		"\x02\x02\u01BE\u01BF\t\x03\x02\x02\u01BF\x96\x03\x02\x02\x02\u01C0\u01C1" +
		"\t\x04\x02\x02\u01C1\x98\x03\x02\x02\x02\u01C2\u01C3\t\x05\x02\x02\u01C3" +
		"\x9A\x03\x02\x02\x02\u01C4\u01C5\t\x06\x02\x02\u01C5\x9C\x03\x02\x02\x02" +
		"\u01C6\u01CA\x05\x95K\x02\u01C7\u01C9\x05\x97L\x02\u01C8\u01C7\x03\x02" +
		"\x02\x02\u01C9\u01CC\x03\x02\x02\x02\u01CA\u01C8\x03\x02\x02\x02\u01CA" +
		"\u01CB\x03\x02\x02\x02\u01CB\x9E\x03\x02\x02\x02\u01CC\u01CA\x03\x02\x02" +
		"\x02\u01CD\u01D1\x05\x95K\x02\u01CE\u01D0\x05\x97L\x02\u01CF\u01CE\x03" +
		"\x02\x02\x02\u01D0\u01D3\x03\x02\x02\x02\u01D1\u01CF\x03\x02\x02\x02\u01D1" +
		"\u01D2\x03\x02\x02\x02\u01D2\u01D4\x03\x02\x02\x02\u01D3\u01D1\x03\x02" +
		"\x02\x02\u01D4\u01D5\x05!\x11\x02\u01D5\u01D9\x05\x95K\x02\u01D6\u01D8" +
		"\x05\x97L\x02\u01D7\u01D6\x03\x02\x02\x02\u01D8\u01DB\x03\x02\x02\x02" +
		"\u01D9\u01D7\x03\x02\x02\x02\u01D9\u01DA\x03\x02\x02\x02\u01DA\xA0\x03" +
		"\x02\x02\x02\u01DB\u01D9\x03\x02\x02\x02\u01DC\u01DD\x07)\x02\x02\u01DD" +
		"\u01DE\x05\x99M\x02\u01DE\u01DF\x07)\x02\x02\u01DF\xA2\x03\x02\x02\x02" +
		"\u01E0\u01E5\x05\x9BN\x02\u01E1\u01E4\x05\x9BN\x02\u01E2\u01E4\x05\x97" +
		"L\x02\u01E3\u01E1\x03\x02\x02\x02\u01E3\u01E2\x03\x02\x02\x02\u01E4\u01E7" +
		"\x03\x02\x02\x02\u01E5\u01E3\x03\x02\x02\x02\u01E5\u01E6\x03\x02\x02\x02" +
		"\u01E6\xA4\x03\x02\x02\x02\u01E7\u01E5\x03\x02\x02\x02\t\x02\u011D\u01CA" +
		"\u01D1\u01D9\u01E3\u01E5\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CalcLexer.__ATN) {
			CalcLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CalcLexer._serializedATN));
		}

		return CalcLexer.__ATN;
	}

}

