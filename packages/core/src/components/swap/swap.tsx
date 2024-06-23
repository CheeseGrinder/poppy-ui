import { componentConfig } from '#config';
import { Component, ComponentInterface, Event, EventEmitter, Host, Prop, Watch, h } from '@stencil/core';
import { SwapChangeEventDetail, SwapType } from './swap.type';

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
   * @config
   * @default "rotate"
   */
  @Prop({ reflect: true, mutable: true }) type?: SwapType;

  /**
   * Activates the swap.
   * Show whats inside the slot `on`
   *
   * @config
   * @default false
   */
  @Prop({ reflect: true, mutable: true }) active?: boolean;
  @Watch('active')
  onActiveChange(active: boolean) :void {
    this.popSwap.emit({
      active
    });
  }

  /**
   * Emitted when the swap active attribut change
   */
  @Event() popSwap: EventEmitter<SwapChangeEventDetail>;

  componentWillLoad(): void {
    componentConfig.apply(this, 'pop-swap', {
      type: 'rotate',
      active: false,
    });
  }

  private onClick = (): void => {
    this.active = !this.active;
  };

  render() {
    return (
      <Host onClick={this.onClick}>
        <slot name="off" />
        <slot name="on" />
      </Host>
    );
  }
}
