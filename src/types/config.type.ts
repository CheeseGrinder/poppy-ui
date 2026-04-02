import type { ButtonConfigurableProps } from '@/components/actions/button/button.props'

export type InferOverrides<K extends string> = {
  [P in K]: true
}

export type * from '@/components/actions/button/button.types'
export interface PoppyComponentConfig {
  button: ButtonConfigurableProps
}
