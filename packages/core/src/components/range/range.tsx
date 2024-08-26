import { componentConfig, config } from '#config';
import { type Attributes, inheritAriaAttributes } from '#utils/helpers';
import {
  AttachInternals,
  Component,
  type ComponentInterface,
  Element,
  Event,
  type EventEmitter,
  Host,
  Method,
  Prop,
  Watch,
  h,
} from '@stencil/core';
import type { Size } from 'src/interface';
import type { RangeChangeEventDetail, RangeColor } from './range.type';

let rangeIds = 0;

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
  private inputId = `pop-range-${rangeIds++}`;
  private inheritedAttributes: Attributes;

  private nativeInput!: HTMLInputElement;
  private debounceTimer: NodeJS.Timeout;

  @Element() host: HTMLElement;

  @AttachInternals() internals: ElementInternals;

  /**
   * The name of the control, which is submitted with the form data.
   */
  @Prop() name: string = this.inputId;

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
    const data = new FormData();
    data.set(this.name, value.toString());

    this.internals.setFormValue(data, data);
  }

  /**
   * The minimum value, which must not be greater than its maximum (max attribute) value.
   *
   * @config
   * @default 0
   */
  @Prop({ reflect: true, mutable: true }) min?: number;

  /**
   * The maximum value, which must not be less than its minimum (min attribute) value.
   *
   * @config
   * @default 100
   */
  @Prop({ reflect: true, mutable: true }) max?: number;

  /**
   * Works with the min and max attributes to limit the increments at which a value can be set.
   *
   * @config
   * @default 1
   */
  @Prop({ reflect: true, mutable: true }) step?: number;

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
  @Prop({ mutable: true }) autoFocus?: boolean = false;

  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"accent"`, `"ghost"`, `"info"`, `"success"`, `"warning"`, `"error"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   *
   * @config
   */
  @Prop({ reflect: true, mutable: true }) color?: RangeColor;

  /**
   * Change size of the component
   * Options are: `"xs"`, `"sm"`, `"md"`, `"lg"`.
   *
   * @config
   * @default "md"
   */
  @Prop({ reflect: true, mutable: true }) size?: Size;

  /**
   * Set the amount of time, in milliseconds, to wait to trigger the ionInput event after each keystroke.
   *
   * @config
   * @default 0
   */
  @Prop({ mutable: true }) debounce?: number;

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

  formResetCallback(): void {
    this.value = 0;
  }

  formStateRestoreCallback(state: string) {
    this.value = +state;
  }

  componentWillLoad(): void {
    this.inheritedAttributes = inheritAriaAttributes(this.host);

    componentConfig.apply(this, 'pop-range', {
      min: 0,
      max: 100,
      step: 1,
      required: false,
      disabled: false,
      size: config.get('defaultSize', 'md'),
      debounce: 0,
    });
  }

  disconnectedCallback(): void {
    clearTimeout(this.debounceTimer);
  }

  /**
   * Sets focus on the native `input` in `pop-range`. Use this method instead of the global
   * `input.focus()`.
   */
  @Method()
  async setFocus(): Promise<void> {
    this.nativeInput?.focus();
  }

  private onChange = (): void => {
    clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(() => {
      this.value = this.nativeInput.valueAsNumber;

      this.popChange.emit({
        value: this.value,
      });
    }, this.debounce || 0);
  };

  private onFocus = (): void => {
    this.popFocus.emit();
  };

  private onBlur = (): void => {
    this.popBlur.emit();
  };

  render() {
    const { inputId } = this;

    return (
      <Host
        aria-labelledby={inputId}
        aria-hidden={this.disabled ? 'true' : null}
      >
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
          onInput={this.onChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          ref={el => (this.nativeInput = el)}
          {...this.inheritedAttributes}
        />
      </Host>
    );
  }
}
