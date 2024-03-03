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

type ComponentRef = Function | HTMLElement | string | null;

type ComponentProps<T = null> = { [key: string]: any };

interface FrameworkDelegate {
  attachViewToDom(container: any, component: any, propsOrDataObj?: any, cssClasses?: string[]): Promise<HTMLElement>;
  removeViewFromDom(container: any, component: any): Promise<void>;
}

type PopElements = JSX.IntrinsicElements;
type ComponentsOption = {
  [Tag in keyof PopElements]?: {
    [Prop in keyof Omit<PopElements[Tag], keyof Omit<JSXBase.HTMLAttributes, 'color'>>]?: PopElements[Tag][Prop];
  };
};
