import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { playwright } from '@vitest/browser-playwright'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import vueDevTools from 'vite-plugin-vue-devtools'

const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url))

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    vueDevTools(),
    dts({
      // Génère un fichier .d.ts global à la racine du dossier dist
      insertTypesEntry: true,
      // On s'assure que le plugin utilise bien ton tsconfig de l'app
      tsconfigPath: './tsconfig.app.json',
      // Optionnel : Nettoie les types avant de re-générer
      cleanVueFileName: true,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    lib: {
      name: 'PoppyUI',
      fileName: (format, entryName) => `${entryName}.${format === 'es' ? 'es.js' : 'umd.js'}`,
      entry: {
        public: fileURLToPath(new URL('./src/public.ts', import.meta.url)),
        tailwind: fileURLToPath(new URL('./src/plugin-tailwind.ts', import.meta.url)),
        'components/actions/public': fileURLToPath(new URL('./src/components/actions/public.ts', import.meta.url)),
        'composables/public': fileURLToPath(new URL('./src/composables/public.ts', import.meta.url)),
        'types/public': fileURLToPath(new URL('./src/types/public.ts', import.meta.url)),
      },
    },
    rollupOptions: {
      external: [
        'vue',
        'tailwindcss',
        'tailwindcss/plugin', // Important pour ton plugin-tailwind
        'daisyui',
        'node:path',
        'node:url',
      ],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  test: {
    projects: [
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          storybookTest({
            configDir: path.join(dirname, '.storybook'),
          }),
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [
              {
                browser: 'chromium',
              },
            ],
          },
        },
      },
    ],
  },
})
