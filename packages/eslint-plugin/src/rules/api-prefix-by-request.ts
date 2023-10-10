/*
 * @Description:
 * @Author: wsy
 * @Date: 2023-09-28 15:06:47
 * @LastEditTime: 2023-10-10 18:50:55
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
      missingPrefix: '这是测试哦~~~',
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
