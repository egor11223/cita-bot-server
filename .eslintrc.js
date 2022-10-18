module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    semi: ['error', 'always'],
    quotes: [2, 'single'],
    indent: 0,
    'simple-import-sort/imports': 'error',
    'no-control-regex': 0,
    'no-prototype-builtins': 0,
    'no-async-promise-executor': 0,
    'no-case-declarations': 0,
    'no-useless-escape': 0,
    'no-console': 1,
    'no-useless-return': 2,
    'object-curly-spacing': ['error', 'always'],
    'prettier/prettier': ['error', { singleQuote: true }],
  },
  plugins: ['simple-import-sort'],
};
