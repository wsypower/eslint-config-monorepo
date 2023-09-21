import { defineConfig } from 'eslint-define-config'

export default defineConfig({
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  rules: {
    // --------------------------------------------
    // Priority B: Strongly Recommended
    // --------------------------------------------
    // TODO: 超过3行需要换行 (有点味道不对)
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 1,
        },
        multiline: {
          max: 1,
        },
      },
    ],
    // TODO: 覆盖默认的vue/html-closing-bracket-newline规则
    'vue/require-default-prop': [
      'error',
    ],

    // TODO: 定义的props 需要是 camelCase
    'vue/prop-name-casing': [
      'error',
      'camelCase',
    ],

    // TODO:  覆盖默认的vue/require-default-prop规则
    'vue/require-prop-types': [
      'error',
    ],

    // TODO: emits 必须定义
    'vue/require-explicit-emits': [
      'error',
      {
        allowProps: false,
      },
    ],
    // TODO: 启动时间的连字符控制
    'vue/v-on-event-hyphenation': [
      'error',
      'always',
      {
        autofix: true,
      },
    ],
    // TODO: 需要使用vue3的语法
    'vue/component-api-style': [
      'error',
      [
        'script-setup',
        'composition',
      ],
    ],
    // TODO: 限制代码行数
    'vue/max-lines-per-block': [
      'error',
      {
        template: 100,
        script: 100,
        style: 200,
        skipBlankLines: true,
      },
    ],
    // TODO 代码要换行
    'vue/new-line-between-multi-line-property': ['error'],

    // TODO: 继承attr问题
    'vue/no-duplicate-attr-inheritance': ['warn'],
    // TODO: 没有定义的组件直接报错
    // FIXME: vue/no-undef-components
    'vue/no-undef-components': ['error'],
    // TODO: 没有定义的属性直接报错
    'vue/no-undef-properties': ['error'],
    // TODO: 没有使用的属性直接报错
    'vue/no-unused-properties': ['warn'],
    // TODO: 不能同时使用v-if和v-for
    'vue/no-use-v-else-with-v-for': ['error'],
    // TODO：禁止无意义的 mustache
    'vue/no-useless-mustaches': ['warn', {
      ignoreIncludesComment: false,
      ignoreStringEscape: false,
    }],
    // TODO 强制使用defineOptions
    'vue/prefer-define-options': ['error'],
    // TODO: Boolean 在多个属性中的位置，会有不同的表现
    'vue/prefer-prop-type-boolean-first': ['error'],
    // TODO: 要求模板中的静态类名位于单独的类属性中
    'vue/prefer-separate-static-class': ['error'],
    // TODO 需要特定的宏变量名称
    'vue/require-macro-variable-name': ['error', {
      defineProps: 'props',
      defineEmits: 'emit',
      defineSlots: 'slots',
      useSlots: 'slots',
      useAttrs: 'attrs',
    }],

    // TODO: 强制向对象 props 添加类型声明
    'vue/require-typed-object-prop': ['error'],
    'vue/eqeqeq': ['error'],
  },
})
