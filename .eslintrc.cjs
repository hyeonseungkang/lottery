module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  root: true,
  extends: ['eslint:recommended', 'plugin:import/recommended'],
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3',
    },
  ],
  parserOptions: { sourceType: 'module', project: 'tsconfig.json', tsconfigRootDir: __dirname },
  plugins: ['import', 'svelte3'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
};
