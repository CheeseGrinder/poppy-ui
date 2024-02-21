import type { Color, Size } from '#utils/element-interface';
import { Attributes, inheritAriaAttributes } from '#utils/helpers';
import { Component, ComponentInterface, Element, Host, Prop, h } from '@stencil/core';
import type { BadgeAs } from './badge.interface';

/**
 * Badges are used to inform the user of the status of specific data.
 *
 * @slot - Slot for the content of the badge
 *
 * @part native - The native HTML div or span element that wraps the content.
 */
@Component({
  tag: 'pop-badge',
  styleUrl: 'badge.scss',
  shadow: true,
})
export class Badge implements ComponentInterface {
  #inheritedAttributes: Attributes = {};

  @Element() host!: HTMLElement;

  /**
   * The color to use from your application's color palette.
   * Default options are: `"neutral"`, `"primary"`, `"secondary"`, `"accent"`, `"info"`, `"success"`, `"warning"`, `"error"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   */
  @Prop({ reflect: true }) color?: Color | 'neutral';

  /**
   * Change size of the component
   * Options are: `"xs"`, `"sm"`, `"md"`, `"lg"`.
   */
  @Prop({ reflect: true }) size?: Size;

  /**
   * Transparent Badge with colored border
   */
  @Prop({ reflect: true }) outlined?: boolean = false;

  /**
   * Used HTML element for accessibility
   */
  @Prop() as?: BadgeAs = 'div';

  componentWillRender(): void | Promise<void> {
    this.#inheritedAttributes = inheritAriaAttributes(this.host);
  }

  render() {
    const Tag = this.as;

    return (
      <Host>
        <Tag class="badge" part="native" {...this.#inheritedAttributes}>
          <slot></slot>
        </Tag>
      </Host>
    );
  }
}
