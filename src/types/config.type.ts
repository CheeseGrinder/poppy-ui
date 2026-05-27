import type { ButtonConfigurableProps } from '@/components/actions/button/button.props'
import type { DropdownConfigurableProps } from '@/components/actions/dropdown/dropdown.props'
import type { ModalConfigurableProps } from '@/components/actions/modal/modal.props'
import type { AccordionItemConfigurableProps } from '@/components/display/accordion/accordion-item.props'
import type { BadgeConfigurableProps } from '@/components/display/badge/badge.props'
import type { CardActionsConfigurableProps } from '@/components/display/card/card-actions.props'
import type { CardConfigurableProps } from '@/components/display/card/card.props'
import type { AlertConfigurableProps } from '@/components/feedback/alert/alert.props'
import type { LoadingConfigurableProps } from '@/components/feedback/loading/loading.props'

export interface PoppyComponentConfig {
  // Actions
  button: ButtonConfigurableProps
  dropdown: DropdownConfigurableProps
  modal: ModalConfigurableProps

  // Display
  accordionItem: AccordionItemConfigurableProps
  badge: BadgeConfigurableProps
  card: CardConfigurableProps
  cardActions: CardActionsConfigurableProps

  // Feedback
  alert: AlertConfigurableProps
  loading: LoadingConfigurableProps
}
