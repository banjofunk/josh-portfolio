module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier', 'react-app'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['html', 'react', 'prettier', 'react-hooks'],
  rules: {
    'react/jsx-filename-extension': 0,
    'react/function-component-definition': [1, { namedComponents: 'arrow-function' }],
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'import/prefer-default-export': 0,
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        singleQuote: true,
        printWidth: 120,
      },
    ],
  },
};
