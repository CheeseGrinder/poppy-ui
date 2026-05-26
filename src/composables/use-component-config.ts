import { COMPONENT_SIZE } from '@/symbol'
import { type ComputedRef, type InjectionKey, computed, inject } from 'vue'

export function useComponentConfig<T extends Record<string, any>, P extends Record<string, any>>(
  key: InjectionKey<T>,
  props: P,
  defaults?: Partial<P & T>,
): ComputedRef<P & T> {
  const componentConfig = inject(key, {} as T)
  const globalSize = inject(COMPONENT_SIZE, 'md')

  return computed(() => mergeProps({ size: globalSize }, defaults ?? {}, componentConfig, props))
}

/**
 * Fusionne les objets en ignorant les valeurs 'undefined' pour laisser
 * la configuration globale prendre le relais.
 */
export function mergeProps<T extends Record<string, any>[]>(...objects: T): any {
  return objects.reduce((acc, curr) => {
    const cleanCurr = Object.fromEntries(Object.entries(curr).filter(([_, v]) => v !== undefined))
    return { ...acc, ...cleanCurr }
  }, {})
}
