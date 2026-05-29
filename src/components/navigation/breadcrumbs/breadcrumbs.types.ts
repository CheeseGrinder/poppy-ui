import type { Component } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

export interface BreadcrumbItem {
  /** Label displayed for this breadcrumb. */
  label: string

  /** Navigation target (Vue Router location). */
  to?: RouteLocationRaw

  /** Optional icon component (e.g. Lucide icon) to prepend. */
  icon?: Component
}
