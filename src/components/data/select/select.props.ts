import type { CounterFn } from '@/types/utils.type'
import type { EqualsArg, SelectColor, SelectOption, SelectSize, SelectVariant } from './select.types'

export interface SelectConfigurableProps {
  /**
   * Color variant of the select.
   */
  color?: SelectColor

  /**
   * Visual style variant.
   * - `'bordered'` — adds a visible border
   * - `'ghost'` — transparent background
   */
  variant?: SelectVariant

  /**
   * Size of the select.
   *
   * @default 'md'
   */
  size?: SelectSize

  /**
   * Allows clearing the selection via a clear button.
   * In single mode, clicking the active option also clears when enabled.
   *
   * @default false
   */
  clearable?: boolean

  /**
   * Custom counter format function.
   * Receives `(count, min?, max?)` and returns a display string.
   */
  counterFormatter?: CounterFn
}

export interface SelectProps<T = any, M extends boolean = false> extends SelectConfigurableProps {
  /** Field name. Inferred from `<FormField />` name when not provided. */
  name?: string
  /** Disables all interaction. */
  disabled?: boolean
  /** Marks the field as required — signals `<FormField />` to display `"*"`. */
  required?: boolean
  /** Makes the select read-only. */
  readonly?: boolean
  /** Text shown when no value is selected. */
  placeholder?: string
  /** List of options to display. */
  options?: SelectOption<T>[]
  /**
   * Key or function used for value equality comparison.
   * Use a string key for objects, or a function for custom logic.
   *
   * @example 'id'
   * @example (a, b) => a.id === b.id
   */
  equals?: EqualsArg<T>
  /**
   * Enables multiple selection.
   * Not configurable globally — would break `T`/`M` type inference.
   */
  multiple?: M & boolean
}
