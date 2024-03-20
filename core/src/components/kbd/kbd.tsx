import { Size } from 'src/interfaces';
import { Component, ComponentInterface, Host, Prop, h } from '@stencil/core';
import { componentConfig } from '#global/component-config';
import { config } from '#global/config';

/**
 * Kbd is used to display keyboard shortcuts.
 *
 * @slot - Slot for the content of the kbd
 *
 * @part native - The native HTML kbd element.
 */
@Component({
  tag: 'pop-kbd',
  styleUrl: 'kbd.scss',
  shadow: true,
})
export class Kbd implements ComponentInterface {
  /**
   * Change size of the component
   * Options are: `"xs"`, `"sm"`, `"md"`, `"lg"`.
   * 
   * @config @default 'md'
   */
  @Prop({ reflect: true, mutable: true }) size?: Size;

  componentWillLoad(): void {
    componentConfig.apply(this, 'pop-kbd', {
      size: config.get('defaultSize', 'md'),
    });
  }

  render() {
    return (
      <Host>
        <kbd part="native">
          <slot />
        </kbd>
      </Host>
    );
  }
}
