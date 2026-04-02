import { join } from 'node:path'
import plugin from 'tailwindcss/plugin'

export const poppyPlugin: ReturnType<typeof plugin> = plugin(
  () => {}, // No logic needed in the main function for this specific use case
  {
    // Automatically inject the library's file paths
    // Use __dirname to point to the 'dist' folder where the plugin will reside
    theme: {},
    content: [
      // Target all JS/Vue files within the @poppy-ui package
      join(__dirname, './**/*.{js,vue,mjs}'),
    ],
  },
)

export default poppyPlugin
