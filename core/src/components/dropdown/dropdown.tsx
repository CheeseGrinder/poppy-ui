import { OverlayInterface } from '#utils/overlay';
import { TriggerAction } from '#utils/trigger';
import { Component, ComponentInterface, Element, Event, EventEmitter, Host, Method, Prop, h } from '@stencil/core';
import { Show } from '../Show';
import { ClickOutside } from '#utils/click-outside';
import { componentConfig } from '#global/component-config';

/**
 * Describe whats does the component
 *
 * @part {name} - // Describe css part
 *
 * @slot - // Describe slot content
 */
@Component({
  tag: 'pop-dropdown',
  styleUrl: 'dropdown.scss',
  shadow: true,
})
export class Dropdown implements ComponentInterface, OverlayInterface {
  #dropdown: HTMLDetailsElement;
  #debounceTimer: NodeJS.Timeout;

  @Element() host: HTMLElement & OverlayInterface;

  @Prop({ reflect: true, mutable: true }) side?: 'left' | 'right' | 'top' | 'bottom';

  @Prop({ reflect: true, mutable: true }) align?: 'start' | 'center' | 'end';

  @Prop({ reflect: true, mutable: true }) open?: boolean = false;

  /**
   * Describes what kind of interaction with the trigger that
   * should cause the popover to open. Does not apply when the `trigger`
   * property is `undefined`.
   * If `"click"`, the popover will be presented when the trigger is left clicked.
   * If `"hover"`, the popover will be presented when a pointer hovers over the trigger.
   * If `"context-menu"`, the popover will be presented when the trigger is right
   * clicked on desktop and long pressed on mobile. This will also prevent your
   * device's normal context menu from appearing.
   */
  @Prop({ mutable: true }) triggerAction: TriggerAction = 'click';

  /**
   * Set the amount of time, in milliseconds after the user no longer hover the trigger or dropdown, will dismiss.
   * Only apply on `triggerAction=hover`
   */
  @Prop({ mutable: true }) debounce?: number = 100;

  /**
   * If `true`, a backdrop will be displayed behind the modal.
   * This property controls whether or not the backdrop
   * darkens the screen when the modal is presented.
   */
  @Prop({ reflect: true, mutable: true }) showBackdrop?: boolean = false;

  /**
   * Emitted after the modal has presented.
   */
  @Event() didPresent: EventEmitter<void>;

  /**
   * Emitted after the modal has dismissed.
   */
  @Event() didDismiss: EventEmitter<void>;

  componentWillLoad(): void {
    const config = componentConfig.get('pop-dropdown');

    this.side ??= config.side;
    this.align ??= config.align;
    this.open ??= config.open ?? false;
    this.triggerAction ??= config.triggerAction ?? 'click';
    this.debounce ??= config.debounce ?? 100;
    this.showBackdrop ??= config.showBackdrop ?? false;
  }

  componentDidRender(): void {
    const { open } = this;
    if (open) {
      this.#dropdown.open = true;
    }
  }

  @Method()
  async present(): Promise<boolean> {
    const { open } = this;
    if (open) return false;

    this.open = true;
    return true;
  }

  @Method()
  async dismiss(): Promise<boolean> {
    const { open } = this;
    if (!open) return false;

    this.open = false;
    return true;
  }

  @ClickOutside()
  onClickOutside(): void {
    if (!this.open) return;

    this.dismiss();
  }

  #onClick = (): void => {
    if (this.triggerAction === 'click') {
      this.present();
    }
  };

  #onHover = (): void => {
    if (this.triggerAction === 'hover') {
      clearTimeout(this.#debounceTimer);
      this.present();
    }
  };

  #onBlur = (): void => {
    if (this.triggerAction === 'hover') {
      clearTimeout(this.#debounceTimer);
      this.#debounceTimer = setTimeout(() => {
        this.dismiss();
      }, this.debounce || 500);
    }
  };

  #onContext = (ev: PointerEvent): void => {
    if (this.triggerAction === 'context-menu') {
      ev.preventDefault();
      this.present();
    }
  };

  render() {
    return (
      <Host>
        <details
          part="dropdown"
          class="dropdown"
          onMouseEnter={this.#onHover}
          onMouseLeave={this.#onBlur}
          ref={(el: HTMLDetailsElement) => (this.#dropdown = el)}
        >
          <summary part="trigger" class="dropdown-trigger" onClick={this.#onClick} onContextMenu={this.#onContext}>
            <slot name="trigger" />
          </summary>
          <div part="content" class="dropdown-content">
            <slot />
          </div>
          <Show when={this.showBackdrop}>
            <div part="backdrop" class="dropdown-backdrop" onClick={() => this.dismiss()}></div>
          </Show>
        </details>
      </Host>
    );
  }
}
