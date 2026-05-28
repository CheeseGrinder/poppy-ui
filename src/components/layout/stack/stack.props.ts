import type { StackDirection } from './stack.types'

export interface StackConfigurableProps {
  /**
   * Direction in which stacked items are laid out.
   * - `'horizontal'`: Items are stacked horizontally (default).
   * - `'vertical'`: Items are stacked vertically.
   */
  direction?: StackDirection
}

export interface StackProps extends StackConfigurableProps {}
