import type {
  AutoCapitalize,
  Autocomplete,
  Color,
  EnterKeyHint,
  InputType,
  KeyboardType,
  Size,
} from '#utils/element-interface';
import { Attributes, inheritAriaAttributes, inheritAttributes } from '#utils/helpers';
import {
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

/**
 * Textarea allows users to enter text in multiple lines.
 *
 * @slot - Slot for the content of the label
 *
 * @part label - The native HTML label element that wrap the text .
 * @part native - The native HTML input element.
 */
@Component({
  tag: 'pop-input',
  styleUrl: 'input.scss',
  shadow: true,
  formAssociated: true,
})
export class Input implements ComponentInterface {
  #inputId = `pop-input-${inputIds++}`;
  #inheritedAttributes: Attributes;

  #inJoin: boolean = false;

  #nativeInput!: HTMLInputElement;
  #debounceTimer: NodeJS.Timeout;

  @Element() host!: HTMLElement;

  @State() eventList: Event[] = [];

  /**
   * The name of the control, which is submitted with the form data.
   */
  @Prop() name: string = this.#inputId;

  /**
   * The type of control to display. The default type is text.
   */
  @Prop() type: InputType = 'text';

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
  protected onValueChange() {
    const value = this.#getValue();

    if (value !== this.#nativeInput.value) {
      /**
       * Assigning the native input's value on attribute
       * value change, allows `ionInput` implementations
       * to override the control's value.
       *
       * Used for patterns such as input trimming (removing whitespace),
       * or input masking.
       */
      this.#nativeInput.value = value;
    }
  }

  /**
   * The minimum value, which must not be greater than its maximum (max attribute) value.
   */
  @Prop() min?: number;

  /**
   * The maximum value, which must not be less than its minimum (min attribute) value.
   */
  @Prop() max?: number | string;

  /**
   * Works with the min and max attributes to limit the increments at which a value can be set.
   * Possible values are: `"any"` or a positive floating point number.
   */
  @Prop() step?: string;

  /**
   * This attribute specifies the minimum number of characters that the user can enter.
   */
  @Prop() minLength?: number;

  /**
   * This attribute specifies the maximum number of characters that the user can enter.
   */
  @Prop() maxLength?: number;

  /**
   * If `true`, the user can enter more than one value.
   * This attribute applies when the type attribute is set to `"email"`, otherwise it is ignored.
   */
  @Prop() multiple?: boolean;

  /**
   * A regular expression that the value is checked against.
   * The pattern must match the entire value, not just some subset.
   * Use the title attribute to describe the pattern to help the user.
   * This attribute applies when the value of the type attribute is `"text"`, `"search"`, `"tel"`, `"url"`, `"email"`, `"date"`, or `"password"`, otherwise it is ignored.
   * When the type attribute is `"date"`, `pattern` will only be used in browsers that do not support the `"date"` input type natively.
   * See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date for more information.
   */
  @Prop() pattern?: string;

  /**
   * If `true`, the user must fill in a value before submitting a form.
   */
  @Prop({ reflect: true }) required?: boolean = false;

  /**
   * If `true`, the user cannot modify the value.
   */
  @Prop({ reflect: true }) readonly?: boolean = false;

  /**
   * If `true`, the user cannot interact with the element.
   */
  @Prop({ reflect: true }) disabled?: boolean = false;

  /**
   * If `true`, the element will be focused on page load.
   */
  @Prop({ reflect: true }) autoFocus?: boolean = false;

  /**
   * A hint to the browser for which virtual keyboard to display.
   * Possible values: `"none"`, `"text"`, `"tel"`, `"url"`, `"email"`, `"numeric"`, `"decimal"`, and `"search"`.
   */
  @Prop() keyboard?: KeyboardType;

  /**
   * A hint to the browser for which keyboard to display.
   * That specifies what action label (or icon) to present for the enter key on virtual keyboards.
   *
   * - `enter`: Typically Inserting a new line.
   * - `done`: Typically meaning there is nothing more to input and the input method editor (IME) will be closed.
   * - `go`: Typically meaning to take the user to the target of the text they typed.
   * - `next`: Typically taking the user to the next field that will accept text.
   * - `previous`: Typically taking the user to the previous field that will accept text.
   * - `search`: Typically taking the user to the results of searching for the text they have typed.
   * - `send`: Typically delivering the text to its target.
   */
  @Prop() enterkeyhint?: EnterKeyHint;

  /**
   * If `true`, the element will have its spelling and grammar checked.
   * By default the User Agent make their own default behavior.
   */
  @Prop() spellcheck: boolean = false;

  /**
   * Indicates whether the value of the control can be automatically completed by the browser.
   */
  @Prop() autocomplete?: Autocomplete = 'off';

  /**
   * This features work only on mobile and tablet devices.
   * By default the User Agent and input make their own determination.
   *
   * - `off` or `none`: No autocapitalization is applied (all letters default to lowercase)
   * - `on` or `sentences`: The first letter of each sentence defaults to a capital letter; all other letters default to lowercase
   * - `words`: The first letter of each word defaults to a capital letter; all other letters default to lowercase
   * - `characters`: All letters should default to uppercase
   */
  @Prop() autoCapitalize?: AutoCapitalize;

  /**
   * Whether auto correction should be enabled when the user is entering/editing the text value.
   */
  @Prop() autoCorrect: 'on' | 'off' = 'off';

  /**
   * if `true`, adds border to textarea when `color` property is not set.
   */
  @Prop({ reflect: true }) bordered?: boolean = false;

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
   * Text that is placed under the textarea and displayed when no error is detected.
   */
  @Prop() helperText: string;

  /**
   * Text that is placed under the textarea and displayed when an error is detected.
   */
  @Prop() errorText: string;

  /**
   * If `true`, a character counter will display the ratio of characters used and the total character limit.
   * Developers must also set the `maxlength` property for the counter to be calculated correctly.
   */
  @Prop() counter?: boolean = false;

  /**
   * A callback used to format the counter text.
   * By default the counter text is set to "itemLength / maxLength".
   */
  @Prop() counterFormatter?: (inputLength: number, maxLength: number) => string;

  /**
   * Set the amount of time, in milliseconds, to wait to trigger the ionInput event after each keystroke.
   */
  @Prop() debounce?: number = 0;

  /**
   * The `popChange` event is fired when the user modifies the textarea's value.
   * Unlike the ionInput event, the `popChange` event is fired when the element loses focus after its value has been modified.
   */
  @Event() popChange: EventEmitter<InputChangeEventDetail>;

  /**
   * The `popInput` event is fired each time the user modifies the Input's value.
   * Unlike the `popChange` event, the `popInput` event is fired for each alteration to the textarea's value.
   * This typically happens for each keystroke as the user types.
   *
   * This event can be debouced by the `debounce` property.
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

  componentWillLoad(): void {
    this.#inheritedAttributes = {
      ...inheritAriaAttributes(this.host),
      ...inheritAttributes(this.host, ['tabindex', 'title', 'data-form-type']),
    };
    this.#inJoin = !!this.host.closest('pop-join');

    if (this.counter && this.maxLength === undefined) {
      console.warn(`The 'maxLength' attribut must be specified.`);
    }
  }

  disconnectedCallback(): void {
    clearTimeout(this.#debounceTimer);
  }

  /**
   * Sets focus on the native `textarea` in `pop-textarea`. Use this method instead of the global
   * `textarea.focus()`.
   */
  @Method()
  async setFocus(): Promise<void> {
    this.#nativeInput?.focus();
  }

  #getValue(): string {
    if (typeof this.value === 'number') return this.value.toString();
    return this.value || '';
  }

  get #counterText(): string {
    if (!this.counter) return null;
    const { maxLength } = this;
    const length = this.#getValue().length;

    return this.counterFormatter?.(length, maxLength) ?? `${length} / ${maxLength}`;
  }

  #onChange = () => {
    this.popChange.emit({
      value: this.#getValue(),
    });
  };

  #onInput = () => {
    this.value = this.#nativeInput.value;

    clearTimeout(this.#debounceTimer);
    this.#debounceTimer = setTimeout(() => {
      this.popInput.emit({
        value: this.#getValue(),
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
    const inputId = this.#inputId;

    return (
      <Host
        aria-labelledby={inputId}
        aria-hidden={this.disabled ? 'true' : null}
        class={{
          'join-item': this.#inJoin,
        }}
      >
        <div class="label">
          <label htmlFor={inputId} part="label">
            <slot />
          </label>
        </div>
        <label htmlFor={inputId} class="input-wrapper">
          <slot name="start" />
          <input
            part="native"
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
            autoComplete={this.autocomplete}
            autoCapitalize={this.autoCapitalize}
            autoCorrect={this.autoCorrect}
            onChange={this.#onChange}
            onInput={this.#onInput}
            onFocus={this.#onFocus}
            onBlur={this.#onBlur}
            ref={el => (this.#nativeInput = el)}
            {...this.#inheritedAttributes}
          />
          <slot name="end" />
        </label>
        <div class="text-wrapper">
          {this.errorText ? <span class="error-text">{this.errorText}</span> : null}
          {this.helperText ? <span class="helper-text">{this.helperText}</span> : null}
          {this.maxLength !== undefined ? <span class="counter-text">{this.#counterText}</span> : null}
        </div>
      </Host>
    );
  }
}

let inputIds = 0;
