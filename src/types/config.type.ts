import type { ButtonConfigurableProps } from '@/components/actions/button/button.props'
import type { DropdownConfigurableProps } from '@/components/actions/dropdown/dropdown.props'
import type { FabConfigurableProps } from '@/components/actions/fab/fab.props'
import type { ModalConfigurableProps } from '@/components/actions/modal/modal.props'
import type { CheckboxConfigurableProps } from '@/components/data/checkbox/checkbox.props'
import type { FormConfigurableProps } from '@/components/data/form/form.props'
import type { FormFieldConfigurableProps } from '@/components/data/form-field/form-field.props'
import type { InputConfigurableProps } from '@/components/data/input/input.props'
import type { RadioConfigurableProps } from '@/components/data/radio/radio.props'
import type { RatingConfigurableProps } from '@/components/data/rating/rating.props'
import type { TextareaConfigurableProps } from '@/components/data/textarea/textarea.props'
import type { ToggleConfigurableProps } from '@/components/data/toggle/toggle.props'
import type { AccordionItemConfigurableProps } from '@/components/display/accordion/accordion-item.props'
import type { AvatarConfigurableProps } from '@/components/display/avatar/avatar.props'
import type { BadgeConfigurableProps } from '@/components/display/badge/badge.props'
import type { CardConfigurableProps } from '@/components/display/card/card.props'
import type { CardActionsConfigurableProps } from '@/components/display/card/card-actions.props'
import type { CarouselConfigurableProps } from '@/components/display/carousel/carousel.props'
import type { ChatConfigurableProps } from '@/components/display/chat/chat.props'
import type { KbdConfigurableProps } from '@/components/display/kbd/kbd.props'
import type { StatusConfigurableProps } from '@/components/display/status/status.props'
import type { AlertConfigurableProps } from '@/components/feedback/alert/alert.props'
import type { LoadingConfigurableProps } from '@/components/feedback/loading/loading.props'
import type { ProgressConfigurableProps } from '@/components/feedback/progress/progress.props'
import type { RadialProgressConfigurableProps } from '@/components/feedback/radial-progress/radial-progress.props'
import type { ToastConfigurableProps } from '@/components/feedback/toast/toast.props'
import type { TooltipConfigurableProps } from '@/components/feedback/tooltip/tooltip.props'
import type { DividerConfigurableProps } from '@/components/layout/divider/divider.props'
import type { DrawerConfigurableProps } from '@/components/layout/drawer/drawer.props'
import type { IndicatorConfigurableProps } from '@/components/layout/indicator/indicator.props'
import type { JoinConfigurableProps } from '@/components/layout/join/join.props'
import type { MaskConfigurableProps } from '@/components/layout/mask/mask.props'
import type { StackConfigurableProps } from '@/components/layout/stack/stack.props'
import type { BreadcrumbsConfigurableProps } from '@/components/navigation/breadcrumbs/breadcrumbs.props'
import type { DockConfigurableProps, DockItemConfigurableProps } from '@/components/navigation/dock/dock.props'
import type { LinkConfigurableProps } from '@/components/navigation/link/link.props'
import type { MenuConfigurableProps, MenuItemConfigurableProps } from '@/components/navigation/menu/menu.props'

export interface PoppyComponentConfig {
  // Actions
  button: ButtonConfigurableProps
  dropdown: DropdownConfigurableProps
  fab: FabConfigurableProps
  modal: ModalConfigurableProps

  // Data
  checkbox: CheckboxConfigurableProps
  form: FormConfigurableProps
  formField: FormFieldConfigurableProps
  radio: RadioConfigurableProps
  rating: RatingConfigurableProps
  input: InputConfigurableProps
  textarea: TextareaConfigurableProps
  toggle: ToggleConfigurableProps

  // Display
  accordionItem: AccordionItemConfigurableProps
  avatar: AvatarConfigurableProps
  badge: BadgeConfigurableProps
  card: CardConfigurableProps
  cardActions: CardActionsConfigurableProps
  carousel: CarouselConfigurableProps
  chat: ChatConfigurableProps
  kbd: KbdConfigurableProps
  status: StatusConfigurableProps

  // Feedback
  alert: AlertConfigurableProps
  loading: LoadingConfigurableProps
  progress: ProgressConfigurableProps
  radialProgress: RadialProgressConfigurableProps
  toast: ToastConfigurableProps
  tooltip: TooltipConfigurableProps

  // Layout
  divider: DividerConfigurableProps
  drawer: DrawerConfigurableProps
  indicator: IndicatorConfigurableProps
  join: JoinConfigurableProps
  mask: MaskConfigurableProps
  stack: StackConfigurableProps

  // Navigation
  breadcrumbs: BreadcrumbsConfigurableProps
  dock: DockConfigurableProps
  dockItem: DockItemConfigurableProps
  link: LinkConfigurableProps
  menu: MenuConfigurableProps
  menuItem: MenuItemConfigurableProps
}
