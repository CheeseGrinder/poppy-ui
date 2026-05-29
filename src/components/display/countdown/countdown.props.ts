import type { CountdownTarget } from './countdown.types'

export interface CountdownProps {
  /**
   * Target date/time to count down to.
   *
   * Accepts:
   * - `Date` — native JS Date object
   * - `string` — ISO 8601 string (e.g. `'2026-12-31T23:59:59'`)
   * - `number` — Unix timestamp in milliseconds
   * - `Temporal.Instant` — TC39 Temporal API
   * - `Temporal.ZonedDateTime` — TC39 Temporal API
   * - `Temporal.PlainDateTime` — TC39 Temporal API (assumed local timezone)
   */
  to: CountdownTarget

  /**
   * Minimum number of digits displayed per value.
   * `2` forces `05` instead of `5`.
   *
   * @default 2
   */
  digits?: 1 | 2 | 3
}
