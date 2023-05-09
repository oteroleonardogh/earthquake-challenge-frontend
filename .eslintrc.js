module.exports = {
  extends: 'next/core-web-vitals',
  settings: {
    react: {
      version: 'detect'
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  globals: {
    process: true
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        ecmaVersion: 2020,
        sourceType: 'module'
      },
      plugins: [
        'react',
        '@typescript-eslint'
      ],
      // ...
      extends: [
        // ...
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        // ...
      ],
      // ...
      rules: {
        // ...
      },
      // ...
      settings: {
        'import/resolver': {
          node: {
            extensions: ['.ts', '.tsx', '.js', '.jsx']
          }
        },
        react: {
          version: 'detect'
        }
      }
    }
  ]
}
