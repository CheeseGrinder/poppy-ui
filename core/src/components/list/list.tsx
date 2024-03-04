import type { Size } from 'src/interfaces';
import { Component, ComponentInterface, Element, Host, Prop, h } from '@stencil/core';
import { hostContext } from '#utils/helpers';

@Component({
  tag: 'pop-list',
  styleUrl: 'list.scss',
})
export class List implements ComponentInterface {
  @Element() host: HTMLElement;

  /**
   * Change size of the component
   * Options are: `"xs"`, `"sm"`, `"md"`, `"lg"`.
   */
  @Prop({ reflect: true }) size?: Size;

  /**
   * Define content disposition orientation
   */
  @Prop({ reflect: true }) orientation: 'horizontal' | 'vertical' = 'vertical';

  render() {
    const { host } = this;
    return (
      <Host
        role="list"
        class={{
          'in-item': hostContext(host, 'pop-item'),
        }}
      >
        <slot />
      </Host>
    );
  }
}
