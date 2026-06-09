import type { StatAlign } from './stat.types'

export interface StatConfigurableProps {
  /**
   * Alignment of the stat content.
   */
  align?: StatAlign

  /**
   * Custom class for the title.
   */
  titleClass?: string

  /**
   * Custom class for the value.
   */
  valueClass?: string

  /**
   * Custom class for the description.
   */
  descClass?: string

  /**
   * Custom class for the figure container.
   */
  figureClass?: string

  /**
   * Custom class for the actions container.
   */
  actionsClass?: string
}

export interface StatProps extends StatConfigurableProps {
  /**
   * Title of the stat.
   */
  title?: string

  /**
   * Value displayed in the stat.
   */
  value?: string | number

  /**
   * Description text for the stat.
   */
  desc?: string
}
