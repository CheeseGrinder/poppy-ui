import { Size } from 'src/interfaces';
import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'pop-card',
  styleUrl: 'card.scss',
  shadow: true,
})
export class Card {
  @Prop({ reflect: true }) shadow: Size;

  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
