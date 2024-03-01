import { Component, ComponentInterface, Host, Prop, h } from '@stencil/core';

/**
 * Indicators are used to place an element on the corner of another element.
 *
 * @slot indicator - Content of the indicator
 * @slot - Element that should receive the indicator
 */
@Component({
  tag: 'pop-indicator',
  styleUrl: 'indicator.scss',
  shadow: true,
})
export class Indicator implements ComponentInterface {
  /**
   * Align horizontally the indicator.
   */
  @Prop({ reflect: true }) side?: 'left' | 'right' | 'start' | 'center' | 'end';

  /**
   * Align vertically the indicator.
   */
  @Prop({ reflect: true }) position?: 'top' | 'middle' | 'bottom';

  render() {
    return (
      <Host>
        <slot name="indicator" />
        <slot />
      </Host>
    );
  }
}
