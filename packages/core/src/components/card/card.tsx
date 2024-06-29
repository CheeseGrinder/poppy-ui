import { componentConfig } from '#config';
import { Component, Host, Prop, h } from '@stencil/core';

/**
 * Cards are used to group and display content in a way that is easily readable.
 * 
 * @slot - Content for the `pop-card-body`
 */
@Component({
  tag: 'pop-card',
  styleUrl: 'card.scss',
  shadow: true,
})
export class Card {

  /**
   * Applies smaller padding
   * 
   * @config
   * @default false
   */
  @Prop() compact: boolean;

  componentWillLoad() {
    componentConfig.apply(this, 'pop-card', {
      compact: false,
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
