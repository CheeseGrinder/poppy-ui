import { componentConfig } from '#global/component-config';
import { Component, ComponentInterface, Host, Prop, h } from '@stencil/core';
import { Size } from 'src/interfaces';

/**
 * Loading shows an animation to indicate that something is loading.
 */
@Component({
  tag: 'pop-loading',
  styleUrl: 'loading.scss',
  shadow: true,
})
export class Loading implements ComponentInterface {
  /**
   * Apply different animation
   */
  @Prop({ reflect: true, mutable: true }) type?: 'spinner' | 'dots' | 'ring' | 'ball' | 'bars' | 'infinity';

  /**
   * Change size of the component
   * Options are: `"xs"`, `"sm"`, `"md"`, `"lg"`.
   */
  @Prop({ reflect: true, mutable: true }) size?: Size;

  componentWillLoad(): void {
    const config = componentConfig.get('pop-loading');
    this.type ??= config.type;
    this.size ??= config.size;
  }

  render() {
    return <Host />;
  }
}
