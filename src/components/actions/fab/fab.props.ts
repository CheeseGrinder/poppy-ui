import type { FabMode } from './fab.types'

export interface FabConfigurableProps {
  /**
   * Visual style for FAB opening animation.
   * - `'flower'`: Actions open in a flower/radial pattern.
   */
  mode?: FabMode
}

export interface FabProps extends FabConfigurableProps {}
