import type { RangeColor, RangeSize } from './range.types'

export interface RangeConfigurableProps {
  /**
   * Color of the range track.
   */
  color?: RangeColor

  /**
   * Size of the range slider.
   *
   * @default 'md'
   */
  size?: RangeSize
}

export interface RangeProps<R extends boolean = false> extends RangeConfigurableProps {
  /**
   * Enables double thumb mode.
   * The model becomes a `[number, number]` tuple.
   *
   * @default false
   */
  range?: R & boolean

  /** Minimum value. */
  min?: number

  /** Maximum value. */
  max?: number

  /** Step increment. */
  step?: number

  /** Disables the slider. */
  disabled?: boolean

  /** Marks the field as required — signals FormField to display "*". */
  required?: boolean
}
