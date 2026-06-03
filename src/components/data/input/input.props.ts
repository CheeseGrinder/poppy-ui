import type { Booleanish, CounterFn } from '@/types/utils.type'
import type { InputHTMLAttributes } from 'vue'
import type { InputColor, InputSize, InputType, InputVariant } from './input.types'

export interface InputConfigurableProps {
  /**
   * Color variant of the input.
   */
  color?: InputColor

  /**
   * Size of the input.
   *
   * @default 'md'
   */
  size?: InputSize

  /**
   * Visual style variant.
   * - `'bordered'` — adds a visible border
   * - `'ghost'` — transparent background
   */
  variant?: InputVariant

  /**
   * Displays a character counter below the input.
   *
   * @default false
   */
  counter?: Booleanish

  /**
   * Minimum character length (counter warning state).
   */
  minLength?: number

  /**
   * Maximum character length (counter warning state; also applied as native `maxlength`).
   */
  maxLength?: number

  /**
   * Custom counter format. Tokens: `{current}`, `{min}`, `{max}`.
   *
   * @default '{current} / {max}'
   */
  counterFormat?: string | CounterFn
}

interface NativeInput {
  /** Disables the input. */
  disabled?: InputHTMLAttributes['disabled']
  /** Marks the field as required. */
  required?: InputHTMLAttributes['required']
  /** Placeholder text. */
  placeholder?: InputHTMLAttributes['placeholder']
  /** HTML autocomplete attribute. */
  autocomplete?: InputHTMLAttributes['autocomplete']
  /** Native pattern for constraint validation. */
  pattern?: InputHTMLAttributes['pattern']
  /** Title shown on pattern mismatch (used as custom validation message). */
  title?: InputHTMLAttributes['title']
}

export interface InputProps extends InputConfigurableProps, NativeInput {
  /**
   * HTML input type.
   *
   * @default 'text'
   */
  type?: InputType

  /**
   * Fallback value rendered when the model is empty or undefined.
   */
  defaultValue?: string | number

  /** Inline label text (standalone use). */
  label?: string

  /** Hint / helper text rendered below the input. */
  hint?: string
}
