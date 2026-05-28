import type { ButtonConfigurableProps } from '@/components/actions/button/button.props'
import type { DropdownConfigurableProps } from '@/components/actions/dropdown/dropdown.props'
import type { ModalConfigurableProps } from '@/components/actions/modal/modal.props'
import type { AccordionItemConfigurableProps } from '@/components/display/accordion/accordion-item.props'
import type { BadgeConfigurableProps } from '@/components/display/badge/badge.props'
import type { CardConfigurableProps } from '@/components/display/card/card.props'
import type { CardActionsConfigurableProps } from '@/components/display/card/card-actions.props'
import type { KbdConfigurableProps } from '@/components/display/kbd/kbd.props'
import type { StatusConfigurableProps } from '@/components/display/status/status.props'
import type { AlertConfigurableProps } from '@/components/feedback/alert/alert.props'
import type { LoadingConfigurableProps } from '@/components/feedback/loading/loading.props'
import type { ToastConfigurableProps } from '@/components/feedback/toast/toast.props'
import type { TooltipConfigurableProps } from '@/components/feedback/tooltip/tooltip.props'

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
  kbd: KbdConfigurableProps
  status: StatusConfigurableProps

  // Feedback
  alert: AlertConfigurableProps
  loading: LoadingConfigurableProps
  toast: ToastConfigurableProps
  tooltip: TooltipConfigurableProps
}
