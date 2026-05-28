import type { Booleanish } from '@/types/utils.type'
import type { MaskHalf, MaskVariant } from './mask.types'

export interface MaskConfigurableProps {
  /**
   * Shape of the mask to apply to the content.
   * - `'squircle'`: Smooth squircle shape.
   * - `'heart'`: Heart shape.
   * - `'hexagon'`: Vertical hexagon.
   * - `'hexagon-2'`: Horizontal hexagon.
   * - `'decagon'`: 10-sided polygon.
   * - `'pentagon'`: 5-sided polygon.
   * - `'diamond'`: Diamond shape.
   * - `'square'`: Square with hard edges.
   * - `'circle'`: Perfect circle.
   * - `'star'`: Star shape.
   * - `'star-2'`: Bold star shape.
   * - `'triangle'`: Triangle pointing up.
   * - `'triangle-2'`: Triangle pointing down.
   * - `'triangle-3'`: Triangle pointing left.
   * - `'triangle-4'`: Triangle pointing right.
   */
  variant?: MaskVariant

  /**
   * When set, only masks half of the content.
   * - `'half-1'`: Masks the first half.
   * - `'half-2'`: Masks the second half.
   */
  half?: MaskHalf
}

export interface MaskProps extends MaskConfigurableProps {
  /**
   * When `true`, renders the mask as inline element.
   *
   * @default false
   */
  inline?: Booleanish
}
