import type { SliderColor, SliderSize, SliderTrack } from './slider.types'
export interface SliderConfigurableProps {
  /**
   * Color of the slider track and thumb.
   */
  color?: SliderColor
  /**
   * Size of the slider.
   *
   * @default 'md'
   */
  size?: SliderSize
  /**
   * Track display mode:
   * - 'normal': Track between min and thumb (or between both thumbs in range mode)
   * - 'inverted': Track on the unselected area
   * - false: No track displayed
   *
   * @default 'normal'
   */
  track?: SliderTrack
}
export interface SliderProps<R extends boolean = false> extends SliderConfigurableProps {
  /**
   * Enables double thumb mode (range slider).
   * The model becomes a [number, number] tuple.
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
  /**
   * Prevents thumbs from swapping when they cross each other.
   * If false (default), thumbs can cross and swap their roles.
   * If true, thumbs cannot cross.
   *
   * @default false
   */
  disableSwap?: boolean
  /**
   * Scale function to transform mechanical values to business values.
   * @param value - The mechanical value
   * @returns The business value to display and emit
   */
  scale?: (value: number) => number
  /** Disables the slider. */
  disabled?: boolean
  /** Marks the field as required. */
  required?: boolean
  /** Accessible label for the slider. */
  ariaLabel?: string
  /**
   * Orientation of the slider.
   *
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical'
  /**
   * Controls when to show the value tooltip.
   *
   * @default 'hover'
   */
  showTooltip?: 'always' | 'hover' | 'never'
}
