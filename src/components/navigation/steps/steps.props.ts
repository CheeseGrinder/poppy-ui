import type { StepsDirection } from './steps.types'

export interface StepsConfigurableProps {
  /**
   * Layout direction of the steps.
   * @default 'horizontal'
   */
  direction?: StepsDirection
}

export interface StepsProps extends StepsConfigurableProps {}
