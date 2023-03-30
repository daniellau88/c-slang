import es from 'estree'

import { CASTProgram } from '../../typings/programAST'
import { ancestor } from '../../utils/walkers'
import { isFilePath } from '../filePaths'

/**
 * Returns whether a module name refers to a Source module.
 * We define a Source module name to be any string that is not
 * a file path.
 *
 * Source module import:           `import { x } from "module";`
 * Local (relative) module import: `import { x } from "./module";`
 * Local (absolute) module import: `import { x } from "/dir/dir2/module";`
 *
 * @param moduleName The name of the module.
 */
export const isSourceModule = (moduleName: string): boolean => {
  return !isFilePath(moduleName)
}

/**
 * Removes all non-Source module import-related nodes from the AST.
 *
 * All import-related nodes which are not removed in the pre-processing
 * step will be treated by the Source modules loader as a Source module.
 * If a Source module by the same name does not exist, the program
 * evaluation will error out. As such, this function removes all
 * import-related AST nodes which the Source module loader does not
 * support, as well as ImportDeclaration nodes for local module imports.
 *
 * The definition of whether a module is a local module or a Source
 * module depends on the implementation of the `isSourceModule` function.
 *
 * @param program The AST which should be stripped of non-Source module
 *                import-related nodes.
 */
export const removeNonSourceModuleImports = (program: CASTProgram): void => {
  // First pass: remove all import AST nodes which are unused by Source modules.
  ancestor(program, {})

  // Operate on a copy of the Program node's body to prevent the walk from missing ImportDeclaration nodes.
  const programBody = [...program.children]
  program.children = programBody
}
