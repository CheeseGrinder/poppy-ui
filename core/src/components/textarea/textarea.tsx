import { Attributes, hostContext, inheritAriaAttributes } from '#utils/helpers';
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
import { AutoCapitalize, Color, EnterKeyHint, KeyboardType, Size, Wrap } from 'src/type';
import { Show } from '../Show';

/**
 * Textarea allows users to enter text in multiple lines.
 *
 * @slot - Slot for the content of the label
 *
 * @part label - The native HTML label element that wrap the text .
 * @part native - The native HTML input element.
 */
@Component({
  tag: 'pop-textarea',
  styleUrl: 'textarea.scss',
  shadow: true,
  formAssociated: true,
})
export class Textarea implements ComponentInterface {
  #inputId = `pop-textarea-${textareaIds++}`;
  #inheritedAttributes: Attributes;
  #resizeObserver: MutationObserver;

  #nativeInput!: HTMLTextAreaElement;
  #debounceTimer: NodeJS.Timeout;

  @Element() host!: HTMLElement;
  
  @AttachInternals() internals: ElementInternals;

  @State() textareaWidth: string;

  /**
   * The name of the control, which is submitted with the form data.
   */
  @Prop() name: string = this.#inputId;

  /**
   * Instructional text that shows before the input has a value.
   */
  @Prop() placeholder?: string;

  /**
   * The value of the toggle does not mean if it's checked or not, use the `checked`
   * property for that.
   *
   * The value of a toggle is analogous to the value of a `<input type="checkbox">`,
   * it's only used when the toggle participates in a native `<form>`.
   */
  @Prop({ mutable: true }) value?: string | null = '';
  @Watch('value')
  onValueChange(value: string): void {
    this.internals.setFormValue(value, value);
  }

  /**
   * This attribute specifies the minimum number of characters that the user can enter.
   */
  @Prop() minLength?: number;

  /**
   * This attribute specifies the maximum number of characters that the user can enter.
   */
  @Prop() maxLength?: number;

  /**
   * The visible width of the text control, in average character widths.
   * If it is specified, it must be a positive integer.
   */
  @Prop() cols?: number;

  /**
   * The number of visible text lines for the control.
   */
  @Prop() rows?: number;

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
   * Indicates how the control wraps text.
   *
   * - `soft`: Text is not to be wrapped when submitted (though can still be wrapped in the rendering).
   * - `hard`: Text is to have newlines added by the user agent so that the text is wrapped when it is submitted.
   *
   * If wrap attribute is in the `hard` state, the `cols` property must be specified.
   */
  @Prop() wrap?: Wrap;

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
  @Event() popChange: EventEmitter<TextareaChangeEventDetail>;

  /**
   * The `popInput` event is fired each time the user modifies the textarea's value.
   * Unlike the `popChange` event, the `popInput` event is fired for each alteration to the textarea's value.
   * This typically happens for each keystroke as the user types.
   *
   * This event can be debouced by the `debounce` property.
   */
  @Event() popInput: EventEmitter<TextareaInputEventDetail>;

  /**
   * Emitted when the input has focus.
   */
  @Event() popFocus: EventEmitter<void>;

  /**
   * Emitted when the input loses focus.
   */
  @Event() popBlur: EventEmitter<void>;

  formResetCallback() {
    this.value = '';
  }

  formStateRestoreCallback(state: string) {
    this.value = state;
  }

  componentWillLoad(): void {
    this.#inheritedAttributes = inheritAriaAttributes(this.host);

    if (this.counter && this.maxLength === undefined) {
      console.warn(`The 'maxLength' attribut must be specified.`);
    }
    if (this.wrap === 'hard' && this.cols === undefined) {
      console.warn(`The 'cols' attribut must be specified.`);
    }
  }

  componentDidLoad(): void {
    this.#resizeObserver = new MutationObserver(() => {
      this.textareaWidth = this.#nativeInput.style.width;
    });
    this.#resizeObserver.observe(this.#nativeInput, {
      attributes: true,
      attributeFilter: ['style'],
    });
  }

  disconnectedCallback(): void {
    clearTimeout(this.#debounceTimer);
    this.#resizeObserver.disconnect();
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
    return this.value || '';
  }

  get #counterText(): string {
    if (!this.counter) return null;
    const { maxLength } = this;
    const length = this.#getValue().length;

    return this.counterFormatter?.(length, maxLength) ?? `${length} / ${maxLength}`;
  }

  #onChange = () => {
    this.value = this.#nativeInput.value;
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
    const { host, value, helperText, errorText } = this;
    const inputId = this.#inputId;
    const counter = this.#counterText;

    const hasLabel = host.textContent !== '';
    const hasError = !!errorText;
    const hasHelper = !!helperText;
    const hasCounter = counter !== '';
    const hasBottomText = hasError || hasHelper || hasCounter;

    return (
      <Host
        style={{
          maxWidth: this.textareaWidth,
        }}
        aria-labelledby={inputId}
        aria-hidden={this.disabled ? 'true' : null}
        class={{
          'join-item': hostContext(host, 'pop-join'),
        }}
      >
        <Show when={hasLabel}>
          <div class="label">
            <label htmlFor={inputId} part="label">
              <slot />
            </label>
          </div>
        </Show>
        <textarea
          part="native"
          id={inputId}
          name={this.name}
          placeholder={this.placeholder || ''}
          minLength={this.minLength}
          maxLength={this.maxLength}
          rows={this.rows}
          cols={this.cols}
          required={this.required}
          readonly={this.readonly}
          disabled={this.disabled}
          autoFocus={this.autoFocus}
          inputMode={this.keyboard}
          enterKeyHint={this.enterkeyhint}
          spellcheck={this.spellcheck}
          autoCapitalize={this.autoCapitalize}
          wrap={this.wrap}
          onChange={this.#onChange}
          onInput={this.#onInput}
          onFocus={this.#onFocus}
          onBlur={this.#onBlur}
          ref={el => (this.#nativeInput = el)}
          {...this.#inheritedAttributes}
        >
          {value}
        </textarea>
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

let textareaIds = 0;
