/// <reference types="histoire" />

import { fileURLToPath } from 'node:url'
import { HstVue } from '@histoire/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import vueDevTools from 'vite-plugin-vue-devtools'

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

  histoire: {
    plugins: [HstVue()],
    setupFile: 'histoire.setup.ts',
    tree: {
      groups: [
        { id: 'top', title: '' },
        { id: 'components', title: 'Components' },
        { title: 'Other', include: () => true },
      ],
    },
  },
})
