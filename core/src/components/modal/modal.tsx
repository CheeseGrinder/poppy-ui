import { OverlayInterface } from '#utils/overlay';
import { TriggerController } from '#utils/trigger';
import {
  Component,
  ComponentInterface,
  Element,
  Event,
  EventEmitter,
  Host,
  Method,
  Prop,
  Watch,
  h,
} from '@stencil/core';
import { Show } from '../Show';
import { ComponentProps, ComponentRef } from 'src/interfaces';
import { componentConfig } from '#global/component-config';

/**
 * Describe whats does the component
 *
 * @part {name} - // Describe css part
 *
 * @slot - // Describe slot content
 */
@Component({
  tag: 'pop-modal',
  styleUrl: 'modal.scss',
  shadow: true,
})
export class Modal implements ComponentInterface, OverlayInterface {
  #dialog: HTMLDialogElement;
  #dialogObserver: MutationObserver;

  #triggerController = TriggerController.create();

  @Element() host: HTMLElement & OverlayInterface;

  /**
   * An ID corresponding to the trigger element that
   * causes the modal to open when clicked.
   */
  @Prop() trigger?: string;
  @Watch('trigger')
  onTriggerChange(trigger: string) {
    if (trigger) {
      this.#triggerController.addListener(this.host, trigger);
    }
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
   * If `true`, a backdrop will be displayed behind the modal.
   * This property controls whether or not the backdrop
   * darkens the screen when the modal is presented.
   */
  @Prop({ reflect: true, mutable: true }) showBackdrop?: boolean = false;

  /**
   * If `true`, the modal will be dismissed when the backdrop is clicked.
   */
  @Prop({ mutable: true }) backdropDismiss?: boolean = false;

  /**
   * If `true`, the modal will open. If `false`, the modal will close.
   * Use this if you need finer grained control over presentation, otherwise
   * just use the modalController or the `trigger` property.
   * Note: `open` will automatically be set back to `false` when
   * the modal dismisses.
   */
  @Prop({ reflect: true, mutable: true }) open?: boolean = false;
  @Watch('open')
  onOpenChange(isOpen: boolean): void {
    if (isOpen) {
      this.present();
    } else {
      this.dismiss(null);
    }
  }

  /**
   * Emitted after the modal has presented.
   */
  @Event() didPresent: EventEmitter<void>;

  /**
   * Emitted after the modal has dismissed.
   */
  @Event() didDismiss: EventEmitter<void>;

  connectedCallback(): void {
    const { trigger } = this;

    this.onTriggerChange(trigger);
  }

  componentWillLoad(): void {
    const config = componentConfig.get('pop-modal');
    this.component ??= config.component;
    this.componentProps ??= config.componentProps;
    this.showBackdrop ??= config.showBackdrop ?? false;
    this.backdropDismiss ??= config.backdropDismiss ?? false;
    this.open ??= config.open ?? false;
  }

  componentDidRender(): void {
    this.#dialogObserver = new MutationObserver(() => {
      this.open = this.#dialog.open;
    });
    this.#dialogObserver.observe(this.#dialog, {
      attributes: true,
      attributeFilter: ['open'],
    });

    if (this.open) {
      this.#dialog.showModal();
    }
  }

  disconnectedCallback(): void {
    this.#triggerController.removeListener();
    this.#dialogObserver.disconnect();
  }

  @Method()
  async present(): Promise<boolean> {
    const { open } = this;
    if (open) {
      return false;
    }

    this.#dialog.showModal();
    return true;
  }

  @Method()
  async dismiss(data: any): Promise<boolean> {
    const { open } = this;
    if (!open) return false;

    this.#dialog.close(data);
    return true;
  }

  render() {
    return (
      <Host>
        <dialog class="modal" ref={el => (this.#dialog = el)}>
          <div class="modal-content">
            <slot />

            <div class="modal-actions">
              <slot name="actions" />
            </div>
          </div>
          <Show when={this.backdropDismiss}>
            <form method="dialog" class="modal-backdrop">
              <button>close</button>
            </form>
          </Show>
        </dialog>
      </Host>
    );
  }
}
