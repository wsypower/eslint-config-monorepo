/*
 * @Description:
 * @Author: wsy
 * @Date: 2023-09-28 15:06:47
 * @LastEditTime: 2023-09-28 15:38:57
 * @LastEditors: wsy
 */
import { createEslintRule } from '../utils'

export const RULE_NAME = 'api-prefix-by-request'
export type MessageIds = 'missingPrefix'
export type Options = []

export default createEslintRule<Options, MessageIds>({
  name: RULE_NAME,
  meta: {
    type: 'problem',
    docs: {
      description: 'Newline after if',
      recommended: 'stylistic',
    },
    fixable: 'code',
    schema: [],
    messages: {
      missingPrefix: 'api prefix by request',
    },
  },
  defaultOptions: [],
  create(context) {
    return {
      Identifier() {
        context.report({
          messageId: 'missingPrefix',
          node: context.getSourceCode().ast,
        })
      },
    }
  },
})
