import { componentConfig } from '#global/component-config';
import { Component, ComponentInterface, Host, Prop, h } from '@stencil/core';

/**
 * Avatars are used to show a thumbnail representation of an individual or business in the interface.
 *
 * @slot - Where goes img of avatar
 */
@Component({
  tag: 'pop-avatar',
  styleUrl: 'avatar.scss',
  shadow: true,
})
export class Avatar implements ComponentInterface {
  /**
   * @config
   * To show some letters as avatar placeholder
   */
  @Prop({ reflect: true }) placeholder: boolean = false;

  componentWillLoad(): void {
    const config = componentConfig.get('pop-avatar');

    this.placeholder ??= config.placeholder ?? false;
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
