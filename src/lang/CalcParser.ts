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
  public static readonly SIZE_OF = 47
  public static readonly VOID_TYPE_SPECIFIER = 48
  public static readonly CHAR_TYPE_SPECIFIER = 49
  public static readonly SHORT_TYPE_SPECIFIER = 50
  public static readonly INT_TYPE_SPECIFIER = 51
  public static readonly LONG_TYPE_SPECIFIER = 52
  public static readonly FLOAT_TYPE_SPECIFIER = 53
  public static readonly DOUBLE_TYPE_SPECIFIER = 54
  public static readonly SIGNED_TYPE_SPECIFIER = 55
  public static readonly UNSIGNED_TYPE_SPECIFIER = 56
  public static readonly CONST_TYPE_QUALIFIER = 57
  public static readonly VOLATILE_TYPE_QUALIFIER = 58
  public static readonly INTEGER = 59
  public static readonly FLOAT = 60
  public static readonly CHAR = 61
  public static readonly IDENTIFIER = 62
  public static readonly RULE_unary_operator = 0
  public static readonly RULE_assignment_operator = 1
  public static readonly RULE_end_statement_delimiter = 2
  public static readonly RULE_type_specifier = 3
  public static readonly RULE_type_qualifier = 4
  public static readonly RULE_start = 5
  public static readonly RULE_statement = 6
  public static readonly RULE_declaration_statement = 7
  public static readonly RULE_declaration_specifier = 8
  public static readonly RULE_init_declarator_list = 9
  public static readonly RULE_init_declarator = 10
  public static readonly RULE_declarator = 11
  public static readonly RULE_pointer = 12
  public static readonly RULE_direct_declarator = 13
  public static readonly RULE_initializer = 14
  public static readonly RULE_initializer_list = 15
  public static readonly RULE_expression_statement = 16
  public static readonly RULE_expression = 17
  public static readonly RULE_assignment_expression = 18
  public static readonly RULE_constant_expression = 19
  public static readonly RULE_conditional_expression = 20
  public static readonly RULE_logical_or_expression = 21
  public static readonly RULE_logical_and_expression = 22
  public static readonly RULE_inclusive_or_expression = 23
  public static readonly RULE_exclusive_or_expression = 24
  public static readonly RULE_and_expression = 25
  public static readonly RULE_equality_expression = 26
  public static readonly RULE_relational_expression = 27
  public static readonly RULE_shift_expression = 28
  public static readonly RULE_additive_expression = 29
  public static readonly RULE_multiplicative_expression = 30
  public static readonly RULE_cast_expression = 31
  public static readonly RULE_type_name = 32
  public static readonly RULE_specifier_qualifier = 33
  public static readonly RULE_unary_expression = 34
  public static readonly RULE_postfix_expression = 35
  public static readonly RULE_primary_expression = 36
  public static readonly RULE_constant = 37
  public static readonly RULE_integer_constant = 38
  public static readonly RULE_float_constant = 39
  public static readonly RULE_character_constant = 40
  public static readonly RULE_compound_statement = 41
  // tslint:disable:no-trailing-whitespace
  public static readonly ruleNames: string[] = [
    'unary_operator',
    'assignment_operator',
    'end_statement_delimiter',
    'type_specifier',
    'type_qualifier',
    'start',
    'statement',
    'declaration_statement',
    'declaration_specifier',
    'init_declarator_list',
    'init_declarator',
    'declarator',
    'pointer',
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
    'specifier_qualifier',
    'unary_expression',
    'postfix_expression',
    'primary_expression',
    'constant',
    'integer_constant',
    'float_constant',
    'character_constant',
    'compound_statement',
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
    "'sizeof'",
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
    'SIZE_OF',
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
        this.state = 84
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
        this.state = 86
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
        this.state = 88
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
  public type_specifier(): Type_specifierContext {
    const _localctx: Type_specifierContext = new Type_specifierContext(this._ctx, this.state)
    this.enterRule(_localctx, 6, CalcParser.RULE_type_specifier)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 90
        _la = this._input.LA(1)
        if (
          !(
            ((_la - 48) & ~0x1f) === 0 &&
            ((1 << (_la - 48)) &
              ((1 << (CalcParser.VOID_TYPE_SPECIFIER - 48)) |
                (1 << (CalcParser.CHAR_TYPE_SPECIFIER - 48)) |
                (1 << (CalcParser.SHORT_TYPE_SPECIFIER - 48)) |
                (1 << (CalcParser.INT_TYPE_SPECIFIER - 48)) |
                (1 << (CalcParser.LONG_TYPE_SPECIFIER - 48)) |
                (1 << (CalcParser.FLOAT_TYPE_SPECIFIER - 48)) |
                (1 << (CalcParser.DOUBLE_TYPE_SPECIFIER - 48)) |
                (1 << (CalcParser.SIGNED_TYPE_SPECIFIER - 48)) |
                (1 << (CalcParser.UNSIGNED_TYPE_SPECIFIER - 48)))) !==
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
  public type_qualifier(): Type_qualifierContext {
    const _localctx: Type_qualifierContext = new Type_qualifierContext(this._ctx, this.state)
    this.enterRule(_localctx, 8, CalcParser.RULE_type_qualifier)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 92
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
  public start(): StartContext {
    const _localctx: StartContext = new StartContext(this._ctx, this.state)
    this.enterRule(_localctx, 10, CalcParser.RULE_start)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 94
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
  public statement(): StatementContext {
    const _localctx: StatementContext = new StatementContext(this._ctx, this.state)
    this.enterRule(_localctx, 12, CalcParser.RULE_statement)
    try {
      this.state = 99
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case CalcParser.VOID_TYPE_SPECIFIER:
        case CalcParser.CHAR_TYPE_SPECIFIER:
        case CalcParser.SHORT_TYPE_SPECIFIER:
        case CalcParser.INT_TYPE_SPECIFIER:
        case CalcParser.LONG_TYPE_SPECIFIER:
        case CalcParser.FLOAT_TYPE_SPECIFIER:
        case CalcParser.DOUBLE_TYPE_SPECIFIER:
        case CalcParser.SIGNED_TYPE_SPECIFIER:
        case CalcParser.UNSIGNED_TYPE_SPECIFIER:
        case CalcParser.CONST_TYPE_QUALIFIER:
        case CalcParser.VOLATILE_TYPE_QUALIFIER:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 96
            this.declaration_statement()
          }
          break
        case CalcParser.ASTERICK:
        case CalcParser.PLUS:
        case CalcParser.MINUS:
        case CalcParser.AMPERSAND:
        case CalcParser.TILDA:
        case CalcParser.EXCLAMATION_MARK:
        case CalcParser.SEMICOLON:
        case CalcParser.OPEN_PARENTHESES:
        case CalcParser.INCREMENT:
        case CalcParser.DECREMENT:
        case CalcParser.SIZE_OF:
        case CalcParser.INTEGER:
        case CalcParser.FLOAT:
        case CalcParser.CHAR:
        case CalcParser.IDENTIFIER:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 97
            this.expression_statement()
          }
          break
        case CalcParser.OPEN_CURLY_BRACKET:
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 98
            this.compound_statement()
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
  public declaration_statement(): Declaration_statementContext {
    const _localctx: Declaration_statementContext = new Declaration_statementContext(
      this._ctx,
      this.state,
    )
    this.enterRule(_localctx, 14, CalcParser.RULE_declaration_statement)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 102
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        do {
          {
            {
              this.state = 101
              this.declaration_specifier()
            }
          }
          this.state = 104
          this._errHandler.sync(this)
          _la = this._input.LA(1)
        } while (
          ((_la - 48) & ~0x1f) === 0 &&
          ((1 << (_la - 48)) &
            ((1 << (CalcParser.VOID_TYPE_SPECIFIER - 48)) |
              (1 << (CalcParser.CHAR_TYPE_SPECIFIER - 48)) |
              (1 << (CalcParser.SHORT_TYPE_SPECIFIER - 48)) |
              (1 << (CalcParser.INT_TYPE_SPECIFIER - 48)) |
              (1 << (CalcParser.LONG_TYPE_SPECIFIER - 48)) |
              (1 << (CalcParser.FLOAT_TYPE_SPECIFIER - 48)) |
              (1 << (CalcParser.DOUBLE_TYPE_SPECIFIER - 48)) |
              (1 << (CalcParser.SIGNED_TYPE_SPECIFIER - 48)) |
              (1 << (CalcParser.UNSIGNED_TYPE_SPECIFIER - 48)) |
              (1 << (CalcParser.CONST_TYPE_QUALIFIER - 48)) |
              (1 << (CalcParser.VOLATILE_TYPE_QUALIFIER - 48)))) !==
            0
        )
        this.state = 106
        this.init_declarator_list()
        this.state = 107
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
  public declaration_specifier(): Declaration_specifierContext {
    const _localctx: Declaration_specifierContext = new Declaration_specifierContext(
      this._ctx,
      this.state,
    )
    this.enterRule(_localctx, 16, CalcParser.RULE_declaration_specifier)
    try {
      this.state = 111
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case CalcParser.VOID_TYPE_SPECIFIER:
        case CalcParser.CHAR_TYPE_SPECIFIER:
        case CalcParser.SHORT_TYPE_SPECIFIER:
        case CalcParser.INT_TYPE_SPECIFIER:
        case CalcParser.LONG_TYPE_SPECIFIER:
        case CalcParser.FLOAT_TYPE_SPECIFIER:
        case CalcParser.DOUBLE_TYPE_SPECIFIER:
        case CalcParser.SIGNED_TYPE_SPECIFIER:
        case CalcParser.UNSIGNED_TYPE_SPECIFIER:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 109
            this.type_specifier()
          }
          break
        case CalcParser.CONST_TYPE_QUALIFIER:
        case CalcParser.VOLATILE_TYPE_QUALIFIER:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 110
            this.type_qualifier()
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
  public init_declarator_list(): Init_declarator_listContext {
    const _localctx: Init_declarator_listContext = new Init_declarator_listContext(
      this._ctx,
      this.state,
    )
    this.enterRule(_localctx, 18, CalcParser.RULE_init_declarator_list)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 113
        this.init_declarator()
        this.state = 118
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (_la === CalcParser.COMMA) {
          {
            {
              this.state = 114
              this.match(CalcParser.COMMA)
              this.state = 115
              this.init_declarator()
            }
          }
          this.state = 120
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
    this.enterRule(_localctx, 20, CalcParser.RULE_init_declarator)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 121
        this.declarator()
        this.state = 124
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        if (_la === CalcParser.EQUAL) {
          {
            this.state = 122
            this.match(CalcParser.EQUAL)
            this.state = 123
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
    this.enterRule(_localctx, 22, CalcParser.RULE_declarator)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 127
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        if (_la === CalcParser.ASTERICK) {
          {
            this.state = 126
            this.pointer()
          }
        }

        this.state = 129
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
  // @RuleVersion(0)
  public pointer(): PointerContext {
    const _localctx: PointerContext = new PointerContext(this._ctx, this.state)
    this.enterRule(_localctx, 24, CalcParser.RULE_pointer)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 131
        this.match(CalcParser.ASTERICK)
        this.state = 135
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (
          _la === CalcParser.CONST_TYPE_QUALIFIER ||
          _la === CalcParser.VOLATILE_TYPE_QUALIFIER
        ) {
          {
            {
              this.state = 132
              this.type_qualifier()
            }
          }
          this.state = 137
          this._errHandler.sync(this)
          _la = this._input.LA(1)
        }
        this.state = 139
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        if (_la === CalcParser.ASTERICK) {
          {
            this.state = 138
            this.pointer()
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
    const _startState: number = 26
    this.enterRecursionRule(_localctx, 26, CalcParser.RULE_direct_declarator, _p)
    let _la: number
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 147
        this._errHandler.sync(this)
        switch (this._input.LA(1)) {
          case CalcParser.IDENTIFIER:
            {
              this.state = 142
              this.match(CalcParser.IDENTIFIER)
            }
            break
          case CalcParser.OPEN_PARENTHESES:
            {
              this.state = 143
              this.match(CalcParser.OPEN_PARENTHESES)
              this.state = 144
              this.declarator()
              this.state = 145
              this.match(CalcParser.CLOSE_PARENTHESES)
            }
            break
          default:
            throw new NoViableAltException(this)
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 166
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              this.state = 164
              this._errHandler.sync(this)
              switch (this.interpreter.adaptivePredict(this._input, 11, this._ctx)) {
                case 1:
                  {
                    _localctx = new Direct_declaratorContext(_parentctx, _parentState)
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      CalcParser.RULE_direct_declarator,
                    )
                    this.state = 149
                    if (!this.precpred(this._ctx, 2)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 2)')
                    }
                    this.state = 150
                    this.match(CalcParser.OPEN_SQUARE_BRACKET)
                    this.state = 152
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
                      (((_la - 47) & ~0x1f) === 0 &&
                        ((1 << (_la - 47)) &
                          ((1 << (CalcParser.SIZE_OF - 47)) |
                            (1 << (CalcParser.INTEGER - 47)) |
                            (1 << (CalcParser.FLOAT - 47)) |
                            (1 << (CalcParser.CHAR - 47)) |
                            (1 << (CalcParser.IDENTIFIER - 47)))) !==
                          0)
                    ) {
                      {
                        this.state = 151
                        this.constant_expression()
                      }
                    }

                    this.state = 154
                    this.match(CalcParser.CLOSE_SQUARE_BRACKET)
                  }
                  break

                case 2:
                  {
                    _localctx = new Direct_declaratorContext(_parentctx, _parentState)
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      CalcParser.RULE_direct_declarator,
                    )
                    this.state = 155
                    if (!this.precpred(this._ctx, 1)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                    }
                    this.state = 156
                    this.match(CalcParser.OPEN_PARENTHESES)
                    this.state = 160
                    this._errHandler.sync(this)
                    _la = this._input.LA(1)
                    while (_la === CalcParser.IDENTIFIER) {
                      {
                        {
                          this.state = 157
                          this.match(CalcParser.IDENTIFIER)
                        }
                      }
                      this.state = 162
                      this._errHandler.sync(this)
                      _la = this._input.LA(1)
                    }
                    this.state = 163
                    this.match(CalcParser.CLOSE_PARENTHESES)
                  }
                  break
              }
            }
          }
          this.state = 168
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx)
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
    const _localctx: InitializerContext = new InitializerContext(this._ctx, this.state)
    this.enterRule(_localctx, 28, CalcParser.RULE_initializer)
    try {
      this.state = 179
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 13, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 169
            this.assignment_expression()
          }
          break

        case 2:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 170
            this.match(CalcParser.OPEN_CURLY_BRACKET)
            this.state = 171
            this.initializer_list(0)
            this.state = 172
            this.match(CalcParser.CLOSE_CURLY_BRACKET)
          }
          break

        case 3:
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 174
            this.match(CalcParser.OPEN_CURLY_BRACKET)
            this.state = 175
            this.initializer_list(0)
            this.state = 176
            this.match(CalcParser.COMMA)
            this.state = 177
            this.match(CalcParser.CLOSE_CURLY_BRACKET)
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
    const _startState: number = 30
    this.enterRecursionRule(_localctx, 30, CalcParser.RULE_initializer_list, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        {
          this.state = 182
          this.initializer()
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 189
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              {
                _localctx = new Initializer_listContext(_parentctx, _parentState)
                this.pushNewRecursionContext(
                  _localctx,
                  _startState,
                  CalcParser.RULE_initializer_list,
                )
                this.state = 184
                if (!this.precpred(this._ctx, 1)) {
                  throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                }
                this.state = 185
                this.match(CalcParser.COMMA)
                this.state = 186
                this.initializer()
              }
            }
          }
          this.state = 191
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx)
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
    this.enterRule(_localctx, 32, CalcParser.RULE_expression_statement)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 193
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
          (((_la - 47) & ~0x1f) === 0 &&
            ((1 << (_la - 47)) &
              ((1 << (CalcParser.SIZE_OF - 47)) |
                (1 << (CalcParser.INTEGER - 47)) |
                (1 << (CalcParser.FLOAT - 47)) |
                (1 << (CalcParser.CHAR - 47)) |
                (1 << (CalcParser.IDENTIFIER - 47)))) !==
              0)
        ) {
          {
            this.state = 192
            this.expression(0)
          }
        }

        this.state = 195
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
    const _startState: number = 34
    this.enterRecursionRule(_localctx, 34, CalcParser.RULE_expression, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        {
          this.state = 198
          this.assignment_expression()
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 205
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              {
                _localctx = new ExpressionContext(_parentctx, _parentState)
                this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression)
                this.state = 200
                if (!this.precpred(this._ctx, 1)) {
                  throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                }
                this.state = 201
                this.match(CalcParser.COMMA)
                this.state = 202
                this.assignment_expression()
              }
            }
          }
          this.state = 207
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx)
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
    const _localctx: Assignment_expressionContext = new Assignment_expressionContext(
      this._ctx,
      this.state,
    )
    this.enterRule(_localctx, 36, CalcParser.RULE_assignment_expression)
    try {
      this.state = 213
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 17, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 208
            this.conditional_expression()
          }
          break

        case 2:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 209
            _localctx._assg = this.unary_expression()
            this.state = 210
            _localctx._operator = this.assignment_operator()
            this.state = 211
            _localctx._expr = this.assignment_expression()
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
    this.enterRule(_localctx, 38, CalcParser.RULE_constant_expression)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 215
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
    const _localctx: Conditional_expressionContext = new Conditional_expressionContext(
      this._ctx,
      this.state,
    )
    this.enterRule(_localctx, 40, CalcParser.RULE_conditional_expression)
    try {
      this.state = 224
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 18, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 217
            this.logical_or_expression(0)
          }
          break

        case 2:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 218
            _localctx._cond = this.logical_or_expression(0)
            this.state = 219
            this.match(CalcParser.QUESTION_MARK)
            this.state = 220
            _localctx._if_true = this.expression(0)
            this.state = 221
            this.match(CalcParser.COLON)
            this.state = 222
            _localctx._if_false = this.conditional_expression()
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
    const _startState: number = 42
    this.enterRecursionRule(_localctx, 42, CalcParser.RULE_logical_or_expression, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        {
          this.state = 227
          this.logical_and_expression(0)
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 234
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              {
                _localctx = new Logical_or_expressionContext(_parentctx, _parentState)
                _localctx._left = _prevctx
                this.pushNewRecursionContext(
                  _localctx,
                  _startState,
                  CalcParser.RULE_logical_or_expression,
                )
                this.state = 229
                if (!this.precpred(this._ctx, 1)) {
                  throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                }
                this.state = 230
                _localctx._operator = this.match(CalcParser.BOOLEAN_OR)
                this.state = 231
                _localctx._right = this.logical_and_expression(0)
              }
            }
          }
          this.state = 236
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx)
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
    const _startState: number = 44
    this.enterRecursionRule(_localctx, 44, CalcParser.RULE_logical_and_expression, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        {
          this.state = 238
          this.inclusive_or_expression(0)
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 245
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
                _localctx = new Logical_and_expressionContext(_parentctx, _parentState)
                _localctx._left = _prevctx
                this.pushNewRecursionContext(
                  _localctx,
                  _startState,
                  CalcParser.RULE_logical_and_expression,
                )
                this.state = 240
                if (!this.precpred(this._ctx, 1)) {
                  throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                }
                this.state = 241
                _localctx._operator = this.match(CalcParser.BOOLEAN_AND)
                this.state = 242
                _localctx._right = this.inclusive_or_expression(0)
              }
            }
          }
          this.state = 247
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
    const _startState: number = 46
    this.enterRecursionRule(_localctx, 46, CalcParser.RULE_inclusive_or_expression, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        {
          this.state = 249
          this.exclusive_or_expression(0)
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 256
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              {
                _localctx = new Inclusive_or_expressionContext(_parentctx, _parentState)
                _localctx._left = _prevctx
                this.pushNewRecursionContext(
                  _localctx,
                  _startState,
                  CalcParser.RULE_inclusive_or_expression,
                )
                this.state = 251
                if (!this.precpred(this._ctx, 1)) {
                  throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                }
                this.state = 252
                _localctx._operator = this.match(CalcParser.VERTICAL_BAR)
                this.state = 253
                _localctx._right = this.exclusive_or_expression(0)
              }
            }
          }
          this.state = 258
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx)
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
    const _startState: number = 48
    this.enterRecursionRule(_localctx, 48, CalcParser.RULE_exclusive_or_expression, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        {
          this.state = 260
          this.and_expression(0)
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 267
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              {
                _localctx = new Exclusive_or_expressionContext(_parentctx, _parentState)
                _localctx._left = _prevctx
                this.pushNewRecursionContext(
                  _localctx,
                  _startState,
                  CalcParser.RULE_exclusive_or_expression,
                )
                this.state = 262
                if (!this.precpred(this._ctx, 1)) {
                  throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                }
                this.state = 263
                _localctx._operator = this.match(CalcParser.CARET)
                this.state = 264
                _localctx._right = this.and_expression(0)
              }
            }
          }
          this.state = 269
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx)
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
    const _startState: number = 50
    this.enterRecursionRule(_localctx, 50, CalcParser.RULE_and_expression, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        {
          this.state = 271
          this.equality_expression(0)
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 278
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              {
                _localctx = new And_expressionContext(_parentctx, _parentState)
                _localctx._left = _prevctx
                this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_and_expression)
                this.state = 273
                if (!this.precpred(this._ctx, 1)) {
                  throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                }
                this.state = 274
                _localctx._operator = this.match(CalcParser.AMPERSAND)
                this.state = 275
                _localctx._right = this.equality_expression(0)
              }
            }
          }
          this.state = 280
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx)
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
    const _startState: number = 52
    this.enterRecursionRule(_localctx, 52, CalcParser.RULE_equality_expression, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        {
          this.state = 282
          this.relational_expression(0)
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 292
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              this.state = 290
              this._errHandler.sync(this)
              switch (this.interpreter.adaptivePredict(this._input, 24, this._ctx)) {
                case 1:
                  {
                    _localctx = new Equality_expressionContext(_parentctx, _parentState)
                    _localctx._left = _prevctx
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      CalcParser.RULE_equality_expression,
                    )
                    this.state = 284
                    if (!this.precpred(this._ctx, 2)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 2)')
                    }
                    this.state = 285
                    _localctx._operator = this.match(CalcParser.EQUALITY_EQUAL)
                    this.state = 286
                    _localctx._right = this.relational_expression(0)
                  }
                  break

                case 2:
                  {
                    _localctx = new Equality_expressionContext(_parentctx, _parentState)
                    _localctx._left = _prevctx
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      CalcParser.RULE_equality_expression,
                    )
                    this.state = 287
                    if (!this.precpred(this._ctx, 1)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                    }
                    this.state = 288
                    _localctx._operator = this.match(CalcParser.EQUALITY_NOT_EQUAL)
                    this.state = 289
                    _localctx._right = this.relational_expression(0)
                  }
                  break
              }
            }
          }
          this.state = 294
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx)
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
    const _startState: number = 54
    this.enterRecursionRule(_localctx, 54, CalcParser.RULE_relational_expression, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        {
          this.state = 296
          this.shift_expression(0)
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 312
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              this.state = 310
              this._errHandler.sync(this)
              switch (this.interpreter.adaptivePredict(this._input, 26, this._ctx)) {
                case 1:
                  {
                    _localctx = new Relational_expressionContext(_parentctx, _parentState)
                    _localctx._left = _prevctx
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      CalcParser.RULE_relational_expression,
                    )
                    this.state = 298
                    if (!this.precpred(this._ctx, 4)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 4)')
                    }
                    this.state = 299
                    _localctx._operator = this.match(CalcParser.RELATIONAL_GREATER_THAN)
                    this.state = 300
                    _localctx._right = this.shift_expression(0)
                  }
                  break

                case 2:
                  {
                    _localctx = new Relational_expressionContext(_parentctx, _parentState)
                    _localctx._left = _prevctx
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      CalcParser.RULE_relational_expression,
                    )
                    this.state = 301
                    if (!this.precpred(this._ctx, 3)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 3)')
                    }
                    this.state = 302
                    _localctx._operator = this.match(CalcParser.RELATIONAL_LESS_THAN)
                    this.state = 303
                    _localctx._right = this.shift_expression(0)
                  }
                  break

                case 3:
                  {
                    _localctx = new Relational_expressionContext(_parentctx, _parentState)
                    _localctx._left = _prevctx
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      CalcParser.RULE_relational_expression,
                    )
                    this.state = 304
                    if (!this.precpred(this._ctx, 2)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 2)')
                    }
                    this.state = 305
                    _localctx._operator = this.match(CalcParser.RELATIONAL_LESS_THAN_OR_EQUAL)
                    this.state = 306
                    _localctx._right = this.shift_expression(0)
                  }
                  break

                case 4:
                  {
                    _localctx = new Relational_expressionContext(_parentctx, _parentState)
                    _localctx._left = _prevctx
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      CalcParser.RULE_relational_expression,
                    )
                    this.state = 307
                    if (!this.precpred(this._ctx, 1)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                    }
                    this.state = 308
                    _localctx._operator = this.match(CalcParser.RELATIONAL_GREATER_THAN_OR_EQUAL)
                    this.state = 309
                    _localctx._right = this.shift_expression(0)
                  }
                  break
              }
            }
          }
          this.state = 314
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx)
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
    const _startState: number = 56
    this.enterRecursionRule(_localctx, 56, CalcParser.RULE_shift_expression, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        {
          this.state = 316
          this.additive_expression(0)
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 326
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              this.state = 324
              this._errHandler.sync(this)
              switch (this.interpreter.adaptivePredict(this._input, 28, this._ctx)) {
                case 1:
                  {
                    _localctx = new Shift_expressionContext(_parentctx, _parentState)
                    _localctx._left = _prevctx
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      CalcParser.RULE_shift_expression,
                    )
                    this.state = 318
                    if (!this.precpred(this._ctx, 2)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 2)')
                    }
                    this.state = 319
                    _localctx._operator = this.match(CalcParser.SHIFT_LEFT)
                    this.state = 320
                    _localctx._right = this.additive_expression(0)
                  }
                  break

                case 2:
                  {
                    _localctx = new Shift_expressionContext(_parentctx, _parentState)
                    _localctx._left = _prevctx
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      CalcParser.RULE_shift_expression,
                    )
                    this.state = 321
                    if (!this.precpred(this._ctx, 1)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                    }
                    this.state = 322
                    _localctx._operator = this.match(CalcParser.SHIFT_RIGHT)
                    this.state = 323
                    _localctx._right = this.additive_expression(0)
                  }
                  break
              }
            }
          }
          this.state = 328
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx)
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
    const _startState: number = 58
    this.enterRecursionRule(_localctx, 58, CalcParser.RULE_additive_expression, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        {
          this.state = 330
          this.multiplicative_expression(0)
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 340
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              this.state = 338
              this._errHandler.sync(this)
              switch (this.interpreter.adaptivePredict(this._input, 30, this._ctx)) {
                case 1:
                  {
                    _localctx = new Additive_expressionContext(_parentctx, _parentState)
                    _localctx._left = _prevctx
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      CalcParser.RULE_additive_expression,
                    )
                    this.state = 332
                    if (!this.precpred(this._ctx, 2)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 2)')
                    }
                    this.state = 333
                    _localctx._operator = this.match(CalcParser.PLUS)
                    this.state = 334
                    _localctx._right = this.multiplicative_expression(0)
                  }
                  break

                case 2:
                  {
                    _localctx = new Additive_expressionContext(_parentctx, _parentState)
                    _localctx._left = _prevctx
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      CalcParser.RULE_additive_expression,
                    )
                    this.state = 335
                    if (!this.precpred(this._ctx, 1)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                    }
                    this.state = 336
                    _localctx._operator = this.match(CalcParser.MINUS)
                    this.state = 337
                    _localctx._right = this.multiplicative_expression(0)
                  }
                  break
              }
            }
          }
          this.state = 342
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx)
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
    const _startState: number = 60
    this.enterRecursionRule(_localctx, 60, CalcParser.RULE_multiplicative_expression, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        {
          this.state = 344
          this.cast_expression()
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 357
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              this.state = 355
              this._errHandler.sync(this)
              switch (this.interpreter.adaptivePredict(this._input, 32, this._ctx)) {
                case 1:
                  {
                    _localctx = new Multiplicative_expressionContext(_parentctx, _parentState)
                    _localctx._left = _prevctx
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      CalcParser.RULE_multiplicative_expression,
                    )
                    this.state = 346
                    if (!this.precpred(this._ctx, 3)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 3)')
                    }
                    this.state = 347
                    _localctx._operator = this.match(CalcParser.ASTERICK)
                    this.state = 348
                    _localctx._right = this.cast_expression()
                  }
                  break

                case 2:
                  {
                    _localctx = new Multiplicative_expressionContext(_parentctx, _parentState)
                    _localctx._left = _prevctx
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      CalcParser.RULE_multiplicative_expression,
                    )
                    this.state = 349
                    if (!this.precpred(this._ctx, 2)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 2)')
                    }
                    this.state = 350
                    _localctx._operator = this.match(CalcParser.BACKSLASH)
                    this.state = 351
                    _localctx._right = this.cast_expression()
                  }
                  break

                case 3:
                  {
                    _localctx = new Multiplicative_expressionContext(_parentctx, _parentState)
                    _localctx._left = _prevctx
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      CalcParser.RULE_multiplicative_expression,
                    )
                    this.state = 352
                    if (!this.precpred(this._ctx, 1)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                    }
                    this.state = 353
                    _localctx._operator = this.match(CalcParser.PERCENT)
                    this.state = 354
                    _localctx._right = this.cast_expression()
                  }
                  break
              }
            }
          }
          this.state = 359
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
  public cast_expression(): Cast_expressionContext {
    const _localctx: Cast_expressionContext = new Cast_expressionContext(this._ctx, this.state)
    this.enterRule(_localctx, 62, CalcParser.RULE_cast_expression)
    try {
      this.state = 366
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 34, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 360
            this.unary_expression()
          }
          break

        case 2:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 361
            this.match(CalcParser.OPEN_PARENTHESES)
            this.state = 362
            this.type_name()
            this.state = 363
            this.match(CalcParser.CLOSE_PARENTHESES)
            this.state = 364
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
    this.enterRule(_localctx, 64, CalcParser.RULE_type_name)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 369
        this._errHandler.sync(this)
        _alt = 1
        do {
          switch (_alt) {
            case 1:
              {
                {
                  this.state = 368
                  this.specifier_qualifier()
                }
              }
              break
            default:
              throw new NoViableAltException(this)
          }
          this.state = 371
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx)
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
  public specifier_qualifier(): Specifier_qualifierContext {
    const _localctx: Specifier_qualifierContext = new Specifier_qualifierContext(
      this._ctx,
      this.state,
    )
    this.enterRule(_localctx, 66, CalcParser.RULE_specifier_qualifier)
    try {
      this.state = 375
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case CalcParser.VOID_TYPE_SPECIFIER:
        case CalcParser.CHAR_TYPE_SPECIFIER:
        case CalcParser.SHORT_TYPE_SPECIFIER:
        case CalcParser.INT_TYPE_SPECIFIER:
        case CalcParser.LONG_TYPE_SPECIFIER:
        case CalcParser.FLOAT_TYPE_SPECIFIER:
        case CalcParser.DOUBLE_TYPE_SPECIFIER:
        case CalcParser.SIGNED_TYPE_SPECIFIER:
        case CalcParser.UNSIGNED_TYPE_SPECIFIER:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 373
            this.type_specifier()
          }
          break
        case CalcParser.CONST_TYPE_QUALIFIER:
        case CalcParser.VOLATILE_TYPE_QUALIFIER:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 374
            this.type_qualifier()
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
  public unary_expression(): Unary_expressionContext {
    const _localctx: Unary_expressionContext = new Unary_expressionContext(this._ctx, this.state)
    this.enterRule(_localctx, 68, CalcParser.RULE_unary_expression)
    try {
      this.state = 389
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 37, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 377
            this.postfix_expression(0)
          }
          break

        case 2:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 378
            this.match(CalcParser.INCREMENT)
            this.state = 379
            this.unary_expression()
          }
          break

        case 3:
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 380
            this.match(CalcParser.DECREMENT)
            this.state = 381
            this.unary_expression()
          }
          break

        case 4:
          this.enterOuterAlt(_localctx, 4)
          {
            this.state = 382
            this.unary_operator()
            this.state = 383
            this.cast_expression()
          }
          break

        case 5:
          this.enterOuterAlt(_localctx, 5)
          {
            this.state = 385
            this.match(CalcParser.SIZE_OF)
            this.state = 386
            this.unary_expression()
          }
          break

        case 6:
          this.enterOuterAlt(_localctx, 6)
          {
            this.state = 387
            this.match(CalcParser.SIZE_OF)
            this.state = 388
            this.type_name()
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
    const _startState: number = 70
    this.enterRecursionRule(_localctx, 70, CalcParser.RULE_postfix_expression, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        {
          this.state = 392
          this.primary_expression()
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 416
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              this.state = 414
              this._errHandler.sync(this)
              switch (this.interpreter.adaptivePredict(this._input, 38, this._ctx)) {
                case 1:
                  {
                    _localctx = new Postfix_expressionContext(_parentctx, _parentState)
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      CalcParser.RULE_postfix_expression,
                    )
                    this.state = 394
                    if (!this.precpred(this._ctx, 6)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 6)')
                    }
                    this.state = 395
                    this.match(CalcParser.OPEN_SQUARE_BRACKET)
                    this.state = 396
                    this.expression(0)
                    this.state = 397
                    this.match(CalcParser.CLOSE_SQUARE_BRACKET)
                  }
                  break

                case 2:
                  {
                    _localctx = new Postfix_expressionContext(_parentctx, _parentState)
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      CalcParser.RULE_postfix_expression,
                    )
                    this.state = 399
                    if (!this.precpred(this._ctx, 5)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 5)')
                    }
                    this.state = 400
                    this.match(CalcParser.OPEN_PARENTHESES)
                    this.state = 401
                    this.expression(0)
                    this.state = 402
                    this.match(CalcParser.CLOSE_PARENTHESES)
                  }
                  break

                case 3:
                  {
                    _localctx = new Postfix_expressionContext(_parentctx, _parentState)
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      CalcParser.RULE_postfix_expression,
                    )
                    this.state = 404
                    if (!this.precpred(this._ctx, 4)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 4)')
                    }
                    this.state = 405
                    this.match(CalcParser.FULLSTOP)
                    this.state = 406
                    this.match(CalcParser.IDENTIFIER)
                  }
                  break

                case 4:
                  {
                    _localctx = new Postfix_expressionContext(_parentctx, _parentState)
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      CalcParser.RULE_postfix_expression,
                    )
                    this.state = 407
                    if (!this.precpred(this._ctx, 3)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 3)')
                    }
                    this.state = 408
                    this.match(CalcParser.RIGHT_ARROW)
                    this.state = 409
                    this.match(CalcParser.IDENTIFIER)
                  }
                  break

                case 5:
                  {
                    _localctx = new Postfix_expressionContext(_parentctx, _parentState)
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      CalcParser.RULE_postfix_expression,
                    )
                    this.state = 410
                    if (!this.precpred(this._ctx, 2)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 2)')
                    }
                    this.state = 411
                    this.match(CalcParser.INCREMENT)
                  }
                  break

                case 6:
                  {
                    _localctx = new Postfix_expressionContext(_parentctx, _parentState)
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      CalcParser.RULE_postfix_expression,
                    )
                    this.state = 412
                    if (!this.precpred(this._ctx, 1)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                    }
                    this.state = 413
                    this.match(CalcParser.DECREMENT)
                  }
                  break
              }
            }
          }
          this.state = 418
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
  // @RuleVersion(0)
  public primary_expression(): Primary_expressionContext {
    const _localctx: Primary_expressionContext = new Primary_expressionContext(
      this._ctx,
      this.state,
    )
    this.enterRule(_localctx, 72, CalcParser.RULE_primary_expression)
    try {
      this.state = 425
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case CalcParser.IDENTIFIER:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 419
            this.match(CalcParser.IDENTIFIER)
          }
          break
        case CalcParser.INTEGER:
        case CalcParser.FLOAT:
        case CalcParser.CHAR:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 420
            this.constant()
          }
          break
        case CalcParser.OPEN_PARENTHESES:
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 421
            this.match(CalcParser.OPEN_PARENTHESES)
            this.state = 422
            this.expression(0)
            this.state = 423
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
  public constant(): ConstantContext {
    const _localctx: ConstantContext = new ConstantContext(this._ctx, this.state)
    this.enterRule(_localctx, 74, CalcParser.RULE_constant)
    try {
      this.state = 430
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case CalcParser.INTEGER:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 427
            this.integer_constant()
          }
          break
        case CalcParser.FLOAT:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 428
            this.float_constant()
          }
          break
        case CalcParser.CHAR:
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 429
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
    this.enterRule(_localctx, 76, CalcParser.RULE_integer_constant)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 432
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
    this.enterRule(_localctx, 78, CalcParser.RULE_float_constant)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 434
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
    this.enterRule(_localctx, 80, CalcParser.RULE_character_constant)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 436
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
    this.enterRule(_localctx, 82, CalcParser.RULE_compound_statement)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 438
        this.match(CalcParser.OPEN_CURLY_BRACKET)
        this.state = 439
        this.statement()
        this.state = 440
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

  public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
    switch (ruleIndex) {
      case 13:
        return this.direct_declarator_sempred(_localctx as Direct_declaratorContext, predIndex)

      case 15:
        return this.initializer_list_sempred(_localctx as Initializer_listContext, predIndex)

      case 17:
        return this.expression_sempred(_localctx as ExpressionContext, predIndex)

      case 21:
        return this.logical_or_expression_sempred(
          _localctx as Logical_or_expressionContext,
          predIndex,
        )

      case 22:
        return this.logical_and_expression_sempred(
          _localctx as Logical_and_expressionContext,
          predIndex,
        )

      case 23:
        return this.inclusive_or_expression_sempred(
          _localctx as Inclusive_or_expressionContext,
          predIndex,
        )

      case 24:
        return this.exclusive_or_expression_sempred(
          _localctx as Exclusive_or_expressionContext,
          predIndex,
        )

      case 25:
        return this.and_expression_sempred(_localctx as And_expressionContext, predIndex)

      case 26:
        return this.equality_expression_sempred(_localctx as Equality_expressionContext, predIndex)

      case 27:
        return this.relational_expression_sempred(
          _localctx as Relational_expressionContext,
          predIndex,
        )

      case 28:
        return this.shift_expression_sempred(_localctx as Shift_expressionContext, predIndex)

      case 29:
        return this.additive_expression_sempred(_localctx as Additive_expressionContext, predIndex)

      case 30:
        return this.multiplicative_expression_sempred(
          _localctx as Multiplicative_expressionContext,
          predIndex,
        )

      case 35:
        return this.postfix_expression_sempred(_localctx as Postfix_expressionContext, predIndex)
    }
    return true
  }
  private direct_declarator_sempred(
    _localctx: Direct_declaratorContext,
    predIndex: number,
  ): boolean {
    switch (predIndex) {
      case 0:
        return this.precpred(this._ctx, 2)

      case 1:
        return this.precpred(this._ctx, 1)
    }
    return true
  }
  private initializer_list_sempred(_localctx: Initializer_listContext, predIndex: number): boolean {
    switch (predIndex) {
      case 2:
        return this.precpred(this._ctx, 1)
    }
    return true
  }
  private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
    switch (predIndex) {
      case 3:
        return this.precpred(this._ctx, 1)
    }
    return true
  }
  private logical_or_expression_sempred(
    _localctx: Logical_or_expressionContext,
    predIndex: number,
  ): boolean {
    switch (predIndex) {
      case 4:
        return this.precpred(this._ctx, 1)
    }
    return true
  }
  private logical_and_expression_sempred(
    _localctx: Logical_and_expressionContext,
    predIndex: number,
  ): boolean {
    switch (predIndex) {
      case 5:
        return this.precpred(this._ctx, 1)
    }
    return true
  }
  private inclusive_or_expression_sempred(
    _localctx: Inclusive_or_expressionContext,
    predIndex: number,
  ): boolean {
    switch (predIndex) {
      case 6:
        return this.precpred(this._ctx, 1)
    }
    return true
  }
  private exclusive_or_expression_sempred(
    _localctx: Exclusive_or_expressionContext,
    predIndex: number,
  ): boolean {
    switch (predIndex) {
      case 7:
        return this.precpred(this._ctx, 1)
    }
    return true
  }
  private and_expression_sempred(_localctx: And_expressionContext, predIndex: number): boolean {
    switch (predIndex) {
      case 8:
        return this.precpred(this._ctx, 1)
    }
    return true
  }
  private equality_expression_sempred(
    _localctx: Equality_expressionContext,
    predIndex: number,
  ): boolean {
    switch (predIndex) {
      case 9:
        return this.precpred(this._ctx, 2)

      case 10:
        return this.precpred(this._ctx, 1)
    }
    return true
  }
  private relational_expression_sempred(
    _localctx: Relational_expressionContext,
    predIndex: number,
  ): boolean {
    switch (predIndex) {
      case 11:
        return this.precpred(this._ctx, 4)

      case 12:
        return this.precpred(this._ctx, 3)

      case 13:
        return this.precpred(this._ctx, 2)

      case 14:
        return this.precpred(this._ctx, 1)
    }
    return true
  }
  private shift_expression_sempred(_localctx: Shift_expressionContext, predIndex: number): boolean {
    switch (predIndex) {
      case 15:
        return this.precpred(this._ctx, 2)

      case 16:
        return this.precpred(this._ctx, 1)
    }
    return true
  }
  private additive_expression_sempred(
    _localctx: Additive_expressionContext,
    predIndex: number,
  ): boolean {
    switch (predIndex) {
      case 17:
        return this.precpred(this._ctx, 2)

      case 18:
        return this.precpred(this._ctx, 1)
    }
    return true
  }
  private multiplicative_expression_sempred(
    _localctx: Multiplicative_expressionContext,
    predIndex: number,
  ): boolean {
    switch (predIndex) {
      case 19:
        return this.precpred(this._ctx, 3)

      case 20:
        return this.precpred(this._ctx, 2)

      case 21:
        return this.precpred(this._ctx, 1)
    }
    return true
  }
  private postfix_expression_sempred(
    _localctx: Postfix_expressionContext,
    predIndex: number,
  ): boolean {
    switch (predIndex) {
      case 22:
        return this.precpred(this._ctx, 6)

      case 23:
        return this.precpred(this._ctx, 5)

      case 24:
        return this.precpred(this._ctx, 4)

      case 25:
        return this.precpred(this._ctx, 3)

      case 26:
        return this.precpred(this._ctx, 2)

      case 27:
        return this.precpred(this._ctx, 1)
    }
    return true
  }

  public static readonly _serializedATN: string =
    '\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03@\u01BD\x04\x02' +
    '\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07' +
    '\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04' +
    '\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04' +
    '\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04' +
    '\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04' +
    '\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04"\t"\x04#' +
    "\t#\x04$\t$\x04%\t%\x04&\t&\x04'\t'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
    '\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06' +
    '\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\b\x05\bf\n\b\x03\t\x06\ti\n\t' +
    '\r\t\x0E\tj\x03\t\x03\t\x03\t\x03\n\x03\n\x05\nr\n\n\x03\v\x03\v\x03\v' +
    '\x07\vw\n\v\f\v\x0E\vz\v\v\x03\f\x03\f\x03\f\x05\f\x7F\n\f\x03\r\x05\r' +
    '\x82\n\r\x03\r\x03\r\x03\x0E\x03\x0E\x07\x0E\x88\n\x0E\f\x0E\x0E\x0E\x8B' +
    '\v\x0E\x03\x0E\x05\x0E\x8E\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F' +
    '\x03\x0F\x05\x0F\x96\n\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\x9B\n\x0F\x03' +
    '\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\xA1\n\x0F\f\x0F\x0E\x0F\xA4\v\x0F' +
    '\x03\x0F\x07\x0F\xA7\n\x0F\f\x0F\x0E\x0F\xAA\v\x0F\x03\x10\x03\x10\x03' +
    '\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\xB6' +
    '\n\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11\xBE\n\x11' +
    '\f\x11\x0E\x11\xC1\v\x11\x03\x12\x05\x12\xC4\n\x12\x03\x12\x03\x12\x03' +
    '\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x07\x13\xCE\n\x13\f\x13\x0E' +
    '\x13\xD1\v\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\xD8\n\x14' +
    '\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16' +
    '\x05\x16\xE3\n\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x07' +
    '\x17\xEB\n\x17\f\x17\x0E\x17\xEE\v\x17\x03\x18\x03\x18\x03\x18\x03\x18' +
    '\x03\x18\x03\x18\x07\x18\xF6\n\x18\f\x18\x0E\x18\xF9\v\x18\x03\x19\x03' +
    '\x19\x03\x19\x03\x19\x03\x19\x03\x19\x07\x19\u0101\n\x19\f\x19\x0E\x19' +
    '\u0104\v\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x07\x1A\u010C' +
    '\n\x1A\f\x1A\x0E\x1A\u010F\v\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B' +
    '\x03\x1B\x07\x1B\u0117\n\x1B\f\x1B\x0E\x1B\u011A\v\x1B\x03\x1C\x03\x1C' +
    '\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x07\x1C\u0125' +
    '\n\x1C\f\x1C\x0E\x1C\u0128\v\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D' +
    '\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D' +
    '\x03\x1D\x07\x1D\u0139\n\x1D\f\x1D\x0E\x1D\u013C\v\x1D\x03\x1E\x03\x1E' +
    '\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x07\x1E\u0147' +
    '\n\x1E\f\x1E\x0E\x1E\u014A\v\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F' +
    '\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x07\x1F\u0155\n\x1F\f\x1F\x0E\x1F\u0158' +
    '\v\x1F\x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x07' +
    ' \u0166\n \f \x0E \u0169\v \x03!\x03!\x03!\x03!\x03!\x03!\x05!\u0171\n' +
    '!\x03"\x06"\u0174\n"\r"\x0E"\u0175\x03#\x03#\x05#\u017A\n#\x03$\x03' +
    '$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x05$\u0188\n$\x03' +
    '%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03' +
    '%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x07%\u01A1\n%\f%\x0E%\u01A4' +
    "\v%\x03&\x03&\x03&\x03&\x03&\x03&\x05&\u01AC\n&\x03'\x03'\x03'\x05" +
    "'\u01B1\n'\x03(\x03(\x03)\x03)\x03*\x03*\x03+\x03+\x03+\x03+\x03+\x02" +
    '\x02\x10\x1C $,.02468:<>H,\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E' +
    '\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 ' +
    '\x02"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02' +
    '<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02\x02' +
    '\x06\x05\x02\x04\x04\x06\x07\t\v\x03\x02\x1B%\x03\x022:\x03\x02;<\x02' +
    '\u01CB\x02V\x03\x02\x02\x02\x04X\x03\x02\x02\x02\x06Z\x03\x02\x02\x02' +
    '\b\\\x03\x02\x02\x02\n^\x03\x02\x02\x02\f`\x03\x02\x02\x02\x0Ee\x03\x02' +
    '\x02\x02\x10h\x03\x02\x02\x02\x12q\x03\x02\x02\x02\x14s\x03\x02\x02\x02' +
    '\x16{\x03\x02\x02\x02\x18\x81\x03\x02\x02\x02\x1A\x85\x03\x02\x02\x02' +
    '\x1C\x95\x03\x02\x02\x02\x1E\xB5\x03\x02\x02\x02 \xB7\x03\x02\x02\x02' +
    '"\xC3\x03\x02\x02\x02$\xC7\x03\x02\x02\x02&\xD7\x03\x02\x02\x02(\xD9' +
    '\x03\x02\x02\x02*\xE2\x03\x02\x02\x02,\xE4\x03\x02\x02\x02.\xEF\x03\x02' +
    '\x02\x020\xFA\x03\x02\x02\x022\u0105\x03\x02\x02\x024\u0110\x03\x02\x02' +
    '\x026\u011B\x03\x02\x02\x028\u0129\x03\x02\x02\x02:\u013D\x03\x02\x02' +
    '\x02<\u014B\x03\x02\x02\x02>\u0159\x03\x02\x02\x02@\u0170\x03\x02\x02' +
    '\x02B\u0173\x03\x02\x02\x02D\u0179\x03\x02\x02\x02F\u0187\x03\x02\x02' +
    '\x02H\u0189\x03\x02\x02\x02J\u01AB\x03\x02\x02\x02L\u01B0\x03\x02\x02' +
    '\x02N\u01B2\x03\x02\x02\x02P\u01B4\x03\x02\x02\x02R\u01B6\x03\x02\x02' +
    '\x02T\u01B8\x03\x02\x02\x02VW\t\x02\x02\x02W\x03\x03\x02\x02\x02XY\t\x03' +
    '\x02\x02Y\x05\x03\x02\x02\x02Z[\x07\x0F\x02\x02[\x07\x03\x02\x02\x02\\' +
    ']\t\x04\x02\x02]\t\x03\x02\x02\x02^_\t\x05\x02\x02_\v\x03\x02\x02\x02' +
    '`a\x05\x0E\b\x02a\r\x03\x02\x02\x02bf\x05\x10\t\x02cf\x05"\x12\x02df' +
    '\x05T+\x02eb\x03\x02\x02\x02ec\x03\x02\x02\x02ed\x03\x02\x02\x02f\x0F' +
    '\x03\x02\x02\x02gi\x05\x12\n\x02hg\x03\x02\x02\x02ij\x03\x02\x02\x02j' +
    'h\x03\x02\x02\x02jk\x03\x02\x02\x02kl\x03\x02\x02\x02lm\x05\x14\v\x02' +
    'mn\x05\x06\x04\x02n\x11\x03\x02\x02\x02or\x05\b\x05\x02pr\x05\n\x06\x02' +
    'qo\x03\x02\x02\x02qp\x03\x02\x02\x02r\x13\x03\x02\x02\x02sx\x05\x16\f' +
    '\x02tu\x07\x10\x02\x02uw\x05\x16\f\x02vt\x03\x02\x02\x02wz\x03\x02\x02' +
    '\x02xv\x03\x02\x02\x02xy\x03\x02\x02\x02y\x15\x03\x02\x02\x02zx\x03\x02' +
    '\x02\x02{~\x05\x18\r\x02|}\x07\x1B\x02\x02}\x7F\x05\x1E\x10\x02~|\x03' +
    '\x02\x02\x02~\x7F\x03\x02\x02\x02\x7F\x17\x03\x02\x02\x02\x80\x82\x05' +
    '\x1A\x0E\x02\x81\x80\x03\x02\x02\x02\x81\x82\x03\x02\x02\x02\x82\x83\x03' +
    '\x02\x02\x02\x83\x84\x05\x1C\x0F\x02\x84\x19\x03\x02\x02\x02\x85\x89\x07' +
    '\x04\x02\x02\x86\x88\x05\n\x06\x02\x87\x86\x03\x02\x02\x02\x88\x8B\x03' +
    '\x02\x02\x02\x89\x87\x03\x02\x02\x02\x89\x8A\x03\x02\x02\x02\x8A\x8D\x03' +
    '\x02\x02\x02\x8B\x89\x03\x02\x02\x02\x8C\x8E\x05\x1A\x0E\x02\x8D\x8C\x03' +
    '\x02\x02\x02\x8D\x8E\x03\x02\x02\x02\x8E\x1B\x03\x02\x02\x02\x8F\x90\b' +
    '\x0F\x01\x02\x90\x96\x07@\x02\x02\x91\x92\x07\x13\x02\x02\x92\x93\x05' +
    '\x18\r\x02\x93\x94\x07\x14\x02\x02\x94\x96\x03\x02\x02\x02\x95\x8F\x03' +
    '\x02\x02\x02\x95\x91\x03\x02\x02\x02\x96\xA8\x03\x02\x02\x02\x97\x98\f' +
    '\x04\x02\x02\x98\x9A\x07\x15\x02\x02\x99\x9B\x05(\x15\x02\x9A\x99\x03' +
    '\x02\x02\x02\x9A\x9B\x03\x02\x02\x02\x9B\x9C\x03\x02\x02\x02\x9C\xA7\x07' +
    '\x16\x02\x02\x9D\x9E\f\x03\x02\x02\x9E\xA2\x07\x13\x02\x02\x9F\xA1\x07' +
    '@\x02\x02\xA0\x9F\x03\x02\x02\x02\xA1\xA4\x03\x02\x02\x02\xA2\xA0\x03' +
    '\x02\x02\x02\xA2\xA3\x03\x02\x02\x02\xA3\xA5\x03\x02\x02\x02\xA4\xA2\x03' +
    '\x02\x02\x02\xA5\xA7\x07\x14\x02\x02\xA6\x97\x03\x02\x02\x02\xA6\x9D\x03' +
    '\x02\x02\x02\xA7\xAA\x03\x02\x02\x02\xA8\xA6\x03\x02\x02\x02\xA8\xA9\x03' +
    '\x02\x02\x02\xA9\x1D\x03\x02\x02\x02\xAA\xA8\x03\x02\x02\x02\xAB\xB6\x05' +
    '&\x14\x02\xAC\xAD\x07\x17\x02\x02\xAD\xAE\x05 \x11\x02\xAE\xAF\x07\x18' +
    '\x02\x02\xAF\xB6\x03\x02\x02\x02\xB0\xB1\x07\x17\x02\x02\xB1\xB2\x05 ' +
    '\x11\x02\xB2\xB3\x07\x10\x02\x02\xB3\xB4\x07\x18\x02\x02\xB4\xB6\x03\x02' +
    '\x02\x02\xB5\xAB\x03\x02\x02\x02\xB5\xAC\x03\x02\x02\x02\xB5\xB0\x03\x02' +
    '\x02\x02\xB6\x1F\x03\x02\x02\x02\xB7\xB8\b\x11\x01\x02\xB8\xB9\x05\x1E' +
    '\x10\x02\xB9\xBF\x03\x02\x02\x02\xBA\xBB\f\x03\x02\x02\xBB\xBC\x07\x10' +
    '\x02\x02\xBC\xBE\x05\x1E\x10\x02\xBD\xBA\x03\x02\x02\x02\xBE\xC1\x03\x02' +
    '\x02\x02\xBF\xBD\x03\x02\x02\x02\xBF\xC0\x03\x02\x02\x02\xC0!\x03\x02' +
    '\x02\x02\xC1\xBF\x03\x02\x02\x02\xC2\xC4\x05$\x13\x02\xC3\xC2\x03\x02' +
    '\x02\x02\xC3\xC4\x03\x02\x02\x02\xC4\xC5\x03\x02\x02\x02\xC5\xC6\x05\x06' +
    '\x04\x02\xC6#\x03\x02\x02\x02\xC7\xC8\b\x13\x01\x02\xC8\xC9\x05&\x14\x02' +
    '\xC9\xCF\x03\x02\x02\x02\xCA\xCB\f\x03\x02\x02\xCB\xCC\x07\x10\x02\x02' +
    '\xCC\xCE\x05&\x14\x02\xCD\xCA\x03\x02\x02\x02\xCE\xD1\x03\x02\x02\x02' +
    '\xCF\xCD\x03\x02\x02\x02\xCF\xD0\x03\x02\x02\x02\xD0%\x03\x02\x02\x02' +
    '\xD1\xCF\x03\x02\x02\x02\xD2\xD8\x05*\x16\x02\xD3\xD4\x05F$\x02\xD4\xD5' +
    '\x05\x04\x03\x02\xD5\xD6\x05&\x14\x02\xD6\xD8\x03\x02\x02\x02\xD7\xD2' +
    "\x03\x02\x02\x02\xD7\xD3\x03\x02\x02\x02\xD8'\x03\x02\x02\x02\xD9\xDA" +
    '\x05*\x16\x02\xDA)\x03\x02\x02\x02\xDB\xE3\x05,\x17\x02\xDC\xDD\x05,\x17' +
    '\x02\xDD\xDE\x07\r\x02\x02\xDE\xDF\x05$\x13\x02\xDF\xE0\x07\x0E\x02\x02' +
    '\xE0\xE1\x05*\x16\x02\xE1\xE3\x03\x02\x02\x02\xE2\xDB\x03\x02\x02\x02' +
    '\xE2\xDC\x03\x02\x02\x02\xE3+\x03\x02\x02\x02\xE4\xE5\b\x17\x01\x02\xE5' +
    '\xE6\x05.\x18\x02\xE6\xEC\x03\x02\x02\x02\xE7\xE8\f\x03\x02\x02\xE8\xE9' +
    "\x07'\x02\x02\xE9\xEB\x05.\x18\x02\xEA\xE7\x03\x02\x02\x02\xEB\xEE\x03" +
    '\x02\x02\x02\xEC\xEA\x03\x02\x02\x02\xEC\xED\x03\x02\x02\x02\xED-\x03' +
    '\x02\x02\x02\xEE\xEC\x03\x02\x02\x02\xEF\xF0\b\x18\x01\x02\xF0\xF1\x05' +
    '0\x19\x02\xF1\xF7\x03\x02\x02\x02\xF2\xF3\f\x03\x02\x02\xF3\xF4\x07&\x02' +
    '\x02\xF4\xF6\x050\x19\x02\xF5\xF2\x03\x02\x02\x02\xF6\xF9\x03\x02\x02' +
    '\x02\xF7\xF5\x03\x02\x02\x02\xF7\xF8\x03\x02\x02\x02\xF8/\x03\x02\x02' +
    '\x02\xF9\xF7\x03\x02\x02\x02\xFA\xFB\b\x19\x01\x02\xFB\xFC\x052\x1A\x02' +
    '\xFC\u0102\x03\x02\x02\x02\xFD\xFE\f\x03\x02\x02\xFE\xFF\x07\f\x02\x02' +
    '\xFF\u0101\x052\x1A\x02\u0100\xFD\x03\x02\x02\x02\u0101\u0104\x03\x02' +
    '\x02\x02\u0102\u0100\x03\x02\x02\x02\u0102\u0103\x03\x02\x02\x02\u0103' +
    '1\x03\x02\x02\x02\u0104\u0102\x03\x02\x02\x02\u0105\u0106\b\x1A\x01\x02' +
    '\u0106\u0107\x054\x1B\x02\u0107\u010D\x03\x02\x02\x02\u0108\u0109\f\x03' +
    '\x02\x02\u0109\u010A\x07\x03\x02\x02\u010A\u010C\x054\x1B\x02\u010B\u0108' +
    '\x03\x02\x02\x02\u010C\u010F\x03\x02\x02\x02\u010D\u010B\x03\x02\x02\x02' +
    '\u010D\u010E\x03\x02\x02\x02\u010E3\x03\x02\x02\x02\u010F\u010D\x03\x02' +
    '\x02\x02\u0110\u0111\b\x1B\x01\x02\u0111\u0112\x056\x1C\x02\u0112\u0118' +
    '\x03\x02\x02\x02\u0113\u0114\f\x03\x02\x02\u0114\u0115\x07\t\x02\x02\u0115' +
    '\u0117\x056\x1C\x02\u0116\u0113\x03\x02\x02\x02\u0117\u011A\x03\x02\x02' +
    '\x02\u0118\u0116\x03\x02\x02\x02\u0118\u0119\x03\x02\x02\x02\u01195\x03' +
    '\x02\x02\x02\u011A\u0118\x03\x02\x02\x02\u011B\u011C\b\x1C\x01\x02\u011C' +
    '\u011D\x058\x1D\x02\u011D\u0126\x03\x02\x02\x02\u011E\u011F\f\x04\x02' +
    '\x02\u011F\u0120\x07(\x02\x02\u0120\u0125\x058\x1D\x02\u0121\u0122\f\x03' +
    '\x02\x02\u0122\u0123\x07)\x02\x02\u0123\u0125\x058\x1D\x02\u0124\u011E' +
    '\x03\x02\x02\x02\u0124\u0121\x03\x02\x02\x02\u0125\u0128\x03\x02\x02\x02' +
    '\u0126\u0124\x03\x02\x02\x02\u0126\u0127\x03\x02\x02\x02\u01277\x03\x02' +
    '\x02\x02\u0128\u0126\x03\x02\x02\x02\u0129\u012A\b\x1D\x01\x02\u012A\u012B' +
    '\x05:\x1E\x02\u012B\u013A\x03\x02\x02\x02\u012C\u012D\f\x06\x02\x02\u012D' +
    '\u012E\x07*\x02\x02\u012E\u0139\x05:\x1E\x02\u012F\u0130\f\x05\x02\x02' +
    '\u0130\u0131\x07+\x02\x02\u0131\u0139\x05:\x1E\x02\u0132\u0133\f\x04\x02' +
    '\x02\u0133\u0134\x07,\x02\x02\u0134\u0139\x05:\x1E\x02\u0135\u0136\f\x03' +
    '\x02\x02\u0136\u0137\x07-\x02\x02\u0137\u0139\x05:\x1E\x02\u0138\u012C' +
    '\x03\x02\x02\x02\u0138\u012F\x03\x02\x02\x02\u0138\u0132\x03\x02\x02\x02' +
    '\u0138\u0135\x03\x02\x02\x02\u0139\u013C\x03\x02\x02\x02\u013A\u0138\x03' +
    '\x02\x02\x02\u013A\u013B\x03\x02\x02\x02\u013B9\x03\x02\x02\x02\u013C' +
    '\u013A\x03\x02\x02\x02\u013D\u013E\b\x1E\x01\x02\u013E\u013F\x05<\x1F' +
    '\x02\u013F\u0148\x03\x02\x02\x02\u0140\u0141\f\x04\x02\x02\u0141\u0142' +
    '\x07.\x02\x02\u0142\u0147\x05<\x1F\x02\u0143\u0144\f\x03\x02\x02\u0144' +
    '\u0145\x07/\x02\x02\u0145\u0147\x05<\x1F\x02\u0146\u0140\x03\x02\x02\x02' +
    '\u0146\u0143\x03\x02\x02\x02\u0147\u014A\x03\x02\x02\x02\u0148\u0146\x03' +
    '\x02\x02\x02\u0148\u0149\x03\x02\x02\x02\u0149;\x03\x02\x02\x02\u014A' +
    '\u0148\x03\x02\x02\x02\u014B\u014C\b\x1F\x01\x02\u014C\u014D\x05> \x02' +
    '\u014D\u0156\x03\x02\x02\x02\u014E\u014F\f\x04\x02\x02\u014F\u0150\x07' +
    '\x06\x02\x02\u0150\u0155\x05> \x02\u0151\u0152\f\x03\x02\x02\u0152\u0153' +
    '\x07\x07\x02\x02\u0153\u0155\x05> \x02\u0154\u014E\x03\x02\x02\x02\u0154' +
    '\u0151\x03\x02\x02\x02\u0155\u0158\x03\x02\x02\x02\u0156\u0154\x03\x02' +
    '\x02\x02\u0156\u0157\x03\x02\x02\x02\u0157=\x03\x02\x02\x02\u0158\u0156' +
    '\x03\x02\x02\x02\u0159\u015A\b \x01\x02\u015A\u015B\x05@!\x02\u015B\u0167' +
    '\x03\x02\x02\x02\u015C\u015D\f\x05\x02\x02\u015D\u015E\x07\x04\x02\x02' +
    '\u015E\u0166\x05@!\x02\u015F\u0160\f\x04\x02\x02\u0160\u0161\x07\x05\x02' +
    '\x02\u0161\u0166\x05@!\x02\u0162\u0163\f\x03\x02\x02\u0163\u0164\x07\b' +
    '\x02\x02\u0164\u0166\x05@!\x02\u0165\u015C\x03\x02\x02\x02\u0165\u015F' +
    '\x03\x02\x02\x02\u0165\u0162\x03\x02\x02\x02\u0166\u0169\x03\x02\x02\x02' +
    '\u0167\u0165\x03\x02\x02\x02\u0167\u0168\x03\x02\x02\x02\u0168?\x03\x02' +
    '\x02\x02\u0169\u0167\x03\x02\x02\x02\u016A\u0171\x05F$\x02\u016B\u016C' +
    '\x07\x13\x02\x02\u016C\u016D\x05B"\x02\u016D\u016E\x07\x14\x02\x02\u016E' +
    '\u016F\x05@!\x02\u016F\u0171\x03\x02\x02\x02\u0170\u016A\x03\x02\x02\x02' +
    '\u0170\u016B\x03\x02\x02\x02\u0171A\x03\x02\x02\x02\u0172\u0174\x05D#' +
    '\x02\u0173\u0172\x03\x02\x02\x02\u0174\u0175\x03\x02\x02\x02\u0175\u0173' +
    '\x03\x02\x02\x02\u0175\u0176\x03\x02\x02\x02\u0176C\x03\x02\x02\x02\u0177' +
    '\u017A\x05\b\x05\x02\u0178\u017A\x05\n\x06\x02\u0179\u0177\x03\x02\x02' +
    '\x02\u0179\u0178\x03\x02\x02\x02\u017AE\x03\x02\x02\x02\u017B\u0188\x05' +
    'H%\x02\u017C\u017D\x07\x19\x02\x02\u017D\u0188\x05F$\x02\u017E\u017F\x07' +
    '\x1A\x02\x02\u017F\u0188\x05F$\x02\u0180\u0181\x05\x02\x02\x02\u0181\u0182' +
    '\x05@!\x02\u0182\u0188\x03\x02\x02\x02\u0183\u0184\x071\x02\x02\u0184' +
    '\u0188\x05F$\x02\u0185\u0186\x071\x02\x02\u0186\u0188\x05B"\x02\u0187' +
    '\u017B\x03\x02\x02\x02\u0187\u017C\x03\x02\x02\x02\u0187\u017E\x03\x02' +
    '\x02\x02\u0187\u0180\x03\x02\x02\x02\u0187\u0183\x03\x02\x02\x02\u0187' +
    '\u0185\x03\x02\x02\x02\u0188G\x03\x02\x02\x02\u0189\u018A\b%\x01\x02\u018A' +
    '\u018B\x05J&\x02\u018B\u01A2\x03\x02\x02\x02\u018C\u018D\f\b\x02\x02\u018D' +
    '\u018E\x07\x15\x02\x02\u018E\u018F\x05$\x13\x02\u018F\u0190\x07\x16\x02' +
    '\x02\u0190\u01A1\x03\x02\x02\x02\u0191\u0192\f\x07\x02\x02\u0192\u0193' +
    '\x07\x13\x02\x02\u0193\u0194\x05$\x13\x02\u0194\u0195\x07\x14\x02\x02' +
    '\u0195\u01A1\x03\x02\x02\x02\u0196\u0197\f\x06\x02\x02\u0197\u0198\x07' +
    '\x11\x02\x02\u0198\u01A1\x07@\x02\x02\u0199\u019A\f\x05\x02\x02\u019A' +
    '\u019B\x07\x12\x02\x02\u019B\u01A1\x07@\x02\x02\u019C\u019D\f\x04\x02' +
    '\x02\u019D\u01A1\x07\x19\x02\x02\u019E\u019F\f\x03\x02\x02\u019F\u01A1' +
    '\x07\x1A\x02\x02\u01A0\u018C\x03\x02\x02\x02\u01A0\u0191\x03\x02\x02\x02' +
    '\u01A0\u0196\x03\x02\x02\x02\u01A0\u0199\x03\x02\x02\x02\u01A0\u019C\x03' +
    '\x02\x02\x02\u01A0\u019E\x03\x02\x02\x02\u01A1\u01A4\x03\x02\x02\x02\u01A2' +
    '\u01A0\x03\x02\x02\x02\u01A2\u01A3\x03\x02\x02\x02\u01A3I\x03\x02\x02' +
    '\x02\u01A4\u01A2\x03\x02\x02\x02\u01A5\u01AC\x07@\x02\x02\u01A6\u01AC' +
    "\x05L'\x02\u01A7\u01A8\x07\x13\x02\x02\u01A8\u01A9\x05$\x13\x02\u01A9" +
    '\u01AA\x07\x14\x02\x02\u01AA\u01AC\x03\x02\x02\x02\u01AB\u01A5\x03\x02' +
    '\x02\x02\u01AB\u01A6\x03\x02\x02\x02\u01AB\u01A7\x03\x02\x02\x02\u01AC' +
    'K\x03\x02\x02\x02\u01AD\u01B1\x05N(\x02\u01AE\u01B1\x05P)\x02\u01AF\u01B1' +
    '\x05R*\x02\u01B0\u01AD\x03\x02\x02\x02\u01B0\u01AE\x03\x02\x02\x02\u01B0' +
    '\u01AF\x03\x02\x02\x02\u01B1M\x03\x02\x02\x02\u01B2\u01B3\x07=\x02\x02' +
    '\u01B3O\x03\x02\x02\x02\u01B4\u01B5\x07>\x02\x02\u01B5Q\x03\x02\x02\x02' +
    '\u01B6\u01B7\x07?\x02\x02\u01B7S\x03\x02\x02\x02\u01B8\u01B9\x07\x17\x02' +
    '\x02\u01B9\u01BA\x05\x0E\b\x02\u01BA\u01BB\x07\x18\x02\x02\u01BBU\x03' +
    '\x02\x02\x02,ejqx~\x81\x89\x8D\x95\x9A\xA2\xA6\xA8\xB5\xBF\xC3\xCF\xD7' +
    '\xE2\xEC\xF7\u0102\u010D\u0118\u0124\u0126\u0138\u013A\u0146\u0148\u0154' +
    '\u0156\u0165\u0167\u0170\u0175\u0179\u0187\u01A0\u01A2\u01AB\u01B0'
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

export class Type_specifierContext extends ParserRuleContext {
  public VOID_TYPE_SPECIFIER(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.VOID_TYPE_SPECIFIER, 0)
  }
  public CHAR_TYPE_SPECIFIER(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.CHAR_TYPE_SPECIFIER, 0)
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
  public SIGNED_TYPE_SPECIFIER(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.SIGNED_TYPE_SPECIFIER, 0)
  }
  public UNSIGNED_TYPE_SPECIFIER(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.UNSIGNED_TYPE_SPECIFIER, 0)
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

export class StartContext extends ParserRuleContext {
  public statement(): StatementContext {
    return this.getRuleContext(0, StatementContext)
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

export class StatementContext extends ParserRuleContext {
  public declaration_statement(): Declaration_statementContext | undefined {
    return this.tryGetRuleContext(0, Declaration_statementContext)
  }
  public expression_statement(): Expression_statementContext | undefined {
    return this.tryGetRuleContext(0, Expression_statementContext)
  }
  public compound_statement(): Compound_statementContext | undefined {
    return this.tryGetRuleContext(0, Compound_statementContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_statement
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterStatement) {
      listener.enterStatement(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitStatement) {
      listener.exitStatement(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitStatement) {
      return visitor.visitStatement(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Declaration_statementContext extends ParserRuleContext {
  public init_declarator_list(): Init_declarator_listContext {
    return this.getRuleContext(0, Init_declarator_listContext)
  }
  public end_statement_delimiter(): End_statement_delimiterContext {
    return this.getRuleContext(0, End_statement_delimiterContext)
  }
  public declaration_specifier(): Declaration_specifierContext[]
  public declaration_specifier(i: number): Declaration_specifierContext
  public declaration_specifier(
    i?: number,
  ): Declaration_specifierContext | Declaration_specifierContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Declaration_specifierContext)
    } else {
      return this.getRuleContext(i, Declaration_specifierContext)
    }
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

export class Declaration_specifierContext extends ParserRuleContext {
  public type_specifier(): Type_specifierContext | undefined {
    return this.tryGetRuleContext(0, Type_specifierContext)
  }
  public type_qualifier(): Type_qualifierContext | undefined {
    return this.tryGetRuleContext(0, Type_qualifierContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_declaration_specifier
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterDeclaration_specifier) {
      listener.enterDeclaration_specifier(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitDeclaration_specifier) {
      listener.exitDeclaration_specifier(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitDeclaration_specifier) {
      return visitor.visitDeclaration_specifier(this)
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

export class PointerContext extends ParserRuleContext {
  public ASTERICK(): TerminalNode {
    return this.getToken(CalcParser.ASTERICK, 0)
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
  public pointer(): PointerContext | undefined {
    return this.tryGetRuleContext(0, PointerContext)
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

export class Direct_declaratorContext extends ParserRuleContext {
  public IDENTIFIER(): TerminalNode[]
  public IDENTIFIER(i: number): TerminalNode
  public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(CalcParser.IDENTIFIER)
    } else {
      return this.getToken(CalcParser.IDENTIFIER, i)
    }
  }
  public OPEN_PARENTHESES(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.OPEN_PARENTHESES, 0)
  }
  public declarator(): DeclaratorContext | undefined {
    return this.tryGetRuleContext(0, DeclaratorContext)
  }
  public CLOSE_PARENTHESES(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.CLOSE_PARENTHESES, 0)
  }
  public direct_declarator(): Direct_declaratorContext | undefined {
    return this.tryGetRuleContext(0, Direct_declaratorContext)
  }
  public OPEN_SQUARE_BRACKET(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.OPEN_SQUARE_BRACKET, 0)
  }
  public CLOSE_SQUARE_BRACKET(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.CLOSE_SQUARE_BRACKET, 0)
  }
  public constant_expression(): Constant_expressionContext | undefined {
    return this.tryGetRuleContext(0, Constant_expressionContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_direct_declarator
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterDirect_declarator) {
      listener.enterDirect_declarator(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitDirect_declarator) {
      listener.exitDirect_declarator(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitDirect_declarator) {
      return visitor.visitDirect_declarator(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class InitializerContext extends ParserRuleContext {
  public assignment_expression(): Assignment_expressionContext | undefined {
    return this.tryGetRuleContext(0, Assignment_expressionContext)
  }
  public OPEN_CURLY_BRACKET(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.OPEN_CURLY_BRACKET, 0)
  }
  public initializer_list(): Initializer_listContext | undefined {
    return this.tryGetRuleContext(0, Initializer_listContext)
  }
  public CLOSE_CURLY_BRACKET(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.CLOSE_CURLY_BRACKET, 0)
  }
  public COMMA(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.COMMA, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_initializer
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterInitializer) {
      listener.enterInitializer(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitInitializer) {
      listener.exitInitializer(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitInitializer) {
      return visitor.visitInitializer(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Initializer_listContext extends ParserRuleContext {
  public initializer(): InitializerContext {
    return this.getRuleContext(0, InitializerContext)
  }
  public initializer_list(): Initializer_listContext | undefined {
    return this.tryGetRuleContext(0, Initializer_listContext)
  }
  public COMMA(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.COMMA, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_initializer_list
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterInitializer_list) {
      listener.enterInitializer_list(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitInitializer_list) {
      listener.exitInitializer_list(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitInitializer_list) {
      return visitor.visitInitializer_list(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Expression_statementContext extends ParserRuleContext {
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
  public assignment_expression(): Assignment_expressionContext {
    return this.getRuleContext(0, Assignment_expressionContext)
  }
  public expression(): ExpressionContext | undefined {
    return this.tryGetRuleContext(0, ExpressionContext)
  }
  public COMMA(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.COMMA, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_expression
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterExpression) {
      listener.enterExpression(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitExpression) {
      listener.exitExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitExpression) {
      return visitor.visitExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Assignment_expressionContext extends ParserRuleContext {
  public _assg!: Unary_expressionContext
  public _operator!: Assignment_operatorContext
  public _expr!: Assignment_expressionContext
  public conditional_expression(): Conditional_expressionContext | undefined {
    return this.tryGetRuleContext(0, Conditional_expressionContext)
  }
  public unary_expression(): Unary_expressionContext | undefined {
    return this.tryGetRuleContext(0, Unary_expressionContext)
  }
  public assignment_operator(): Assignment_operatorContext | undefined {
    return this.tryGetRuleContext(0, Assignment_operatorContext)
  }
  public assignment_expression(): Assignment_expressionContext | undefined {
    return this.tryGetRuleContext(0, Assignment_expressionContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_assignment_expression
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterAssignment_expression) {
      listener.enterAssignment_expression(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitAssignment_expression) {
      listener.exitAssignment_expression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitAssignment_expression) {
      return visitor.visitAssignment_expression(this)
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
  public _cond!: Logical_or_expressionContext
  public _if_true!: ExpressionContext
  public _if_false!: Conditional_expressionContext
  public logical_or_expression(): Logical_or_expressionContext {
    return this.getRuleContext(0, Logical_or_expressionContext)
  }
  public QUESTION_MARK(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.QUESTION_MARK, 0)
  }
  public COLON(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.COLON, 0)
  }
  public expression(): ExpressionContext | undefined {
    return this.tryGetRuleContext(0, ExpressionContext)
  }
  public conditional_expression(): Conditional_expressionContext | undefined {
    return this.tryGetRuleContext(0, Conditional_expressionContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_conditional_expression
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterConditional_expression) {
      listener.enterConditional_expression(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitConditional_expression) {
      listener.exitConditional_expression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitConditional_expression) {
      return visitor.visitConditional_expression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Logical_or_expressionContext extends ParserRuleContext {
  public _left!: Logical_or_expressionContext
  public _operator!: Token
  public _right!: Logical_and_expressionContext
  public logical_and_expression(): Logical_and_expressionContext {
    return this.getRuleContext(0, Logical_and_expressionContext)
  }
  public logical_or_expression(): Logical_or_expressionContext | undefined {
    return this.tryGetRuleContext(0, Logical_or_expressionContext)
  }
  public BOOLEAN_OR(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.BOOLEAN_OR, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_logical_or_expression
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterLogical_or_expression) {
      listener.enterLogical_or_expression(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitLogical_or_expression) {
      listener.exitLogical_or_expression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitLogical_or_expression) {
      return visitor.visitLogical_or_expression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Logical_and_expressionContext extends ParserRuleContext {
  public _left!: Logical_and_expressionContext
  public _operator!: Token
  public _right!: Inclusive_or_expressionContext
  public inclusive_or_expression(): Inclusive_or_expressionContext {
    return this.getRuleContext(0, Inclusive_or_expressionContext)
  }
  public logical_and_expression(): Logical_and_expressionContext | undefined {
    return this.tryGetRuleContext(0, Logical_and_expressionContext)
  }
  public BOOLEAN_AND(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.BOOLEAN_AND, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_logical_and_expression
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterLogical_and_expression) {
      listener.enterLogical_and_expression(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitLogical_and_expression) {
      listener.exitLogical_and_expression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitLogical_and_expression) {
      return visitor.visitLogical_and_expression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Inclusive_or_expressionContext extends ParserRuleContext {
  public _left!: Inclusive_or_expressionContext
  public _operator!: Token
  public _right!: Exclusive_or_expressionContext
  public exclusive_or_expression(): Exclusive_or_expressionContext {
    return this.getRuleContext(0, Exclusive_or_expressionContext)
  }
  public inclusive_or_expression(): Inclusive_or_expressionContext | undefined {
    return this.tryGetRuleContext(0, Inclusive_or_expressionContext)
  }
  public VERTICAL_BAR(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.VERTICAL_BAR, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_inclusive_or_expression
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterInclusive_or_expression) {
      listener.enterInclusive_or_expression(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitInclusive_or_expression) {
      listener.exitInclusive_or_expression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitInclusive_or_expression) {
      return visitor.visitInclusive_or_expression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Exclusive_or_expressionContext extends ParserRuleContext {
  public _left!: Exclusive_or_expressionContext
  public _operator!: Token
  public _right!: And_expressionContext
  public and_expression(): And_expressionContext {
    return this.getRuleContext(0, And_expressionContext)
  }
  public exclusive_or_expression(): Exclusive_or_expressionContext | undefined {
    return this.tryGetRuleContext(0, Exclusive_or_expressionContext)
  }
  public CARET(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.CARET, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_exclusive_or_expression
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterExclusive_or_expression) {
      listener.enterExclusive_or_expression(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitExclusive_or_expression) {
      listener.exitExclusive_or_expression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitExclusive_or_expression) {
      return visitor.visitExclusive_or_expression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class And_expressionContext extends ParserRuleContext {
  public _left!: And_expressionContext
  public _operator!: Token
  public _right!: Equality_expressionContext
  public equality_expression(): Equality_expressionContext {
    return this.getRuleContext(0, Equality_expressionContext)
  }
  public and_expression(): And_expressionContext | undefined {
    return this.tryGetRuleContext(0, And_expressionContext)
  }
  public AMPERSAND(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.AMPERSAND, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_and_expression
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterAnd_expression) {
      listener.enterAnd_expression(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitAnd_expression) {
      listener.exitAnd_expression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitAnd_expression) {
      return visitor.visitAnd_expression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Equality_expressionContext extends ParserRuleContext {
  public _left!: Equality_expressionContext
  public _operator!: Token
  public _right!: Relational_expressionContext
  public relational_expression(): Relational_expressionContext {
    return this.getRuleContext(0, Relational_expressionContext)
  }
  public equality_expression(): Equality_expressionContext | undefined {
    return this.tryGetRuleContext(0, Equality_expressionContext)
  }
  public EQUALITY_EQUAL(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.EQUALITY_EQUAL, 0)
  }
  public EQUALITY_NOT_EQUAL(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.EQUALITY_NOT_EQUAL, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_equality_expression
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterEquality_expression) {
      listener.enterEquality_expression(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitEquality_expression) {
      listener.exitEquality_expression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitEquality_expression) {
      return visitor.visitEquality_expression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Relational_expressionContext extends ParserRuleContext {
  public _left!: Relational_expressionContext
  public _operator!: Token
  public _right!: Shift_expressionContext
  public shift_expression(): Shift_expressionContext {
    return this.getRuleContext(0, Shift_expressionContext)
  }
  public relational_expression(): Relational_expressionContext | undefined {
    return this.tryGetRuleContext(0, Relational_expressionContext)
  }
  public RELATIONAL_GREATER_THAN(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.RELATIONAL_GREATER_THAN, 0)
  }
  public RELATIONAL_LESS_THAN(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.RELATIONAL_LESS_THAN, 0)
  }
  public RELATIONAL_LESS_THAN_OR_EQUAL(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.RELATIONAL_LESS_THAN_OR_EQUAL, 0)
  }
  public RELATIONAL_GREATER_THAN_OR_EQUAL(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.RELATIONAL_GREATER_THAN_OR_EQUAL, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_relational_expression
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterRelational_expression) {
      listener.enterRelational_expression(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitRelational_expression) {
      listener.exitRelational_expression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitRelational_expression) {
      return visitor.visitRelational_expression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Shift_expressionContext extends ParserRuleContext {
  public _left!: Shift_expressionContext
  public _operator!: Token
  public _right!: Additive_expressionContext
  public additive_expression(): Additive_expressionContext {
    return this.getRuleContext(0, Additive_expressionContext)
  }
  public shift_expression(): Shift_expressionContext | undefined {
    return this.tryGetRuleContext(0, Shift_expressionContext)
  }
  public SHIFT_LEFT(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.SHIFT_LEFT, 0)
  }
  public SHIFT_RIGHT(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.SHIFT_RIGHT, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_shift_expression
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterShift_expression) {
      listener.enterShift_expression(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitShift_expression) {
      listener.exitShift_expression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitShift_expression) {
      return visitor.visitShift_expression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Additive_expressionContext extends ParserRuleContext {
  public _left!: Additive_expressionContext
  public _operator!: Token
  public _right!: Multiplicative_expressionContext
  public multiplicative_expression(): Multiplicative_expressionContext {
    return this.getRuleContext(0, Multiplicative_expressionContext)
  }
  public additive_expression(): Additive_expressionContext | undefined {
    return this.tryGetRuleContext(0, Additive_expressionContext)
  }
  public PLUS(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.PLUS, 0)
  }
  public MINUS(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.MINUS, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_additive_expression
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterAdditive_expression) {
      listener.enterAdditive_expression(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitAdditive_expression) {
      listener.exitAdditive_expression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitAdditive_expression) {
      return visitor.visitAdditive_expression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Multiplicative_expressionContext extends ParserRuleContext {
  public _left!: Multiplicative_expressionContext
  public _operator!: Token
  public _right!: Cast_expressionContext
  public cast_expression(): Cast_expressionContext {
    return this.getRuleContext(0, Cast_expressionContext)
  }
  public multiplicative_expression(): Multiplicative_expressionContext | undefined {
    return this.tryGetRuleContext(0, Multiplicative_expressionContext)
  }
  public ASTERICK(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.ASTERICK, 0)
  }
  public BACKSLASH(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.BACKSLASH, 0)
  }
  public PERCENT(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.PERCENT, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_multiplicative_expression
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterMultiplicative_expression) {
      listener.enterMultiplicative_expression(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitMultiplicative_expression) {
      listener.exitMultiplicative_expression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitMultiplicative_expression) {
      return visitor.visitMultiplicative_expression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Cast_expressionContext extends ParserRuleContext {
  public unary_expression(): Unary_expressionContext | undefined {
    return this.tryGetRuleContext(0, Unary_expressionContext)
  }
  public OPEN_PARENTHESES(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.OPEN_PARENTHESES, 0)
  }
  public type_name(): Type_nameContext | undefined {
    return this.tryGetRuleContext(0, Type_nameContext)
  }
  public CLOSE_PARENTHESES(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.CLOSE_PARENTHESES, 0)
  }
  public cast_expression(): Cast_expressionContext | undefined {
    return this.tryGetRuleContext(0, Cast_expressionContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_cast_expression
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterCast_expression) {
      listener.enterCast_expression(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitCast_expression) {
      listener.exitCast_expression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitCast_expression) {
      return visitor.visitCast_expression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Type_nameContext extends ParserRuleContext {
  public specifier_qualifier(): Specifier_qualifierContext[]
  public specifier_qualifier(i: number): Specifier_qualifierContext
  public specifier_qualifier(
    i?: number,
  ): Specifier_qualifierContext | Specifier_qualifierContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Specifier_qualifierContext)
    } else {
      return this.getRuleContext(i, Specifier_qualifierContext)
    }
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

export class Specifier_qualifierContext extends ParserRuleContext {
  public type_specifier(): Type_specifierContext | undefined {
    return this.tryGetRuleContext(0, Type_specifierContext)
  }
  public type_qualifier(): Type_qualifierContext | undefined {
    return this.tryGetRuleContext(0, Type_qualifierContext)
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

export class Unary_expressionContext extends ParserRuleContext {
  public postfix_expression(): Postfix_expressionContext | undefined {
    return this.tryGetRuleContext(0, Postfix_expressionContext)
  }
  public INCREMENT(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.INCREMENT, 0)
  }
  public unary_expression(): Unary_expressionContext | undefined {
    return this.tryGetRuleContext(0, Unary_expressionContext)
  }
  public DECREMENT(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.DECREMENT, 0)
  }
  public unary_operator(): Unary_operatorContext | undefined {
    return this.tryGetRuleContext(0, Unary_operatorContext)
  }
  public cast_expression(): Cast_expressionContext | undefined {
    return this.tryGetRuleContext(0, Cast_expressionContext)
  }
  public SIZE_OF(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.SIZE_OF, 0)
  }
  public type_name(): Type_nameContext | undefined {
    return this.tryGetRuleContext(0, Type_nameContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_unary_expression
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterUnary_expression) {
      listener.enterUnary_expression(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitUnary_expression) {
      listener.exitUnary_expression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitUnary_expression) {
      return visitor.visitUnary_expression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Postfix_expressionContext extends ParserRuleContext {
  public primary_expression(): Primary_expressionContext | undefined {
    return this.tryGetRuleContext(0, Primary_expressionContext)
  }
  public postfix_expression(): Postfix_expressionContext | undefined {
    return this.tryGetRuleContext(0, Postfix_expressionContext)
  }
  public OPEN_SQUARE_BRACKET(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.OPEN_SQUARE_BRACKET, 0)
  }
  public expression(): ExpressionContext | undefined {
    return this.tryGetRuleContext(0, ExpressionContext)
  }
  public CLOSE_SQUARE_BRACKET(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.CLOSE_SQUARE_BRACKET, 0)
  }
  public OPEN_PARENTHESES(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.OPEN_PARENTHESES, 0)
  }
  public CLOSE_PARENTHESES(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.CLOSE_PARENTHESES, 0)
  }
  public FULLSTOP(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.FULLSTOP, 0)
  }
  public IDENTIFIER(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.IDENTIFIER, 0)
  }
  public RIGHT_ARROW(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.RIGHT_ARROW, 0)
  }
  public INCREMENT(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.INCREMENT, 0)
  }
  public DECREMENT(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.DECREMENT, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_postfix_expression
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterPostfix_expression) {
      listener.enterPostfix_expression(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitPostfix_expression) {
      listener.exitPostfix_expression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitPostfix_expression) {
      return visitor.visitPostfix_expression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Primary_expressionContext extends ParserRuleContext {
  public IDENTIFIER(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.IDENTIFIER, 0)
  }
  public constant(): ConstantContext | undefined {
    return this.tryGetRuleContext(0, ConstantContext)
  }
  public OPEN_PARENTHESES(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.OPEN_PARENTHESES, 0)
  }
  public expression(): ExpressionContext | undefined {
    return this.tryGetRuleContext(0, ExpressionContext)
  }
  public CLOSE_PARENTHESES(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.CLOSE_PARENTHESES, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_primary_expression
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterPrimary_expression) {
      listener.enterPrimary_expression(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitPrimary_expression) {
      listener.exitPrimary_expression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitPrimary_expression) {
      return visitor.visitPrimary_expression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ConstantContext extends ParserRuleContext {
  public integer_constant(): Integer_constantContext | undefined {
    return this.tryGetRuleContext(0, Integer_constantContext)
  }
  public float_constant(): Float_constantContext | undefined {
    return this.tryGetRuleContext(0, Float_constantContext)
  }
  public character_constant(): Character_constantContext | undefined {
    return this.tryGetRuleContext(0, Character_constantContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_constant
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterConstant) {
      listener.enterConstant(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitConstant) {
      listener.exitConstant(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitConstant) {
      return visitor.visitConstant(this)
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
  public statement(): StatementContext {
    return this.getRuleContext(0, StatementContext)
  }
  public CLOSE_CURLY_BRACKET(): TerminalNode {
    return this.getToken(CalcParser.CLOSE_CURLY_BRACKET, 0)
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
