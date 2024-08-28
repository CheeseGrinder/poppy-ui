import { componentConfig } from '#config';
import { isRTL } from '#utils/dir';
import type { OverlayInterface } from '#utils/overlay';
import { type TriggerAction, TriggerController } from '#utils/trigger';
import {
  Component,
  type ComponentInterface,
  Element,
  Event,
  type EventEmitter,
  Host,
  Method,
  Prop,
  Watch,
  h,
} from '@stencil/core';
import type { DrawerSide } from './drawer.type';

/**
 * Drawer is a grid layout that can show/hide a sidebar on the left or right side of the page.
 *
 * @part backdrop - The backdrop that appears over the main content when the menu is open
 * @part side - The container for the menu content.
 *
 * @slot - Container for all page content
 * @slot side - Content is placed in the drawer and is shown or hidden based on open state.
 */
@Component({
  tag: 'pop-drawer',
  styleUrl: 'drawer.scss',
  shadow: true,
})
export class Drawer implements ComponentInterface, OverlayInterface {
  private triggerController = TriggerController.create();

  @Element() host: HTMLPopDrawerElement;

  /**
   * An ID corresponding to the trigger element that
   * causes the drawer to open. Use the `trigger-action`
   * property to customize the interaction that results in
   * the sidebar opening.
   */
  @Prop() trigger?: string;
  @Watch('trigger')
  onTriggerChange(trigger: string) {
    if (trigger) {
      this.triggerController.addListener(this.host, trigger, this.triggerAction);
    }
  }

  /**
   * Describes what kind of interaction with the trigger that should
   * cause the sidebar to open. Does not apply when the `trigger` property is `undefined`.
   * - `"click"`: the sidebar will be presented when the trigger is left clicked.
   * - `"hover"`: the sidebar will be presented when a pointer hovers over the trigger.
   * - `"context-menu"`: the sidebar will be presented when the trigger is right
   * clicked on desktop and long pressed on mobile. This will also prevent your
   * device's normal context menu from appearing.
   *
   * @config
   * @default "click"
   */
  @Prop() triggerAction?: TriggerAction;
  @Watch('triggerAction')
  onTriggerActionChange(triggerAction: TriggerAction) {
    this.triggerController.addListener(this.host, this.trigger, triggerAction);
  }

  /**
   * Where to place the sidebar relative to the screen.
   * - `"start"`: The sidebar will appear to the left of the screen in LTR and to the right in RTL.
   * - `"end"`: The sidebar will appear to the right of the screen in LTR and to the left in RTL.
   *
   * @config
   * @default "start"
   */
  @Prop({ reflect: true, mutable: true }) side?: DrawerSide;

  /**
   * Forces the drawer to be open
   *
   * @config
   * @default false
   */
  @Prop({ reflect: true, mutable: true }) open?: boolean;
  @Watch('open') onOpenChange(isOpen: boolean): void {
    if (isOpen) {
      this.popDidPresent.emit();
      return;
    }
    this.popDidDismiss.emit();
  }

  /**
   * Emitted when the drawer has been opened.
   */
  @Event() popDidPresent: EventEmitter<void>;

  /**
   * Emitted when the drawer has been opened.
   */
  @Event() popDidDismiss: EventEmitter<void>;

  connectedCallback(): void {
    const { trigger } = this;

    this.onTriggerChange(trigger);
  }

  componentWillLoad(): void {
    componentConfig.apply(this, 'pop-drawer', {
      open: false,
      side: 'start',
      triggerAction: 'click',
    });
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

  @Method()
  async toggle(): Promise<void> {
    this.open = !this.open;
  }

  private onClick = (): void => {
    this.dismiss();
  };

  render() {
    const { host } = this;

    return (
      <Host
        class={{
          drawer: true,
          'drawer-rtl': isRTL(host),
        }}
      >
        <div class="drawer-content">
          <slot />
        </div>

        <aside class="drawer-side">
          <div
            part="backdrop"
            class="drawer-backdrop"
            onClick={this.onClick}
          />
          <div
            part="side"
            class="drawer-side-inner"
          >
            <slot name="side" />
          </div>
        </aside>
      </Host>
    );
  }
}
