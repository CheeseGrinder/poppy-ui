import type { ComponentSize } from '@/types/size.type'
import type { PoppyComponentConfig } from '@poppy-ui/vue/types'
import type { InjectionKey } from 'vue'

const knownComponentConfigKeys = new Map<keyof PoppyComponentConfig, InjectionKey<unknown>>()

export function createComponentConfigKey<K extends keyof PoppyComponentConfig>(name: K) {
  type Key = InjectionKey<Partial<PoppyComponentConfig[K]>>

  if (!knownComponentConfigKeys.has(name)) {
    const key = Symbol(`config-${String(name)}`) as Key
    knownComponentConfigKeys.set(name, key)
  }

  return knownComponentConfigKeys.get(name) as Key
}

export const COMPONENT_SIZE = Symbol('pop-component--size') as InjectionKey<ComponentSize>
