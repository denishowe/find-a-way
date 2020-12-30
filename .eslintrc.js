module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    'jest/globals': true,
  },
  extends: 'airbnb',
  ignorePatterns: ['/dist'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
  },
  plugins: ['jest', 'react'],
  rules: {
    'arrow-parens': 'off',
    'jsx-a11y/label-has-for': 'off',
    'no-plusplus': 'off',
    'object-curly-newline': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
};
