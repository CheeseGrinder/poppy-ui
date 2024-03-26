import { componentConfig } from '#config';
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
   *
   * @config @default 'left'
   */
  @Prop({ reflect: true, mutable: true }) side?: 'left' | 'right' | 'start' | 'center' | 'end';

  /**
   * Align vertically the indicator.
   *
   * @config @default 'top'
   */
  @Prop({ reflect: true, mutable: true }) position?: 'top' | 'middle' | 'bottom';

  componentWillLoad(): void {
    componentConfig.apply(this, 'pop-indicator', {
      side: 'left',
      position: 'top',
    });
  }

  render() {
    return (
      <Host>
        <slot name="indicator" />
        <slot />
      </Host>
    );
  }
}
