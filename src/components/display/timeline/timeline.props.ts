import type { TimelineDirection } from './timeline.types'

export interface TimelineConfigurableProps {
  /**
   * Layout direction of the timeline.
   * @default 'horizontal'
   */
  direction?: TimelineDirection

  /**
   * Forces all items to render on one side.
   * @default false
   */
  compact?: boolean

  /**
   * Snaps the middle icon to the start edge instead of centering it.
   * @default false
   */
  snapIcon?: boolean
}

export interface TimelineProps extends TimelineConfigurableProps {}
