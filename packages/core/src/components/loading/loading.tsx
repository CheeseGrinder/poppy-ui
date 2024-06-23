import { componentConfig, config } from '#config';
import { Component, ComponentInterface, Host, Prop, h } from '@stencil/core';
import { Size } from 'src/interface';
import { LoadingType } from './loading.type';

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
   *
   * @config
   * @default "spinner"
   */
  @Prop({ reflect: true, mutable: true }) type?: LoadingType;

  /**
   * Change size of the component
   * Options are: `"xs"`, `"sm"`, `"md"`, `"lg"`.
   *
   * @config
   * @default "md"
   */
  @Prop({ reflect: true, mutable: true }) size?: Size;

  componentWillLoad(): void {
    componentConfig.apply(this, 'pop-loading', {
      size: config.get('defaultSize', 'md'),
      type: 'spinner',
    });
  }

  render() {
    return <Host />;
  }
}
