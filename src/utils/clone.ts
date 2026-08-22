import { isRef } from 'vue'

/**
 * Deep-clones a value for use as form snapshot data.
 *
 * Unlike `JSON.parse(JSON.stringify(...))`, this tolerates circular
 * references — including Vue's internal `dep <-> computed` cycle — via a
 * visited-object guard instead of throwing, and unwraps nested refs/computed
 * values. Unlike a plain-object allowlist, it still clones the own
 * properties of class instances / value objects (e.g. `new Airing(...)`),
 * matching what `JSON.stringify` used to preserve. Functions are dropped
 * since they can't be meaningfully snapshotted as form data.
 */
export function safeClone<T>(value: T, seen: WeakMap<object, unknown> = new WeakMap()): T {
  if (typeof value === 'function') {
    return undefined as unknown as T
  }

  if (isRef(value)) {
    return safeClone(value.value, seen) as T
  }

  if (value === null || typeof value !== 'object') {
    return value
  }

  if (seen.has(value)) {
    return seen.get(value) as T
  }

  if (value instanceof Date) {
    return new Date(value.getTime()) as unknown as T
  }

  if (Array.isArray(value)) {
    const result: unknown[] = []
    seen.set(value, result)
    for (const item of value) {
      result.push(safeClone(item, seen))
    }
    return result as unknown as T
  }

  const result: Record<string, unknown> = {}
  seen.set(value, result)
  for (const [key, val] of Object.entries(value)) {
    const cloned = safeClone(val, seen)
    if (cloned !== undefined) {
      result[key] = cloned
    }
  }
  return result as T
}
