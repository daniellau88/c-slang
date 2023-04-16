import { SourceMapConsumer } from 'source-map'

import createContext from './createContext'
import { InterruptedError } from './errors/errors'
import {
  Context,
  Error as ResultError,
  ExecutionMethod,
  Finished,
  ModuleContext,
  Result,
  SourceError,
  Variant,
} from './types'
export { SourceDocumentation } from './editors/ace/docTooltip'

import { CannotFindModuleError } from './errors/localImportErrors'
import { validateFilePath } from './localImports/filePaths'
import { resolvedErrorPromise, sourceFilesRunner } from './runner'

export interface IOptions {
  scheduler: 'preemptive' | 'async'
  steps: number
  stepLimit: number
  executionMethod: ExecutionMethod
  variant: Variant
  originalMaxExecTime: number
  useSubst: boolean
  isPrelude: boolean
  throwInfiniteLoops: boolean
}

// needed to work on browsers
if (typeof window !== 'undefined') {
  // @ts-ignore
  SourceMapConsumer.initialize({
    'lib/mappings.wasm': 'https://unpkg.com/source-map@0.7.3/lib/mappings.wasm',
  })
}

export function parseError(errors: SourceError[]): string {
  const errorMessagesArr = errors.map(error => {
    const line = error.location ? error.location.start.line : '<unknown>'
    const explanation = error.explain()
    return line === '<unknown>' || line < 1 ? explanation : `Line ${line}: ${explanation}`
  })
  return errorMessagesArr.join('\n')
}

export async function runInContext(
  code: string,
  context: Context,
  options: Partial<IOptions> = {},
): Promise<Result> {
  const defaultFilePath = '/default.c'
  const files: Partial<Record<string, string>> = {}
  files[defaultFilePath] = code
  return runFilesInContext(files, defaultFilePath, context, options)
}

export async function runFilesInContext(
  files: Partial<Record<string, string>>,
  entrypointFilePath: string,
  context: Context,
  options: Partial<IOptions> = {},
): Promise<Result> {
  for (const filePath in files) {
    const filePathError = validateFilePath(filePath)
    if (filePathError !== null) {
      context.errors.push(filePathError)
      return resolvedErrorPromise
    }
  }

  const code = files[entrypointFilePath]
  if (code === undefined) {
    context.errors.push(new CannotFindModuleError(entrypointFilePath))
    return resolvedErrorPromise
  }
  return sourceFilesRunner(files, entrypointFilePath, context, options)
}

export function resume(result: Result): Finished | ResultError | Promise<Result> {
  if (result.status === 'finished' || result.status === 'error') {
    return result
  } else {
    result.context.programState.setRuntimeBreak(false)
    return result.scheduler.run(result.it, result.context)
  }
}

export function interrupt(context: Context) {
  const globalEnvironment = context.runtime.environments[context.runtime.environments.length - 1]
  context.runtime.environments = [globalEnvironment]
  context.programState.setRuntimeIsRunning(false)
  context.errors.push(new InterruptedError(context.runtime.nodes[0]))
}

export { createContext, Context, ModuleContext, Result }
