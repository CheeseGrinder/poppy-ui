import { g as r } from "./p-e8f36a8b.js";

/**
 * Returns `true` if the host element or parent
 * has a `dir` set to `rtl`. The closest value will always
 * take priority over the root document value.
 */ function isRTL(i) {
  return r(i).closest("[dir]").dir.toLowerCase() === "rtl";
}

export { isRTL as i };
//# sourceMappingURL=p-e525cd6a.js.map