/*
 * @Description:
 * @Author: wsy
 * @Date: 2023-10-19 16:31:31
 * @LastEditTime: 2023-10-19 19:29:56
 * @LastEditors: wsy
 */
import { RuleTester } from '@typescript-eslint/rule-tester'
import maxAttributesPreLine, { RULE_NAME } from '../rules/max-attributes-pre-line'

const ruleTester: RuleTester = new RuleTester({
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
})

const valids = [
  {
    code: `
    <template>
      <div>
        <a
          href="https://vitejs.dev"
          target="_blank"
          foo="1"
          a="2"
          c="3333"
        />
      </div>
    </template>`,
    options: [{ singleline: { max: 3 } }],
  },
  {
    code: `
    <template>
      <div>
        <a href="https://vitejs.dev" target="_blank" foo="1" />
      </div>
    </template>`,
    options: [{ singleline: { max: 3 } }],
  },
  {
    code: `
    <template>
      <div>
        <a
          href="https://vitejs.dev"
          target="_blank"
        />
      </div>
    </template>`,
    options: [{ singleline: { max: 1 } }],
  },
]

const invalids = [
  {
    code: `
      <template>
        <div>
          <a href="https://vitejs.dev" target="_blank" />
        </div>
      </template>`,
    options: [{ singleline: { max: 1 } }],
    output: `
      <template>
        <div>
          <a
href="https://vitejs.dev"
target="_blank" />
        </div>
      </template>`,
    errors: [
      {
        message: '\'href\' should be on a new line.',
      },
      {
        message: '\'target\' should be on a new line.',
      },
    ],
  },
] as any

ruleTester.run(RULE_NAME, maxAttributesPreLine as any, {
  valid: valids,
  invalid: invalids,
})
