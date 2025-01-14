// @ts-expect-error
import semanticGetConfig from 'semantic-release/lib/get-config.js'
import { Options } from 'semantic-release'

import { BaseMultiContext } from '../typings/index.js'

/**
 * Get the release configuration options for a given directory.
 * Unfortunately we've had to copy this over from semantic-release, creating unnecessary duplication.
 *
 * @param context Object containing cwd, env, and logger properties that are passed to getConfig()
 * @param options Options object for the config.
 * @returns Returns what semantic-release's get config returns (object with options and plugins objects).
 *
 * @internal
 */
export default async function getConfigSemantic(
  { cwd, env, stdout, stderr, logger }: BaseMultiContext,
  options: Options,
) {
  try {
    // Return semantic-release's getConfig script.
    return semanticGetConfig({ cwd, env, stdout, stderr, logger }, options)
  } catch (error: any) {
    // Log error and rethrow it.
    // istanbul ignore next (not important)
    logger.error(`Error in semantic-release getConfig(): %0`, error)
    // istanbul ignore next (not important)
    throw error
  }
}
