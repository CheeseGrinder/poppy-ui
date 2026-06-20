import type { ComputedRef, InjectionKey, ShallowRef } from 'vue'

export interface RadioGroupContext {
  /** Shared name attribute for all child Radio inputs. */
  name: string
  /** Currently selected value. */
  modelValue: ComputedRef<string | number | boolean | undefined>
  /** Whether any radio in the group is required. */
  required: ShallowRef<boolean>
  /** Updates the selected value. */
  setValue: (value: string | number | boolean) => void
}

export const RADIO_GROUP_CONTEXT_KEY: InjectionKey<RadioGroupContext> = Symbol('RadioGroupContext')
