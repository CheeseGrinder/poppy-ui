import type { TooltipColor, TooltipPlacement } from './tooltip.types'

export interface TooltipConfigurableProps {
  /**
   * Placement of the tooltip relative to the anchor element.
   *
   * @default 'top'
   */
  placement?: TooltipPlacement

  /**
   * Color theme of the tooltip based on the DaisyUI palette.
   */
  color?: TooltipColor

  /**
   * HTML tag or component used to render the anchor wrapper.
   *
   * @default 'div'
   */
  as?: string
}

export interface TooltipProps extends TooltipConfigurableProps {
  /**
   * Text content of the tooltip.
   * Can be overridden by the `content` slot.
   */
  tip?: string

  /**
   * When `true`, the tooltip is always visible regardless of hover state.
   *
   * @default false
   */
  open?: boolean

  /**
   * When `true`, the tooltip is never shown.
   *
   * @default false
   */
  disabled?: boolean
}
