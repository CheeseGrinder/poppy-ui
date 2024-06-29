import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'pop-card-body',
  styleUrl: 'card-body.scss'
})
export class CardBody implements ComponentInterface {


  render() {
    return (
      <Host>
        <slot />
      </Host>
    )
  }
}