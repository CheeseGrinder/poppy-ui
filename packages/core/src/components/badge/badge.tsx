import { componentConfig, config } from '#config';
import { type Attributes, inheritAriaAttributes } from '#utils/helpers';
import { Component, type ComponentInterface, Element, Host, Prop, h } from '@stencil/core';
import type { Size } from 'src/interface';
import type { BadgeAs, BadgeColor } from './badge.type';

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
  private inheritedAttributes: Attributes = {};

  @Element() host!: HTMLElement;

  /**
   * The color to use from your application's color palette.
   * Default options are: `"neutral"`, `"primary"`, `"secondary"`, `"accent"`, `"info"`, `"success"`, `"warning"`, `"error"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   *
   * @config
   */
  @Prop({ reflect: true, mutable: true }) color?: BadgeColor;

  /**
   * Change size of the component
   * Options are: `"xs"`, `"sm"`, `"md"`, `"lg"`.
   *
   * @config
   * @default "md"
   */
  @Prop({ reflect: true, mutable: true }) size?: Size;

  /**
   * Transparent Badge with colored border
   *
   * @config
   * @default false
   */
  @Prop({ reflect: true, mutable: true }) outlined?: boolean;

  /**
   * Used HTML element for
   *
   * @config
   * @default "div"
   */
  @Prop({ mutable: true }) as?: BadgeAs;

  componentWillLoad(): void {
    this.inheritedAttributes = inheritAriaAttributes(this.host);

    componentConfig.apply(this, 'pop-badge', {
      size: config.get('defaultSize', 'md'),
      outlined: false,
      as: 'div',
    });
  }

  componentWillRender(): void {
    this.inheritedAttributes = inheritAriaAttributes(this.host);
  }

  render() {
    const Tag = this.as;

    return (
      <Host>
        <Tag
          class="badge"
          part="native"
          {...this.inheritedAttributes}
        >
          <slot />
        </Tag>
      </Host>
    );
  }
}
