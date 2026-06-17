import js from '@eslint/js';
import boundaries from 'eslint-plugin-boundaries';
import importX from 'eslint-plugin-import-x';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

import prettier from 'eslint-config-prettier';

const sourceFiles = ['src/**/*.{ts,tsx}'];

export default tseslint.config(
  {
    ignores: ['dist', 'coverage', 'node_modules'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked.map((config) => ({
    ...config,
    files: sourceFiles,
  })),
  ...tseslint.configs.stylisticTypeChecked.map((config) => ({
    ...config,
    files: sourceFiles,
  })),
  {
    files: sourceFiles,
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.browser,
        ...globals.es2024,
      },
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      boundaries,
      'import-x': importX,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    settings: {
      'import-x/resolver': {
        typescript: {
          project: './tsconfig.app.json',
        },
      },
      'boundaries/elements': [
        { type: 'app', pattern: 'app/**' },
        { type: 'pages', pattern: 'pages/*/**', capture: ['slice'] },
        { type: 'widgets', pattern: 'widgets/*/**', capture: ['slice'] },
        { type: 'features', pattern: 'features/*/**', capture: ['slice'] },
        { type: 'entities', pattern: 'entities/*/**', capture: ['slice'] },
        { type: 'shared', pattern: 'shared/**' },
      ],
    },
    rules: {
      ...reactHooks.configs.flat.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'import-x/no-unresolved': 'error',
      'boundaries/dependencies': [
        'error',
        {
          default: 'disallow',
          rules: [
            {
              from: { type: 'app' },
              allow: {
                to: {
                  type: ['pages', 'widgets', 'features', 'entities', 'shared'],
                },
              },
            },
            {
              from: { type: 'pages' },
              allow: {
                to: {
                  type: ['widgets', 'features', 'entities', 'shared'],
                },
              },
            },
            {
              from: { type: 'widgets' },
              allow: {
                to: { type: ['features', 'entities', 'shared'] },
              },
            },
            {
              from: { type: 'features' },
              allow: { to: { type: ['entities', 'shared'] } },
            },
            {
              from: { type: 'entities' },
              allow: { to: { type: 'shared' } },
            },
            {
              from: { type: 'shared' },
              allow: { to: { type: 'shared' } },
            },
          ],
        },
      ],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports' },
      ],
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    },
  },
  {
    files: ['**/*.{js,mjs,ts}'],
    ignores: sourceFiles,
    languageOptions: {
      globals: globals.node,
    },
  },
  prettier,
);
