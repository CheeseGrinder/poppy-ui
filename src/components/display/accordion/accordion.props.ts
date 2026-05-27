export interface AccordionProps<M extends boolean = false> {
  /**
   * When `true`, multiple items can be open at the same time.
   *
   * @default false
   */
  multiple?: M & boolean

  /**
   * Item name(s) open on first render (uncontrolled).
   * Accepts a string in single mode, an array in multiple mode.
   */
  defaultOpen?: M extends true ? string[] : string

  modelValue?: M extends true ? string[] : string | null
}
