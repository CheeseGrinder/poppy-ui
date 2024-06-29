import { Component, ComponentInterface, Host, h } from '@stencil/core';

/**
 * Cards are used to group and display content in a way that is easily readable.
 * 
 * @slot - Container for buttons
 */
@Component({
  tag: 'pop-card-actions',
  styleUrl: 'card-actions.scss',
})
export class CardActions implements ComponentInterface {
  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
