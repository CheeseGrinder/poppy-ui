import {
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
import { ARROW_DOWN, ARROW_UP } from 'key-definitions';
import type { Color, Size } from 'src/interface';
import type { SelectContentConfig, SelectContentOption } from './select-content.type';

/**
 * @internal
 */
@Component({
  tag: 'pop-select-content',
  styleUrl: 'select-content.scss',
  shadow: true,
})
export class SelectContent implements SelectContentConfig, ComponentInterface {
  @Element() host: HTMLElement;

  /**
   * @internal
   */
  @Prop({ mutable: true }) value?: any | any[] | null = null;
  @Watch('value')
  onValueChange() {
    this.popSelected.emit();
  }

  /**
   * @internal
   */
  @Prop() multiple: boolean;

  /**
   * @internal
   */
  @Prop() required: boolean;

  /**
   * @internal
   */
  @Prop() color: Color;

  /**
   * @internal
   */
  @Prop() size: Size;

  /**
   * @internal
   */
  @Prop() options: SelectContentOption[] = [];

  /**
   * @internal
   */
  @Event() popSelected: EventEmitter<void>;

  componentWillLoad(): void {
    for (const element of this.elements) {
      element.checked = Array.isArray(this.value)
        ? this.value?.includes(element.textContent) || this.value?.includes(element.value)
        : this.value === element.textContent || this.value?.includes(element.value);
    }
  }

  /**
   * @internal
   */
  @Method() async select(direction: 'up' | 'down') {
    await this.elements.at(direction === 'down' ? 0 : -1).setFocus();
  }

  private get elements() {
    return Array.from(this.host.shadowRoot.querySelectorAll(this.multiple ? 'pop-checkbox' : 'pop-radio'));
  }

  private renderCheckboxOptions() {
    return (
      <pop-list>
        {this.options.map((option, idx) => (
          <pop-item>
            <pop-checkbox
              color={this.color}
              disabled={option.disabled}
              onKeyUp={async ev => {
                if (ev.key !== ARROW_DOWN.key && ev.key !== ARROW_UP.key) {
                  return;
                }
                ev.preventDefault();
                const checkboxes = this.host.shadowRoot?.querySelectorAll('pop-checkbox') ?? [];
                if (checkboxes.length === 0) {
                  return;
                }

                const previous = idx === 0 ? this.options.length - 1 : idx - 1;
                const next = idx === this.options.length - 1 ? 0 : idx + 1;
                const index = ev.key === ARROW_UP.key ? previous : next;
                return Array.from(checkboxes).at(index).setFocus();
              }}
              onPopChange={() => {
                this.value = Array.from(this.host.shadowRoot.querySelectorAll('pop-checkbox'))
                  .filter(checkbox => !checkbox.disabled && checkbox.checked)
                  .map(checkbox => checkbox.value);
              }}
              size={this.size}
              value={option.value}
            >
              {option.label}
            </pop-checkbox>
          </pop-item>
        ))}
      </pop-list>
    );
  }

  private renderRadioOptions() {
    return (
      <pop-radio-group
        allowEmpty={!this.required}
        onPopChange={async ev => {
          this.value = ev.detail.value;
        }}
        value={this.value}
      >
        <pop-list>
          {this.options.map((option, idx) => (
            <pop-item>
              <pop-radio
                color={this.color}
                disabled={option.disabled}
                onKeyUp={ev => {
                  console.log(ev);
                  if (ev.key !== ARROW_DOWN.key && ev.key !== ARROW_UP.key) {
                    return;
                  }
                  ev.preventDefault();
                  const radios = this.host?.shadowRoot.querySelectorAll('pop-radio') ?? [];
                  console.log(this.host, radios);
                  if (radios.length === 0) {
                    return;
                  }

                  const previous = idx === 0 ? this.options.length - 1 : idx - 1;
                  const next = idx === this.options.length - 1 ? 0 : idx + 1;
                  const index = ev.key === ARROW_UP.key ? previous : next;
                  return Array.from(radios).at(index).setFocus();
                }}
                size={this.size}
                value={option.value}
              >
                {option.label}
              </pop-radio>
            </pop-item>
          ))}
        </pop-list>
      </pop-radio-group>
    );
  }

  render() {
    return <Host>{this.multiple ? this.renderCheckboxOptions() : this.renderRadioOptions()}</Host>;
  }
}
