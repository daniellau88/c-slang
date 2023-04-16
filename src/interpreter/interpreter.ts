/* tslint:disable:max-classes-per-file */
import * as es from 'estree'

import { RuntimeSourceError } from '../errors/runtimeSourceError'
import { Context, Environment, Value } from '../types'
import { CASTNode, CASTProgram } from '../typings/programAST'
import { execute } from './cInterpreter'

class Thunk {
  public value: Value
  public isMemoized: boolean
  constructor(public exp: es.Node, public env: Environment) {
    this.isMemoized = false
    this.value = null
  }
}

const handleRuntimeError = (context: Context, error: RuntimeSourceError): never => {
  context.errors.push(error)
  context.runtime.environments = context.runtime.environments.slice(
    -context.numberOfOuterEnvironments,
  )
  throw error
}

function* visit(context: Context, node: CASTNode) {
  context.runtime.nodes.unshift(node)
  yield context
}

function* leave(context: Context) {
  context.programState.setRuntimeIsRunning(false)
  context.runtime.nodes.shift()
  yield context
}

const popEnvironment = (context: Context) => context.runtime.environments.shift()
export const pushEnvironment = (context: Context, environment: Environment) => {
  context.runtime.environments.unshift(environment)
  context.runtime.environmentTree.insert(environment)
}

// tslint:enable:object-literal-shorthand

export function* evaluate(node: CASTNode, context: Context) {
  try {
    const executeGenerator = execute(context.programState)
    let programStep = executeGenerator.next()
    while (!programStep.done) {
      yield programStep.value
      programStep = executeGenerator.next()
    }
    yield* leave(context)
  } catch (e) {
    handleRuntimeError(context, e)
  }
}
