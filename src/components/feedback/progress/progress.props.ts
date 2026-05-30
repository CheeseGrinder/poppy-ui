import type { Booleanish } from '@/types/utils.type'
import type { ProgressColor } from './progress.types'

export interface ProgressConfigurableProps {
  /**
   * Color of the progress bar.
   */
  color?: ProgressColor
}

export interface ProgressProps extends ProgressConfigurableProps {
  /**
   * Current value of the progress bar.
   * Omit or set to `undefined` for indeterminate state.
   */
  value?: number

  /**
   * Maximum value of the progress bar.
   *
   * @default 100
   */
  max?: number

  /**
   * When true, renders the progress bar in an indeterminate (animated) state.
   * Takes precedence over `value`.
   *
   * @default false
   */
  indeterminate?: Booleanish
}
