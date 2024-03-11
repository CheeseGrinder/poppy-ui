import { compareOptions } from '#utils/forms';
import { Attributes, inheritAriaAttributes } from '#utils/helpers';
import { Component, ComponentInterface, Element, Event, EventEmitter, Host, Method, Prop, h } from '@stencil/core';
import type { Color, Size } from 'src/interfaces';
import { Show } from '../Show';
import { componentConfig } from '#global/component-config';

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
  #inputId = `pop-radio-${radioIds++}`;
  #inheritedAttributes: Attributes;

  #radioGroup?: HTMLPopRadioGroupElement;
  #nativeInput!: HTMLInputElement;

  @Element() host!: HTMLElement;

  /**
   * The name of the control, which is submitted with the form data.
   */
  @Prop() name: string = this.#inputId;

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
   */
  @Prop({ reflect: true, mutable: true }) required?: boolean = false;

  /**
   * If `true`, the user cannot interact with the element.
   */
  @Prop({ reflect: true, mutable: true }) disabled?: boolean = false;

  /**
   * If `true`, the element will be focused on page load.
   */
  @Prop({ reflect: true, mutable: true }) autoFocus?: boolean = false;

  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"accent"`, `"info"`, `"success"`, `"warning"`, `"error"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   */
  @Prop({ reflect: true, mutable: true }) color?: Color;

  /**
   * Change size of the component
   * Options are: `"xs"`, `"sm"`, `"md"`, `"lg"`.
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
    this.#inheritedAttributes = inheritAriaAttributes(this.host);

    const config = componentConfig.get('pop-radio');
    this.checked ??= config.checked ?? false;
    this.required ??= config.required ?? false;
    this.disabled ??= config.disabled ?? false;
    this.autoFocus ??= config.autoFocus ?? false;
    this.color ??= config.color;
    this.size ??= config.size;
  }

  connectedCallback(): void {
    this.#radioGroup = this.host.closest('pop-radio-group');

    this.#radioGroup?.addEventListener('popValueChange', this.#handleValueChanged);
  }

  disconnectedCallback(): void {
    this.#radioGroup?.removeEventListener('popValueChange', this.#handleValueChanged);
  }

  #handleValueChanged = (): void => {
    if (!this.#radioGroup) return;

    const { compare, value: newValue } = this.#radioGroup;
    const currentValue = this.value;

    this.checked = compareOptions(currentValue, newValue, compare);
  };

  /**
   * Sets focus on the native `textarea` in `pop-textarea`. Use this method instead of the global
   * `textarea.focus()`.
   */
  @Method()
  async setFocus(): Promise<void> {
    this.#nativeInput?.focus();
  }

  #onClick = () => {
    const { checked, disabled } = this;
    if (disabled) return;

    if (checked && this.#radioGroup?.allowEmpty) {
      this.checked = false;
    } else {
      this.checked = true;
    }
  };

  #onFocus = () => {
    this.popFocus.emit();
  };

  #onBlur = () => {
    this.popBlur.emit();
  };

  render() {
    const { host, checked } = this;
    const inputId = this.#inputId;

    const hasLabel = host.textContent !== '';

    return (
      <Host
        role="radio"
        aria-checked={`${checked}`}
        aria-labelledby={inputId}
        aria-hidden={this.disabled ? 'true' : null}
        onClick={this.#onClick}
      >
        <Show when={hasLabel}>
          <div class="label">
            <label htmlFor={inputId} part="label">
              <slot />
            </label>
          </div>
        </Show>
        <input
          part="native"
          type="radio"
          id={inputId}
          name={this.name}
          checked={this.checked}
          required={this.required}
          disabled={this.disabled}
          autoFocus={this.autoFocus}
          onFocus={this.#onFocus}
          onBlur={this.#onBlur}
          ref={el => (this.#nativeInput = el)}
          {...this.#inheritedAttributes}
        />
      </Host>
    );
  }
}

let radioIds: number = 0;
