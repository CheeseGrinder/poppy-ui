import type { ToastItem } from '@/composables/use-toast'
import { createComponentConfigKey } from '@/symbol'
import type { InjectionKey } from 'vue'

export const TOAST_CONFIG = createComponentConfigKey('toast')

export type ToastContext = {
  push: (message: string, options?: Partial<Omit<ToastItem, 'id' | 'message'>>) => void
  dismiss: (id: number) => void
}

export const TOAST_CONTEXT_KEY = Symbol('toast') as InjectionKey<ToastContext>
