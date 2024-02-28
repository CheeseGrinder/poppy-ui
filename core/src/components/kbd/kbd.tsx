import { Size } from '#utils/element-interface';
import { Component, ComponentInterface, Host, Prop, h } from '@stencil/core';

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
   */
  @Prop({ reflect: true }) size?: Size;

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
