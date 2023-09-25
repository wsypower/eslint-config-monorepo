import { defineConfig } from 'eslint-define-config'

export default defineConfig({
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      rules: {
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
        'vue/require-default-prop': [
          'error',
        ],
        'vue/prop-name-casing': [
          'error',
          'camelCase',
        ],
        'vue/require-prop-types': [
          'error',
        ],
        'vue/require-explicit-emits': [
          'error',
          {
            allowProps: false,
          },
        ],
        'vue/v-on-event-hyphenation': [
          'error',
          'always',
          {
            autofix: true,
          },
        ],
        'vue/component-api-style': [
          'error',
          [
            'script-setup',
            'composition',
          ],
        ],
        'vue/max-lines-per-block': [
          'error',
          {
            template: 100,
            script: 100,
            style: 200,
            skipBlankLines: true,
          },
        ],
        'vue/new-line-between-multi-line-property': ['error'],
        'vue/no-duplicate-attr-inheritance': ['warn'],
        'vue/no-undef-components': ['error'],
        'vue/no-undef-properties': ['error'],
        'vue/no-unused-properties': ['warn'],
        'vue/no-use-v-else-with-v-for': ['error'],
        'vue/no-useless-mustaches': ['warn', {
          ignoreIncludesComment: false,
          ignoreStringEscape: false,
        }],
        'vue/prefer-define-options': ['error'],
        'vue/prefer-prop-type-boolean-first': ['error'],
        'vue/prefer-separate-static-class': ['error'],
        'vue/require-macro-variable-name': ['error', {
          defineProps: 'props',
          defineEmits: 'emit',
          defineSlots: 'slots',
          useSlots: 'slots',
          useAttrs: 'attrs',
        }],
        'vue/require-typed-object-prop': ['error'],
        'vue/eqeqeq': ['error'],
      },
    },
  ],
})
