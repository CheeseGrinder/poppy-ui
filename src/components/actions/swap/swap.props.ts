import type { Booleanish } from '@/types/utils.type'
import type { SwapVariant } from './swap.types'

export interface SwapConfigurableProps {
  /**
   * Animation effect applied when swapping.
   * - `'rotate'`: Rotates the elements during transition.
   * - `'flip'`: Flips the elements during transition.
   */
  variant?: SwapVariant
}

export interface SwapProps extends SwapConfigurableProps {
  /**
   * When `true`, the `indeterminate` slot is visible instead of `on` or `off`.
   *
   * @default false
   */
  indeterminate?: Booleanish
}
