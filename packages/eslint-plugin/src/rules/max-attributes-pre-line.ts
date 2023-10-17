/*
 * @Description:
 * @Author: wsy
 * @Date: 2023-10-13 16:59:29
 * @LastEditTime: 2023-10-16 19:50:31
 * @LastEditors: wsy
 */
import type { ParserServices, Range, Token } from 'eslint-plugin-vue'
import { createEslintRule } from '../utils'

export const RULE_NAME = 'max-attributes-pre-line'
export type MessageIds = 'shouldBeOnNewLine'
export type Options = [
  {
    singleline: number | {
      max: number
    }
    multiline: number | {
      max: number
    }
  },
]

function parseOptions(options: Options[0] | undefined) {
  const defaults = {
    singleline: 3,
    multiline: 3,
  }

  if (options) {
    if (typeof options.singleline === 'number') {
      defaults.singleline = options.singleline
    }
    else if (
      typeof options.singleline === 'object'
      && typeof options.singleline.max === 'number'
    ) {
      defaults.singleline = options.singleline.max
    }

    if (options.multiline) {
      if (typeof options.multiline === 'number') {
        defaults.multiline = options.multiline
      }
      else if (
        typeof options.multiline === 'object'
        && typeof options.multiline.max === 'number'
      ) {
        defaults.multiline = options.multiline.max
      }
    }
  }

  return defaults
}

function isSingleLine(node): boolean {
  return node.loc.start.line === node.loc.end.line
}

export default createEslintRule<Options, MessageIds>({
  name: RULE_NAME,
  meta: {
    type: 'problem',
    docs: {
      description: 'enforce the maximum number of attributes per line',
      recommended: 'stylistic',
    },
    fixable: 'code',
    schema: [
      {
        type: 'object',
        properties: {
          singleline: {
            anyOf: [
              {
                type: 'number',
                minimum: 1,
              },
              {
                type: 'object',
                properties: {
                  max: {
                    type: 'number',
                    minimum: 1,
                  },
                },
                additionalProperties: false,
              },
            ],
          },
          multiline: {
            anyOf: [
              {
                type: 'number',
                minimum: 1,
              },
              {
                type: 'object',
                properties: {
                  max: {
                    type: 'number',
                    minimum: 1,
                  },
                },
                additionalProperties: false,
              },
            ],
          },
        },
        additionalProperties: false,
      },
    ],
    messages: {
      shouldBeOnNewLine: '\'{{name}}\' should be on a new line.',
    },
  },
  defaultOptions: [{
    singleline: {
      max: 3,
    },
    multiline: {
      max: 3,
    },
  }],
  create(context) {
    const sourceCode = context.getSourceCode()
    const configuration = parseOptions(context.options[0])
    const multilineMaximum = configuration.multiline
    const singlelinemMaximum = configuration.singleline
    const filename = context.getFilename()
    const template
      = (context.parserServices as ParserServices).getTemplateBodyTokenStore
      && (context.parserServices as ParserServices).getTemplateBodyTokenStore()

    function showErrors(attributes) {
      for (const [i, prop] of attributes.entries()) {
        context.report({
          node: prop,
          loc: prop.loc,
          messageId: 'shouldBeOnNewLine',
          data: { name: sourceCode.getText(prop.key) },
          fix(fixer) {
            const prevToken: Token = (
              template.getTokenBefore(prop, {
                filter: token => token.type !== 'HTMLWhitespace',
              })
            )
            const range: Range = [prevToken.range[1], prop.range[0]]

            return fixer.replaceTextRange(range, '\n')
          },
        })
      }
    }
    return (context.parserServices as ParserServices).defineTemplateBodyVisitor({
      VStartTag(node) {
        const numberOfAttributes = node.attributes.length
        if (!numberOfAttributes) {
          return
        }
        if (isSingleLine(node) && numberOfAttributes > singlelinemMaximum) {
          showErrors(node.attributes)
        }

        if (!isSingleLine(node)) {
          console.log('多行')
        }
      },
    })
  },
})
