import { Component, type ComponentInterface, Fragment, Host, Prop, h } from '@stencil/core';
import type { Color, Size } from 'src/interface';
import type { CheckboxCustomEvent } from '../checkbox/checkbox.type';
import type { RadioGroupCustomEvent } from '../radio-group/radio-group.type';
import type { SelectPopoverOption } from './select-popover.type';

/**
 *
 * @internal
 */
@Component({
  tag: 'pop-select-popover',
})
export class SelectPopover implements ComponentInterface {
  /**
   * If `true`, allow empty on radio options
   */
  @Prop({ mutable: true }) required?: boolean;

  /**
   * If `true`, the select accepts multiple values
   */
  @Prop({ mutable: true }) multiple?: boolean;

  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"accent"`, `"info"`, `"success"`, `"warning"`, `"error"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   */
  @Prop({ mutable: true }) color?: Color;

  /**
   * Change size of the component
   * Options are: `"xs"`, `"sm"`, `"md"`, `"lg"`.
   */
  @Prop({ mutable: true }) size?: Size;

  /**
   * An array of options for the popover
   */
  @Prop() options: SelectPopoverOption[] = [];

  private findOptionFromEvent(ev: CheckboxCustomEvent | RadioGroupCustomEvent) {
    const { options } = this;
    return options.find(o => o.value === ev.target.value);
  }

  private getValues(ev: CheckboxCustomEvent | RadioGroupCustomEvent): string | string[] | undefined {
    const { multiple, options } = this;

    if (multiple) {
      // this is a popover with checkboxes (multiple value select)
      // return an array of all the checked values
      return options.filter(o => o.checked).map(o => o.value);
    }

    // this is a popover with radio buttons (single value select)
    // return the value that was clicked, otherwise undefined
    const option = this.findOptionFromEvent(ev);
    return option ? option.value : undefined;
  }

  private setChecked(ev: CheckboxCustomEvent): void {
    const { multiple } = this;
    const option = this.findOptionFromEvent(ev);

    if (multiple && option) {
      option.checked = ev.detail.checked;
    }
  }

  private renderRadioOptions() {
    const { options, required, color, size } = this;
    const selected = options.filter(o => o.checked).map(o => o.value)[0];

    return (
      <pop-radio-group
        allowEmpty={!required}
        color={color}
        onPopChange={ev => {
          if (!required && ev.detail.value === undefined) {
            options[0].handler(undefined);
            return;
          }

          const option = this.findOptionFromEvent(ev);
          option?.handler(this.getValues(ev));
        }}
        size={size}
        value={selected}
      >
        {options.map(option => {
          const clazz =
            typeof option.cssClass === 'string'
              ? option.cssClass
              : Object.fromEntries(option.cssClass.map(cls => [cls, true]));

          return (
            <pop-item>
              <pop-radio
                class={clazz}
                color={option.color}
                disabled={option.disabled}
                size={option.size}
                value={option.value}
              >
                {option.text}
              </pop-radio>
            </pop-item>
          );
        })}
      </pop-radio-group>
    );
  }

  private renderCheckboxOptions() {
    const { options } = this;

    return (
      <Fragment>
        {options.map(option => {
          const clazz =
            typeof option.cssClass === 'string'
              ? option.cssClass
              : Object.fromEntries(option.cssClass.map(cls => [cls, true]));

          return (
            <pop-item>
              <pop-checkbox
                checked={option.checked}
                class={clazz}
                color={this.color}
                disabled={option.disabled}
                onPopChange={ev => {
                  this.setChecked(ev);
                  option.handler(this.getValues(ev));
                }}
                size={this.size}
                value={option.value}
              >
                {option.text}
              </pop-checkbox>
            </pop-item>
          );
        })}
      </Fragment>
    );
  }

  private renderOptions() {
    const { multiple } = this;

    if (multiple) return this.renderCheckboxOptions();
    return this.renderRadioOptions();
  }

  render() {
    return (
      <Host>
        <pop-list size={this.size}>{this.renderOptions()}</pop-list>
      </Host>
    );
  }
}
