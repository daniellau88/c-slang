import {
  CASTBinaryOperator,
  CASTCompoundStatement,
  CASTDeclaration,
  CASTFunctionDefinition,
  CASTFunctionParameter,
  CASTIdentifier,
  CASTType,
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

interface PopRTSMicroCode extends MicroCodeBase {
  tag: 'pop_rts'
}

interface PopEMicroCode extends MicroCodeBase {
  tag: 'pop_e'
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

export type MicroCode =
  | LoadFuncMicroCode
  | LoadIntMicroCode
  | LoadFloatMicroCode
  | LoadVarMicroCode
  | FuncApplyMicroCode
  | PopOSMicroCode
  | PopRTSMicroCode
  | PopEMicroCode
  | EnterScopeMicroCode
  | ExitScopeMicroCode
  | DeclarationMicroCode
  | AssignmentMicroCode
  | BinaryOperationMicroCode
  | BinaryOperationAutoPromotionMicroCode
  | ExitFuncMicroCode
  | DereferenceMicroCode
  | ReturnMicroCode

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
  variableType: CASTType
  assigned: boolean
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

export interface BuiltinFunctionDefinition {
  func: Function
  returnProgType: ProgramType
  arity: number
}
