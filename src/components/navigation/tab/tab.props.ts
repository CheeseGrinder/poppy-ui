import type { Booleanish } from '@/types/utils.type'
import type { Component } from 'vue'
import type { TabPlacement, TabSize, TabVariant } from './tab.types'

export interface TabsConfigurableProps {
  /**
   * Visual variant of the tabs.
   * - `'box'`: Boxed variant
   * - `'border'`: With bottom border
   * - `'lift'`: Lifted variant
   */
  variant?: TabVariant

  /**
   * Size of the tabs.
   *
   * @default 'md'
   */
  size?: TabSize

  /**
   * Placement of the tabs relative to content.
   * - `'top'`: Tabs on top (default)
   * - `'bottom'`: Tabs on bottom
   */
  placement?: TabPlacement
}

export interface TabsProps extends TabsConfigurableProps {
  /**
   * Additional custom class for the tabs container.
   */
  class?: string
}

// biome-ignore lint/suspicious/noEmptyInterface: Intentionally empty to allow future configurable props and global plugin configuration
export interface TabConfigurableProps {}

export interface TabProps extends TabConfigurableProps {
  /**
   * Whether the tab is active.
   *
   * @default false
   */
  active?: Booleanish

  /**
   * Whether the tab is disabled.
   *
   * @default false
   */
  disabled?: Booleanish

  /**
   * Optional icon component to display before the label.
   */
  icon?: Component

  /**
   * Navigation target (Vue Router location).
   * When provided, renders as RouterLink.
   */
  to?: string
}
