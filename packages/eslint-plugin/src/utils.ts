import { ESLintUtils } from '@typescript-eslint/utils'
import type { TSESLint } from '@typescript-eslint/utils'

export const createEslintRule = ESLintUtils.RuleCreator(
  ruleName => ruleName,
)

export function createEslintPlugin(plugin: TSESLint.Linter.Plugin): TSESLint.Linter.Plugin {
  return plugin
}
