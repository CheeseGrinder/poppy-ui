import type { BreadcrumbItem } from './breadcrumbs.types'

export interface BreadcrumbsConfigurableProps {
  /**
   * Maximum width of the breadcrumb container.
   * Enables horizontal scrolling when items overflow.
   * @example 'max-w-xs'
   */
  maxWidth?: string
}

export interface BreadcrumbsProps extends BreadcrumbsConfigurableProps {
  /**
   * List of breadcrumb items to render.
   * The last item is treated as the current page (non-clickable).
   */
  items: BreadcrumbItem[]
}
