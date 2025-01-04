import {
  AttachInternals,
  Component,
  type ComponentInterface,
  Element,
  Event,
  type EventEmitter,
  Fragment,
  Host,
  Method,
  Prop,
  State,
  Watch,
  h,
} from '@stencil/core';
import { ENTER, ESC, SPACE } from 'key-definitions';
import type { FormAssociatedInterface, Size } from 'src/interface';
import { componentConfig, config } from '#config';
import { ClickOutside } from '#utils/click-outside';
import { compareOptions, isOptionSelected } from '#utils/forms';
import { type Attributes, hostContext, inheritAttributes } from '#utils/helpers';
import { ChevronDown } from '../ChevronDown';
import { Show } from '../Show';
import type { SelectChangeEventDetail, SelectColor, SelectCompareFn } from './select.type';

let selectIds = 0;

/**
 * Select is used to pick a value from a list of options.
 *
 * @slot - Slot for the `pop-select-option`
 * @slot label - Slot for the content of the label
 *
 * @part label - The native HTML label element that wrap the text
 */
@Component({
  tag: 'pop-select',
  styleUrl: 'select.scss',
  shadow: true,
  formAssociated: true,
})
export class Select implements ComponentInterface, FormAssociatedInterface {
  private inputId = `pop-select-${selectIds++}`;
  private inheritedAttributes: Attributes;

  private initialValues: any | any[] | null;
  private dropdownRef?: HTMLDetailsElement;
  private dropdownObserver: MutationObserver;

  @Element() host!: HTMLElement;
  @AttachInternals() internals: ElementInternals;

  @State() open = false;

  @State() errorText: string;

  /**
   * The name of the control, which is submitted with the form data.
   */
  @Prop({ reflect: true }) name: string = this.inputId;

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
  @Prop({ mutable: true }) value?: any | null = null;
  @Watch('value')
  onValueChange(value: any) {
    this.errorText = this.errorTextValue;
    if (this.errorText) {
      // No emit if the select has error.
      return;
    }

    const data = new FormData();
    if (this.value === null) {
      data.delete(this.name);
    } else {
      data.set(this.name, this.value);
    }

    this.internals.setFormValue(data, data);
    this.popChange.emit({ value });
  }

  /**
   * If `true`, the user can select more than one value.
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
   * If `true`, the user cannot modify the value.
   *
   * @config
   * @default false
   */
  @Prop({ reflect: true, mutable: true }) readonly?: boolean;

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
   * if `true`, adds border to select when `color` property is not set.
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
   * Text that is placed under the select and displayed when no error is detected.
   */
  @Prop() helperText?: string = '';

  /**
   * Only apply when `multiple` property is used.
   * Text that is placed under the select and displayed when the amount of selected option is below of the `min` property.
   */
  @Prop() notEnoughErrorText?: string = '';

  /**
   * Only apply when `multiple` property is used.
   * Text that is placed under the select and displayed when the amount of selected option is greater of the `max` property.
   */
  @Prop() tooManyErrorText?: string = '';

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
   * Emitted when the overlay is presented.
   */
  @Event({ eventName: 'present' }) presentEvent: EventEmitter<void>;

  /**
   * Emitted when the overlay is dismissed.
   */
  @Event({ eventName: 'dismiss' }) dismissEvent: EventEmitter<void>;

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
    this.value = this.initialValues;
  }

  formStateRestoreCallback(state: FormData): void {
    const value = state.get(this.name);
    if (value?.toString().includes(',') && this.multiple) {
      this.value = value.toString().split(',');
      return;
    }
    this.value = value;
  }

  connectedCallback(): void {
    const data = new FormData();
    for (const item of this.values) {
      data.set(this.name, item);
    }

    this.internals.setFormValue(data, data);

    this.dropdownObserver = new MutationObserver(() => {
      this.open = this.dropdownRef.open;
    });
  }

  componentWillLoad(): void {
    this.inheritedAttributes = inheritAttributes(this.host, ['aria-label']);

    componentConfig.apply(this, 'pop-select', {
      multiple: false,
      required: false,
      readonly: false,
      disabled: false,
      bordered: false,
      size: config.get('defaultSize', 'md'),
    });

    this.initialValues = this.value;
  }

  componentDidLoad(): void {
    if (this.dropdownRef) {
      this.dropdownObserver.observe(this.dropdownRef, {
        attributes: true,
        attributeFilter: ['open'],
      });
    }
  }

  disconnectedCallback(): void {
    this.dropdownObserver.disconnect();
  }

  /**
   * Sets focus on the native `select` in `pop-select`. Use this method instead of the global
   * `select.focus()`.
   */
  @Method()
  async setFocus(): Promise<void> {
    this.dropdownRef.querySelector('summary').focus();
  }

  /**
   * Open the select dropdown
   *
   * @returns `true` if the select dropdown has been opened, otherwise `false`.
   */
  @Method()
  async present(): Promise<boolean> {
    if (this.disabled || this.open) {
      return false;
    }

    this.open = true;
    this.presentEvent.emit();
    return true;
  }

  /**
   * Toggle the select dropdown
   */
  @Method()
  toggle(): Promise<boolean> {
    if (this.open) {
      return this.dismiss();
    }
    return this.present();
  }

  /**
   * Close the select dropdown
   *
   * @returns `true` if the select dropdown has been closed, otherwise `false`.
   */
  @Method()
  async dismiss(): Promise<boolean> {
    if (this.disabled || !this.open) {
      return false;
    }

    this.open = false;
    await this.setFocus();
    this.dismissEvent.emit();

    return true;
  }

  @ClickOutside()
  onClickOutside(): void {
    if (!this.open) return;

    this.dismiss();
  }

  private onClick = (ev: MouseEvent): void => {
    ev.preventDefault();
    if (this.disabled || this.readonly) {
      return;
    }
    this.toggle();
  };

  private onHover = (): void => {
    this.popFocus.emit();
  };

  private onBlur = (): void => {
    this.popBlur.emit();
  };

  private onFocusOut = (ev: FocusEvent): void => {
    if (ev.relatedTarget === null) {
      return;
    }

    const relatedTarget = ev.relatedTarget as HTMLPopRadioElement | HTMLPopCheckboxElement;
    const dropdown = relatedTarget.closest('details');
    if (dropdown?.id === this.inputId) {
      return;
    }

    // we dont use this.dismiss() because it will focus the summary
    this.open = false;
    this.dismissEvent.emit();
  };

  private onKeyPress = (...keys: string[]) => {
    return async (ev: KeyboardEvent) => {
      ev.preventDefault();
      if (!keys.includes(ev.key)) {
        return;
      }
      if (ev.key === ESC.key) {
        return this.dismiss();
      }
      return this.toggle();
    };
  };

  private get values(): any[] {
    const { value } = this;
    if (value == null) return [];

    return Array.isArray(value) ? value : [value];
  }

  private get text(): string {
    const values = this.values;
    if (values.length === 0) {
      return '';
    }
    return values
      .map(value => {
        const selected = this.options.find(option => {
          return compareOptions(value, getOptionValue(option), this.compare);
        });
        return selected ? selected.textContent : null;
      })
      .filter(Boolean)
      .join(', ');
  }

  private get errorTextValue(): string {
    if (!this.multiple) return '';

    const { length } = this.values;
    if (length === 0 && !this.required) return '';
    if (length < this.min) return this.notEnoughErrorText ?? '';
    if (length > this.max) return this.tooManyErrorText ?? '';
    return '';
  }

  private get options() {
    return Array.from(this.host.querySelectorAll('pop-select-option'));
  }

  private getAriaLabel(text: string): string {
    const { placeholder } = this;
    const displayValue = text;
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

  private renderSelected(text: string) {
    const { placeholder } = this;
    const displayValue = text;

    let addPlaceholderClass = false;
    let selectText = displayValue;
    if (selectText === '' && placeholder !== undefined) {
      selectText = placeholder;
      addPlaceholderClass = true;
    }

    const textPart = addPlaceholderClass ? 'placeholder' : 'text';

    return (
      <div
        class={{ 'select-placeholder': addPlaceholderClass }}
        part={textPart}
      >
        {selectText}
      </div>
    );
  }

  private renderRadioOptions() {
    const { required, color, size } = this;

    return (
      <pop-radio-group
        allowEmpty={!required}
        disabled={this.disabled}
        onPopChange={async ev => {
          this.value = ev.detail.value;
          await this.dismiss();
        }}
        value={this.value}
      >
        {this.options.map(option => (
          <pop-item>
            <pop-radio
              checked={isOptionSelected(this.value, getOptionValue(option), this.compare)}
              color={color === 'ghost' ? undefined : color}
              disabled={option.disabled}
              size={size}
              value={getOptionValue(option)}
            >
              {option.textContent}
            </pop-radio>
          </pop-item>
        ))}
      </pop-radio-group>
    );
  }

  private renderCheckboxOptions() {
    const { color, size } = this;

    return (
      <Fragment>
        {this.options.map(option => (
          <pop-item>
            <pop-checkbox
              checked={isOptionSelected(this.value, getOptionValue(option), this.compare)}
              color={color === 'ghost' ? undefined : color}
              disabled={option.disabled ?? this.disabled}
              onPopChange={async () => {
                this.errorText = this.errorTextValue;
                if (this.errorText) {
                  // No emit if the select has error.
                  return;
                }

                this.value = Array.from(this.dropdownRef.querySelectorAll('pop-checkbox'))
                  .filter(cb => cb.checked)
                  .map(cb => cb.value);
              }}
              size={size}
              value={getOptionValue(option)}
            >
              {option.textContent}
            </pop-checkbox>
          </pop-item>
        ))}
      </Fragment>
    );
  }

  render() {
    const { host, helperText, errorText, inputId, text } = this;

    const ariaLabel = this.getAriaLabel(text);
    const selected = this.renderSelected(text);

    const hasError = !!errorText;
    const hasHelper = !!helperText;
    const hasBottomText = hasError || hasHelper;

    return (
      <Host
        aria-disabled={this.disabled ? 'true' : 'false'}
        aria-expanded={this.open ? 'true' : 'false'}
        aria-hidden={this.disabled ? 'true' : null}
        aria-label={ariaLabel}
        aria-labelledby={inputId}
        class={{
          'select-expanded': this.open,
          'join-item': hostContext(host, 'pop-join'),
        }}
        role={this.multiple ? 'listbox' : 'radiogroup'}
      >
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: Element not focusable, handle by summary keyboard event */}
        <div
          class="label"
          onClick={this.onClick}
        >
          <label
            htmlFor={inputId}
            part="label"
          >
            <slot name="label" />
          </label>
        </div>

        <details
          class="dropdown"
          id={inputId}
          onFocusout={this.onFocusOut}
          onMouseEnter={this.onHover}
          onMouseLeave={this.onBlur}
          open={this.open}
          ref={(el: HTMLDetailsElement) => (this.dropdownRef = el)}
        >
          <summary
            class="dropdown-trigger"
            onClick={this.onClick}
            onKeyUp={this.onKeyPress(SPACE.key, ENTER.key, ESC.key)}
            tabindex={this.disabled ? '-1' : null}
          >
            <slot name="start" />
            {selected}
            <slot name="end" />
            <ChevronDown />
          </summary>
          <div
            class="dropdown-content"
            part="content"
          >
            <pop-list>{this.multiple ? this.renderCheckboxOptions() : this.renderRadioOptions()}</pop-list>
          </div>
          {/* biome-ignore lint/a11y/useKeyWithClickEvents: Element not focusable, handle by summary keyboard event */}
          <div
            class="dropdown-backdrop"
            onClick={() => this.dismiss()}
            part="backdrop"
          />
        </details>

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
