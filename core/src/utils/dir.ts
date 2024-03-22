import { getElement } from '@stencil/core';

/**
 * Returns `true` if the host element or parent
 * has a `dir` set to `rtl`. The closest value will always
 * take priority over the root document value.
 */
export function isRTL(ref: any): boolean {
  return getElement(ref).closest<HTMLElement>('[dir]').dir.toLowerCase() === 'rtl';
};
