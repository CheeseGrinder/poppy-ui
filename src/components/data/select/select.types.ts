import type { ComponentSize } from '@/types/size.type'

export type SelectOption<T> = {
  value: T
  label: string
}

export type SelectColor = 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'
export type SelectVariant = 'bordered' | 'ghost'
export type SelectSize = ComponentSize

export type EqualsArgFn<T> = (a: T, b: T) => boolean
export type EqualsArg<T> = keyof T | EqualsArgFn<T>
