import { Component, ComponentInterface, Host, h } from '@stencil/core';

/**
 * Navbar is used to show a navigation bar on the top of the page.
 *
 * @part header - Native header html element
 *
 * @slot - // Describe slot content
 * @slot start - // Describe slot content
 * @slot end - // Describe slot content
 */
@Component({
  tag: 'pop-navbar',
  styleUrl: 'navbar.scss',
  shadow: true,
})
export class Navbar implements ComponentInterface {
  render() {
    return (
      <Host>
        <header>
          <slot name="start" />
          <slot />
          <slot name="end" />
        </header>
      </Host>
    );
  }
}
