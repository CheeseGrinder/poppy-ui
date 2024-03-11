import type { Size } from 'src/interfaces';
import { Component, ComponentInterface, Element, Host, Prop, h } from '@stencil/core';
import { hostContext } from '#utils/helpers';
import { componentConfig } from '#global/component-config';

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
  @Prop({ reflect: true, mutable: true }) size?: Size;

  /**
   * Define content disposition orientation
   */
  @Prop({ reflect: true, mutable: true }) orientation?: 'horizontal' | 'vertical';

  componentWillLoad(): void {
    const config = componentConfig.get('pop-list');
    this.size ??= config.size;
    this.orientation ??= config.orientation ?? 'vertical';
  }

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
