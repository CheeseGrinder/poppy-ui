import type { PoppyComponentConfig } from '@/config/config.type'
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
