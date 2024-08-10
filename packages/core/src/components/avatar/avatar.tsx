import { componentConfig } from '#config';
import { Component, type ComponentInterface, Host, Prop, h } from '@stencil/core';

/**
 * Avatars are used to show a thumbnail representation of an individual or business in the interface.
 *
 * @slot - Avatar content
 */
@Component({
  tag: 'pop-avatar',
  styleUrl: 'avatar.scss',
  shadow: true,
})
export class Avatar implements ComponentInterface {
  /**
   * To show some letters as avatar placeholder
   *
   * @config
   * @default false
   */
  @Prop({ reflect: true, mutable: true }) placeholder: boolean;

  componentWillLoad(): void {
    componentConfig.apply(this, 'pop-avatar', {
      placeholder: false,
    });
  }

  render() {
    return (
      <Host>
        <div>
          <slot />
        </div>
      </Host>
    );
  }
}
