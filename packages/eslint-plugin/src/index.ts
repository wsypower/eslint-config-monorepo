/*
 * @Description: eslint 插件
 * @Author: wsy
 * @Date: 2023-09-28 14:22:01
 * @LastEditTime: 2023-10-10 18:49:21
 * @LastEditors: wsy
 */
import apiPrefixByRequest from './rules/api-prefix-by-request'
import { createEslintPlugin } from './utils'

// 调整配置文件
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
            'wsyc/api-prefix-by-request': 'error',
          },
        },
      ],
    },
  },
})
