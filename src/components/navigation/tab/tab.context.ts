import { createComponentConfigKey } from '@/config/symbol'
import type { InjectionKey, Ref } from 'vue'

export const TABS_CONFIG = createComponentConfigKey('tabs')
export const TAB_CONFIG = createComponentConfigKey('tab')

export interface TabsContext {
  activeValue: Ref<string | undefined>
  setActive: (value: string) => void
  register: (value: string, initiallyActive: boolean) => void
}

export const TABS_CONTEXT: InjectionKey<TabsContext> = Symbol('tabs')
