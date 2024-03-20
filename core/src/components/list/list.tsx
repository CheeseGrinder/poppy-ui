import type { Size } from 'src/interfaces';
import { Component, ComponentInterface, Element, Host, Prop, h } from '@stencil/core';
import { hostContext } from '#utils/helpers';
import { componentConfig } from '#global/component-config';
import { config } from '#global/config';

@Component({
  tag: 'pop-list',
  styleUrl: 'list.scss',
})
export class List implements ComponentInterface {
  @Element() host: HTMLElement;

  /**
   * Change size of the component
   * Options are: `"xs"`, `"sm"`, `"md"`, `"lg"`.
   * 
   * @config @default 'md'
   */
  @Prop({ reflect: true, mutable: true }) size?: Size;

  /**
   * Define content disposition orientation
   * 
   * @config @default 'vertical'
   */
  @Prop({ reflect: true, mutable: true }) orientation?: 'horizontal' | 'vertical';

  componentWillLoad(): void {
    componentConfig.apply(this, 'pop-list', {
      size: config.get('defaultSize', 'md'),
      orientation: 'vertical',
    });
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
