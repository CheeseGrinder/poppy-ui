import { PopoverOptions } from 'src/components/popover/popover.type';
import { componentOnReady, getAppRoot } from './helpers';
import { ModalOptions } from 'src/components/modal/modal.type';

export interface OverlayInterface {
  open?: boolean;

  present(): Promise<boolean>;
  dismiss(data: any, role: string): Promise<boolean>;
}

export class OverlayController<O extends object, Elem extends Element> {
  #tag: string;

  private constructor(tag: string) {
    this.#tag = tag;
  }

  #isHidden(overlay: Element): boolean {
    return overlay.classList.contains('overlay-hidden');
  }

  #getOverlays(doc: Document, selector: string): OverlayInterface[] {
    if (selector === undefined) {
      selector = 'pop-popover, pop-modal';
    }
    return Array.from(doc.querySelectorAll(selector)) as any as OverlayInterface[];
  }

  #getAllPresented(doc: Document, overlayTag: string): OverlayInterface[] {
    return this.#getOverlays(doc, overlayTag)
      .filter(o => !this.#isHidden(o as any))
      .filter(o => o.open);
  }

  #getPresented(doc: Document, overlayTag: string, id?: string): OverlayInterface | undefined {
    const overlays = this.#getAllPresented(doc, overlayTag);

    return id === undefined ? overlays.at(-1) : overlays.find((o: any) => o.id === id);
  }

  async #create<T extends OverlayInterface>(tag: string, options: object | undefined): Promise<T> {
    return (
      window?.customElements?.whenDefined(tag).then(() => {
        const element = document.createElement(tag) as any as OverlayInterface & Element;
        element.classList.add('overlay-hidden');

        /**
         * Convert the passed in overlay options into props
         * that get passed down into the new overlay.
         */
        Object.assign(element, { ...options, hasController: true });

        // append the overlay element to the document body
        // in case we have a modal open, we append the popover in it to avoid stacking top layer probleme
        // modal can be over an another modal, but popover cant, so we do a little trick here
        const root = document.querySelector('pop-modal[open]') ?? getAppRoot(document);
        root.appendChild(element);

        return new Promise(resolve => componentOnReady(element, resolve));
      }) ?? (Promise.resolve() as any)
    );
  }

  async #dismiss(
    doc: Document,
    data: any,
    role: string | undefined,
    overlayTag: string,
    id?: string,
  ): Promise<boolean> {
    const overlay = this.#getPresented(doc, overlayTag, id);
    if (!overlay) {
      return Promise.reject('overlay does not exist');
    }
    return overlay.dismiss(data, role);
  }

  create(options: O): Promise<Elem> {
    return this.#create(this.#tag, options) as any;
  }

  dismiss(data?: any, role?: string, id?: string): Promise<boolean> {
    return this.#dismiss(document, data, role, this.#tag, id);
  }

  getTop(doc?: Document): OverlayInterface | undefined {
    return this.#getPresented(doc, this.#tag);
  }

  static create<O extends object, Elem extends Element>(tag: string): OverlayController<O, Elem> {
    return new OverlayController<O, Elem>(tag);
  }
}

export const popoverController = OverlayController.create<PopoverOptions, HTMLPopPopoverElement>('pop-popover');
export const modalController = OverlayController.create<ModalOptions, HTMLPopModalElement>('pop-modal');
