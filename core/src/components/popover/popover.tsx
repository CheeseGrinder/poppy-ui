import {
  Component,
  Event as StencilEvent,
  EventEmitter,
  Host,
  Method,
  Prop,
  h,
  Element,
  ComponentInterface,
  Watch,
} from '@stencil/core';
import { ComponentProps, ComponentRef } from 'src/interfaces';
import { componentOnReady, raf } from '#utils/helpers';
import { OverlayInterface } from '#utils/overlay';
import { TriggerAction, TriggerController } from '#utils/trigger';
import { componentConfig } from '#global/component-config';

@Component({
  tag: 'pop-popover',
  styleUrl: 'popover.scss',
  shadow: true,
})
export class Popover implements ComponentInterface, OverlayInterface {
  #dialog: HTMLDialogElement;
  #handler: (event: ToggleEvent) => void;

  #triggerController = TriggerController.create();

  @Element() host: HTMLPopPopoverElement;

  /**
   * If `true`, the popover will open. If `false`, the popover will close.
   * Use this if you need finer grained control over presentation, otherwise
   * just use the popoverController or the `trigger` property.
   * Note: `open` will not automatically be set back to `false` when
   * the popover dismisses. You will need to do that in your code.
   */
  @Prop({ reflect: true, mutable: true }) open = false;
  @Watch('open')
  onOpenChange(isOpen: boolean): void {
    if (isOpen) {
      this.present();
    } else {
      this.dismiss(null);
    }
  }

  /**
   * If `true`, the popover will animate.
   */
  @Prop({ reflect: true, mutable: true }) animated = true;

  /**
   * If `true`, a backdrop will be displayed behind the popover.
   * This property controls whether or not the backdrop
   * darkens the screen when the popover is presented.
   * It does not control whether or not the backdrop
   * is active or present in the DOM.
   */
  @Prop({ reflect: true, mutable: true }) showBackdrop: boolean = false;

  /**
   * If `true`, the popover will be dismissed when the backdrop is clicked.
   */
  @Prop({ reflect: true, mutable: true }) backdropDismiss: boolean = false;

  /**
   * The event to pass to the popover animation.
   */
  @Prop() event: Event;

  /**
   * An ID corresponding to the trigger element that
   * causes the popover to open. Use the `trigger-action`
   * property to customize the interaction that results in
   * the popover opening.
   */
  @Prop() trigger?: string;
  @Watch('trigger')
  onTriggerChange(trigger: string) {
    if (trigger) {
      this.#triggerController.addListener(this.host, trigger, this.triggerAction);
    }
  }

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
  @Watch('triggerAction')
  onTriggerActionChange(triggerAction: TriggerAction) {
    this.#triggerController.addListener(this.host, this.trigger, triggerAction);
  }

  /**
   * The component to display inside of the popover.
   * You only need to use this if you are not using
   * a JavaScript framework. Otherwise, you can just
   * slot your component inside of `pop-popover`.
   */
  @Prop({ mutable: true }) component?: ComponentRef;

  /**
   * The data to pass to the popover component.
   * You only need to use this if you are not using
   * a JavaScript framework. Otherwise, you can just
   * set the props directly on your component.
   */
  @Prop({ mutable: true }) componentProps?: ComponentProps;

  /**
   * Emitted before the popover has presented.
   */
  @StencilEvent() willPresent: EventEmitter<void>;

  /**
   * Emitted after the popover has presented.
   */
  @StencilEvent() didPresent: EventEmitter<void>;

  /**
   * Emitted before the popover has dismissed.
   */
  @StencilEvent() willDismiss: EventEmitter<void>;

  /**
   * Emitted after the popover has dismissed.
   */
  @StencilEvent() didDismiss: EventEmitter<void>;

  /**
   * Use this function to emit `didDismiss` event instead of the StencilEvent because when this event is fired the element doesnt exist anymore in the DOM.
   * The live above is only here for compilation and documentation purpose.
   */
  #didDismiss(): void {
    if (this.host.isConnected) return;

    this.host.dispatchEvent(
      new CustomEvent('didDismiss', {
        detail: {},
      }),
    );
  }

  connectedCallback(): void {
    const { trigger } = this;

    this.onTriggerChange(trigger);
  }

  componentWillLoad(): void {
    const config = componentConfig.get('pop-popover');
    this.open ??= config.open ?? false;
    this.animated ??= config.animated ?? false;
    this.showBackdrop ??= config.showBackdrop ?? false;
    this.backdropDismiss ??= config.backdropDismiss ?? false;
    this.backdropDismiss ??= config.backdropDismiss ?? false;
    this.triggerAction ??= config.triggerAction ?? 'click';
    this.component ??= config.component;
    this.componentProps ??= config.componentProps;
  }

  componentDidLoad(): void {
    this.#setupListener();

    /**
     * If popover was rendered with open="true"
     * then we should open popover immediately.
     */
    if (this.open) {
      raf(() => this.present());
    }
  }

  disconnectedCallback(): void {
    this.#triggerController.removeListener();
    this.#dialog.removeEventListener('beforetoggle', this.#handler);
    this.#didDismiss();
  }

  @Method()
  async present(): Promise<boolean> {
    const { open, component, componentProps, host } = this;
    if (open) {
      return false;
    }

    this.willPresent.emit();

    const el: any = typeof component === 'string' ? host.ownerDocument?.createElement(component) : component;
    // if (cssClasses) {
    //   cssClasses.forEach((c) => el.classList.add(c));
    // }
    if (componentProps) {
      Object.assign(el, componentProps);
    }

    host.appendChild(el);
    await new Promise(resolve => componentOnReady(el, resolve));
    this.#present();
    this.didPresent.emit();

    return true;
  }

  @Method()
  async dismiss(data?: any): Promise<boolean> {
    const { open, backdropDismiss } = this;
    if (!open) return false;

    this.willDismiss.emit();
    backdropDismiss ? this.#dialog.hidePopover() : this.#dialog.close(data);
    this.#didDismiss();

    return true;
  }

  #setupListener(): void {
    this.#handler = (event: ToggleEvent) => {
      if (event.oldState === 'open') {
        this.willDismiss.emit();
        this.host.remove();
      }
    };

    this.#dialog.addEventListener('beforetoggle', this.#handler);
  }

  #present(): void {
    const { backdropDismiss, event } = this;
    const target = event.target as Element;
    const rect = target.getBoundingClientRect();

    this.#dialog.style.setProperty('top', `${rect.bottom}px`);
    this.#dialog.style.setProperty('left', `${rect.left}px`);
    this.#dialog.style.setProperty('width', `${rect.width}px`);

    backdropDismiss ? this.#dialog.showPopover() : this.#dialog.showModal();
    this.#dialog.focus();
  }

  render() {
    const { backdropDismiss } = this;

    return (
      <Host aria-modal="true">
        <dialog popover={backdropDismiss ? '' : null} class="popover" ref={el => (this.#dialog = el)}>
          <div part="content" class="popover-content">
            <slot />
          </div>
        </dialog>
      </Host>
    );
  }
}
