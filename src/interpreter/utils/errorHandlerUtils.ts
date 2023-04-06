import {
  InternalUnreachableBaseError,
  NonArrayBaseError,
  NonPointerBaseError,
  ParseBaseError,
  RTMInvalidFreeBaseError,
  RTMInvalidMemoryAccessBaseError,
} from '../../errors/baseErrors'
import {
  CannotDereferenceTypeError,
  InvalidMemoryAccess,
  MemoryFreeError,
  UnknownError,
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

export const errorHandler = (e: any, node: CASTNode) => {
  if (e instanceof RuntimeSourceError) {
    throw e
  }

  rtmErrorHandler(e, node)

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
