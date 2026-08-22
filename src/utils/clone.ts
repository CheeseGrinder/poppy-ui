import { isRef } from 'vue'

function isPlainObject(value: unknown): value is Record<string, unknown> {
  if (Object.prototype.toString.call(value) !== '[object Object]') return false
  const proto = Object.getPrototypeOf(value)
  return proto === Object.prototype || proto === null
}

/**
 * Deep-clones a value for use as form snapshot data.
 *
 * Unlike `JSON.parse(JSON.stringify(...))`, this tolerates Vue reactivity
 * primitives (refs/computed) nested in the source by unwrapping them instead
 * of throwing on their internal `dep <-> computed` circular references.
 * Non-plain, non-cloneable values (functions, class instances, symbols, ...)
 * are skipped — with a dev-mode warning naming the offending key — since they
 * can't be safely snapshotted as form data.
 */
export function safeClone<T>(value: T, path = ''): T {
  if (isRef(value)) {
    return safeClone(value.value, path) as T
  }

  if (value === null || typeof value !== 'object') {
    return value
  }

  if (Array.isArray(value)) {
    return value.map((item, i) => safeClone(item, `${path}[${i}]`)) as unknown as T
  }

  if (value instanceof Date) {
    return new Date(value.getTime()) as unknown as T
  }

  if (!isPlainObject(value)) {
    if (import.meta.env.DEV) {
      console.warn(
        `[Form] Skipping non-plain value at "${path || '<root>'}" while snapshotting v-model data. ` +
          `Only plain data objects are supported — avoid binding Vue refs, computed values, class instances, ` +
          `or other non-serializable values directly to <Form>'s v-model.`,
      )
    }
    return undefined as unknown as T
  }

  const result: Record<string, unknown> = {}
  for (const [key, val] of Object.entries(value)) {
    const cloned = safeClone(val, path ? `${path}.${key}` : key)
    if (cloned !== undefined) {
      result[key] = cloned
    }
  }
  return result as T
}
