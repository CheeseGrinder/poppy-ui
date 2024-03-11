import type { Color, Size } from 'src/interfaces';
import { Attributes, inheritAriaAttributes } from '#utils/helpers';
import { Component, ComponentInterface, Element, Host, Prop, h } from '@stencil/core';
import type { BadgeAs } from './badge.interface';
import { componentConfig } from '#global/component-config';

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
  @Prop({ reflect: true, mutable: true }) color?: Color | 'neutral';

  /**
   * Change size of the component
   * Options are: `"xs"`, `"sm"`, `"md"`, `"lg"`.
   */
  @Prop({ reflect: true, mutable: true }) size?: Size;

  /**
   * Transparent Badge with colored border
   */
  @Prop({ reflect: true, mutable: true }) outlined?: boolean = false;

  /**
   * Used HTML element for accessibility
   */
  @Prop({ mutable: true }) as?: BadgeAs = 'div';

  componentWillLoad(): void {
    this.#inheritedAttributes = inheritAriaAttributes(this.host);

    const config = componentConfig.get('pop-badge');
    this.color ??= config.color;
    this.size ??= config.size;
    this.outlined ??= config.outlined ?? false;
    this.as ??= config.as ?? 'div';
  }

  componentWillRender(): void {
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
