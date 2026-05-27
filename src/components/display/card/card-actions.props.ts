import type { CardActionsAlign } from './card-actions.types'

export interface CardActionsConfigurableProps {
  /**
   * Horizontal alignment of the actions.
   * - `'start'`: Align to the left.
   * - `'center'`: Align to the center.
   * - `'end'`: Align to the right.
   *
   * @default 'start'
   */
  align?: CardActionsAlign
}

export interface CardActionsProps extends CardActionsConfigurableProps {}