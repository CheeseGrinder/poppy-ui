/// <reference types="vite/client" />
/** biome-ignore-all lint/suspicious/noExplicitAny: Define Vue component */
/** biome-ignore-all lint/complexity/noBannedTypes: Define Vue component */

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
