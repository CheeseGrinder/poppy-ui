import type { RouteLocationRaw } from 'vue-router'

export interface ListItemProps {
  /**
   * If provided, the component renders as a `RouterLink`.
   * Accepts a string path or a route location object.
   */
  to?: RouteLocationRaw

  /**
   * Title text for the list item. Can also be passed via #title slot.
   */
  title?: string

  /**
   * Description text for the list item. Can also be passed via #description slot.
   */
  description?: string
}
