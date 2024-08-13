/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Cheese-grinder stencil Plugin.
 * It contains typing information for all configurable components that exist in this project.
 */
import type { BadgeAs, BadgeColor } from "./components/badge/badge.type";
import type { AutoCapitalize, Color, EnterKeyHint, Size } from "./interface.d";
import type { ButtonColor, ButtonExpand, ButtonShape } from "./components/button/button.type";
import type { CheckboxPlacement } from "./components/checkbox/checkbox.type";
import type { DividerColor, DividerOrientation, DividerPlacement } from "./components/divider/divider.type";
import type { TriggerAction } from "./utils/trigger";
import type { DrawerSide } from "./components/drawer/drawer.type";
import type { DropdownAlign, DropdownSide } from "./components/dropdown/dropdown.type";
import type { IndicatorPosition, IndicatorSide } from "./components/indicator/indicator.type";
import type { InputColor } from "./components/input/input.type";
import type { InputFileColor } from "./components/input-file/input-file.type";
import type { JoinOrientation } from "./components/join/join.type";
import type { ListOrientation } from "./components/list/list.type";
import type { LoadingType } from "./components/loading/loading.type";
import type { MaskType } from "./components/mask/mask.type";
import type { RadioGroupCompareFn } from "./components/radio-group/radio-group.type";
import type { RangeColor } from "./components/range/range.type";
import type { SelectColor, SelectCompareFn } from "./components/select/select.type";
import type { SwapType } from "./components/swap/swap.type";
import type { TextareaColor, Wrap } from "./components/textarea/textarea.type";
import type { ToggleColor } from "./components/toggle/toggle.type";
import type { TooltipPosition } from "./components/tooltip/tooltip.type";

export namespace Configuration {
  interface ComponentsConfig {
    'pop-accordion-group'?: {
      /**
       * If `true`, the user cannot interact with the element.
       */
      readonly?: boolean;
      /**
       * If `true`, the user cannot interact with the element.
       */
      disabled?: boolean;
      /**
       * If `true`, the user can open multiple accordion.
       */
      multiple?: boolean;
    };
    'pop-avatar'?: {
      /**
       * To show some letters as avatar placeholder
       */
      placeholder?: boolean;
    };
    'pop-badge'?: {
      /**
       * The color to use from your application's color palette.
       * Default options are: `"neutral"`, `"primary"`, `"secondary"`, `"accent"`, `"info"`, `"success"`, `"warning"`, `"error"`.
       * For more information on colors, see [theming](/docs/theming/basics).
       */
      color?: BadgeColor;
      /**
       * Change size of the component
       * Options are: `"xs"`, `"sm"`, `"md"`, `"lg"`.
       */
      size?: Size;
      /**
       * Transparent Badge with colored border
       */
      outlined?: boolean;
      /**
       * Used HTML element for
       */
      as?: BadgeAs;
    };
    'pop-button'?: {
      /**
       * If `true`, the user cannot interact with the element.
       */
      disabled?: boolean;
      /**
       * The color to use from your application's color palette.
       * Default options are: `"neutral"`, `"ghost"`, `"primary"`, `"secondary"`, `"accent"`, `"info"`, `"success"`, `"warning"`, `"error"`.
       * For more information on colors, see [theming](/docs/theming/basics).
       */
      color?: ButtonColor;
      /**
       * Change size of the component
       * Options are: `"xs"`, `"sm"`, `"md"`, `"lg"`.
       */
      size?: Size;
      /**
       * Transparent Button with colored border
       */
      outlined?: boolean;
      /**
       * `square` set button width and heigth with 1:1 ratio
       * `round` set button width and heigth with 1:1 ratio and rounded corners.
       */
      shape?: ButtonShape;
      /**
       * `wide` Add more horizontal padding
       * `block` make a full width button
       */
      expand?: ButtonExpand;
    };
    'pop-card'?: {
      /**
       * Applies smaller padding
       */
      compact?: boolean;
    };
    'pop-checkbox'?: {
      /**
       * If `true`, the user must fill in a value before submitting a form.
       */
      required?: boolean;
      /**
       * If `true`, the user cannot modify the value.
       */
      readonly?: boolean;
      /**
       * If `true`, the toggle is selected.
       */
      checked?: boolean;
      /**
       * If a developer want to use `indeterminate`, `checked` property should be set to `false`
       */
      indeterminate?: boolean;
      /**
       * If true, the user cannot interact with the native element.
       */
      disabled?: boolean;
      /**
       * The color to use from your application's color palette.
       * Default options are: `"primary"`, `"secondary"`, `"accent"`, `"info"`, `"success"`, `"warning"`, `"error"`.
       * For more information on colors, see [theming](/docs/theming/basics).
       */
      color?: Color;
      /**
       * Change size of the component
       * Options are: `"xs"`, `"sm"`, `"md"`, `"lg"`.
       */
      size?: Size;
      /**
       * Where to place the label relative to the checkbox.
       * - `"start"`: The label will appear to the left of the checkbox in LTR and to the right in RTL.
       * - `"end"`: The label will appear to the right of the checkbox in LTR and to the left in RTL.
       */
      placement?: CheckboxPlacement;
    };
    'pop-divider'?: {
      /**
       * Define content disposition orientation
       */
      orientation?: DividerOrientation;
      /**
       * Where to place the content.
       * - `"left"`: The content will appear to the left of the divider in LTR and RTL.
       * - `"start"`: The content will appear to the left of the divider in LTR and to the right in RTL.
       * - `"center"`: The content will appear to the center of the divider.
       * - `"end"`: The content will appear to the right of the divider in LTR and to the left in RTL.
       * - `"right"`: The content will appear to the right of the divider in LTR and RTL.
       */
      placement?: DividerPlacement;
      /**
       * The color to use from your application's color palette.
       * Default options are: `"primary"`, `"secondary"`, `"accent"`, `"neutral"`, `"info"`, `"success"`, `"warning"`, `"error"`.
       * For more information on colors, see [theming](/docs/theming/basics).
       */
      color?: DividerColor;
    };
    'pop-drawer'?: {
      /**
       * Describes what kind of interaction with the trigger that should
       * cause the sidebar to open. Does not apply when the `trigger` property is `undefined`.
       * - `"click"`: the sidebar will be presented when the trigger is left clicked.
       * - `"hover"`: the sidebar will be presented when a pointer hovers over the trigger.
       * - `"context-menu"`: the sidebar will be presented when the trigger is right
       * clicked on desktop and long pressed on mobile. This will also prevent your
       * device's normal context menu from appearing.
       */
      triggerAction?: TriggerAction;
      /**
       * Where to place the sidebar relative to the screen.
       * - `"start"`: The sidebar will appear to the left of the screen in LTR and to the right in RTL.
       * - `"end"`: The sidebar will appear to the right of the screen in LTR and to the left in RTL.
       */
      side?: DrawerSide;
      /**
       * Forces the drawer to be open
       */
      open?: boolean;
    };
    'pop-dropdown'?: {
      side?: DropdownSide;
      /**
       * Describes how the dropdown has to be alined
       * - "start": Align to the left in LTR and to the right in RTL.
       * - "end": Align to the right in LTR and to the left in RTL.
       */
      align?: DropdownAlign;
      /**
       * Force the dropdown to be shown
       */
      open?: boolean;
      /**
       * Describes what kind of intertion with the trigger (sloted element) that should cause the dropdown to open.
       * - `"click"`: the dropdown will be presented when the trigger is left clicked.
       * - `"hover"`: the dropdown will be presented when a pointer hovers over the trigger.
       * - `"context-menu"`: the dropdown will be presented when the trigger is right clicked on desktop and long pressed on mobile. This will also prevent your device's normal context menu from appearing.
       */
      triggerAction?: TriggerAction;
      /**
       * Set the amount of time, in milliseconds after the user no longer hover the trigger or dropdown, will dismiss.
       * Only apply on `triggerAction=hover`
       */
      debounce?: number;
      /**
       * If `true`, a backdrop will be displayed behind the modal.
       * This property controls whether or not the backdrop
       * darkens the screen when the modal is presented.
       */
      showBackdrop?: boolean;
    };
    'pop-indicator'?: {
      /**
       * Align horizontally the indicator.
       */
      side?: IndicatorSide;
      /**
       * Align vertically the indicator.
       */
      position?: IndicatorPosition;
    };
    'pop-input'?: {
      /**
       * The minimum value, which must not be greater than its maximum (max attribute) value.
       */
      min?: number;
      /**
       * The maximum value, which must not be less than its minimum (min attribute) value.
       */
      max?: number | string;
      /**
       * Works with the min and max attributes to limit the increments at which a value can be set.
       * Possible values are: `"any"` or a positive floating point number.
       */
      step?: string;
      /**
       * This attribute specifies the minimum number of characters that the user can enter.
       */
      minLength?: number;
      /**
       * This attribute specifies the maximum number of characters that the user can enter.
       */
      maxLength?: number;
      /**
       * If `true`, the user must fill in a value before submitting a form.
       */
      required?: boolean;
      /**
       * If `true`, the user cannot modify the value.
       */
      readonly?: boolean;
      /**
       * If `true`, the user cannot interact with the element.
       */
      disabled?: boolean;
      /**
       * If `true`, the element will be focused on page load.
       */
      autoFocus?: boolean;
      /**
       * A hint to the browser for which keyboard to display.
       * That specifies what action label (or icon) to present for the enter key on virtual keyboards.
       * - `enter`: Typically Inserting a new line.
       * - `done`: Typically meaning there is nothing more to input and the input method editor (IME) will be closed.
       * - `go`: Typically meaning to take the user to the target of the text they typed.
       * - `next`: Typically taking the user to the next field that will accept text.
       * - `previous`: Typically taking the user to the previous field that will accept text.
       * - `search`: Typically taking the user to the results of searching for the text they have typed.
       * - `send`: Typically delivering the text to its target.
       */
      enterkeyhint?: EnterKeyHint;
      /**
       * If `true`, the element will have its spelling and grammar checked.
       * By default the User Agent make their own default behavior.
       */
      spellcheck?: boolean;
      /**
       * This features work only on mobile and tablet devices.
       * By default the User Agent and input make their own determination.
       * - `off` or `none`: No autocapitalization is applied (all letters default to lowercase)
       * - `on` or `sentences`: The first letter of each sentence defaults to a capital letter; all other letters default to lowercase
       * - `words`: The first letter of each word defaults to a capital letter; all other letters default to lowercase
       * - `characters`: All letters should default to uppercase
       */
      autoCapitalize?: AutoCapitalize;
      /**
       * if `true`, adds border to textarea when `color` property is not set.
       */
      bordered?: boolean;
      /**
       * The color to use from your application's color palette.
       * Default options are: `"primary"`, `"secondary"`, `"accent"`, `"ghost"`, `"info"`, `"success"`, `"warning"`, `"error"`.
       * For more information on colors, see [theming](/docs/theming/basics).
       */
      color?: InputColor;
      /**
       * Change size of the component
       * Options are: `"xs"`, `"sm"`, `"md"`, `"lg"`.
       */
      size?: Size;
      /**
       * If `true`, a character counter will display the ratio of characters used and the total character limit.
       * Developers must also set the `maxlength` property for the counter to be calculated correctly.
       */
      counter?: boolean;
      /**
       * A callback used to format the counter text.
       * By default the counter text is set to "itemLength / maxLength".
       */
      counterFormatter?: (inputLength: number, maxLength: number) => string;
      /**
       * Set the amount of time, in milliseconds, to wait to trigger the ionInput event after each keystroke.
       */
      debounce?: number;
    };
    'pop-input-file'?: {
      /**
       * If `true`, the user can enter more than one value.
       * This attribute applies when the type attribute is set to `"email"`, otherwise it is ignored.
       */
      multiple?: boolean;
      /**
       * If `true`, the user must fill in a value before submitting a form.
       */
      required?: boolean;
      /**
       * If `true`, the user cannot modify the value.
       */
      readonly?: boolean;
      /**
       * If `true`, the user cannot interact with the element.
       */
      disabled?: boolean;
      /**
       * If `true`, the element will be focused on page load.
       */
      autoFocus?: boolean;
      /**
       * if `true`, adds border to textarea when `color` property is not set.
       */
      bordered?: boolean;
      /**
       * The color to use from your application's color palette.
       * Default options are: `"primary"`, `"secondary"`, `"accent"`, `"ghost"`, `"info"`, `"success"`, `"warning"`, `"error"`.
       * For more information on colors, see [theming](/docs/theming/basics).
       */
      color?: InputFileColor;
      /**
       * Change size of the component
       * Options are: `"xs"`, `"sm"`, `"md"`, `"lg"`.
       */
      size?: Size;
    };
    'pop-item'?: {
      /**
       * If `true`, the user cannot interact with the item.
       */
      disabled?: boolean;
    };
    'pop-join'?: {
      /**
       * Define content disposition orientation
       */
      orientation?: JoinOrientation;
    };
    'pop-kbd'?: {
      /**
       * Change size of the component
       * Options are: `"xs"`, `"sm"`, `"md"`, `"lg"`.
       */
      size?: Size;
    };
    'pop-list'?: {
      /**
       * Change size of the component
       * Options are: `"xs"`, `"sm"`, `"md"`, `"lg"`.
       */
      size?: Size;
      /**
       * Define content disposition orientation
       */
      orientation?: ListOrientation;
    };
    'pop-loading'?: {
      /**
       * Apply different animation
       */
      type?: LoadingType;
      /**
       * Change size of the component
       * Options are: `"xs"`, `"sm"`, `"md"`, `"lg"`.
       */
      size?: Size;
    };
    'pop-mask'?: {
      /**
       * Mask that should be applied
       */
      type?: MaskType;
    };
    'pop-modal'?: {
      /**
       * If `true`, a backdrop will be displayed behind the modal.
       * This property controls whether or not the backdrop
       * darkens the screen when the modal is presented.
       */
      showBackdrop?: boolean;
      /**
       * If `true`, the modal will be dismissed when the backdrop is clicked.
       */
      backdropDismiss?: boolean;
      /**
       * If `true`, the modal will open. If `false`, the modal will close.
       * Use this if you need finer grained control over presentation, otherwise
       * just use the modalController or the `trigger` property.
       * Note: `open` will automatically be set back to `false` when
       * the modal dismisses.
       */
      open?: boolean;
    };
    'pop-popover'?: {
      /**
       * If `true`, the popover will open. If `false`, the popover will close.
       * Use this if you need finer grained control over presentation, otherwise
       * just use the popoverController or the `trigger` property.
       * Note: `open` will not automatically be set back to `false` when
       * the popover dismisses. You will need to do that in your code.
       */
      open?: boolean;
      /**
       * If `true`, the popover will animate.
       */
      animated?: any;
      /**
       * If `true`, a backdrop will be displayed behind the popover.
       * This property controls whether or not the backdrop
       * darkens the screen when the popover is presented.
       * It does not control whether or not the backdrop
       * is active or present in the DOM.
       */
      showBackdrop?: boolean;
      /**
       * If `true`, the popover will be dismissed when the backdrop is clicked.
       */
      backdropDismiss?: boolean;
      /**
       * Describes what kind of interaction with the trigger that
       * should cause the popover to open. Does not apply when the `trigger`
       * property is `undefined`.
       * If `"click"`, the popover will be presented when the trigger is left clicked.
       * If `"hover"`, the popover will be presented when a pointer hovers over the trigger.
       * If `"context-menu"`, the popover will be presented when the trigger is right
       * clicked on desktop and long pressed on mobile. This will also prevent your
       * device's normal context menu from appearing.
       */
      triggerAction?: TriggerAction;
    };
    'pop-progress'?: {
      max?: number;
      /**
       * The color to use from your application's color palette.
       * Default options are: `"primary"`, `"secondary"`, `"accent"`, `"info"`, `"success"`, `"warning"`, `"error"`.
       * For more information on colors, see [theming](/docs/theming/basics).
       */
      color?: Color;
    };
    'pop-radio'?: {
      /**
       * If `true`, the user must fill in a value before submitting a form.
       */
      required?: boolean;
      /**
       * If `true`, the user cannot interact with the element.
       */
      disabled?: boolean;
      /**
       * The color to use from your application's color palette.
       * Default options are: `"primary"`, `"secondary"`, `"accent"`, `"info"`, `"success"`, `"warning"`, `"error"`.
       * For more information on colors, see [theming](/docs/theming/basics).
       */
      color?: Color;
      /**
       * Change size of the component
       * Options are: `"xs"`, `"sm"`, `"md"`, `"lg"`.
       */
      size?: Size;
    };
    'pop-radio-group'?: {
      /**
       * If `true`, apply the required property to all `pop-radio`.
       */
      required?: boolean;
      /**
       * If `true`, apply the disabled property to all `pop-radio`.
       */
      disabled?: boolean;
      /**
       * If `true`, the radios can be deselected.
       */
      allowEmpty?: boolean;
      /**
       * This property allows developers to specify a custom function
       * for comparing objects when determining the selected option in the
       * ion-radio-group. When not specified, the default behavior will use strict
       * equality (===) for comparison.
       */
      compare?: RadioGroupCompareFn | string | null;
      /**
       * The color to use from your application's color palette.
       * Default options are: `"primary"`, `"secondary"`, `"accent"`, `"info"`, `"success"`, `"warning"`, `"error"`.
       * For more information on colors, see [theming](/docs/theming/basics).
       * If the `pop-radio` as no color, it will apply to it
       */
      color?: Color;
      /**
       * Change size of the component
       * Options are: `"xs"`, `"sm"`, `"md"`, `"lg"`.
       * If the `pop-radio` as no size, it will apply to it
       */
      size?: Size;
    };
    'pop-range'?: {
      /**
       * The minimum value, which must not be greater than its maximum (max attribute) value.
       */
      min?: number;
      /**
       * The maximum value, which must not be less than its minimum (min attribute) value.
       */
      max?: number;
      /**
       * Works with the min and max attributes to limit the increments at which a value can be set.
       */
      step?: number;
      /**
       * If `true`, the user must fill in a value before submitting a form.
       */
      required?: boolean;
      /**
       * If `true`, the user cannot interact with the element.
       */
      disabled?: boolean;
      /**
       * The color to use from your application's color palette.
       * Default options are: `"primary"`, `"secondary"`, `"accent"`, `"ghost"`, `"info"`, `"success"`, `"warning"`, `"error"`.
       * For more information on colors, see [theming](/docs/theming/basics).
       */
      color?: RangeColor;
      /**
       * Change size of the component
       * Options are: `"xs"`, `"sm"`, `"md"`, `"lg"`.
       */
      size?: Size;
      /**
       * Set the amount of time, in milliseconds, to wait to trigger the ionInput event after each keystroke.
       */
      debounce?: number;
    };
    'pop-select'?: {
      /**
       * If `true`, the user can enter more than one value.
       */
      multiple?: boolean;
      /**
       * Only apply when `multiple` property is used.
       * The minimum amount of values that can be selected, which must not be greater than its maximum (max attribute) value.
       */
      min?: number;
      /**
       * Only apply when `multiple` property is used.
       * The maximum amount of values that can be selected, which must not be less than its minimum (min attribute) value.
       */
      max?: number;
      /**
       * If `true`, the user must fill in a value before submitting a form.
       */
      required?: boolean;
      /**
       * If `true`, the user cannot interact with the element.
       */
      disabled?: boolean;
      /**
       * if `true`, adds border to textarea when `color` property is not set.
       */
      bordered?: boolean;
      /**
       * The color to use from your application's color palette.
       * Default options are: `"primary"`, `"secondary"`, `"accent"`, `"ghost"`, `"info"`, `"success"`, `"warning"`, `"error"`.
       * For more information on colors, see [theming](/docs/theming/basics).
       */
      color?: SelectColor;
      /**
       * Change size of the component
       * Options are: `"xs"`, `"sm"`, `"md"`, `"lg"`.
       */
      size?: Size;
      /**
       * This property allows developers to specify a custom function
       * for comparing objects when determining the selected option in the
       * ion-radio-group. When not specified, the default behavior will use strict
       * equality (===) for comparison.
       */
      compare?: SelectCompareFn | string | null;
    };
    'pop-swap'?: {
      /**
       * Choose what animation is used on click.
       */
      type?: SwapType;
      /**
       * Activates the swap.
       * Show whats inside the slot `on`
       */
      active?: boolean;
    };
    'pop-textarea'?: {
      /**
       * This attribute specifies the minimum number of characters that the user can enter.
       */
      minLength?: number;
      /**
       * This attribute specifies the maximum number of characters that the user can enter.
       */
      maxLength?: number;
      /**
       * The visible width of the text control, in average character widths.
       * If it is specified, it must be a positive integer.
       */
      cols?: number;
      /**
       * The number of visible text lines for the control.
       */
      rows?: number;
      /**
       * If `true`, the user must fill in a value before submitting a form.
       */
      required?: boolean;
      /**
       * If `true`, the user cannot modify the value.
       */
      readonly?: boolean;
      /**
       * If `true`, the user cannot interact with the element.
       */
      disabled?: boolean;
      /**
       * If `true`, the element will have its spelling and grammar checked.
       * By default the User Agent make their own default behavior.
       */
      spellcheck?: boolean;
      /**
       * This features work only on mobile and tablet devices.
       * By default the User Agent and input make their own determination.
       * - `off` or `none`: No autocapitalization is applied (all letters default to lowercase)
       * - `on` or `sentences`: The first letter of each sentence defaults to a capital letter; all other letters default to lowercase
       * - `words`: The first letter of each word defaults to a capital letter; all other letters default to lowercase
       * - `characters`: All letters should default to uppercase
       */
      autoCapitalize?: AutoCapitalize;
      /**
       * Indicates how the control wraps text.
       * - `soft`: Text is not to be wrapped when submitted (though can still be wrapped in the rendering).
       * - `hard`: Text is to have newlines added by the user agent so that the text is wrapped when it is submitted.
       * If wrap attribute is in the `hard` state, the `cols` property must be specified.
       */
      wrap?: Wrap;
      /**
       * if `true`, adds border to textarea when `color` property is not set.
       */
      bordered?: boolean;
      /**
       * The color to use from your application's color palette.
       * Default options are: `"primary"`, `"secondary"`, `"accent"`, `"ghost"`, `"info"`, `"success"`, `"warning"`, `"error"`.
       * For more information on colors, see [theming](/docs/theming/basics).
       */
      color?: TextareaColor;
      /**
       * Change size of the component
       * Options are: `"xs"`, `"sm"`, `"md"`, `"lg"`.
       */
      size?: Size;
      /**
       * If `true`, a character counter will display the ratio of characters used and the total character limit.
       * Developers must also set the `maxlength` property for the counter to be calculated correctly.
       */
      counter?: boolean;
      /**
       * A callback used to format the counter text.
       * By default the counter text is set to "itemLength / maxLength".
       */
      counterFormatter?: (inputLength: number, maxLength: number) => string;
      /**
       * Set the amount of time, in milliseconds, to wait to trigger the ionInput event after each keystroke.
       */
      debounce?: number;
    };
    'pop-toggle'?: {
      /**
       * If `true`, the user must fill in a value before submitting a form.
       */
      required?: boolean;
      /**
       * If `true`, the user cannot modify the value.
       */
      readonly?: boolean;
      /**
       * If `true`, the toggle is selected.
       */
      checked?: boolean;
      /**
       * If a developer want to use `indeterminate`, `checked` property should be set to `false`
       */
      indeterminate?: boolean;
      /**
       * If true, the user cannot interact with the native element.
       */
      disabled?: boolean;
      /**
       * The color to use from your application's color palette.
       * Default options are: `"primary"`, `"secondary"`, `"accent"`, `"ghost"`, `"info"`, `"success"`, `"warning"`, `"error"`.
       * For more information on colors, see [theming](/docs/theming/basics).
       */
      color?: ToggleColor;
      /**
       * Change size of the component
       * Options are: `"xs"`, `"sm"`, `"md"`, `"lg"`.
       */
      size?: Size;
    };
    'pop-tooltip'?: {
      /**
       * The color to use from your application's color palette.
       * Default options are: `"primary"`, `"secondary"`, `"accent"`, `"info"`, `"success"`, `"warning"`, `"error"`.
       * For more information on colors, see [theming](/docs/theming/basics).
       */
      color?: Color;
      /**
       * Define the position of tooltip
       * By default the tootip appear on top
       */
      position?: TooltipPosition;
      /**
       * Force open tooltip
       */
      open?: boolean;
    };
  }
}