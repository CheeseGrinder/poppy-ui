/**
 * Supported input types for the countdown target date.
 * - `Date`: native JS Date object
 * - `string`: ISO 8601 string (e.g. `'2026-12-31T23:59:59'`)
 * - `number`: Unix timestamp in milliseconds
 * - Temporal types: `Temporal.Instant`, `Temporal.ZonedDateTime`, `Temporal.PlainDateTime`
 *   (TC39 Temporal API — available natively in modern browsers or via `@js-temporal/polyfill`)
 */
export type CountdownTarget = Date | string | number | object

export type CountdownDelta = {
  days: number
  hours: number
  minutes: number
  seconds: number
  done: boolean
}

export type CountdownEmits = {
  /**
   * Emitted once when the countdown reaches zero.
   */
  end: []
}
