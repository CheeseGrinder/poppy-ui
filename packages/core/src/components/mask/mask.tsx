import { componentConfig } from '#config';
import { Component, Host, Prop, h } from '@stencil/core';
import { MaskType } from './mask.type';

/**
 * Mask crops the content of the element to common shapes.
 *
 * @slot - content that get croped
 */
@Component({
  tag: 'pop-mask',
  styleUrl: 'mask.scss',
  shadow: true,
})
export class Mask {
  /**
   * Mask that should be applied
   *
   * @config
   * @default "squircle"
   */
  @Prop({ reflect: true, mutable: true }) type: MaskType;

  componentWillLoad(): void {
    componentConfig.apply(this, 'pop-mask', {
      type: 'squircle',
    });
  }

  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
