/**
 * Gets a value from an object using a dot-notation path.
 * Supports nested objects and array indices.
 *
 * @example
 * getByPath({ a: { b: 1 } }, 'a.b') // returns 1
 * getByPath({ users: [{ name: 'John' }] }, 'users.0.name') // returns 'John'
 */
export function getByPath(obj: Record<string, unknown>, path: string): unknown {
  if (!obj || !path) return undefined

  const keys = parsePath(path)
  let current: unknown = obj

  for (const key of keys) {
    if (current === null || current === undefined) {
      return undefined
    }

    if (typeof current !== 'object') {
      return undefined
    }

    current = (current as Record<string, unknown>)[key]
  }

  return current
}

/**
 * Sets a value in an object using a dot-notation path.
 * Creates intermediate objects/arrays as needed.
 * Supports nested objects and array indices.
 *
 * @example
 * setByPath({}, 'a.b', 1) // returns { a: { b: 1 } }
 * setByPath({ users: [] }, 'users.0.name', 'John') // returns { users: [{ name: 'John' }] }
 */
export function setByPath(obj: Record<string, unknown>, path: string, value: unknown): void {
  if (!path) return

  const keys = parsePath(path)
  let current: Record<string, unknown> = obj

  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i]
    const nextKey = keys[i + 1]

    if (current[key] === undefined) {
      // Create array if next key is numeric
      if (isNumericKey(nextKey)) {
        current[key] = []
      } else {
        current[key] = {}
      }
    }

    if (typeof current[key] !== 'object' || current[key] === null) {
      // Overwrite with array if next key is numeric
      if (isNumericKey(nextKey)) {
        current[key] = []
      } else {
        current[key] = {}
      }
    }

    current = current[key] as Record<string, unknown>
  }

  const lastKey = keys[keys.length - 1]
  if (isNumericKey(lastKey)) {
    const arr = current as unknown as unknown[]
    const index = Number.parseInt(lastKey, 10)
    // Expand array if needed
    while (arr.length <= index) {
      arr.push(undefined)
    }
    arr[index] = value
  } else {
    current[lastKey] = value
  }
}

/**
 * Parses a dot-notation path into an array of keys.
 * Handles array indices (e.g., 'users.0.name' -> ['users', '0', 'name'])
 */
function parsePath(path: string): string[] {
  // Handle empty path
  if (!path.trim()) return []

  // Split by dots, but preserve empty strings for consecutive dots
  // Then filter out empty strings
  return path.split('.').filter(key => key !== '')
}

/**
 * Checks if a key is a numeric index (for arrays).
 */
function isNumericKey(key: string): boolean {
  return /^\d+$/.test(key)
}
