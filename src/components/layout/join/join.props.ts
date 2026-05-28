import type { JoinDirection } from './join.types'

export interface JoinConfigurableProps {
  /**
   * Direction in which joined items are laid out.
   * - `'horizontal'`: Items are joined side by side.
   * - `'vertical'`: Items are joined in a column.
   *
   * @default 'horizontal'
   */
  direction?: JoinDirection
}

export interface JoinProps extends JoinConfigurableProps {}
