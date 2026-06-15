import type { App } from 'vue'
import type { PoppyComponentConfig } from './config/config.type'
import { COMPONENT_SIZE } from './config/size.context'
import { createComponentConfigKey } from './config/symbol'
import type { ComponentSize } from './types/size.type'

type Plugin<T> = import('vue').Plugin<T>

declare global {
  export interface Window {
    /**
     * Poppy UI plugin options for debugging purposes. This is only set if the `debug` option is enabled when installing the plugin.
     *
     * @since 0.0.0
     */
    __POPPY_UI_PLUGIN_OPTIONS__?: PluginOptions
  }
}

export interface PluginOptions {
  /**
   * Default size for all components. This will be used as the default size for any component that doesn't have a specific size prop set. You can override this default size on a per-component basis by providing specific configurations in the `components` option or by passing the `size` prop directly to individual components.
   * @since 0.0.0
   */
  size?: ComponentSize

  /**
   * Component-specific default configurations. You can specify default props for each component here, which will be merged with the props passed directly to the component. This allows you to set global defaults for your components while still allowing individual instances to override them as needed.
   * @since 0.0.0
   */
  components?: Partial<PoppyComponentConfig>

  /**
   * Allows you to enable debug mode, which will log the plugin options to the console and expose them on the `window` object for easier debugging.
   * @since 0.0.0
   */
  debug?: true
}

export const PoppyUi = {
  install(app: App, options: PluginOptions = {}) {
    app.provide(COMPONENT_SIZE, options?.size || 'md')

    for (const [componentName, componentConfig] of Object.entries(options?.components || {})) {
      const key = createComponentConfigKey(componentName as keyof PoppyComponentConfig)
      app.provide(key, componentConfig as never)
    }

    if (options?.debug) {
      window.__POPPY_UI_PLUGIN_OPTIONS__ = options
      console.log('Poppy UI Plugin Options:', options)
    }
  },
} as Plugin<[PluginOptions?]>
