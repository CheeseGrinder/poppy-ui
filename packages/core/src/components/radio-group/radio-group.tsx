import {
  AttachInternals,
  Component,
  type ComponentInterface,
  Element,
  Event,
  type EventEmitter,
  Host,
  Prop,
  Watch,
  h,
} from '@stencil/core';
import type { Color, Size } from 'src/interface';
import { componentConfig, config } from '#config';
import type { RadioGroupChangeEventDetail, RadioGroupCompareFn } from './radio-group.type';

let radioGroupIds = 0;

/**
 * @slot - Slot for all of the `pop-radio`
 */
@Component({
  tag: 'pop-radio-group',
  formAssociated: true,
})
export class RadioGroup implements ComponentInterface {
  private inputId = `pop-rg-${radioGroupIds++}`;
  private initialValue: any;

  @Element() host!: HTMLElement;

  @AttachInternals() internals: ElementInternals;

  /**
   * The name of the control, which is submitted with the form data.
   */
  @Prop({ reflect: true }) name: string = this.inputId;

  /**
   * the value of the radio group.
   */
  @Prop({ mutable: true }) value?: any | null;
  @Watch('value')
  onValueChange(value: any) {
    const data = new FormData();
    data.set(this.name, value);

    this.internals.setFormValue(data, data);
    this.popValueChange.emit({
      value,
    });
    this.popChange.emit({
      value,
    });
  }

  /**
   * If `true`, apply the required property to every `pop-radio`.
   *
   * @config
   * @default false
   */
  @Prop({ reflect: true, mutable: true }) required?: boolean;

  /**
   * If `true`, apply the disabled property to every `pop-radio`.
   *
   * @config
   * @default false
   */
  @Prop({ reflect: true, mutable: true }) disabled?: boolean;

  /**
   * If `true`, the radios can be deselected.
   *
   * @config
   * @default false
   */
  @Prop({ mutable: true }) allowEmpty?: boolean;

  /**
   * This property allows developers to specify a custom function
   * for comparing objects when determining the selected option in the
   * ion-radio-group. When not specified, the default behavior will use strict
   * equality (===) for comparison.
   *
   * @config
   */
  @Prop({ mutable: true }) compare?: RadioGroupCompareFn | string | null;

  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"accent"`, `"info"`, `"success"`, `"warning"`, `"error"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   *
   * If the `pop-radio` as no color, it will apply to it
   *
   * @config
   */
  @Prop({ reflect: true, mutable: true }) color?: Color;

  /**
   * Change size of the component
   * Options are: `"xs"`, `"sm"`, `"md"`, `"lg"`.
   *
   * If the `pop-radio` as no size, it will apply to it
   *
   * @config
   * @default "md"
   */
  @Prop({ reflect: true, mutable: true }) size?: Size;

  /**
   * The `popChange` event is fired when the user select an option.
   * Unlike the ionInput event, the `popChange` event is fired when the user click on the element.
   */
  @Event() popChange: EventEmitter<RadioGroupChangeEventDetail>;

  /**
   * Emitted when the `value` property has changed.
   * This is used to ensure that `ion-radio` can respond
   * to any value property changes from the group.
   *
   * @internal
   */
  @Event() popValueChange!: EventEmitter<RadioGroupChangeEventDetail>;

  formResetCallback(): void {
    this.value = this.initialValue;
  }

  formStateRestoreCallback(state: FormData): void {
    this.value = state.get(this.name) as any;
  }

  connectedCallback(): void {
    if (!this.value) {
      return;
    }
    const data = new FormData();
    data.set(this.name, this.value.toString());
    this.internals.setFormValue(data, data);
  }

  componentWillLoad(): void {
    componentConfig.apply(this, 'pop-radio-group', {
      required: false,
      disabled: false,
      allowEmpty: false,
      size: config.get('defaultSize', 'md'),
    });

    this.initialValue = this.value;
  }

  componentDidLoad(): void {
    for (const radio of this.radios) {
      radio.name = this.name;

      if (this.required) {
        radio.required = this.required;
      }
      if (this.disabled) {
        radio.disabled = this.disabled;
      }
      if (this.color) {
        radio.color = this.color;
      }
      if (this.size) {
        radio.size = this.size;
      }
    }

    this.applyCheck();
  }

  private applyCheck(): void {
    if (this.value) {
      this.popValueChange.emit({
        value: this.value,
      });
      return;
    }
    if (this.allowEmpty) return;

    const radios = this.radios;
    const radio = radios.find(radio => !radio.disabled);

    if (!radio) return;
    radio.checked = true;
    this.value = radio.value;
  }

  private get radios() {
    return Array.from(this.host.querySelectorAll('pop-radio'));
  }

  private onClick = (ev: Event) => {
    ev.preventDefault();

    const target = ev.target as HTMLElement;
    const radio = target.closest('pop-radio');

    if (!radio || radio.disabled) return;

    const currentValue = this.value;
    const newValue = radio.value;

    this.value = currentValue !== newValue ? newValue : this.allowEmpty ? undefined : newValue;
  };

  render() {
    return (
      <Host onClick={this.onClick}>
        <slot />
      </Host>
    );
  }
}
