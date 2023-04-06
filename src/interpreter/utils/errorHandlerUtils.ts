import {
  CannotDivideByZeroBaseError,
  CannotPerformOperationBaseError,
  InternalUnreachableBaseError,
  NonArrayBaseError,
  NonPointerBaseError,
  ParseBaseError,
  RTMInvalidFreeBaseError,
  RTMInvalidMemoryAccessBaseError,
  UnknownTypeBaseError,
} from '../../errors/baseErrors'
import {
  CannotDereferenceTypeError,
  CannotDivideByZero,
  CannotPerformOperation,
  InvalidMemoryAccess,
  MemoryFreeError,
  UnknownError,
  UnknownType,
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
  if (e instanceof RTMInvalidFreeBaseError) {
    throw new MemoryFreeError(node, e.address, e)
  }
}

const arithmeticUtilsErrorHandler = (e: any, node: CASTNode) => {
  if (e instanceof UnknownTypeBaseError) {
    throw new UnknownType(node, e.type, e)
  }
  if (e instanceof CannotPerformOperationBaseError) {
    throw new CannotPerformOperation(node, e.types, e)
  }
  if (e instanceof CannotDivideByZeroBaseError) {
    throw new CannotDivideByZero(node, e)
  }
}

export const errorHandler = (e: any, node: CASTNode) => {
  if (e instanceof RuntimeSourceError) {
    throw e
  }

  rtmErrorHandler(e, node)
  arithmeticUtilsErrorHandler(e, node)

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
