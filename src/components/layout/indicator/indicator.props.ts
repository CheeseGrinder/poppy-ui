import type { IndicatorAlign, IndicatorSide } from './indicator.types'
export interface IndicatorConfigurableProps {
  /**
   * Side of the element where the indicator is placed.
   * - `'start'`: Left side of the content.
   * - `'end'`: Right side of the content.
   * - `'top'`: Top of the content.
   * - `'bottom'`: Bottom of the content.
   */
  side?: IndicatorSide
  /**
   * Alignment of the indicator along the chosen side.
   * - `'start'`: Aligned to the start of the side.
   * - `'end'`: Aligned to the end of the side.
   * - `'center'`: Centered horizontally (for top/bottom sides).
   * - `'middle'`: Centered vertically (for start/end sides).
   */
  align?: IndicatorAlign
}
export interface IndicatorProps extends IndicatorConfigurableProps {
  /**
   * When `true`, hides the indicator content.
   *
   * @default false
   */
  hide?: boolean
}
