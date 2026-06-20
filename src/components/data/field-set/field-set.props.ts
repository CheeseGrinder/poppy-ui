export interface FieldSetProps {
  /**
   * Legend text displayed as the fieldset title.
   * Use the `#legend` slot for richer content.
   */
  legend?: string

  /**
   * Adds a visible border around the fieldset.
   *
   * @default false
   */
  bordered?: boolean

  /**
   * Adds a background fill (`base-200`) to the fieldset.
   *
   * @default false
   */
  background?: boolean
}
