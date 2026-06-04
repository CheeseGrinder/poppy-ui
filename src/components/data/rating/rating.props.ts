import type { Booleanish } from '@/types/utils.type'
import type { RatingColor, RatingMask, RatingSize } from './rating.types'

export interface RatingConfigurableProps {
  /**
   * Color applied to the star icons.
   */
  color?: RatingColor

  /**
   * Size of the rating stars.
   *
   * @default 'md'
   */
  size?: RatingSize

  /**
   * Total number of stars.
   *
   * @default 5
   */
  count?: number

  /**
   * Renders half-star precision using split mask inputs.
   * In half mode the model value increments by 0.5.
   *
   * @default false
   */
  half?: Booleanish

  /**
   * Allows clearing the rating by selecting the active value again.
   * Adds a hidden radio at index 0.
   *
   * @default true
   */
  clearable?: Booleanish

  /**
   * @default 'star'
   */
  mask?: RatingMask
}

export interface RatingProps extends RatingConfigurableProps {
  /** Disables all interaction. */
  disabled?: boolean
  /** Marks as required — signals FormField to display "*". */
  required?: boolean
}
