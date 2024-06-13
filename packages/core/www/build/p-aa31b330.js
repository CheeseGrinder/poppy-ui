/**
 * Uses the compareWith param to compare two values to determine if they are equal.
 *
 * @param currentValue The current value of the control.
 * @param compareValue The value to compare against.
 * @param compareWith The function or property name to use to compare values.
 */
const compareOptions = (e, r, n) => {
  if (typeof n === "function") {
    return n(e, r);
  } else if (typeof n === "string") {
    return e[n] === r[n];
  } else {
    return Array.isArray(r) ? r.includes(e) : e === r;
  }
};

/**
 * Compares a value against the current value(s) to determine if it is selected.
 *
 * @param currentValue The current value of the control.
 * @param compareValue The value to compare against.
 * @param compareWith The function or property name to use to compare values.
 */ const isOptionSelected = (e, r, n) => {
  if (e === undefined) {
    return false;
  }
  if (Array.isArray(e)) {
    return e.some((e => compareOptions(e, r, n)));
  } else {
    return compareOptions(e, r, n);
  }
};

export { compareOptions as c, isOptionSelected as i };
//# sourceMappingURL=p-aa31b330.js.map