module.exports = {
  extends: ['eslint-config-encode/typescript/node', 'prettier'],
  rules: {
    '@typescript-eslint/no-require-imports': 0,
    'no-console': 0,
  },
  files: [
    '**/*.js',
    '**/*.jsx',
    '**/*.ts',
    '**/*.tsx',
    '**/*.vue',
  ],
};
