import type { ComponentSize } from '@/types/size.type'

export type InputColor = 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'

export type InputSize = ComponentSize

export type InputVariant = 'bordered' | 'ghost'

// Date/datetime types are handled by a dedicated DateInput component
export type InputType = 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search' | 'time'
