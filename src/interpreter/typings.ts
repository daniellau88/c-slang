import {
  CASTBinaryOperator,
  CASTDeclaration,
  CASTFunctionDefinition,
  CASTType,
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

interface FuncCallMicroCode extends MicroCodeBase {
  tag: 'func_call'
  funcIndex: number
  arity: number
  isBuiltin: boolean
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

interface BuiltinFunctionCallMicroCode extends MicroCodeBase {
  tag: 'builtin_func_call'
  builtinId: string
}

export type MicroCode =
  | LoadFuncMicroCode
  | LoadIntMicroCode
  | LoadFloatMicroCode
  | FuncCallMicroCode
  | PopOSMicroCode
  | PopRTSMicroCode
  | PopEMicroCode
  | EnterScopeMicroCode
  | ExitScopeMicroCode
  | DeclarationMicroCode
  | AssignmentMicroCode
  | BinaryOperationMicroCode
  | BuiltinFunctionCallMicroCode
  | BinaryOperationAutoPromotionMicroCode

export interface ERecord {
  address: number
  type: CASTType
  assigned: boolean
}

export interface EScope {
  parent?: EScope
  record: Record<string, ERecord>
}

export type Env = Array<EScope>
