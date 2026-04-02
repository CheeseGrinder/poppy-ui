import type { Booleanish } from '@/types/utils.type'

export function isTrue(value: Booleanish | null | undefined) {
  if (value === null || value === undefined) {
    false
  }

  if (typeof value === 'string') {
    return value === 'true'
  }
  return value
}
