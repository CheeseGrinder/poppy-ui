import type { Component } from 'vue'
import type { RouteLocationRaw } from 'vue-router'
import type { DockSize } from './dock.types'

export interface DockConfigurableProps {
  /**
   * Size of the dock.
   *
   * @default 'md'
   */
  size?: DockSize
}

export interface DockProps extends DockConfigurableProps {}

// biome-ignore lint/suspicious/noEmptyInterface: placeholder for now
export interface DockItemConfigurableProps {}

export interface DockItemProps extends DockItemConfigurableProps {
  /**
   * Icon component to display (e.g. Lucide icon).
   */
  icon: Component

  /**
   * Optional text label displayed below the icon.
   */
  label?: string

  /**
   * Navigation target (Vue Router location). When provided, the item renders as a RouterLink.
   */
  to?: RouteLocationRaw
}
