import { Component, Host, Prop, h } from '@stencil/core';
import type { Color, Size } from 'src/interface';

let selectOptionIds = 0;

@Component({
  tag: 'pop-select-option',
  styleUrl: 'select-option.scss',
})
export class SelectOption {
  private inputId = `pop-selopt-${selectOptionIds++}`;

  /**
   * The text value of the option.
   */
  @Prop() value?: any | null;

  /**
   * If `true`, the user cannot interact with the select option. This property does not apply when `interface="action-sheet"` as `ion-action-sheet` does not allow for disabled buttons.
   */
  @Prop({ mutable: true }) disabled?: boolean;

  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"accent"`, `"info"`, `"success"`, `"warning"`, `"error"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   *
   * @internal
   */
  @Prop({ mutable: true }) color?: Color;

  /**
   * Change size of the component
   * Options are: `"xs"`, `"sm"`, `"md"`, `"lg"`.
   *
   * @internal
   */
  @Prop({ reflect: true, mutable: true }) size?: Size;

  render() {
    return (
      <Host
        id={this.inputId}
        role="option"
      />
    );
  }
}
