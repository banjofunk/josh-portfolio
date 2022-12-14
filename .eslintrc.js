module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'react-app'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['html', 'react', 'react-hooks'],
  rules: {
    'react/jsx-filename-extension': 0,
    'react/function-component-definition': [1, { namedComponents: 'arrow-function' }],
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'import/prefer-default-export': 0,
  },
};
