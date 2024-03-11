import { postcss } from '@stencil-community/postcss';
import { Build, Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import tailwindcss from 'tailwindcss';

const isDev = process.argv.includes('--dev')


const tailwindPlugin = [isDev ? postcss({
  plugins: [tailwindcss()]
}) : []];

export const config: Config = {
  namespace: 'poppy-ui',
  globalStyle: './src/poppy-ui.scss',
  globalScript: './src/global/poppy-global.ts',
  plugins: [
    sass(),

    // Only iin dev mode to copy all Daisy-ui element
    // Should be uninstalled after to reduce node_module size and clear unused css var
    ...tailwindPlugin
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    browserHeadless: "new",
  },
};
