import { componentConfig, config } from '#config';
import { compareOptions, isOptionSelected } from '#utils/forms';
import { Attributes, hostContext, inheritAttributes } from '#utils/helpers';
import { popoverController } from '#utils/overlay';
import {
  AttachInternals,
  Component,
  ComponentInterface,
  Element,
  Event,
  EventEmitter,
  Host,
  Method,
  Prop,
  State,
  Watch,
  h,
} from '@stencil/core';
import type { FormAssociatedInterface, Size } from 'src/interface';
import { ChevronDown } from '../ChevronDown';
import { Show } from '../Show';
import { SelectPopoverOption } from '../select-popover/select-popover.type';
import type { SelectChangeEventDetail, SelectColor, SelectCompareFn } from './select.type';

@Component({
  tag: 'pop-select',
  styleUrl: 'select.scss',
  shadow: true,
  formAssociated: true,
})
export class Select implements ComponentInterface, FormAssociatedInterface {
  private inputId = `pop-select-${selectIds++}`;
  private inheritedAttributes: Attributes;

  private popover: HTMLPopPopoverElement;
  private trigger: HTMLButtonElement;

  @Element() host!: HTMLElement;
  @AttachInternals() internals: ElementInternals;

  @State() isExpanded: boolean = false;

  @State() errorText: string;

  /**
   * The name of the control, which is submitted with the form data.
   */
  @Prop() name: string = this.inputId;

  /**
   * Instructional text that shows before the input has a value.
   *
   * This property replace the `<option disabled selected>`
   */
  @Prop() placeholder?: string;

  /**
   * The value of a select is analogous to the value of a `<select>`,
   * it's only used when the toggle participates in a native `<form>`.
   */
  @Prop({ mutable: true }) value?: any | null;
  @Watch('value')
  onValueChange(value: any) {
    this.errorText = this.errorTextValue;
    if (this.errorText) {
      // No emit if the select has error.
      return;
    }

    this.internals.setFormValue(value, value);
    this.popChange.emit({ value });
  }

  /**
   * If `true`, the user can enter more than one value.
   *
   * @config
   * @default false
   */
  @Prop({ reflect: true, mutable: true }) multiple?: boolean;

  /**
   * Only apply when `multiple` property is used.
   * The minimum amount of values that can be selected, which must not be greater than its maximum (max attribute) value.
   *
   * @config
   */
  @Prop({ reflect: true, mutable: true }) min?: number;

  /**
   * Only apply when `multiple` property is used.
   * The maximum amount of values that can be selected, which must not be less than its minimum (min attribute) value.
   *
   * @config
   */
  @Prop({ reflect: true, mutable: true }) max?: number;

  /**
   * If `true`, the user must fill in a value before submitting a form.
   *
   * @config
   * @default false
   */
  @Prop({ reflect: true, mutable: true }) required?: boolean;

  /**
   * If `true`, the user cannot interact with the element.
   *
   * @config
   * @default false
   */
  @Prop({ reflect: true, mutable: true }) disabled?: boolean;

  /**
   * If `true`, the element will be focused on page load.
   */
  @Prop({ reflect: true, mutable: true }) autoFocus?: boolean = false;

  /**
   * if `true`, adds border to textarea when `color` property is not set.
   *
   * @config
   * @default false
   */
  @Prop({ reflect: true, mutable: true }) bordered?: boolean;

  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"accent"`, `"ghost"`, `"info"`, `"success"`, `"warning"`, `"error"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   *
   * @config
   */
  @Prop({ reflect: true, mutable: true }) color?: SelectColor;

  /**
   * Change size of the component
   * Options are: `"xs"`, `"sm"`, `"md"`, `"lg"`.
   *
   * @config
   * @default "md"
   */
  @Prop({ reflect: true, mutable: true }) size?: Size;

  /**
   * The text to display instead of the selected option's value.
   */
  @Prop() selectedText?: string;

  /**
   * Text that is placed under the textarea and displayed when no error is detected.
   */
  @Prop() helperText?: string;

  /**
   * Only apply when `multiple` property is used.
   * Text that is placed under the select and displayed when the amount of selected option is below of the `min` property.
   */
  @Prop() notEnoughErrorText?: string;

  /**
   * Only apply when `multiple` property is used.
   * Text that is placed under the select and displayed when the amount of selected option is greater of the `max` property.
   */
  @Prop() tooManyErrorText?: string;

  /**
   * This property allows developers to specify a custom function
   * for comparing objects when determining the selected option in the
   * ion-radio-group. When not specified, the default behavior will use strict
   * equality (===) for comparison.
   *
   * @config
   */
  @Prop({ mutable: true }) compare?: SelectCompareFn | string | null;

  /**
   * Emitted when the overlay is dismissed.
   */
  @Event() popDismiss: EventEmitter<void>;

  /**
   * The `popChange` event is fired when the user modifies the select's value.
   * Unlike the ionInput event, the `popChange` event is fired when the element loses focus after its value has been modified.
   */
  @Event() popChange: EventEmitter<SelectChangeEventDetail>;

  /**
   * Emitted when the input has focus.
   */
  @Event() popFocus: EventEmitter<void>;

  /**
   * Emitted when the input loses focus.
   */
  @Event() popBlur: EventEmitter<void>;

  formResetCallback(): void {
    this.value = null;
  }

  formStateRestoreCallback(state: any) {
    this.value = state;
  }

  componentWillLoad(): void {
    this.inheritedAttributes = inheritAttributes(this.host, ['aria-label']);

    componentConfig.apply(this, 'pop-select', {
      multiple: false,
      required: false,
      disabled: false,
      bordered: false,
      size: config.get('defaultSize', 'md'),
    });
  }

  /**
   * Sets focus on the native `select` in `pop-select`. Use this method instead of the global
   * `select.focus()`.
   */
  @Method()
  async setFocus(): Promise<void> {
    this.trigger.focus();
  }

  @Method()
  async open(event?: any) {
    if (this.disabled || this.isExpanded || this.popover) return;

    this.isExpanded = true;
    const selectedValue = this.value;

    const popover = await popoverController.create({
      component: 'pop-select-popover',
      componentProps: {
        value: this.values,
        required: this.required,
        multiple: this.multiple,
        color: this.color,
        size: this.size,
        options: this.options.map(option => {
          const value = getOptionValue(option);
          const clazz = Array.from(option.classList).filter(cls => cls !== 'hydrated');

          return {
            text: option.textContent || '',
            value: value,
            checked: isOptionSelected(selectedValue, value, this.compare),
            disabled: option.disabled,
            color: option.color,
            size: option.size,
            cssClass: [OPTION_CLASS, ...clazz],
            handler: value => {
              this.value = value;
              if (!this.multiple) {
                this.close();
              }
            },
          } as SelectPopoverOption;
        }),
      },
      size: this.size,
      dismissOnSelect: !this.multiple,
      animated: true,
      backdropDismiss: true,
      showBackdrop: false,
      keyboardClose: true,
      reference: event ? 'event' : 'trigger',
      alignment: 'center',
      event: event,
    });
    this.popover = popover;

    popover.addEventListener('didDismiss', () => {
      this.popover = undefined;
      this.isExpanded = false;
      this.popDismiss.emit();
      this.setFocus();
    });

    await popover.present();

    const indexOfSelected = this.options.map(o => o.value).indexOf(this.value);
    if (indexOfSelected === -1) {
      /**
       * If no value is set then focus the first enabled option.
       */
      const firstEnabledOption = popover.querySelector<HTMLElement>(
        'pop-radio:not([disabled]), pop-checkbox:not([disabled])',
      );
      if (firstEnabledOption) {
        firstEnabledOption.closest('pop-item')?.focus();

        /**
         * Focus the option for the same reason as we do above.
         */
        firstEnabledOption.focus();
      }
    } else {
      const selectedItem = popover.querySelector<HTMLElement>(
        `.select-interface-option:nth-child(${indexOfSelected + 1})`,
      );
      if (selectedItem) {
        selectedItem.focus();

        const interactiveEl = selectedItem.querySelector<HTMLElement>('pop-radio, pop-checkbox');
        if (interactiveEl) {
          interactiveEl.focus();
        }
      }
    }

    return popover;
  }

  @Method()
  async close(): Promise<void> {
    if (this.disabled || !this.isExpanded) return;

    this.isExpanded = false;
    this.popover.dismiss();
  }

  private onFocus = () => {
    this.popFocus.emit();
  };

  private onBlur = () => {
    this.popBlur.emit();
  };

  private onClick = async (ev: PointerEvent) => {
    await this.open({
      ...ev,
      target: this.trigger,
    });
  };

  private get values(): any[] {
    const { value } = this;
    if (!value) return [];

    return Array.isArray(value) ? value : [value];
  }

  private get options() {
    return Array.from(this.host.querySelectorAll('pop-select-option'));
  }

  private get text(): string {
    const selectedText = this.selectedText;
    if (selectedText) {
      return selectedText;
    }

    const values = this.values;

    if (values.length === 0) {
      return '';
    }
    return values
      .map(value => {
        const selected = this.options.find(option => {
          const optionValue = option.value ?? (option.textContent || '');
          return compareOptions(value, optionValue, this.compare);
        });
        return selected ? selected.textContent : null;
      })
      .filter(Boolean)
      .join(', ');
  }

  private get ariaLabel(): string {
    const { placeholder } = this;
    const displayValue = this.text;
    const definedLabel = this.inheritedAttributes['aria-label'];

    /**
     * If developer has specified a placeholder
     * and there is nothing selected, the selectText
     * should have the placeholder value.
     */
    let renderedLabel = displayValue;
    if (renderedLabel === '' && placeholder !== undefined) {
      renderedLabel = placeholder;
    }

    /**
     * If there is a developer-defined label,
     * then we need to concatenate the developer label
     * string with the current current value.
     * The label for the control should be read
     * before the values of the control.
     */
    if (definedLabel !== undefined) {
      renderedLabel = renderedLabel === '' ? definedLabel : `${definedLabel}, ${renderedLabel}`;
    }

    return renderedLabel;
  }

  private get errorTextValue(): string {
    if (!this.multiple) return '';

    const { length } = this.values;
    if (length === 0 && !this.required) return '';
    if (length < this.min) return this.notEnoughErrorText ?? '';
    if (length > this.max) return this.tooManyErrorText ?? '';
    return '';
  }

  private renderSelectText() {
    const { placeholder } = this;
    const displayValue = this.text;

    let addPlaceholderClass = false;
    let selectText = displayValue;
    if (selectText === '' && placeholder !== undefined) {
      selectText = placeholder;
      addPlaceholderClass = true;
    }

    const textPart = addPlaceholderClass ? 'placeholder' : 'text';

    return (
      <div aria-hidden="true" class={{ 'select-placeholder': addPlaceholderClass }} part={textPart}>
        {selectText}
      </div>
    );
  }

  private renderListbox() {
    const { disabled, isExpanded, inputId } = this;

    return (
      <button
        disabled={disabled}
        id={inputId}
        aria-label={this.ariaLabel}
        aria-haspopup="dialog"
        aria-expanded={`${isExpanded}`}
        onClick={this.onClick}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        ref={ref => (this.trigger = ref)}
      ></button>
    );
  }

  render() {
    const { host, helperText, errorText, inputId } = this;

    const hasError = !!errorText;
    const hasHelper = !!helperText;
    const hasBottomText = hasError || hasHelper;

    return (
      <Host
        aria-labelledby={inputId}
        aria-hidden={this.disabled ? 'true' : null}
        class={{
          'select-expanded': this.isExpanded,
          'join-item': hostContext(host, 'pop-join'),
        }}
      >
        <div class="label-text-wrapper">
          <label htmlFor={inputId} part="label">
            <slot name="label" />
          </label>
        </div>

        <div class="select-wrapper">
          <slot name="start" />

          <div class="select-wrapper-inner">
            {this.renderSelectText()}
            {this.renderListbox()}
          </div>

          <slot name="end" />

          <ChevronDown />
        </div>

        <Show when={hasBottomText}>
          <div class="text-wrapper">
            <Show when={hasError}>
              <span class="error-text">{errorText}</span>
            </Show>
            <Show when={hasHelper}>
              <span class="helper-text">{helperText}</span>
            </Show>
          </div>
        </Show>
      </Host>
    );
  }
}

const getOptionValue = (el: HTMLPopSelectOptionElement) => {
  const value = el.value;
  return value === undefined ? el.textContent || '' : value;
};

let selectIds = 0;

const OPTION_CLASS = 'select-interface-option';
