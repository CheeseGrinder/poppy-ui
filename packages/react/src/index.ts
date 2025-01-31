import { type PoppyUserConfig, initialize } from '@poppy-ui/core';
export * from './components';

export {
  AccordionGroupCustomEvent,
  AccordionGroupChangeEventDetail,
  CheckboxCustomEvent,
  CheckboxChangeEventDetail,
  InputCustomEvent,
  InputChangeEventDetail,
  InputInputEventDetail,
  InputFileCustomEvent,
  InputFileChangeEventDetail,
  RadioGroupCustomEvent,
  RadioGroupChangeEventDetail,
  RangeCustomEvent,
  RangeChangeEventDetail,
  SelectCustomEvent,
  SelectChangeEventDetail,
  SwapCustomEvent,
  SwapChangeEventDetail,
  TextareaCustomEvent,
  TextareaChangeEventDetail,
  TextareaInputEventDetail,
  ToggleCustomEvent,
  ToggleChangeEventDetail,
  ModalOptions,
  PopoverOptions,
} from '@poppy-ui/core/components';

export type * from '@poppy-ui/core/dist/types/component-types';
export type * from '@poppy-ui/core/dist/types/interface';

export const setupPoppyReact = (config: PoppyUserConfig = {}) => {
  /**
   * By default Stencil hides elements that
   * are not hydrated, but in the CE build there is no
   * hydration.
   */
  if (typeof document !== 'undefined') {
    document.documentElement.classList.add('pop-ce');
  }

  initialize({
    ...config,
  });
};
