import type { RadialProgressColor } from './radial-progress.types'

export interface RadialProgressConfigurableProps {
  /**
   * Color of the radial progress arc.
   * Applied as a `text-{color}` Tailwind class.
   */
  color?: RadialProgressColor

  /**
   * Size of the radial progress circle.
   * Accepts any valid CSS size value.
   *
   * @default '5rem'
   */
  size?: string

  /**
   * Thickness of the progress arc.
   * Accepts any valid CSS size value. Defaults to 10% of `size`.
   *
   * @example '2px'
   * @example '1rem'
   */
  thickness?: string
}

export interface RadialProgressProps extends RadialProgressConfigurableProps {
  /**
   * Current value of the radial progress (0–100).
   *
   * @default 0
   */
  value?: number
}
