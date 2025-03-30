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
import { ENTER, ESC, SPACE } from 'key-definitions';
import { componentConfig } from '#config';
import { ClickOutsideController } from '#utils/click-outside.util';
import { isRTL } from '#utils/dir.util';
import type { OverlayInterface } from '#utils/overlay.util';
import type { TriggerAction } from '#utils/trigger.util';
import { Show } from '../Show';
import type { DropdownAlign, DropdownSide } from './dropdown.type';

/**
 * Dropdown can open a menu or any other element when the trigger element is clicked.
 *
 * @part dropdown - Native `details` element
 * @part trigger - Native `summary` element
 * @part content - Dropdown content
 * @part backdrop - Backdrop element
 *
 * @slot trigger - Content that trigger the dropdown to open
 */
@Component({
  tag: 'pop-dropdown',
  styleUrl: 'dropdown.scss',
  shadow: true,
})
export class Dropdown implements ComponentInterface, OverlayInterface {
  private dropdownRef: HTMLDetailsElement;
  private dropdownObserver: MutationObserver;
  private triggeredWith?: TriggerAction;
  private clickOutsideController = ClickOutsideController.new();

  private debounceTimer: NodeJS.Timeout;

  @Element() host: HTMLElement & OverlayInterface;

  /**
   * Describe where the content is displayed relatively to the trigger element
   * - `"start"`: Open on the left in LTR and to the right in RTL.
   * - `"end"`: Open on the right in LTR and to the left in RTL.
   * - `"left"`: Open on left
   * - `"right"`: Open on right
   * - `"top"`: Open on top
   * - `"bottom"`: Open on bottom
   *
   * @config
   * @default "bottom"
   */
  @Prop({ reflect: true, mutable: true }) side?: DropdownSide;

  /**
   * Describes how the dropdown has to be alined
   * - `"start"`: Align to the left in LTR and to the right in RTL.
   * - `"center"`: Align to the left in LTR and to the right in RTL.
   * - `"end"`: Align to the right in LTR and to the left in RTL.
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
  @Prop({ mutable: true }) debounce?: number;

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

  connectedCallback(): void {
    this.clickOutsideController.register(this, this.host, this.onClickOutside, {
      triggerEvents: ['click', 'contextmenu'],
    });
  }

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
    this.dropdownObserver = new MutationObserver(() => {
      this.open = this.dropdownRef.open;
    });
    this.dropdownObserver.observe(this.dropdownRef, {
      attributes: true,
      attributeFilter: ['open'],
    });
  }

  disconnectedCallback(): void {
    this.dropdownObserver.disconnect();
    this.clickOutsideController.remove();
  }

  /**
   * Open the dropdown.
   *
   * @returns {Promise<boolean>} return `true` if the dropdown has been opened, otherwise `false`.
   */
  @Method()
  async present(): Promise<boolean> {
    const { open } = this;
    if (open) return false;

    this.open = true;
    this.didPresent.emit();
    return true;
  }

  /**
   * Toggle the select dropdown
   */
  @Method()
  toggle(): Promise<boolean> {
    if (this.open) {
      return this.dismiss();
    }
    return this.present();
  }

  /**
   * Close the dropdown.
   *
   * @returns {Promise<boolean>} return `true` if the dropdown has been closed, otherwise `false`.
   */
  @Method()
  async dismiss(data?: any): Promise<boolean> {
    const { open } = this;
    if (!open) return false;

    this.open = false;
    this.didDismiss.emit(data);
    return true;
  }

  private onClickOutside = (): void => {
    if (!this.open) return;

    this.dismiss();
  };

  private onClick = (ev: Event): void => {
    ev.preventDefault();

    // Early return if the "triggerAction" is not click or hover
    if (this.triggerAction !== 'click' && this.triggerAction !== 'hover') {
      return;
    }

    // Special case:
    // The dropdown has been triggered by a click to stay open in "hover" mode
    // Since the dropdown is open we need to close it if the user click on the dropdown "trigger"
    if (this.triggeredWith === 'click' && this.triggerAction === 'hover') {
      this.dismiss();
      return;
    }

    // Special case:
    // If the dropdown is trigger action is hover
    // We want to indicate that the dropdown has been triggered with "click" too
    // it prevent to close the dropdown from the "debounce" timer
    if (this.triggerAction === 'hover') {
      this.triggeredWith = 'click';
      return;
    }

    // Handle the default case
    this.triggeredWith = 'click';
    this.toggle();
  };

  private onHover = (): void => {
    // Early return if the "triggerAction" is not hover
    if (this.triggerAction !== 'hover') {
      return;
    }

    this.triggeredWith = 'hover';
    clearTimeout(this.debounceTimer);
    this.present();
  };

  private onBlur = (): void => {
    if (this.triggerAction !== 'hover') {
      return;
    }

    // Special case:
    // We need to check if the dropdown has been triggered from the "hover" event
    // Since the "hover" dropdown can be triggered by a "click" event to prevent the dismiss
    if (this.triggeredWith !== 'hover') {
      return;
    }

    clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(() => {
      if (this.triggeredWith === 'hover') {
        this.dismiss();
      }
    }, this.debounce || 500);
  };

  private onContext = (ev: PointerEvent): void => {
    // Early return if the "triggerAction" is not context-menu
    if (this.triggerAction !== 'context-menu') {
      return;
    }

    ev.preventDefault();
    this.triggeredWith = 'context-menu';
    this.toggle();
  };

  private onKeyPress = (...keys: string[]) => {
    return async (ev: KeyboardEvent): Promise<void> => {
      ev.preventDefault();
      if (!keys.includes(ev.key)) {
        return;
      }
      if (this.open) {
        await this.dismiss();
      } else {
        await this.present();
      }
    };
  };

  render() {
    return (
      <Host
        class={{
          'dropdown-rtl': isRTL(this),
        }}
      >
        <details
          class="dropdown"
          onMouseEnter={this.onHover}
          onMouseLeave={this.onBlur}
          open={this.open}
          part="dropdown"
          ref={(el: HTMLDetailsElement) => (this.dropdownRef = el)}
        >
          <summary
            class="dropdown-trigger"
            onClick={this.onClick}
            onContextMenu={this.onContext}
            onKeyUp={this.onKeyPress(SPACE.key, ENTER.key, ESC.key)}
            part="trigger"
          >
            <slot name="trigger" />
          </summary>
          <div
            class="dropdown-content"
            part="content"
          >
            <slot />
          </div>
          <Show when={this.showBackdrop}>
            {/* biome-ignore lint/a11y/useKeyWithClickEvents: Element not focusable, handle by summary keyboard event */}
            <div
              class="dropdown-backdrop"
              onClick={() => this.dismiss()}
              part="backdrop"
            />
          </Show>
        </details>
      </Host>
    );
  }
}
