import { OverlayInterface } from './overlay';

export type TriggerAction = 'click' | 'hover' | 'context-menu';

export class TriggerController {
  #destroy?: () => void;

  /**
   * Removes the click listener from the trigger element.
   */
  removeListener(): void {
    if (this.#destroy) {
      this.#destroy();
      this.#destroy = undefined;
    }
  }

  /**
   * Adds a click listener to the trigger element.
   * Presents the overlay when the trigger is clicked.
   * @param overlay The overlay element.
   * @param trigger The ID of the element to add a click listener to.
   */
  addListener(overlay: OverlayInterface, trigger: string, action: TriggerAction = 'click'): void {
    this.removeListener();

    const triggerEl = trigger !== undefined ? document.getElementById(trigger) : null;
    if (!triggerEl) {
      console.warn(
        `[Poppy Warning]: A trigger element with the ID "${trigger}" was not found in the DOM. The trigger element must be in the DOM when the "trigger" property is set on an overlay component.`,
        overlay,
      );
      return;
    }

    const configureTriggerInteraction = (targetEl: HTMLElement, overlayEl: OverlayInterface) => {
      const openOverlay = (ev: Event) => {
        ev.preventDefault();
        overlayEl.present();
      };
      targetEl.addEventListener(this.#getEvent(action), openOverlay);

      return () => {
        targetEl.removeEventListener(this.#getEvent(action), openOverlay);
      };
    };

    this.#destroy = configureTriggerInteraction(triggerEl, overlay);
  }

  #getEvent(action: TriggerAction) {
    const triggers: Record<TriggerAction, string> = {
      click: 'click',
      hover: 'mouseenter',
      'context-menu': 'contextmenu',
    };
    return triggers[action];
  }

  static create() {
    return new TriggerController();
  }
}
