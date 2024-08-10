import { componentConfig } from '#config';
import { ClickOutside } from '#utils/click-outside';
import type { OverlayInterface } from '#utils/overlay';
import type { TriggerAction } from '#utils/trigger';
import {
  Component,
  type ComponentInterface,
  Element,
  Event,
  type EventEmitter,
  Host,
  Method,
  Prop,
  h,
} from '@stencil/core';
import { Show } from '../Show';
import type { DropdownAlign, DropdownSide } from './dropdown.type';

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
  private dropdown: HTMLDetailsElement;
  private debounceTimer: NodeJS.Timeout;

  @Element() host: HTMLElement & OverlayInterface;

  /**
   *
   *
   * @config
   * @default "bottom"
   */
  @Prop({ reflect: true, mutable: true }) side?: DropdownSide;

  /**
   * Describes how the dropdown has to be alined
   * - "start": Align to the left in LTR and to the right in RTL.
   * - "end": Align to the right in LTR and to the left in RTL.
   *
   * @config
   * @default "start"
   */
  @Prop({ reflect: true, mutable: true }) align?: DropdownAlign;

  /**
   * Force the dropdown to be shown
   *
   * @config
   * @default false
   */
  @Prop({ reflect: true, mutable: true }) open?: boolean;

  /**
   * Describes what kind of intertion with the trigger (sloted element) that should cause the dropdown to open.
   * - `"click"`: the dropdown will be presented when the trigger is left clicked.
   * - `"hover"`: the dropdown will be presented when a pointer hovers over the trigger.
   * - `"context-menu"`: the dropdown will be presented when the trigger is right clicked on desktop and long pressed on mobile. This will also prevent your device's normal context menu from appearing.
   *
   * @config
   * @default "click"
   */
  @Prop({ mutable: true }) triggerAction: TriggerAction;

  /**
   * Set the amount of time, in milliseconds after the user no longer hover the trigger or dropdown, will dismiss.
   * Only apply on `triggerAction=hover`
   *
   * @config
   * @default 100
   */
  @Prop({ mutable: true }) debounce?: number = 100;

  /**
   * If `true`, a backdrop will be displayed behind the modal.
   * This property controls whether or not the backdrop
   * darkens the screen when the modal is presented.
   *
   * @config
   * @default false
   */
  @Prop({ reflect: true, mutable: true }) showBackdrop?: boolean;

  /**
   * Emitted after the modal has presented.
   */
  @Event() didPresent: EventEmitter<void>;

  /**
   * Emitted after the modal has dismissed.
   */
  @Event() didDismiss: EventEmitter<void>;

  componentWillLoad(): void {
    componentConfig.apply(this, 'pop-dropdown', {
      side: 'bottom',
      align: 'start',
      open: false,
      triggerAction: 'click',
      debounce: 100,
      showBackdrop: false,
    });
  }

  componentDidRender(): void {
    const { open } = this;
    if (open) {
      this.dropdown.open = true;
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

  private onClick = (): void => {
    if (this.triggerAction === 'click') {
      this.present();
    }
  };

  private onHover = (): void => {
    if (this.triggerAction === 'hover') {
      clearTimeout(this.debounceTimer);
      this.present();
    }
  };

  private onBlur = (): void => {
    if (this.triggerAction === 'hover') {
      clearTimeout(this.debounceTimer);
      this.debounceTimer = setTimeout(() => {
        this.dismiss();
      }, this.debounce || 500);
    }
  };

  private onContext = (ev: PointerEvent): void => {
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
          onMouseEnter={this.onHover}
          onMouseLeave={this.onBlur}
          ref={(el: HTMLDetailsElement) => (this.dropdown = el)}
        >
          <summary
            part="trigger"
            class="dropdown-trigger"
            onClick={this.onClick}
            onContextMenu={this.onContext}
          >
            <slot name="trigger" />
          </summary>
          <div
            part="content"
            class="dropdown-content"
          >
            <slot />
          </div>
          <Show when={this.showBackdrop}>
            <div
              part="backdrop"
              class="dropdown-backdrop"
              onClick={() => this.dismiss()}
            />
          </Show>
        </details>
      </Host>
    );
  }
}
