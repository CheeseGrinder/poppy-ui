import { COMPONENT_SIZE } from '@/symbol'
import { type ComputedRef, computed, type InjectionKey, inject } from 'vue'

/**
 * Merges objects while ignoring `undefined` values, allowing lower-priority
 * configuration to remain in effect.
 *
 * Priority order (rightmost wins):
 *   defaults → pluginConfig → contextOverrides (Form → FormField) → local props
 */
export function mergeProps<T extends Record<string, any>[]>(...objects: T): any {
  return objects.reduce((acc, curr) => {
    const cleanCurr = Object.fromEntries(Object.entries(curr).filter(([_, v]) => v !== undefined))
    return { ...acc, ...cleanCurr }
  }, {})
}

/**
 * Resolves the final config of a component by merging in the following order:
 *
 * 1. `defaults`          — hardcoded component defaults (e.g. `{ size: 'md', counter: false }`)
 * 2. `pluginConfig`      — inject(key) — global config provided via PoppyPlugin
 * 3. `contextOverrides`  — values inherited from Form / FormField (passed explicitly)
 * 4. `props`             — local props declared on the instance (highest priority)
 *
 * `undefined` values are ignored at each level, which allows `false` to correctly
 * override a parent value without `undefined` inadvertently clearing it.
 *
 * @param key              - InjectionKey for the component's pluginConfig
 * @param props            - Instance props (defineProps)
 * @param defaults         - Hardcoded default values
 * @param contextOverrides - Values inherited from the Form/FormField context (optional)
 */
export function useComponentConfig<T extends Record<string, any>, P extends Record<string, any>>(
  key: InjectionKey<T>,
  props: P,
  defaults?: Partial<P & T>,
  contextOverrides?: Record<string, any>,
): ComputedRef<P & T> {
  const pluginConfig = inject(key, {} as T)
  const globalSize = inject(COMPONENT_SIZE, 'md')

  return computed(() => mergeProps({ size: globalSize }, defaults ?? {}, pluginConfig, contextOverrides ?? {}, props))
}
