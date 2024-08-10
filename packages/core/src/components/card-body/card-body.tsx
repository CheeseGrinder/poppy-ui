import { Component, type ComponentInterface, Host, h } from '@stencil/core';

/**
 * Cards are used to group and display content in a way that is easily readable.
 *
 * @slot - Container for content
 */
@Component({
  tag: 'pop-card-body',
  styleUrl: 'card-body.scss',
  scoped: true,
})
export class CardBody implements ComponentInterface {
  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
