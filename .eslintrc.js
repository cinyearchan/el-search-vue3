module.exports = {
  root: true,
  env: {
    node: true
  },
  plugins: [
    'vuetify'
  ],
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parsetOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    indent: 'off',
    'import/no-webpack-loader-syntax': 'off',
    'vue/valid-v-slot': 'off',
    'no-proto': 'off'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
