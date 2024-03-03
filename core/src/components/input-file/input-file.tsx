import { Color, Size } from 'src/interfaces';
import { Attributes, hostContext, inheritAriaAttributes, inheritAttributes } from '#utils/helpers';
import { AttachInternals, Component, ComponentInterface, Element, Event, EventEmitter, Host, Method, Prop, Watch, h } from '@stencil/core';
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
  tag: 'pop-input-file',
  styleUrl: 'input-file.scss',
  shadow: true,
  formAssociated: true,
})
export class InputFile implements ComponentInterface {
  #inputId = `pop-input-file-${inputIds++}`;
  #inheritedAttributes: Attributes;

  #nativeInput!: HTMLInputElement;
  #debounceTimer: NodeJS.Timeout;

  @Element() host!: HTMLElement;

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
  @Prop({ mutable: true }) value?: File | File[] | null;
  @Watch('value')
  onValueChange(file: File): void {
    this.internals.setFormValue(file, file);
  }

  /**
   * If `true`, the user can enter more than one value.
   * This attribute applies when the type attribute is set to `"email"`, otherwise it is ignored.
   */
  @Prop() multiple?: boolean;

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
   * The `popChange` event is fired when the user modifies the textarea's value.
   * Unlike the ionInput event, the `popChange` event is fired when the element loses focus after its value has been modified.
   */
  @Event() popChange: EventEmitter<InputFileChangeEventDetail>;

  /**
   * Emitted when the input has focus.
   */
  @Event() popFocus: EventEmitter<void>;

  /**
   * Emitted when the input loses focus.
   */
  @Event() popBlur: EventEmitter<void>;

  formResetCallback() {
    this.value = null;
    this.#nativeInput.value = null;
  }

  formStateRestoreCallback(state: File) {
    this.value = state;
  }

  componentWillLoad(): void {
    this.#inheritedAttributes = {
      ...inheritAriaAttributes(this.host),
      ...inheritAttributes(this.host, ['tabindex', 'title', 'data-form-type']),
    };
  }

  // TODO: Tester si ça fonctionne
  componentDidLoad(): void {
    const { value } = this;
    const files = Array.isArray(value) ? value : [value];
    files.forEach((file, idx) => (this.#nativeInput.files[idx] = file));
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

  #getValue(): File[] {
    return Array.from(this.#nativeInput.files);
  }

  #onChange = () => {
    this.popChange.emit({
      value: this.#getValue(),
    });
  };

  #onFocus = () => {
    this.popFocus.emit();
  };

  #onBlur = () => {
    this.popBlur.emit();
  };

  render() {
    const { host, errorText, helperText } = this;
    const inputId = this.#inputId;

    const hasLabel = host.textContent !== '';
    const hasError = !!errorText;
    const hasHelper = !!helperText;
    const hasBottomText = hasError || hasHelper;

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
            <label htmlFor={inputId} part="label">
              <slot />
            </label>
          </div>
        </Show>
        <input
          part="native"
          type="file"
          id={inputId}
          name={this.name}
          multiple={this.multiple}
          required={this.required}
          readonly={this.readonly}
          disabled={this.disabled}
          autoFocus={this.autoFocus}
          onChange={this.#onChange}
          onFocus={this.#onFocus}
          onBlur={this.#onBlur}
          ref={el => (this.#nativeInput = el)}
          {...this.#inheritedAttributes}
        />
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

let inputIds = 0;
