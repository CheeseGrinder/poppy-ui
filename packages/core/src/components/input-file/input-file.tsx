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
import type { FormAssociatedInterface, Size } from 'src/interface';
import { componentConfig, config } from '#config';
import { type Attributes, hostContext, inheritAriaAttributes, inheritAttributes } from '#utils/helpers';
import { Show } from '../Show';
import type { InputFileChangeEventDetail, InputFileColor } from './input-file.type';

let inputIds = 0;

/**
 * File Input is a an input field for uploading files.
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
export class InputFile implements ComponentInterface, FormAssociatedInterface {
  private inputId = `pop-input-file-${inputIds++}`;
  private inheritedAttributes: Attributes;

  private nativeInput!: HTMLInputElement;

  @Element() host!: HTMLElement;

  @AttachInternals() internals: ElementInternals;

  /**
   * The name of the control, which is submitted with the form data.
   */
  @Prop({ reflect: true }) name: string = this.inputId;

  /**
   * The value of the toggle does not mean if it's checked or not, use the `checked`
   * property for that.
   *
   * The value of a toggle is analogous to the value of a `<input type="checkbox">`,
   * it's only used when the toggle participates in a native `<form>`.
   *
   * @default null
   */
  @Prop({ mutable: true }) value?: File | File[] | null = new File([], '');
  @Watch('value')
  onValueChange(value: File | File[]): void {
    const data = new FormData();
    const files = Array.isArray(value) ? value : [value];
    for (const file of files) {
      data.set(this.name, file);
    }
    this.internals.setFormValue(data, data);
  }

  /**
   * If `true`, the user can enter more than one value.
   * This attribute applies when the type attribute is set to `"email"`, otherwise it is ignored.
   *
   * @config
   * @default false
   */
  @Prop({ reflect: true, mutable: true }) multiple?: boolean;

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
  @Prop({ reflect: true, mutable: true }) color?: InputFileColor;

  /**
   * Change size of the component
   * Options are: `"xs"`, `"sm"`, `"md"`, `"lg"`.
   *
   * @config
   * @default "md"
   */
  @Prop({ reflect: true, mutable: true }) size?: Size;

  /**
   * Text that is placed under the input-file and displayed when no error is detected.
   */
  @Prop() helperText: string;

  /**
   * Text that is placed under the input-file and displayed when an error is detected.
   */
  @Prop() errorText: string;

  /**
   * The `popChange` event is fired when the user modifies the input-file's value.
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

  formResetCallback(): void {
    this.value = new File([], '');
    this.nativeInput.value = '';
  }

  formStateRestoreCallback(state: FormData): void {
    this.value = (state.get(this.name) as File) || new File([], '');
  }

  connectedCallback(): void {
    if (this.value === null) {
      return;
    }
    const files = Array.isArray(this.value) ? this.value : [this.value];
    this.onValueChange(files);
  }

  componentWillLoad(): void {
    this.inheritedAttributes = {
      ...inheritAriaAttributes(this.host),
      ...inheritAttributes(this.host, ['tabindex', 'title', 'data-form-type']),
    };

    componentConfig.apply(this, 'pop-input-file', {
      multiple: false,
      required: false,
      readonly: false,
      disabled: false,
      autoFocus: false,
      bordered: false,
      size: config.get('defaultSize', 'md'),
    });
  }

  /**
   * Sets focus on the native `input` in `pop-input-file`. Use this method instead of the global
   * `input.focus()`.
   */
  @Method()
  async setFocus(): Promise<void> {
    this.nativeInput?.focus();
  }

  private getValue(): File[] {
    return Array.from(this.nativeInput.files);
  }

  private onChange = (): void => {
    const files = this.getValue();
    this.value = files;

    this.popChange.emit({
      value: files,
    });
  };

  private onFocus = (): void => {
    this.popFocus.emit();
  };

  private onBlur = (): void => {
    this.popBlur.emit();
  };

  render() {
    const { host, errorText, helperText, inputId } = this;
    const hasLabel = host.textContent !== '';
    const hasError = !!errorText;
    const hasHelper = !!helperText;
    const hasBottomText = hasError || hasHelper;

    return (
      <Host
        aria-hidden={this.disabled ? 'true' : null}
        aria-labelledby={inputId}
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
        <input
          autoFocus={this.autoFocus}
          disabled={this.disabled}
          id={inputId}
          multiple={this.multiple}
          name={this.name}
          onBlur={this.onBlur}
          onChange={this.onChange}
          onFocus={this.onFocus}
          part="native"
          readonly={this.readonly}
          ref={el => (this.nativeInput = el)}
          required={this.required}
          type="file"
          {...this.inheritedAttributes}
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
