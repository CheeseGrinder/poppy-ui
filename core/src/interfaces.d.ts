import { FrameworkConfig } from '#config';
import { JSX, JSXBase } from '@stencil/core/internal';

type BrandColor = 'primary' | 'secondary' | 'accent';
type StateColor = 'info' | 'success' | 'warning' | 'error';
type Color = BrandColor | StateColor;

type Size = 'xs' | 'sm' | 'md' | 'lg';
type Placement = 'start' | 'end';

// https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autocapitalize
type AutoCapitalize = 'none' | 'off' | 'on' | 'characters' | 'sentences' | 'words' | 'characters';

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#wrap
type Wrap = 'hard' | 'soft';

// https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode
type KeyboardType = 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url';

// https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/enterKeyHint
type EnterKeyHint = 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send';

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types
type InputType =
  | 'text'
  | 'date'
  | 'email'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'url'
  | 'time'
  | 'week'
  | 'month'
  | 'datetime-local';

// https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
type Autocomplete =
  | 'on'
  | 'off'
  | 'name'
  | 'honorific-prefix'
  | 'given-name'
  | 'additional-name'
  | 'family-name'
  | 'honorific-suffix'
  | 'nickname'
  | 'email'
  | 'username'
  | 'new-password'
  | 'current-password'
  | 'one-time-code'
  | 'organization-title'
  | 'organization'
  | 'street-address'
  | 'address-line1'
  | 'address-line2'
  | 'address-line3'
  | 'address-level1'
  | 'address-level2'
  | 'address-level3'
  | 'address-level4'
  | 'country'
  | 'country-name'
  | 'postal-code'
  | 'cc-name'
  | 'cc-given-name'
  | 'cc-additional-name'
  | 'cc-family-name'
  | 'cc-family-name'
  | 'cc-number'
  | 'cc-exp'
  | 'cc-exp-month'
  | 'cc-exp-year'
  | 'cc-csc'
  | 'cc-type'
  | 'transaction-currency'
  | 'transaction-amount'
  | 'language'
  | 'bday'
  | 'bday-day'
  | 'bday-month'
  | 'bday-year'
  | 'sex'
  | 'tel'
  | 'tel-country-code'
  | 'tel-national'
  | 'tel-area-code'
  | 'tel-local'
  | 'tel-extension'
  | 'impp'
  | 'url'
  | 'photo';

interface FormAssociatedInterface {
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

type ComponentRef = Function | HTMLElement | string | null;

type ComponentProps<T = null> = { [key: string]: any };

interface FrameworkDelegate {
  attachViewToDom(container: any, component: any, propsOrDataObj?: any, cssClasses?: string[]): Promise<HTMLElement>;
  removeViewFromDom(container: any, component: any): Promise<void>;
}

type Poppy = {
  components?: ComponentConfig;
} & FrameworkConfig;

declare global {
  interface Window {
    Poppy: Poppy;
  }
}
