import { getElement } from '@stencil/core/internal/client';

/**
 * Returns `true` if the host element or parent
 * has a `dir` set to `rtl`. The closest value will always
 * take priority over the root document value.
 */
function isRTL(ref) {
    return getElement(ref).closest('[dir]').dir.toLowerCase() === 'rtl';
}

export { isRTL as i };

//# sourceMappingURL=dir.js.map