import { Attributes, inheritAriaAttributes } from '#utils/helpers';
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
  Watch,
  h
} from '@stencil/core';
import type { Color, Size } from 'src/interfaces';

/**
 * Range slider is used to select a value by sliding a handle.
 *
 * @part native - The native HTML input element.
 */
@Component({
  tag: 'pop-range',
  styleUrl: 'range.scss',
  shadow: true,
  formAssociated: true,
})
export class Range implements ComponentInterface {
  #inputId = `pop-range-${rangeIds++}`;
  #inheritedAttributes: Attributes;

  #nativeInput!: HTMLInputElement;
  #debounceTimer: NodeJS.Timeout;

  @Element() host: HTMLElement;

  @AttachInternals() internals: ElementInternals;

  /**
   * The name of the control, which is submitted with the form data.
   */
  @Prop() name: string = this.#inputId;

  /**
   * The value of the toggle does not mean if it's checked or not, use the `checked`
   * property for that.
   *
   * The value of a toggle is analogous to the value of a `<input type="checkbox">`,
   * it's only used when the toggle participates in a native `<form>`.
   */
  @Prop({ mutable: true }) value?: number | null;
  @Watch('value')
  onValueChange(value: number) {
    this.internals.setFormValue(value.toString(), value.toString());
  }

  /**
   * The minimum value, which must not be greater than its maximum (max attribute) value.
   */
  @Prop({ reflect: true }) min?: number = 0;

  /**
   * The maximum value, which must not be less than its minimum (min attribute) value.
   */
  @Prop({ reflect: true }) max?: number = 100;

  /**
   * Works with the min and max attributes to limit the increments at which a value can be set.
   */
  @Prop({ reflect: true }) step?: number = 1;

  /**
   * If `true`, the user must fill in a value before submitting a form.
   */
  @Prop({ reflect: true }) required?: boolean = false;

  /**
   * If `true`, the user cannot interact with the element.
   */
  @Prop({ reflect: true }) disabled?: boolean = false;

  /**
   * If `true`, the element will be focused on page load.
   */
  @Prop() autoFocus?: boolean = false;

  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"accent"`, `"ghost"`, `"info"`, `"success"`, `"warning"`, `"error"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   */
  @Prop({ reflect: true }) color?: Color | 'ghost';

  /**
   * Change size of the component
   * Options are: `"xs"`, `"sm"`, `"md"`, `"lg"`.
   */
  @Prop({ reflect: true }) size?: Size;

  /**
   * Set the amount of time, in milliseconds, to wait to trigger the ionInput event after each keystroke.
   */
  @Prop() debounce?: number = 0;

  /**
   * The `popChange` event is fired when the user modifies the input's value.
   * Unlike the popInput event, the `popChange` event is fired when the element loses focus after its value has been modified.
   */
  @Event() popChange: EventEmitter<RangeChangeEventDetail>;

  /**
   * Emitted when the input has focus.
   */
  @Event() popFocus: EventEmitter<void>;

  /**
   * Emitted when the input loses focus.
   */
  @Event() popBlur: EventEmitter<void>;

  formResetCallback() {
    this.value = 0;
  }

  formStateRestoreCallback(state: string) {
    this.value = +state;
  }

  componentWillLoad(): void {
    this.#inheritedAttributes = inheritAriaAttributes(this.host);
  }

  disconnectedCallback(): void {
    clearTimeout(this.#debounceTimer);
  }

  /**
   * Sets focus on the native `input` in `pop-range`. Use this method instead of the global
   * `input.focus()`.
   */
  @Method()
  async setFocus(): Promise<void> {
    this.#nativeInput?.focus();
  }

  #onChange = () => {
    clearTimeout(this.#debounceTimer);
    this.#debounceTimer = setTimeout(() => {
      this.value = this.#nativeInput.valueAsNumber;

      this.popChange.emit({
        value: this.value,
      });
    }, this.debounce || 0);
  };

  #onFocus = () => {
    this.popFocus.emit();
  };

  #onBlur = () => {
    this.popBlur.emit();
  };

  render() {
    const { #inputId: inputId } = this;

    return (
      <Host aria-labelledby={inputId} aria-hidden={this.disabled ? 'true' : null}>
        <input
          part="native"
          id={inputId}
          name={this.name}
          type="range"
          min={this.min}
          max={this.max}
          step={this.step}
          value={this.value}
          required={this.required}
          disabled={this.disabled}
          autoFocus={this.autoFocus}
          onInput={this.#onChange}
          onFocus={this.#onFocus}
          onBlur={this.#onBlur}
          ref={el => (this.#nativeInput = el)}
          {...this.#inheritedAttributes}
        />
      </Host>
    );
  }
}

let rangeIds = 0;
