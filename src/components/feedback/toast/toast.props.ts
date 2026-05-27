import type { ToastAlign, ToastSide } from './toast.types'

export interface ToastConfigurableProps {
  /**
   * Horizontal position of the toast container.
   * - `'start'`: Left in LTR, right in RTL.
   * - `'center'`: Centered horizontally.
   * - `'end'`: Right in LTR, left in RTL.
   *
   * @default 'end'
   */
  align?: ToastAlign

  /**
   * Vertical position of the toast container.
   * - `'top'`: Anchored to the top of the viewport.
   * - `'middle'`: Centered vertically.
   * - `'bottom'`: Anchored to the bottom of the viewport.
   *
   * @default 'bottom'
   */
  side?: ToastSide

  /**
   * Default duration in milliseconds before a toast is automatically dismissed.
   * Set to `0` to disable auto-dismiss.
   *
   * @default 3000
   */
  duration?: number
}

export interface ToastProps extends ToastConfigurableProps {}
