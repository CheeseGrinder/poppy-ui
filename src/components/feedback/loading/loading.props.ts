import type { LoadingColor, LoadingSize, LoadingVariant } from './loading.types'

export interface LoadingConfigurableProps {
  /**
   * Visual style of the loading indicator.
   *
   * @default 'spinner'
   */
  variant?: LoadingVariant

  /**
   * Size of the loading indicator.
   *
   * @default 'md'
   */
  size?: LoadingSize

  /**
   * Color of the loading indicator based on the DaisyUI palette.
   * Applied as a Tailwind `text-*` utility class.
   */
  color?: LoadingColor
}

export interface LoadingProps extends LoadingConfigurableProps {}
