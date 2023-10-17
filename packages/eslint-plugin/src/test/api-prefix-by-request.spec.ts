/*
 * @Description:
 * @Author: wsy
 * @Date: 2023-10-17 15:29:57
 * @LastEditTime: 2023-10-17 17:24:01
 * @LastEditors: wsy
 */
import { RuleTester } from '@typescript-eslint/rule-tester'
import apiPrefixByRequest, { RULE_NAME } from '../rules/api-prefix-by-request'

const valids = [
  `export default defineRequest(({ request }) => ({
    API_SAFECHECKLIST(params) {
      return request({
        url: 'check/task/pageList',
        method: 'get',
        params,
      })
    }
  }))`,
  `export default test(({ request }) => ({
    SAFECHECKLIST(params) {
      return request({
        url: 'check/task/pageList',
        method: 'get',
        params,
      })
    }
  }))`,
]

const invalids = [
  [
    `export default defineRequest(({ request }) => ({
      SAFECHECKLIST(params) {
        return request({
          url: 'check/task/pageList',
          method: 'get',
          params,
        })
      }
    }))`,
    `export default defineRequest(({ request }) => ({
      API_SAFECHECKLIST(params) {
        return request({
          url: 'check/task/pageList',
          method: 'get',
          params,
        })
      }
    }))`,
  ],
]

const ruleTester: RuleTester = new RuleTester({
  parser: require.resolve('@typescript-eslint/parser'),
})

ruleTester.run(RULE_NAME, apiPrefixByRequest as any, {
  valid: valids,
  invalid: invalids.map(i => ({
    code: i[0],
    output: i[1],
    errors: [
      { messageId: 'missingPrefix' },
    ],
  })),
})
