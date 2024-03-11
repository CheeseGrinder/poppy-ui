import { componentConfig } from '#global/component-config';
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
   */
  @Prop({ reflect: true, mutable: true }) animation?: 'rotate' | 'flip';

  /**
   * Activates the swap.
   * Show whats inside the slot `on`
   */
  @Prop({ reflect: true, mutable: true }) active?: boolean;

  /**
   * Activates the swap on hover.
   */
  @Prop({ reflect: true, mutable: true }) swapOnHover?: boolean;

  componentWillLoad(): void {
    const config = componentConfig.get('pop-swap');
    this.animation ??= config.animation;
    this.active ??= config.active ?? false;
    this.swapOnHover ??= config.swapOnHover ?? false;
  }

  #onClick = (): void => {
    if (!this.swapOnHover) this.active = !this.active;
  };

  render() {
    return (
      <Host onClick={this.#onClick}>
        <slot name="off" />
        <slot name="on" />
      </Host>
    );
  }
}
