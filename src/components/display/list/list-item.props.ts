import type { RouteLocationRaw } from 'vue-router'

export interface ListItemProps {
  /**
   * If provided, the component renders as a `RouterLink`.
   * Accepts a string path or a route location object.
   */
  to?: RouteLocationRaw
}