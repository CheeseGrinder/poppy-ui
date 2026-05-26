import type { ButtonConfigurableProps } from '@/components/actions/button/button.props'
import type { DropdownConfigurableProps } from '@/components/actions/dropdown/dropdown.props'
import type { ModalConfigurableProps } from '@/components/actions/modal/modal.props'

export type InferOverrides<K extends string> = {
  [P in K]: true
}

export type * from '@/components/actions/button/button.types'
export interface PoppyComponentConfig {
  button: ButtonConfigurableProps
  dropdown: DropdownConfigurableProps
  modal: ModalConfigurableProps
}
