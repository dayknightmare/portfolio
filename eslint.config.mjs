import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { globalIgnores } from 'eslint/config'
import stylistic from '@stylistic/eslint-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  globalIgnores(['dist', 'node_modules', 'build', 'coverage', 'public', '.yarn', '.vscode', '.husky', '.next', '**.d.ts']),
  {
    ignores: [
      "**/tools/scripts/**",
      "**/*.d.ts",
      "jest.setup.ts",
      "jest.preset.js",
      "**/next-env.d.ts",
    ],
    files: ['**/*.{ts,tsx}'],
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@stylistic/semi': ['error', 'always'],
      'quotes': ['error', 'single', { avoidEscape: true }],
      'prefer-const': 'error',
      '@stylistic/indent': ['error', 2],
      '@typescript-eslint/no-explicit-any': 'off',
      '@stylistic/no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
    },
  },
];

export default eslintConfig;
