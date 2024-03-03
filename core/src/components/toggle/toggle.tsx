import type { Color, Size } from 'src/interfaces';
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
  h,
} from '@stencil/core';
import { Show } from '../Show';

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
  #inputId = `pop-tg-${toggleIds++}`;
  #inheritedAttributes: Attributes;
  #nativeInput!: HTMLInputElement;

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
  @Prop({ reflect: true }) value?: string | null = 'on';

  /**
   * If `true`, the user must fill in a value before submitting a form.
   */
  @Prop({ reflect: true }) required?: boolean = false;

  /**
   * If `true`, the user cannot modify the value.
   */
  @Prop({ reflect: true }) readonly?: boolean = false;

  /**
   * If `true`, the toggle is selected.
   */
  @Prop({ reflect: true, mutable: true }) checked?: boolean = false;
  @Watch('checked')
  onCheckedChange(checked: boolean): void {
    this.indeterminate = false;

    this.internals.setFormValue(this.value, checked.toString());
    this.popChange.emit({
      checked,
      value: this.value || '',
    });
  }

  /**
   * If a developer want to use `indeterminate`, `checked` property should be set to `false`
   */
  @Prop({ reflect: true, mutable: true }) indeterminate?: boolean = false;

  /**
   * If true, the user cannot interact with the native element.
   */
  @Prop({ reflect: true }) disabled: boolean;

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
   * Emitted when the input checked attribut change
   */
  @Event() popChange: EventEmitter<ToggleChangeEventDetail<string>>;

  /**
   * Emitted when the input has focus.
   */
  @Event() popFocus: EventEmitter<void>;

  /**
   * Emitted when the input loses focus.
   */
  @Event() popBlur: EventEmitter<void>;

  formResetCallback() {
    this.checked = false;
  }

  formStateRestoreCallback(state: string) {
    this.checked = state === 'true';
  }

  componentWillLoad() {
    this.#inheritedAttributes = inheritAriaAttributes(this.host);
  }

  /**
   * Sets focus on the native `input` in `pop-toggle`. Use this method instead of the global
   * `input.focus()`.
   */
  @Method()
  async setFocus(): Promise<void> {
    this.#nativeInput?.focus();
  }

  #onClick = () => {
    const { checked, disabled, readonly } = this;
    if (disabled || readonly) return;

    this.checked = !checked;
  };

  #onChecked = (ev: Event) => {
    const input = ev.target as HTMLInputElement;
    this.checked = input.checked;
  };

  #onFocus = () => {
    this.popFocus.emit();
  };

  #onBlur = () => {
    this.popBlur.emit();
  };

  render() {
    const { host, name, disabled, checked } = this;
    const inputId = this.#inputId;

    const hasLabel = host.textContent !== '';

    return (
      <Host
        aria-labelledby={inputId}
        aria-checked={`${checked}`}
        aria-hidden={disabled ? 'true' : null}
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
          onChange={this.#onChecked}
          onFocus={this.#onFocus}
          onBlur={this.#onBlur}
          ref={el => (this.#nativeInput = el)}
          {...this.#inheritedAttributes}
        />
      </Host>
    );
  }
}

let toggleIds = 0;
