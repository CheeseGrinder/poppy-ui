import type { StatusAnimation, StatusColor, StatusSize } from './status.types'

export interface StatusConfigurableProps {
  /**
   * Color theme of the status indicator based on the DaisyUI palette.
   */
  color?: StatusColor

  /**
   * Size of the status indicator.
   *
   * @default 'md'
   */
  size?: StatusSize

  /**
   * Animation applied to the status indicator.
   * - `'ping'`: Renders two overlapping elements — one with `animate-ping` — to indicate urgency.
   * - `'bounce'`: Adds `animate-bounce` to draw attention.
   */
  animation?: StatusAnimation
}

export interface StatusProps extends StatusConfigurableProps {
  /**
   * Accessible label for the status indicator.
   * Used as `aria-label` on the root element.
   */
  label?: string
}
