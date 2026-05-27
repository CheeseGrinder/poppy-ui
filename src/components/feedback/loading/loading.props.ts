import type { LoadingSize, LoadingVariant } from './loading.types'

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
}

export interface LoadingProps extends LoadingConfigurableProps {}