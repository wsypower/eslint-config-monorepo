/*
 * @Description:
 * @Author: wsy
 * @Date: 2023-09-28 15:06:47
 * @LastEditTime: 2023-10-17 18:51:27
 * @LastEditors: wsy
 */
import { createEslintRule } from '../utils'

export const RULE_NAME = 'api-prefix-by-request'
export type MessageIds = 'missingPrefix' | 'nameIsUppercase'
export type Options = []

export default createEslintRule<Options, MessageIds>({
  name: RULE_NAME,
  meta: {
    type: 'problem',
    docs: {
      description: 'Api method should start with "API_"',
      recommended: 'stylistic',
    },
    fixable: 'code',
    schema: [],
    messages: {
      missingPrefix: 'Property {{name}} should start with "API_"',
      nameIsUppercase: 'Property {{name}} should be Uppercase',
    },
  },
  defaultOptions: [],
  create(context) {
    function isDefineRequest(node) {
      if (node.type !== 'CallExpression') {
        return false
      }
      const callee = node.callee
      return (callee.type === 'Identifier' && callee.name === 'defineRequest')
    }

    function isType(node, type) {
      return node.type === type
    }
    return {
      ObjectExpression(node) {
        if (
          isType(node.parent, 'ArrowFunctionExpression')
          && isType(node.parent.parent, 'CallExpression')
          && isDefineRequest(node.parent.parent)
        ) {
          node.properties.forEach((property) => {
            if (property.type !== 'Property' || property.key.type !== 'Identifier') {
              return
            }
            const name = property.key.name
            if (!name.startsWith('API_')) {
              context.report({
                node: property.key,
                data: { name },
                messageId: 'missingPrefix',
                fix(fixer) {
                  return fixer.replaceText(property.key, `API_${name}`)
                },
              })
            }
            if (name.toUpperCase() !== name) {
              context.report({
                node: property.key,
                data: { name },
                messageId: 'nameIsUppercase',
                fix(fixer) {
                  return fixer.replaceText(property.key, name.toUpperCase())
                },
              })
            }
          })
        }
      },
    }
  },
})
