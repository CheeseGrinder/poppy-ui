import type { Component } from 'vue'
import type { RouteLocationRaw } from 'vue-router'
import type { MenuDirection, MenuSize } from './menu.types'
export interface MenuConfigurableProps {
  /**
   * Size of the menu.
   *
   * @default 'md'
   */
  size?: MenuSize
  /**
   * Direction of the menu.
   *
   * @default 'vertical'
   */
  direction?: MenuDirection
}
export interface MenuProps extends MenuConfigurableProps {}
// biome-ignore lint/suspicious/noEmptyInterface: Intentionally empty to allow future configurable props and global plugin configuration
export interface MenuItemConfigurableProps {}
export interface MenuItemProps extends MenuItemConfigurableProps {
  /**
   * Optional icon component to display before the label (e.g. Lucide icon).
   */
  icon?: Component
  /**
   * Navigation target (Vue Router location).
   * When provided, renders as RouterLink.
   */
  to?: RouteLocationRaw
  /**
   * Renders the item as a section title (non-interactive).
   * Renders the item as a non-interactive section title (`menu-title`).
   *
   * @default false
   */
  title?: boolean
  /**
   * Disables the item.
   *
   * @default false
   */
  disabled?: boolean
  /**
   * Forces the active state on the item.
   * When `to` is provided, the active state is automatically detected via `useLink`.
   * Use this prop to manually control the active state when no `to` is provided.
   *
   * @default false
   */
  active?: boolean
  /**
   * When true and a `submenu` slot is provided, wraps the submenu
   * in a `<details>/<summary>` for native collapsible behavior.
   *
   * @default false
   */
  collapsible?: boolean
}
