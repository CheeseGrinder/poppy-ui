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
import { ClickOutside } from '#utils/click-outside';
import { isRTL } from '#utils/dir';
import type { OverlayInterface } from '#utils/overlay';
import type { TriggerAction } from '#utils/trigger';
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
