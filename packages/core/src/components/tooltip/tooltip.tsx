import { componentConfig } from '#config';
import { Component, Host, Prop, h } from '@stencil/core';
import type { Color } from 'src/interfaces';

/**
 * Tooltip can be used to show a message when hovering over an element.
 *
 * @slot - Slot for the content of the tooltip
 */
@Component({
  tag: 'pop-tooltip',
  styleUrl: 'tooltip.scss',
})
export class Tooltip {
  /**
   * Text to show on hover
   */
  @Prop() value!: string;

  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"accent"`, `"info"`, `"success"`, `"warning"`, `"error"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   *
   * @config
   */
  @Prop({ reflect: true, mutable: true }) color?: Color;

  /**
   * Define the position of tooltip
   * By default the tootip appear on top
   *
   * @config @default 'top'
   */
  @Prop({ reflect: true, mutable: true }) position?: 'top' | 'bottom' | 'left' | 'right';

  /**
   * Force open tooltip
   *
   * @config @default false
   */
  @Prop({ reflect: true, mutable: true }) open: boolean = false;

  componentWillLoad(): void {
    componentConfig.apply(this, 'pop-tooltip', {
      position: 'top',
      open: false,
    });
  }

  render() {
    const { value } = this;

    return (
      <Host data-tip={value}>
        <slot></slot>
      </Host>
    );
  }
}
