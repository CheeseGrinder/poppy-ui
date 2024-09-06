import { componentConfig, config } from '#config';
import { type Attributes, hostContext, inheritAriaAttributes } from '#utils/helpers';
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
  State,
  Watch,
  h,
} from '@stencil/core';
import type { AutoCapitalize, EnterKeyHint, KeyboardType, Size } from 'src/interface';
import { Show } from '../Show';
import type { TextareaChangeEventDetail, TextareaColor, TextareaInputEventDetail, Wrap } from './textarea.type';

let textareaIds = 0;

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
  private inputId = `pop-textarea-${textareaIds++}`;
  private inheritedAttributes: Attributes;
  private resizeObserver?: MutationObserver;

  private nativeInput!: HTMLTextAreaElement;
  private debounceTimer: NodeJS.Timeout;

  @Element() host!: HTMLElement;

  @AttachInternals() internals: ElementInternals;

  @State() textareaWidth: string;

  /**
   * The name of the control, which is submitted with the form data.
   */
  @Prop() name: string = this.inputId;

  /**
   * Instructional text that shows before the input has a value.
   */
  @Prop() placeholder?: string;

  /**
   * The value of the textarea.
   *
   * @default ""
   */
  @Prop({ mutable: true }) value?: string | null = '';
  @Watch('value')
  onValueChange(value: string): void {
    const data = new FormData();
    data.set(this.name, value);

    this.internals.setFormValue(data, data);
  }

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
   * The visible width of the text control, in average character widths.
   * If it is specified, it must be a positive integer.
   *
   * @config
   */
  @Prop({ mutable: true }) cols?: number;

  /**
   * The number of visible text lines for the control.
   *
   * @config
   */
  @Prop({ mutable: true }) rows?: number;

  /**
   * If `true`, the user must fill in a value before submitting a form.
   *
   * @config
   * @default false
   */
  @Prop({ reflect: true }) required?: boolean;

  /**
   * If `true`, the user cannot modify the value.
   *
   * @config
   * @default false
   */
  @Prop({ reflect: true }) readonly?: boolean;

  /**
   * If `true`, the user cannot interact with the element.
   *
   * @config
   * @default false
   */
  @Prop({ reflect: true }) disabled?: boolean;

  /**
   * If `true`, the element will be focused on page load.
   */
  @Prop({ reflect: true }) autoFocus?: boolean = false;

  /**
   * A hint to the browser for which virtual keyboard to display.
   *
   * @config
   * @see {@link https://html.spec.whatwg.org/multipage/interaction.html#attr-inputmode}
   */
  @Prop() keyboard?: KeyboardType;

  /**
   * A hint to the browser for which keyboard to display.
   * That specifies what action label (or icon) to present for the enter key on virtual keyboards.
   *
   * @config
   * @see {@link https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-enterkeyhint-attribute}
   */
  @Prop() enterkeyhint?: EnterKeyHint;

  /**
   * If `true`, the element will have its spelling and grammar checked.
   * By default the User Agent make their own default behavior.
   *
   * @config
   * @default false
   */
  @Prop({ mutable: true }) spellcheck: boolean;

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
   * Indicates how the control wraps text.
   *
   * If wrap attribute is in the `hard` state, the `cols` property must be specified.
   *
   * @config
   * @default "soft"
   *
   * @see cols
   * @see {@link https://html.spec.whatwg.org/multipage/form-elements.html#attr-textarea-wrap}
   */
  @Prop({ mutable: true }) wrap?: Wrap;

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
  @Prop({ reflect: true, mutable: true }) color?: TextareaColor;

  /**
   * Change size of the component
   * Options are: `"xs"`, `"sm"`, `"md"`, `"lg"`.
   *
   * @config
   * @default "md"
   */
  @Prop({ reflect: true, mutable: true }) size?: Size;

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

  formResetCallback(): void {
    this.value = '';
  }

  formStateRestoreCallback(state: string): void {
    this.value = state;
  }

  componentWillLoad(): void {
    this.inheritedAttributes = inheritAriaAttributes(this.host);

    componentConfig.apply(this, 'pop-textarea', {
      required: false,
      readonly: false,
      disabled: false,
      spellcheck: false,
      bordered: false,
      size: config.get('defaultSize', 'md'),
      counterFormatter: (length, max) => `${length} / ${max}`,
      debounce: 0,
    });

    if (this.counter && this.maxLength === undefined) {
      console.warn(`The 'maxLength' attribut must be specified.`);
    }
    if (this.wrap === 'hard' && this.cols === undefined) {
      console.warn(`The 'cols' attribut must be specified.`);
    }
  }

  componentDidLoad(): void {
    this.resizeObserver = new MutationObserver(() => {
      this.textareaWidth = this.nativeInput.style.width;
    });
    this.resizeObserver.observe(this.nativeInput, {
      attributes: true,
      attributeFilter: ['style'],
    });
  }

  disconnectedCallback(): void {
    clearTimeout(this.debounceTimer);
    this.resizeObserver?.disconnect();
  }

  /**
   * Sets focus on the native `textarea` in `pop-textarea`. Use this method instead of the global
   * `textarea.focus()`.
   */
  @Method()
  async setFocus(): Promise<void> {
    this.nativeInput?.focus();
  }

  private getValue(): string {
    return this.value || '';
  }

  private get counterText(): string {
    if (!this.counter) return null;
    const { maxLength } = this;
    const length = this.getValue().length;

    return this.counterFormatter?.(length, maxLength) ?? `${length} / ${maxLength}`;
  }

  private onChange = (): void => {
    this.value = this.nativeInput.value;
    this.popChange.emit({
      value: this.getValue(),
    });
  };

  private onInput = (): void => {
    this.value = this.nativeInput.value;

    clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(() => {
      this.popInput.emit({
        value: this.getValue(),
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
    const { host, value, helperText, errorText, counterText, inputId } = this;

    const hasLabel = host.textContent !== '';
    const hasError = !!errorText;
    const hasHelper = !!helperText;
    const hasCounter = counterText !== '';
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
            <label
              htmlFor={inputId}
              part="label"
            >
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
          onChange={this.onChange}
          onInput={this.onInput}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          ref={el => (this.nativeInput = el)}
          {...this.inheritedAttributes}
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
              <span class="counter-text">{counterText}</span>
            </Show>
          </div>
        </Show>
      </Host>
    );
  }
}
