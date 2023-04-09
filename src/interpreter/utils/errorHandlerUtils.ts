import {
  CannotDivideByZeroBaseError,
  CannotPerformOperationBaseError,
  InternalUnreachableBaseError,
  NonArrayBaseError,
  NonPointerBaseError,
  ParseBaseError,
  RTMInvalidMemoryAccessBaseError,
  RTMMemoryNotAllocatedBaseError,
  UnknownTypeBaseError,
  VoidHasNoValueBaseError,
} from '../../errors/baseErrors'
import {
  CannotDereferenceTypeError,
  CannotDivideByZero,
  CannotPerformOperation,
  InvalidMemoryAccess,
  MemoryFreeNotAllocatedError,
  UnknownError,
  UnknownType,
  VoidHasNoValue,
} from '../../errors/errors'
import {
  InternalUnreachableRuntimeError,
  ParseRuntimeError,
  RuntimeSourceError,
} from '../../errors/runtimeSourceError'
import { CASTNode } from '../../typings/programAST'

const rtmErrorHandler = (e: any, node: CASTNode) => {
  if (e instanceof RTMInvalidMemoryAccessBaseError) {
    throw new InvalidMemoryAccess(node, e.index, e)
  }
  if (e instanceof RTMMemoryNotAllocatedBaseError) {
    throw new MemoryFreeNotAllocatedError(node, e.address, e)
  }
}

const arithmeticUtilsErrorHandler = (e: any, node: CASTNode) => {
  if (e instanceof UnknownTypeBaseError) {
    throw new UnknownType(node, e.type, e)
  }
  if (e instanceof CannotPerformOperationBaseError) {
    throw new CannotPerformOperation(node, e.operation, e.types, e)
  }
  if (e instanceof CannotDivideByZeroBaseError) {
    throw new CannotDivideByZero(node, e)
  }
}

const staticSizeErrorHandler = (e: any, node: CASTNode) => {}

const typeConversionErrorHandler = (e: any, node: CASTNode) => {}

const voidHasNoValueErrorHandler = (e: any, node: CASTNode) => {
  if (e instanceof VoidHasNoValueBaseError) {
    throw new VoidHasNoValue(node, e)
  }
}

export const errorHandler = (e: any, node: CASTNode) => {
  if (e instanceof RuntimeSourceError) {
    throw e
  }

  rtmErrorHandler(e, node)
  arithmeticUtilsErrorHandler(e, node)
  staticSizeErrorHandler(e, node)
  typeConversionErrorHandler(e, node)
  voidHasNoValueErrorHandler(e, node)

  if (e instanceof ParseBaseError) {
    throw new ParseRuntimeError(node, e)
  }

  if (e instanceof NonPointerBaseError) {
    throw new CannotDereferenceTypeError(node, e)
  }

  if (e instanceof NonArrayBaseError) {
    throw new CannotDereferenceTypeError(node, e)
  }

  if (e instanceof InternalUnreachableBaseError) {
    throw new InternalUnreachableRuntimeError(node, e)
  }

  throw new UnknownError(node, e)
}
