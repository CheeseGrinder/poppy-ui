import { componentConfig } from '#global/component-config';
import { Component, Host, Prop, h } from '@stencil/core';
import { Color } from 'src/interfaces';

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
   */
  @Prop({ reflect: true, mutable: true }) color?: Color;

  /**
   * Define the position of tooltip
   * By default the tootip appear on top
   */
  @Prop({ reflect: true, mutable: true }) position?: 'top' | 'bottom' | 'left' | 'right';

  /**
   * Force open tooltip
   */
  @Prop({ reflect: true, mutable: true }) open: boolean = false;

  componentWillLoad(): void {
    const config = componentConfig.get('pop-tooltip');
    this.color ??= config.color;
    this.position ??= config.position;
    this.open ??= config.open ?? false;
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
