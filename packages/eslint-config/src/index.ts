/*
 * @Description:
 * @Author: wsy
 * @Date: 2023-09-22 16:32:02
 * @LastEditTime: 2023-10-10 18:42:20
 * @LastEditors: wsy
 */
import { defineConfig } from 'eslint-define-config'

export default defineConfig({
  extends: [
    '@antfu',
    '@wsyc/vue',
    "plugin:wsyc/recommended"
  ],
})
