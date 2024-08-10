import { Component, type ComponentInterface, Host, h } from '@stencil/core';

/**
 * Cards are used to group and display content in a way that is easily readable.
 *
 * @slot - Title of card
 */
@Component({
  tag: 'pop-card-title',
  styleUrl: 'card-title.scss',
  scoped: true,
})
export class CardTitle implements ComponentInterface {
  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
