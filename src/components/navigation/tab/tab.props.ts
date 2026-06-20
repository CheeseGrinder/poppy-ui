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
export interface TabsProps extends TabsConfigurableProps {}
// biome-ignore lint/suspicious/noEmptyInterface: Intentionally empty to allow future configurable props and global plugin configuration
export interface TabConfigurableProps {}
export interface TabProps extends TabConfigurableProps {
  /**
   * Unique value identifying this tab. Used with `v-model` on the parent `<Tabs>` for controlled mode.
   */
  value?: string
  /**
   * Tab header label. Rendered inside the tab button.
   * Can also be set via the `#title` slot for rich content.
   */
  title?: string
  /**
   * Whether the tab is active. Auto-computed when `value` is set and a parent `<Tabs v-model>` exists.
   *
   * @default false
   */
  active?: boolean
  /**
   * Whether the tab is disabled.
   *
   * @default false
   */
  disabled?: boolean
  /**
   * Optional icon component displayed before the tab label.
   */
  icon?: Component
  /**
   * Navigation target (Vue Router location). When provided, renders as RouterLink.
   */
  to?: string
}
