import type { CounterFn } from '@/types/utils.type'
import type { TextareaHTMLAttributes } from 'vue'
import type { TextareaColor, TextareaSize, TextareaVariant } from './textarea.types'

export interface TextareaConfigurableProps {
  /**
   * Color variant of the textarea.
   */
  color?: TextareaColor

  /**
   * Size of the textarea.
   *
   * @default 'md'
   */
  size?: TextareaSize

  /**
   * Visual style variant.
   * - `'bordered'` — adds a visible border
   * - `'ghost'` — transparent background
   */
  variant?: TextareaVariant

  /**
   * Automatically grows the textarea height to fit its content.
   * When active, `rows` is ignored.
   *
   * @default false
   */
  autoGrow?: boolean

  /**
   * Displays a character counter below the textarea.
   *
   * @default false
   */
  counter?: boolean

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

interface NativeTextarea {
  /** Disables the textarea. */
  disabled?: TextareaHTMLAttributes['disabled']
  /** Makes the textarea read-only. */
  readonly?: TextareaHTMLAttributes['readonly']
  /** Marks the field as required — signals FormField to display "*". */
  required?: TextareaHTMLAttributes['required']
  /** Placeholder text. */
  placeholder?: TextareaHTMLAttributes['placeholder']
  /** Number of visible text rows (ignored when `autoGrow` is active). */
  rows?: number | `${number}`
}

export interface TextareaProps extends TextareaConfigurableProps, NativeTextarea {}
