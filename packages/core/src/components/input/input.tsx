import { componentConfig, config } from '#config';
import { type Attributes, hostContext, inheritAriaAttributes, inheritAttributes } from '#utils/helpers';
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
import type { AutoCapitalize, EnterKeyHint, KeyboardType, Size } from 'src/interface';
import { Show } from '../Show';
import type { Autocomplete, InputChangeEventDetail, InputColor, InputInputEventDetail, InputType } from './input.type';

let inputIds = 0;

/**
 * Text Input is a simple input field.
 *
 * @slot - Slot for the content of the label
 * @slot start - The content will appear to the left of the native HTML input in LTR and right in RTL
 * @slot end - The content will appear to the right of the native HTML input in LTR and left in RTL
 *
 * @part label - The native HTML label element that wrap the text
 * @part wrapper - The wrapper around slot start, input and slot end
 * @part native - The native HTML input element.
 */
@Component({
  tag: 'pop-input',
  styleUrl: 'input.scss',
  shadow: true,
  formAssociated: true,
})
export class Input implements ComponentInterface {
  private inputId = `pop-input-${inputIds++}`;
  private inheritedAttributes: Attributes;

  private nativeInput!: HTMLInputElement;
  private isComposing = false;
  private debounceTimer: NodeJS.Timeout;

  @Element() host!: HTMLElement;

  @AttachInternals() internals: ElementInternals;

  /**
   * The name of the control, which is submitted with the form data.
   */
  @Prop() name: string = this.inputId;

  /**
   * The type of control to display. The default type is text.
   */
  @Prop({ reflect: true, mutable: true }) type: InputType = 'text';

  /**
   * Instructional text that shows before the input has a value.
   *
   * This property applies only when the `type` property is set to `"email"`,
   * `"number"`, `"password"`, `"search"`, `"tel"`, `"text"`, or `"url"`, otherwise it is ignored.
   */
  @Prop() placeholder?: string;

  /**
   * The value of the toggle does not mean if it's checked or not, use the `checked`
   * property for that.
   *
   * The value of a toggle is analogous to the value of a `<input type="checkbox">`,
   * it's only used when the toggle participates in a native `<form>`.
   */
  @Prop({ mutable: true }) value?: string | number | null = '';
  @Watch('value')
  onValueChange() {
    const nativeInput = this.nativeInput;
    const value = this.getValue();
    const data = new FormData();
    data.set(this.name, value);
    this.internals.setFormValue(data, data);

    if (nativeInput?.value !== value && !this.isComposing) {
      /**
       * Assigning the native input's value on attribute
       * value change, allows `popInput` implementations
       * to override the control's value.
       *
       * Used for patterns such as input trimming (removing whitespace),
       * or input masking.
       */
      nativeInput.value = value;
    }
  }

  /**
   * The minimum value, which must not be greater than its maximum (max attribute) value.
   *
   * @config
   */
  @Prop({ mutable: true }) min?: number;

  /**
   * The maximum value, which must not be less than its minimum (min attribute) value.
   *
   * @config
   */
  @Prop({ mutable: true }) max?: number | string;

  /**
   * Works with the min and max attributes to limit the increments at which a value can be set.
   * Possible values are: `"any"` or a positive floating point number.
   *
   * @config
   */
  @Prop({ mutable: true }) step?: string;

  /**
   * This attribute specifies the minimum number of characters that the user can enter.
   *
   * @config
   */
  @Prop({ mutable: true }) minLength?: number;

  /**
   * This attribute specifies the maximum number of characters that the user can enter.
   *
   * @config
   */
  @Prop({ mutable: true }) maxLength?: number;

  /**
   * If `true`, the user can enter more than one value.
   * This attribute applies when the type attribute is set to `"email"`, otherwise it is ignored.
   */
  @Prop({ mutable: true }) multiple?: boolean;

  /**
   * A regular expression that the value is checked against.
   * The pattern must match the entire value, not just some subset.
   * Use the title attribute to describe the pattern to help the user.
   * This attribute applies when the value of the type attribute is `"text"`, `"search"`, `"tel"`, `"url"`, `"email"`, `"date"`, or `"password"`, otherwise it is ignored.
   * When the type attribute is `"date"`, `pattern` will only be used in browsers that do not support the `"date"` input type natively.
   * See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date for more information.
   */
  @Prop({ mutable: true }) pattern?: string;

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
   *
   * @config
   * @default false
   */
  @Prop({ reflect: true, mutable: true }) autoFocus?: boolean;

  /**
   * A hint to the browser for which virtual keyboard to display.
   *
   * @see {@link https://html.spec.whatwg.org/multipage/interaction.html#attr-inputmode}
   */
  @Prop({ mutable: true }) keyboard?: KeyboardType;

  /**
   * A hint to the browser for which keyboard to display.
   * That specifies what action label (or icon) to present for the enter key on virtual keyboards.
   *
   * @config
   * @see {@link https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-enterkeyhint-attribute}
   */
  @Prop({ mutable: true }) enterkeyhint?: EnterKeyHint;

  /**
   * If `true`, the element will have its spelling and grammar checked.
   * By default the User Agent make their own default behavior.
   *
   * @config
   * @default false
   */
  @Prop({ mutable: true }) spellcheck: boolean;

  /**
   * Indicates whether the value of the control can be automatically completed by the browser.
   */
  @Prop({ mutable: true }) autoComplete?: Autocomplete = 'off';

  /**
   * This features work only on mobile and tablet devices.
   * By default the User Agent and input make their own determination.
   *
   * @config
   * @default "off"
   *
   * @see {@link https://html.spec.whatwg.org/multipage/interaction.html#autocapitalization}
   */
  @Prop({ mutable: true }) autoCapitalize?: AutoCapitalize;

  /**
   * if `true`, adds border to input when `color` property is not set.
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
  @Prop({ reflect: true, mutable: true }) color?: InputColor;

  /**
   * Change size of the component
   * Options are: `"xs"`, `"sm"`, `"md"`, `"lg"`.
   *
   * @config
   * @default "md"
   */
  @Prop({ reflect: true, mutable: true }) size?: Size;

  /**
   * Text that is placed under the input and displayed when no error is detected.
   */
  @Prop() helperText: string;

  /**
   * Text that is placed under the input and displayed when an error is detected.
   */
  @Prop() errorText: string;

  /**
   * If `true`, a character counter will display the ratio of characters used and the total character limit.
   * Developers must also set the `maxlength` property for the counter to be calculated correctly.
   *
   * @config
   * @default false
   */
  @Prop({ mutable: true }) counter?: boolean;

  /**
   * A callback used to format the counter text.
   * By default the counter text is set to "itemLength / maxLength".
   *
   * @config
   */
  @Prop({ mutable: true }) counterFormatter?: (inputLength: number, maxLength: number) => string;

  /**
   * Set the amount of time, in milliseconds, to wait to trigger the ionInput event after each keystroke.
   *
   * @config
   * @default 0
   */
  @Prop({ mutable: true }) debounce?: number;

  /**
   * The `popChange` event is fired when the user modifies the input's value.
   * Unlike the ionInput event, the `popChange` event is fired when the element loses focus after its value has been modified.
   */
  @Event() popChange: EventEmitter<InputChangeEventDetail>;

  /**
   * The `popInput` event is fired each time the user modifies the Input's value.
   * Unlike the `popChange` event, the `popInput` event is fired for each alteration to the input's value.
   * This typically happens for each keystroke as the user types.
   *
   * This event can be debounced by the `debounce` property.
   */
  @Event() popInput: EventEmitter<InputInputEventDetail>;

  /**
   * Emitted when the input has focus.
   */
  @Event() popFocus: EventEmitter<void>;

  /**
   * Emitted when the input loses focus.
   */
  @Event() popBlur: EventEmitter<void>;

  formResetCallback(): void {
    this.value = '';
  }

  formStateRestoreCallback(state: string): void {
    this.value = state;
  }

  componentWillLoad(): void {
    this.inheritedAttributes = {
      ...inheritAriaAttributes(this.host),
      ...inheritAttributes(this.host, ['tabindex', 'title', 'data-form-type']),
    };

    componentConfig.apply(this, 'pop-input', {
      type: 'text',
      multiple: false,
      required: false,
      readonly: false,
      disabled: false,
      autoFocus: false,
      spellcheck: false,
      autoComplete: 'off',
      autoCapitalize: 'off',
      bordered: false,
      size: config.get('defaultSize', 'md'),
      counter: false,
      counterFormatter: (length, max) => `${length} / ${max}`,
      debounce: 0,
    });

    if (this.counter && this.maxLength === undefined) {
      console.warn(`The 'maxLength' attribut must be specified.`);
    }
  }

  disconnectedCallback(): void {
    clearTimeout(this.debounceTimer);
  }

  /**
   * Sets focus on the native `input` in `pop-input`. Use this method instead of the global
   * `input.focus()`.
   */
  @Method()
  async setFocus(): Promise<void> {
    this.nativeInput?.focus();
  }

  private getValue(): string {
    if (typeof this.value === 'number') return this.value.toString();
    return this.value || '';
  }

  private get counterText(): string {
    const { counter, maxLength, counterFormatter } = this;

    if (!counter || maxLength < 0) return '';
    const length = this.getValue().length;

    return counterFormatter(length, maxLength);
  }

  private onChange = (): void => {
    this.popChange.emit({
      value: this.getValue(),
    });
  };

  private onInput = (): void => {
    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
      this.debounceTimer = undefined;
    }

    this.debounceTimer = setTimeout(() => {
      const input = this.nativeInput;
      if (input) {
        this.value = input.value || '';
      }
      this.popInput.emit({
        value: this.getValue(),
      });
    }, this.debounce || 0);
  };

  private onCompositionStart = () => {
    this.isComposing = true;
  };

  private onCompositionEnd = () => {
    this.isComposing = false;
  };

  private onFocus = (): void => {
    this.popFocus.emit();
  };

  private onBlur = (): void => {
    this.popBlur.emit();
  };

  render() {
    const { host, errorText, helperText } = this;
    const inputId = this.inputId;
    const counter = this.counterText;

    const hasLabel = host.textContent !== '';
    const hasError = !!errorText;
    const hasHelper = !!helperText;
    const hasCounter = counter !== '';
    const hasBottomText = hasError || hasHelper || hasCounter;

    return (
      <Host
        aria-labelledby={inputId}
        aria-hidden={this.disabled ? 'true' : null}
        class={{
          'join-item': hostContext(host, 'pop-join'),
        }}
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
        <label
          htmlFor={inputId}
          class="input-wrapper"
          part="wrapper"
        >
          <slot name="start" />
          <input
            part={`native ${this.type}`}
            id={inputId}
            name={this.name}
            type={this.type}
            placeholder={this.placeholder || ''}
            min={this.min}
            max={this.max}
            step={this.step}
            value={this.value}
            multiple={this.multiple}
            pattern={this.pattern}
            minLength={this.minLength}
            maxLength={this.maxLength}
            required={this.required}
            readonly={this.readonly}
            disabled={this.disabled}
            autoFocus={this.autoFocus}
            inputMode={this.keyboard}
            enterKeyHint={this.enterkeyhint}
            spellcheck={this.spellcheck}
            autoComplete={this.autoComplete}
            autoCapitalize={this.autoCapitalize}
            onChange={this.onChange}
            onInput={this.onInput}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            onCompositionstart={this.onCompositionStart}
            onCompositionend={this.onCompositionEnd}
            ref={el => (this.nativeInput = el)}
            {...this.inheritedAttributes}
          />
          <slot name="end" />
        </label>
        <Show when={hasBottomText}>
          <div class="text-wrapper">
            <Show when={hasError}>
              <span class="error-text">{errorText}</span>
            </Show>
            <Show when={hasHelper}>
              <span class="helper-text">{helperText}</span>
            </Show>
            <Show when={hasCounter}>
              <span class="counter-text">{counter}</span>
            </Show>
          </div>
        </Show>
      </Host>
    );
  }
}
