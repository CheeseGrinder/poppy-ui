import type { CounterFn } from '@/types/utils.type'
import type { EqualsArg, SelectColor, SelectOption, SelectSearchFn, SelectSize, SelectVariant } from './select.types'

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

  /**
   * Enables search/filter inside the dropdown.
   * When used alone (no `search` prop), filters the provided `options` locally.
   */
  searchable?: boolean

  /**
   * Async function called to fetch options remotely.
   * Receives the search term, current page, page limit, and the last fetched item
   * (useful for cursor-based pagination). Must return a `Promise<SelectOption<T>[]>`.
   */
  search?: SelectSearchFn<T>

  /**
   * Debounce delay in milliseconds before triggering a remote `search` call on input.
   *
   * @default 300
   */
  debounce?: number

  /**
   * Minimum number of characters required to trigger a remote `search` call on input.
   * Does not affect the initial fetch on open.
   *
   * @default 0
   */
  minChars?: number

  /**
   * Number of items per page passed to the remote `search` callback.
   * Also used to determine whether there are more pages to load.
   *
   * @default 20
   */
  limit?: number

  /**
   * Height in pixels of each item in the virtual list.
   * Must match the actual rendered height — if using a custom `option` slot with
   * variable heights, set this accordingly or accept visual glitches.
   *
   * @default 36
   */
  itemHeight?: number
}
