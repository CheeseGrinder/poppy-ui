import type { ComponentSize } from '@/types/size.type'

export type SelectOption<T> = {
  value: T
  label: string
  disabled?: boolean
}

export interface SearchParams<T = unknown> {
  term: string
  limit: number
  page: number
  /** Last fetched item value — use as cursor for cursor-based pagination APIs */
  lastItem?: T
}

export type SelectSearchFn<T = unknown> = (params: SearchParams<T>) => Promise<SelectOption<T>[]>

export type SelectColor = 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'
export type SelectVariant = 'bordered' | 'ghost'
export type SelectSize = ComponentSize

export type EqualsArgFn<T> = (a: T, b: T) => boolean
export type EqualsArg<T> = keyof T | EqualsArgFn<T>
