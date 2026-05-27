import type { InjectionKey, Ref } from 'vue'

export type AccordionContext<M extends boolean = false> = {
  multiple: M
  modelValue: Ref<M extends true ? string[] : string | null>
  toggle: (name: string) => void
  isOpen: (name: string) => boolean
}

export const ACCORDION_CONTEXT_KEY = Symbol('accordion') as InjectionKey<AccordionContext<any>>