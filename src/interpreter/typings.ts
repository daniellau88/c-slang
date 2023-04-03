import {
  CASTBinaryOperator,
  CASTCompoundStatement,
  CASTDeclaration,
  CASTExpression,
  CASTFunctionDefinition,
  CASTFunctionParameter,
  CASTIdentifier,
  CASTStatement,
  CASTUnaryOperator,
  ProgramType,
} from '../typings/programAST'

interface MicroCodeBase {
  tag: string
}

interface LoadFuncMicroCode extends MicroCodeBase {
  tag: 'load_func'
  function: CASTFunctionDefinition
}

interface LoadIntMicroCode extends MicroCodeBase {
  tag: 'load_int'
  value: number
}

interface LoadFloatMicroCode extends MicroCodeBase {
  tag: 'load_float'
  value: number
}

interface LoadVarMicroCode extends MicroCodeBase {
  tag: 'load_var'
  name: string
}

interface FuncApplyMicroCode extends MicroCodeBase {
  tag: 'func_apply'
  arity: number
}

interface PopOSMicroCode extends MicroCodeBase {
  tag: 'pop_os'
}

interface DuplicateTopOSMicroCode extends MicroCodeBase {
  tag: 'duplicate_top_os'
}

interface EnterScopeMicroCode extends MicroCodeBase {
  tag: 'enter_scope'
  declarations: Array<CASTDeclaration>
}

interface ExitScopeMicroCode extends MicroCodeBase {
  tag: 'exit_scope'
  declarations: Array<CASTDeclaration>
}

interface DeclarationMicroCode extends MicroCodeBase {
  tag: 'decl'
  declaration: CASTDeclaration
}

interface AssignmentMicroCode extends MicroCodeBase {
  tag: 'assgn'
}

export enum MicroCodeBinaryOperator {
  IntAddition,
  IntSubtraction,
  IntMultiply,
  IntDivision,
  IntModulo,
  FloatAddition,
  FloatSubtraction,
  FloatMultiply,
  FloatDivision,
  LogicalOr,
  LogicalAnd,
  InclusiveOr,
  ExclusiveOr,
  BitwiseAnd,
  EqualityEqual,
  EqualityNotEqual,
  RelationalGreaterThan,
  RelationalLessThan,
  RelationalGreaterThanOrEqual,
  RelationalLessThanOrEqual,
  ShiftLeft,
  ShiftRight,
}

interface BinaryOperationMicroCode extends MicroCodeBase {
  tag: 'bin_op'
  operator: MicroCodeBinaryOperator
}

interface BinaryOperationAutoPromotionMicroCode extends MicroCodeBase {
  tag: 'bin_op_auto_promotion'
  operator: CASTBinaryOperator
}

interface ExitFuncMicroCode extends MicroCodeBase {
  tag: 'exit_func'
}

interface DereferenceMicroCode extends MicroCodeBase {
  tag: 'deref'
}

interface ReturnMicroCode extends MicroCodeBase {
  tag: 'return'
  withExpression: boolean
}

interface UnaryOperationMicroCode extends MicroCodeBase {
  tag: 'unary_op'
  operator: CASTUnaryOperator
}

interface ConditionalOperationMicroCode extends MicroCodeBase {
  tag: 'conditional_op'
  ifFalse: CASTExpression
  ifTrue: CASTExpression
}

interface SizeOfOperationMicroCode extends MicroCodeBase {
  tag: 'size_of_op'
  typeModifiers: ProgramType
}

// Evaluates expressions in array
interface DeclarationEvaluateTypeModifierIterativeMicroCode extends MicroCodeBase {
  tag: 'decl_eval_type_modifier_i'
  oldTypeModifiers: ProgramType
  newTypeModifiers: ProgramType
  currentIndex: number
  name: string
}

interface DeclarationAllocateMemoryMicroCode extends MicroCodeBase {
  tag: 'decl_alloc_mem'
  typeModifiers: ProgramType
  name: string
}

interface ArrayAddressComputeMicroCode extends MicroCodeBase {
  tag: 'array_add_comp'
}

export type MicroCode =
  | LoadFuncMicroCode
  | LoadIntMicroCode
  | LoadFloatMicroCode
  | LoadVarMicroCode
  | FuncApplyMicroCode
  | PopOSMicroCode
  | DuplicateTopOSMicroCode
  | EnterScopeMicroCode
  | ExitScopeMicroCode
  | DeclarationMicroCode
  | AssignmentMicroCode
  | BinaryOperationMicroCode
  | BinaryOperationAutoPromotionMicroCode
  | ExitFuncMicroCode
  | DereferenceMicroCode
  | ReturnMicroCode
  | UnaryOperationMicroCode
  | ConditionalOperationMicroCode
  | SizeOfOperationMicroCode
  | DeclarationEvaluateTypeModifierIterativeMicroCode
  | DeclarationAllocateMemoryMicroCode
  | ArrayAddressComputeMicroCode
  | ConditionalStatementMicrocode
  | WhileLoopMicrocode
  | ForLoopMicrocode
  | BreakMicrocode
  | BreakMarker
  | ContinueMicrocode
  | ContinueMarker
  | SwitchBodyMicrocode

interface ContinueMarker extends MicroCodeBase {
  tag: 'continue_marker'
}

interface ContinueMicrocode extends MicroCodeBase {
  tag: 'continue_op'
}

interface BreakMarker extends MicroCodeBase {
  tag: 'break_marker'
}

interface BreakMicrocode extends MicroCodeBase {
  tag: 'break_op'
}

interface ForLoopMicrocode extends MicroCodeBase {
  tag: 'for_op'
  statement: CASTStatement
  testExpression?: CASTExpression
  updateExpression?: CASTExpression
}

interface WhileLoopMicrocode extends MicroCodeBase {
  tag: 'while_op'
  condition: CASTExpression
  statement: CASTStatement
}

interface ConditionalStatementMicrocode extends MicroCodeBase {
  tag: 'conditional_statement_op'
  ifTrue: CASTStatement
  ifFalse?: CASTStatement
}

interface SwitchBodyMicrocode extends MicroCodeBase {
  tag: 'switch_body_op'
  subtype: string
  statements: Array<CASTStatement>
}

interface ERecordBase {
  subtype: string
}

interface ERecordFunction extends ERecordBase {
  subtype: 'func'
  funcIndex: number
}

interface ERecordVariable extends ERecordBase {
  subtype: 'variable'
  address: number
  variableType: ProgramType
}

export type ERecord = ERecordFunction | ERecordVariable

export interface EScope {
  parent?: EScope
  record: Record<string, ERecord>
}

export type Env = Array<EScope>

interface MicroCodeFunctionBase {
  subtype: string
}

interface MicroCodeBuiltinFunction extends MicroCodeFunctionBase {
  subtype: 'builtin_func'
  func: Function
  returnProgType: ProgramType
  arity: number
}

interface MicroCodeCASTFunctionDefinition extends MicroCodeFunctionBase {
  subtype: 'func'
  arity: number
  returnProgType: ProgramType

  identifier: CASTIdentifier
  parameters: Array<CASTFunctionParameter>
  body: CASTCompoundStatement
}

export type MicroCodeFunctionDefiniton = MicroCodeBuiltinFunction | MicroCodeCASTFunctionDefinition

export type BinaryWithType = {
  binary: number
  type: ProgramType
}

type WithOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
export type BinaryWithLoseType = WithOptional<BinaryWithType, 'type'>

export interface BuiltinFunctionDefinition {
  func: Function
  returnProgType: ProgramType
  arity: number
}
