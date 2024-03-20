import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pop-card',
  styleUrl: 'card.scss',
  shadow: true,
})
export class Card {
  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
