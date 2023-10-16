/*
 * @Description: eslint 插件
 * @Author: wsy
 * @Date: 2023-09-28 14:22:01
 * @LastEditTime: 2023-10-16 15:22:47
 * @LastEditors: wsy
 */
import apiPrefixByRequest from './rules/api-prefix-by-request'
import maxAttributesPreLine from './rules/max-attributes-pre-line'
import { createEslintPlugin } from './utils'

export default createEslintPlugin({
  rules: {
    'api-prefix-by-request': apiPrefixByRequest,
    'max-attributes-pre-line': maxAttributesPreLine,
  },
  configs: {
    recommended: {
      plugins: ['wsyc'],
      overrides: [
        {
          files: ['*.api.js'],
          rules: {
            'wsyc/api-prefix-by-request': ['error'],
          },
        },
        {
          files: ['*.vue'],
          parser: 'vue-eslint-parser',
          parserOptions: {
            parser: '@typescript-eslint/parser',
          },
          rules: {
            'wsyc/max-attributes-pre-line': ['error'],
          },
        },
      ],
    },
  },
})
