import {
  Component,
  type ComponentInterface,
  Element,
  Event,
  type EventEmitter,
  Host,
  Method,
  Prop,
  h,
} from '@stencil/core';
import type { Color, Size } from 'src/interface';
import { componentConfig, config } from '#config';
import { compareOptions } from '#utils/forms';
import { type Attributes, inheritAriaAttributes } from '#utils/helpers.util';
import { Show } from '../Show';

let radioIds = 0;

/**
 * Radio buttons allow the user to select one option from a set.
 *
 * @slot - Slot for the content of the label
 *
 * @part label - The native HTML label element that wrap the text .
 * @part native - The native HTML input element.
 */
@Component({
  tag: 'pop-radio',
  styleUrl: 'radio.scss',
  shadow: true,
})
export class Radio implements ComponentInterface {
  private inputId = `pop-radio-${radioIds++}`;
  private inheritedAttributes: Attributes;

  private radioGroup?: HTMLPopRadioGroupElement;
  private nativeInput!: HTMLInputElement;

  @Element() host!: HTMLElement;

  /**
   * The name of the control, which is submitted with the form data.
   *
   * @internal (controlled by `pop-radio-group`)
   */
  @Prop({ reflect: true }) name = '';

  /**
   * The value of the radio does not mean if it's checked or not, use the `checked`
   * property for that.
   *
   * The value of a radio is analogous to the value of a `<input type="radio">`,
   * it's only used when the radio participates in a native `<form>`.
   */
  @Prop({ mutable: true }) value?: any | null = '';

  /**
   * If `true`, the radio is selected.
   */
  @Prop({ reflect: true, mutable: true }) checked?: boolean = false;

  /**
   * If `true`, the user must fill in a value before submitting a form.
   *
   * @internal (controlled by `pop-radio-group`)
   */
  @Prop({ reflect: true, mutable: true }) required?: boolean;

  /**
   * If `true`, the user cannot interact with the element.
   *
   * @internal (controlled by `pop-radio-group`)
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
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"accent"`, `"info"`, `"success"`, `"warning"`, `"error"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   *
   * @config
   */
  @Prop({ reflect: true, mutable: true }) color?: Color;

  /**
   * Change size of the component
   * Options are: `"xs"`, `"sm"`, `"md"`, `"lg"`.
   *
   * @config
   * @default "md"
   */
  @Prop({ reflect: true, mutable: true }) size?: Size;

  /**
   * Emitted when the input has focus.
   */
  @Event() popFocus: EventEmitter<void>;

  /**
   * Emitted when the input loses focus.
   */
  @Event() popBlur: EventEmitter<void>;

  componentWillLoad(): void {
    this.inheritedAttributes = inheritAriaAttributes(this.host);

    componentConfig.apply(this, 'pop-radio', {
      disabled: false,
      size: config.get('defaultSize', 'md'),
    });
  }

  connectedCallback(): void {
    this.radioGroup = this.host.closest('pop-radio-group');

    this.radioGroup?.addEventListener('popValueChange', this.handleValueChanged);
  }

  disconnectedCallback(): void {
    this.radioGroup?.removeEventListener('popValueChange', this.handleValueChanged);
  }

  private handleValueChanged = (): void => {
    if (!this.radioGroup) return;

    const { compare, value: newValue } = this.radioGroup;
    const currentValue = this.value;

    this.checked = compareOptions(currentValue, newValue, compare);
  };

  /**
   * Sets focus on the native `textarea` in `pop-textarea`. Use this method instead of the global
   * `textarea.focus()`.
   */
  @Method()
  async setFocus(): Promise<void> {
    this.nativeInput?.focus();
  }

  private onClick = () => {
    const { checked, disabled, readonly } = this;
    if (disabled || readonly) return;

    if (checked && this.radioGroup?.allowEmpty) {
      this.checked = false;
    } else {
      this.checked = true;
    }
  };

  private onFocus = () => {
    this.popFocus.emit();
  };

  private onBlur = () => {
    this.popBlur.emit();
  };

  render() {
    const { host, checked, disabled } = this;
    const inputId = this.inputId;

    const hasLabel = host.textContent !== '';

    return (
      <Host
        aria-checked={`${checked}`}
        aria-disabled={`${disabled}`}
        aria-hidden={disabled ? 'true' : null}
        aria-labelledby={inputId}
        onClick={this.onClick}
        role="radio"
      >
        <Show when={hasLabel}>
          <div class="label">
            <label
              htmlFor={inputId}
              part="label"
            >
              <slot />
            </label>
          </div>
        </Show>
        <input
          autoFocus={this.autoFocus}
          checked={this.checked}
          disabled={this.disabled}
          id={inputId}
          name={this.name}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          part="native"
          readonly={this.readonly}
          ref={el => (this.nativeInput = el)}
          required={this.required}
          type="radio"
          {...this.inheritedAttributes}
        />
      </Host>
    );
  }
}
