import type { DividerColor, DividerOrientation, DividerPlacement } from './divider.types'

export interface DividerConfigurableProps {
  /**
   * Orientation of the divider line.
   * - `'horizontal'`: Horizontal line.
   * - `'vertical'`: Vertical line.
   *
   * @default 'horizontal'
   */
  orientation?: DividerOrientation

  /**
   * Color of the divider line based on DaisyUI palette.
   */
  color?: DividerColor

  /**
   * Placement of the divider text/content.
   * - `'start'`: Aligned to the start.
   * - `'end'`: Aligned to the end.
   * - `'middle'`: Centered.
   * - `'none'`: No text placement (text not shown).
   */
  placement?: DividerPlacement
}

export interface DividerProps extends DividerConfigurableProps {}
