import type { ClassValue } from 'vue'
import type { DrawerSide } from './drawer.types'
export interface DrawerConfigurableProps {
  /**
   * Side from which the drawer opens.
   * - `'start'`: Opens from the left (default).
   * - `'end'`: Opens from the right.
   */
  side?: DrawerSide
  /**
   * When `true`, clicking the overlay closes the drawer.
   *
   * @default true
   */
  overlay?: boolean
  /**
   * Additional classes to apply to the drawer content container.
   */
  contentClass?: ClassValue
  /**
   * Additional classes to apply to the drawer sidebar container.
   */
  sidebarClass?: ClassValue
}
export interface DrawerProps extends DrawerConfigurableProps {}
