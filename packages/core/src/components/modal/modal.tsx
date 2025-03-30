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
import type { ComponentProps, ComponentRef } from 'src/interface';
import { componentConfig } from '#config';
import type { OverlayInterface } from '#utils/overlay.util';
import { TriggerController } from '#utils/trigger.util';
import { Show } from '../Show';

/**
 * Modal is used to show a dialog or a box when you click on the trigger element.
 *
 * @part modal - Native `dialog` element
 * @part content - The modal content
 * @part actions - The modal actions
 * @part backdrop - The modal backdrop
 *
 * @slot - Modal content
 * @slot actions - Modal actions
 */
@Component({
  tag: 'pop-modal',
  styleUrl: 'modal.scss',
  shadow: true,
})
export class Modal implements ComponentInterface, OverlayInterface {
  private dialog: HTMLDialogElement;
  private dialogObserver: MutationObserver;

  private triggerController = TriggerController.create();

  @Element() host: HTMLElement & OverlayInterface;

  /**
   * An ID corresponding to the trigger element that
   * causes the modal to open when clicked.
   */
  @Prop() trigger?: string;
  @Watch('trigger')
  onTriggerChange(trigger: string) {
    if (trigger) {
      this.triggerController.addListener(this.host, trigger);
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
   *
   * @config
   * @default false
   */
  @Prop({ reflect: true, mutable: true }) showBackdrop?: boolean;

  /**
   * If `true`, the modal will be dismissed when the backdrop is clicked.
   *
   * @config
   * @default false
   */
  @Prop({ mutable: true }) backdropDismiss?: boolean;

  /**
   * If `true`, the modal will open. If `false`, the modal will close.
   * Use this if you need finer grained control over presentation, otherwise
   * just use the modalController or the `trigger` property.
   * Note: `open` will automatically be set back to `false` when
   * the modal dismisses.
   *
   * @config
   * @default false
   */
  @Prop({ reflect: true, mutable: true }) open?: boolean;
  @Watch('open')
  onOpenChange(isOpen: boolean): void {
    if (isOpen) {
      this.present();
    } else {
      this.dismiss('close');
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
    componentConfig.apply(this, 'pop-modal', {
      showBackdrop: false,
      backdropDismiss: false,
      open: false,
    });
  }

  componentDidRender(): void {
    this.dialogObserver = new MutationObserver(() => {
      this.open = this.dialog.open;
    });
    this.dialogObserver.observe(this.dialog, {
      attributes: true,
      attributeFilter: ['open'],
    });

    if (this.open) {
      this.dialog.showModal();
    }
  }

  disconnectedCallback(): void {
    this.triggerController.removeListener();
    this.dialogObserver.disconnect();
  }

  /**
   * Open the modal
   *
   * @returns `true` if the modal has been opened, otherwise `false`.
   */
  @Method()
  async present(): Promise<boolean> {
    const { open } = this;
    if (open) {
      return false;
    }

    this.dialog.showModal();
    this.didPresent.emit();
    return true;
  }

  /**
   * Close the modal
   *
   * @param data Data to return on close
   * @returns `true` if the modal has been closed, otherwise `false`.
   */
  @Method()
  async dismiss(data: any): Promise<boolean> {
    const { open } = this;
    if (!open) return false;

    this.dialog.close(data);
    this.didDismiss.emit();
    return true;
  }

  render() {
    return (
      <Host>
        <dialog
          class="modal"
          part="modal"
          ref={el => (this.dialog = el)}
        >
          <div
            class="modal-content"
            part="content"
          >
            <slot />

            <div
              class="modal-actions"
              part="actions"
            >
              <slot name="actions" />
            </div>
          </div>
          <Show when={this.backdropDismiss}>
            <form
              class="modal-backdrop"
              method="dialog"
              part="backdrop"
            >
              <button type="submit">close</button>
            </form>
          </Show>
        </dialog>
      </Host>
    );
  }
}
