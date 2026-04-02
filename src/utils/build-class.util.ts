import { twMerge } from 'tailwind-merge'
import type { ClassValue } from 'vue'

export function getClass<T extends string = string>(values: Record<T, string>, key: T | undefined) {
  if (key === undefined) {
    return undefined
  }
  return values[key]
}

function normalize(input: ClassValue): string {
  if (!input) return ''

  if (typeof input === 'string') return input

  if (Array.isArray(input)) {
    return input.map(normalize).filter(Boolean).join(' ')
  }

  if (typeof input === 'object') {
    return Object.entries(input)
      .filter(([, value]) => Boolean(value))
      .map(([key]) => key)
      .join(' ')
  }

  return ''
}

function dedupe(classStr: string): string {
  return [...new Set(classStr.split(/\s+/))].join(' ')
}

export function clsx(...inputs: ClassValue[]) {
  const merged = twMerge(inputs.map(normalize).filter(Boolean).join(' '))

  return dedupe(merged)
}
