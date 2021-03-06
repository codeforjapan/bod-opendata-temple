module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'standard',
    'eslint:recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'prettier/react',
    'plugin:react/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'no-use-before-define': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
