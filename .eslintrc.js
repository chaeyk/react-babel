module.exports = {
  root: true,
  extends: ['plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      // no-floating-promises 사용 시 parserOptions 필수라고 함
      parserOptions: {
        project: ['./tsconfig.json', 'electron/tsconfig.json'], // Specify it only for TypeScript files
      },
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        // add rules
        'react/react-in-jsx-scope': 'off',
        'react-native/no-inline-styles': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        'no-dupe-class-members': 'off',
        '@typescript-eslint/no-dupe-class-members': ['error'],
        'require-await': 'error',
        '@typescript-eslint/no-floating-promises': 'error',
        'no-void': ['error', { allowAsStatement: true }],
        // window 환경에서 개행 관련 에러처리가 되어 추가합니다.
        'prettier/prettier': [
          'error',
          {
            endOfLine: 'auto',
          },
        ],
      },
    },
  ],
};
