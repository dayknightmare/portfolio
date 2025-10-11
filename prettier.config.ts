import { type Config } from 'prettier';

const config: Config = {
  plugins: ['prettier-plugin-import-sort'],
  singleQuote: true,
  printWidth: 120,
  overrides: [
    {
      files: ['*.yml', '*.yaml'],
      options: {
        singleQuote: false,
      },
    }
  ]
};

export default config;
