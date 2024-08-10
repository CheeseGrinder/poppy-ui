import { componentConfig, config } from '#config';
import { hostContext } from '#utils/helpers';
import { Component, type ComponentInterface, Element, Host, Prop, h } from '@stencil/core';
import type { Size } from 'src/interface';
import type { ListOrientation } from './list.type';

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
   * @config
   * @default "md"
   */
  @Prop({ reflect: true, mutable: true }) size?: Size;

  /**
   * Define content disposition orientation
   *
   * @config
   * @default "vertical"
   */
  @Prop({ reflect: true, mutable: true }) orientation?: ListOrientation;

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
