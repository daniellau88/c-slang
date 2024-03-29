import {
  CASTBinaryOperator,
  CASTCompoundStatement,
  CASTDeclaration,
  CASTExpression,
  CASTFunctionDefinition,
  CASTFunctionParameter,
  CASTIdentifier,
  CASTNode,
  CASTStatement,
  CASTTypeModifiers,
  CASTUnaryOperator,
} from '../typings/programAST'
import { ProgramState } from './programState'

interface MicroCodeBase {
  tag: string
  node: CASTNode
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

interface LoadCharMicroCode extends MicroCodeBase {
  tag: 'load_char'
  value: string
}

interface LoadStringMicroCode extends MicroCodeBase {
  tag: 'load_string'
  value: string
}

interface LoadVarMicroCode extends MicroCodeBase {
  tag: 'load_var'
  identifier: CASTIdentifier
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

interface AssignmentListMicroCode extends MicroCodeBase {
  tag: 'assgn_list'
}

interface AllocateStringMicroCode extends MicroCodeBase {
  tag: 'allocate_str'
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
  funcNode: MicroCodeFunctionDefiniton
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
  typeModifiers: CASTTypeModifiers
}

// Evaluates expressions in array
interface DeclarationEvaluateTypeModifierIterativeMicroCode extends MicroCodeBase {
  tag: 'decl_eval_type_modifier_i'
  oldTypeModifiers: CASTTypeModifiers
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

interface CastValueMicroCode extends MicroCodeBase {
  tag: 'cast_value'
  castType: ProgramType
}

export type MicroCode =
  | LoadFuncMicroCode
  | LoadIntMicroCode
  | LoadFloatMicroCode
  | LoadCharMicroCode
  | LoadStringMicroCode
  | LoadVarMicroCode
  | FuncApplyMicroCode
  | PopOSMicroCode
  | DuplicateTopOSMicroCode
  | EnterScopeMicroCode
  | ExitScopeMicroCode
  | DeclarationMicroCode
  | AssignmentMicroCode
  | AssignmentListMicroCode
  | AllocateStringMicroCode
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
  | MallocMicrocode
  | FreeMicrocode
  | CastValueMicroCode

interface FreeMicrocode extends MicroCodeBase {
  tag: 'free_op'
  address: BinaryWithType
}

interface MallocMicrocode extends MicroCodeBase {
  tag: 'malloc_op'
  size: BinaryWithType
}

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

export interface VariableScope {
  parent?: VariableScope
  record: Record<string, ERecord>
}

export interface EScope {
  name: string
  varScope: VariableScope
}

export type Env = Array<EScope>

type ProgramBaseType = 'int' | 'float' | 'char' | 'void'

interface ProgramTypeModifierBaseType {
  subtype: 'BaseType'
  baseType: ProgramBaseType
}

export interface ProgramTypeModifierArray {
  subtype: 'Array'
  size: number
}

interface ProgramTypeModifierPointer {
  subtype: 'Pointer'
  pointerDepth: number
}

interface ProgramTypeModifierParameters {
  subtype: 'Parameters'
  parameterTypeList: Array<CASTFunctionParameter>
}

export type ProgramTypeModifier =
  | ProgramTypeModifierBaseType
  | ProgramTypeModifierArray
  | ProgramTypeModifierPointer
  | ProgramTypeModifierParameters

export type ProgramType = Array<ProgramTypeModifier>

interface MicroCodeFunctionBase {
  subtype: string
}

export interface MicroCodeBuiltinFunction extends MicroCodeFunctionBase {
  subtype: 'builtin_func'
  func: (state: ProgramState, args: Array<BinaryWithType>, node: CASTNode) => void
  returnProgType: ProgramType
  arity: number
  name: string
}

export interface MicroCodeCASTFunctionDefinition extends MicroCodeFunctionBase {
  subtype: 'func'
  arity: number
  returnProgType: ProgramType // function declaration cannot have variably modified type

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
export type BinaryWithOptionalType = WithOptional<BinaryWithType, 'type'>

export interface BuiltinFunctionDefinition {
  func: (state: ProgramState, args: Array<BinaryWithType>, node: CASTNode) => void
  returnProgType: ProgramType
  arity: number
}

export type AgendaNode = CASTNode | MicroCode

export type DeepReadonly<T> = T extends (infer R)[]
  ? DeepReadonlyArray<R>
  : T extends Function
  ? T
  : T extends object
  ? DeepReadonlyObject<T>
  : T

type DeepReadonlyArray<T> = ReadonlyArray<DeepReadonly<T>>

type DeepReadonlyObject<T> = {
  readonly [P in keyof T]: DeepReadonly<T[P]>
}
