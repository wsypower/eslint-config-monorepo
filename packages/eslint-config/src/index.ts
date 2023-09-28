/*
 * @Description:
 * @Author: wsy
 * @Date: 2023-09-22 16:32:02
 * @LastEditTime: 2023-09-28 16:06:21
 * @LastEditors: wsy
 */
import { defineConfig } from 'eslint-define-config'

export default defineConfig({
  extends: [
    '@antfu',
    '@wsyc/vue',
    'plugin:@wsyc/recommended',
  ],
})
