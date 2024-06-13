/**
 * Elements inside of web components sometimes need to inherit global attributes
 * set on the host. For example, the inner input in `pop-input` should inherit
 * the `title` attribute that developers set directly on `pop-input`. This
 * helper function should be called in componentWillLoad and assigned to a variable
 * that is later used in the render function.
 *
 * This does not need to be reactive as changing attributes on the host element
 * does not trigger a re-render.
 */
const inheritAttributes = (a, r = []) => {
  const i = {};
  r.forEach((r => {
    if (a.hasAttribute(r)) {
      const e = a.getAttribute(r);
      if (e !== null) {
        i[r] = a.getAttribute(r);
      }
      a.removeAttribute(r);
    }
  }));
  return i;
};

/**
 * List of available ARIA attributes + `role`.
 * Removed deprecated attributes.
 * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes
 */ const a = [ "role", "aria-activedescendant", "aria-atomic", "aria-autocomplete", "aria-braillelabel", "aria-brailleroledescription", "aria-busy", "aria-checked", "aria-colcount", "aria-colindex", "aria-colindextext", "aria-colspan", "aria-controls", "aria-current", "aria-describedby", "aria-description", "aria-details", "aria-disabled", "aria-errormessage", "aria-expanded", "aria-flowto", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-level", "aria-live", "aria-multiline", "aria-multiselectable", "aria-orientation", "aria-owns", "aria-placeholder", "aria-posinset", "aria-pressed", "aria-readonly", "aria-relevant", "aria-required", "aria-roledescription", "aria-rowcount", "aria-rowindex", "aria-rowindextext", "aria-rowspan", "aria-selected", "aria-setsize", "aria-sort", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext" ];

/**
 * Returns an array of aria attributes that should be copied from
 * the shadow host element to a target within the light DOM.
 * @param el The element that the attributes should be copied from.
 * @param ignoreList The list of aria-attributes to ignore reflecting and removing from the host.
 * Use this in instances where we manually specify aria attributes on the `<Host>` element.
 */ const inheritAriaAttributes = (r, i) => {
  let e = a;
  if (i && i.length > 0) {
    e = e.filter((a => !i.includes(a)));
  }
  return inheritAttributes(r, e);
};

/**
 * Patched version of requestAnimationFrame that avoids ngzone
 * Use only when you know ngzone should not run
 */ const raf = a => {
  if (typeof __zone_symbol__requestAnimationFrame === "function") {
    return __zone_symbol__requestAnimationFrame(a);
  }
  if (typeof requestAnimationFrame === "function") {
    return requestAnimationFrame(a);
  }
  return setTimeout(a);
};

/**
 * Waits for a component to be ready for
 * both custom element and non-custom element builds.
 * If non-custom element build, el.componentOnReady
 * will be used.
 * For custom element builds, we wait a frame
 * so that the inner contents of the component
 * have a chance to render.
 *
 * Use this utility rather than calling
 * el.componentOnReady yourself.
 */ const componentOnReady = (a, r) => {
  if (a.componentOnReady) {
    // eslint-disable-next-line custom-rules/no-component-on-ready-method
    a.componentOnReady().then((a => r(a)));
  } else {
    raf((() => r(a)));
  }
};

const hostContext = (a, r) => !!a.closest(r);

const getHostContextProperty = (a, r, i, e) => {
  const t = a.closest(r);
  if (!t) {
    return null;
  }
  return t[i] ?? e;
};

export { inheritAttributes as a, componentOnReady as c, getHostContextProperty as g, hostContext as h, inheritAriaAttributes as i, raf as r };
//# sourceMappingURL=p-622ca0a1.js.map