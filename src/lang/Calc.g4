grammar Calc;

/*
 * Tokens (terminal)
 */
CARET: '^';
ASTERICK: '*';
BACKSLASH: '/';
PLUS: '+';
MINUS: '-';
PERCENT: '%';
AMPERSAND: '&';
TILDA: '~';
EXCLAMATION_MARK: '!';
VERTICAL_BAR: '|';
QUESTION_MARK: '?';
COLON: ':';
SEMICOLON: ';';
COMMA: ',';
FULLSTOP: '.';
RIGHT_ARROW: '->';
OPEN_PARENTHESES: '(';
CLOSE_PARENTHESES: ')';
OPEN_SQUARE_BRACKET: '[';
CLOSE_SQUARE_BRACKET: ']';
OPEN_CURLY_BRACKET: '{';
CLOSE_CURLY_BRACKET: '}';
INCREMENT: '++';
DECREMENT: '--';
EQUAL: '=';
TIMES_EQUAL: '*=';
DIVIDE_EQUAL: '/=';
MODULO_EQUAL: '%=';
PLUS_EQUAL: '+=';
MINUS_EQUAL: '-=';
SHIFT_LEFT_EQUAL: '<<=';
SHIFT_RIGHT_EQUAL: '>>=';
BITWISE_AND_EQUAL: '&=';
BITWISE_XOR_EQUAL: '^=';
BITWISE_OR_EQUAL: '|=';
BOOLEAN_AND: '&&';
BOOLEAN_OR: '||';
EQUALITY_EQUAL: '==';
EQUALITY_NOT_EQUAL: '!=';
RELATIONAL_GREATER_THAN: '>';
RELATIONAL_LESS_THAN: '<';
RELATIONAL_LESS_THAN_OR_EQUAL: '<=';
RELATIONAL_GREATER_THAN_OR_EQUAL: '>=';
SHIFT_LEFT: '<<';
SHIFT_RIGHT: '>>';
WHITESPACE: [ \r\n\t]+ -> skip;

SIZE_OF: 'sizeof';
CASE: 'case';
DEFAULT: 'default';
IF: 'if';
ELSE: 'else';
SWITCH: 'switch';
WHILE: 'while';
DO: 'do';
FOR: 'for';
GOTO: 'goto';
CONTINUE: 'continue';
BREAK: 'break';
RETURN: 'return';

unary_operator
   : AMPERSAND // As address
   | ASTERICK // As deref
   | PLUS
   | MINUS
   | TILDA // As not
   | EXCLAMATION_MARK
   ;

assignment_operator
   : EQUAL
   | TIMES_EQUAL
   | DIVIDE_EQUAL
   | MODULO_EQUAL
   | PLUS_EQUAL
   | MINUS_EQUAL
   | SHIFT_LEFT_EQUAL
   | SHIFT_RIGHT_EQUAL
   | BITWISE_AND_EQUAL
   | BITWISE_XOR_EQUAL
   | BITWISE_OR_EQUAL
   ;

end_statement_delimiter: SEMICOLON;

VOID_TYPE_SPECIFIER: 'void';
CHAR_TYPE_SPECIFIER: 'char';
SHORT_TYPE_SPECIFIER: 'short';
INT_TYPE_SPECIFIER: 'int';
LONG_TYPE_SPECIFIER: 'long';
FLOAT_TYPE_SPECIFIER: 'float';
DOUBLE_TYPE_SPECIFIER: 'double';
SIGNED_TYPE_SPECIFIER: 'signed';
UNSIGNED_TYPE_SPECIFIER: 'unsigned';
type_sign_specifier
   : UNSIGNED_TYPE_SPECIFIER
   | SIGNED_TYPE_SPECIFIER
   ;

type_specifier
   : VOID_TYPE_SPECIFIER
   | type_sign_specifier? CHAR_TYPE_SPECIFIER
   | type_sign_specifier? SHORT_TYPE_SPECIFIER
   | type_sign_specifier? INT_TYPE_SPECIFIER
   | type_sign_specifier? LONG_TYPE_SPECIFIER
   | FLOAT_TYPE_SPECIFIER
   | DOUBLE_TYPE_SPECIFIER
   ;

CONST_TYPE_QUALIFIER: 'const';
VOLATILE_TYPE_QUALIFIER: 'volatile';
type_qualifier
   : CONST_TYPE_QUALIFIER
   | VOLATILE_TYPE_QUALIFIER
   ;

fragment
NON_ZERO_DIGIT: [1-9];

fragment
DIGIT: [0-9];

fragment
ALPHABET: [a-zA-Z];

fragment
ALPHABET_AND_UNDERSCORE: [a-zA-Z_];

INTEGER: NON_ZERO_DIGIT DIGIT*;
FLOAT: NON_ZERO_DIGIT DIGIT* FULLSTOP NON_ZERO_DIGIT DIGIT*;
CHAR: '\'' ALPHABET '\'';
IDENTIFIER: ALPHABET_AND_UNDERSCORE (ALPHABET_AND_UNDERSCORE | DIGIT)*;

identifier: IDENTIFIER;

/*
 * Productions
 */
start : program;

program
   : (function_definition | statement)*
   ;

/*
 * Function Definition
 */
function_definition
   : type=return_type name=identifier OPEN_PARENTHESES params=parameter_type_list CLOSE_PARENTHESES body=compound_statement
   ;

return_type
   : type_specifier (pointer)*
   ;

parameter_type_list
   : parameter_list
   | parameter_list COMMA '...'
   ;

parameter_list
   : parameter_declaration
   | parameter_list COMMA parameter_declaration
   ;

parameter_declaration
   : declaration_specifiers (pointer)* (identifier)? (array_declaration)*
   ;

array_declaration
   : OPEN_SQUARE_BRACKET (constant_expression) CLOSE_SQUARE_BRACKET
   ;


/*
 * Statements
 */
statement
   : labeled_statement
   | declaration_statement // Separate out to be statement, so that it is easier to interpret
   | expression_statement
   | compound_statement
   | selection_statement
   | iteration_statement
   | jump_statement
   ;


// Labeled Statement
labeled_statement
   : identifier COLON statement
   | CASE constant_expression COLON statement
   | DEFAULT COLON statement
   ;


// Declaration Statement
declaration_statement
   : type=declaration_specifiers decl=init_declarator_list end_statement_delimiter
   ;

declaration_specifiers
   : (type_qualifier)* type_specifier
   ;

init_declarator_list
   : init_declarator (COMMA init_declarator)*
   ;

init_declarator
   : declarator (EQUAL initializer)?
   ;

declarator
   : (pointer)? direct_declarator
   ;

pointer
   : ASTERICK (type_qualifier)* (pointer)?
   ;

direct_declarator
   : identifier
   | OPEN_PARENTHESES declarator CLOSE_PARENTHESES // int (*pointer)[10];
   | direct_declarator OPEN_SQUARE_BRACKET (constant_expression)? CLOSE_SQUARE_BRACKET // int a[12];
   | direct_declarator OPEN_PARENTHESES parameter_type_list CLOSE_PARENTHESES // int a(1, 2, 3); (function declarators)
   | direct_declarator OPEN_PARENTHESES (identifier)* CLOSE_PARENTHESES
   ;

initializer
   : assignment_expression
   | OPEN_CURLY_BRACKET initializer_list CLOSE_CURLY_BRACKET // For arrays
   | OPEN_CURLY_BRACKET initializer_list COMMA CLOSE_CURLY_BRACKET // For arrays
   ;

initializer_list
   : initializer
   | initializer_list COMMA initializer
   ;


// Expression Statement
expression_statement
   : (expr=expression)? end_statement_delimiter
   ;

expression
   : assignment_expression
   | expression COMMA assignment_expression
   ;

assignment_expression
   : conditional_expression
   | assg=unary_expression operator=assignment_operator expr=assignment_expression 
   ;

constant_expression
   : conditional_expression
   ;

conditional_expression
   : logical_or_expression
   | cond=logical_or_expression QUESTION_MARK if_true=expression COLON if_false=conditional_expression
   ;

logical_or_expression
   : logical_and_expression
   | left=logical_or_expression operator=BOOLEAN_OR right=logical_and_expression
   ;

logical_and_expression
   : inclusive_or_expression
   | left=logical_and_expression operator=BOOLEAN_AND right=inclusive_or_expression
   ;

inclusive_or_expression
   : exclusive_or_expression
   | left=inclusive_or_expression operator=VERTICAL_BAR right=exclusive_or_expression
   ;

exclusive_or_expression
   : and_expression
   | left=exclusive_or_expression operator=CARET right=and_expression
   ;

and_expression
   : equality_expression
   | left=and_expression operator=AMPERSAND right=equality_expression
   ;

equality_expression
   : relational_expression
   | left=equality_expression operator=EQUALITY_EQUAL right=relational_expression
   | left=equality_expression operator=EQUALITY_NOT_EQUAL right=relational_expression
   ;

relational_expression
   : shift_expression
   | left=relational_expression operator=RELATIONAL_GREATER_THAN right=shift_expression
   | left=relational_expression operator=RELATIONAL_LESS_THAN right=shift_expression
   | left=relational_expression operator=RELATIONAL_LESS_THAN_OR_EQUAL right=shift_expression
   | left=relational_expression operator=RELATIONAL_GREATER_THAN_OR_EQUAL right=shift_expression
   ;

shift_expression
   : additive_expression
   | left=shift_expression operator=SHIFT_LEFT right=additive_expression
   | left=shift_expression operator=SHIFT_RIGHT right=additive_expression
   ;

additive_expression
   : multiplicative_expression                                                # AdditiveNormalExpression
   | left=additive_expression operator=PLUS right=multiplicative_expression   # AdditiveAdditionExpression
   | left=additive_expression operator=MINUS right=multiplicative_expression  # AdditiveSubtractionExpression
   ;

multiplicative_expression
   : cast_expression                                                          # MultiplicativeNormalExpression
   | left=multiplicative_expression operator=ASTERICK right=cast_expression   # MultiplicativeMultiplyExpression
   | left=multiplicative_expression operator=BACKSLASH right=cast_expression  # MultiplicativeDivideExpression
   | left=multiplicative_expression operator=PERCENT right=cast_expression    # MultiplicativeModuloExpression
   ;

cast_expression
   : unary_expression                                                         # CastNormalExpression
   | OPEN_PARENTHESES type=type_name CLOSE_PARENTHESES expr=cast_expression   # CastTypeExpression
   ;

type_name
   : (type_qualifier)* type_specifier (abstract_declarator)?
   ;

abstract_declarator
   : pointer
   | (pointer)? direct_abstract_declarator
   ;

direct_abstract_declarator
   : OPEN_PARENTHESES abstract_declarator CLOSE_PARENTHESES
   | OPEN_SQUARE_BRACKET (constant_expression)? CLOSE_SQUARE_BRACKET
   | direct_abstract_declarator OPEN_SQUARE_BRACKET (constant_expression)? CLOSE_SQUARE_BRACKET
   ;

unary_expression
   : expr=postfix_expression                                    # PostfixUnaryExpression
   | INCREMENT expr=unary_expression                            # IncrementUnaryExpression
   | DECREMENT expr=unary_expression                            # DecrementUnaryExpression
   | op=unary_operator expr=cast_expression                     # CastUnaryExpression
   | SIZE_OF OPEN_PARENTHESES type=type_name CLOSE_PARENTHESES  # SizeOfUnaryExpression
   ;

postfix_expression
   : primary_expression
   | postfix_expression OPEN_SQUARE_BRACKET expression CLOSE_SQUARE_BRACKET // array
   | postfix_expression OPEN_PARENTHESES expression CLOSE_PARENTHESES // function call
   | postfix_expression FULLSTOP identifier
   | postfix_expression RIGHT_ARROW identifier
   | postfix_expression INCREMENT
   | postfix_expression DECREMENT
   ;

primary_expression
   : identifier
   | constant
   | OPEN_PARENTHESES expression CLOSE_PARENTHESES
   ;

constant
   : integer_constant     # IntegerConstant
   | float_constant       # FloatConstant
   | character_constant   # CharacterConstant
   ;

integer_constant: INTEGER;

float_constant: FLOAT;

character_constant: CHAR;


// Compound Statement
compound_statement
   : OPEN_CURLY_BRACKET (statement)* CLOSE_CURLY_BRACKET
   ;


// Selection Statement
selection_statement
   : IF OPEN_PARENTHESES cond=expression CLOSE_PARENTHESES if_true=statement
   | IF OPEN_PARENTHESES cond=expression CLOSE_PARENTHESES if_true=statement ELSE if_false=statement
   | SWITCH OPEN_PARENTHESES cond=expression CLOSE_PARENTHESES body=statement
   ;


// Iteration Statement
iteration_statement
   : WHILE OPEN_PARENTHESES cond=expression CLOSE_PARENTHESES statement
   | DO statement WHILE OPEN_PARENTHESES cond=expression CLOSE_PARENTHESES end_statement_delimiter
   | FOR OPEN_PARENTHESES (expression)? SEMICOLON (expression)? SEMICOLON (expression)? CLOSE_PARENTHESES statement
   ;


// Jump Statement
jump_statement
   : GOTO identifier end_statement_delimiter
   | CONTINUE end_statement_delimiter
   | BREAK end_statement_delimiter
   | RETURN (expression)? end_statement_delimiter
   ;
