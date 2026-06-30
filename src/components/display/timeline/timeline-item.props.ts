import type { TimelineItemColor, TimelineItemSide } from './timeline-item.types'

export interface TimelineItemConfigurableProps {
  /**
   * Color applied to the dot background. The icon inherits the matching content color.
   */
  color?: TimelineItemColor

  /**
   * Adds `timeline-box` style to the container that holds `title` and `description`.
   * @default false
   */
  box?: boolean

  /**
   * Controls which side the main content (title + description) appears on.
   * When set, all content (including `time`) is placed on that side.
   * When omitted, `time` goes to the opposite side of the dot and
   * `title`/`description` go to the end side.
   */
  side?: TimelineItemSide

  /**
   * Additional class(es) applied to the `timeline-middle` div (the dot container).
   */
  dotClass?: string
}

export interface TimelineItemProps extends TimelineItemConfigurableProps {
  /**
   * Timestamp or date label displayed on the side opposite to the main content
   * (or on the same side when `side` is set).
   */
  time?: string

  /**
   * Main title of the event.
   */
  title?: string

  /**
   * Description or body text of the event.
   */
  description?: string

  /**
   * Marks this item as completed. Colors the outgoing connector with the item's `color`.
   * @default false
   */
  checked?: boolean

  /**
   * Additional class(es) applied to the `timeline-start` div.
   * Useful for snap-icon layout spacing (e.g. `mb-10 md:text-end`).
   */
  startClass?: string

  /**
   * Additional class(es) applied to the `timeline-end` div.
   * Useful for snap-icon layout spacing (e.g. `md:mb-10`).
   */
  endClass?: string
}
