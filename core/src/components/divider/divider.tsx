import { componentConfig } from '#config';
import { isRTL } from '#utils/dir';
import { Component, ComponentInterface, Host, Prop, h } from '@stencil/core';
import { Color } from 'src/interfaces';

/**
 * Divider will be used to separate content vertically or horizontally.
 *
 * @slot - Text for describe the divider
 */
@Component({
  tag: 'pop-divider',
  styleUrl: 'divider.scss',
  shadow: true,
})
export class Divider implements ComponentInterface {
  /**
   * Define content disposition orientation
   *
   * @config @default 'horizontal'
   */
  @Prop({ reflect: true, mutable: true }) orientation: 'horizontal' | 'vertical';

  /**
   * Where to place the content.
   * - `"left"`: The content will appear to the left of the divider in LTR and RTL.
   * - `"start"`: The content will appear to the left of the divider in LTR and to the right in RTL.
   * - `"center"`: The content will appear to the center of the divider.
   * - `"end"`: The content will appear to the right of the divider in LTR and to the left in RTL.
   * - `"right"`: The content will appear to the right of the divider in LTR and RTL.
   *
   * @config @default 'center'
   */
  @Prop({ reflect: true, mutable: true }) placement: 'left' | 'right' | 'start' | 'center' | 'end';

  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"accent"`, `"neutral"`, `"info"`, `"success"`, `"warning"`, `"error"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   *
   * @config
   */
  @Prop({ reflect: true, mutable: true }) color: Color | 'neutral';

  componentWillLoad(): void {
    componentConfig.apply(this, 'pop-divider', {
      orientation: 'horizontal',
      placement: 'center',
    });
  }

  render() {
    return (
      <Host
        class={{
          'divider-rtl': isRTL(this),
        }}
      >
        <slot />
      </Host>
    );
  }
}
