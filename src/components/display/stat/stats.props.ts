import type { StatsDirection } from './stats.types'

export interface StatsConfigurableProps {
  /**
   * Direction of the stats container.
   * @default 'horizontal'
   */
  direction?: StatsDirection
}

export interface StatsProps extends StatsConfigurableProps {}
