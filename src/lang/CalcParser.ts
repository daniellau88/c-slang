// Generated from ./src/lang/Calc.g4 by ANTLR 4.9.0-SNAPSHOT

import { ATN } from 'antlr4ts/atn/ATN'
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer'
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator'
import { NotNull } from 'antlr4ts/Decorators'
import { Override } from 'antlr4ts/Decorators'
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException'
import * as Utils from 'antlr4ts/misc/Utils'
import { NoViableAltException } from 'antlr4ts/NoViableAltException'
import { Parser } from 'antlr4ts/Parser'
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext'
import { RecognitionException } from 'antlr4ts/RecognitionException'
import { RuleContext } from 'antlr4ts/RuleContext'
import { Token } from 'antlr4ts/Token'
import { TokenStream } from 'antlr4ts/TokenStream'
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener'
import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor'
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'
import { Vocabulary } from 'antlr4ts/Vocabulary'
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl'

import { CalcListener } from './CalcListener'
import { CalcVisitor } from './CalcVisitor'

export class CalcParser extends Parser {
  public static readonly CARET = 1
  public static readonly ASTERICK = 2
  public static readonly BACKSLASH = 3
  public static readonly PLUS = 4
  public static readonly MINUS = 5
  public static readonly PERCENT = 6
  public static readonly AMPERSAND = 7
  public static readonly TILDA = 8
  public static readonly EXCLAMATION_MARK = 9
  public static readonly VERTICAL_BAR = 10
  public static readonly QUESTION_MARK = 11
  public static readonly COLON = 12
  public static readonly SEMICOLON = 13
  public static readonly COMMA = 14
  public static readonly FULLSTOP = 15
  public static readonly RIGHT_ARROW = 16
  public static readonly OPEN_PARENTHESES = 17
  public static readonly CLOSE_PARENTHESES = 18
  public static readonly OPEN_SQUARE_BRACKET = 19
  public static readonly CLOSE_SQUARE_BRACKET = 20
  public static readonly OPEN_CURLY_BRACKET = 21
  public static readonly CLOSE_CURLY_BRACKET = 22
  public static readonly INCREMENT = 23
  public static readonly DECREMENT = 24
  public static readonly EQUAL = 25
  public static readonly TIMES_EQUAL = 26
  public static readonly DIVIDE_EQUAL = 27
  public static readonly MODULO_EQUAL = 28
  public static readonly PLUS_EQUAL = 29
  public static readonly MINUS_EQUAL = 30
  public static readonly SHIFT_LEFT_EQUAL = 31
  public static readonly SHIFT_RIGHT_EQUAL = 32
  public static readonly BITWISE_AND_EQUAL = 33
  public static readonly BITWISE_XOR_EQUAL = 34
  public static readonly BITWISE_OR_EQUAL = 35
  public static readonly BOOLEAN_AND = 36
  public static readonly BOOLEAN_OR = 37
  public static readonly EQUALITY_EQUAL = 38
  public static readonly EQUALITY_NOT_EQUAL = 39
  public static readonly RELATIONAL_GREATER_THAN = 40
  public static readonly RELATIONAL_LESS_THAN = 41
  public static readonly RELATIONAL_LESS_THAN_OR_EQUAL = 42
  public static readonly RELATIONAL_GREATER_THAN_OR_EQUAL = 43
  public static readonly SHIFT_LEFT = 44
  public static readonly SHIFT_RIGHT = 45
  public static readonly WHITESPACE = 46
  public static readonly VAR_ARG = 47
  public static readonly SIZE_OF = 48
  public static readonly CASE = 49
  public static readonly DEFAULT = 50
  public static readonly IF = 51
  public static readonly ELSE = 52
  public static readonly SWITCH = 53
  public static readonly WHILE = 54
  public static readonly DO = 55
  public static readonly FOR = 56
  public static readonly GOTO = 57
  public static readonly CONTINUE = 58
  public static readonly BREAK = 59
  public static readonly RETURN = 60
  public static readonly STRUCT = 61
  public static readonly UNION = 62
  public static readonly COMMENT = 63
  public static readonly LINE_COMMENT = 64
  public static readonly VOID_TYPE_SPECIFIER = 65
  public static readonly CHAR_TYPE_SPECIFIER = 66
  public static readonly SHORT_TYPE_SPECIFIER = 67
  public static readonly INT_TYPE_SPECIFIER = 68
  public static readonly LONG_TYPE_SPECIFIER = 69
  public static readonly FLOAT_TYPE_SPECIFIER = 70
  public static readonly DOUBLE_TYPE_SPECIFIER = 71
  public static readonly SIGNED_TYPE_SPECIFIER = 72
  public static readonly UNSIGNED_TYPE_SPECIFIER = 73
  public static readonly CONST_TYPE_QUALIFIER = 74
  public static readonly VOLATILE_TYPE_QUALIFIER = 75
  public static readonly INTEGER = 76
  public static readonly FLOAT = 77
  public static readonly CHAR = 78
  public static readonly STRING = 79
  public static readonly IDENTIFIER = 80
  public static readonly RULE_unary_operator = 0
  public static readonly RULE_assignment_operator = 1
  public static readonly RULE_end_statement_delimiter = 2
  public static readonly RULE_pointer = 3
  public static readonly RULE_type_sign_specifier = 4
  public static readonly RULE_type_specifier = 5
  public static readonly RULE_type_qualifier = 6
  public static readonly RULE_identifier = 7
  public static readonly RULE_start = 8
  public static readonly RULE_program = 9
  public static readonly RULE_function_definition = 10
  public static readonly RULE_parameter_type_list = 11
  public static readonly RULE_parameter_list = 12
  public static readonly RULE_parameter_declaration = 13
  public static readonly RULE_struct_specifier = 14
  public static readonly RULE_union_specifier = 15
  public static readonly RULE_struct_or_union_declaration = 16
  public static readonly RULE_specifier_qualifier = 17
  public static readonly RULE_struct_or_union_declarator_list = 18
  public static readonly RULE_struct_or_union_declarator = 19
  public static readonly RULE_statement = 20
  public static readonly RULE_labeled_statement = 21
  public static readonly RULE_declaration_statement = 22
  public static readonly RULE_declaration_specifiers = 23
  public static readonly RULE_init_declarator_list = 24
  public static readonly RULE_init_declarator = 25
  public static readonly RULE_declarator = 26
  public static readonly RULE_direct_declarator = 27
  public static readonly RULE_initializer = 28
  public static readonly RULE_initializer_list = 29
  public static readonly RULE_expression_statement = 30
  public static readonly RULE_expression = 31
  public static readonly RULE_assignment_expression = 32
  public static readonly RULE_constant_expression = 33
  public static readonly RULE_conditional_expression = 34
  public static readonly RULE_logical_or_expression = 35
  public static readonly RULE_logical_and_expression = 36
  public static readonly RULE_inclusive_or_expression = 37
  public static readonly RULE_exclusive_or_expression = 38
  public static readonly RULE_and_expression = 39
  public static readonly RULE_equality_expression = 40
  public static readonly RULE_relational_expression = 41
  public static readonly RULE_shift_expression = 42
  public static readonly RULE_additive_expression = 43
  public static readonly RULE_multiplicative_expression = 44
  public static readonly RULE_cast_expression = 45
  public static readonly RULE_type_name = 46
  public static readonly RULE_abstract_declarator = 47
  public static readonly RULE_direct_abstract_declarator = 48
  public static readonly RULE_unary_expression = 49
  public static readonly RULE_postfix_expression = 50
  public static readonly RULE_primary_expression = 51
  public static readonly RULE_string = 52
  public static readonly RULE_constant = 53
  public static readonly RULE_integer_constant = 54
  public static readonly RULE_float_constant = 55
  public static readonly RULE_character_constant = 56
  public static readonly RULE_compound_statement = 57
  public static readonly RULE_if_statement = 58
  public static readonly RULE_switch_statement = 59
  public static readonly RULE_switch_body = 60
  public static readonly RULE_switch_case_body = 61
  public static readonly RULE_switch_default_body = 62
  public static readonly RULE_while_statement = 63
  public static readonly RULE_do_statement = 64
  public static readonly RULE_for_statement = 65
  public static readonly RULE_for_init_declaration = 66
  public static readonly RULE_goto_statement = 67
  public static readonly RULE_continue_statement = 68
  public static readonly RULE_break_statement = 69
  public static readonly RULE_return_statement = 70
  // tslint:disable:no-trailing-whitespace
  public static readonly ruleNames: string[] = [
    'unary_operator',
    'assignment_operator',
    'end_statement_delimiter',
    'pointer',
    'type_sign_specifier',
    'type_specifier',
    'type_qualifier',
    'identifier',
    'start',
    'program',
    'function_definition',
    'parameter_type_list',
    'parameter_list',
    'parameter_declaration',
    'struct_specifier',
    'union_specifier',
    'struct_or_union_declaration',
    'specifier_qualifier',
    'struct_or_union_declarator_list',
    'struct_or_union_declarator',
    'statement',
    'labeled_statement',
    'declaration_statement',
    'declaration_specifiers',
    'init_declarator_list',
    'init_declarator',
    'declarator',
    'direct_declarator',
    'initializer',
    'initializer_list',
    'expression_statement',
    'expression',
    'assignment_expression',
    'constant_expression',
    'conditional_expression',
    'logical_or_expression',
    'logical_and_expression',
    'inclusive_or_expression',
    'exclusive_or_expression',
    'and_expression',
    'equality_expression',
    'relational_expression',
    'shift_expression',
    'additive_expression',
    'multiplicative_expression',
    'cast_expression',
    'type_name',
    'abstract_declarator',
    'direct_abstract_declarator',
    'unary_expression',
    'postfix_expression',
    'primary_expression',
    'string',
    'constant',
    'integer_constant',
    'float_constant',
    'character_constant',
    'compound_statement',
    'if_statement',
    'switch_statement',
    'switch_body',
    'switch_case_body',
    'switch_default_body',
    'while_statement',
    'do_statement',
    'for_statement',
    'for_init_declaration',
    'goto_statement',
    'continue_statement',
    'break_statement',
    'return_statement',
  ]

  private static readonly _LITERAL_NAMES: Array<string | undefined> = [
    undefined,
    "'^'",
    "'*'",
    "'/'",
    "'+'",
    "'-'",
    "'%'",
    "'&'",
    "'~'",
    "'!'",
    "'|'",
    "'?'",
    "':'",
    "';'",
    "','",
    "'.'",
    "'->'",
    "'('",
    "')'",
    "'['",
    "']'",
    "'{'",
    "'}'",
    "'++'",
    "'--'",
    "'='",
    "'*='",
    "'/='",
    "'%='",
    "'+='",
    "'-='",
    "'<<='",
    "'>>='",
    "'&='",
    "'^='",
    "'|='",
    "'&&'",
    "'||'",
    "'=='",
    "'!='",
    "'>'",
    "'<'",
    "'<='",
    "'>='",
    "'<<'",
    "'>>'",
    undefined,
    "'...'",
    "'sizeof'",
    "'case'",
    "'default'",
    "'if'",
    "'else'",
    "'switch'",
    "'while'",
    "'do'",
    "'for'",
    "'goto'",
    "'continue'",
    "'break'",
    "'return'",
    "'struct'",
    "'union'",
    undefined,
    undefined,
    "'void'",
    "'char'",
    "'short'",
    "'int'",
    "'long'",
    "'float'",
    "'double'",
    "'signed'",
    "'unsigned'",
    "'const'",
    "'volatile'",
  ]
  private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
    undefined,
    'CARET',
    'ASTERICK',
    'BACKSLASH',
    'PLUS',
    'MINUS',
    'PERCENT',
    'AMPERSAND',
    'TILDA',
    'EXCLAMATION_MARK',
    'VERTICAL_BAR',
    'QUESTION_MARK',
    'COLON',
    'SEMICOLON',
    'COMMA',
    'FULLSTOP',
    'RIGHT_ARROW',
    'OPEN_PARENTHESES',
    'CLOSE_PARENTHESES',
    'OPEN_SQUARE_BRACKET',
    'CLOSE_SQUARE_BRACKET',
    'OPEN_CURLY_BRACKET',
    'CLOSE_CURLY_BRACKET',
    'INCREMENT',
    'DECREMENT',
    'EQUAL',
    'TIMES_EQUAL',
    'DIVIDE_EQUAL',
    'MODULO_EQUAL',
    'PLUS_EQUAL',
    'MINUS_EQUAL',
    'SHIFT_LEFT_EQUAL',
    'SHIFT_RIGHT_EQUAL',
    'BITWISE_AND_EQUAL',
    'BITWISE_XOR_EQUAL',
    'BITWISE_OR_EQUAL',
    'BOOLEAN_AND',
    'BOOLEAN_OR',
    'EQUALITY_EQUAL',
    'EQUALITY_NOT_EQUAL',
    'RELATIONAL_GREATER_THAN',
    'RELATIONAL_LESS_THAN',
    'RELATIONAL_LESS_THAN_OR_EQUAL',
    'RELATIONAL_GREATER_THAN_OR_EQUAL',
    'SHIFT_LEFT',
    'SHIFT_RIGHT',
    'WHITESPACE',
    'VAR_ARG',
    'SIZE_OF',
    'CASE',
    'DEFAULT',
    'IF',
    'ELSE',
    'SWITCH',
    'WHILE',
    'DO',
    'FOR',
    'GOTO',
    'CONTINUE',
    'BREAK',
    'RETURN',
    'STRUCT',
    'UNION',
    'COMMENT',
    'LINE_COMMENT',
    'VOID_TYPE_SPECIFIER',
    'CHAR_TYPE_SPECIFIER',
    'SHORT_TYPE_SPECIFIER',
    'INT_TYPE_SPECIFIER',
    'LONG_TYPE_SPECIFIER',
    'FLOAT_TYPE_SPECIFIER',
    'DOUBLE_TYPE_SPECIFIER',
    'SIGNED_TYPE_SPECIFIER',
    'UNSIGNED_TYPE_SPECIFIER',
    'CONST_TYPE_QUALIFIER',
    'VOLATILE_TYPE_QUALIFIER',
    'INTEGER',
    'FLOAT',
    'CHAR',
    'STRING',
    'IDENTIFIER',
  ]
  public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(
    CalcParser._LITERAL_NAMES,
    CalcParser._SYMBOLIC_NAMES,
    [],
  )

  // @Override
  // @NotNull
  public get vocabulary(): Vocabulary {
    return CalcParser.VOCABULARY
  }
  // tslint:enable:no-trailing-whitespace

  // @Override
  public get grammarFileName(): string {
    return 'Calc.g4'
  }

  // @Override
  public get ruleNames(): string[] {
    return CalcParser.ruleNames
  }

  // @Override
  public get serializedATN(): string {
    return CalcParser._serializedATN
  }

  protected createFailedPredicateException(
    predicate?: string,
    message?: string,
  ): FailedPredicateException {
    return new FailedPredicateException(this, predicate, message)
  }

  constructor(input: TokenStream) {
    super(input)
    this._interp = new ParserATNSimulator(CalcParser._ATN, this)
  }
  // @RuleVersion(0)
  public unary_operator(): Unary_operatorContext {
    const _localctx: Unary_operatorContext = new Unary_operatorContext(this._ctx, this.state)
    this.enterRule(_localctx, 0, CalcParser.RULE_unary_operator)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 142
        _la = this._input.LA(1)
        if (
          !(
            (_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << CalcParser.ASTERICK) |
                (1 << CalcParser.PLUS) |
                (1 << CalcParser.MINUS) |
                (1 << CalcParser.AMPERSAND) |
                (1 << CalcParser.TILDA) |
                (1 << CalcParser.EXCLAMATION_MARK))) !==
              0
          )
        ) {
          this._errHandler.recoverInline(this)
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true
          }

          this._errHandler.reportMatch(this)
          this.consume()
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public assignment_operator(): Assignment_operatorContext {
    const _localctx: Assignment_operatorContext = new Assignment_operatorContext(
      this._ctx,
      this.state,
    )
    this.enterRule(_localctx, 2, CalcParser.RULE_assignment_operator)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 144
        _la = this._input.LA(1)
        if (
          !(
            ((_la - 25) & ~0x1f) === 0 &&
            ((1 << (_la - 25)) &
              ((1 << (CalcParser.EQUAL - 25)) |
                (1 << (CalcParser.TIMES_EQUAL - 25)) |
                (1 << (CalcParser.DIVIDE_EQUAL - 25)) |
                (1 << (CalcParser.MODULO_EQUAL - 25)) |
                (1 << (CalcParser.PLUS_EQUAL - 25)) |
                (1 << (CalcParser.MINUS_EQUAL - 25)) |
                (1 << (CalcParser.SHIFT_LEFT_EQUAL - 25)) |
                (1 << (CalcParser.SHIFT_RIGHT_EQUAL - 25)) |
                (1 << (CalcParser.BITWISE_AND_EQUAL - 25)) |
                (1 << (CalcParser.BITWISE_XOR_EQUAL - 25)) |
                (1 << (CalcParser.BITWISE_OR_EQUAL - 25)))) !==
              0
          )
        ) {
          this._errHandler.recoverInline(this)
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true
          }

          this._errHandler.reportMatch(this)
          this.consume()
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public end_statement_delimiter(): End_statement_delimiterContext {
    const _localctx: End_statement_delimiterContext = new End_statement_delimiterContext(
      this._ctx,
      this.state,
    )
    this.enterRule(_localctx, 4, CalcParser.RULE_end_statement_delimiter)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 146
        this.match(CalcParser.SEMICOLON)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public pointer(): PointerContext {
    const _localctx: PointerContext = new PointerContext(this._ctx, this.state)
    this.enterRule(_localctx, 6, CalcParser.RULE_pointer)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 149
        this._errHandler.sync(this)
        _alt = 1
        do {
          switch (_alt) {
            case 1:
              {
                {
                  this.state = 148
                  this.match(CalcParser.ASTERICK)
                }
              }
              break
            default:
              throw new NoViableAltException(this)
          }
          this.state = 151
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx)
        } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public type_sign_specifier(): Type_sign_specifierContext {
    const _localctx: Type_sign_specifierContext = new Type_sign_specifierContext(
      this._ctx,
      this.state,
    )
    this.enterRule(_localctx, 8, CalcParser.RULE_type_sign_specifier)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 153
        _la = this._input.LA(1)
        if (
          !(_la === CalcParser.SIGNED_TYPE_SPECIFIER || _la === CalcParser.UNSIGNED_TYPE_SPECIFIER)
        ) {
          this._errHandler.recoverInline(this)
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true
          }

          this._errHandler.reportMatch(this)
          this.consume()
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public type_specifier(): Type_specifierContext {
    const _localctx: Type_specifierContext = new Type_specifierContext(this._ctx, this.state)
    this.enterRule(_localctx, 10, CalcParser.RULE_type_specifier)
    let _la: number
    try {
      this.state = 176
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 5, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 155
            this.match(CalcParser.VOID_TYPE_SPECIFIER)
          }
          break

        case 2:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 157
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            if (
              _la === CalcParser.SIGNED_TYPE_SPECIFIER ||
              _la === CalcParser.UNSIGNED_TYPE_SPECIFIER
            ) {
              {
                this.state = 156
                this.type_sign_specifier()
              }
            }

            this.state = 159
            this.match(CalcParser.CHAR_TYPE_SPECIFIER)
          }
          break

        case 3:
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 161
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            if (
              _la === CalcParser.SIGNED_TYPE_SPECIFIER ||
              _la === CalcParser.UNSIGNED_TYPE_SPECIFIER
            ) {
              {
                this.state = 160
                this.type_sign_specifier()
              }
            }

            this.state = 163
            this.match(CalcParser.SHORT_TYPE_SPECIFIER)
          }
          break

        case 4:
          this.enterOuterAlt(_localctx, 4)
          {
            this.state = 165
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            if (
              _la === CalcParser.SIGNED_TYPE_SPECIFIER ||
              _la === CalcParser.UNSIGNED_TYPE_SPECIFIER
            ) {
              {
                this.state = 164
                this.type_sign_specifier()
              }
            }

            this.state = 167
            this.match(CalcParser.INT_TYPE_SPECIFIER)
          }
          break

        case 5:
          this.enterOuterAlt(_localctx, 5)
          {
            this.state = 169
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            if (
              _la === CalcParser.SIGNED_TYPE_SPECIFIER ||
              _la === CalcParser.UNSIGNED_TYPE_SPECIFIER
            ) {
              {
                this.state = 168
                this.type_sign_specifier()
              }
            }

            this.state = 171
            this.match(CalcParser.LONG_TYPE_SPECIFIER)
          }
          break

        case 6:
          this.enterOuterAlt(_localctx, 6)
          {
            this.state = 172
            this.match(CalcParser.FLOAT_TYPE_SPECIFIER)
          }
          break

        case 7:
          this.enterOuterAlt(_localctx, 7)
          {
            this.state = 173
            this.match(CalcParser.DOUBLE_TYPE_SPECIFIER)
          }
          break

        case 8:
          this.enterOuterAlt(_localctx, 8)
          {
            this.state = 174
            this.struct_specifier()
          }
          break

        case 9:
          this.enterOuterAlt(_localctx, 9)
          {
            this.state = 175
            this.union_specifier()
          }
          break
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public type_qualifier(): Type_qualifierContext {
    const _localctx: Type_qualifierContext = new Type_qualifierContext(this._ctx, this.state)
    this.enterRule(_localctx, 12, CalcParser.RULE_type_qualifier)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 178
        _la = this._input.LA(1)
        if (
          !(_la === CalcParser.CONST_TYPE_QUALIFIER || _la === CalcParser.VOLATILE_TYPE_QUALIFIER)
        ) {
          this._errHandler.recoverInline(this)
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true
          }

          this._errHandler.reportMatch(this)
          this.consume()
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public identifier(): IdentifierContext {
    const _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state)
    this.enterRule(_localctx, 14, CalcParser.RULE_identifier)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 180
        _la = this._input.LA(1)
        if (!(_la === CalcParser.SIZE_OF || _la === CalcParser.IDENTIFIER)) {
          this._errHandler.recoverInline(this)
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true
          }

          this._errHandler.reportMatch(this)
          this.consume()
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public start(): StartContext {
    const _localctx: StartContext = new StartContext(this._ctx, this.state)
    this.enterRule(_localctx, 16, CalcParser.RULE_start)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 182
        this.program()
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public program(): ProgramContext {
    const _localctx: ProgramContext = new ProgramContext(this._ctx, this.state)
    this.enterRule(_localctx, 18, CalcParser.RULE_program)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 194
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (
          _la === CalcParser.ASTERICK ||
          _la === CalcParser.OPEN_PARENTHESES ||
          (((_la - 48) & ~0x1f) === 0 &&
            ((1 << (_la - 48)) &
              ((1 << (CalcParser.SIZE_OF - 48)) |
                (1 << (CalcParser.STRUCT - 48)) |
                (1 << (CalcParser.UNION - 48)) |
                (1 << (CalcParser.VOID_TYPE_SPECIFIER - 48)) |
                (1 << (CalcParser.CHAR_TYPE_SPECIFIER - 48)) |
                (1 << (CalcParser.SHORT_TYPE_SPECIFIER - 48)) |
                (1 << (CalcParser.INT_TYPE_SPECIFIER - 48)) |
                (1 << (CalcParser.LONG_TYPE_SPECIFIER - 48)) |
                (1 << (CalcParser.FLOAT_TYPE_SPECIFIER - 48)) |
                (1 << (CalcParser.DOUBLE_TYPE_SPECIFIER - 48)) |
                (1 << (CalcParser.SIGNED_TYPE_SPECIFIER - 48)) |
                (1 << (CalcParser.UNSIGNED_TYPE_SPECIFIER - 48)))) !==
              0) ||
          _la === CalcParser.IDENTIFIER
        ) {
          {
            this.state = 192
            this._errHandler.sync(this)
            switch (this.interpreter.adaptivePredict(this._input, 6, this._ctx)) {
              case 1:
                {
                  this.state = 184
                  this.function_definition()
                }
                break

              case 2:
                {
                  {
                    this.state = 185
                    this.struct_specifier()
                    this.state = 186
                    this.end_statement_delimiter()
                  }
                }
                break

              case 3:
                {
                  {
                    this.state = 188
                    this.union_specifier()
                    this.state = 189
                    this.end_statement_delimiter()
                  }
                }
                break

              case 4:
                {
                  this.state = 191
                  this.declaration_statement()
                }
                break
            }
          }
          this.state = 196
          this._errHandler.sync(this)
          _la = this._input.LA(1)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public function_definition(): Function_definitionContext {
    const _localctx: Function_definitionContext = new Function_definitionContext(
      this._ctx,
      this.state,
    )
    this.enterRule(_localctx, 20, CalcParser.RULE_function_definition)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 198
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        if (
          ((_la - 61) & ~0x1f) === 0 &&
          ((1 << (_la - 61)) &
            ((1 << (CalcParser.STRUCT - 61)) |
              (1 << (CalcParser.UNION - 61)) |
              (1 << (CalcParser.VOID_TYPE_SPECIFIER - 61)) |
              (1 << (CalcParser.CHAR_TYPE_SPECIFIER - 61)) |
              (1 << (CalcParser.SHORT_TYPE_SPECIFIER - 61)) |
              (1 << (CalcParser.INT_TYPE_SPECIFIER - 61)) |
              (1 << (CalcParser.LONG_TYPE_SPECIFIER - 61)) |
              (1 << (CalcParser.FLOAT_TYPE_SPECIFIER - 61)) |
              (1 << (CalcParser.DOUBLE_TYPE_SPECIFIER - 61)) |
              (1 << (CalcParser.SIGNED_TYPE_SPECIFIER - 61)) |
              (1 << (CalcParser.UNSIGNED_TYPE_SPECIFIER - 61)))) !==
            0
        ) {
          {
            this.state = 197
            this.declaration_specifiers()
          }
        }

        this.state = 200
        this.declarator()
        this.state = 204
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (
          ((_la - 61) & ~0x1f) === 0 &&
          ((1 << (_la - 61)) &
            ((1 << (CalcParser.STRUCT - 61)) |
              (1 << (CalcParser.UNION - 61)) |
              (1 << (CalcParser.VOID_TYPE_SPECIFIER - 61)) |
              (1 << (CalcParser.CHAR_TYPE_SPECIFIER - 61)) |
              (1 << (CalcParser.SHORT_TYPE_SPECIFIER - 61)) |
              (1 << (CalcParser.INT_TYPE_SPECIFIER - 61)) |
              (1 << (CalcParser.LONG_TYPE_SPECIFIER - 61)) |
              (1 << (CalcParser.FLOAT_TYPE_SPECIFIER - 61)) |
              (1 << (CalcParser.DOUBLE_TYPE_SPECIFIER - 61)) |
              (1 << (CalcParser.SIGNED_TYPE_SPECIFIER - 61)) |
              (1 << (CalcParser.UNSIGNED_TYPE_SPECIFIER - 61)))) !==
            0
        ) {
          {
            {
              this.state = 201
              this.declaration_statement()
            }
          }
          this.state = 206
          this._errHandler.sync(this)
          _la = this._input.LA(1)
        }
        this.state = 207
        this.compound_statement()
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public parameter_type_list(): Parameter_type_listContext {
    const _localctx: Parameter_type_listContext = new Parameter_type_listContext(
      this._ctx,
      this.state,
    )
    this.enterRule(_localctx, 22, CalcParser.RULE_parameter_type_list)
    try {
      this.state = 214
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 10, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 209
            this.parameter_list(0)
          }
          break

        case 2:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 210
            this.parameter_list(0)
            this.state = 211
            this.match(CalcParser.COMMA)
            this.state = 212
            this.match(CalcParser.VAR_ARG)
          }
          break
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }

  public parameter_list(): Parameter_listContext
  public parameter_list(_p: number): Parameter_listContext
  // @RuleVersion(0)
  public parameter_list(_p?: number): Parameter_listContext {
    if (_p === undefined) {
      _p = 0
    }

    const _parentctx: ParserRuleContext = this._ctx
    const _parentState: number = this.state
    let _localctx: Parameter_listContext = new Parameter_listContext(this._ctx, _parentState)
    let _prevctx: Parameter_listContext = _localctx
    const _startState: number = 24
    this.enterRecursionRule(_localctx, 24, CalcParser.RULE_parameter_list, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        {
          this.state = 217
          this.parameter_declaration()
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 224
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              {
                _localctx = new Parameter_listContext(_parentctx, _parentState)
                this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_parameter_list)
                this.state = 219
                if (!this.precpred(this._ctx, 1)) {
                  throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                }
                this.state = 220
                this.match(CalcParser.COMMA)
                this.state = 221
                this.parameter_declaration()
              }
            }
          }
          this.state = 226
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.unrollRecursionContexts(_parentctx)
    }
    return _localctx
  }
  // @RuleVersion(0)
  public parameter_declaration(): Parameter_declarationContext {
    let _localctx: Parameter_declarationContext = new Parameter_declarationContext(
      this._ctx,
      this.state,
    )
    this.enterRule(_localctx, 26, CalcParser.RULE_parameter_declaration)
    try {
      this.state = 234
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 12, this._ctx)) {
        case 1:
          _localctx = new ParameterDeclarationTypeDeclaratorContext(_localctx)
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 227
            this.declaration_specifiers()
            this.state = 228
            this.declarator()
          }
          break

        case 2:
          _localctx = new ParameterDeclarationTypeAbstractDeclaratorContext(_localctx)
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 230
            this.declaration_specifiers()
            this.state = 231
            this.abstract_declarator()
          }
          break

        case 3:
          _localctx = new ParameterDeclarationTypeNormalContext(_localctx)
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 233
            this.declaration_specifiers()
          }
          break
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public struct_specifier(): Struct_specifierContext {
    const _localctx: Struct_specifierContext = new Struct_specifierContext(this._ctx, this.state)
    this.enterRule(_localctx, 28, CalcParser.RULE_struct_specifier)
    let _la: number
    try {
      this.state = 252
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 15, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 236
            this.match(CalcParser.STRUCT)
            this.state = 238
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            if (_la === CalcParser.SIZE_OF || _la === CalcParser.IDENTIFIER) {
              {
                this.state = 237
                this.identifier()
              }
            }

            this.state = 240
            this.match(CalcParser.OPEN_CURLY_BRACKET)
            this.state = 244
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            do {
              {
                {
                  this.state = 241
                  this.struct_or_union_declaration()
                  this.state = 242
                  this.end_statement_delimiter()
                }
              }
              this.state = 246
              this._errHandler.sync(this)
              _la = this._input.LA(1)
            } while (
              ((_la - 61) & ~0x1f) === 0 &&
              ((1 << (_la - 61)) &
                ((1 << (CalcParser.STRUCT - 61)) |
                  (1 << (CalcParser.UNION - 61)) |
                  (1 << (CalcParser.VOID_TYPE_SPECIFIER - 61)) |
                  (1 << (CalcParser.CHAR_TYPE_SPECIFIER - 61)) |
                  (1 << (CalcParser.SHORT_TYPE_SPECIFIER - 61)) |
                  (1 << (CalcParser.INT_TYPE_SPECIFIER - 61)) |
                  (1 << (CalcParser.LONG_TYPE_SPECIFIER - 61)) |
                  (1 << (CalcParser.FLOAT_TYPE_SPECIFIER - 61)) |
                  (1 << (CalcParser.DOUBLE_TYPE_SPECIFIER - 61)) |
                  (1 << (CalcParser.SIGNED_TYPE_SPECIFIER - 61)) |
                  (1 << (CalcParser.UNSIGNED_TYPE_SPECIFIER - 61)) |
                  (1 << (CalcParser.CONST_TYPE_QUALIFIER - 61)) |
                  (1 << (CalcParser.VOLATILE_TYPE_QUALIFIER - 61)))) !==
                0
            )
            this.state = 248
            this.match(CalcParser.CLOSE_CURLY_BRACKET)
          }
          break

        case 2:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 250
            this.match(CalcParser.STRUCT)
            this.state = 251
            this.identifier()
          }
          break
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public union_specifier(): Union_specifierContext {
    const _localctx: Union_specifierContext = new Union_specifierContext(this._ctx, this.state)
    this.enterRule(_localctx, 30, CalcParser.RULE_union_specifier)
    let _la: number
    try {
      this.state = 268
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 18, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 254
            this.match(CalcParser.UNION)
            this.state = 256
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            if (_la === CalcParser.SIZE_OF || _la === CalcParser.IDENTIFIER) {
              {
                this.state = 255
                this.identifier()
              }
            }

            this.state = 258
            this.match(CalcParser.OPEN_CURLY_BRACKET)
            this.state = 260
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            do {
              {
                {
                  this.state = 259
                  this.struct_or_union_declaration()
                }
              }
              this.state = 262
              this._errHandler.sync(this)
              _la = this._input.LA(1)
            } while (
              ((_la - 61) & ~0x1f) === 0 &&
              ((1 << (_la - 61)) &
                ((1 << (CalcParser.STRUCT - 61)) |
                  (1 << (CalcParser.UNION - 61)) |
                  (1 << (CalcParser.VOID_TYPE_SPECIFIER - 61)) |
                  (1 << (CalcParser.CHAR_TYPE_SPECIFIER - 61)) |
                  (1 << (CalcParser.SHORT_TYPE_SPECIFIER - 61)) |
                  (1 << (CalcParser.INT_TYPE_SPECIFIER - 61)) |
                  (1 << (CalcParser.LONG_TYPE_SPECIFIER - 61)) |
                  (1 << (CalcParser.FLOAT_TYPE_SPECIFIER - 61)) |
                  (1 << (CalcParser.DOUBLE_TYPE_SPECIFIER - 61)) |
                  (1 << (CalcParser.SIGNED_TYPE_SPECIFIER - 61)) |
                  (1 << (CalcParser.UNSIGNED_TYPE_SPECIFIER - 61)) |
                  (1 << (CalcParser.CONST_TYPE_QUALIFIER - 61)) |
                  (1 << (CalcParser.VOLATILE_TYPE_QUALIFIER - 61)))) !==
                0
            )
            this.state = 264
            this.match(CalcParser.CLOSE_CURLY_BRACKET)
          }
          break

        case 2:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 266
            this.match(CalcParser.UNION)
            this.state = 267
            this.identifier()
          }
          break
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public struct_or_union_declaration(): Struct_or_union_declarationContext {
    const _localctx: Struct_or_union_declarationContext = new Struct_or_union_declarationContext(
      this._ctx,
      this.state,
    )
    this.enterRule(_localctx, 32, CalcParser.RULE_struct_or_union_declaration)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 270
        this.specifier_qualifier()
        this.state = 271
        this.struct_or_union_declarator_list(0)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public specifier_qualifier(): Specifier_qualifierContext {
    const _localctx: Specifier_qualifierContext = new Specifier_qualifierContext(
      this._ctx,
      this.state,
    )
    this.enterRule(_localctx, 34, CalcParser.RULE_specifier_qualifier)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 276
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (
          _la === CalcParser.CONST_TYPE_QUALIFIER ||
          _la === CalcParser.VOLATILE_TYPE_QUALIFIER
        ) {
          {
            {
              this.state = 273
              this.type_qualifier()
            }
          }
          this.state = 278
          this._errHandler.sync(this)
          _la = this._input.LA(1)
        }
        this.state = 279
        this.type_specifier()
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }

  public struct_or_union_declarator_list(): Struct_or_union_declarator_listContext
  public struct_or_union_declarator_list(_p: number): Struct_or_union_declarator_listContext
  // @RuleVersion(0)
  public struct_or_union_declarator_list(_p?: number): Struct_or_union_declarator_listContext {
    if (_p === undefined) {
      _p = 0
    }

    const _parentctx: ParserRuleContext = this._ctx
    const _parentState: number = this.state
    let _localctx: Struct_or_union_declarator_listContext =
      new Struct_or_union_declarator_listContext(this._ctx, _parentState)
    let _prevctx: Struct_or_union_declarator_listContext = _localctx
    const _startState: number = 36
    this.enterRecursionRule(_localctx, 36, CalcParser.RULE_struct_or_union_declarator_list, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        {
          this.state = 282
          this.struct_or_union_declarator()
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 289
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              {
                _localctx = new Struct_or_union_declarator_listContext(_parentctx, _parentState)
                this.pushNewRecursionContext(
                  _localctx,
                  _startState,
                  CalcParser.RULE_struct_or_union_declarator_list,
                )
                this.state = 284
                if (!this.precpred(this._ctx, 1)) {
                  throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                }
                this.state = 285
                this.match(CalcParser.COMMA)
                this.state = 286
                this.struct_or_union_declarator()
              }
            }
          }
          this.state = 291
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.unrollRecursionContexts(_parentctx)
    }
    return _localctx
  }
  // @RuleVersion(0)
  public struct_or_union_declarator(): Struct_or_union_declaratorContext {
    const _localctx: Struct_or_union_declaratorContext = new Struct_or_union_declaratorContext(
      this._ctx,
      this.state,
    )
    this.enterRule(_localctx, 38, CalcParser.RULE_struct_or_union_declarator)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 292
        this.declarator()
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public statement(): StatementContext {
    let _localctx: StatementContext = new StatementContext(this._ctx, this.state)
    this.enterRule(_localctx, 40, CalcParser.RULE_statement)
    try {
      this.state = 307
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 21, this._ctx)) {
        case 1:
          _localctx = new StatementTypeLabeledContext(_localctx)
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 294
            this.labeled_statement()
          }
          break

        case 2:
          _localctx = new StatementTypeDeclarationContext(_localctx)
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 295
            this.declaration_statement()
          }
          break

        case 3:
          _localctx = new StatementTypeExpressionContext(_localctx)
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 296
            this.expression_statement()
          }
          break

        case 4:
          _localctx = new StatementTypeCompoundContext(_localctx)
          this.enterOuterAlt(_localctx, 4)
          {
            this.state = 297
            this.compound_statement()
          }
          break

        case 5:
          _localctx = new StatementTypeIfContext(_localctx)
          this.enterOuterAlt(_localctx, 5)
          {
            this.state = 298
            this.if_statement()
          }
          break

        case 6:
          _localctx = new StatementTypeSwitchContext(_localctx)
          this.enterOuterAlt(_localctx, 6)
          {
            this.state = 299
            this.switch_statement()
          }
          break

        case 7:
          _localctx = new StatementTypeWhileContext(_localctx)
          this.enterOuterAlt(_localctx, 7)
          {
            this.state = 300
            this.while_statement()
          }
          break

        case 8:
          _localctx = new StatementTypeDoContext(_localctx)
          this.enterOuterAlt(_localctx, 8)
          {
            this.state = 301
            this.do_statement()
          }
          break

        case 9:
          _localctx = new StatementTypeForContext(_localctx)
          this.enterOuterAlt(_localctx, 9)
          {
            this.state = 302
            this.for_statement()
          }
          break

        case 10:
          _localctx = new StatementTypeGotoContext(_localctx)
          this.enterOuterAlt(_localctx, 10)
          {
            this.state = 303
            this.goto_statement()
          }
          break

        case 11:
          _localctx = new StatementTypeContinueContext(_localctx)
          this.enterOuterAlt(_localctx, 11)
          {
            this.state = 304
            this.continue_statement()
          }
          break

        case 12:
          _localctx = new StatementTypeBreakContext(_localctx)
          this.enterOuterAlt(_localctx, 12)
          {
            this.state = 305
            this.break_statement()
          }
          break

        case 13:
          _localctx = new StatementTypeReturnContext(_localctx)
          this.enterOuterAlt(_localctx, 13)
          {
            this.state = 306
            this.return_statement()
          }
          break
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public labeled_statement(): Labeled_statementContext {
    const _localctx: Labeled_statementContext = new Labeled_statementContext(this._ctx, this.state)
    this.enterRule(_localctx, 42, CalcParser.RULE_labeled_statement)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 309
        this.identifier()
        this.state = 310
        this.match(CalcParser.COLON)
        this.state = 311
        this.statement()
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public declaration_statement(): Declaration_statementContext {
    const _localctx: Declaration_statementContext = new Declaration_statementContext(
      this._ctx,
      this.state,
    )
    this.enterRule(_localctx, 44, CalcParser.RULE_declaration_statement)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 313
        this.declaration_specifiers()
        this.state = 314
        this.init_declarator_list()
        this.state = 315
        this.end_statement_delimiter()
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public declaration_specifiers(): Declaration_specifiersContext {
    const _localctx: Declaration_specifiersContext = new Declaration_specifiersContext(
      this._ctx,
      this.state,
    )
    this.enterRule(_localctx, 46, CalcParser.RULE_declaration_specifiers)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 317
        this.type_specifier()
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public init_declarator_list(): Init_declarator_listContext {
    const _localctx: Init_declarator_listContext = new Init_declarator_listContext(
      this._ctx,
      this.state,
    )
    this.enterRule(_localctx, 48, CalcParser.RULE_init_declarator_list)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 319
        this.init_declarator()
        this.state = 324
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (_la === CalcParser.COMMA) {
          {
            {
              this.state = 320
              this.match(CalcParser.COMMA)
              this.state = 321
              this.init_declarator()
            }
          }
          this.state = 326
          this._errHandler.sync(this)
          _la = this._input.LA(1)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public init_declarator(): Init_declaratorContext {
    const _localctx: Init_declaratorContext = new Init_declaratorContext(this._ctx, this.state)
    this.enterRule(_localctx, 50, CalcParser.RULE_init_declarator)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 327
        this.declarator()
        this.state = 330
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        if (_la === CalcParser.EQUAL) {
          {
            this.state = 328
            this.match(CalcParser.EQUAL)
            this.state = 329
            this.initializer()
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public declarator(): DeclaratorContext {
    const _localctx: DeclaratorContext = new DeclaratorContext(this._ctx, this.state)
    this.enterRule(_localctx, 52, CalcParser.RULE_declarator)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 333
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        if (_la === CalcParser.ASTERICK) {
          {
            this.state = 332
            this.pointer()
          }
        }

        this.state = 335
        this.direct_declarator(0)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }

  public direct_declarator(): Direct_declaratorContext
  public direct_declarator(_p: number): Direct_declaratorContext
  // @RuleVersion(0)
  public direct_declarator(_p?: number): Direct_declaratorContext {
    if (_p === undefined) {
      _p = 0
    }

    const _parentctx: ParserRuleContext = this._ctx
    const _parentState: number = this.state
    let _localctx: Direct_declaratorContext = new Direct_declaratorContext(this._ctx, _parentState)
    let _prevctx: Direct_declaratorContext = _localctx
    const _startState: number = 54
    this.enterRecursionRule(_localctx, 54, CalcParser.RULE_direct_declarator, _p)
    let _la: number
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 343
        this._errHandler.sync(this)
        switch (this._input.LA(1)) {
          case CalcParser.SIZE_OF:
          case CalcParser.IDENTIFIER:
            {
              _localctx = new DirectDeclaratorTypeIdentifierContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx

              this.state = 338
              this.identifier()
            }
            break
          case CalcParser.OPEN_PARENTHESES:
            {
              _localctx = new DirectDeclaratorTypeNestedDeclaratorContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 339
              this.match(CalcParser.OPEN_PARENTHESES)
              this.state = 340
              this.declarator()
              this.state = 341
              this.match(CalcParser.CLOSE_PARENTHESES)
            }
            break
          default:
            throw new NoViableAltException(this)
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 368
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              this.state = 366
              this._errHandler.sync(this)
              switch (this.interpreter.adaptivePredict(this._input, 29, this._ctx)) {
                case 1:
                  {
                    _localctx = new DirectDeclaratorTypeRecursiveArrayContext(
                      new Direct_declaratorContext(_parentctx, _parentState),
                    )
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      CalcParser.RULE_direct_declarator,
                    )
                    this.state = 345
                    if (!this.precpred(this._ctx, 3)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 3)')
                    }
                    this.state = 346
                    this.match(CalcParser.OPEN_SQUARE_BRACKET)
                    this.state = 348
                    this._errHandler.sync(this)
                    _la = this._input.LA(1)
                    if (
                      ((_la & ~0x1f) === 0 &&
                        ((1 << _la) &
                          ((1 << CalcParser.ASTERICK) |
                            (1 << CalcParser.PLUS) |
                            (1 << CalcParser.MINUS) |
                            (1 << CalcParser.AMPERSAND) |
                            (1 << CalcParser.TILDA) |
                            (1 << CalcParser.EXCLAMATION_MARK) |
                            (1 << CalcParser.OPEN_PARENTHESES) |
                            (1 << CalcParser.INCREMENT) |
                            (1 << CalcParser.DECREMENT))) !==
                          0) ||
                      (((_la - 48) & ~0x1f) === 0 &&
                        ((1 << (_la - 48)) &
                          ((1 << (CalcParser.SIZE_OF - 48)) |
                            (1 << (CalcParser.INTEGER - 48)) |
                            (1 << (CalcParser.FLOAT - 48)) |
                            (1 << (CalcParser.CHAR - 48)) |
                            (1 << (CalcParser.STRING - 48)))) !==
                          0) ||
                      _la === CalcParser.IDENTIFIER
                    ) {
                      {
                        this.state = 347
                        this.constant_expression()
                      }
                    }

                    this.state = 350
                    this.match(CalcParser.CLOSE_SQUARE_BRACKET)
                  }
                  break

                case 2:
                  {
                    _localctx = new DirectDeclaratorTypeRecursiveParametersContext(
                      new Direct_declaratorContext(_parentctx, _parentState),
                    )
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      CalcParser.RULE_direct_declarator,
                    )
                    this.state = 351
                    if (!this.precpred(this._ctx, 2)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 2)')
                    }
                    this.state = 352
                    this.match(CalcParser.OPEN_PARENTHESES)
                    this.state = 354
                    this._errHandler.sync(this)
                    _la = this._input.LA(1)
                    if (
                      ((_la - 61) & ~0x1f) === 0 &&
                      ((1 << (_la - 61)) &
                        ((1 << (CalcParser.STRUCT - 61)) |
                          (1 << (CalcParser.UNION - 61)) |
                          (1 << (CalcParser.VOID_TYPE_SPECIFIER - 61)) |
                          (1 << (CalcParser.CHAR_TYPE_SPECIFIER - 61)) |
                          (1 << (CalcParser.SHORT_TYPE_SPECIFIER - 61)) |
                          (1 << (CalcParser.INT_TYPE_SPECIFIER - 61)) |
                          (1 << (CalcParser.LONG_TYPE_SPECIFIER - 61)) |
                          (1 << (CalcParser.FLOAT_TYPE_SPECIFIER - 61)) |
                          (1 << (CalcParser.DOUBLE_TYPE_SPECIFIER - 61)) |
                          (1 << (CalcParser.SIGNED_TYPE_SPECIFIER - 61)) |
                          (1 << (CalcParser.UNSIGNED_TYPE_SPECIFIER - 61)))) !==
                        0
                    ) {
                      {
                        this.state = 353
                        this.parameter_type_list()
                      }
                    }

                    this.state = 356
                    this.match(CalcParser.CLOSE_PARENTHESES)
                  }
                  break

                case 3:
                  {
                    _localctx = new DirectDeclaratorTypeRecursiveIdentifiersContext(
                      new Direct_declaratorContext(_parentctx, _parentState),
                    )
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      CalcParser.RULE_direct_declarator,
                    )
                    this.state = 357
                    if (!this.precpred(this._ctx, 1)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                    }
                    this.state = 358
                    this.match(CalcParser.OPEN_PARENTHESES)
                    this.state = 362
                    this._errHandler.sync(this)
                    _la = this._input.LA(1)
                    while (_la === CalcParser.SIZE_OF || _la === CalcParser.IDENTIFIER) {
                      {
                        {
                          this.state = 359
                          this.identifier()
                        }
                      }
                      this.state = 364
                      this._errHandler.sync(this)
                      _la = this._input.LA(1)
                    }
                    this.state = 365
                    this.match(CalcParser.CLOSE_PARENTHESES)
                  }
                  break
              }
            }
          }
          this.state = 370
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.unrollRecursionContexts(_parentctx)
    }
    return _localctx
  }
  // @RuleVersion(0)
  public initializer(): InitializerContext {
    let _localctx: InitializerContext = new InitializerContext(this._ctx, this.state)
    this.enterRule(_localctx, 56, CalcParser.RULE_initializer)
    let _la: number
    try {
      this.state = 379
      this._errHandler.sync(this)
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
        case CalcParser.STRING:
        case CalcParser.IDENTIFIER:
          _localctx = new InitializerTypeConditionalExpressionContext(_localctx)
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 371
            this.conditional_expression()
          }
          break
        case CalcParser.OPEN_CURLY_BRACKET:
          _localctx = new InitializerTypeArrayContext(_localctx)
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 372
            this.match(CalcParser.OPEN_CURLY_BRACKET)
            this.state = 373
            this.initializer_list(0)
            this.state = 375
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            if (_la === CalcParser.COMMA) {
              {
                this.state = 374
                this.match(CalcParser.COMMA)
              }
            }

            this.state = 377
            this.match(CalcParser.CLOSE_CURLY_BRACKET)
          }
          break
        default:
          throw new NoViableAltException(this)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }

  public initializer_list(): Initializer_listContext
  public initializer_list(_p: number): Initializer_listContext
  // @RuleVersion(0)
  public initializer_list(_p?: number): Initializer_listContext {
    if (_p === undefined) {
      _p = 0
    }

    const _parentctx: ParserRuleContext = this._ctx
    const _parentState: number = this.state
    let _localctx: Initializer_listContext = new Initializer_listContext(this._ctx, _parentState)
    let _prevctx: Initializer_listContext = _localctx
    const _startState: number = 58
    this.enterRecursionRule(_localctx, 58, CalcParser.RULE_initializer_list, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        {
          _localctx = new InitializerListTypeInitializerContext(_localctx)
          this._ctx = _localctx
          _prevctx = _localctx

          this.state = 382
          this.initializer()
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 389
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              {
                _localctx = new InitializerListTypeRecursiveInitializerContext(
                  new Initializer_listContext(_parentctx, _parentState),
                )
                this.pushNewRecursionContext(
                  _localctx,
                  _startState,
                  CalcParser.RULE_initializer_list,
                )
                this.state = 384
                if (!this.precpred(this._ctx, 1)) {
                  throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                }
                this.state = 385
                this.match(CalcParser.COMMA)
                this.state = 386
                this.initializer()
              }
            }
          }
          this.state = 391
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.unrollRecursionContexts(_parentctx)
    }
    return _localctx
  }
  // @RuleVersion(0)
  public expression_statement(): Expression_statementContext {
    const _localctx: Expression_statementContext = new Expression_statementContext(
      this._ctx,
      this.state,
    )
    this.enterRule(_localctx, 60, CalcParser.RULE_expression_statement)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 392
        this.expression(0)
        this.state = 393
        this.end_statement_delimiter()
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }

  public expression(): ExpressionContext
  public expression(_p: number): ExpressionContext
  // @RuleVersion(0)
  public expression(_p?: number): ExpressionContext {
    if (_p === undefined) {
      _p = 0
    }

    const _parentctx: ParserRuleContext = this._ctx
    const _parentState: number = this.state
    let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState)
    let _prevctx: ExpressionContext = _localctx
    const _startState: number = 62
    this.enterRecursionRule(_localctx, 62, CalcParser.RULE_expression, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        {
          _localctx = new ExpressionTypeAssignmentContext(_localctx)
          this._ctx = _localctx
          _prevctx = _localctx

          this.state = 396
          this.assignment_expression()
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 403
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              {
                _localctx = new ExpressionTypeExpressionContext(
                  new ExpressionContext(_parentctx, _parentState),
                )
                this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression)
                this.state = 398
                if (!this.precpred(this._ctx, 1)) {
                  throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                }
                this.state = 399
                this.match(CalcParser.COMMA)
                this.state = 400
                this.assignment_expression()
              }
            }
          }
          this.state = 405
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.unrollRecursionContexts(_parentctx)
    }
    return _localctx
  }
  // @RuleVersion(0)
  public assignment_expression(): Assignment_expressionContext {
    let _localctx: Assignment_expressionContext = new Assignment_expressionContext(
      this._ctx,
      this.state,
    )
    this.enterRule(_localctx, 64, CalcParser.RULE_assignment_expression)
    try {
      this.state = 411
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 35, this._ctx)) {
        case 1:
          _localctx = new AssignmentExpressionTypeConditionalContext(_localctx)
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 406
            this.conditional_expression()
          }
          break

        case 2:
          _localctx = new AssignmentExpressionTypeAssignmentContext(_localctx)
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 407
            this.unary_expression()
            this.state = 408
            this.assignment_operator()
            this.state = 409
            this.assignment_expression()
          }
          break
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public constant_expression(): Constant_expressionContext {
    const _localctx: Constant_expressionContext = new Constant_expressionContext(
      this._ctx,
      this.state,
    )
    this.enterRule(_localctx, 66, CalcParser.RULE_constant_expression)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 413
        this.conditional_expression()
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public conditional_expression(): Conditional_expressionContext {
    let _localctx: Conditional_expressionContext = new Conditional_expressionContext(
      this._ctx,
      this.state,
    )
    this.enterRule(_localctx, 68, CalcParser.RULE_conditional_expression)
    try {
      this.state = 422
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 36, this._ctx)) {
        case 1:
          _localctx = new ConditionalExpressionTypeLogicalOrContext(_localctx)
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 415
            this.logical_or_expression(0)
          }
          break

        case 2:
          _localctx = new ConditionalExpressionTypeConditionalContext(_localctx)
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 416
            this.logical_or_expression(0)
            this.state = 417
            this.match(CalcParser.QUESTION_MARK)
            this.state = 418
            this.expression(0)
            this.state = 419
            this.match(CalcParser.COLON)
            this.state = 420
            this.conditional_expression()
          }
          break
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }

  public logical_or_expression(): Logical_or_expressionContext
  public logical_or_expression(_p: number): Logical_or_expressionContext
  // @RuleVersion(0)
  public logical_or_expression(_p?: number): Logical_or_expressionContext {
    if (_p === undefined) {
      _p = 0
    }

    const _parentctx: ParserRuleContext = this._ctx
    const _parentState: number = this.state
    let _localctx: Logical_or_expressionContext = new Logical_or_expressionContext(
      this._ctx,
      _parentState,
    )
    let _prevctx: Logical_or_expressionContext = _localctx
    const _startState: number = 70
    this.enterRecursionRule(_localctx, 70, CalcParser.RULE_logical_or_expression, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        {
          _localctx = new LogicalOrExpressionTypeLogicalAndContext(_localctx)
          this._ctx = _localctx
          _prevctx = _localctx

          this.state = 425
          this.logical_and_expression(0)
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 432
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              {
                _localctx = new LogicalOrExpressionTypeLogicalOrContext(
                  new Logical_or_expressionContext(_parentctx, _parentState),
                )
                this.pushNewRecursionContext(
                  _localctx,
                  _startState,
                  CalcParser.RULE_logical_or_expression,
                )
                this.state = 427
                if (!this.precpred(this._ctx, 1)) {
                  throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                }
                this.state = 428
                this.match(CalcParser.BOOLEAN_OR)
                this.state = 429
                this.logical_and_expression(0)
              }
            }
          }
          this.state = 434
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.unrollRecursionContexts(_parentctx)
    }
    return _localctx
  }

  public logical_and_expression(): Logical_and_expressionContext
  public logical_and_expression(_p: number): Logical_and_expressionContext
  // @RuleVersion(0)
  public logical_and_expression(_p?: number): Logical_and_expressionContext {
    if (_p === undefined) {
      _p = 0
    }

    const _parentctx: ParserRuleContext = this._ctx
    const _parentState: number = this.state
    let _localctx: Logical_and_expressionContext = new Logical_and_expressionContext(
      this._ctx,
      _parentState,
    )
    let _prevctx: Logical_and_expressionContext = _localctx
    const _startState: number = 72
    this.enterRecursionRule(_localctx, 72, CalcParser.RULE_logical_and_expression, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        {
          _localctx = new LogicalAndExpressionTypeInclusiveOrContext(_localctx)
          this._ctx = _localctx
          _prevctx = _localctx

          this.state = 436
          this.inclusive_or_expression(0)
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 443
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              {
                _localctx = new LogicalAndExpressionTypeLogicalAndContext(
                  new Logical_and_expressionContext(_parentctx, _parentState),
                )
                this.pushNewRecursionContext(
                  _localctx,
                  _startState,
                  CalcParser.RULE_logical_and_expression,
                )
                this.state = 438
                if (!this.precpred(this._ctx, 1)) {
                  throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                }
                this.state = 439
                this.match(CalcParser.BOOLEAN_AND)
                this.state = 440
                this.inclusive_or_expression(0)
              }
            }
          }
          this.state = 445
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.unrollRecursionContexts(_parentctx)
    }
    return _localctx
  }

  public inclusive_or_expression(): Inclusive_or_expressionContext
  public inclusive_or_expression(_p: number): Inclusive_or_expressionContext
  // @RuleVersion(0)
  public inclusive_or_expression(_p?: number): Inclusive_or_expressionContext {
    if (_p === undefined) {
      _p = 0
    }

    const _parentctx: ParserRuleContext = this._ctx
    const _parentState: number = this.state
    let _localctx: Inclusive_or_expressionContext = new Inclusive_or_expressionContext(
      this._ctx,
      _parentState,
    )
    let _prevctx: Inclusive_or_expressionContext = _localctx
    const _startState: number = 74
    this.enterRecursionRule(_localctx, 74, CalcParser.RULE_inclusive_or_expression, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        {
          _localctx = new InclusiveOrExpressionTypeExclusiveOrContext(_localctx)
          this._ctx = _localctx
          _prevctx = _localctx

          this.state = 447
          this.exclusive_or_expression(0)
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 454
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              {
                _localctx = new InclusiveOrExpressionTypeInclusiveOrContext(
                  new Inclusive_or_expressionContext(_parentctx, _parentState),
                )
                this.pushNewRecursionContext(
                  _localctx,
                  _startState,
                  CalcParser.RULE_inclusive_or_expression,
                )
                this.state = 449
                if (!this.precpred(this._ctx, 1)) {
                  throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                }
                this.state = 450
                this.match(CalcParser.VERTICAL_BAR)
                this.state = 451
                this.exclusive_or_expression(0)
              }
            }
          }
          this.state = 456
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.unrollRecursionContexts(_parentctx)
    }
    return _localctx
  }

  public exclusive_or_expression(): Exclusive_or_expressionContext
  public exclusive_or_expression(_p: number): Exclusive_or_expressionContext
  // @RuleVersion(0)
  public exclusive_or_expression(_p?: number): Exclusive_or_expressionContext {
    if (_p === undefined) {
      _p = 0
    }

    const _parentctx: ParserRuleContext = this._ctx
    const _parentState: number = this.state
    let _localctx: Exclusive_or_expressionContext = new Exclusive_or_expressionContext(
      this._ctx,
      _parentState,
    )
    let _prevctx: Exclusive_or_expressionContext = _localctx
    const _startState: number = 76
    this.enterRecursionRule(_localctx, 76, CalcParser.RULE_exclusive_or_expression, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        {
          _localctx = new ExclusiveOrExpressionTypeAndContext(_localctx)
          this._ctx = _localctx
          _prevctx = _localctx

          this.state = 458
          this.and_expression(0)
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 465
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              {
                _localctx = new ExclusiveOrExpressionTypeExclusiveOrContext(
                  new Exclusive_or_expressionContext(_parentctx, _parentState),
                )
                this.pushNewRecursionContext(
                  _localctx,
                  _startState,
                  CalcParser.RULE_exclusive_or_expression,
                )
                this.state = 460
                if (!this.precpred(this._ctx, 1)) {
                  throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                }
                this.state = 461
                this.match(CalcParser.CARET)
                this.state = 462
                this.and_expression(0)
              }
            }
          }
          this.state = 467
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.unrollRecursionContexts(_parentctx)
    }
    return _localctx
  }

  public and_expression(): And_expressionContext
  public and_expression(_p: number): And_expressionContext
  // @RuleVersion(0)
  public and_expression(_p?: number): And_expressionContext {
    if (_p === undefined) {
      _p = 0
    }

    const _parentctx: ParserRuleContext = this._ctx
    const _parentState: number = this.state
    let _localctx: And_expressionContext = new And_expressionContext(this._ctx, _parentState)
    let _prevctx: And_expressionContext = _localctx
    const _startState: number = 78
    this.enterRecursionRule(_localctx, 78, CalcParser.RULE_and_expression, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        {
          _localctx = new AndExpressionTypeEqualityContext(_localctx)
          this._ctx = _localctx
          _prevctx = _localctx

          this.state = 469
          this.equality_expression(0)
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 476
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              {
                _localctx = new AndExpressionTypeAndContext(
                  new And_expressionContext(_parentctx, _parentState),
                )
                this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_and_expression)
                this.state = 471
                if (!this.precpred(this._ctx, 1)) {
                  throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                }
                this.state = 472
                this.match(CalcParser.AMPERSAND)
                this.state = 473
                this.equality_expression(0)
              }
            }
          }
          this.state = 478
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.unrollRecursionContexts(_parentctx)
    }
    return _localctx
  }

  public equality_expression(): Equality_expressionContext
  public equality_expression(_p: number): Equality_expressionContext
  // @RuleVersion(0)
  public equality_expression(_p?: number): Equality_expressionContext {
    if (_p === undefined) {
      _p = 0
    }

    const _parentctx: ParserRuleContext = this._ctx
    const _parentState: number = this.state
    let _localctx: Equality_expressionContext = new Equality_expressionContext(
      this._ctx,
      _parentState,
    )
    let _prevctx: Equality_expressionContext = _localctx
    const _startState: number = 80
    this.enterRecursionRule(_localctx, 80, CalcParser.RULE_equality_expression, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        {
          _localctx = new EqualityExpressionTypeRelationalContext(_localctx)
          this._ctx = _localctx
          _prevctx = _localctx

          this.state = 480
          this.relational_expression(0)
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 490
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              this.state = 488
              this._errHandler.sync(this)
              switch (this.interpreter.adaptivePredict(this._input, 42, this._ctx)) {
                case 1:
                  {
                    _localctx = new EqualityExpressionTypeEqualityEqualContext(
                      new Equality_expressionContext(_parentctx, _parentState),
                    )
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      CalcParser.RULE_equality_expression,
                    )
                    this.state = 482
                    if (!this.precpred(this._ctx, 2)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 2)')
                    }
                    this.state = 483
                    this.match(CalcParser.EQUALITY_EQUAL)
                    this.state = 484
                    this.relational_expression(0)
                  }
                  break

                case 2:
                  {
                    _localctx = new EqualityExpressionTypeEqualityNotEqualContext(
                      new Equality_expressionContext(_parentctx, _parentState),
                    )
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      CalcParser.RULE_equality_expression,
                    )
                    this.state = 485
                    if (!this.precpred(this._ctx, 1)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                    }
                    this.state = 486
                    this.match(CalcParser.EQUALITY_NOT_EQUAL)
                    this.state = 487
                    this.relational_expression(0)
                  }
                  break
              }
            }
          }
          this.state = 492
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.unrollRecursionContexts(_parentctx)
    }
    return _localctx
  }

  public relational_expression(): Relational_expressionContext
  public relational_expression(_p: number): Relational_expressionContext
  // @RuleVersion(0)
  public relational_expression(_p?: number): Relational_expressionContext {
    if (_p === undefined) {
      _p = 0
    }

    const _parentctx: ParserRuleContext = this._ctx
    const _parentState: number = this.state
    let _localctx: Relational_expressionContext = new Relational_expressionContext(
      this._ctx,
      _parentState,
    )
    let _prevctx: Relational_expressionContext = _localctx
    const _startState: number = 82
    this.enterRecursionRule(_localctx, 82, CalcParser.RULE_relational_expression, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        {
          _localctx = new RelationalExpressionTypeShiftContext(_localctx)
          this._ctx = _localctx
          _prevctx = _localctx

          this.state = 494
          this.shift_expression(0)
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 510
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              this.state = 508
              this._errHandler.sync(this)
              switch (this.interpreter.adaptivePredict(this._input, 44, this._ctx)) {
                case 1:
                  {
                    _localctx = new RelationalExpressionTypeRelationalGTContext(
                      new Relational_expressionContext(_parentctx, _parentState),
                    )
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      CalcParser.RULE_relational_expression,
                    )
                    this.state = 496
                    if (!this.precpred(this._ctx, 4)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 4)')
                    }
                    this.state = 497
                    this.match(CalcParser.RELATIONAL_GREATER_THAN)
                    this.state = 498
                    this.shift_expression(0)
                  }
                  break

                case 2:
                  {
                    _localctx = new RelationalExpressionTypeRelationalLTContext(
                      new Relational_expressionContext(_parentctx, _parentState),
                    )
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      CalcParser.RULE_relational_expression,
                    )
                    this.state = 499
                    if (!this.precpred(this._ctx, 3)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 3)')
                    }
                    this.state = 500
                    this.match(CalcParser.RELATIONAL_LESS_THAN)
                    this.state = 501
                    this.shift_expression(0)
                  }
                  break

                case 3:
                  {
                    _localctx = new RelationalExpressionTypeRelationalLTOEContext(
                      new Relational_expressionContext(_parentctx, _parentState),
                    )
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      CalcParser.RULE_relational_expression,
                    )
                    this.state = 502
                    if (!this.precpred(this._ctx, 2)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 2)')
                    }
                    this.state = 503
                    this.match(CalcParser.RELATIONAL_LESS_THAN_OR_EQUAL)
                    this.state = 504
                    this.shift_expression(0)
                  }
                  break

                case 4:
                  {
                    _localctx = new RelationalExpressionTypeRelationalGTOEContext(
                      new Relational_expressionContext(_parentctx, _parentState),
                    )
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      CalcParser.RULE_relational_expression,
                    )
                    this.state = 505
                    if (!this.precpred(this._ctx, 1)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                    }
                    this.state = 506
                    this.match(CalcParser.RELATIONAL_GREATER_THAN_OR_EQUAL)
                    this.state = 507
                    this.shift_expression(0)
                  }
                  break
              }
            }
          }
          this.state = 512
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.unrollRecursionContexts(_parentctx)
    }
    return _localctx
  }

  public shift_expression(): Shift_expressionContext
  public shift_expression(_p: number): Shift_expressionContext
  // @RuleVersion(0)
  public shift_expression(_p?: number): Shift_expressionContext {
    if (_p === undefined) {
      _p = 0
    }

    const _parentctx: ParserRuleContext = this._ctx
    const _parentState: number = this.state
    let _localctx: Shift_expressionContext = new Shift_expressionContext(this._ctx, _parentState)
    let _prevctx: Shift_expressionContext = _localctx
    const _startState: number = 84
    this.enterRecursionRule(_localctx, 84, CalcParser.RULE_shift_expression, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        {
          _localctx = new ShfitExpressionTypeAdditiveContext(_localctx)
          this._ctx = _localctx
          _prevctx = _localctx

          this.state = 514
          this.additive_expression(0)
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 524
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              this.state = 522
              this._errHandler.sync(this)
              switch (this.interpreter.adaptivePredict(this._input, 46, this._ctx)) {
                case 1:
                  {
                    _localctx = new ShfitExpressionTypeShiftLeftContext(
                      new Shift_expressionContext(_parentctx, _parentState),
                    )
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      CalcParser.RULE_shift_expression,
                    )
                    this.state = 516
                    if (!this.precpred(this._ctx, 2)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 2)')
                    }
                    this.state = 517
                    this.match(CalcParser.SHIFT_LEFT)
                    this.state = 518
                    this.additive_expression(0)
                  }
                  break

                case 2:
                  {
                    _localctx = new ShfitExpressionTypeShiftRightContext(
                      new Shift_expressionContext(_parentctx, _parentState),
                    )
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      CalcParser.RULE_shift_expression,
                    )
                    this.state = 519
                    if (!this.precpred(this._ctx, 1)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                    }
                    this.state = 520
                    this.match(CalcParser.SHIFT_RIGHT)
                    this.state = 521
                    this.additive_expression(0)
                  }
                  break
              }
            }
          }
          this.state = 526
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.unrollRecursionContexts(_parentctx)
    }
    return _localctx
  }

  public additive_expression(): Additive_expressionContext
  public additive_expression(_p: number): Additive_expressionContext
  // @RuleVersion(0)
  public additive_expression(_p?: number): Additive_expressionContext {
    if (_p === undefined) {
      _p = 0
    }

    const _parentctx: ParserRuleContext = this._ctx
    const _parentState: number = this.state
    let _localctx: Additive_expressionContext = new Additive_expressionContext(
      this._ctx,
      _parentState,
    )
    let _prevctx: Additive_expressionContext = _localctx
    const _startState: number = 86
    this.enterRecursionRule(_localctx, 86, CalcParser.RULE_additive_expression, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        {
          _localctx = new AdditiveExpressionTypeMultiplicativeContext(_localctx)
          this._ctx = _localctx
          _prevctx = _localctx

          this.state = 528
          this.multiplicative_expression(0)
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 538
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              this.state = 536
              this._errHandler.sync(this)
              switch (this.interpreter.adaptivePredict(this._input, 48, this._ctx)) {
                case 1:
                  {
                    _localctx = new AdditiveExpressionTypeAdditiveAddContext(
                      new Additive_expressionContext(_parentctx, _parentState),
                    )
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      CalcParser.RULE_additive_expression,
                    )
                    this.state = 530
                    if (!this.precpred(this._ctx, 2)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 2)')
                    }
                    this.state = 531
                    this.match(CalcParser.PLUS)
                    this.state = 532
                    this.multiplicative_expression(0)
                  }
                  break

                case 2:
                  {
                    _localctx = new AdditiveExpressionTypeAdditiveMinusContext(
                      new Additive_expressionContext(_parentctx, _parentState),
                    )
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      CalcParser.RULE_additive_expression,
                    )
                    this.state = 533
                    if (!this.precpred(this._ctx, 1)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                    }
                    this.state = 534
                    this.match(CalcParser.MINUS)
                    this.state = 535
                    this.multiplicative_expression(0)
                  }
                  break
              }
            }
          }
          this.state = 540
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.unrollRecursionContexts(_parentctx)
    }
    return _localctx
  }

  public multiplicative_expression(): Multiplicative_expressionContext
  public multiplicative_expression(_p: number): Multiplicative_expressionContext
  // @RuleVersion(0)
  public multiplicative_expression(_p?: number): Multiplicative_expressionContext {
    if (_p === undefined) {
      _p = 0
    }

    const _parentctx: ParserRuleContext = this._ctx
    const _parentState: number = this.state
    let _localctx: Multiplicative_expressionContext = new Multiplicative_expressionContext(
      this._ctx,
      _parentState,
    )
    let _prevctx: Multiplicative_expressionContext = _localctx
    const _startState: number = 88
    this.enterRecursionRule(_localctx, 88, CalcParser.RULE_multiplicative_expression, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        {
          _localctx = new MultiplicativeExpressionTypeCastContext(_localctx)
          this._ctx = _localctx
          _prevctx = _localctx

          this.state = 542
          this.cast_expression()
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 555
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              this.state = 553
              this._errHandler.sync(this)
              switch (this.interpreter.adaptivePredict(this._input, 50, this._ctx)) {
                case 1:
                  {
                    _localctx = new MultiplicativeExpressionTypeMultiplicativeAsterickContext(
                      new Multiplicative_expressionContext(_parentctx, _parentState),
                    )
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      CalcParser.RULE_multiplicative_expression,
                    )
                    this.state = 544
                    if (!this.precpred(this._ctx, 3)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 3)')
                    }
                    this.state = 545
                    this.match(CalcParser.ASTERICK)
                    this.state = 546
                    this.cast_expression()
                  }
                  break

                case 2:
                  {
                    _localctx = new MultiplicativeExpressionTypeMultiplicativeBackslashContext(
                      new Multiplicative_expressionContext(_parentctx, _parentState),
                    )
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      CalcParser.RULE_multiplicative_expression,
                    )
                    this.state = 547
                    if (!this.precpred(this._ctx, 2)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 2)')
                    }
                    this.state = 548
                    this.match(CalcParser.BACKSLASH)
                    this.state = 549
                    this.cast_expression()
                  }
                  break

                case 3:
                  {
                    _localctx = new MultiplicativeExpressionTypeMultiplicativePercentContext(
                      new Multiplicative_expressionContext(_parentctx, _parentState),
                    )
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      CalcParser.RULE_multiplicative_expression,
                    )
                    this.state = 550
                    if (!this.precpred(this._ctx, 1)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                    }
                    this.state = 551
                    this.match(CalcParser.PERCENT)
                    this.state = 552
                    this.cast_expression()
                  }
                  break
              }
            }
          }
          this.state = 557
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.unrollRecursionContexts(_parentctx)
    }
    return _localctx
  }
  // @RuleVersion(0)
  public cast_expression(): Cast_expressionContext {
    let _localctx: Cast_expressionContext = new Cast_expressionContext(this._ctx, this.state)
    this.enterRule(_localctx, 90, CalcParser.RULE_cast_expression)
    try {
      this.state = 564
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 52, this._ctx)) {
        case 1:
          _localctx = new CastExpressionTypeUnaryContext(_localctx)
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 558
            this.unary_expression()
          }
          break

        case 2:
          _localctx = new CastExpressionTypeCastContext(_localctx)
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 559
            this.match(CalcParser.OPEN_PARENTHESES)
            this.state = 560
            this.type_name()
            this.state = 561
            this.match(CalcParser.CLOSE_PARENTHESES)
            this.state = 562
            this.cast_expression()
          }
          break
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public type_name(): Type_nameContext {
    const _localctx: Type_nameContext = new Type_nameContext(this._ctx, this.state)
    this.enterRule(_localctx, 92, CalcParser.RULE_type_name)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 566
        this.type_specifier()
        this.state = 568
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        if (
          (_la & ~0x1f) === 0 &&
          ((1 << _la) &
            ((1 << CalcParser.ASTERICK) |
              (1 << CalcParser.OPEN_PARENTHESES) |
              (1 << CalcParser.OPEN_SQUARE_BRACKET))) !==
            0
        ) {
          {
            this.state = 567
            this.abstract_declarator()
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public abstract_declarator(): Abstract_declaratorContext {
    let _localctx: Abstract_declaratorContext = new Abstract_declaratorContext(
      this._ctx,
      this.state,
    )
    this.enterRule(_localctx, 94, CalcParser.RULE_abstract_declarator)
    let _la: number
    try {
      this.state = 575
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 55, this._ctx)) {
        case 1:
          _localctx = new AbstractDeclaratorTypePointerContext(_localctx)
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 570
            this.pointer()
          }
          break

        case 2:
          _localctx = new AbstractDeclaratorTypeDirectAbstractDeclaratorContext(_localctx)
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 572
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            if (_la === CalcParser.ASTERICK) {
              {
                this.state = 571
                this.pointer()
              }
            }

            this.state = 574
            this.direct_abstract_declarator(0)
          }
          break
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }

  public direct_abstract_declarator(): Direct_abstract_declaratorContext
  public direct_abstract_declarator(_p: number): Direct_abstract_declaratorContext
  // @RuleVersion(0)
  public direct_abstract_declarator(_p?: number): Direct_abstract_declaratorContext {
    if (_p === undefined) {
      _p = 0
    }

    const _parentctx: ParserRuleContext = this._ctx
    const _parentState: number = this.state
    let _localctx: Direct_abstract_declaratorContext = new Direct_abstract_declaratorContext(
      this._ctx,
      _parentState,
    )
    let _prevctx: Direct_abstract_declaratorContext = _localctx
    const _startState: number = 96
    this.enterRecursionRule(_localctx, 96, CalcParser.RULE_direct_abstract_declarator, _p)
    let _la: number
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 592
        this._errHandler.sync(this)
        switch (this.interpreter.adaptivePredict(this._input, 58, this._ctx)) {
          case 1:
            {
              _localctx = new DirectAbstractDeclaratorTypeNestedAbstractDeclaratorContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx

              this.state = 578
              this.match(CalcParser.OPEN_PARENTHESES)
              this.state = 579
              this.abstract_declarator()
              this.state = 580
              this.match(CalcParser.CLOSE_PARENTHESES)
            }
            break

          case 2:
            {
              _localctx = new DirectAbstractDeclaratorTypeArrayContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 582
              this.match(CalcParser.OPEN_SQUARE_BRACKET)
              this.state = 584
              this._errHandler.sync(this)
              _la = this._input.LA(1)
              if (
                ((_la & ~0x1f) === 0 &&
                  ((1 << _la) &
                    ((1 << CalcParser.ASTERICK) |
                      (1 << CalcParser.PLUS) |
                      (1 << CalcParser.MINUS) |
                      (1 << CalcParser.AMPERSAND) |
                      (1 << CalcParser.TILDA) |
                      (1 << CalcParser.EXCLAMATION_MARK) |
                      (1 << CalcParser.OPEN_PARENTHESES) |
                      (1 << CalcParser.INCREMENT) |
                      (1 << CalcParser.DECREMENT))) !==
                    0) ||
                (((_la - 48) & ~0x1f) === 0 &&
                  ((1 << (_la - 48)) &
                    ((1 << (CalcParser.SIZE_OF - 48)) |
                      (1 << (CalcParser.INTEGER - 48)) |
                      (1 << (CalcParser.FLOAT - 48)) |
                      (1 << (CalcParser.CHAR - 48)) |
                      (1 << (CalcParser.STRING - 48)))) !==
                    0) ||
                _la === CalcParser.IDENTIFIER
              ) {
                {
                  this.state = 583
                  this.constant_expression()
                }
              }

              this.state = 586
              this.match(CalcParser.CLOSE_SQUARE_BRACKET)
            }
            break

          case 3:
            {
              _localctx = new DirectAbstractDeclaratorTypeParametersContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 587
              this.match(CalcParser.OPEN_PARENTHESES)
              this.state = 589
              this._errHandler.sync(this)
              _la = this._input.LA(1)
              if (
                ((_la - 61) & ~0x1f) === 0 &&
                ((1 << (_la - 61)) &
                  ((1 << (CalcParser.STRUCT - 61)) |
                    (1 << (CalcParser.UNION - 61)) |
                    (1 << (CalcParser.VOID_TYPE_SPECIFIER - 61)) |
                    (1 << (CalcParser.CHAR_TYPE_SPECIFIER - 61)) |
                    (1 << (CalcParser.SHORT_TYPE_SPECIFIER - 61)) |
                    (1 << (CalcParser.INT_TYPE_SPECIFIER - 61)) |
                    (1 << (CalcParser.LONG_TYPE_SPECIFIER - 61)) |
                    (1 << (CalcParser.FLOAT_TYPE_SPECIFIER - 61)) |
                    (1 << (CalcParser.DOUBLE_TYPE_SPECIFIER - 61)) |
                    (1 << (CalcParser.SIGNED_TYPE_SPECIFIER - 61)) |
                    (1 << (CalcParser.UNSIGNED_TYPE_SPECIFIER - 61)))) !==
                  0
              ) {
                {
                  this.state = 588
                  this.parameter_type_list()
                }
              }

              this.state = 591
              this.match(CalcParser.CLOSE_PARENTHESES)
            }
            break
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 608
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              this.state = 606
              this._errHandler.sync(this)
              switch (this.interpreter.adaptivePredict(this._input, 61, this._ctx)) {
                case 1:
                  {
                    _localctx = new DirectAbstractDeclaratorTypeRecursiveArrayContext(
                      new Direct_abstract_declaratorContext(_parentctx, _parentState),
                    )
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      CalcParser.RULE_direct_abstract_declarator,
                    )
                    this.state = 594
                    if (!this.precpred(this._ctx, 2)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 2)')
                    }
                    this.state = 595
                    this.match(CalcParser.OPEN_SQUARE_BRACKET)
                    this.state = 597
                    this._errHandler.sync(this)
                    _la = this._input.LA(1)
                    if (
                      ((_la & ~0x1f) === 0 &&
                        ((1 << _la) &
                          ((1 << CalcParser.ASTERICK) |
                            (1 << CalcParser.PLUS) |
                            (1 << CalcParser.MINUS) |
                            (1 << CalcParser.AMPERSAND) |
                            (1 << CalcParser.TILDA) |
                            (1 << CalcParser.EXCLAMATION_MARK) |
                            (1 << CalcParser.OPEN_PARENTHESES) |
                            (1 << CalcParser.INCREMENT) |
                            (1 << CalcParser.DECREMENT))) !==
                          0) ||
                      (((_la - 48) & ~0x1f) === 0 &&
                        ((1 << (_la - 48)) &
                          ((1 << (CalcParser.SIZE_OF - 48)) |
                            (1 << (CalcParser.INTEGER - 48)) |
                            (1 << (CalcParser.FLOAT - 48)) |
                            (1 << (CalcParser.CHAR - 48)) |
                            (1 << (CalcParser.STRING - 48)))) !==
                          0) ||
                      _la === CalcParser.IDENTIFIER
                    ) {
                      {
                        this.state = 596
                        this.constant_expression()
                      }
                    }

                    this.state = 599
                    this.match(CalcParser.CLOSE_SQUARE_BRACKET)
                  }
                  break

                case 2:
                  {
                    _localctx = new DirectAbstractDeclaratorTypeRecursiveParametersContext(
                      new Direct_abstract_declaratorContext(_parentctx, _parentState),
                    )
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      CalcParser.RULE_direct_abstract_declarator,
                    )
                    this.state = 600
                    if (!this.precpred(this._ctx, 1)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                    }
                    this.state = 601
                    this.match(CalcParser.OPEN_PARENTHESES)
                    this.state = 603
                    this._errHandler.sync(this)
                    _la = this._input.LA(1)
                    if (
                      ((_la - 61) & ~0x1f) === 0 &&
                      ((1 << (_la - 61)) &
                        ((1 << (CalcParser.STRUCT - 61)) |
                          (1 << (CalcParser.UNION - 61)) |
                          (1 << (CalcParser.VOID_TYPE_SPECIFIER - 61)) |
                          (1 << (CalcParser.CHAR_TYPE_SPECIFIER - 61)) |
                          (1 << (CalcParser.SHORT_TYPE_SPECIFIER - 61)) |
                          (1 << (CalcParser.INT_TYPE_SPECIFIER - 61)) |
                          (1 << (CalcParser.LONG_TYPE_SPECIFIER - 61)) |
                          (1 << (CalcParser.FLOAT_TYPE_SPECIFIER - 61)) |
                          (1 << (CalcParser.DOUBLE_TYPE_SPECIFIER - 61)) |
                          (1 << (CalcParser.SIGNED_TYPE_SPECIFIER - 61)) |
                          (1 << (CalcParser.UNSIGNED_TYPE_SPECIFIER - 61)))) !==
                        0
                    ) {
                      {
                        this.state = 602
                        this.parameter_type_list()
                      }
                    }

                    this.state = 605
                    this.match(CalcParser.CLOSE_PARENTHESES)
                  }
                  break
              }
            }
          }
          this.state = 610
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.unrollRecursionContexts(_parentctx)
    }
    return _localctx
  }
  // @RuleVersion(0)
  public unary_expression(): Unary_expressionContext {
    let _localctx: Unary_expressionContext = new Unary_expressionContext(this._ctx, this.state)
    this.enterRule(_localctx, 98, CalcParser.RULE_unary_expression)
    try {
      this.state = 624
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 63, this._ctx)) {
        case 1:
          _localctx = new UnaryExpressionTypePostfixContext(_localctx)
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 611
            this.postfix_expression(0)
          }
          break

        case 2:
          _localctx = new UnaryExpressionTypeIncrementContext(_localctx)
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 612
            this.match(CalcParser.INCREMENT)
            this.state = 613
            this.unary_expression()
          }
          break

        case 3:
          _localctx = new UnaryExpressionTypeDecrementContext(_localctx)
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 614
            this.match(CalcParser.DECREMENT)
            this.state = 615
            this.unary_expression()
          }
          break

        case 4:
          _localctx = new UnaryExpressionTypeUnaryOperatorContext(_localctx)
          this.enterOuterAlt(_localctx, 4)
          {
            this.state = 616
            this.unary_operator()
            this.state = 617
            this.cast_expression()
          }
          break

        case 5:
          _localctx = new UnaryExpressionTypeSizeOfContext(_localctx)
          this.enterOuterAlt(_localctx, 5)
          {
            this.state = 619
            this.match(CalcParser.SIZE_OF)
            this.state = 620
            this.match(CalcParser.OPEN_PARENTHESES)
            this.state = 621
            this.type_name()
            this.state = 622
            this.match(CalcParser.CLOSE_PARENTHESES)
          }
          break
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }

  public postfix_expression(): Postfix_expressionContext
  public postfix_expression(_p: number): Postfix_expressionContext
  // @RuleVersion(0)
  public postfix_expression(_p?: number): Postfix_expressionContext {
    if (_p === undefined) {
      _p = 0
    }

    const _parentctx: ParserRuleContext = this._ctx
    const _parentState: number = this.state
    let _localctx: Postfix_expressionContext = new Postfix_expressionContext(
      this._ctx,
      _parentState,
    )
    let _prevctx: Postfix_expressionContext = _localctx
    const _startState: number = 100
    this.enterRecursionRule(_localctx, 100, CalcParser.RULE_postfix_expression, _p)
    let _la: number
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        {
          _localctx = new PostfixExpressionTypePrimaryContext(_localctx)
          this._ctx = _localctx
          _prevctx = _localctx

          this.state = 627
          this.primary_expression()
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 652
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              this.state = 650
              this._errHandler.sync(this)
              switch (this.interpreter.adaptivePredict(this._input, 65, this._ctx)) {
                case 1:
                  {
                    _localctx = new PostfixExpressionTypeArrayContext(
                      new Postfix_expressionContext(_parentctx, _parentState),
                    )
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      CalcParser.RULE_postfix_expression,
                    )
                    this.state = 629
                    if (!this.precpred(this._ctx, 6)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 6)')
                    }
                    this.state = 630
                    this.match(CalcParser.OPEN_SQUARE_BRACKET)
                    this.state = 631
                    this.assignment_expression()
                    this.state = 632
                    this.match(CalcParser.CLOSE_SQUARE_BRACKET)
                  }
                  break

                case 2:
                  {
                    _localctx = new PostfixExpressionTypeFunctionCallContext(
                      new Postfix_expressionContext(_parentctx, _parentState),
                    )
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      CalcParser.RULE_postfix_expression,
                    )
                    this.state = 634
                    if (!this.precpred(this._ctx, 5)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 5)')
                    }
                    this.state = 635
                    this.match(CalcParser.OPEN_PARENTHESES)
                    this.state = 637
                    this._errHandler.sync(this)
                    _la = this._input.LA(1)
                    if (
                      ((_la & ~0x1f) === 0 &&
                        ((1 << _la) &
                          ((1 << CalcParser.ASTERICK) |
                            (1 << CalcParser.PLUS) |
                            (1 << CalcParser.MINUS) |
                            (1 << CalcParser.AMPERSAND) |
                            (1 << CalcParser.TILDA) |
                            (1 << CalcParser.EXCLAMATION_MARK) |
                            (1 << CalcParser.OPEN_PARENTHESES) |
                            (1 << CalcParser.INCREMENT) |
                            (1 << CalcParser.DECREMENT))) !==
                          0) ||
                      (((_la - 48) & ~0x1f) === 0 &&
                        ((1 << (_la - 48)) &
                          ((1 << (CalcParser.SIZE_OF - 48)) |
                            (1 << (CalcParser.INTEGER - 48)) |
                            (1 << (CalcParser.FLOAT - 48)) |
                            (1 << (CalcParser.CHAR - 48)) |
                            (1 << (CalcParser.STRING - 48)))) !==
                          0) ||
                      _la === CalcParser.IDENTIFIER
                    ) {
                      {
                        this.state = 636
                        this.expression(0)
                      }
                    }

                    this.state = 639
                    this.match(CalcParser.CLOSE_PARENTHESES)
                  }
                  break

                case 3:
                  {
                    _localctx = new PostfixExpressionTypeMemberContext(
                      new Postfix_expressionContext(_parentctx, _parentState),
                    )
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      CalcParser.RULE_postfix_expression,
                    )
                    this.state = 640
                    if (!this.precpred(this._ctx, 4)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 4)')
                    }
                    this.state = 641
                    this.match(CalcParser.FULLSTOP)
                    this.state = 642
                    this.identifier()
                  }
                  break

                case 4:
                  {
                    _localctx = new PostfixExpressionTypeDerefMemberContext(
                      new Postfix_expressionContext(_parentctx, _parentState),
                    )
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      CalcParser.RULE_postfix_expression,
                    )
                    this.state = 643
                    if (!this.precpred(this._ctx, 3)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 3)')
                    }
                    this.state = 644
                    this.match(CalcParser.RIGHT_ARROW)
                    this.state = 645
                    this.identifier()
                  }
                  break

                case 5:
                  {
                    _localctx = new PostfixExpressionTypeIncrementContext(
                      new Postfix_expressionContext(_parentctx, _parentState),
                    )
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      CalcParser.RULE_postfix_expression,
                    )
                    this.state = 646
                    if (!this.precpred(this._ctx, 2)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 2)')
                    }
                    this.state = 647
                    this.match(CalcParser.INCREMENT)
                  }
                  break

                case 6:
                  {
                    _localctx = new PostfixExpressionTypeDecrementContext(
                      new Postfix_expressionContext(_parentctx, _parentState),
                    )
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      CalcParser.RULE_postfix_expression,
                    )
                    this.state = 648
                    if (!this.precpred(this._ctx, 1)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                    }
                    this.state = 649
                    this.match(CalcParser.DECREMENT)
                  }
                  break
              }
            }
          }
          this.state = 654
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.unrollRecursionContexts(_parentctx)
    }
    return _localctx
  }
  // @RuleVersion(0)
  public primary_expression(): Primary_expressionContext {
    let _localctx: Primary_expressionContext = new Primary_expressionContext(this._ctx, this.state)
    this.enterRule(_localctx, 102, CalcParser.RULE_primary_expression)
    try {
      this.state = 662
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case CalcParser.SIZE_OF:
        case CalcParser.IDENTIFIER:
          _localctx = new PrimaryExpressionTypeIdentifierContext(_localctx)
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 655
            this.identifier()
          }
          break
        case CalcParser.INTEGER:
        case CalcParser.FLOAT:
        case CalcParser.CHAR:
          _localctx = new PrimaryExpressionTypeConstantContext(_localctx)
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 656
            this.constant()
          }
          break
        case CalcParser.STRING:
          _localctx = new PrimaryExpressionTypeStringContext(_localctx)
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 657
            this.string()
          }
          break
        case CalcParser.OPEN_PARENTHESES:
          _localctx = new PrimaryExpressionTypeNestedExpressionContext(_localctx)
          this.enterOuterAlt(_localctx, 4)
          {
            this.state = 658
            this.match(CalcParser.OPEN_PARENTHESES)
            this.state = 659
            this.expression(0)
            this.state = 660
            this.match(CalcParser.CLOSE_PARENTHESES)
          }
          break
        default:
          throw new NoViableAltException(this)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public string(): StringContext {
    const _localctx: StringContext = new StringContext(this._ctx, this.state)
    this.enterRule(_localctx, 104, CalcParser.RULE_string)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 664
        this.match(CalcParser.STRING)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public constant(): ConstantContext {
    let _localctx: ConstantContext = new ConstantContext(this._ctx, this.state)
    this.enterRule(_localctx, 106, CalcParser.RULE_constant)
    try {
      this.state = 669
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case CalcParser.INTEGER:
          _localctx = new ConstantTypeIntegerContext(_localctx)
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 666
            this.integer_constant()
          }
          break
        case CalcParser.FLOAT:
          _localctx = new ConstantTypeFloatContext(_localctx)
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 667
            this.float_constant()
          }
          break
        case CalcParser.CHAR:
          _localctx = new ConstantTypeCharacterContext(_localctx)
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 668
            this.character_constant()
          }
          break
        default:
          throw new NoViableAltException(this)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public integer_constant(): Integer_constantContext {
    const _localctx: Integer_constantContext = new Integer_constantContext(this._ctx, this.state)
    this.enterRule(_localctx, 108, CalcParser.RULE_integer_constant)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 671
        this.match(CalcParser.INTEGER)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public float_constant(): Float_constantContext {
    const _localctx: Float_constantContext = new Float_constantContext(this._ctx, this.state)
    this.enterRule(_localctx, 110, CalcParser.RULE_float_constant)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 673
        this.match(CalcParser.FLOAT)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public character_constant(): Character_constantContext {
    const _localctx: Character_constantContext = new Character_constantContext(
      this._ctx,
      this.state,
    )
    this.enterRule(_localctx, 112, CalcParser.RULE_character_constant)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 675
        this.match(CalcParser.CHAR)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public compound_statement(): Compound_statementContext {
    const _localctx: Compound_statementContext = new Compound_statementContext(
      this._ctx,
      this.state,
    )
    this.enterRule(_localctx, 114, CalcParser.RULE_compound_statement)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 677
        this.match(CalcParser.OPEN_CURLY_BRACKET)
        this.state = 681
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << CalcParser.ASTERICK) |
                (1 << CalcParser.PLUS) |
                (1 << CalcParser.MINUS) |
                (1 << CalcParser.AMPERSAND) |
                (1 << CalcParser.TILDA) |
                (1 << CalcParser.EXCLAMATION_MARK) |
                (1 << CalcParser.OPEN_PARENTHESES) |
                (1 << CalcParser.OPEN_CURLY_BRACKET) |
                (1 << CalcParser.INCREMENT) |
                (1 << CalcParser.DECREMENT))) !==
              0) ||
          (((_la - 48) & ~0x1f) === 0 &&
            ((1 << (_la - 48)) &
              ((1 << (CalcParser.SIZE_OF - 48)) |
                (1 << (CalcParser.IF - 48)) |
                (1 << (CalcParser.SWITCH - 48)) |
                (1 << (CalcParser.WHILE - 48)) |
                (1 << (CalcParser.DO - 48)) |
                (1 << (CalcParser.FOR - 48)) |
                (1 << (CalcParser.GOTO - 48)) |
                (1 << (CalcParser.CONTINUE - 48)) |
                (1 << (CalcParser.BREAK - 48)) |
                (1 << (CalcParser.RETURN - 48)) |
                (1 << (CalcParser.STRUCT - 48)) |
                (1 << (CalcParser.UNION - 48)) |
                (1 << (CalcParser.VOID_TYPE_SPECIFIER - 48)) |
                (1 << (CalcParser.CHAR_TYPE_SPECIFIER - 48)) |
                (1 << (CalcParser.SHORT_TYPE_SPECIFIER - 48)) |
                (1 << (CalcParser.INT_TYPE_SPECIFIER - 48)) |
                (1 << (CalcParser.LONG_TYPE_SPECIFIER - 48)) |
                (1 << (CalcParser.FLOAT_TYPE_SPECIFIER - 48)) |
                (1 << (CalcParser.DOUBLE_TYPE_SPECIFIER - 48)) |
                (1 << (CalcParser.SIGNED_TYPE_SPECIFIER - 48)) |
                (1 << (CalcParser.UNSIGNED_TYPE_SPECIFIER - 48)) |
                (1 << (CalcParser.INTEGER - 48)) |
                (1 << (CalcParser.FLOAT - 48)) |
                (1 << (CalcParser.CHAR - 48)) |
                (1 << (CalcParser.STRING - 48)))) !==
              0) ||
          _la === CalcParser.IDENTIFIER
        ) {
          {
            {
              this.state = 678
              this.statement()
            }
          }
          this.state = 683
          this._errHandler.sync(this)
          _la = this._input.LA(1)
        }
        this.state = 684
        this.match(CalcParser.CLOSE_CURLY_BRACKET)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public if_statement(): If_statementContext {
    const _localctx: If_statementContext = new If_statementContext(this._ctx, this.state)
    this.enterRule(_localctx, 116, CalcParser.RULE_if_statement)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 686
        this.match(CalcParser.IF)
        this.state = 687
        this.match(CalcParser.OPEN_PARENTHESES)
        this.state = 688
        this.expression(0)
        this.state = 689
        this.match(CalcParser.CLOSE_PARENTHESES)
        this.state = 690
        _localctx._if_true = this.statement()
        this.state = 693
        this._errHandler.sync(this)
        switch (this.interpreter.adaptivePredict(this._input, 70, this._ctx)) {
          case 1:
            {
              this.state = 691
              this.match(CalcParser.ELSE)
              this.state = 692
              _localctx._if_false = this.statement()
            }
            break
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public switch_statement(): Switch_statementContext {
    const _localctx: Switch_statementContext = new Switch_statementContext(this._ctx, this.state)
    this.enterRule(_localctx, 118, CalcParser.RULE_switch_statement)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 695
        this.match(CalcParser.SWITCH)
        this.state = 696
        this.match(CalcParser.OPEN_PARENTHESES)
        this.state = 697
        this.expression(0)
        this.state = 698
        this.match(CalcParser.CLOSE_PARENTHESES)
        this.state = 699
        this.switch_body()
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public switch_body(): Switch_bodyContext {
    const _localctx: Switch_bodyContext = new Switch_bodyContext(this._ctx, this.state)
    this.enterRule(_localctx, 120, CalcParser.RULE_switch_body)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 701
        this.match(CalcParser.OPEN_CURLY_BRACKET)
        this.state = 705
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (_la === CalcParser.CASE) {
          {
            {
              this.state = 702
              this.switch_case_body()
            }
          }
          this.state = 707
          this._errHandler.sync(this)
          _la = this._input.LA(1)
        }
        this.state = 709
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        if (_la === CalcParser.DEFAULT) {
          {
            this.state = 708
            this.switch_default_body()
          }
        }

        this.state = 711
        this.match(CalcParser.CLOSE_CURLY_BRACKET)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public switch_case_body(): Switch_case_bodyContext {
    const _localctx: Switch_case_bodyContext = new Switch_case_bodyContext(this._ctx, this.state)
    this.enterRule(_localctx, 122, CalcParser.RULE_switch_case_body)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 713
        this.match(CalcParser.CASE)
        this.state = 714
        this.expression(0)
        this.state = 715
        this.match(CalcParser.COLON)
        this.state = 719
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << CalcParser.ASTERICK) |
                (1 << CalcParser.PLUS) |
                (1 << CalcParser.MINUS) |
                (1 << CalcParser.AMPERSAND) |
                (1 << CalcParser.TILDA) |
                (1 << CalcParser.EXCLAMATION_MARK) |
                (1 << CalcParser.OPEN_PARENTHESES) |
                (1 << CalcParser.OPEN_CURLY_BRACKET) |
                (1 << CalcParser.INCREMENT) |
                (1 << CalcParser.DECREMENT))) !==
              0) ||
          (((_la - 48) & ~0x1f) === 0 &&
            ((1 << (_la - 48)) &
              ((1 << (CalcParser.SIZE_OF - 48)) |
                (1 << (CalcParser.IF - 48)) |
                (1 << (CalcParser.SWITCH - 48)) |
                (1 << (CalcParser.WHILE - 48)) |
                (1 << (CalcParser.DO - 48)) |
                (1 << (CalcParser.FOR - 48)) |
                (1 << (CalcParser.GOTO - 48)) |
                (1 << (CalcParser.CONTINUE - 48)) |
                (1 << (CalcParser.BREAK - 48)) |
                (1 << (CalcParser.RETURN - 48)) |
                (1 << (CalcParser.STRUCT - 48)) |
                (1 << (CalcParser.UNION - 48)) |
                (1 << (CalcParser.VOID_TYPE_SPECIFIER - 48)) |
                (1 << (CalcParser.CHAR_TYPE_SPECIFIER - 48)) |
                (1 << (CalcParser.SHORT_TYPE_SPECIFIER - 48)) |
                (1 << (CalcParser.INT_TYPE_SPECIFIER - 48)) |
                (1 << (CalcParser.LONG_TYPE_SPECIFIER - 48)) |
                (1 << (CalcParser.FLOAT_TYPE_SPECIFIER - 48)) |
                (1 << (CalcParser.DOUBLE_TYPE_SPECIFIER - 48)) |
                (1 << (CalcParser.SIGNED_TYPE_SPECIFIER - 48)) |
                (1 << (CalcParser.UNSIGNED_TYPE_SPECIFIER - 48)) |
                (1 << (CalcParser.INTEGER - 48)) |
                (1 << (CalcParser.FLOAT - 48)) |
                (1 << (CalcParser.CHAR - 48)) |
                (1 << (CalcParser.STRING - 48)))) !==
              0) ||
          _la === CalcParser.IDENTIFIER
        ) {
          {
            {
              this.state = 716
              this.statement()
            }
          }
          this.state = 721
          this._errHandler.sync(this)
          _la = this._input.LA(1)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public switch_default_body(): Switch_default_bodyContext {
    const _localctx: Switch_default_bodyContext = new Switch_default_bodyContext(
      this._ctx,
      this.state,
    )
    this.enterRule(_localctx, 124, CalcParser.RULE_switch_default_body)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 722
        this.match(CalcParser.DEFAULT)
        this.state = 723
        this.match(CalcParser.COLON)
        this.state = 727
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << CalcParser.ASTERICK) |
                (1 << CalcParser.PLUS) |
                (1 << CalcParser.MINUS) |
                (1 << CalcParser.AMPERSAND) |
                (1 << CalcParser.TILDA) |
                (1 << CalcParser.EXCLAMATION_MARK) |
                (1 << CalcParser.OPEN_PARENTHESES) |
                (1 << CalcParser.OPEN_CURLY_BRACKET) |
                (1 << CalcParser.INCREMENT) |
                (1 << CalcParser.DECREMENT))) !==
              0) ||
          (((_la - 48) & ~0x1f) === 0 &&
            ((1 << (_la - 48)) &
              ((1 << (CalcParser.SIZE_OF - 48)) |
                (1 << (CalcParser.IF - 48)) |
                (1 << (CalcParser.SWITCH - 48)) |
                (1 << (CalcParser.WHILE - 48)) |
                (1 << (CalcParser.DO - 48)) |
                (1 << (CalcParser.FOR - 48)) |
                (1 << (CalcParser.GOTO - 48)) |
                (1 << (CalcParser.CONTINUE - 48)) |
                (1 << (CalcParser.BREAK - 48)) |
                (1 << (CalcParser.RETURN - 48)) |
                (1 << (CalcParser.STRUCT - 48)) |
                (1 << (CalcParser.UNION - 48)) |
                (1 << (CalcParser.VOID_TYPE_SPECIFIER - 48)) |
                (1 << (CalcParser.CHAR_TYPE_SPECIFIER - 48)) |
                (1 << (CalcParser.SHORT_TYPE_SPECIFIER - 48)) |
                (1 << (CalcParser.INT_TYPE_SPECIFIER - 48)) |
                (1 << (CalcParser.LONG_TYPE_SPECIFIER - 48)) |
                (1 << (CalcParser.FLOAT_TYPE_SPECIFIER - 48)) |
                (1 << (CalcParser.DOUBLE_TYPE_SPECIFIER - 48)) |
                (1 << (CalcParser.SIGNED_TYPE_SPECIFIER - 48)) |
                (1 << (CalcParser.UNSIGNED_TYPE_SPECIFIER - 48)) |
                (1 << (CalcParser.INTEGER - 48)) |
                (1 << (CalcParser.FLOAT - 48)) |
                (1 << (CalcParser.CHAR - 48)) |
                (1 << (CalcParser.STRING - 48)))) !==
              0) ||
          _la === CalcParser.IDENTIFIER
        ) {
          {
            {
              this.state = 724
              this.statement()
            }
          }
          this.state = 729
          this._errHandler.sync(this)
          _la = this._input.LA(1)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public while_statement(): While_statementContext {
    const _localctx: While_statementContext = new While_statementContext(this._ctx, this.state)
    this.enterRule(_localctx, 126, CalcParser.RULE_while_statement)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 730
        this.match(CalcParser.WHILE)
        this.state = 731
        this.match(CalcParser.OPEN_PARENTHESES)
        this.state = 732
        this.expression(0)
        this.state = 733
        this.match(CalcParser.CLOSE_PARENTHESES)
        this.state = 734
        this.statement()
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public do_statement(): Do_statementContext {
    const _localctx: Do_statementContext = new Do_statementContext(this._ctx, this.state)
    this.enterRule(_localctx, 128, CalcParser.RULE_do_statement)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 736
        this.match(CalcParser.DO)
        this.state = 737
        this.statement()
        this.state = 738
        this.match(CalcParser.WHILE)
        this.state = 739
        this.match(CalcParser.OPEN_PARENTHESES)
        this.state = 740
        this.expression(0)
        this.state = 741
        this.match(CalcParser.CLOSE_PARENTHESES)
        this.state = 742
        this.end_statement_delimiter()
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public for_statement(): For_statementContext {
    const _localctx: For_statementContext = new For_statementContext(this._ctx, this.state)
    this.enterRule(_localctx, 130, CalcParser.RULE_for_statement)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 744
        this.match(CalcParser.FOR)
        this.state = 745
        this.match(CalcParser.OPEN_PARENTHESES)
        this.state = 747
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        if (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << CalcParser.ASTERICK) |
                (1 << CalcParser.PLUS) |
                (1 << CalcParser.MINUS) |
                (1 << CalcParser.AMPERSAND) |
                (1 << CalcParser.TILDA) |
                (1 << CalcParser.EXCLAMATION_MARK) |
                (1 << CalcParser.OPEN_PARENTHESES) |
                (1 << CalcParser.INCREMENT) |
                (1 << CalcParser.DECREMENT))) !==
              0) ||
          (((_la - 48) & ~0x1f) === 0 &&
            ((1 << (_la - 48)) &
              ((1 << (CalcParser.SIZE_OF - 48)) |
                (1 << (CalcParser.STRUCT - 48)) |
                (1 << (CalcParser.UNION - 48)) |
                (1 << (CalcParser.VOID_TYPE_SPECIFIER - 48)) |
                (1 << (CalcParser.CHAR_TYPE_SPECIFIER - 48)) |
                (1 << (CalcParser.SHORT_TYPE_SPECIFIER - 48)) |
                (1 << (CalcParser.INT_TYPE_SPECIFIER - 48)) |
                (1 << (CalcParser.LONG_TYPE_SPECIFIER - 48)) |
                (1 << (CalcParser.FLOAT_TYPE_SPECIFIER - 48)) |
                (1 << (CalcParser.DOUBLE_TYPE_SPECIFIER - 48)) |
                (1 << (CalcParser.SIGNED_TYPE_SPECIFIER - 48)) |
                (1 << (CalcParser.UNSIGNED_TYPE_SPECIFIER - 48)) |
                (1 << (CalcParser.INTEGER - 48)) |
                (1 << (CalcParser.FLOAT - 48)) |
                (1 << (CalcParser.CHAR - 48)) |
                (1 << (CalcParser.STRING - 48)))) !==
              0) ||
          _la === CalcParser.IDENTIFIER
        ) {
          {
            this.state = 746
            _localctx._init = this.for_init_declaration()
          }
        }

        this.state = 749
        this.match(CalcParser.SEMICOLON)
        this.state = 751
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        if (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << CalcParser.ASTERICK) |
                (1 << CalcParser.PLUS) |
                (1 << CalcParser.MINUS) |
                (1 << CalcParser.AMPERSAND) |
                (1 << CalcParser.TILDA) |
                (1 << CalcParser.EXCLAMATION_MARK) |
                (1 << CalcParser.OPEN_PARENTHESES) |
                (1 << CalcParser.INCREMENT) |
                (1 << CalcParser.DECREMENT))) !==
              0) ||
          (((_la - 48) & ~0x1f) === 0 &&
            ((1 << (_la - 48)) &
              ((1 << (CalcParser.SIZE_OF - 48)) |
                (1 << (CalcParser.INTEGER - 48)) |
                (1 << (CalcParser.FLOAT - 48)) |
                (1 << (CalcParser.CHAR - 48)) |
                (1 << (CalcParser.STRING - 48)))) !==
              0) ||
          _la === CalcParser.IDENTIFIER
        ) {
          {
            this.state = 750
            _localctx._test = this.expression(0)
          }
        }

        this.state = 753
        this.match(CalcParser.SEMICOLON)
        this.state = 755
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        if (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << CalcParser.ASTERICK) |
                (1 << CalcParser.PLUS) |
                (1 << CalcParser.MINUS) |
                (1 << CalcParser.AMPERSAND) |
                (1 << CalcParser.TILDA) |
                (1 << CalcParser.EXCLAMATION_MARK) |
                (1 << CalcParser.OPEN_PARENTHESES) |
                (1 << CalcParser.INCREMENT) |
                (1 << CalcParser.DECREMENT))) !==
              0) ||
          (((_la - 48) & ~0x1f) === 0 &&
            ((1 << (_la - 48)) &
              ((1 << (CalcParser.SIZE_OF - 48)) |
                (1 << (CalcParser.INTEGER - 48)) |
                (1 << (CalcParser.FLOAT - 48)) |
                (1 << (CalcParser.CHAR - 48)) |
                (1 << (CalcParser.STRING - 48)))) !==
              0) ||
          _la === CalcParser.IDENTIFIER
        ) {
          {
            this.state = 754
            _localctx._update = this.expression(0)
          }
        }

        this.state = 757
        this.match(CalcParser.CLOSE_PARENTHESES)
        this.state = 758
        this.statement()
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public for_init_declaration(): For_init_declarationContext {
    let _localctx: For_init_declarationContext = new For_init_declarationContext(
      this._ctx,
      this.state,
    )
    this.enterRule(_localctx, 132, CalcParser.RULE_for_init_declaration)
    try {
      this.state = 764
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case CalcParser.STRUCT:
        case CalcParser.UNION:
        case CalcParser.VOID_TYPE_SPECIFIER:
        case CalcParser.CHAR_TYPE_SPECIFIER:
        case CalcParser.SHORT_TYPE_SPECIFIER:
        case CalcParser.INT_TYPE_SPECIFIER:
        case CalcParser.LONG_TYPE_SPECIFIER:
        case CalcParser.FLOAT_TYPE_SPECIFIER:
        case CalcParser.DOUBLE_TYPE_SPECIFIER:
        case CalcParser.SIGNED_TYPE_SPECIFIER:
        case CalcParser.UNSIGNED_TYPE_SPECIFIER:
          _localctx = new ForInitDeclarationTypeDeclarationContext(_localctx)
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 760
            this.declaration_specifiers()
            this.state = 761
            this.init_declarator_list()
          }
          break
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
        case CalcParser.STRING:
        case CalcParser.IDENTIFIER:
          _localctx = new ForInitDeclarationTypeExpressionContext(_localctx)
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 763
            this.expression(0)
          }
          break
        default:
          throw new NoViableAltException(this)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public goto_statement(): Goto_statementContext {
    const _localctx: Goto_statementContext = new Goto_statementContext(this._ctx, this.state)
    this.enterRule(_localctx, 134, CalcParser.RULE_goto_statement)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 766
        this.match(CalcParser.GOTO)
        this.state = 767
        this.identifier()
        this.state = 768
        this.end_statement_delimiter()
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public continue_statement(): Continue_statementContext {
    const _localctx: Continue_statementContext = new Continue_statementContext(
      this._ctx,
      this.state,
    )
    this.enterRule(_localctx, 136, CalcParser.RULE_continue_statement)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 770
        this.match(CalcParser.CONTINUE)
        this.state = 771
        this.end_statement_delimiter()
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public break_statement(): Break_statementContext {
    const _localctx: Break_statementContext = new Break_statementContext(this._ctx, this.state)
    this.enterRule(_localctx, 138, CalcParser.RULE_break_statement)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 773
        this.match(CalcParser.BREAK)
        this.state = 774
        this.end_statement_delimiter()
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public return_statement(): Return_statementContext {
    const _localctx: Return_statementContext = new Return_statementContext(this._ctx, this.state)
    this.enterRule(_localctx, 140, CalcParser.RULE_return_statement)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 776
        this.match(CalcParser.RETURN)
        this.state = 778
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        if (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << CalcParser.ASTERICK) |
                (1 << CalcParser.PLUS) |
                (1 << CalcParser.MINUS) |
                (1 << CalcParser.AMPERSAND) |
                (1 << CalcParser.TILDA) |
                (1 << CalcParser.EXCLAMATION_MARK) |
                (1 << CalcParser.OPEN_PARENTHESES) |
                (1 << CalcParser.INCREMENT) |
                (1 << CalcParser.DECREMENT))) !==
              0) ||
          (((_la - 48) & ~0x1f) === 0 &&
            ((1 << (_la - 48)) &
              ((1 << (CalcParser.SIZE_OF - 48)) |
                (1 << (CalcParser.INTEGER - 48)) |
                (1 << (CalcParser.FLOAT - 48)) |
                (1 << (CalcParser.CHAR - 48)) |
                (1 << (CalcParser.STRING - 48)))) !==
              0) ||
          _la === CalcParser.IDENTIFIER
        ) {
          {
            this.state = 777
            this.expression(0)
          }
        }

        this.state = 780
        this.end_statement_delimiter()
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }

  public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
    switch (ruleIndex) {
      case 12:
        return this.parameter_list_sempred(_localctx as Parameter_listContext, predIndex)

      case 18:
        return this.struct_or_union_declarator_list_sempred(
          _localctx as Struct_or_union_declarator_listContext,
          predIndex,
        )

      case 27:
        return this.direct_declarator_sempred(_localctx as Direct_declaratorContext, predIndex)

      case 29:
        return this.initializer_list_sempred(_localctx as Initializer_listContext, predIndex)

      case 31:
        return this.expression_sempred(_localctx as ExpressionContext, predIndex)

      case 35:
        return this.logical_or_expression_sempred(
          _localctx as Logical_or_expressionContext,
          predIndex,
        )

      case 36:
        return this.logical_and_expression_sempred(
          _localctx as Logical_and_expressionContext,
          predIndex,
        )

      case 37:
        return this.inclusive_or_expression_sempred(
          _localctx as Inclusive_or_expressionContext,
          predIndex,
        )

      case 38:
        return this.exclusive_or_expression_sempred(
          _localctx as Exclusive_or_expressionContext,
          predIndex,
        )

      case 39:
        return this.and_expression_sempred(_localctx as And_expressionContext, predIndex)

      case 40:
        return this.equality_expression_sempred(_localctx as Equality_expressionContext, predIndex)

      case 41:
        return this.relational_expression_sempred(
          _localctx as Relational_expressionContext,
          predIndex,
        )

      case 42:
        return this.shift_expression_sempred(_localctx as Shift_expressionContext, predIndex)

      case 43:
        return this.additive_expression_sempred(_localctx as Additive_expressionContext, predIndex)

      case 44:
        return this.multiplicative_expression_sempred(
          _localctx as Multiplicative_expressionContext,
          predIndex,
        )

      case 48:
        return this.direct_abstract_declarator_sempred(
          _localctx as Direct_abstract_declaratorContext,
          predIndex,
        )

      case 50:
        return this.postfix_expression_sempred(_localctx as Postfix_expressionContext, predIndex)
    }
    return true
  }
  private parameter_list_sempred(_localctx: Parameter_listContext, predIndex: number): boolean {
    switch (predIndex) {
      case 0:
        return this.precpred(this._ctx, 1)
    }
    return true
  }
  private struct_or_union_declarator_list_sempred(
    _localctx: Struct_or_union_declarator_listContext,
    predIndex: number,
  ): boolean {
    switch (predIndex) {
      case 1:
        return this.precpred(this._ctx, 1)
    }
    return true
  }
  private direct_declarator_sempred(
    _localctx: Direct_declaratorContext,
    predIndex: number,
  ): boolean {
    switch (predIndex) {
      case 2:
        return this.precpred(this._ctx, 3)

      case 3:
        return this.precpred(this._ctx, 2)

      case 4:
        return this.precpred(this._ctx, 1)
    }
    return true
  }
  private initializer_list_sempred(_localctx: Initializer_listContext, predIndex: number): boolean {
    switch (predIndex) {
      case 5:
        return this.precpred(this._ctx, 1)
    }
    return true
  }
  private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
    switch (predIndex) {
      case 6:
        return this.precpred(this._ctx, 1)
    }
    return true
  }
  private logical_or_expression_sempred(
    _localctx: Logical_or_expressionContext,
    predIndex: number,
  ): boolean {
    switch (predIndex) {
      case 7:
        return this.precpred(this._ctx, 1)
    }
    return true
  }
  private logical_and_expression_sempred(
    _localctx: Logical_and_expressionContext,
    predIndex: number,
  ): boolean {
    switch (predIndex) {
      case 8:
        return this.precpred(this._ctx, 1)
    }
    return true
  }
  private inclusive_or_expression_sempred(
    _localctx: Inclusive_or_expressionContext,
    predIndex: number,
  ): boolean {
    switch (predIndex) {
      case 9:
        return this.precpred(this._ctx, 1)
    }
    return true
  }
  private exclusive_or_expression_sempred(
    _localctx: Exclusive_or_expressionContext,
    predIndex: number,
  ): boolean {
    switch (predIndex) {
      case 10:
        return this.precpred(this._ctx, 1)
    }
    return true
  }
  private and_expression_sempred(_localctx: And_expressionContext, predIndex: number): boolean {
    switch (predIndex) {
      case 11:
        return this.precpred(this._ctx, 1)
    }
    return true
  }
  private equality_expression_sempred(
    _localctx: Equality_expressionContext,
    predIndex: number,
  ): boolean {
    switch (predIndex) {
      case 12:
        return this.precpred(this._ctx, 2)

      case 13:
        return this.precpred(this._ctx, 1)
    }
    return true
  }
  private relational_expression_sempred(
    _localctx: Relational_expressionContext,
    predIndex: number,
  ): boolean {
    switch (predIndex) {
      case 14:
        return this.precpred(this._ctx, 4)

      case 15:
        return this.precpred(this._ctx, 3)

      case 16:
        return this.precpred(this._ctx, 2)

      case 17:
        return this.precpred(this._ctx, 1)
    }
    return true
  }
  private shift_expression_sempred(_localctx: Shift_expressionContext, predIndex: number): boolean {
    switch (predIndex) {
      case 18:
        return this.precpred(this._ctx, 2)

      case 19:
        return this.precpred(this._ctx, 1)
    }
    return true
  }
  private additive_expression_sempred(
    _localctx: Additive_expressionContext,
    predIndex: number,
  ): boolean {
    switch (predIndex) {
      case 20:
        return this.precpred(this._ctx, 2)

      case 21:
        return this.precpred(this._ctx, 1)
    }
    return true
  }
  private multiplicative_expression_sempred(
    _localctx: Multiplicative_expressionContext,
    predIndex: number,
  ): boolean {
    switch (predIndex) {
      case 22:
        return this.precpred(this._ctx, 3)

      case 23:
        return this.precpred(this._ctx, 2)

      case 24:
        return this.precpred(this._ctx, 1)
    }
    return true
  }
  private direct_abstract_declarator_sempred(
    _localctx: Direct_abstract_declaratorContext,
    predIndex: number,
  ): boolean {
    switch (predIndex) {
      case 25:
        return this.precpred(this._ctx, 2)

      case 26:
        return this.precpred(this._ctx, 1)
    }
    return true
  }
  private postfix_expression_sempred(
    _localctx: Postfix_expressionContext,
    predIndex: number,
  ): boolean {
    switch (predIndex) {
      case 27:
        return this.precpred(this._ctx, 6)

      case 28:
        return this.precpred(this._ctx, 5)

      case 29:
        return this.precpred(this._ctx, 4)

      case 30:
        return this.precpred(this._ctx, 3)

      case 31:
        return this.precpred(this._ctx, 2)

      case 32:
        return this.precpred(this._ctx, 1)
    }
    return true
  }

  private static readonly _serializedATNSegments: number = 2
  private static readonly _serializedATNSegment0: string =
    '\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03R\u0311\x04\x02' +
    '\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07' +
    '\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04' +
    '\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04' +
    '\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04' +
    '\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04' +
    '\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04"\t"\x04#' +
    "\t#\x04$\t$\x04%\t%\x04&\t&\x04'\t'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
    '\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044' +
    '\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04' +
    '=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04' +
    'F\tF\x04G\tG\x04H\tH\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03' +
    '\x05\x06\x05\x98\n\x05\r\x05\x0E\x05\x99\x03\x06\x03\x06\x03\x07\x03\x07' +
    '\x05\x07\xA0\n\x07\x03\x07\x03\x07\x05\x07\xA4\n\x07\x03\x07\x03\x07\x05' +
    '\x07\xA8\n\x07\x03\x07\x03\x07\x05\x07\xAC\n\x07\x03\x07\x03\x07\x03\x07' +
    '\x03\x07\x03\x07\x05\x07\xB3\n\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n' +
    '\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x07\v\xC3\n\v\f\v\x0E' +
    '\v\xC6\v\v\x03\f\x05\f\xC9\n\f\x03\f\x03\f\x07\f\xCD\n\f\f\f\x0E\f\xD0' +
    '\v\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\xD9\n\r\x03\x0E\x03' +
    '\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E\xE1\n\x0E\f\x0E\x0E\x0E\xE4' +
    '\v\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F' +
    '\xED\n\x0F\x03\x10\x03\x10\x05\x10\xF1\n\x10\x03\x10\x03\x10\x03\x10\x03' +
    '\x10\x06\x10\xF7\n\x10\r\x10\x0E\x10\xF8\x03\x10\x03\x10\x03\x10\x03\x10' +
    '\x05\x10\xFF\n\x10\x03\x11\x03\x11\x05\x11\u0103\n\x11\x03\x11\x03\x11' +
    '\x06\x11\u0107\n\x11\r\x11\x0E\x11\u0108\x03\x11\x03\x11\x03\x11\x03\x11' +
    '\x05\x11\u010F\n\x11\x03\x12\x03\x12\x03\x12\x03\x13\x07\x13\u0115\n\x13' +
    '\f\x13\x0E\x13\u0118\v\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03' +
    '\x14\x03\x14\x03\x14\x07\x14\u0122\n\x14\f\x14\x0E\x14\u0125\v\x14\x03' +
    '\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03' +
    '\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\u0136\n\x16\x03\x17' +
    '\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19' +
    '\x03\x1A\x03\x1A\x03\x1A\x07\x1A\u0145\n\x1A\f\x1A\x0E\x1A\u0148\v\x1A' +
    '\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u014D\n\x1B\x03\x1C\x05\x1C\u0150\n\x1C' +
    '\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D' +
    '\u015A\n\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u015F\n\x1D\x03\x1D\x03\x1D' +
    '\x03\x1D\x03\x1D\x05\x1D\u0165\n\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x07' +
    '\x1D\u016B\n\x1D\f\x1D\x0E\x1D\u016E\v\x1D\x03\x1D\x07\x1D\u0171\n\x1D' +
    '\f\x1D\x0E\x1D\u0174\v\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u017A' +
    '\n\x1E\x03\x1E\x03\x1E\x05\x1E\u017E\n\x1E\x03\x1F\x03\x1F\x03\x1F\x03' +
    '\x1F\x03\x1F\x03\x1F\x07\x1F\u0186\n\x1F\f\x1F\x0E\x1F\u0189\v\x1F\x03' +
    ' \x03 \x03 \x03!\x03!\x03!\x03!\x03!\x03!\x07!\u0194\n!\f!\x0E!\u0197' +
    '\v!\x03"\x03"\x03"\x03"\x03"\x05"\u019E\n"\x03#\x03#\x03$\x03$' +
    '\x03$\x03$\x03$\x03$\x03$\x05$\u01A9\n$\x03%\x03%\x03%\x03%\x03%\x03%' +
    '\x07%\u01B1\n%\f%\x0E%\u01B4\v%\x03&\x03&\x03&\x03&\x03&\x03&\x07&\u01BC' +
    "\n&\f&\x0E&\u01BF\v&\x03'\x03'\x03'\x03'\x03'\x03'\x07'\u01C7\n" +
    "'\f'\x0E'\u01CA\v'\x03(\x03(\x03(\x03(\x03(\x03(\x07(\u01D2\n(\f(" +
    '\x0E(\u01D5\v(\x03)\x03)\x03)\x03)\x03)\x03)\x07)\u01DD\n)\f)\x0E)\u01E0' +
    '\v)\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x07*\u01EB\n*\f*\x0E' +
    '*\u01EE\v*\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03' +
    '+\x03+\x03+\x03+\x07+\u01FF\n+\f+\x0E+\u0202\v+\x03,\x03,\x03,\x03,\x03' +
    ',\x03,\x03,\x03,\x03,\x07,\u020D\n,\f,\x0E,\u0210\v,\x03-\x03-\x03-\x03' +
    '-\x03-\x03-\x03-\x03-\x03-\x07-\u021B\n-\f-\x0E-\u021E\v-\x03.\x03.\x03' +
    '.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x07.\u022C\n.\f.\x0E.\u022F' +
    '\v.\x03/\x03/\x03/\x03/\x03/\x03/\x05/\u0237\n/\x030\x030\x050\u023B\n' +
    '0\x031\x031\x051\u023F\n1\x031\x051\u0242\n1\x032\x032\x032\x032\x032' +
    '\x032\x032\x052\u024B\n2\x032\x032\x032\x052\u0250\n2\x032\x052\u0253' +
    '\n2\x032\x032\x032\x052\u0258\n2\x032\x032\x032\x032\x052\u025E\n2\x03' +
    '2\x072\u0261\n2\f2\x0E2\u0264\v2\x033\x033\x033\x033\x033\x033\x033\x03' +
    '3\x033\x033\x033\x033\x033\x053\u0273\n3\x034\x034\x034\x034\x034\x03' +
    '4\x034\x034\x034\x034\x034\x054\u0280\n4\x034\x034\x034\x034\x034\x03' +
    '4\x034\x034\x034\x034\x034\x074\u028D\n4\f4\x0E4\u0290\v4\x035\x035\x03' +
    '5\x035\x035\x035\x035\x055\u0299\n5\x036\x036\x037\x037\x037\x057\u02A0' +
    '\n7\x038\x038\x039\x039\x03:\x03:\x03;\x03;\x07;\u02AA\n;\f;\x0E;\u02AD' +
    '\v;\x03;\x03;\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x05<\u02B8\n<\x03=\x03' +
    '=\x03=\x03=\x03=\x03=\x03>\x03>\x07>\u02C2\n>\f>\x0E>\u02C5\v>\x03>\x05' +
    '>\u02C8\n>\x03>\x03>\x03?\x03?\x03?\x03?\x07?\u02D0\n?\f?\x0E?\u02D3\v' +
    '?\x03@\x03@\x03@\x07@\u02D8\n@\f@\x0E@\u02DB\v@\x03A\x03A\x03A\x03A\x03' +
    'A\x03A\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x03C\x03C\x03C\x05C\u02EE' +
    '\nC\x03C\x03C\x05C\u02F2\nC\x03C\x03C\x05C\u02F6\nC\x03C\x03C\x03C\x03' +
    'D\x03D\x03D\x03D\x05D\u02FF\nD\x03E\x03E\x03E\x03E\x03F\x03F\x03F\x03' +
    'G\x03G\x03G\x03H\x03H\x05H\u030D\nH\x03H\x03H\x03H\x02\x02\x13\x1A&8<' +
    '@HJLNPRTVXZbfI\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02' +
    '\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02"\x02$\x02' +
    '&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02' +
    'B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02' +
    '^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02' +
    'z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02' +
    '\x8E\x02\x02\x07\x05\x02\x04\x04\x06\x07\t\v\x03\x02\x1B%\x03\x02JK\x03' +
    '\x02LM\x04\x0222RR\x02\u033D\x02\x90\x03\x02\x02\x02\x04\x92\x03\x02\x02' +
    '\x02\x06\x94\x03\x02\x02\x02\b\x97\x03\x02\x02\x02\n\x9B\x03\x02\x02\x02' +
    '\f\xB2\x03\x02\x02\x02\x0E\xB4\x03\x02\x02\x02\x10\xB6\x03\x02\x02\x02' +
    '\x12\xB8\x03\x02\x02\x02\x14\xC4\x03\x02\x02\x02\x16\xC8\x03\x02\x02\x02' +
    '\x18\xD8\x03\x02\x02\x02\x1A\xDA\x03\x02\x02\x02\x1C\xEC\x03\x02\x02\x02' +
    '\x1E\xFE\x03\x02\x02\x02 \u010E\x03\x02\x02\x02"\u0110\x03\x02\x02\x02' +
    '$\u0116\x03\x02\x02\x02&\u011B\x03\x02\x02\x02(\u0126\x03\x02\x02\x02' +
    '*\u0135\x03\x02\x02\x02,\u0137\x03\x02\x02\x02.\u013B\x03\x02\x02\x02' +
    '0\u013F\x03\x02\x02\x022\u0141\x03\x02\x02\x024\u0149\x03\x02\x02\x02' +
    '6\u014F\x03\x02\x02\x028\u0159\x03\x02\x02\x02:\u017D\x03\x02\x02\x02' +
    '<\u017F\x03\x02\x02\x02>\u018A\x03\x02\x02\x02@\u018D\x03\x02\x02\x02' +
    'B\u019D\x03\x02\x02\x02D\u019F\x03\x02\x02\x02F\u01A8\x03\x02\x02\x02' +
    'H\u01AA\x03\x02\x02\x02J\u01B5\x03\x02\x02\x02L\u01C0\x03\x02\x02\x02' +
    'N\u01CB\x03\x02\x02\x02P\u01D6\x03\x02\x02\x02R\u01E1\x03\x02\x02\x02' +
    'T\u01EF\x03\x02\x02\x02V\u0203\x03\x02\x02\x02X\u0211\x03\x02\x02\x02' +
    'Z\u021F\x03\x02\x02\x02\\\u0236\x03\x02\x02\x02^\u0238\x03\x02\x02\x02' +
    '`\u0241\x03\x02\x02\x02b\u0252\x03\x02\x02\x02d\u0272\x03\x02\x02\x02' +
    'f\u0274\x03\x02\x02\x02h\u0298\x03\x02\x02\x02j\u029A\x03\x02\x02\x02' +
    'l\u029F\x03\x02\x02\x02n\u02A1\x03\x02\x02\x02p\u02A3\x03\x02\x02\x02' +
    'r\u02A5\x03\x02\x02\x02t\u02A7\x03\x02\x02\x02v\u02B0\x03\x02\x02\x02' +
    'x\u02B9\x03\x02\x02\x02z\u02BF\x03\x02\x02\x02|\u02CB\x03\x02\x02\x02' +
    '~\u02D4\x03\x02\x02\x02\x80\u02DC\x03\x02\x02\x02\x82\u02E2\x03\x02\x02' +
    '\x02\x84\u02EA\x03\x02\x02\x02\x86\u02FE\x03\x02\x02\x02\x88\u0300\x03' +
    '\x02\x02\x02\x8A\u0304\x03\x02\x02\x02\x8C\u0307\x03\x02\x02\x02\x8E\u030A' +
    '\x03\x02\x02\x02\x90\x91\t\x02\x02\x02\x91\x03\x03\x02\x02\x02\x92\x93' +
    '\t\x03\x02\x02\x93\x05\x03\x02\x02\x02\x94\x95\x07\x0F\x02\x02\x95\x07' +
    '\x03\x02\x02\x02\x96\x98\x07\x04\x02\x02\x97\x96\x03\x02\x02\x02\x98\x99' +
    '\x03\x02\x02\x02\x99\x97\x03\x02\x02\x02\x99\x9A\x03\x02\x02\x02\x9A\t' +
    '\x03\x02\x02\x02\x9B\x9C\t\x04\x02\x02\x9C\v\x03\x02\x02\x02\x9D\xB3\x07' +
    'C\x02\x02\x9E\xA0\x05\n\x06\x02\x9F\x9E\x03\x02\x02\x02\x9F\xA0\x03\x02' +
    '\x02\x02\xA0\xA1\x03\x02\x02\x02\xA1\xB3\x07D\x02\x02\xA2\xA4\x05\n\x06' +
    '\x02\xA3\xA2\x03\x02\x02\x02\xA3\xA4\x03\x02\x02\x02\xA4\xA5\x03\x02\x02' +
    '\x02\xA5\xB3\x07E\x02\x02\xA6\xA8\x05\n\x06\x02\xA7\xA6\x03\x02\x02\x02' +
    '\xA7\xA8\x03\x02\x02\x02\xA8\xA9\x03\x02\x02\x02\xA9\xB3\x07F\x02\x02' +
    '\xAA\xAC\x05\n\x06\x02\xAB\xAA\x03\x02\x02\x02\xAB\xAC\x03\x02\x02\x02' +
    '\xAC\xAD\x03\x02\x02\x02\xAD\xB3\x07G\x02\x02\xAE\xB3\x07H\x02\x02\xAF' +
    '\xB3\x07I\x02\x02\xB0\xB3\x05\x1E\x10\x02\xB1\xB3\x05 \x11\x02\xB2\x9D' +
    '\x03\x02\x02\x02\xB2\x9F\x03\x02\x02\x02\xB2\xA3\x03\x02\x02\x02\xB2\xA7' +
    '\x03\x02\x02\x02\xB2\xAB\x03\x02\x02\x02\xB2\xAE\x03\x02\x02\x02\xB2\xAF' +
    '\x03\x02\x02\x02\xB2\xB0\x03\x02\x02\x02\xB2\xB1\x03\x02\x02\x02\xB3\r' +
    '\x03\x02\x02\x02\xB4\xB5\t\x05\x02\x02\xB5\x0F\x03\x02\x02\x02\xB6\xB7' +
    '\t\x06\x02\x02\xB7\x11\x03\x02\x02\x02\xB8\xB9\x05\x14\v\x02\xB9\x13\x03' +
    '\x02\x02\x02\xBA\xC3\x05\x16\f\x02\xBB\xBC\x05\x1E\x10\x02\xBC\xBD\x05' +
    '\x06\x04\x02\xBD\xC3\x03\x02\x02\x02\xBE\xBF\x05 \x11\x02\xBF\xC0\x05' +
    '\x06\x04\x02\xC0\xC3\x03\x02\x02\x02\xC1\xC3\x05.\x18\x02\xC2\xBA\x03' +
    '\x02\x02\x02\xC2\xBB\x03\x02\x02\x02\xC2\xBE\x03\x02\x02\x02\xC2\xC1\x03' +
    '\x02\x02\x02\xC3\xC6\x03\x02\x02\x02\xC4\xC2\x03\x02\x02\x02\xC4\xC5\x03' +
    '\x02\x02\x02\xC5\x15\x03\x02\x02\x02\xC6\xC4\x03\x02\x02\x02\xC7\xC9\x05' +
    '0\x19\x02\xC8\xC7\x03\x02\x02\x02\xC8\xC9\x03\x02\x02\x02\xC9\xCA\x03' +
    '\x02\x02\x02\xCA\xCE\x056\x1C\x02\xCB\xCD\x05.\x18\x02\xCC\xCB\x03\x02' +
    '\x02\x02\xCD\xD0\x03\x02\x02\x02\xCE\xCC\x03\x02\x02\x02\xCE\xCF\x03\x02' +
    '\x02\x02\xCF\xD1\x03\x02\x02\x02\xD0\xCE\x03\x02\x02\x02\xD1\xD2\x05t' +
    ';\x02\xD2\x17\x03\x02\x02\x02\xD3\xD9\x05\x1A\x0E\x02\xD4\xD5\x05\x1A' +
    '\x0E\x02\xD5\xD6\x07\x10\x02\x02\xD6\xD7\x071\x02\x02\xD7\xD9\x03\x02' +
    '\x02\x02\xD8\xD3\x03\x02\x02\x02\xD8\xD4\x03\x02\x02\x02\xD9\x19\x03\x02' +
    '\x02\x02\xDA\xDB\b\x0E\x01\x02\xDB\xDC\x05\x1C\x0F\x02\xDC\xE2\x03\x02' +
    '\x02\x02\xDD\xDE\f\x03\x02\x02\xDE\xDF\x07\x10\x02\x02\xDF\xE1\x05\x1C' +
    '\x0F\x02\xE0\xDD\x03\x02\x02\x02\xE1\xE4\x03\x02\x02\x02\xE2\xE0\x03\x02' +
    '\x02\x02\xE2\xE3\x03\x02\x02\x02\xE3\x1B\x03\x02\x02\x02\xE4\xE2\x03\x02' +
    '\x02\x02\xE5\xE6\x050\x19\x02\xE6\xE7\x056\x1C\x02\xE7\xED\x03\x02\x02' +
    '\x02\xE8\xE9\x050\x19\x02\xE9\xEA\x05`1\x02\xEA\xED\x03\x02\x02\x02\xEB' +
    '\xED\x050\x19\x02\xEC\xE5\x03\x02\x02\x02\xEC\xE8\x03\x02\x02\x02\xEC' +
    '\xEB\x03\x02\x02\x02\xED\x1D\x03\x02\x02\x02\xEE\xF0\x07?\x02\x02\xEF' +
    '\xF1\x05\x10\t\x02\xF0\xEF\x03\x02\x02\x02\xF0\xF1\x03\x02\x02\x02\xF1' +
    '\xF2\x03\x02\x02\x02\xF2\xF6\x07\x17\x02\x02\xF3\xF4\x05"\x12\x02\xF4' +
    '\xF5\x05\x06\x04\x02\xF5\xF7\x03\x02\x02\x02\xF6\xF3\x03\x02\x02\x02\xF7' +
    '\xF8\x03\x02\x02\x02\xF8\xF6\x03\x02\x02\x02\xF8\xF9\x03\x02\x02\x02\xF9' +
    '\xFA\x03\x02\x02\x02\xFA\xFB\x07\x18\x02\x02\xFB\xFF\x03\x02\x02\x02\xFC' +
    '\xFD\x07?\x02\x02\xFD\xFF\x05\x10\t\x02\xFE\xEE\x03\x02\x02\x02\xFE\xFC' +
    '\x03\x02\x02\x02\xFF\x1F\x03\x02\x02\x02\u0100\u0102\x07@\x02\x02\u0101' +
    '\u0103\x05\x10\t\x02\u0102\u0101\x03\x02\x02\x02\u0102\u0103\x03\x02\x02' +
    '\x02\u0103\u0104\x03\x02\x02\x02\u0104\u0106\x07\x17\x02\x02\u0105\u0107' +
    '\x05"\x12\x02\u0106\u0105\x03\x02\x02\x02\u0107\u0108\x03\x02\x02\x02' +
    '\u0108\u0106\x03\x02\x02\x02\u0108\u0109\x03\x02\x02\x02\u0109\u010A\x03' +
    '\x02\x02\x02\u010A\u010B\x07\x18\x02\x02\u010B\u010F\x03\x02\x02\x02\u010C' +
    '\u010D\x07@\x02\x02\u010D\u010F\x05\x10\t\x02\u010E\u0100\x03\x02\x02' +
    '\x02\u010E\u010C\x03\x02\x02\x02\u010F!\x03\x02\x02\x02\u0110\u0111\x05' +
    '$\x13\x02\u0111\u0112\x05&\x14\x02\u0112#\x03\x02\x02\x02\u0113\u0115' +
    '\x05\x0E\b\x02\u0114\u0113\x03\x02\x02\x02\u0115\u0118\x03\x02\x02\x02' +
    '\u0116\u0114\x03\x02\x02\x02\u0116\u0117\x03\x02\x02\x02\u0117\u0119\x03' +
    '\x02\x02\x02\u0118\u0116\x03\x02\x02\x02\u0119\u011A\x05\f\x07\x02\u011A' +
    '%\x03\x02\x02\x02\u011B\u011C\b\x14\x01\x02\u011C\u011D\x05(\x15\x02\u011D' +
    '\u0123\x03\x02\x02\x02\u011E\u011F\f\x03\x02\x02\u011F\u0120\x07\x10\x02' +
    '\x02\u0120\u0122\x05(\x15\x02\u0121\u011E\x03\x02\x02\x02\u0122\u0125' +
    '\x03\x02\x02\x02\u0123\u0121\x03\x02\x02\x02\u0123\u0124\x03\x02\x02\x02' +
    "\u0124'\x03\x02\x02\x02\u0125\u0123\x03\x02\x02\x02\u0126\u0127\x056" +
    '\x1C\x02\u0127)\x03\x02\x02\x02\u0128\u0136\x05,\x17\x02\u0129\u0136\x05' +
    '.\x18\x02\u012A\u0136\x05> \x02\u012B\u0136\x05t;\x02\u012C\u0136\x05' +
    'v<\x02\u012D\u0136\x05x=\x02\u012E\u0136\x05\x80A\x02\u012F\u0136\x05' +
    '\x82B\x02\u0130\u0136\x05\x84C\x02\u0131\u0136\x05\x88E\x02\u0132\u0136' +
    '\x05\x8AF\x02\u0133\u0136\x05\x8CG\x02\u0134\u0136\x05\x8EH\x02\u0135' +
    '\u0128\x03\x02\x02\x02\u0135\u0129\x03\x02\x02\x02\u0135\u012A\x03\x02' +
    '\x02\x02\u0135\u012B\x03\x02\x02\x02\u0135\u012C\x03\x02\x02\x02\u0135' +
    '\u012D\x03\x02\x02\x02\u0135\u012E\x03\x02\x02\x02\u0135\u012F\x03\x02' +
    '\x02\x02\u0135\u0130\x03\x02\x02\x02\u0135\u0131\x03\x02\x02\x02\u0135' +
    '\u0132\x03\x02\x02\x02\u0135\u0133\x03\x02\x02\x02\u0135\u0134\x03\x02' +
    '\x02\x02\u0136+\x03\x02\x02\x02\u0137\u0138\x05\x10\t\x02\u0138\u0139' +
    '\x07\x0E\x02\x02\u0139\u013A\x05*\x16\x02\u013A-\x03\x02\x02\x02\u013B' +
    '\u013C\x050\x19\x02\u013C\u013D\x052\x1A\x02\u013D\u013E\x05\x06\x04\x02' +
    '\u013E/\x03\x02\x02\x02\u013F\u0140\x05\f\x07\x02\u01401\x03\x02\x02\x02' +
    '\u0141\u0146\x054\x1B\x02\u0142\u0143\x07\x10\x02\x02\u0143\u0145\x05' +
    '4\x1B\x02\u0144\u0142\x03\x02\x02\x02\u0145\u0148\x03\x02\x02\x02\u0146' +
    '\u0144\x03\x02\x02\x02\u0146\u0147\x03\x02\x02\x02\u01473\x03\x02\x02' +
    '\x02\u0148\u0146\x03\x02\x02\x02\u0149\u014C\x056\x1C\x02\u014A\u014B' +
    '\x07\x1B\x02\x02\u014B\u014D\x05:\x1E\x02\u014C\u014A\x03\x02\x02\x02' +
    '\u014C\u014D\x03\x02\x02\x02\u014D5\x03\x02\x02\x02\u014E\u0150\x05\b' +
    '\x05\x02\u014F\u014E\x03\x02\x02\x02\u014F\u0150\x03\x02\x02\x02\u0150' +
    '\u0151\x03\x02\x02\x02\u0151\u0152\x058\x1D\x02\u01527\x03\x02\x02\x02' +
    '\u0153\u0154\b\x1D\x01\x02\u0154\u015A\x05\x10\t\x02\u0155\u0156\x07\x13' +
    '\x02\x02\u0156\u0157\x056\x1C\x02\u0157\u0158\x07\x14\x02\x02\u0158\u015A' +
    '\x03\x02\x02\x02\u0159\u0153\x03\x02\x02\x02\u0159\u0155\x03\x02\x02\x02' +
    '\u015A\u0172\x03\x02\x02\x02\u015B\u015C\f\x05\x02\x02\u015C\u015E\x07' +
    '\x15\x02\x02\u015D\u015F\x05D#\x02\u015E\u015D\x03\x02\x02\x02\u015E\u015F' +
    '\x03\x02\x02\x02\u015F\u0160\x03\x02\x02\x02\u0160\u0171\x07\x16\x02\x02' +
    '\u0161\u0162\f\x04\x02\x02\u0162\u0164\x07\x13\x02\x02\u0163\u0165\x05' +
    '\x18\r\x02\u0164\u0163\x03\x02\x02\x02\u0164\u0165\x03\x02\x02\x02\u0165' +
    '\u0166\x03\x02\x02\x02\u0166\u0171\x07\x14\x02\x02\u0167\u0168\f\x03\x02' +
    '\x02\u0168\u016C\x07\x13\x02\x02\u0169\u016B\x05\x10\t\x02\u016A\u0169' +
    '\x03\x02\x02\x02\u016B\u016E\x03\x02\x02\x02\u016C\u016A\x03\x02\x02\x02' +
    '\u016C\u016D\x03\x02\x02\x02\u016D\u016F\x03\x02\x02\x02\u016E\u016C\x03' +
    '\x02\x02\x02\u016F\u0171\x07\x14\x02\x02\u0170\u015B\x03\x02\x02\x02\u0170' +
    '\u0161\x03\x02\x02\x02\u0170\u0167\x03\x02\x02\x02\u0171\u0174\x03\x02' +
    '\x02\x02\u0172\u0170\x03\x02\x02\x02\u0172\u0173\x03\x02\x02\x02\u0173' +
    '9\x03\x02\x02\x02\u0174\u0172\x03\x02\x02\x02\u0175\u017E\x05F$\x02\u0176' +
    '\u0177\x07\x17\x02\x02\u0177\u0179\x05<\x1F\x02\u0178\u017A\x07\x10\x02' +
    '\x02\u0179\u0178\x03\x02\x02\x02\u0179\u017A\x03\x02\x02\x02\u017A\u017B' +
    '\x03\x02\x02\x02\u017B\u017C\x07\x18\x02\x02\u017C\u017E\x03\x02\x02\x02' +
    '\u017D\u0175\x03\x02\x02\x02\u017D\u0176\x03\x02\x02\x02\u017E;\x03\x02' +
    '\x02\x02\u017F\u0180\b\x1F\x01\x02\u0180\u0181\x05:\x1E\x02\u0181\u0187' +
    '\x03\x02\x02\x02\u0182\u0183\f\x03\x02\x02\u0183\u0184\x07\x10\x02\x02' +
    '\u0184\u0186\x05:\x1E\x02\u0185\u0182\x03\x02\x02\x02\u0186\u0189\x03' +
    '\x02\x02\x02\u0187\u0185\x03\x02\x02\x02\u0187\u0188\x03\x02\x02\x02\u0188' +
    '=\x03\x02\x02\x02\u0189\u0187\x03\x02\x02\x02\u018A\u018B\x05@!\x02\u018B' +
    '\u018C\x05\x06\x04\x02\u018C?\x03\x02\x02\x02\u018D\u018E\b!\x01\x02\u018E' +
    '\u018F\x05B"\x02\u018F\u0195\x03\x02\x02\x02\u0190\u0191\f\x03\x02\x02' +
    '\u0191\u0192\x07\x10\x02\x02\u0192\u0194\x05B"\x02\u0193\u0190\x03\x02' +
    '\x02\x02\u0194\u0197\x03\x02\x02\x02\u0195\u0193\x03\x02\x02\x02\u0195' +
    '\u0196\x03\x02\x02\x02\u0196A\x03\x02\x02\x02\u0197\u0195\x03\x02\x02' +
    '\x02\u0198\u019E\x05F$\x02\u0199\u019A\x05d3\x02\u019A\u019B\x05\x04\x03' +
    '\x02\u019B\u019C\x05B"\x02\u019C\u019E\x03\x02\x02\x02\u019D\u0198\x03' +
    '\x02\x02\x02\u019D\u0199\x03\x02\x02\x02\u019EC\x03\x02\x02\x02\u019F' +
    '\u01A0\x05F$\x02\u01A0E\x03\x02\x02\x02\u01A1\u01A9\x05H%\x02\u01A2\u01A3' +
    '\x05H%\x02\u01A3\u01A4\x07\r\x02\x02\u01A4\u01A5\x05@!\x02\u01A5\u01A6' +
    '\x07\x0E\x02\x02\u01A6\u01A7\x05F$\x02\u01A7\u01A9\x03\x02\x02\x02\u01A8' +
    '\u01A1\x03\x02\x02\x02\u01A8\u01A2\x03\x02\x02\x02\u01A9G\x03\x02\x02' +
    '\x02\u01AA\u01AB\b%\x01\x02\u01AB\u01AC\x05J&\x02\u01AC\u01B2\x03\x02' +
    "\x02\x02\u01AD\u01AE\f\x03\x02\x02\u01AE\u01AF\x07'\x02\x02\u01AF\u01B1" +
    '\x05J&\x02\u01B0\u01AD\x03\x02\x02\x02\u01B1\u01B4\x03\x02\x02\x02\u01B2' +
    '\u01B0\x03\x02\x02\x02\u01B2\u01B3\x03\x02\x02\x02\u01B3I\x03\x02\x02' +
    '\x02\u01B4\u01B2\x03\x02\x02\x02\u01B5\u01B6\b&\x01\x02\u01B6\u01B7\x05' +
    "L'\x02\u01B7\u01BD\x03\x02\x02\x02\u01B8\u01B9\f\x03\x02\x02\u01B9\u01BA" +
    "\x07&\x02\x02\u01BA\u01BC\x05L'\x02\u01BB\u01B8\x03\x02\x02\x02\u01BC" +
    '\u01BF\x03\x02\x02\x02\u01BD\u01BB\x03\x02\x02\x02\u01BD\u01BE\x03\x02' +
    '\x02\x02\u01BEK\x03\x02\x02\x02\u01BF\u01BD\x03\x02\x02\x02\u01C0\u01C1' +
    "\b'\x01\x02\u01C1\u01C2\x05N(\x02\u01C2\u01C8\x03\x02\x02\x02\u01C3\u01C4" +
    '\f\x03\x02\x02\u01C4\u01C5\x07\f\x02\x02\u01C5\u01C7\x05N(\x02\u01C6\u01C3' +
    '\x03\x02\x02\x02\u01C7\u01CA\x03\x02\x02\x02\u01C8\u01C6\x03\x02\x02\x02' +
    '\u01C8\u01C9\x03\x02\x02\x02\u01C9M\x03\x02\x02\x02\u01CA\u01C8\x03\x02' +
    '\x02\x02\u01CB\u01CC\b(\x01\x02\u01CC\u01CD\x05P)\x02\u01CD\u01D3\x03' +
    '\x02\x02\x02\u01CE\u01CF\f\x03\x02\x02\u01CF\u01D0\x07\x03\x02\x02\u01D0' +
    '\u01D2\x05P)\x02\u01D1\u01CE\x03\x02\x02\x02\u01D2\u01D5\x03\x02\x02\x02' +
    '\u01D3\u01D1\x03\x02\x02\x02\u01D3\u01D4\x03\x02\x02\x02\u01D4O\x03\x02' +
    '\x02\x02\u01D5\u01D3\x03\x02\x02\x02\u01D6\u01D7\b)\x01\x02\u01D7\u01D8' +
    '\x05R*\x02\u01D8\u01DE\x03\x02\x02\x02\u01D9\u01DA\f\x03\x02\x02\u01DA' +
    '\u01DB\x07\t\x02\x02\u01DB\u01DD\x05R*\x02\u01DC\u01D9\x03\x02\x02\x02' +
    '\u01DD\u01E0\x03\x02\x02\x02\u01DE\u01DC\x03\x02\x02\x02\u01DE\u01DF\x03' +
    '\x02\x02\x02\u01DFQ\x03\x02\x02\x02\u01E0\u01DE\x03\x02\x02\x02\u01E1' +
    '\u01E2\b*\x01\x02\u01E2\u01E3\x05T+\x02\u01E3\u01EC\x03\x02\x02\x02\u01E4' +
    '\u01E5\f\x04\x02\x02\u01E5\u01E6\x07(\x02\x02\u01E6\u01EB\x05T+\x02\u01E7' +
    '\u01E8\f\x03\x02\x02\u01E8\u01E9\x07)\x02\x02\u01E9\u01EB\x05T+\x02\u01EA' +
    '\u01E4\x03\x02\x02\x02\u01EA\u01E7\x03\x02\x02\x02\u01EB\u01EE\x03\x02' +
    '\x02\x02\u01EC\u01EA\x03\x02\x02\x02\u01EC\u01ED\x03\x02\x02\x02\u01ED' +
    'S\x03\x02\x02\x02\u01EE\u01EC\x03\x02\x02\x02\u01EF\u01F0\b+\x01\x02\u01F0' +
    '\u01F1\x05V,\x02\u01F1\u0200\x03\x02\x02\x02\u01F2\u01F3\f\x06\x02\x02' +
    '\u01F3\u01F4\x07*\x02\x02\u01F4\u01FF\x05V,\x02\u01F5\u01F6\f\x05\x02' +
    '\x02\u01F6\u01F7\x07+\x02\x02\u01F7\u01FF\x05V,\x02\u01F8\u01F9\f\x04' +
    '\x02\x02\u01F9\u01FA\x07,\x02\x02\u01FA\u01FF\x05V,\x02\u01FB\u01FC\f' +
    '\x03\x02\x02\u01FC\u01FD\x07-\x02\x02\u01FD\u01FF\x05V,\x02\u01FE\u01F2' +
    '\x03\x02\x02\x02\u01FE\u01F5\x03\x02\x02\x02\u01FE\u01F8\x03\x02\x02\x02' +
    '\u01FE\u01FB\x03\x02\x02\x02\u01FF\u0202\x03\x02\x02\x02\u0200\u01FE\x03' +
    '\x02\x02\x02\u0200\u0201\x03\x02\x02\x02\u0201U\x03\x02\x02\x02\u0202' +
    '\u0200\x03\x02\x02\x02\u0203\u0204\b,\x01\x02\u0204\u0205\x05X-\x02\u0205' +
    '\u020E\x03\x02\x02\x02\u0206\u0207\f\x04\x02\x02\u0207\u0208\x07.\x02' +
    '\x02\u0208\u020D\x05X-\x02\u0209\u020A\f\x03\x02\x02\u020A\u020B\x07/' +
    '\x02\x02\u020B\u020D\x05X-\x02\u020C\u0206\x03'
  private static readonly _serializedATNSegment1: string =
    '\x02\x02\x02\u020C\u0209\x03\x02\x02\x02\u020D\u0210\x03\x02\x02\x02\u020E' +
    '\u020C\x03\x02\x02\x02\u020E\u020F\x03\x02\x02\x02\u020FW\x03\x02\x02' +
    '\x02\u0210\u020E\x03\x02\x02\x02\u0211\u0212\b-\x01\x02\u0212\u0213\x05' +
    'Z.\x02\u0213\u021C\x03\x02\x02\x02\u0214\u0215\f\x04\x02\x02\u0215\u0216' +
    '\x07\x06\x02\x02\u0216\u021B\x05Z.\x02\u0217\u0218\f\x03\x02\x02\u0218' +
    '\u0219\x07\x07\x02\x02\u0219\u021B\x05Z.\x02\u021A\u0214\x03\x02\x02\x02' +
    '\u021A\u0217\x03\x02\x02\x02\u021B\u021E\x03\x02\x02\x02\u021C\u021A\x03' +
    '\x02\x02\x02\u021C\u021D\x03\x02\x02\x02\u021DY\x03\x02\x02\x02\u021E' +
    '\u021C\x03\x02\x02\x02\u021F\u0220\b.\x01\x02\u0220\u0221\x05\\/\x02\u0221' +
    '\u022D\x03\x02\x02\x02\u0222\u0223\f\x05\x02\x02\u0223\u0224\x07\x04\x02' +
    '\x02\u0224\u022C\x05\\/\x02\u0225\u0226\f\x04\x02\x02\u0226\u0227\x07' +
    '\x05\x02\x02\u0227\u022C\x05\\/\x02\u0228\u0229\f\x03\x02\x02\u0229\u022A' +
    '\x07\b\x02\x02\u022A\u022C\x05\\/\x02\u022B\u0222\x03\x02\x02\x02\u022B' +
    '\u0225\x03\x02\x02\x02\u022B\u0228\x03\x02\x02\x02\u022C\u022F\x03\x02' +
    '\x02\x02\u022D\u022B\x03\x02\x02\x02\u022D\u022E\x03\x02\x02\x02\u022E' +
    '[\x03\x02\x02\x02\u022F\u022D\x03\x02\x02\x02\u0230\u0237\x05d3\x02\u0231' +
    '\u0232\x07\x13\x02\x02\u0232\u0233\x05^0\x02\u0233\u0234\x07\x14\x02\x02' +
    '\u0234\u0235\x05\\/\x02\u0235\u0237\x03\x02\x02\x02\u0236\u0230\x03\x02' +
    '\x02\x02\u0236\u0231\x03\x02\x02\x02\u0237]\x03\x02\x02\x02\u0238\u023A' +
    '\x05\f\x07\x02\u0239\u023B\x05`1\x02\u023A\u0239\x03\x02\x02\x02\u023A' +
    '\u023B\x03\x02\x02\x02\u023B_\x03\x02\x02\x02\u023C\u0242\x05\b\x05\x02' +
    '\u023D\u023F\x05\b\x05\x02\u023E\u023D\x03\x02\x02\x02\u023E\u023F\x03' +
    '\x02\x02\x02\u023F\u0240\x03\x02\x02\x02\u0240\u0242\x05b2\x02\u0241\u023C' +
    '\x03\x02\x02\x02\u0241\u023E\x03\x02\x02\x02\u0242a\x03\x02\x02\x02\u0243' +
    '\u0244\b2\x01\x02\u0244\u0245\x07\x13\x02\x02\u0245\u0246\x05`1\x02\u0246' +
    '\u0247\x07\x14\x02\x02\u0247\u0253\x03\x02\x02\x02\u0248\u024A\x07\x15' +
    '\x02\x02\u0249\u024B\x05D#\x02\u024A\u0249\x03\x02\x02\x02\u024A\u024B' +
    '\x03\x02\x02\x02\u024B\u024C\x03\x02\x02\x02\u024C\u0253\x07\x16\x02\x02' +
    '\u024D\u024F\x07\x13\x02\x02\u024E\u0250\x05\x18\r\x02\u024F\u024E\x03' +
    '\x02\x02\x02\u024F\u0250\x03\x02\x02\x02\u0250\u0251\x03\x02\x02\x02\u0251' +
    '\u0253\x07\x14\x02\x02\u0252\u0243\x03\x02\x02\x02\u0252\u0248\x03\x02' +
    '\x02\x02\u0252\u024D\x03\x02\x02\x02\u0253\u0262\x03\x02\x02\x02\u0254' +
    '\u0255\f\x04\x02\x02\u0255\u0257\x07\x15\x02\x02\u0256\u0258\x05D#\x02' +
    '\u0257\u0256\x03\x02\x02\x02\u0257\u0258\x03\x02\x02\x02\u0258\u0259\x03' +
    '\x02\x02\x02\u0259\u0261\x07\x16\x02\x02\u025A\u025B\f\x03\x02\x02\u025B' +
    '\u025D\x07\x13\x02\x02\u025C\u025E\x05\x18\r\x02\u025D\u025C\x03\x02\x02' +
    '\x02\u025D\u025E\x03\x02\x02\x02\u025E\u025F\x03\x02\x02\x02\u025F\u0261' +
    '\x07\x14\x02\x02\u0260\u0254\x03\x02\x02\x02\u0260\u025A\x03\x02\x02\x02' +
    '\u0261\u0264\x03\x02\x02\x02\u0262\u0260\x03\x02\x02\x02\u0262\u0263\x03' +
    '\x02\x02\x02\u0263c\x03\x02\x02\x02\u0264\u0262\x03\x02\x02\x02\u0265' +
    '\u0273\x05f4\x02\u0266\u0267\x07\x19\x02\x02\u0267\u0273\x05d3\x02\u0268' +
    '\u0269\x07\x1A\x02\x02\u0269\u0273\x05d3\x02\u026A\u026B\x05\x02\x02\x02' +
    '\u026B\u026C\x05\\/\x02\u026C\u0273\x03\x02\x02\x02\u026D\u026E\x072\x02' +
    '\x02\u026E\u026F\x07\x13\x02\x02\u026F\u0270\x05^0\x02\u0270\u0271\x07' +
    '\x14\x02\x02\u0271\u0273\x03\x02\x02\x02\u0272\u0265\x03\x02\x02\x02\u0272' +
    '\u0266\x03\x02\x02\x02\u0272\u0268\x03\x02\x02\x02\u0272\u026A\x03\x02' +
    '\x02\x02\u0272\u026D\x03\x02\x02\x02\u0273e\x03\x02\x02\x02\u0274\u0275' +
    '\b4\x01\x02\u0275\u0276\x05h5\x02\u0276\u028E\x03\x02\x02\x02\u0277\u0278' +
    '\f\b\x02\x02\u0278\u0279\x07\x15\x02\x02\u0279\u027A\x05B"\x02\u027A' +
    '\u027B\x07\x16\x02\x02\u027B\u028D\x03\x02\x02\x02\u027C\u027D\f\x07\x02' +
    '\x02\u027D\u027F\x07\x13\x02\x02\u027E\u0280\x05@!\x02\u027F\u027E\x03' +
    '\x02\x02\x02\u027F\u0280\x03\x02\x02\x02\u0280\u0281\x03\x02\x02\x02\u0281' +
    '\u028D\x07\x14\x02\x02\u0282\u0283\f\x06\x02\x02\u0283\u0284\x07\x11\x02' +
    '\x02\u0284\u028D\x05\x10\t\x02\u0285\u0286\f\x05\x02\x02\u0286\u0287\x07' +
    '\x12\x02\x02\u0287\u028D\x05\x10\t\x02\u0288\u0289\f\x04\x02\x02\u0289' +
    '\u028D\x07\x19\x02\x02\u028A\u028B\f\x03\x02\x02\u028B\u028D\x07\x1A\x02' +
    '\x02\u028C\u0277\x03\x02\x02\x02\u028C\u027C\x03\x02\x02\x02\u028C\u0282' +
    '\x03\x02\x02\x02\u028C\u0285\x03\x02\x02\x02\u028C\u0288\x03\x02\x02\x02' +
    '\u028C\u028A\x03\x02\x02\x02\u028D\u0290\x03\x02\x02\x02\u028E\u028C\x03' +
    '\x02\x02\x02\u028E\u028F\x03\x02\x02\x02\u028Fg\x03\x02\x02\x02\u0290' +
    '\u028E\x03\x02\x02\x02\u0291\u0299\x05\x10\t\x02\u0292\u0299\x05l7\x02' +
    '\u0293\u0299\x05j6\x02\u0294\u0295\x07\x13\x02\x02\u0295\u0296\x05@!\x02' +
    '\u0296\u0297\x07\x14\x02\x02\u0297\u0299\x03\x02\x02\x02\u0298\u0291\x03' +
    '\x02\x02\x02\u0298\u0292\x03\x02\x02\x02\u0298\u0293\x03\x02\x02\x02\u0298' +
    '\u0294\x03\x02\x02\x02\u0299i\x03\x02\x02\x02\u029A\u029B\x07Q\x02\x02' +
    '\u029Bk\x03\x02\x02\x02\u029C\u02A0\x05n8\x02\u029D\u02A0\x05p9\x02\u029E' +
    '\u02A0\x05r:\x02\u029F\u029C\x03\x02\x02\x02\u029F\u029D\x03\x02\x02\x02' +
    '\u029F\u029E\x03\x02\x02\x02\u02A0m\x03\x02\x02\x02\u02A1\u02A2\x07N\x02' +
    '\x02\u02A2o\x03\x02\x02\x02\u02A3\u02A4\x07O\x02\x02\u02A4q\x03\x02\x02' +
    '\x02\u02A5\u02A6\x07P\x02\x02\u02A6s\x03\x02\x02\x02\u02A7\u02AB\x07\x17' +
    '\x02\x02\u02A8\u02AA\x05*\x16\x02\u02A9\u02A8\x03\x02\x02\x02\u02AA\u02AD' +
    '\x03\x02\x02\x02\u02AB\u02A9\x03\x02\x02\x02\u02AB\u02AC\x03\x02\x02\x02' +
    '\u02AC\u02AE\x03\x02\x02\x02\u02AD\u02AB\x03\x02\x02\x02\u02AE\u02AF\x07' +
    '\x18\x02\x02\u02AFu\x03\x02\x02\x02\u02B0\u02B1\x075\x02\x02\u02B1\u02B2' +
    '\x07\x13\x02\x02\u02B2\u02B3\x05@!\x02\u02B3\u02B4\x07\x14\x02\x02\u02B4' +
    '\u02B7\x05*\x16\x02\u02B5\u02B6\x076\x02\x02\u02B6\u02B8\x05*\x16\x02' +
    '\u02B7\u02B5\x03\x02\x02\x02\u02B7\u02B8\x03\x02\x02\x02\u02B8w\x03\x02' +
    '\x02\x02\u02B9\u02BA\x077\x02\x02\u02BA\u02BB\x07\x13\x02\x02\u02BB\u02BC' +
    '\x05@!\x02\u02BC\u02BD\x07\x14\x02\x02\u02BD\u02BE\x05z>\x02\u02BEy\x03' +
    '\x02\x02\x02\u02BF\u02C3\x07\x17\x02\x02\u02C0\u02C2\x05|?\x02\u02C1\u02C0' +
    '\x03\x02\x02\x02\u02C2\u02C5\x03\x02\x02\x02\u02C3\u02C1\x03\x02\x02\x02' +
    '\u02C3\u02C4\x03\x02\x02\x02\u02C4\u02C7\x03\x02\x02\x02\u02C5\u02C3\x03' +
    '\x02\x02\x02\u02C6\u02C8\x05~@\x02\u02C7\u02C6\x03\x02\x02\x02\u02C7\u02C8' +
    '\x03\x02\x02\x02\u02C8\u02C9\x03\x02\x02\x02\u02C9\u02CA\x07\x18\x02\x02' +
    '\u02CA{\x03\x02\x02\x02\u02CB\u02CC\x073\x02\x02\u02CC\u02CD\x05@!\x02' +
    '\u02CD\u02D1\x07\x0E\x02\x02\u02CE\u02D0\x05*\x16\x02\u02CF\u02CE\x03' +
    '\x02\x02\x02\u02D0\u02D3\x03\x02\x02\x02\u02D1\u02CF\x03\x02\x02\x02\u02D1' +
    '\u02D2\x03\x02\x02\x02\u02D2}\x03\x02\x02\x02\u02D3\u02D1\x03\x02\x02' +
    '\x02\u02D4\u02D5\x074\x02\x02\u02D5\u02D9\x07\x0E\x02\x02\u02D6\u02D8' +
    '\x05*\x16\x02\u02D7\u02D6\x03\x02\x02\x02\u02D8\u02DB\x03\x02\x02\x02' +
    '\u02D9\u02D7\x03\x02\x02\x02\u02D9\u02DA\x03\x02\x02\x02\u02DA\x7F\x03' +
    '\x02\x02\x02\u02DB\u02D9\x03\x02\x02\x02\u02DC\u02DD\x078\x02\x02\u02DD' +
    '\u02DE\x07\x13\x02\x02\u02DE\u02DF\x05@!\x02\u02DF\u02E0\x07\x14\x02\x02' +
    '\u02E0\u02E1\x05*\x16\x02\u02E1\x81\x03\x02\x02\x02\u02E2\u02E3\x079\x02' +
    '\x02\u02E3\u02E4\x05*\x16\x02\u02E4\u02E5\x078\x02\x02\u02E5\u02E6\x07' +
    '\x13\x02\x02\u02E6\u02E7\x05@!\x02\u02E7\u02E8\x07\x14\x02\x02\u02E8\u02E9' +
    '\x05\x06\x04\x02\u02E9\x83\x03\x02\x02\x02\u02EA\u02EB\x07:\x02\x02\u02EB' +
    '\u02ED\x07\x13\x02\x02\u02EC\u02EE\x05\x86D\x02\u02ED\u02EC\x03\x02\x02' +
    '\x02\u02ED\u02EE\x03\x02\x02\x02\u02EE\u02EF\x03\x02\x02\x02\u02EF\u02F1' +
    '\x07\x0F\x02\x02\u02F0\u02F2\x05@!\x02\u02F1\u02F0\x03\x02\x02\x02\u02F1' +
    '\u02F2\x03\x02\x02\x02\u02F2\u02F3\x03\x02\x02\x02\u02F3\u02F5\x07\x0F' +
    '\x02\x02\u02F4\u02F6\x05@!\x02\u02F5\u02F4\x03\x02\x02\x02\u02F5\u02F6' +
    '\x03\x02\x02\x02\u02F6\u02F7\x03\x02\x02\x02\u02F7\u02F8\x07\x14\x02\x02' +
    '\u02F8\u02F9\x05*\x16\x02\u02F9\x85\x03\x02\x02\x02\u02FA\u02FB\x050\x19' +
    '\x02\u02FB\u02FC\x052\x1A\x02\u02FC\u02FF\x03\x02\x02\x02\u02FD\u02FF' +
    '\x05@!\x02\u02FE\u02FA\x03\x02\x02\x02\u02FE\u02FD\x03\x02\x02\x02\u02FF' +
    '\x87\x03\x02\x02\x02\u0300\u0301\x07;\x02\x02\u0301\u0302\x05\x10\t\x02' +
    '\u0302\u0303\x05\x06\x04\x02\u0303\x89\x03\x02\x02\x02\u0304\u0305\x07' +
    '<\x02\x02\u0305\u0306\x05\x06\x04\x02\u0306\x8B\x03\x02\x02\x02\u0307' +
    '\u0308\x07=\x02\x02\u0308\u0309\x05\x06\x04\x02\u0309\x8D\x03\x02\x02' +
    '\x02\u030A\u030C\x07>\x02\x02\u030B\u030D\x05@!\x02\u030C\u030B\x03\x02' +
    '\x02\x02\u030C\u030D\x03\x02\x02\x02\u030D\u030E\x03\x02\x02\x02\u030E' +
    '\u030F\x05\x06\x04\x02\u030F\x8F\x03\x02\x02\x02R\x99\x9F\xA3\xA7\xAB' +
    '\xB2\xC2\xC4\xC8\xCE\xD8\xE2\xEC\xF0\xF8\xFE\u0102\u0108\u010E\u0116\u0123' +
    '\u0135\u0146\u014C\u014F\u0159\u015E\u0164\u016C\u0170\u0172\u0179\u017D' +
    '\u0187\u0195\u019D\u01A8\u01B2\u01BD\u01C8\u01D3\u01DE\u01EA\u01EC\u01FE' +
    '\u0200\u020C\u020E\u021A\u021C\u022B\u022D\u0236\u023A\u023E\u0241\u024A' +
    '\u024F\u0252\u0257\u025D\u0260\u0262\u0272\u027F\u028C\u028E\u0298\u029F' +
    '\u02AB\u02B7\u02C3\u02C7\u02D1\u02D9\u02ED\u02F1\u02F5\u02FE\u030C'
  public static readonly _serializedATN: string = Utils.join(
    [CalcParser._serializedATNSegment0, CalcParser._serializedATNSegment1],
    '',
  )
  public static __ATN: ATN
  public static get _ATN(): ATN {
    if (!CalcParser.__ATN) {
      CalcParser.__ATN = new ATNDeserializer().deserialize(
        Utils.toCharArray(CalcParser._serializedATN),
      )
    }

    return CalcParser.__ATN
  }
}

export class Unary_operatorContext extends ParserRuleContext {
  public AMPERSAND(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.AMPERSAND, 0)
  }
  public ASTERICK(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.ASTERICK, 0)
  }
  public PLUS(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.PLUS, 0)
  }
  public MINUS(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.MINUS, 0)
  }
  public TILDA(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.TILDA, 0)
  }
  public EXCLAMATION_MARK(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.EXCLAMATION_MARK, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_unary_operator
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterUnary_operator) {
      listener.enterUnary_operator(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitUnary_operator) {
      listener.exitUnary_operator(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitUnary_operator) {
      return visitor.visitUnary_operator(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Assignment_operatorContext extends ParserRuleContext {
  public EQUAL(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.EQUAL, 0)
  }
  public TIMES_EQUAL(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.TIMES_EQUAL, 0)
  }
  public DIVIDE_EQUAL(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.DIVIDE_EQUAL, 0)
  }
  public MODULO_EQUAL(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.MODULO_EQUAL, 0)
  }
  public PLUS_EQUAL(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.PLUS_EQUAL, 0)
  }
  public MINUS_EQUAL(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.MINUS_EQUAL, 0)
  }
  public SHIFT_LEFT_EQUAL(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.SHIFT_LEFT_EQUAL, 0)
  }
  public SHIFT_RIGHT_EQUAL(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.SHIFT_RIGHT_EQUAL, 0)
  }
  public BITWISE_AND_EQUAL(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.BITWISE_AND_EQUAL, 0)
  }
  public BITWISE_XOR_EQUAL(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.BITWISE_XOR_EQUAL, 0)
  }
  public BITWISE_OR_EQUAL(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.BITWISE_OR_EQUAL, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_assignment_operator
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterAssignment_operator) {
      listener.enterAssignment_operator(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitAssignment_operator) {
      listener.exitAssignment_operator(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitAssignment_operator) {
      return visitor.visitAssignment_operator(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class End_statement_delimiterContext extends ParserRuleContext {
  public SEMICOLON(): TerminalNode {
    return this.getToken(CalcParser.SEMICOLON, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_end_statement_delimiter
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterEnd_statement_delimiter) {
      listener.enterEnd_statement_delimiter(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitEnd_statement_delimiter) {
      listener.exitEnd_statement_delimiter(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitEnd_statement_delimiter) {
      return visitor.visitEnd_statement_delimiter(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class PointerContext extends ParserRuleContext {
  public ASTERICK(): TerminalNode[]
  public ASTERICK(i: number): TerminalNode
  public ASTERICK(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(CalcParser.ASTERICK)
    } else {
      return this.getToken(CalcParser.ASTERICK, i)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_pointer
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterPointer) {
      listener.enterPointer(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitPointer) {
      listener.exitPointer(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitPointer) {
      return visitor.visitPointer(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Type_sign_specifierContext extends ParserRuleContext {
  public UNSIGNED_TYPE_SPECIFIER(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.UNSIGNED_TYPE_SPECIFIER, 0)
  }
  public SIGNED_TYPE_SPECIFIER(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.SIGNED_TYPE_SPECIFIER, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_type_sign_specifier
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterType_sign_specifier) {
      listener.enterType_sign_specifier(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitType_sign_specifier) {
      listener.exitType_sign_specifier(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitType_sign_specifier) {
      return visitor.visitType_sign_specifier(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Type_specifierContext extends ParserRuleContext {
  public VOID_TYPE_SPECIFIER(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.VOID_TYPE_SPECIFIER, 0)
  }
  public CHAR_TYPE_SPECIFIER(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.CHAR_TYPE_SPECIFIER, 0)
  }
  public type_sign_specifier(): Type_sign_specifierContext | undefined {
    return this.tryGetRuleContext(0, Type_sign_specifierContext)
  }
  public SHORT_TYPE_SPECIFIER(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.SHORT_TYPE_SPECIFIER, 0)
  }
  public INT_TYPE_SPECIFIER(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.INT_TYPE_SPECIFIER, 0)
  }
  public LONG_TYPE_SPECIFIER(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.LONG_TYPE_SPECIFIER, 0)
  }
  public FLOAT_TYPE_SPECIFIER(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.FLOAT_TYPE_SPECIFIER, 0)
  }
  public DOUBLE_TYPE_SPECIFIER(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.DOUBLE_TYPE_SPECIFIER, 0)
  }
  public struct_specifier(): Struct_specifierContext | undefined {
    return this.tryGetRuleContext(0, Struct_specifierContext)
  }
  public union_specifier(): Union_specifierContext | undefined {
    return this.tryGetRuleContext(0, Union_specifierContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_type_specifier
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterType_specifier) {
      listener.enterType_specifier(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitType_specifier) {
      listener.exitType_specifier(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitType_specifier) {
      return visitor.visitType_specifier(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Type_qualifierContext extends ParserRuleContext {
  public CONST_TYPE_QUALIFIER(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.CONST_TYPE_QUALIFIER, 0)
  }
  public VOLATILE_TYPE_QUALIFIER(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.VOLATILE_TYPE_QUALIFIER, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_type_qualifier
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterType_qualifier) {
      listener.enterType_qualifier(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitType_qualifier) {
      listener.exitType_qualifier(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitType_qualifier) {
      return visitor.visitType_qualifier(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class IdentifierContext extends ParserRuleContext {
  public IDENTIFIER(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.IDENTIFIER, 0)
  }
  public SIZE_OF(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.SIZE_OF, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_identifier
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterIdentifier) {
      listener.enterIdentifier(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitIdentifier) {
      listener.exitIdentifier(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitIdentifier) {
      return visitor.visitIdentifier(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class StartContext extends ParserRuleContext {
  public program(): ProgramContext {
    return this.getRuleContext(0, ProgramContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_start
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterStart) {
      listener.enterStart(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitStart) {
      listener.exitStart(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitStart) {
      return visitor.visitStart(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ProgramContext extends ParserRuleContext {
  public function_definition(): Function_definitionContext[]
  public function_definition(i: number): Function_definitionContext
  public function_definition(
    i?: number,
  ): Function_definitionContext | Function_definitionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Function_definitionContext)
    } else {
      return this.getRuleContext(i, Function_definitionContext)
    }
  }
  public declaration_statement(): Declaration_statementContext[]
  public declaration_statement(i: number): Declaration_statementContext
  public declaration_statement(
    i?: number,
  ): Declaration_statementContext | Declaration_statementContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Declaration_statementContext)
    } else {
      return this.getRuleContext(i, Declaration_statementContext)
    }
  }
  public struct_specifier(): Struct_specifierContext[]
  public struct_specifier(i: number): Struct_specifierContext
  public struct_specifier(i?: number): Struct_specifierContext | Struct_specifierContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Struct_specifierContext)
    } else {
      return this.getRuleContext(i, Struct_specifierContext)
    }
  }
  public end_statement_delimiter(): End_statement_delimiterContext[]
  public end_statement_delimiter(i: number): End_statement_delimiterContext
  public end_statement_delimiter(
    i?: number,
  ): End_statement_delimiterContext | End_statement_delimiterContext[] {
    if (i === undefined) {
      return this.getRuleContexts(End_statement_delimiterContext)
    } else {
      return this.getRuleContext(i, End_statement_delimiterContext)
    }
  }
  public union_specifier(): Union_specifierContext[]
  public union_specifier(i: number): Union_specifierContext
  public union_specifier(i?: number): Union_specifierContext | Union_specifierContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Union_specifierContext)
    } else {
      return this.getRuleContext(i, Union_specifierContext)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_program
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterProgram) {
      listener.enterProgram(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitProgram) {
      listener.exitProgram(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitProgram) {
      return visitor.visitProgram(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Function_definitionContext extends ParserRuleContext {
  public declarator(): DeclaratorContext {
    return this.getRuleContext(0, DeclaratorContext)
  }
  public compound_statement(): Compound_statementContext {
    return this.getRuleContext(0, Compound_statementContext)
  }
  public declaration_specifiers(): Declaration_specifiersContext | undefined {
    return this.tryGetRuleContext(0, Declaration_specifiersContext)
  }
  public declaration_statement(): Declaration_statementContext[]
  public declaration_statement(i: number): Declaration_statementContext
  public declaration_statement(
    i?: number,
  ): Declaration_statementContext | Declaration_statementContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Declaration_statementContext)
    } else {
      return this.getRuleContext(i, Declaration_statementContext)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_function_definition
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterFunction_definition) {
      listener.enterFunction_definition(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitFunction_definition) {
      listener.exitFunction_definition(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitFunction_definition) {
      return visitor.visitFunction_definition(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Parameter_type_listContext extends ParserRuleContext {
  public parameter_list(): Parameter_listContext {
    return this.getRuleContext(0, Parameter_listContext)
  }
  public COMMA(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.COMMA, 0)
  }
  public VAR_ARG(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.VAR_ARG, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_parameter_type_list
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterParameter_type_list) {
      listener.enterParameter_type_list(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitParameter_type_list) {
      listener.exitParameter_type_list(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitParameter_type_list) {
      return visitor.visitParameter_type_list(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Parameter_listContext extends ParserRuleContext {
  public parameter_declaration(): Parameter_declarationContext {
    return this.getRuleContext(0, Parameter_declarationContext)
  }
  public parameter_list(): Parameter_listContext | undefined {
    return this.tryGetRuleContext(0, Parameter_listContext)
  }
  public COMMA(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.COMMA, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_parameter_list
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterParameter_list) {
      listener.enterParameter_list(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitParameter_list) {
      listener.exitParameter_list(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitParameter_list) {
      return visitor.visitParameter_list(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Parameter_declarationContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_parameter_declaration
  }
  public copyFrom(ctx: Parameter_declarationContext): void {
    super.copyFrom(ctx)
  }
}
export class ParameterDeclarationTypeDeclaratorContext extends Parameter_declarationContext {
  public declaration_specifiers(): Declaration_specifiersContext {
    return this.getRuleContext(0, Declaration_specifiersContext)
  }
  public declarator(): DeclaratorContext {
    return this.getRuleContext(0, DeclaratorContext)
  }
  constructor(ctx: Parameter_declarationContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterParameterDeclarationTypeDeclarator) {
      listener.enterParameterDeclarationTypeDeclarator(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitParameterDeclarationTypeDeclarator) {
      listener.exitParameterDeclarationTypeDeclarator(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitParameterDeclarationTypeDeclarator) {
      return visitor.visitParameterDeclarationTypeDeclarator(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class ParameterDeclarationTypeAbstractDeclaratorContext extends Parameter_declarationContext {
  public declaration_specifiers(): Declaration_specifiersContext {
    return this.getRuleContext(0, Declaration_specifiersContext)
  }
  public abstract_declarator(): Abstract_declaratorContext {
    return this.getRuleContext(0, Abstract_declaratorContext)
  }
  constructor(ctx: Parameter_declarationContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterParameterDeclarationTypeAbstractDeclarator) {
      listener.enterParameterDeclarationTypeAbstractDeclarator(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitParameterDeclarationTypeAbstractDeclarator) {
      listener.exitParameterDeclarationTypeAbstractDeclarator(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitParameterDeclarationTypeAbstractDeclarator) {
      return visitor.visitParameterDeclarationTypeAbstractDeclarator(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class ParameterDeclarationTypeNormalContext extends Parameter_declarationContext {
  public declaration_specifiers(): Declaration_specifiersContext {
    return this.getRuleContext(0, Declaration_specifiersContext)
  }
  constructor(ctx: Parameter_declarationContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterParameterDeclarationTypeNormal) {
      listener.enterParameterDeclarationTypeNormal(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitParameterDeclarationTypeNormal) {
      listener.exitParameterDeclarationTypeNormal(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitParameterDeclarationTypeNormal) {
      return visitor.visitParameterDeclarationTypeNormal(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Struct_specifierContext extends ParserRuleContext {
  public STRUCT(): TerminalNode {
    return this.getToken(CalcParser.STRUCT, 0)
  }
  public OPEN_CURLY_BRACKET(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.OPEN_CURLY_BRACKET, 0)
  }
  public CLOSE_CURLY_BRACKET(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.CLOSE_CURLY_BRACKET, 0)
  }
  public identifier(): IdentifierContext | undefined {
    return this.tryGetRuleContext(0, IdentifierContext)
  }
  public struct_or_union_declaration(): Struct_or_union_declarationContext[]
  public struct_or_union_declaration(i: number): Struct_or_union_declarationContext
  public struct_or_union_declaration(
    i?: number,
  ): Struct_or_union_declarationContext | Struct_or_union_declarationContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Struct_or_union_declarationContext)
    } else {
      return this.getRuleContext(i, Struct_or_union_declarationContext)
    }
  }
  public end_statement_delimiter(): End_statement_delimiterContext[]
  public end_statement_delimiter(i: number): End_statement_delimiterContext
  public end_statement_delimiter(
    i?: number,
  ): End_statement_delimiterContext | End_statement_delimiterContext[] {
    if (i === undefined) {
      return this.getRuleContexts(End_statement_delimiterContext)
    } else {
      return this.getRuleContext(i, End_statement_delimiterContext)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_struct_specifier
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterStruct_specifier) {
      listener.enterStruct_specifier(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitStruct_specifier) {
      listener.exitStruct_specifier(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitStruct_specifier) {
      return visitor.visitStruct_specifier(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Union_specifierContext extends ParserRuleContext {
  public UNION(): TerminalNode {
    return this.getToken(CalcParser.UNION, 0)
  }
  public OPEN_CURLY_BRACKET(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.OPEN_CURLY_BRACKET, 0)
  }
  public CLOSE_CURLY_BRACKET(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.CLOSE_CURLY_BRACKET, 0)
  }
  public identifier(): IdentifierContext | undefined {
    return this.tryGetRuleContext(0, IdentifierContext)
  }
  public struct_or_union_declaration(): Struct_or_union_declarationContext[]
  public struct_or_union_declaration(i: number): Struct_or_union_declarationContext
  public struct_or_union_declaration(
    i?: number,
  ): Struct_or_union_declarationContext | Struct_or_union_declarationContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Struct_or_union_declarationContext)
    } else {
      return this.getRuleContext(i, Struct_or_union_declarationContext)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_union_specifier
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterUnion_specifier) {
      listener.enterUnion_specifier(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitUnion_specifier) {
      listener.exitUnion_specifier(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitUnion_specifier) {
      return visitor.visitUnion_specifier(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Struct_or_union_declarationContext extends ParserRuleContext {
  public specifier_qualifier(): Specifier_qualifierContext {
    return this.getRuleContext(0, Specifier_qualifierContext)
  }
  public struct_or_union_declarator_list(): Struct_or_union_declarator_listContext {
    return this.getRuleContext(0, Struct_or_union_declarator_listContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_struct_or_union_declaration
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterStruct_or_union_declaration) {
      listener.enterStruct_or_union_declaration(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitStruct_or_union_declaration) {
      listener.exitStruct_or_union_declaration(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitStruct_or_union_declaration) {
      return visitor.visitStruct_or_union_declaration(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Specifier_qualifierContext extends ParserRuleContext {
  public type_specifier(): Type_specifierContext {
    return this.getRuleContext(0, Type_specifierContext)
  }
  public type_qualifier(): Type_qualifierContext[]
  public type_qualifier(i: number): Type_qualifierContext
  public type_qualifier(i?: number): Type_qualifierContext | Type_qualifierContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Type_qualifierContext)
    } else {
      return this.getRuleContext(i, Type_qualifierContext)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_specifier_qualifier
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterSpecifier_qualifier) {
      listener.enterSpecifier_qualifier(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitSpecifier_qualifier) {
      listener.exitSpecifier_qualifier(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitSpecifier_qualifier) {
      return visitor.visitSpecifier_qualifier(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Struct_or_union_declarator_listContext extends ParserRuleContext {
  public struct_or_union_declarator(): Struct_or_union_declaratorContext {
    return this.getRuleContext(0, Struct_or_union_declaratorContext)
  }
  public struct_or_union_declarator_list(): Struct_or_union_declarator_listContext | undefined {
    return this.tryGetRuleContext(0, Struct_or_union_declarator_listContext)
  }
  public COMMA(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.COMMA, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_struct_or_union_declarator_list
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterStruct_or_union_declarator_list) {
      listener.enterStruct_or_union_declarator_list(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitStruct_or_union_declarator_list) {
      listener.exitStruct_or_union_declarator_list(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitStruct_or_union_declarator_list) {
      return visitor.visitStruct_or_union_declarator_list(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Struct_or_union_declaratorContext extends ParserRuleContext {
  public declarator(): DeclaratorContext {
    return this.getRuleContext(0, DeclaratorContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_struct_or_union_declarator
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterStruct_or_union_declarator) {
      listener.enterStruct_or_union_declarator(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitStruct_or_union_declarator) {
      listener.exitStruct_or_union_declarator(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitStruct_or_union_declarator) {
      return visitor.visitStruct_or_union_declarator(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class StatementContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_statement
  }
  public copyFrom(ctx: StatementContext): void {
    super.copyFrom(ctx)
  }
}
export class StatementTypeLabeledContext extends StatementContext {
  public labeled_statement(): Labeled_statementContext {
    return this.getRuleContext(0, Labeled_statementContext)
  }
  constructor(ctx: StatementContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterStatementTypeLabeled) {
      listener.enterStatementTypeLabeled(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitStatementTypeLabeled) {
      listener.exitStatementTypeLabeled(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitStatementTypeLabeled) {
      return visitor.visitStatementTypeLabeled(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class StatementTypeDeclarationContext extends StatementContext {
  public declaration_statement(): Declaration_statementContext {
    return this.getRuleContext(0, Declaration_statementContext)
  }
  constructor(ctx: StatementContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterStatementTypeDeclaration) {
      listener.enterStatementTypeDeclaration(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitStatementTypeDeclaration) {
      listener.exitStatementTypeDeclaration(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitStatementTypeDeclaration) {
      return visitor.visitStatementTypeDeclaration(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class StatementTypeExpressionContext extends StatementContext {
  public expression_statement(): Expression_statementContext {
    return this.getRuleContext(0, Expression_statementContext)
  }
  constructor(ctx: StatementContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterStatementTypeExpression) {
      listener.enterStatementTypeExpression(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitStatementTypeExpression) {
      listener.exitStatementTypeExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitStatementTypeExpression) {
      return visitor.visitStatementTypeExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class StatementTypeCompoundContext extends StatementContext {
  public compound_statement(): Compound_statementContext {
    return this.getRuleContext(0, Compound_statementContext)
  }
  constructor(ctx: StatementContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterStatementTypeCompound) {
      listener.enterStatementTypeCompound(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitStatementTypeCompound) {
      listener.exitStatementTypeCompound(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitStatementTypeCompound) {
      return visitor.visitStatementTypeCompound(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class StatementTypeIfContext extends StatementContext {
  public if_statement(): If_statementContext {
    return this.getRuleContext(0, If_statementContext)
  }
  constructor(ctx: StatementContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterStatementTypeIf) {
      listener.enterStatementTypeIf(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitStatementTypeIf) {
      listener.exitStatementTypeIf(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitStatementTypeIf) {
      return visitor.visitStatementTypeIf(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class StatementTypeSwitchContext extends StatementContext {
  public switch_statement(): Switch_statementContext {
    return this.getRuleContext(0, Switch_statementContext)
  }
  constructor(ctx: StatementContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterStatementTypeSwitch) {
      listener.enterStatementTypeSwitch(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitStatementTypeSwitch) {
      listener.exitStatementTypeSwitch(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitStatementTypeSwitch) {
      return visitor.visitStatementTypeSwitch(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class StatementTypeWhileContext extends StatementContext {
  public while_statement(): While_statementContext {
    return this.getRuleContext(0, While_statementContext)
  }
  constructor(ctx: StatementContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterStatementTypeWhile) {
      listener.enterStatementTypeWhile(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitStatementTypeWhile) {
      listener.exitStatementTypeWhile(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitStatementTypeWhile) {
      return visitor.visitStatementTypeWhile(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class StatementTypeDoContext extends StatementContext {
  public do_statement(): Do_statementContext {
    return this.getRuleContext(0, Do_statementContext)
  }
  constructor(ctx: StatementContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterStatementTypeDo) {
      listener.enterStatementTypeDo(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitStatementTypeDo) {
      listener.exitStatementTypeDo(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitStatementTypeDo) {
      return visitor.visitStatementTypeDo(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class StatementTypeForContext extends StatementContext {
  public for_statement(): For_statementContext {
    return this.getRuleContext(0, For_statementContext)
  }
  constructor(ctx: StatementContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterStatementTypeFor) {
      listener.enterStatementTypeFor(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitStatementTypeFor) {
      listener.exitStatementTypeFor(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitStatementTypeFor) {
      return visitor.visitStatementTypeFor(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class StatementTypeGotoContext extends StatementContext {
  public goto_statement(): Goto_statementContext {
    return this.getRuleContext(0, Goto_statementContext)
  }
  constructor(ctx: StatementContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterStatementTypeGoto) {
      listener.enterStatementTypeGoto(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitStatementTypeGoto) {
      listener.exitStatementTypeGoto(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitStatementTypeGoto) {
      return visitor.visitStatementTypeGoto(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class StatementTypeContinueContext extends StatementContext {
  public continue_statement(): Continue_statementContext {
    return this.getRuleContext(0, Continue_statementContext)
  }
  constructor(ctx: StatementContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterStatementTypeContinue) {
      listener.enterStatementTypeContinue(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitStatementTypeContinue) {
      listener.exitStatementTypeContinue(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitStatementTypeContinue) {
      return visitor.visitStatementTypeContinue(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class StatementTypeBreakContext extends StatementContext {
  public break_statement(): Break_statementContext {
    return this.getRuleContext(0, Break_statementContext)
  }
  constructor(ctx: StatementContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterStatementTypeBreak) {
      listener.enterStatementTypeBreak(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitStatementTypeBreak) {
      listener.exitStatementTypeBreak(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitStatementTypeBreak) {
      return visitor.visitStatementTypeBreak(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class StatementTypeReturnContext extends StatementContext {
  public return_statement(): Return_statementContext {
    return this.getRuleContext(0, Return_statementContext)
  }
  constructor(ctx: StatementContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterStatementTypeReturn) {
      listener.enterStatementTypeReturn(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitStatementTypeReturn) {
      listener.exitStatementTypeReturn(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitStatementTypeReturn) {
      return visitor.visitStatementTypeReturn(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Labeled_statementContext extends ParserRuleContext {
  public identifier(): IdentifierContext {
    return this.getRuleContext(0, IdentifierContext)
  }
  public COLON(): TerminalNode {
    return this.getToken(CalcParser.COLON, 0)
  }
  public statement(): StatementContext {
    return this.getRuleContext(0, StatementContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_labeled_statement
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterLabeled_statement) {
      listener.enterLabeled_statement(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitLabeled_statement) {
      listener.exitLabeled_statement(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitLabeled_statement) {
      return visitor.visitLabeled_statement(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Declaration_statementContext extends ParserRuleContext {
  public declaration_specifiers(): Declaration_specifiersContext {
    return this.getRuleContext(0, Declaration_specifiersContext)
  }
  public init_declarator_list(): Init_declarator_listContext {
    return this.getRuleContext(0, Init_declarator_listContext)
  }
  public end_statement_delimiter(): End_statement_delimiterContext {
    return this.getRuleContext(0, End_statement_delimiterContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_declaration_statement
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterDeclaration_statement) {
      listener.enterDeclaration_statement(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitDeclaration_statement) {
      listener.exitDeclaration_statement(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitDeclaration_statement) {
      return visitor.visitDeclaration_statement(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Declaration_specifiersContext extends ParserRuleContext {
  public type_specifier(): Type_specifierContext {
    return this.getRuleContext(0, Type_specifierContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_declaration_specifiers
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterDeclaration_specifiers) {
      listener.enterDeclaration_specifiers(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitDeclaration_specifiers) {
      listener.exitDeclaration_specifiers(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitDeclaration_specifiers) {
      return visitor.visitDeclaration_specifiers(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Init_declarator_listContext extends ParserRuleContext {
  public init_declarator(): Init_declaratorContext[]
  public init_declarator(i: number): Init_declaratorContext
  public init_declarator(i?: number): Init_declaratorContext | Init_declaratorContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Init_declaratorContext)
    } else {
      return this.getRuleContext(i, Init_declaratorContext)
    }
  }
  public COMMA(): TerminalNode[]
  public COMMA(i: number): TerminalNode
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(CalcParser.COMMA)
    } else {
      return this.getToken(CalcParser.COMMA, i)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_init_declarator_list
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterInit_declarator_list) {
      listener.enterInit_declarator_list(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitInit_declarator_list) {
      listener.exitInit_declarator_list(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitInit_declarator_list) {
      return visitor.visitInit_declarator_list(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Init_declaratorContext extends ParserRuleContext {
  public declarator(): DeclaratorContext {
    return this.getRuleContext(0, DeclaratorContext)
  }
  public EQUAL(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.EQUAL, 0)
  }
  public initializer(): InitializerContext | undefined {
    return this.tryGetRuleContext(0, InitializerContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_init_declarator
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterInit_declarator) {
      listener.enterInit_declarator(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitInit_declarator) {
      listener.exitInit_declarator(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitInit_declarator) {
      return visitor.visitInit_declarator(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class DeclaratorContext extends ParserRuleContext {
  public direct_declarator(): Direct_declaratorContext {
    return this.getRuleContext(0, Direct_declaratorContext)
  }
  public pointer(): PointerContext | undefined {
    return this.tryGetRuleContext(0, PointerContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_declarator
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterDeclarator) {
      listener.enterDeclarator(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitDeclarator) {
      listener.exitDeclarator(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitDeclarator) {
      return visitor.visitDeclarator(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Direct_declaratorContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_direct_declarator
  }
  public copyFrom(ctx: Direct_declaratorContext): void {
    super.copyFrom(ctx)
  }
}
export class DirectDeclaratorTypeIdentifierContext extends Direct_declaratorContext {
  public identifier(): IdentifierContext {
    return this.getRuleContext(0, IdentifierContext)
  }
  constructor(ctx: Direct_declaratorContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterDirectDeclaratorTypeIdentifier) {
      listener.enterDirectDeclaratorTypeIdentifier(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitDirectDeclaratorTypeIdentifier) {
      listener.exitDirectDeclaratorTypeIdentifier(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitDirectDeclaratorTypeIdentifier) {
      return visitor.visitDirectDeclaratorTypeIdentifier(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class DirectDeclaratorTypeNestedDeclaratorContext extends Direct_declaratorContext {
  public OPEN_PARENTHESES(): TerminalNode {
    return this.getToken(CalcParser.OPEN_PARENTHESES, 0)
  }
  public declarator(): DeclaratorContext {
    return this.getRuleContext(0, DeclaratorContext)
  }
  public CLOSE_PARENTHESES(): TerminalNode {
    return this.getToken(CalcParser.CLOSE_PARENTHESES, 0)
  }
  constructor(ctx: Direct_declaratorContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterDirectDeclaratorTypeNestedDeclarator) {
      listener.enterDirectDeclaratorTypeNestedDeclarator(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitDirectDeclaratorTypeNestedDeclarator) {
      listener.exitDirectDeclaratorTypeNestedDeclarator(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitDirectDeclaratorTypeNestedDeclarator) {
      return visitor.visitDirectDeclaratorTypeNestedDeclarator(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class DirectDeclaratorTypeRecursiveArrayContext extends Direct_declaratorContext {
  public direct_declarator(): Direct_declaratorContext {
    return this.getRuleContext(0, Direct_declaratorContext)
  }
  public OPEN_SQUARE_BRACKET(): TerminalNode {
    return this.getToken(CalcParser.OPEN_SQUARE_BRACKET, 0)
  }
  public CLOSE_SQUARE_BRACKET(): TerminalNode {
    return this.getToken(CalcParser.CLOSE_SQUARE_BRACKET, 0)
  }
  public constant_expression(): Constant_expressionContext | undefined {
    return this.tryGetRuleContext(0, Constant_expressionContext)
  }
  constructor(ctx: Direct_declaratorContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterDirectDeclaratorTypeRecursiveArray) {
      listener.enterDirectDeclaratorTypeRecursiveArray(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitDirectDeclaratorTypeRecursiveArray) {
      listener.exitDirectDeclaratorTypeRecursiveArray(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitDirectDeclaratorTypeRecursiveArray) {
      return visitor.visitDirectDeclaratorTypeRecursiveArray(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class DirectDeclaratorTypeRecursiveParametersContext extends Direct_declaratorContext {
  public direct_declarator(): Direct_declaratorContext {
    return this.getRuleContext(0, Direct_declaratorContext)
  }
  public OPEN_PARENTHESES(): TerminalNode {
    return this.getToken(CalcParser.OPEN_PARENTHESES, 0)
  }
  public CLOSE_PARENTHESES(): TerminalNode {
    return this.getToken(CalcParser.CLOSE_PARENTHESES, 0)
  }
  public parameter_type_list(): Parameter_type_listContext | undefined {
    return this.tryGetRuleContext(0, Parameter_type_listContext)
  }
  constructor(ctx: Direct_declaratorContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterDirectDeclaratorTypeRecursiveParameters) {
      listener.enterDirectDeclaratorTypeRecursiveParameters(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitDirectDeclaratorTypeRecursiveParameters) {
      listener.exitDirectDeclaratorTypeRecursiveParameters(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitDirectDeclaratorTypeRecursiveParameters) {
      return visitor.visitDirectDeclaratorTypeRecursiveParameters(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class DirectDeclaratorTypeRecursiveIdentifiersContext extends Direct_declaratorContext {
  public direct_declarator(): Direct_declaratorContext {
    return this.getRuleContext(0, Direct_declaratorContext)
  }
  public OPEN_PARENTHESES(): TerminalNode {
    return this.getToken(CalcParser.OPEN_PARENTHESES, 0)
  }
  public CLOSE_PARENTHESES(): TerminalNode {
    return this.getToken(CalcParser.CLOSE_PARENTHESES, 0)
  }
  public identifier(): IdentifierContext[]
  public identifier(i: number): IdentifierContext
  public identifier(i?: number): IdentifierContext | IdentifierContext[] {
    if (i === undefined) {
      return this.getRuleContexts(IdentifierContext)
    } else {
      return this.getRuleContext(i, IdentifierContext)
    }
  }
  constructor(ctx: Direct_declaratorContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterDirectDeclaratorTypeRecursiveIdentifiers) {
      listener.enterDirectDeclaratorTypeRecursiveIdentifiers(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitDirectDeclaratorTypeRecursiveIdentifiers) {
      listener.exitDirectDeclaratorTypeRecursiveIdentifiers(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitDirectDeclaratorTypeRecursiveIdentifiers) {
      return visitor.visitDirectDeclaratorTypeRecursiveIdentifiers(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class InitializerContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_initializer
  }
  public copyFrom(ctx: InitializerContext): void {
    super.copyFrom(ctx)
  }
}
export class InitializerTypeConditionalExpressionContext extends InitializerContext {
  public conditional_expression(): Conditional_expressionContext {
    return this.getRuleContext(0, Conditional_expressionContext)
  }
  constructor(ctx: InitializerContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterInitializerTypeConditionalExpression) {
      listener.enterInitializerTypeConditionalExpression(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitInitializerTypeConditionalExpression) {
      listener.exitInitializerTypeConditionalExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitInitializerTypeConditionalExpression) {
      return visitor.visitInitializerTypeConditionalExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class InitializerTypeArrayContext extends InitializerContext {
  public OPEN_CURLY_BRACKET(): TerminalNode {
    return this.getToken(CalcParser.OPEN_CURLY_BRACKET, 0)
  }
  public initializer_list(): Initializer_listContext {
    return this.getRuleContext(0, Initializer_listContext)
  }
  public CLOSE_CURLY_BRACKET(): TerminalNode {
    return this.getToken(CalcParser.CLOSE_CURLY_BRACKET, 0)
  }
  public COMMA(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.COMMA, 0)
  }
  constructor(ctx: InitializerContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterInitializerTypeArray) {
      listener.enterInitializerTypeArray(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitInitializerTypeArray) {
      listener.exitInitializerTypeArray(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitInitializerTypeArray) {
      return visitor.visitInitializerTypeArray(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Initializer_listContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_initializer_list
  }
  public copyFrom(ctx: Initializer_listContext): void {
    super.copyFrom(ctx)
  }
}
export class InitializerListTypeInitializerContext extends Initializer_listContext {
  public initializer(): InitializerContext {
    return this.getRuleContext(0, InitializerContext)
  }
  constructor(ctx: Initializer_listContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterInitializerListTypeInitializer) {
      listener.enterInitializerListTypeInitializer(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitInitializerListTypeInitializer) {
      listener.exitInitializerListTypeInitializer(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitInitializerListTypeInitializer) {
      return visitor.visitInitializerListTypeInitializer(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class InitializerListTypeRecursiveInitializerContext extends Initializer_listContext {
  public initializer_list(): Initializer_listContext {
    return this.getRuleContext(0, Initializer_listContext)
  }
  public COMMA(): TerminalNode {
    return this.getToken(CalcParser.COMMA, 0)
  }
  public initializer(): InitializerContext {
    return this.getRuleContext(0, InitializerContext)
  }
  constructor(ctx: Initializer_listContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterInitializerListTypeRecursiveInitializer) {
      listener.enterInitializerListTypeRecursiveInitializer(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitInitializerListTypeRecursiveInitializer) {
      listener.exitInitializerListTypeRecursiveInitializer(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitInitializerListTypeRecursiveInitializer) {
      return visitor.visitInitializerListTypeRecursiveInitializer(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Expression_statementContext extends ParserRuleContext {
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)
  }
  public end_statement_delimiter(): End_statement_delimiterContext {
    return this.getRuleContext(0, End_statement_delimiterContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_expression_statement
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterExpression_statement) {
      listener.enterExpression_statement(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitExpression_statement) {
      listener.exitExpression_statement(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitExpression_statement) {
      return visitor.visitExpression_statement(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ExpressionContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_expression
  }
  public copyFrom(ctx: ExpressionContext): void {
    super.copyFrom(ctx)
  }
}
export class ExpressionTypeAssignmentContext extends ExpressionContext {
  public assignment_expression(): Assignment_expressionContext {
    return this.getRuleContext(0, Assignment_expressionContext)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterExpressionTypeAssignment) {
      listener.enterExpressionTypeAssignment(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitExpressionTypeAssignment) {
      listener.exitExpressionTypeAssignment(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitExpressionTypeAssignment) {
      return visitor.visitExpressionTypeAssignment(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class ExpressionTypeExpressionContext extends ExpressionContext {
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)
  }
  public COMMA(): TerminalNode {
    return this.getToken(CalcParser.COMMA, 0)
  }
  public assignment_expression(): Assignment_expressionContext {
    return this.getRuleContext(0, Assignment_expressionContext)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterExpressionTypeExpression) {
      listener.enterExpressionTypeExpression(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitExpressionTypeExpression) {
      listener.exitExpressionTypeExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitExpressionTypeExpression) {
      return visitor.visitExpressionTypeExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Assignment_expressionContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_assignment_expression
  }
  public copyFrom(ctx: Assignment_expressionContext): void {
    super.copyFrom(ctx)
  }
}
export class AssignmentExpressionTypeConditionalContext extends Assignment_expressionContext {
  public conditional_expression(): Conditional_expressionContext {
    return this.getRuleContext(0, Conditional_expressionContext)
  }
  constructor(ctx: Assignment_expressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterAssignmentExpressionTypeConditional) {
      listener.enterAssignmentExpressionTypeConditional(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitAssignmentExpressionTypeConditional) {
      listener.exitAssignmentExpressionTypeConditional(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitAssignmentExpressionTypeConditional) {
      return visitor.visitAssignmentExpressionTypeConditional(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class AssignmentExpressionTypeAssignmentContext extends Assignment_expressionContext {
  public unary_expression(): Unary_expressionContext {
    return this.getRuleContext(0, Unary_expressionContext)
  }
  public assignment_operator(): Assignment_operatorContext {
    return this.getRuleContext(0, Assignment_operatorContext)
  }
  public assignment_expression(): Assignment_expressionContext {
    return this.getRuleContext(0, Assignment_expressionContext)
  }
  constructor(ctx: Assignment_expressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterAssignmentExpressionTypeAssignment) {
      listener.enterAssignmentExpressionTypeAssignment(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitAssignmentExpressionTypeAssignment) {
      listener.exitAssignmentExpressionTypeAssignment(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitAssignmentExpressionTypeAssignment) {
      return visitor.visitAssignmentExpressionTypeAssignment(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Constant_expressionContext extends ParserRuleContext {
  public conditional_expression(): Conditional_expressionContext {
    return this.getRuleContext(0, Conditional_expressionContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_constant_expression
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterConstant_expression) {
      listener.enterConstant_expression(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitConstant_expression) {
      listener.exitConstant_expression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitConstant_expression) {
      return visitor.visitConstant_expression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Conditional_expressionContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_conditional_expression
  }
  public copyFrom(ctx: Conditional_expressionContext): void {
    super.copyFrom(ctx)
  }
}
export class ConditionalExpressionTypeLogicalOrContext extends Conditional_expressionContext {
  public logical_or_expression(): Logical_or_expressionContext {
    return this.getRuleContext(0, Logical_or_expressionContext)
  }
  constructor(ctx: Conditional_expressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterConditionalExpressionTypeLogicalOr) {
      listener.enterConditionalExpressionTypeLogicalOr(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitConditionalExpressionTypeLogicalOr) {
      listener.exitConditionalExpressionTypeLogicalOr(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitConditionalExpressionTypeLogicalOr) {
      return visitor.visitConditionalExpressionTypeLogicalOr(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class ConditionalExpressionTypeConditionalContext extends Conditional_expressionContext {
  public logical_or_expression(): Logical_or_expressionContext {
    return this.getRuleContext(0, Logical_or_expressionContext)
  }
  public QUESTION_MARK(): TerminalNode {
    return this.getToken(CalcParser.QUESTION_MARK, 0)
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)
  }
  public COLON(): TerminalNode {
    return this.getToken(CalcParser.COLON, 0)
  }
  public conditional_expression(): Conditional_expressionContext {
    return this.getRuleContext(0, Conditional_expressionContext)
  }
  constructor(ctx: Conditional_expressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterConditionalExpressionTypeConditional) {
      listener.enterConditionalExpressionTypeConditional(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitConditionalExpressionTypeConditional) {
      listener.exitConditionalExpressionTypeConditional(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitConditionalExpressionTypeConditional) {
      return visitor.visitConditionalExpressionTypeConditional(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Logical_or_expressionContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_logical_or_expression
  }
  public copyFrom(ctx: Logical_or_expressionContext): void {
    super.copyFrom(ctx)
  }
}
export class LogicalOrExpressionTypeLogicalAndContext extends Logical_or_expressionContext {
  public logical_and_expression(): Logical_and_expressionContext {
    return this.getRuleContext(0, Logical_and_expressionContext)
  }
  constructor(ctx: Logical_or_expressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterLogicalOrExpressionTypeLogicalAnd) {
      listener.enterLogicalOrExpressionTypeLogicalAnd(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitLogicalOrExpressionTypeLogicalAnd) {
      listener.exitLogicalOrExpressionTypeLogicalAnd(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitLogicalOrExpressionTypeLogicalAnd) {
      return visitor.visitLogicalOrExpressionTypeLogicalAnd(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class LogicalOrExpressionTypeLogicalOrContext extends Logical_or_expressionContext {
  public logical_or_expression(): Logical_or_expressionContext {
    return this.getRuleContext(0, Logical_or_expressionContext)
  }
  public BOOLEAN_OR(): TerminalNode {
    return this.getToken(CalcParser.BOOLEAN_OR, 0)
  }
  public logical_and_expression(): Logical_and_expressionContext {
    return this.getRuleContext(0, Logical_and_expressionContext)
  }
  constructor(ctx: Logical_or_expressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterLogicalOrExpressionTypeLogicalOr) {
      listener.enterLogicalOrExpressionTypeLogicalOr(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitLogicalOrExpressionTypeLogicalOr) {
      listener.exitLogicalOrExpressionTypeLogicalOr(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitLogicalOrExpressionTypeLogicalOr) {
      return visitor.visitLogicalOrExpressionTypeLogicalOr(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Logical_and_expressionContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_logical_and_expression
  }
  public copyFrom(ctx: Logical_and_expressionContext): void {
    super.copyFrom(ctx)
  }
}
export class LogicalAndExpressionTypeInclusiveOrContext extends Logical_and_expressionContext {
  public inclusive_or_expression(): Inclusive_or_expressionContext {
    return this.getRuleContext(0, Inclusive_or_expressionContext)
  }
  constructor(ctx: Logical_and_expressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterLogicalAndExpressionTypeInclusiveOr) {
      listener.enterLogicalAndExpressionTypeInclusiveOr(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitLogicalAndExpressionTypeInclusiveOr) {
      listener.exitLogicalAndExpressionTypeInclusiveOr(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitLogicalAndExpressionTypeInclusiveOr) {
      return visitor.visitLogicalAndExpressionTypeInclusiveOr(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class LogicalAndExpressionTypeLogicalAndContext extends Logical_and_expressionContext {
  public logical_and_expression(): Logical_and_expressionContext {
    return this.getRuleContext(0, Logical_and_expressionContext)
  }
  public BOOLEAN_AND(): TerminalNode {
    return this.getToken(CalcParser.BOOLEAN_AND, 0)
  }
  public inclusive_or_expression(): Inclusive_or_expressionContext {
    return this.getRuleContext(0, Inclusive_or_expressionContext)
  }
  constructor(ctx: Logical_and_expressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterLogicalAndExpressionTypeLogicalAnd) {
      listener.enterLogicalAndExpressionTypeLogicalAnd(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitLogicalAndExpressionTypeLogicalAnd) {
      listener.exitLogicalAndExpressionTypeLogicalAnd(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitLogicalAndExpressionTypeLogicalAnd) {
      return visitor.visitLogicalAndExpressionTypeLogicalAnd(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Inclusive_or_expressionContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_inclusive_or_expression
  }
  public copyFrom(ctx: Inclusive_or_expressionContext): void {
    super.copyFrom(ctx)
  }
}
export class InclusiveOrExpressionTypeExclusiveOrContext extends Inclusive_or_expressionContext {
  public exclusive_or_expression(): Exclusive_or_expressionContext {
    return this.getRuleContext(0, Exclusive_or_expressionContext)
  }
  constructor(ctx: Inclusive_or_expressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterInclusiveOrExpressionTypeExclusiveOr) {
      listener.enterInclusiveOrExpressionTypeExclusiveOr(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitInclusiveOrExpressionTypeExclusiveOr) {
      listener.exitInclusiveOrExpressionTypeExclusiveOr(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitInclusiveOrExpressionTypeExclusiveOr) {
      return visitor.visitInclusiveOrExpressionTypeExclusiveOr(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class InclusiveOrExpressionTypeInclusiveOrContext extends Inclusive_or_expressionContext {
  public inclusive_or_expression(): Inclusive_or_expressionContext {
    return this.getRuleContext(0, Inclusive_or_expressionContext)
  }
  public VERTICAL_BAR(): TerminalNode {
    return this.getToken(CalcParser.VERTICAL_BAR, 0)
  }
  public exclusive_or_expression(): Exclusive_or_expressionContext {
    return this.getRuleContext(0, Exclusive_or_expressionContext)
  }
  constructor(ctx: Inclusive_or_expressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterInclusiveOrExpressionTypeInclusiveOr) {
      listener.enterInclusiveOrExpressionTypeInclusiveOr(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitInclusiveOrExpressionTypeInclusiveOr) {
      listener.exitInclusiveOrExpressionTypeInclusiveOr(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitInclusiveOrExpressionTypeInclusiveOr) {
      return visitor.visitInclusiveOrExpressionTypeInclusiveOr(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Exclusive_or_expressionContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_exclusive_or_expression
  }
  public copyFrom(ctx: Exclusive_or_expressionContext): void {
    super.copyFrom(ctx)
  }
}
export class ExclusiveOrExpressionTypeAndContext extends Exclusive_or_expressionContext {
  public and_expression(): And_expressionContext {
    return this.getRuleContext(0, And_expressionContext)
  }
  constructor(ctx: Exclusive_or_expressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterExclusiveOrExpressionTypeAnd) {
      listener.enterExclusiveOrExpressionTypeAnd(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitExclusiveOrExpressionTypeAnd) {
      listener.exitExclusiveOrExpressionTypeAnd(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitExclusiveOrExpressionTypeAnd) {
      return visitor.visitExclusiveOrExpressionTypeAnd(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class ExclusiveOrExpressionTypeExclusiveOrContext extends Exclusive_or_expressionContext {
  public exclusive_or_expression(): Exclusive_or_expressionContext {
    return this.getRuleContext(0, Exclusive_or_expressionContext)
  }
  public CARET(): TerminalNode {
    return this.getToken(CalcParser.CARET, 0)
  }
  public and_expression(): And_expressionContext {
    return this.getRuleContext(0, And_expressionContext)
  }
  constructor(ctx: Exclusive_or_expressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterExclusiveOrExpressionTypeExclusiveOr) {
      listener.enterExclusiveOrExpressionTypeExclusiveOr(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitExclusiveOrExpressionTypeExclusiveOr) {
      listener.exitExclusiveOrExpressionTypeExclusiveOr(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitExclusiveOrExpressionTypeExclusiveOr) {
      return visitor.visitExclusiveOrExpressionTypeExclusiveOr(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class And_expressionContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_and_expression
  }
  public copyFrom(ctx: And_expressionContext): void {
    super.copyFrom(ctx)
  }
}
export class AndExpressionTypeEqualityContext extends And_expressionContext {
  public equality_expression(): Equality_expressionContext {
    return this.getRuleContext(0, Equality_expressionContext)
  }
  constructor(ctx: And_expressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterAndExpressionTypeEquality) {
      listener.enterAndExpressionTypeEquality(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitAndExpressionTypeEquality) {
      listener.exitAndExpressionTypeEquality(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitAndExpressionTypeEquality) {
      return visitor.visitAndExpressionTypeEquality(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class AndExpressionTypeAndContext extends And_expressionContext {
  public and_expression(): And_expressionContext {
    return this.getRuleContext(0, And_expressionContext)
  }
  public AMPERSAND(): TerminalNode {
    return this.getToken(CalcParser.AMPERSAND, 0)
  }
  public equality_expression(): Equality_expressionContext {
    return this.getRuleContext(0, Equality_expressionContext)
  }
  constructor(ctx: And_expressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterAndExpressionTypeAnd) {
      listener.enterAndExpressionTypeAnd(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitAndExpressionTypeAnd) {
      listener.exitAndExpressionTypeAnd(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitAndExpressionTypeAnd) {
      return visitor.visitAndExpressionTypeAnd(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Equality_expressionContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_equality_expression
  }
  public copyFrom(ctx: Equality_expressionContext): void {
    super.copyFrom(ctx)
  }
}
export class EqualityExpressionTypeRelationalContext extends Equality_expressionContext {
  public relational_expression(): Relational_expressionContext {
    return this.getRuleContext(0, Relational_expressionContext)
  }
  constructor(ctx: Equality_expressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterEqualityExpressionTypeRelational) {
      listener.enterEqualityExpressionTypeRelational(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitEqualityExpressionTypeRelational) {
      listener.exitEqualityExpressionTypeRelational(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitEqualityExpressionTypeRelational) {
      return visitor.visitEqualityExpressionTypeRelational(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class EqualityExpressionTypeEqualityEqualContext extends Equality_expressionContext {
  public equality_expression(): Equality_expressionContext {
    return this.getRuleContext(0, Equality_expressionContext)
  }
  public EQUALITY_EQUAL(): TerminalNode {
    return this.getToken(CalcParser.EQUALITY_EQUAL, 0)
  }
  public relational_expression(): Relational_expressionContext {
    return this.getRuleContext(0, Relational_expressionContext)
  }
  constructor(ctx: Equality_expressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterEqualityExpressionTypeEqualityEqual) {
      listener.enterEqualityExpressionTypeEqualityEqual(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitEqualityExpressionTypeEqualityEqual) {
      listener.exitEqualityExpressionTypeEqualityEqual(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitEqualityExpressionTypeEqualityEqual) {
      return visitor.visitEqualityExpressionTypeEqualityEqual(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class EqualityExpressionTypeEqualityNotEqualContext extends Equality_expressionContext {
  public equality_expression(): Equality_expressionContext {
    return this.getRuleContext(0, Equality_expressionContext)
  }
  public EQUALITY_NOT_EQUAL(): TerminalNode {
    return this.getToken(CalcParser.EQUALITY_NOT_EQUAL, 0)
  }
  public relational_expression(): Relational_expressionContext {
    return this.getRuleContext(0, Relational_expressionContext)
  }
  constructor(ctx: Equality_expressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterEqualityExpressionTypeEqualityNotEqual) {
      listener.enterEqualityExpressionTypeEqualityNotEqual(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitEqualityExpressionTypeEqualityNotEqual) {
      listener.exitEqualityExpressionTypeEqualityNotEqual(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitEqualityExpressionTypeEqualityNotEqual) {
      return visitor.visitEqualityExpressionTypeEqualityNotEqual(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Relational_expressionContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_relational_expression
  }
  public copyFrom(ctx: Relational_expressionContext): void {
    super.copyFrom(ctx)
  }
}
export class RelationalExpressionTypeShiftContext extends Relational_expressionContext {
  public shift_expression(): Shift_expressionContext {
    return this.getRuleContext(0, Shift_expressionContext)
  }
  constructor(ctx: Relational_expressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterRelationalExpressionTypeShift) {
      listener.enterRelationalExpressionTypeShift(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitRelationalExpressionTypeShift) {
      listener.exitRelationalExpressionTypeShift(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitRelationalExpressionTypeShift) {
      return visitor.visitRelationalExpressionTypeShift(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class RelationalExpressionTypeRelationalGTContext extends Relational_expressionContext {
  public relational_expression(): Relational_expressionContext {
    return this.getRuleContext(0, Relational_expressionContext)
  }
  public RELATIONAL_GREATER_THAN(): TerminalNode {
    return this.getToken(CalcParser.RELATIONAL_GREATER_THAN, 0)
  }
  public shift_expression(): Shift_expressionContext {
    return this.getRuleContext(0, Shift_expressionContext)
  }
  constructor(ctx: Relational_expressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterRelationalExpressionTypeRelationalGT) {
      listener.enterRelationalExpressionTypeRelationalGT(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitRelationalExpressionTypeRelationalGT) {
      listener.exitRelationalExpressionTypeRelationalGT(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitRelationalExpressionTypeRelationalGT) {
      return visitor.visitRelationalExpressionTypeRelationalGT(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class RelationalExpressionTypeRelationalLTContext extends Relational_expressionContext {
  public relational_expression(): Relational_expressionContext {
    return this.getRuleContext(0, Relational_expressionContext)
  }
  public RELATIONAL_LESS_THAN(): TerminalNode {
    return this.getToken(CalcParser.RELATIONAL_LESS_THAN, 0)
  }
  public shift_expression(): Shift_expressionContext {
    return this.getRuleContext(0, Shift_expressionContext)
  }
  constructor(ctx: Relational_expressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterRelationalExpressionTypeRelationalLT) {
      listener.enterRelationalExpressionTypeRelationalLT(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitRelationalExpressionTypeRelationalLT) {
      listener.exitRelationalExpressionTypeRelationalLT(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitRelationalExpressionTypeRelationalLT) {
      return visitor.visitRelationalExpressionTypeRelationalLT(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class RelationalExpressionTypeRelationalLTOEContext extends Relational_expressionContext {
  public relational_expression(): Relational_expressionContext {
    return this.getRuleContext(0, Relational_expressionContext)
  }
  public RELATIONAL_LESS_THAN_OR_EQUAL(): TerminalNode {
    return this.getToken(CalcParser.RELATIONAL_LESS_THAN_OR_EQUAL, 0)
  }
  public shift_expression(): Shift_expressionContext {
    return this.getRuleContext(0, Shift_expressionContext)
  }
  constructor(ctx: Relational_expressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterRelationalExpressionTypeRelationalLTOE) {
      listener.enterRelationalExpressionTypeRelationalLTOE(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitRelationalExpressionTypeRelationalLTOE) {
      listener.exitRelationalExpressionTypeRelationalLTOE(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitRelationalExpressionTypeRelationalLTOE) {
      return visitor.visitRelationalExpressionTypeRelationalLTOE(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class RelationalExpressionTypeRelationalGTOEContext extends Relational_expressionContext {
  public relational_expression(): Relational_expressionContext {
    return this.getRuleContext(0, Relational_expressionContext)
  }
  public RELATIONAL_GREATER_THAN_OR_EQUAL(): TerminalNode {
    return this.getToken(CalcParser.RELATIONAL_GREATER_THAN_OR_EQUAL, 0)
  }
  public shift_expression(): Shift_expressionContext {
    return this.getRuleContext(0, Shift_expressionContext)
  }
  constructor(ctx: Relational_expressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterRelationalExpressionTypeRelationalGTOE) {
      listener.enterRelationalExpressionTypeRelationalGTOE(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitRelationalExpressionTypeRelationalGTOE) {
      listener.exitRelationalExpressionTypeRelationalGTOE(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitRelationalExpressionTypeRelationalGTOE) {
      return visitor.visitRelationalExpressionTypeRelationalGTOE(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Shift_expressionContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_shift_expression
  }
  public copyFrom(ctx: Shift_expressionContext): void {
    super.copyFrom(ctx)
  }
}
export class ShfitExpressionTypeAdditiveContext extends Shift_expressionContext {
  public additive_expression(): Additive_expressionContext {
    return this.getRuleContext(0, Additive_expressionContext)
  }
  constructor(ctx: Shift_expressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterShfitExpressionTypeAdditive) {
      listener.enterShfitExpressionTypeAdditive(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitShfitExpressionTypeAdditive) {
      listener.exitShfitExpressionTypeAdditive(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitShfitExpressionTypeAdditive) {
      return visitor.visitShfitExpressionTypeAdditive(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class ShfitExpressionTypeShiftLeftContext extends Shift_expressionContext {
  public shift_expression(): Shift_expressionContext {
    return this.getRuleContext(0, Shift_expressionContext)
  }
  public SHIFT_LEFT(): TerminalNode {
    return this.getToken(CalcParser.SHIFT_LEFT, 0)
  }
  public additive_expression(): Additive_expressionContext {
    return this.getRuleContext(0, Additive_expressionContext)
  }
  constructor(ctx: Shift_expressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterShfitExpressionTypeShiftLeft) {
      listener.enterShfitExpressionTypeShiftLeft(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitShfitExpressionTypeShiftLeft) {
      listener.exitShfitExpressionTypeShiftLeft(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitShfitExpressionTypeShiftLeft) {
      return visitor.visitShfitExpressionTypeShiftLeft(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class ShfitExpressionTypeShiftRightContext extends Shift_expressionContext {
  public shift_expression(): Shift_expressionContext {
    return this.getRuleContext(0, Shift_expressionContext)
  }
  public SHIFT_RIGHT(): TerminalNode {
    return this.getToken(CalcParser.SHIFT_RIGHT, 0)
  }
  public additive_expression(): Additive_expressionContext {
    return this.getRuleContext(0, Additive_expressionContext)
  }
  constructor(ctx: Shift_expressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterShfitExpressionTypeShiftRight) {
      listener.enterShfitExpressionTypeShiftRight(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitShfitExpressionTypeShiftRight) {
      listener.exitShfitExpressionTypeShiftRight(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitShfitExpressionTypeShiftRight) {
      return visitor.visitShfitExpressionTypeShiftRight(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Additive_expressionContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_additive_expression
  }
  public copyFrom(ctx: Additive_expressionContext): void {
    super.copyFrom(ctx)
  }
}
export class AdditiveExpressionTypeMultiplicativeContext extends Additive_expressionContext {
  public multiplicative_expression(): Multiplicative_expressionContext {
    return this.getRuleContext(0, Multiplicative_expressionContext)
  }
  constructor(ctx: Additive_expressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterAdditiveExpressionTypeMultiplicative) {
      listener.enterAdditiveExpressionTypeMultiplicative(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitAdditiveExpressionTypeMultiplicative) {
      listener.exitAdditiveExpressionTypeMultiplicative(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitAdditiveExpressionTypeMultiplicative) {
      return visitor.visitAdditiveExpressionTypeMultiplicative(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class AdditiveExpressionTypeAdditiveAddContext extends Additive_expressionContext {
  public additive_expression(): Additive_expressionContext {
    return this.getRuleContext(0, Additive_expressionContext)
  }
  public PLUS(): TerminalNode {
    return this.getToken(CalcParser.PLUS, 0)
  }
  public multiplicative_expression(): Multiplicative_expressionContext {
    return this.getRuleContext(0, Multiplicative_expressionContext)
  }
  constructor(ctx: Additive_expressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterAdditiveExpressionTypeAdditiveAdd) {
      listener.enterAdditiveExpressionTypeAdditiveAdd(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitAdditiveExpressionTypeAdditiveAdd) {
      listener.exitAdditiveExpressionTypeAdditiveAdd(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitAdditiveExpressionTypeAdditiveAdd) {
      return visitor.visitAdditiveExpressionTypeAdditiveAdd(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class AdditiveExpressionTypeAdditiveMinusContext extends Additive_expressionContext {
  public additive_expression(): Additive_expressionContext {
    return this.getRuleContext(0, Additive_expressionContext)
  }
  public MINUS(): TerminalNode {
    return this.getToken(CalcParser.MINUS, 0)
  }
  public multiplicative_expression(): Multiplicative_expressionContext {
    return this.getRuleContext(0, Multiplicative_expressionContext)
  }
  constructor(ctx: Additive_expressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterAdditiveExpressionTypeAdditiveMinus) {
      listener.enterAdditiveExpressionTypeAdditiveMinus(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitAdditiveExpressionTypeAdditiveMinus) {
      listener.exitAdditiveExpressionTypeAdditiveMinus(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitAdditiveExpressionTypeAdditiveMinus) {
      return visitor.visitAdditiveExpressionTypeAdditiveMinus(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Multiplicative_expressionContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_multiplicative_expression
  }
  public copyFrom(ctx: Multiplicative_expressionContext): void {
    super.copyFrom(ctx)
  }
}
export class MultiplicativeExpressionTypeCastContext extends Multiplicative_expressionContext {
  public cast_expression(): Cast_expressionContext {
    return this.getRuleContext(0, Cast_expressionContext)
  }
  constructor(ctx: Multiplicative_expressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterMultiplicativeExpressionTypeCast) {
      listener.enterMultiplicativeExpressionTypeCast(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitMultiplicativeExpressionTypeCast) {
      listener.exitMultiplicativeExpressionTypeCast(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitMultiplicativeExpressionTypeCast) {
      return visitor.visitMultiplicativeExpressionTypeCast(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class MultiplicativeExpressionTypeMultiplicativeAsterickContext extends Multiplicative_expressionContext {
  public multiplicative_expression(): Multiplicative_expressionContext {
    return this.getRuleContext(0, Multiplicative_expressionContext)
  }
  public ASTERICK(): TerminalNode {
    return this.getToken(CalcParser.ASTERICK, 0)
  }
  public cast_expression(): Cast_expressionContext {
    return this.getRuleContext(0, Cast_expressionContext)
  }
  constructor(ctx: Multiplicative_expressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterMultiplicativeExpressionTypeMultiplicativeAsterick) {
      listener.enterMultiplicativeExpressionTypeMultiplicativeAsterick(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitMultiplicativeExpressionTypeMultiplicativeAsterick) {
      listener.exitMultiplicativeExpressionTypeMultiplicativeAsterick(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitMultiplicativeExpressionTypeMultiplicativeAsterick) {
      return visitor.visitMultiplicativeExpressionTypeMultiplicativeAsterick(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class MultiplicativeExpressionTypeMultiplicativeBackslashContext extends Multiplicative_expressionContext {
  public multiplicative_expression(): Multiplicative_expressionContext {
    return this.getRuleContext(0, Multiplicative_expressionContext)
  }
  public BACKSLASH(): TerminalNode {
    return this.getToken(CalcParser.BACKSLASH, 0)
  }
  public cast_expression(): Cast_expressionContext {
    return this.getRuleContext(0, Cast_expressionContext)
  }
  constructor(ctx: Multiplicative_expressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterMultiplicativeExpressionTypeMultiplicativeBackslash) {
      listener.enterMultiplicativeExpressionTypeMultiplicativeBackslash(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitMultiplicativeExpressionTypeMultiplicativeBackslash) {
      listener.exitMultiplicativeExpressionTypeMultiplicativeBackslash(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitMultiplicativeExpressionTypeMultiplicativeBackslash) {
      return visitor.visitMultiplicativeExpressionTypeMultiplicativeBackslash(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class MultiplicativeExpressionTypeMultiplicativePercentContext extends Multiplicative_expressionContext {
  public multiplicative_expression(): Multiplicative_expressionContext {
    return this.getRuleContext(0, Multiplicative_expressionContext)
  }
  public PERCENT(): TerminalNode {
    return this.getToken(CalcParser.PERCENT, 0)
  }
  public cast_expression(): Cast_expressionContext {
    return this.getRuleContext(0, Cast_expressionContext)
  }
  constructor(ctx: Multiplicative_expressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterMultiplicativeExpressionTypeMultiplicativePercent) {
      listener.enterMultiplicativeExpressionTypeMultiplicativePercent(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitMultiplicativeExpressionTypeMultiplicativePercent) {
      listener.exitMultiplicativeExpressionTypeMultiplicativePercent(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitMultiplicativeExpressionTypeMultiplicativePercent) {
      return visitor.visitMultiplicativeExpressionTypeMultiplicativePercent(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Cast_expressionContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_cast_expression
  }
  public copyFrom(ctx: Cast_expressionContext): void {
    super.copyFrom(ctx)
  }
}
export class CastExpressionTypeUnaryContext extends Cast_expressionContext {
  public unary_expression(): Unary_expressionContext {
    return this.getRuleContext(0, Unary_expressionContext)
  }
  constructor(ctx: Cast_expressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterCastExpressionTypeUnary) {
      listener.enterCastExpressionTypeUnary(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitCastExpressionTypeUnary) {
      listener.exitCastExpressionTypeUnary(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitCastExpressionTypeUnary) {
      return visitor.visitCastExpressionTypeUnary(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class CastExpressionTypeCastContext extends Cast_expressionContext {
  public OPEN_PARENTHESES(): TerminalNode {
    return this.getToken(CalcParser.OPEN_PARENTHESES, 0)
  }
  public type_name(): Type_nameContext {
    return this.getRuleContext(0, Type_nameContext)
  }
  public CLOSE_PARENTHESES(): TerminalNode {
    return this.getToken(CalcParser.CLOSE_PARENTHESES, 0)
  }
  public cast_expression(): Cast_expressionContext {
    return this.getRuleContext(0, Cast_expressionContext)
  }
  constructor(ctx: Cast_expressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterCastExpressionTypeCast) {
      listener.enterCastExpressionTypeCast(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitCastExpressionTypeCast) {
      listener.exitCastExpressionTypeCast(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitCastExpressionTypeCast) {
      return visitor.visitCastExpressionTypeCast(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Type_nameContext extends ParserRuleContext {
  public type_specifier(): Type_specifierContext {
    return this.getRuleContext(0, Type_specifierContext)
  }
  public abstract_declarator(): Abstract_declaratorContext | undefined {
    return this.tryGetRuleContext(0, Abstract_declaratorContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_type_name
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterType_name) {
      listener.enterType_name(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitType_name) {
      listener.exitType_name(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitType_name) {
      return visitor.visitType_name(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Abstract_declaratorContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_abstract_declarator
  }
  public copyFrom(ctx: Abstract_declaratorContext): void {
    super.copyFrom(ctx)
  }
}
export class AbstractDeclaratorTypePointerContext extends Abstract_declaratorContext {
  public pointer(): PointerContext {
    return this.getRuleContext(0, PointerContext)
  }
  constructor(ctx: Abstract_declaratorContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterAbstractDeclaratorTypePointer) {
      listener.enterAbstractDeclaratorTypePointer(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitAbstractDeclaratorTypePointer) {
      listener.exitAbstractDeclaratorTypePointer(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitAbstractDeclaratorTypePointer) {
      return visitor.visitAbstractDeclaratorTypePointer(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class AbstractDeclaratorTypeDirectAbstractDeclaratorContext extends Abstract_declaratorContext {
  public direct_abstract_declarator(): Direct_abstract_declaratorContext {
    return this.getRuleContext(0, Direct_abstract_declaratorContext)
  }
  public pointer(): PointerContext | undefined {
    return this.tryGetRuleContext(0, PointerContext)
  }
  constructor(ctx: Abstract_declaratorContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterAbstractDeclaratorTypeDirectAbstractDeclarator) {
      listener.enterAbstractDeclaratorTypeDirectAbstractDeclarator(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitAbstractDeclaratorTypeDirectAbstractDeclarator) {
      listener.exitAbstractDeclaratorTypeDirectAbstractDeclarator(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitAbstractDeclaratorTypeDirectAbstractDeclarator) {
      return visitor.visitAbstractDeclaratorTypeDirectAbstractDeclarator(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Direct_abstract_declaratorContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_direct_abstract_declarator
  }
  public copyFrom(ctx: Direct_abstract_declaratorContext): void {
    super.copyFrom(ctx)
  }
}
export class DirectAbstractDeclaratorTypeNestedAbstractDeclaratorContext extends Direct_abstract_declaratorContext {
  public OPEN_PARENTHESES(): TerminalNode {
    return this.getToken(CalcParser.OPEN_PARENTHESES, 0)
  }
  public abstract_declarator(): Abstract_declaratorContext {
    return this.getRuleContext(0, Abstract_declaratorContext)
  }
  public CLOSE_PARENTHESES(): TerminalNode {
    return this.getToken(CalcParser.CLOSE_PARENTHESES, 0)
  }
  constructor(ctx: Direct_abstract_declaratorContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterDirectAbstractDeclaratorTypeNestedAbstractDeclarator) {
      listener.enterDirectAbstractDeclaratorTypeNestedAbstractDeclarator(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitDirectAbstractDeclaratorTypeNestedAbstractDeclarator) {
      listener.exitDirectAbstractDeclaratorTypeNestedAbstractDeclarator(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitDirectAbstractDeclaratorTypeNestedAbstractDeclarator) {
      return visitor.visitDirectAbstractDeclaratorTypeNestedAbstractDeclarator(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class DirectAbstractDeclaratorTypeArrayContext extends Direct_abstract_declaratorContext {
  public OPEN_SQUARE_BRACKET(): TerminalNode {
    return this.getToken(CalcParser.OPEN_SQUARE_BRACKET, 0)
  }
  public CLOSE_SQUARE_BRACKET(): TerminalNode {
    return this.getToken(CalcParser.CLOSE_SQUARE_BRACKET, 0)
  }
  public constant_expression(): Constant_expressionContext | undefined {
    return this.tryGetRuleContext(0, Constant_expressionContext)
  }
  constructor(ctx: Direct_abstract_declaratorContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterDirectAbstractDeclaratorTypeArray) {
      listener.enterDirectAbstractDeclaratorTypeArray(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitDirectAbstractDeclaratorTypeArray) {
      listener.exitDirectAbstractDeclaratorTypeArray(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitDirectAbstractDeclaratorTypeArray) {
      return visitor.visitDirectAbstractDeclaratorTypeArray(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class DirectAbstractDeclaratorTypeParametersContext extends Direct_abstract_declaratorContext {
  public OPEN_PARENTHESES(): TerminalNode {
    return this.getToken(CalcParser.OPEN_PARENTHESES, 0)
  }
  public CLOSE_PARENTHESES(): TerminalNode {
    return this.getToken(CalcParser.CLOSE_PARENTHESES, 0)
  }
  public parameter_type_list(): Parameter_type_listContext | undefined {
    return this.tryGetRuleContext(0, Parameter_type_listContext)
  }
  constructor(ctx: Direct_abstract_declaratorContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterDirectAbstractDeclaratorTypeParameters) {
      listener.enterDirectAbstractDeclaratorTypeParameters(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitDirectAbstractDeclaratorTypeParameters) {
      listener.exitDirectAbstractDeclaratorTypeParameters(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitDirectAbstractDeclaratorTypeParameters) {
      return visitor.visitDirectAbstractDeclaratorTypeParameters(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class DirectAbstractDeclaratorTypeRecursiveArrayContext extends Direct_abstract_declaratorContext {
  public direct_abstract_declarator(): Direct_abstract_declaratorContext {
    return this.getRuleContext(0, Direct_abstract_declaratorContext)
  }
  public OPEN_SQUARE_BRACKET(): TerminalNode {
    return this.getToken(CalcParser.OPEN_SQUARE_BRACKET, 0)
  }
  public CLOSE_SQUARE_BRACKET(): TerminalNode {
    return this.getToken(CalcParser.CLOSE_SQUARE_BRACKET, 0)
  }
  public constant_expression(): Constant_expressionContext | undefined {
    return this.tryGetRuleContext(0, Constant_expressionContext)
  }
  constructor(ctx: Direct_abstract_declaratorContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterDirectAbstractDeclaratorTypeRecursiveArray) {
      listener.enterDirectAbstractDeclaratorTypeRecursiveArray(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitDirectAbstractDeclaratorTypeRecursiveArray) {
      listener.exitDirectAbstractDeclaratorTypeRecursiveArray(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitDirectAbstractDeclaratorTypeRecursiveArray) {
      return visitor.visitDirectAbstractDeclaratorTypeRecursiveArray(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class DirectAbstractDeclaratorTypeRecursiveParametersContext extends Direct_abstract_declaratorContext {
  public direct_abstract_declarator(): Direct_abstract_declaratorContext {
    return this.getRuleContext(0, Direct_abstract_declaratorContext)
  }
  public OPEN_PARENTHESES(): TerminalNode {
    return this.getToken(CalcParser.OPEN_PARENTHESES, 0)
  }
  public CLOSE_PARENTHESES(): TerminalNode {
    return this.getToken(CalcParser.CLOSE_PARENTHESES, 0)
  }
  public parameter_type_list(): Parameter_type_listContext | undefined {
    return this.tryGetRuleContext(0, Parameter_type_listContext)
  }
  constructor(ctx: Direct_abstract_declaratorContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterDirectAbstractDeclaratorTypeRecursiveParameters) {
      listener.enterDirectAbstractDeclaratorTypeRecursiveParameters(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitDirectAbstractDeclaratorTypeRecursiveParameters) {
      listener.exitDirectAbstractDeclaratorTypeRecursiveParameters(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitDirectAbstractDeclaratorTypeRecursiveParameters) {
      return visitor.visitDirectAbstractDeclaratorTypeRecursiveParameters(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Unary_expressionContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_unary_expression
  }
  public copyFrom(ctx: Unary_expressionContext): void {
    super.copyFrom(ctx)
  }
}
export class UnaryExpressionTypePostfixContext extends Unary_expressionContext {
  public postfix_expression(): Postfix_expressionContext {
    return this.getRuleContext(0, Postfix_expressionContext)
  }
  constructor(ctx: Unary_expressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterUnaryExpressionTypePostfix) {
      listener.enterUnaryExpressionTypePostfix(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitUnaryExpressionTypePostfix) {
      listener.exitUnaryExpressionTypePostfix(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitUnaryExpressionTypePostfix) {
      return visitor.visitUnaryExpressionTypePostfix(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class UnaryExpressionTypeIncrementContext extends Unary_expressionContext {
  public INCREMENT(): TerminalNode {
    return this.getToken(CalcParser.INCREMENT, 0)
  }
  public unary_expression(): Unary_expressionContext {
    return this.getRuleContext(0, Unary_expressionContext)
  }
  constructor(ctx: Unary_expressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterUnaryExpressionTypeIncrement) {
      listener.enterUnaryExpressionTypeIncrement(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitUnaryExpressionTypeIncrement) {
      listener.exitUnaryExpressionTypeIncrement(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitUnaryExpressionTypeIncrement) {
      return visitor.visitUnaryExpressionTypeIncrement(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class UnaryExpressionTypeDecrementContext extends Unary_expressionContext {
  public DECREMENT(): TerminalNode {
    return this.getToken(CalcParser.DECREMENT, 0)
  }
  public unary_expression(): Unary_expressionContext {
    return this.getRuleContext(0, Unary_expressionContext)
  }
  constructor(ctx: Unary_expressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterUnaryExpressionTypeDecrement) {
      listener.enterUnaryExpressionTypeDecrement(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitUnaryExpressionTypeDecrement) {
      listener.exitUnaryExpressionTypeDecrement(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitUnaryExpressionTypeDecrement) {
      return visitor.visitUnaryExpressionTypeDecrement(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class UnaryExpressionTypeUnaryOperatorContext extends Unary_expressionContext {
  public unary_operator(): Unary_operatorContext {
    return this.getRuleContext(0, Unary_operatorContext)
  }
  public cast_expression(): Cast_expressionContext {
    return this.getRuleContext(0, Cast_expressionContext)
  }
  constructor(ctx: Unary_expressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterUnaryExpressionTypeUnaryOperator) {
      listener.enterUnaryExpressionTypeUnaryOperator(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitUnaryExpressionTypeUnaryOperator) {
      listener.exitUnaryExpressionTypeUnaryOperator(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitUnaryExpressionTypeUnaryOperator) {
      return visitor.visitUnaryExpressionTypeUnaryOperator(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class UnaryExpressionTypeSizeOfContext extends Unary_expressionContext {
  public SIZE_OF(): TerminalNode {
    return this.getToken(CalcParser.SIZE_OF, 0)
  }
  public OPEN_PARENTHESES(): TerminalNode {
    return this.getToken(CalcParser.OPEN_PARENTHESES, 0)
  }
  public type_name(): Type_nameContext {
    return this.getRuleContext(0, Type_nameContext)
  }
  public CLOSE_PARENTHESES(): TerminalNode {
    return this.getToken(CalcParser.CLOSE_PARENTHESES, 0)
  }
  constructor(ctx: Unary_expressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterUnaryExpressionTypeSizeOf) {
      listener.enterUnaryExpressionTypeSizeOf(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitUnaryExpressionTypeSizeOf) {
      listener.exitUnaryExpressionTypeSizeOf(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitUnaryExpressionTypeSizeOf) {
      return visitor.visitUnaryExpressionTypeSizeOf(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Postfix_expressionContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_postfix_expression
  }
  public copyFrom(ctx: Postfix_expressionContext): void {
    super.copyFrom(ctx)
  }
}
export class PostfixExpressionTypePrimaryContext extends Postfix_expressionContext {
  public primary_expression(): Primary_expressionContext {
    return this.getRuleContext(0, Primary_expressionContext)
  }
  constructor(ctx: Postfix_expressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterPostfixExpressionTypePrimary) {
      listener.enterPostfixExpressionTypePrimary(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitPostfixExpressionTypePrimary) {
      listener.exitPostfixExpressionTypePrimary(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitPostfixExpressionTypePrimary) {
      return visitor.visitPostfixExpressionTypePrimary(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class PostfixExpressionTypeArrayContext extends Postfix_expressionContext {
  public postfix_expression(): Postfix_expressionContext {
    return this.getRuleContext(0, Postfix_expressionContext)
  }
  public OPEN_SQUARE_BRACKET(): TerminalNode {
    return this.getToken(CalcParser.OPEN_SQUARE_BRACKET, 0)
  }
  public assignment_expression(): Assignment_expressionContext {
    return this.getRuleContext(0, Assignment_expressionContext)
  }
  public CLOSE_SQUARE_BRACKET(): TerminalNode {
    return this.getToken(CalcParser.CLOSE_SQUARE_BRACKET, 0)
  }
  constructor(ctx: Postfix_expressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterPostfixExpressionTypeArray) {
      listener.enterPostfixExpressionTypeArray(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitPostfixExpressionTypeArray) {
      listener.exitPostfixExpressionTypeArray(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitPostfixExpressionTypeArray) {
      return visitor.visitPostfixExpressionTypeArray(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class PostfixExpressionTypeFunctionCallContext extends Postfix_expressionContext {
  public postfix_expression(): Postfix_expressionContext {
    return this.getRuleContext(0, Postfix_expressionContext)
  }
  public OPEN_PARENTHESES(): TerminalNode {
    return this.getToken(CalcParser.OPEN_PARENTHESES, 0)
  }
  public CLOSE_PARENTHESES(): TerminalNode {
    return this.getToken(CalcParser.CLOSE_PARENTHESES, 0)
  }
  public expression(): ExpressionContext | undefined {
    return this.tryGetRuleContext(0, ExpressionContext)
  }
  constructor(ctx: Postfix_expressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterPostfixExpressionTypeFunctionCall) {
      listener.enterPostfixExpressionTypeFunctionCall(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitPostfixExpressionTypeFunctionCall) {
      listener.exitPostfixExpressionTypeFunctionCall(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitPostfixExpressionTypeFunctionCall) {
      return visitor.visitPostfixExpressionTypeFunctionCall(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class PostfixExpressionTypeMemberContext extends Postfix_expressionContext {
  public postfix_expression(): Postfix_expressionContext {
    return this.getRuleContext(0, Postfix_expressionContext)
  }
  public FULLSTOP(): TerminalNode {
    return this.getToken(CalcParser.FULLSTOP, 0)
  }
  public identifier(): IdentifierContext {
    return this.getRuleContext(0, IdentifierContext)
  }
  constructor(ctx: Postfix_expressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterPostfixExpressionTypeMember) {
      listener.enterPostfixExpressionTypeMember(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitPostfixExpressionTypeMember) {
      listener.exitPostfixExpressionTypeMember(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitPostfixExpressionTypeMember) {
      return visitor.visitPostfixExpressionTypeMember(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class PostfixExpressionTypeDerefMemberContext extends Postfix_expressionContext {
  public postfix_expression(): Postfix_expressionContext {
    return this.getRuleContext(0, Postfix_expressionContext)
  }
  public RIGHT_ARROW(): TerminalNode {
    return this.getToken(CalcParser.RIGHT_ARROW, 0)
  }
  public identifier(): IdentifierContext {
    return this.getRuleContext(0, IdentifierContext)
  }
  constructor(ctx: Postfix_expressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterPostfixExpressionTypeDerefMember) {
      listener.enterPostfixExpressionTypeDerefMember(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitPostfixExpressionTypeDerefMember) {
      listener.exitPostfixExpressionTypeDerefMember(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitPostfixExpressionTypeDerefMember) {
      return visitor.visitPostfixExpressionTypeDerefMember(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class PostfixExpressionTypeIncrementContext extends Postfix_expressionContext {
  public postfix_expression(): Postfix_expressionContext {
    return this.getRuleContext(0, Postfix_expressionContext)
  }
  public INCREMENT(): TerminalNode {
    return this.getToken(CalcParser.INCREMENT, 0)
  }
  constructor(ctx: Postfix_expressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterPostfixExpressionTypeIncrement) {
      listener.enterPostfixExpressionTypeIncrement(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitPostfixExpressionTypeIncrement) {
      listener.exitPostfixExpressionTypeIncrement(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitPostfixExpressionTypeIncrement) {
      return visitor.visitPostfixExpressionTypeIncrement(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class PostfixExpressionTypeDecrementContext extends Postfix_expressionContext {
  public postfix_expression(): Postfix_expressionContext {
    return this.getRuleContext(0, Postfix_expressionContext)
  }
  public DECREMENT(): TerminalNode {
    return this.getToken(CalcParser.DECREMENT, 0)
  }
  constructor(ctx: Postfix_expressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterPostfixExpressionTypeDecrement) {
      listener.enterPostfixExpressionTypeDecrement(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitPostfixExpressionTypeDecrement) {
      listener.exitPostfixExpressionTypeDecrement(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitPostfixExpressionTypeDecrement) {
      return visitor.visitPostfixExpressionTypeDecrement(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Primary_expressionContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_primary_expression
  }
  public copyFrom(ctx: Primary_expressionContext): void {
    super.copyFrom(ctx)
  }
}
export class PrimaryExpressionTypeIdentifierContext extends Primary_expressionContext {
  public identifier(): IdentifierContext {
    return this.getRuleContext(0, IdentifierContext)
  }
  constructor(ctx: Primary_expressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterPrimaryExpressionTypeIdentifier) {
      listener.enterPrimaryExpressionTypeIdentifier(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitPrimaryExpressionTypeIdentifier) {
      listener.exitPrimaryExpressionTypeIdentifier(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitPrimaryExpressionTypeIdentifier) {
      return visitor.visitPrimaryExpressionTypeIdentifier(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class PrimaryExpressionTypeConstantContext extends Primary_expressionContext {
  public constant(): ConstantContext {
    return this.getRuleContext(0, ConstantContext)
  }
  constructor(ctx: Primary_expressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterPrimaryExpressionTypeConstant) {
      listener.enterPrimaryExpressionTypeConstant(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitPrimaryExpressionTypeConstant) {
      listener.exitPrimaryExpressionTypeConstant(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitPrimaryExpressionTypeConstant) {
      return visitor.visitPrimaryExpressionTypeConstant(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class PrimaryExpressionTypeStringContext extends Primary_expressionContext {
  public string(): StringContext {
    return this.getRuleContext(0, StringContext)
  }
  constructor(ctx: Primary_expressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterPrimaryExpressionTypeString) {
      listener.enterPrimaryExpressionTypeString(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitPrimaryExpressionTypeString) {
      listener.exitPrimaryExpressionTypeString(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitPrimaryExpressionTypeString) {
      return visitor.visitPrimaryExpressionTypeString(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class PrimaryExpressionTypeNestedExpressionContext extends Primary_expressionContext {
  public OPEN_PARENTHESES(): TerminalNode {
    return this.getToken(CalcParser.OPEN_PARENTHESES, 0)
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)
  }
  public CLOSE_PARENTHESES(): TerminalNode {
    return this.getToken(CalcParser.CLOSE_PARENTHESES, 0)
  }
  constructor(ctx: Primary_expressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterPrimaryExpressionTypeNestedExpression) {
      listener.enterPrimaryExpressionTypeNestedExpression(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitPrimaryExpressionTypeNestedExpression) {
      listener.exitPrimaryExpressionTypeNestedExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitPrimaryExpressionTypeNestedExpression) {
      return visitor.visitPrimaryExpressionTypeNestedExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class StringContext extends ParserRuleContext {
  public STRING(): TerminalNode {
    return this.getToken(CalcParser.STRING, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_string
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterString) {
      listener.enterString(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitString) {
      listener.exitString(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitString) {
      return visitor.visitString(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ConstantContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_constant
  }
  public copyFrom(ctx: ConstantContext): void {
    super.copyFrom(ctx)
  }
}
export class ConstantTypeIntegerContext extends ConstantContext {
  public integer_constant(): Integer_constantContext {
    return this.getRuleContext(0, Integer_constantContext)
  }
  constructor(ctx: ConstantContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterConstantTypeInteger) {
      listener.enterConstantTypeInteger(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitConstantTypeInteger) {
      listener.exitConstantTypeInteger(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitConstantTypeInteger) {
      return visitor.visitConstantTypeInteger(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class ConstantTypeFloatContext extends ConstantContext {
  public float_constant(): Float_constantContext {
    return this.getRuleContext(0, Float_constantContext)
  }
  constructor(ctx: ConstantContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterConstantTypeFloat) {
      listener.enterConstantTypeFloat(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitConstantTypeFloat) {
      listener.exitConstantTypeFloat(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitConstantTypeFloat) {
      return visitor.visitConstantTypeFloat(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class ConstantTypeCharacterContext extends ConstantContext {
  public character_constant(): Character_constantContext {
    return this.getRuleContext(0, Character_constantContext)
  }
  constructor(ctx: ConstantContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterConstantTypeCharacter) {
      listener.enterConstantTypeCharacter(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitConstantTypeCharacter) {
      listener.exitConstantTypeCharacter(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitConstantTypeCharacter) {
      return visitor.visitConstantTypeCharacter(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Integer_constantContext extends ParserRuleContext {
  public INTEGER(): TerminalNode {
    return this.getToken(CalcParser.INTEGER, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_integer_constant
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterInteger_constant) {
      listener.enterInteger_constant(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitInteger_constant) {
      listener.exitInteger_constant(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitInteger_constant) {
      return visitor.visitInteger_constant(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Float_constantContext extends ParserRuleContext {
  public FLOAT(): TerminalNode {
    return this.getToken(CalcParser.FLOAT, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_float_constant
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterFloat_constant) {
      listener.enterFloat_constant(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitFloat_constant) {
      listener.exitFloat_constant(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitFloat_constant) {
      return visitor.visitFloat_constant(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Character_constantContext extends ParserRuleContext {
  public CHAR(): TerminalNode {
    return this.getToken(CalcParser.CHAR, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_character_constant
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterCharacter_constant) {
      listener.enterCharacter_constant(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitCharacter_constant) {
      listener.exitCharacter_constant(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitCharacter_constant) {
      return visitor.visitCharacter_constant(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Compound_statementContext extends ParserRuleContext {
  public OPEN_CURLY_BRACKET(): TerminalNode {
    return this.getToken(CalcParser.OPEN_CURLY_BRACKET, 0)
  }
  public CLOSE_CURLY_BRACKET(): TerminalNode {
    return this.getToken(CalcParser.CLOSE_CURLY_BRACKET, 0)
  }
  public statement(): StatementContext[]
  public statement(i: number): StatementContext
  public statement(i?: number): StatementContext | StatementContext[] {
    if (i === undefined) {
      return this.getRuleContexts(StatementContext)
    } else {
      return this.getRuleContext(i, StatementContext)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_compound_statement
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterCompound_statement) {
      listener.enterCompound_statement(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitCompound_statement) {
      listener.exitCompound_statement(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitCompound_statement) {
      return visitor.visitCompound_statement(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class If_statementContext extends ParserRuleContext {
  public _if_true!: StatementContext
  public _if_false!: StatementContext
  public IF(): TerminalNode {
    return this.getToken(CalcParser.IF, 0)
  }
  public OPEN_PARENTHESES(): TerminalNode {
    return this.getToken(CalcParser.OPEN_PARENTHESES, 0)
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)
  }
  public CLOSE_PARENTHESES(): TerminalNode {
    return this.getToken(CalcParser.CLOSE_PARENTHESES, 0)
  }
  public statement(): StatementContext[]
  public statement(i: number): StatementContext
  public statement(i?: number): StatementContext | StatementContext[] {
    if (i === undefined) {
      return this.getRuleContexts(StatementContext)
    } else {
      return this.getRuleContext(i, StatementContext)
    }
  }
  public ELSE(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.ELSE, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_if_statement
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterIf_statement) {
      listener.enterIf_statement(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitIf_statement) {
      listener.exitIf_statement(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitIf_statement) {
      return visitor.visitIf_statement(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Switch_statementContext extends ParserRuleContext {
  public SWITCH(): TerminalNode {
    return this.getToken(CalcParser.SWITCH, 0)
  }
  public OPEN_PARENTHESES(): TerminalNode {
    return this.getToken(CalcParser.OPEN_PARENTHESES, 0)
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)
  }
  public CLOSE_PARENTHESES(): TerminalNode {
    return this.getToken(CalcParser.CLOSE_PARENTHESES, 0)
  }
  public switch_body(): Switch_bodyContext {
    return this.getRuleContext(0, Switch_bodyContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_switch_statement
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterSwitch_statement) {
      listener.enterSwitch_statement(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitSwitch_statement) {
      listener.exitSwitch_statement(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitSwitch_statement) {
      return visitor.visitSwitch_statement(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Switch_bodyContext extends ParserRuleContext {
  public OPEN_CURLY_BRACKET(): TerminalNode {
    return this.getToken(CalcParser.OPEN_CURLY_BRACKET, 0)
  }
  public CLOSE_CURLY_BRACKET(): TerminalNode {
    return this.getToken(CalcParser.CLOSE_CURLY_BRACKET, 0)
  }
  public switch_case_body(): Switch_case_bodyContext[]
  public switch_case_body(i: number): Switch_case_bodyContext
  public switch_case_body(i?: number): Switch_case_bodyContext | Switch_case_bodyContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Switch_case_bodyContext)
    } else {
      return this.getRuleContext(i, Switch_case_bodyContext)
    }
  }
  public switch_default_body(): Switch_default_bodyContext | undefined {
    return this.tryGetRuleContext(0, Switch_default_bodyContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_switch_body
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterSwitch_body) {
      listener.enterSwitch_body(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitSwitch_body) {
      listener.exitSwitch_body(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitSwitch_body) {
      return visitor.visitSwitch_body(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Switch_case_bodyContext extends ParserRuleContext {
  public CASE(): TerminalNode {
    return this.getToken(CalcParser.CASE, 0)
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)
  }
  public COLON(): TerminalNode {
    return this.getToken(CalcParser.COLON, 0)
  }
  public statement(): StatementContext[]
  public statement(i: number): StatementContext
  public statement(i?: number): StatementContext | StatementContext[] {
    if (i === undefined) {
      return this.getRuleContexts(StatementContext)
    } else {
      return this.getRuleContext(i, StatementContext)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_switch_case_body
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterSwitch_case_body) {
      listener.enterSwitch_case_body(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitSwitch_case_body) {
      listener.exitSwitch_case_body(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitSwitch_case_body) {
      return visitor.visitSwitch_case_body(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Switch_default_bodyContext extends ParserRuleContext {
  public DEFAULT(): TerminalNode {
    return this.getToken(CalcParser.DEFAULT, 0)
  }
  public COLON(): TerminalNode {
    return this.getToken(CalcParser.COLON, 0)
  }
  public statement(): StatementContext[]
  public statement(i: number): StatementContext
  public statement(i?: number): StatementContext | StatementContext[] {
    if (i === undefined) {
      return this.getRuleContexts(StatementContext)
    } else {
      return this.getRuleContext(i, StatementContext)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_switch_default_body
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterSwitch_default_body) {
      listener.enterSwitch_default_body(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitSwitch_default_body) {
      listener.exitSwitch_default_body(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitSwitch_default_body) {
      return visitor.visitSwitch_default_body(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class While_statementContext extends ParserRuleContext {
  public WHILE(): TerminalNode {
    return this.getToken(CalcParser.WHILE, 0)
  }
  public OPEN_PARENTHESES(): TerminalNode {
    return this.getToken(CalcParser.OPEN_PARENTHESES, 0)
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)
  }
  public CLOSE_PARENTHESES(): TerminalNode {
    return this.getToken(CalcParser.CLOSE_PARENTHESES, 0)
  }
  public statement(): StatementContext {
    return this.getRuleContext(0, StatementContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_while_statement
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterWhile_statement) {
      listener.enterWhile_statement(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitWhile_statement) {
      listener.exitWhile_statement(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitWhile_statement) {
      return visitor.visitWhile_statement(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Do_statementContext extends ParserRuleContext {
  public DO(): TerminalNode {
    return this.getToken(CalcParser.DO, 0)
  }
  public statement(): StatementContext {
    return this.getRuleContext(0, StatementContext)
  }
  public WHILE(): TerminalNode {
    return this.getToken(CalcParser.WHILE, 0)
  }
  public OPEN_PARENTHESES(): TerminalNode {
    return this.getToken(CalcParser.OPEN_PARENTHESES, 0)
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)
  }
  public CLOSE_PARENTHESES(): TerminalNode {
    return this.getToken(CalcParser.CLOSE_PARENTHESES, 0)
  }
  public end_statement_delimiter(): End_statement_delimiterContext {
    return this.getRuleContext(0, End_statement_delimiterContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_do_statement
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterDo_statement) {
      listener.enterDo_statement(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitDo_statement) {
      listener.exitDo_statement(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitDo_statement) {
      return visitor.visitDo_statement(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class For_statementContext extends ParserRuleContext {
  public _init!: For_init_declarationContext
  public _test!: ExpressionContext
  public _update!: ExpressionContext
  public FOR(): TerminalNode {
    return this.getToken(CalcParser.FOR, 0)
  }
  public OPEN_PARENTHESES(): TerminalNode {
    return this.getToken(CalcParser.OPEN_PARENTHESES, 0)
  }
  public SEMICOLON(): TerminalNode[]
  public SEMICOLON(i: number): TerminalNode
  public SEMICOLON(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(CalcParser.SEMICOLON)
    } else {
      return this.getToken(CalcParser.SEMICOLON, i)
    }
  }
  public CLOSE_PARENTHESES(): TerminalNode {
    return this.getToken(CalcParser.CLOSE_PARENTHESES, 0)
  }
  public statement(): StatementContext {
    return this.getRuleContext(0, StatementContext)
  }
  public for_init_declaration(): For_init_declarationContext | undefined {
    return this.tryGetRuleContext(0, For_init_declarationContext)
  }
  public expression(): ExpressionContext[]
  public expression(i: number): ExpressionContext
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext)
    } else {
      return this.getRuleContext(i, ExpressionContext)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_for_statement
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterFor_statement) {
      listener.enterFor_statement(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitFor_statement) {
      listener.exitFor_statement(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitFor_statement) {
      return visitor.visitFor_statement(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class For_init_declarationContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_for_init_declaration
  }
  public copyFrom(ctx: For_init_declarationContext): void {
    super.copyFrom(ctx)
  }
}
export class ForInitDeclarationTypeDeclarationContext extends For_init_declarationContext {
  public declaration_specifiers(): Declaration_specifiersContext {
    return this.getRuleContext(0, Declaration_specifiersContext)
  }
  public init_declarator_list(): Init_declarator_listContext {
    return this.getRuleContext(0, Init_declarator_listContext)
  }
  constructor(ctx: For_init_declarationContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterForInitDeclarationTypeDeclaration) {
      listener.enterForInitDeclarationTypeDeclaration(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitForInitDeclarationTypeDeclaration) {
      listener.exitForInitDeclarationTypeDeclaration(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitForInitDeclarationTypeDeclaration) {
      return visitor.visitForInitDeclarationTypeDeclaration(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class ForInitDeclarationTypeExpressionContext extends For_init_declarationContext {
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)
  }
  constructor(ctx: For_init_declarationContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterForInitDeclarationTypeExpression) {
      listener.enterForInitDeclarationTypeExpression(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitForInitDeclarationTypeExpression) {
      listener.exitForInitDeclarationTypeExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitForInitDeclarationTypeExpression) {
      return visitor.visitForInitDeclarationTypeExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Goto_statementContext extends ParserRuleContext {
  public GOTO(): TerminalNode {
    return this.getToken(CalcParser.GOTO, 0)
  }
  public identifier(): IdentifierContext {
    return this.getRuleContext(0, IdentifierContext)
  }
  public end_statement_delimiter(): End_statement_delimiterContext {
    return this.getRuleContext(0, End_statement_delimiterContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_goto_statement
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterGoto_statement) {
      listener.enterGoto_statement(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitGoto_statement) {
      listener.exitGoto_statement(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitGoto_statement) {
      return visitor.visitGoto_statement(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Continue_statementContext extends ParserRuleContext {
  public CONTINUE(): TerminalNode {
    return this.getToken(CalcParser.CONTINUE, 0)
  }
  public end_statement_delimiter(): End_statement_delimiterContext {
    return this.getRuleContext(0, End_statement_delimiterContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_continue_statement
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterContinue_statement) {
      listener.enterContinue_statement(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitContinue_statement) {
      listener.exitContinue_statement(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitContinue_statement) {
      return visitor.visitContinue_statement(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Break_statementContext extends ParserRuleContext {
  public BREAK(): TerminalNode {
    return this.getToken(CalcParser.BREAK, 0)
  }
  public end_statement_delimiter(): End_statement_delimiterContext {
    return this.getRuleContext(0, End_statement_delimiterContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_break_statement
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterBreak_statement) {
      listener.enterBreak_statement(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitBreak_statement) {
      listener.exitBreak_statement(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitBreak_statement) {
      return visitor.visitBreak_statement(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Return_statementContext extends ParserRuleContext {
  public RETURN(): TerminalNode {
    return this.getToken(CalcParser.RETURN, 0)
  }
  public end_statement_delimiter(): End_statement_delimiterContext {
    return this.getRuleContext(0, End_statement_delimiterContext)
  }
  public expression(): ExpressionContext | undefined {
    return this.tryGetRuleContext(0, ExpressionContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_return_statement
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterReturn_statement) {
      listener.enterReturn_statement(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitReturn_statement) {
      listener.exitReturn_statement(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitReturn_statement) {
      return visitor.visitReturn_statement(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
