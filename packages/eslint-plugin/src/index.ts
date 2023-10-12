/*
 * @Description: eslint 插件
 * @Author: wsy
 * @Date: 2023-09-28 14:22:01
 * @LastEditTime: 2023-10-11 16:24:13
 * @LastEditors: wsy
 */
import apiPrefixByRequest from './rules/api-prefix-by-request'
import { createEslintPlugin } from './utils'

export default createEslintPlugin({
  rules: {
    'api-prefix-by-request': apiPrefixByRequest,
  },
  configs: {
    recommended: {
      plugins: ['wsyc'],
      overrides: [
        {
          files: ['*.api.js'],
          rules: {
            'wsyc/api-prefix-by-request': ['error', { allowImplicit: true }],
          },
        },
      ],
    },
  },
})
