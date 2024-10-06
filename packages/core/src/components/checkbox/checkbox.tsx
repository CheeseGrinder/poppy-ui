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
import type { Color, Size } from 'src/interface';
import { componentConfig, config } from '#config';
import { type Attributes, getHostContextProperty, hostContext, inheritAriaAttributes } from '#utils/helpers';
import { Show } from '../Show';
import type { CheckboxChangeEventDetail, CheckboxPlacement } from './checkbox.type';

let checkboxIds = 0;

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
  private inputId = `pop-cb-${checkboxIds++}`;
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
  onCheckedChange(newChecked: boolean): void {
    this.indeterminate = false;

    this.popChange.emit({
      checked: newChecked,
      value: this.value || '',
    });
    this.internals.setFormValue(newChecked ? this.value : '', newChecked.toString());
    this.internals.ariaChecked = newChecked.toString();
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
   * Default options are: `"primary"`, `"secondary"`, `"accent"`, `"info"`, `"success"`, `"warning"`, `"error"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   *
   * @config
   */
  @Prop({ reflect: true, mutable: true }) color?: Color;

  /**
   * Change size of the component
   * Options are: `"xs"`, `"sm"`, `"md"`, `"lg"`.
   *
   * @config
   * @default "md"
   */
  @Prop({ reflect: true, mutable: true }) size?: Size;

  /**
   * Where to place the label relative to the checkbox.
   * - `"start"`: The label will appear to the left of the checkbox in LTR and to the right in RTL.
   * - `"end"`: The label will appear to the right of the checkbox in LTR and to the left in RTL.
   *
   * @config
   * @default "start"
   */
  @Prop({ reflect: true, mutable: true }) placement?: CheckboxPlacement;

  /**
   * Emitted when the user switches the toggle on or off.
   */
  @Event() popChange: EventEmitter<CheckboxChangeEventDetail>;

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

    componentConfig.apply(this, 'pop-checkbox', {
      required: false,
      readonly: false,
      checked: false,
      indeterminate: false,
      disabled: false,
      size: config.get('defaultSize', 'md'),
      placement: 'start',
    });
  }

  /**
   * Sets focus on the native `input` in `pop-checkbox`. Use this method instead of the global
   * `input.focus()`.
   */
  @Method()
  async setFocus(): Promise<void> {
    this.nativeInput?.focus();
  }

  private onClick = (): void => {
    const { disabled, readonly } = this;
    if (disabled || readonly) return;

    this.checked = !this.checked;
  };

  private onChecked = (ev: Event): void => {
    const input = ev.target as HTMLInputElement;
    this.checked = input.checked;
  };

  private onFocus = (): void => {
    this.popFocus.emit();
  };

  private onBlur = (): void => {
    this.popBlur.emit();
  };

  render() {
    const { host, name, disabled, checked, indeterminate } = this;
    const inputId = this.inputId;
    const ariaChecked = indeterminate ? 'mixed' : checked ? 'true' : 'false';

    const hasLabel = host.textContent !== '';
    const listSize = getHostContextProperty(host, 'pop-list', 'size', 'md');

    return (
      <Host
        aria-checked={ariaChecked}
        aria-hidden={disabled ? 'true' : null}
        aria-labelledby={inputId}
        class={{
          'in-list': hostContext(host, 'pop-list'),
          [`in-list-${listSize}`]: listSize !== null,
          'in-item': hostContext(host, 'pop-item'),
        }}
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
          aria-checked={ariaChecked}
          checked={checked}
          disabled={disabled}
          id={inputId}
          indeterminate={this.indeterminate}
          name={name}
          onBlur={this.onBlur}
          onChange={this.onChecked}
          onFocus={this.onFocus}
          part="native"
          readOnly={this.readonly}
          ref={el => (this.nativeInput = el)}
          required={this.required}
          type="checkbox"
          {...this.inheritedAttributes}
        />
      </Host>
    );
  }
}
