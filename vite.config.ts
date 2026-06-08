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
    sourcemap: true,
    lib: {
      name: 'PoppyUI',
      fileName: (format, entryName) => `${entryName}.${format === 'es' ? 'es.js' : 'umd.js'}`,
      entry: {
        public: fileURLToPath(new URL('./src/public.ts', import.meta.url)),
        'components/actions/public': fileURLToPath(new URL('./src/components/actions/public.ts', import.meta.url)),
        'components/app/public': fileURLToPath(new URL('./src/components/app/public.ts', import.meta.url)),
        'components/data/public': fileURLToPath(new URL('./src/components/data/public.ts', import.meta.url)),
        'components/display/public': fileURLToPath(new URL('./src/components/display/public.ts', import.meta.url)),
        'components/feedback/public': fileURLToPath(new URL('./src/components/feedback/public.ts', import.meta.url)),
        'components/layout/public': fileURLToPath(new URL('./src/components/layout/public.ts', import.meta.url)),
        'components/navigation/public': fileURLToPath(
          new URL('./src/components/navigation/public.ts', import.meta.url),
        ),
        'composables/public': fileURLToPath(new URL('./src/composables/public.ts', import.meta.url)),
        'types/public': fileURLToPath(new URL('./src/types/public.ts', import.meta.url)),
      },
    },
    rollupOptions: {
      external: [
        '@lucide/vue',
        '@vueuse/core',
        'vue',
        'vue-i18n',
        'vue-router',
        'tailwindcss',
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
    rolldownOptions: {
      external: [
        '@lucide/vue',
        '@vueuse/core',
        'vue',
        'vue-i18n',
        'vue-router',
        'tailwindcss',
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
