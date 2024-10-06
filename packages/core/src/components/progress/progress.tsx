import { Component, type ComponentInterface, Host, Prop, h } from '@stencil/core';
import type { Color } from 'src/interface';
import { componentConfig } from '#config';

/**
 * Progress bar can be used to show the progress of a task or to show the passing of time.
 *
 * @part native - Native `progress` HTML element.
 */
@Component({
  tag: 'pop-progress',
  styleUrl: 'progress.scss',
  shadow: true,
})
export class Progress implements ComponentInterface {
  /**
   * The value of a progress is analogous to the value of a `<progress>`
   */
  @Prop({ reflect: true }) value?: number;

  /**
   *
   * @config
   * @default 100
   */
  @Prop({ reflect: true, mutable: true }) max?: number;

  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"accent"`, `"info"`, `"success"`, `"warning"`, `"error"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   *
   * @config
   */
  @Prop({ reflect: true, mutable: true }) color?: Color;

  componentWillLoad(): void {
    componentConfig.apply(this, 'pop-progress', {
      max: 100,
    });
  }

  render() {
    return (
      <Host>
        <progress
          max={this.max}
          part="native"
          value={this.value}
        >
          <slot />
        </progress>
      </Host>
    );
  }
}
