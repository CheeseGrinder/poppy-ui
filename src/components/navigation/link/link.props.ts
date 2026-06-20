import type { RouteLocationRaw } from 'vue-router'
import type { LinkColor } from './link.types'
export interface LinkConfigurableProps {
  /**
   * Color theme of the link.
   */
  color?: LinkColor
  /**
   * Only shows underline on hover instead of always.
   */
  hover?: boolean
}
export interface LinkProps extends LinkConfigurableProps {
  /**
   * Navigation target. Accepts a Vue Router location or a native anchor (`#`, `#section`).
   * - Vue Router location → renders as `<RouterLink>`
   * - `#` or anchor → renders as `<a href="#">`
   */
  to?: RouteLocationRaw
}
