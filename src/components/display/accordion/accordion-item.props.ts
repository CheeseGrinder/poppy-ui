import type { AccordionItemIcon } from './accordion-item.types'

export interface AccordionItemConfigurableProps {
  /**
   * Icon displayed in the header to indicate the open/close state.
   * - `'arrow'`: A chevron that rotates 180° when open.
   * - `'plus'`: A plus sign that rotates 45° (becoming a cross) when open.
   *
   * @default 'arrow'
   */
  icon?: AccordionItemIcon
}

export interface AccordionItemProps extends AccordionItemConfigurableProps {
  /**
   * Unique identifier for this item within the parent `Accordion`.
   * Used to track open/close state.
   */
  name: string
}