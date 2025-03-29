import type { ComponentConfig, Config } from './config';

export type BrandColor = 'primary' | 'secondary' | 'accent';
export type StateColor = 'info' | 'success' | 'warning' | 'error';

export type Color = BrandColor | StateColor;

export type Size = 'xs' | 'sm' | 'md' | 'lg';

/** https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autocapitalize */
export type AutoCapitalize = 'none' | 'off' | 'on' | 'characters' | 'sentences' | 'words' | 'characters';

/** https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode */
export type KeyboardType = 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url';

/** https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/enterKeyHint */
export type EnterKeyHint = 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send';

export interface FormAssociatedInterface {
  internals: ElementInternals;

  /**
   * This callback is called when the browser both associates
   * the element with and disassociates the element from a form element.
   */
  formAssociatedCallback?(form: HTMLFormElement): void;

  /**
   * This is called whenever the `disabled` state on the element `changes`.
   */
  formDisabledCallback?(disabled: boolean): void;

  /**
   * This is called when the form is reset,
   * and should be used to reset the form-associated component's internal state and validation.
   */
  formResetCallback?(): void;

  /**
   * This method will be called in the event that the browser automatically fills out your form element,
   * an event that could take place in two different scenarios.
   *
   * The first is that the browser can restore the state of an element after navigating or restarting,
   * and the second is that an input was made using a form auto-filling feature.
   *
   */
  formStateRestoreCallback?(state: any, mode: 'restore' | 'autocomplete'): void;
}

export type ComponentRef = Function | HTMLElement | string | null;

export type ComponentProps<T = null> = { [key: string]: any };

export interface FrameworkDelegate {
  attachViewToDom(container: any, component: any, propsOrDataObj?: any, cssClasses?: string[]): Promise<HTMLElement>;
  removeViewFromDom(container: any, component: any): Promise<void>;
}

interface Poppy {
  components?: ComponentConfig;
  config?: Config;
}

declare global {
  interface Window {
    Poppy: Poppy;
  }
}
