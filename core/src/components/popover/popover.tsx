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
} from '@stencil/core';
import { ComponentRef } from 'src/interfaces';
import { TriggerAction } from './popover.interface';
import { componentOnReady, raf } from '#utils/helpers';

@Component({
  tag: 'pop-popover',
  styleUrl: 'popover.scss',
  shadow: true,
})
export class Popover implements ComponentInterface {
  #dialog: HTMLDialogElement;
  #handler: (event: ToggleEvent) => void;

  @Element() host: HTMLPopPopoverElement;

  /**
   * If `true`, the popover will open. If `false`, the popover will close.
   * Use this if you need finer grained control over presentation, otherwise
   * just use the popoverController or the `trigger` property.
   * Note: `open` will not automatically be set back to `false` when
   * the popover dismisses. You will need to do that in your code.
   */
  @Prop({ reflect: true }) open = false;

  /**
   * If `true`, the popover will animate.
   */
  @Prop({ reflect: true }) animated = true;

  /**
   * If `true`, a backdrop will be displayed behind the popover.
   * This property controls whether or not the backdrop
   * darkens the screen when the popover is presented.
   * It does not control whether or not the backdrop
   * is active or present in the DOM.
   */
  @Prop({ reflect: true }) showBackdrop: boolean = true;

  /**
   * If `true`, the popover will be dismissed when the backdrop is clicked.
   */
  @Prop({ reflect: true }) backdropDismiss: boolean = true;

  /**
   * The event to pass to the popover animation.
   */
  @Prop() event: Event;

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
  @Prop() triggerAction: TriggerAction = 'click';

  /**
   * An ID corresponding to the trigger element that
   * causes the popover to open. Use the `trigger-action`
   * property to customize the interaction that results in
   * the popover opening.
   */
  @Prop() trigger: string | undefined;

  /**
   * The component to display inside of the popover.
   * You only need to use this if you are not using
   * a JavaScript framework. Otherwise, you can just
   * slot your component inside of `pop-popover`.
   */
  @Prop() component?: ComponentRef;

  /**
   * The data to pass to the popover component.
   * You only need to use this if you are not using
   * a JavaScript framework. Otherwise, you can just
   * set the props directly on your component.
   */
  @Prop() componentProps?: ComponentRef;

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
  #didDismiss() {
    if (this.host.isConnected) return;

    this.host.dispatchEvent(
      new CustomEvent('didDismiss', {
        detail: {},
      }),
    );
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
    this.#dialog.removeEventListener('beforetoggle', this.#handler);
    this.#didDismiss();
  }

  @Method()
  async present(): Promise<void> {
    const { component, componentProps, host } = this;
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

    return el;
  }

  @Method()
  async dismiss(): Promise<void> {
    const { backdropDismiss } = this;

    this.willDismiss.emit();
    backdropDismiss ? this.#dialog.hidePopover() : this.#dialog.close();
    this.#didDismiss();
  }

  #setupListener() {
    this.#handler = (event: ToggleEvent) => {
      if (event.oldState === 'open') {
        this.willDismiss.emit();
        this.host.remove();
      }
    };

    this.#dialog.addEventListener('beforetoggle', this.#handler);
  }

  #present() {
    const { backdropDismiss, event } = this;
    const target = event.target as Element;
    const rect = target.getBoundingClientRect();
    const padding = parseFloat(this.#dialog.computedStyleMap().get('padding').toString());

    this.#dialog.style.setProperty('top', `${rect.bottom}px`);
    this.#dialog.style.setProperty('left', `${rect.left - padding}px`);
    this.#dialog.style.setProperty('width', `${rect.width + padding * 2}px`);

    backdropDismiss ? this.#dialog.showPopover() : this.#dialog.showModal();
  }

  render() {
    const { backdropDismiss } = this;

    return (
      <Host aria-modal="true">
        <dialog
          popover={backdropDismiss ? '' : null}
          part="content"
          class="popover-content"
          ref={el => (this.#dialog = el)}
        >
          <slot />
        </dialog>
      </Host>
    );
  }
}
