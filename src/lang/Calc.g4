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
VAR_ARG: '...';

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
STRUCT: 'struct';
UNION: 'union';

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

pointer: ASTERICK+;

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
   | struct_specifier
   | union_specifier
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

fragment
ZERO_DIGIT: [0];

fragment
S_CHAR
   : ~["\\\r\n]
   | '\\\n'
   | '\\\r\n'
   ;

INTEGER: (NON_ZERO_DIGIT DIGIT* | ZERO_DIGIT);
FLOAT: NON_ZERO_DIGIT DIGIT* FULLSTOP DIGIT*;
CHAR: '\'' S_CHAR '\'';
STRING: '"' S_CHAR* '"';
IDENTIFIER: ALPHABET_AND_UNDERSCORE (ALPHABET_AND_UNDERSCORE | DIGIT)*;

identifier: IDENTIFIER | SIZE_OF;

/*
 * Productions
 */
start : program;

program
   : (function_definition
   | (struct_specifier end_statement_delimiter)
   | (union_specifier end_statement_delimiter)
   | declaration_statement)*
   ;

/*
 * Function Definition
 */
function_definition
   : (declaration_specifiers)? declarator (declaration_statement)* compound_statement
   ;

parameter_type_list
   : parameter_list
   | parameter_list COMMA VAR_ARG
   ;

parameter_list
   : parameter_declaration
   | parameter_list COMMA parameter_declaration
   ;

parameter_declaration
   : declaration_specifiers declarator          # ParameterDeclarationTypeDeclarator
   | declaration_specifiers abstract_declarator # ParameterDeclarationTypeAbstractDeclarator
   | declaration_specifiers                     # ParameterDeclarationTypeNormal
   ;


/*
 * Struct Definition
 */
struct_specifier
   : STRUCT (identifier)? OPEN_CURLY_BRACKET (struct_or_union_declaration end_statement_delimiter)+ CLOSE_CURLY_BRACKET
   | STRUCT identifier
   ;

union_specifier
   : UNION (identifier)? OPEN_CURLY_BRACKET (struct_or_union_declaration)+ CLOSE_CURLY_BRACKET
   | UNION identifier
   ;

struct_or_union_declaration
   : specifier_qualifier struct_or_union_declarator_list
   ;

specifier_qualifier
   : (type_qualifier)* type_specifier
   ;

struct_or_union_declarator_list
   : struct_or_union_declarator
   | struct_or_union_declarator_list COMMA struct_or_union_declarator
   ;

struct_or_union_declarator
   : declarator
   ;


/*
 * Statements
 */
statement
   : labeled_statement     # StatementTypeLabeled
   | declaration_statement # StatementTypeDeclaration
   | expression_statement  # StatementTypeExpression
   | compound_statement    # StatementTypeCompound
   | if_statement          # StatementTypeIf
   | switch_statement      # StatementTypeSwitch
   | while_statement       # StatementTypeWhile
   | do_statement          # StatementTypeDo
   | for_statement         # StatementTypeFor
   | goto_statement        # StatementTypeGoto
   | continue_statement    # StatementTypeContinue
   | break_statement       # StatementTypeBreak
   | return_statement      # StatementTypeReturn
   ;


// Labeled Statement
labeled_statement
   : identifier COLON statement
   ;


// Declaration Statement
declaration_statement
   : declaration_specifiers init_declarator_list end_statement_delimiter
   ;

declaration_specifiers
   : type_specifier
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

direct_declarator
   : identifier                                                                           # DirectDeclaratorTypeIdentifier
   | OPEN_PARENTHESES declarator CLOSE_PARENTHESES                                        # DirectDeclaratorTypeNestedDeclarator // int (*pointer)[10];
   | direct_declarator OPEN_SQUARE_BRACKET (constant_expression)? CLOSE_SQUARE_BRACKET    # DirectDeclaratorTypeRecursiveArray  // int a[12];
   | direct_declarator OPEN_PARENTHESES (parameter_type_list)? CLOSE_PARENTHESES          # DirectDeclaratorTypeRecursiveParameters // int a(1, 2, 3); 
   | direct_declarator OPEN_PARENTHESES (identifier)* CLOSE_PARENTHESES                   # DirectDeclaratorTypeRecursiveIdentifiers
   ;

initializer
   : conditional_expression                                             # InitializerTypeConditionalExpression
   | OPEN_CURLY_BRACKET initializer_list (COMMA)? CLOSE_CURLY_BRACKET   # InitializerTypeArray // For arrays
   ;

initializer_list
   : initializer                          # InitializerListTypeInitializer
   | initializer_list COMMA initializer   # InitializerListTypeRecursiveInitializer
   ;


// Expression Statement
expression_statement
   : expression end_statement_delimiter
   ;

expression
   : assignment_expression                   # ExpressionTypeAssignment
   | expression COMMA assignment_expression  # ExpressionTypeExpression
   ;

assignment_expression
   : conditional_expression                                       # AssignmentExpressionTypeConditional
   | unary_expression assignment_operator assignment_expression   # AssignmentExpressionTypeAssignment
   ;

constant_expression
   : conditional_expression
   ;

conditional_expression
   : logical_or_expression                                                       # ConditionalExpressionTypeLogicalOr
   | logical_or_expression QUESTION_MARK expression COLON conditional_expression # ConditionalExpressionTypeConditional
   ;

logical_or_expression
   : logical_and_expression                                    # LogicalOrExpressionTypeLogicalAnd
   | logical_or_expression BOOLEAN_OR logical_and_expression   # LogicalOrExpressionTypeLogicalOr
   ;

logical_and_expression
   : inclusive_or_expression                                      # LogicalAndExpressionTypeInclusiveOr
   | logical_and_expression BOOLEAN_AND inclusive_or_expression   # LogicalAndExpressionTypeLogicalAnd
   ;

inclusive_or_expression
   : exclusive_or_expression                                      # InclusiveOrExpressionTypeExclusiveOr
   | inclusive_or_expression VERTICAL_BAR exclusive_or_expression # InclusiveOrExpressionTypeInclusiveOr
   ;

exclusive_or_expression
   : and_expression                                # ExclusiveOrExpressionTypeAnd
   | exclusive_or_expression CARET and_expression  # ExclusiveOrExpressionTypeExclusiveOr
   ;

and_expression
   : equality_expression                           # AndExpressionTypeEquality
   | and_expression AMPERSAND equality_expression  # AndExpressionTypeAnd
   ;

equality_expression
   : relational_expression                                        # EqualityExpressionTypeRelational
   | equality_expression EQUALITY_EQUAL relational_expression     # EqualityExpressionTypeEqualityEqual
   | equality_expression EQUALITY_NOT_EQUAL relational_expression # EqualityExpressionTypeEqualityNotEqual
   ;

relational_expression
   : shift_expression                                                         # RelationalExpressionTypeShift
   | relational_expression RELATIONAL_GREATER_THAN shift_expression           # RelationalExpressionTypeRelationalGT
   | relational_expression RELATIONAL_LESS_THAN shift_expression              # RelationalExpressionTypeRelationalLT
   | relational_expression RELATIONAL_LESS_THAN_OR_EQUAL shift_expression     # RelationalExpressionTypeRelationalLTOE
   | relational_expression RELATIONAL_GREATER_THAN_OR_EQUAL shift_expression  # RelationalExpressionTypeRelationalGTOE
   ;

shift_expression
   : additive_expression                              # ShfitExpressionTypeAdditive
   | shift_expression SHIFT_LEFT additive_expression  # ShfitExpressionTypeShiftLeft
   | shift_expression SHIFT_RIGHT additive_expression # ShfitExpressionTypeShiftRight
   ;

additive_expression
   : multiplicative_expression                            # AdditiveExpressionTypeMultiplicative
   | additive_expression PLUS multiplicative_expression   # AdditiveExpressionTypeAdditiveAdd
   | additive_expression MINUS multiplicative_expression  # AdditiveExpressionTypeAdditiveMinus
   ;

multiplicative_expression
   : cast_expression                                      # MultiplicativeExpressionTypeCast
   | multiplicative_expression ASTERICK cast_expression   # MultiplicativeExpressionTypeMultiplicativeAsterick
   | multiplicative_expression BACKSLASH cast_expression  # MultiplicativeExpressionTypeMultiplicativeBackslash
   | multiplicative_expression PERCENT cast_expression    # MultiplicativeExpressionTypeMultiplicativePercent
   ;

cast_expression
   : unary_expression                                               # CastExpressionTypeUnary
   | OPEN_PARENTHESES type_name CLOSE_PARENTHESES cast_expression   # CastExpressionTypeCast
   ;

type_name
   : type_specifier (abstract_declarator)?
   ;

abstract_declarator
   : pointer                                 # AbstractDeclaratorTypePointer
   | (pointer)? direct_abstract_declarator   # AbstractDeclaratorTypeDirectAbstractDeclarator
   ;

direct_abstract_declarator
   : OPEN_PARENTHESES abstract_declarator CLOSE_PARENTHESES                                     # DirectAbstractDeclaratorTypeNestedAbstractDeclarator
   | OPEN_SQUARE_BRACKET (constant_expression)? CLOSE_SQUARE_BRACKET                            # DirectAbstractDeclaratorTypeArray
   | OPEN_PARENTHESES (parameter_type_list)? CLOSE_PARENTHESES                                  # DirectAbstractDeclaratorTypeParameters
   | direct_abstract_declarator OPEN_SQUARE_BRACKET (constant_expression)? CLOSE_SQUARE_BRACKET # DirectAbstractDeclaratorTypeRecursiveArray
   | direct_abstract_declarator OPEN_PARENTHESES (parameter_type_list)? CLOSE_PARENTHESES       # DirectAbstractDeclaratorTypeRecursiveParameters
   ;

unary_expression
   : postfix_expression                                     # UnaryExpressionTypePostfix
   | INCREMENT unary_expression                             # UnaryExpressionTypeIncrement
   | DECREMENT unary_expression                             # UnaryExpressionTypeDecrement
   | unary_operator cast_expression                         # UnaryExpressionTypeUnaryOperator
   | SIZE_OF OPEN_PARENTHESES type_name CLOSE_PARENTHESES   # UnaryExpressionTypeSizeOf
   ;

postfix_expression
   : primary_expression                                                                # PostfixExpressionTypePrimary
   | postfix_expression OPEN_SQUARE_BRACKET assignment_expression CLOSE_SQUARE_BRACKET # PostfixExpressionTypeArray // array
   | postfix_expression OPEN_PARENTHESES expression? CLOSE_PARENTHESES                 # PostfixExpressionTypeFunctionCall // function call
   | postfix_expression FULLSTOP identifier                                            # PostfixExpressionTypeMember
   | postfix_expression RIGHT_ARROW identifier                                         # PostfixExpressionTypeDerefMember
   | postfix_expression INCREMENT                                                      # PostfixExpressionTypeIncrement
   | postfix_expression DECREMENT                                                      # PostfixExpressionTypeDecrement
   ;

primary_expression
   : identifier                                    # PrimaryExpressionTypeIdentifier
   | constant                                      # PrimaryExpressionTypeConstant
   | string                                        # PrimaryExpressionTypeString
   | OPEN_PARENTHESES expression CLOSE_PARENTHESES # PrimaryExpressionTypeNestedExpression
   ;

string: STRING;

constant
   : integer_constant     # ConstantTypeInteger
   | float_constant       # ConstantTypeFloat
   | character_constant   # ConstantTypeCharacter
   ;

integer_constant: INTEGER;

float_constant: FLOAT;

character_constant: CHAR;


// Compound Statement
compound_statement
   : OPEN_CURLY_BRACKET (statement)* CLOSE_CURLY_BRACKET
   ;


// If Statement
if_statement
   : IF OPEN_PARENTHESES expression CLOSE_PARENTHESES if_true=statement (ELSE if_false=statement)?
   ;


// Switch Statement
switch_statement
   : SWITCH OPEN_PARENTHESES expression CLOSE_PARENTHESES switch_body
   ;

switch_body
   : OPEN_CURLY_BRACKET (switch_case_body)* (switch_default_body)? CLOSE_CURLY_BRACKET
   ;

switch_case_body
   : CASE expression COLON (statement)*
   ;

switch_default_body
   : DEFAULT COLON (statement)*
   ;


// While Statement
while_statement
   : WHILE OPEN_PARENTHESES expression CLOSE_PARENTHESES statement
   ;


// Do Statement
do_statement
   : DO statement WHILE OPEN_PARENTHESES expression CLOSE_PARENTHESES end_statement_delimiter
   ;


// For Statement
for_statement
   : FOR OPEN_PARENTHESES (init=for_init_declaration)? SEMICOLON (test=expression)? SEMICOLON (update=expression)? CLOSE_PARENTHESES statement
   ;

for_init_declaration
   : declaration_specifiers init_declarator_list
   ;

// Goto Statement
goto_statement
   : GOTO identifier end_statement_delimiter
   ;


// Continue Statement
continue_statement
   : CONTINUE end_statement_delimiter
   ;


// Break Statement
break_statement
   : BREAK end_statement_delimiter
   ;


// Return Statement
return_statement
   : RETURN (expression)? end_statement_delimiter
   ;
