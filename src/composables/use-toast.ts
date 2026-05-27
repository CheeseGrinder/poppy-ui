import type { ToastColor } from '@/components/feedback/public-types'
import { TOAST_CONTEXT_KEY } from '@/components/feedback/toast/toast.context'
import { inject, ref } from 'vue'

export type ToastItem = {
  id: number
  message: string
  color?: ToastColor
  duration?: number
}

/**
 * Composable to push and dismiss toast notifications.
 *
 * Must be used inside a component tree wrapped by `<PoppyApp>`,
 * which provides the toast context via `provide()`.
 *
 * @nuxt-safe — State lives in the component tree via provide/inject,
 * avoiding module-level singletons that would be shared across SSR requests.
 *
 * @example
 * const { push, dismiss } = useToast()
 * push('Saved!', { color: 'success' })
 */
export function useToast() {
  const ctx = inject(TOAST_CONTEXT_KEY, null)

  if (!ctx) {
    // Fallback for usage outside PoppyApp (e.g. unit tests, Storybook variants)
    const toasts = ref<ToastItem[]>([])
    let nextId = 0

    function push(message: string, options?: Partial<Omit<ToastItem, 'id' | 'message'>>) {
      const item: ToastItem = { id: nextId++, message, duration: 3000, ...options }
      toasts.value.push(item)
      if (item.duration) setTimeout(() => dismiss(item.id), item.duration)
    }

    function dismiss(id: number) {
      toasts.value = toasts.value.filter(t => t.id !== id)
    }

    return { toasts, push, dismiss }
  }

  return ctx
}
