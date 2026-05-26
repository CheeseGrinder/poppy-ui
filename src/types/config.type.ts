import type { ButtonConfigurableProps } from '@/components/actions/button/button.props'
import type { DropdownConfigurableProps } from '@/components/actions/dropdown/dropdown.props'
import type { ModalConfigurableProps } from '@/components/actions/modal/modal.props'
import type { BadgeConfigurableProps } from '@/components/display/badge/badge.props'

export type InferOverrides<K extends string> = {
  [P in K]: true
}

export type * from '@/components/actions/button/button.types'
export interface PoppyComponentConfig {
  // Actions
  button: ButtonConfigurableProps
  dropdown: DropdownConfigurableProps
  modal: ModalConfigurableProps

  // Display
  badge: BadgeConfigurableProps
}
