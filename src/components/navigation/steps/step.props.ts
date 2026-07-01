import type { StepColor } from './step.types'

export interface StepConfigurableProps {
  /**
   * Color applied when the step is active or completed.
   */
  color?: StepColor
}

export interface StepProps extends StepConfigurableProps {
  /**
   * Marks the step as accessible (reachable) but not yet completed.
   * Renders the indicator with the `color` at reduced opacity, distinct from
   * the fully filled active/done state.
   *
   * @default false
   */
  highlighted?: boolean

  /**
   * Custom content displayed inside the step indicator circle.
   * Overrides the default auto-incrementing counter.
   *
   * @example '✓' or '!'
   */
  content?: string
}
