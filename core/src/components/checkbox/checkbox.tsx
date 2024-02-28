import type { Color, Placement, Size } from '#utils/element-interface';
import { Attributes, hostContext, inheritAriaAttributes } from '#utils/helpers';
import {
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
 * Toggles are switches that change the state of a single option.
 * They can be switched on or off by pressing.
 * Toggles can also be `"checked"` programmatically by setting the checked property.
 *
 * @slot - The label text to associate with the toggle. Use the `"placement"` property to control where the label is placed relative to the toggle.
 *
 * @part label - The label text describing the toggle.
 * @part native - The native HTML input element.
 */
@Component({
  tag: 'pop-checkbox',
  styleUrl: 'checkbox.scss',
  shadow: true,
  formAssociated: true,
})
export class Checkbox implements ComponentInterface {
  #inputId = `pop-cb-${checkboxIds++}`;
  #inheritedAttributes: Attributes;
  #nativeInput!: HTMLInputElement;

  #listSize?: Size;

  @Element() host!: HTMLElement;

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
  onCheckedChange(newChecked: boolean): void {
    this.indeterminate = false;

    this.popChange.emit({
      checked: newChecked,
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
   * Default options are: `"primary"`, `"secondary"`, `"accent"`, `"info"`, `"success"`, `"warning"`, `"error"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   */
  @Prop({ reflect: true }) color?: Color;

  /**
   * Change size of the component
   * Options are: `"xs"`, `"sm"`, `"md"`, `"lg"`.
   */
  @Prop({ reflect: true }) size?: Size;

  /**
   * Where to place the label relative to the checkbox.
   * - `"start"`: The label will appear to the left of the checkbox in LTR and to the right in RTL.
   * - `"end"`: The label will appear to the right of the checkbox in LTR and to the left in RTL.
   */
  @Prop({ reflect: true }) placement?: Placement = 'start';

  /**
   * Emitted when the user switches the toggle on or off.
   */
  @Event() popChange: EventEmitter<CheckboxChangeEventDetail<string>>;

  /**
   * Emitted when the input has focus.
   */
  @Event() popFocus: EventEmitter<void>;

  /**
   * Emitted when the input loses focus.
   */
  @Event() popBlur: EventEmitter<void>;

  componentWillLoad() {
    this.#inheritedAttributes = inheritAriaAttributes(this.host);
    this.#listSize = this.host.closest('pop-list')?.size || null;
  }

  /**
   * Sets focus on the native `input` in `pop-checkbox`. Use this method instead of the global
   * `input.focus()`.
   */
  @Method()
  async setFocus(): Promise<void> {
    this.#nativeInput?.focus();
  }

  #onClick = () => {
    const { disabled, readonly } = this;
    if (disabled || readonly) return;

    this.checked = !this.checked;
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
        class={{
          'in-list': hostContext(host, 'pop-list'),
          [`in-list-${this.#listSize}`]: this.#listSize !== null,
          'in-item': hostContext(host, 'pop-item'),
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
          type="checkbox"
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

let checkboxIds = 0;
