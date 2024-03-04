import { getHostContextProperty, hostContext } from '#utils/helpers';
import { Component, ComponentInterface, Element, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'pop-item',
  styleUrl: 'item.scss',
  shadow: {
    delegatesFocus: true,
  },
})
export class Item implements ComponentInterface {
  @Element() host: HTMLElement;

  /**
   * If `true`, the user cannot interact with the item.
   */
  @Prop() disabled = false;

  #onClick = (ev: PointerEvent): void => {
    const path = ev.composedPath();
    const target = path[0] as HTMLElement;
    const firstInteractive = this.#getFirstInteractive();

    if (!ev.isTrusted || firstInteractive === undefined) return;

    const clickedWithinShadowRoot = this.host.shadowRoot!.contains(target);
    if (clickedWithinShadowRoot) {
      firstInteractive.click();
    }
  };

  #getFirstInteractive() {
    const controls = this.host.querySelectorAll<HTMLElement>(
      'pop-toggle:not([disabled]), pop-checkbox:not([disabled]), pop-radio:not([disabled]), pop-select:not([disabled])',
    );
    return controls[0];
  }

  render() {
    const { host, disabled } = this;
    const inList = hostContext(host, 'pop-list');
    const listSize = getHostContextProperty(host, 'pop-list', 'size', 'md');
    const hasList = !!host.querySelector('pop-list');

    return (
      <Host
        role={inList ? 'listitem' : null}
        aria-disabled={disabled ? 'true' : null}
        onClick={this.#onClick}
        class={{
          'in-list': inList,
          [`in-list-${listSize}`]: inList,
          'has-list': hasList,
        }}
      >
        <a class="item-inner">
          <slot />
        </a>
      </Host>
    );
  }
}
