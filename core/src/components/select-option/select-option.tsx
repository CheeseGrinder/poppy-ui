import { componentConfig } from '#global/component-config';
import { Component, Host, h, Prop } from '@stencil/core';
import { Color, Size } from 'src/interfaces';

@Component({
  tag: 'pop-select-option',
  styleUrl: 'select-option.scss',
})
export class SelectOption {
  #inputId = `pop-selopt-${selectOptionIds++}`;

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
   */
  @Prop({ mutable: true }) color?: Color;

  /**
   * Change size of the component
   * Options are: `"xs"`, `"sm"`, `"md"`, `"lg"`.
   */
  @Prop({ reflect: true, mutable: true }) size?: Size;

  componentWillLoad(): void {
    const config = componentConfig.get('pop-select-option');
    this.disabled ??= config.disabled ?? false;
    this.color ??= config.color;
    this.size ??= config.size;
  }

  render() {
    return <Host role="option" id={this.#inputId}></Host>;
  }
}

let selectOptionIds = 0;
