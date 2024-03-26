import { componentConfig } from '#config';
import { Component, ComponentInterface, Host, Prop, h } from '@stencil/core';

/**
 * Swap allows you to toggle the visibility of two elements.
 *
 * @slot off - Slot for element when the swap is inactive
 * @slot on - Slot for element when the swap is active
 */
@Component({
  tag: 'pop-swap',
  styleUrl: 'swap.scss',
  shadow: true,
})
export class Swap implements ComponentInterface {
  /**
   * Choose what animation is used on click.
   *
   * @config @default 'rotate'
   */
  @Prop({ reflect: true, mutable: true }) type?: 'rotate' | 'flip';

  /**
   * Activates the swap.
   * Show whats inside the slot `on`
   *
   * @config @default false
   */
  @Prop({ reflect: true, mutable: true }) active?: boolean;

  /**
   * Activates the swap on hover.
   */
  // @Prop({ reflect: true, mutable: true }) swapOnHover?: boolean;

  componentWillLoad(): void {
    componentConfig.apply(this, 'pop-swap', {
      type: 'rotate',
      active: false,
      // swapOnHover: false,
    });
  }

  // #onClick = (): void => {
  //   if (!this.swapOnHover) this.active = !this.active;
  // };

  render() {
    return (
      <Host>
        <slot name="off" />
        <slot name="on" />
      </Host>
    );
  }
}
