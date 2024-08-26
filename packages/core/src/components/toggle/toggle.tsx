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
import { Show } from '../Show';
import type { ToggleChangeEventDetail, ToggleColor } from './toggle.type';

let toggleIds = 0;

/**
 * Toggle is a checkbox that is styled to look like a switch button.
 *
 * @slot - Slot for the content of the label
 *
 * @part label - The native HTML label element that wrap the text .
 * @part native - The native HTML input element.
 */
@Component({
  tag: 'pop-toggle',
  styleUrl: 'toggle.scss',
  shadow: true,
  formAssociated: true,
})
export class Toggle implements ComponentInterface {
  private inputId = `pop-tg-${toggleIds++}`;
  private inheritedAttributes: Attributes;
  private nativeInput!: HTMLInputElement;

  @Element() host!: HTMLElement;

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
  @Prop({ reflect: true }) value?: string | null = 'on';

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
   * If `true`, the toggle is selected.
   *
   * @config
   * @default false
   */
  @Prop({ reflect: true, mutable: true }) checked?: boolean;
  @Watch('checked')
  onCheckedChange(checked: boolean): void {
    this.indeterminate = false;
    const data = new FormData();
    data.set(this.name, checked.toString());

    this.internals.setFormValue(data, data);
    this.popChange.emit({
      checked,
      value: this.value || '',
    });
  }

  /**
   * If a developer want to use `indeterminate`, `checked` property should be set to `false`
   *
   * @config
   * @default false
   */
  @Prop({ reflect: true, mutable: true }) indeterminate?: boolean;

  /**
   * If true, the user cannot interact with the native element.
   *
   * @config
   * @default false
   */
  @Prop({ reflect: true, mutable: true }) disabled: boolean;

  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"accent"`, `"ghost"`, `"info"`, `"success"`, `"warning"`, `"error"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   *
   * @config
   */
  @Prop({ reflect: true, mutable: true }) color?: ToggleColor;

  /**
   * Change size of the component
   * Options are: `"xs"`, `"sm"`, `"md"`, `"lg"`.
   *
   * @config
   * @default "md"
   */
  @Prop({ reflect: true, mutable: true }) size?: Size;

  /**
   * Emitted when the input checked attribut change
   */
  @Event() popChange: EventEmitter<ToggleChangeEventDetail>;

  /**
   * Emitted when the input has focus.
   */
  @Event() popFocus: EventEmitter<void>;

  /**
   * Emitted when the input loses focus.
   */
  @Event() popBlur: EventEmitter<void>;

  formResetCallback(): void {
    this.checked = false;
  }

  formStateRestoreCallback(state: string): void {
    this.checked = state === 'true';
  }

  componentWillLoad(): void {
    this.inheritedAttributes = inheritAriaAttributes(this.host);

    componentConfig.apply(this, 'pop-toggle', {
      required: false,
      readonly: false,
      checked: false,
      indeterminate: false,
      disabled: false,
      size: config.get('defaultSize', 'md'),
    });
  }

  /**
   * Sets focus on the native `input` in `pop-toggle`. Use this method instead of the global
   * `input.focus()`.
   */
  @Method()
  async setFocus(): Promise<void> {
    this.nativeInput?.focus();
  }

  private onClick = () => {
    const { checked, disabled, readonly } = this;
    if (disabled || readonly) return;

    this.checked = !checked;
  };

  private onChecked = (ev: Event) => {
    const input = ev.target as HTMLInputElement;
    this.checked = input.checked;
  };

  private onFocus = () => {
    this.popFocus.emit();
  };

  private onBlur = () => {
    this.popBlur.emit();
  };

  render() {
    const { host, name, disabled, checked, inputId } = this;

    const hasLabel = host.textContent !== '';

    return (
      <Host
        aria-labelledby={inputId}
        aria-checked={`${checked}`}
        aria-hidden={disabled ? 'true' : null}
        onClick={this.onClick}
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
          type="checkbox"
          role="switch"
          part="native"
          id={inputId}
          name={name}
          aria-checked={`${checked}`}
          indeterminate={this.indeterminate}
          required={this.required}
          readOnly={this.readonly}
          checked={checked}
          disabled={disabled}
          onChange={this.onChecked}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          ref={el => (this.nativeInput = el)}
          {...this.inheritedAttributes}
        />
      </Host>
    );
  }
}
