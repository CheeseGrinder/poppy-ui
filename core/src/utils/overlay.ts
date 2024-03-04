import { PopoverOptions } from 'src/components/popover/popover.interface';
import { componentOnReady, getAppRoot } from './helpers';

type Overlay = Element & {
  present: () => Promise<boolean>;
  dismiss: (data: any, role: string) => Promise<boolean>;
  overlayIndex: number;
}; // HTMLPopPopoverElement

let lastOverlayIndex: number = 0;
let lastId: number = 0;

export class OverlayController<O extends object, Elem extends Element> {
  #tag: string;

  private constructor(tag: string) {
    this.#tag = tag;
  }

  #isHidden(overlay: Element): boolean {
    return overlay.classList.contains('overlay-hidden');
  }

  #getOverlays(doc: Document, selector: string) {
    if (selector === undefined) {
      selector = 'pop-popover';
    }
    return (Array.from(doc.querySelectorAll(selector)) as Overlay[]).filter(c => c.overlayIndex > 0);
  }

  #getAllPresented(doc: Document, overlayTag: string): Overlay[] {
    return this.#getOverlays(doc, overlayTag).filter(o => !this.#isHidden(o));
  }

  #getPresented(doc: Document, overlayTag: string, id?: string): Overlay | undefined {
    const overlays = this.#getAllPresented(doc, overlayTag);

    return id === undefined ? overlays.at(-1) : overlays.find(o => o.id === id);
  }

  async #create<T extends Overlay>(tag: string, options: object | undefined): Promise<T> {
    return (
      window?.customElements?.whenDefined(tag).then(() => {
        const element = document.createElement(tag) as any as Overlay;
        element.classList.add('overlay-hidden');

        /**
         * Convert the passed in overlay options into props
         * that get passed down into the new overlay.
         */
        Object.assign(element, { ...options, hasController: true });

        // append the overlay element to the document body
        getAppRoot(document).appendChild(element);

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

  dismiss(data?: any, role?: string, id?: string) {
    return this.#dismiss(document, data, role, this.#tag, id);
  }

  getTop(doc?: Document): Overlay | undefined {
    return this.#getPresented(doc, this.#tag);
  }

  static create<O extends object, Elem extends Element>(tag: string) {
    return new OverlayController<O, Elem>(tag);
  }
}

export const popoverController = OverlayController.create<PopoverOptions, HTMLPopPopoverElement>('pop-popover');

/**
 * Prepares the overlay element to be presented.
 */
export const prepareOverlay = <T extends Overlay>(el: T) => {
  if (typeof document !== 'undefined') {
    /**
     * Adds a single instance of event listeners for application behaviors:
     *
     * - Escape Key behavior to dismiss an overlay
     * - Trapping focus within an overlay
     * - Back button behavior to dismiss an overlay
     *
     * This only occurs when the first overlay is created.
     */
    // connectListeners(document);
  }
  const overlayIndex = lastOverlayIndex++;
  /**
   * overlayIndex is used in the overlay components to set a zIndex.
   * This ensures that the most recently presented overlay will be
   * on top.
   */
  el.overlayIndex = overlayIndex;
};

/**
 * Assigns an incrementing id to an overlay element, that does not
 * already have an id assigned to it.
 *
 * Used to track unique instances of an overlay element.
 */
export function setOverlayId<T extends Overlay>(el: T) {
  if (!el.hasAttribute('id')) {
    el.id = `pop-overlay-${++lastId}`;
  }
  return el.id;
}
