import { Attributes, hostContext, inheritAriaAttributes } from '#utils/helpers';
import { Component, ComponentInterface, Element, Event, EventEmitter, Host, Prop, h } from '@stencil/core';
import type { Color, Size } from 'src/type';
import type { ButtonExpand, ButtonShape, ButtonType } from './button.interface';

/**
 * Buttons allow the user to take actions or make choices.
 *
 * @slot - Slot for the content of the button
 * @slot start-icon - Slot for placing an icon at the start
 * @slot end-icon - Slot for placing an icon at the end
 *
 * @part native - The native HTML button or anchor element that wraps all child elements.
 */
@Component({
  tag: 'pop-button',
  styleUrl: 'button.scss',
  shadow: true,
})
export class Button implements ComponentInterface {
  #inheritedAttributes: Attributes = {};

  @Element() host!: HTMLElement;

  /**
   * The type of the button.
   */
  @Prop() type?: ButtonType = 'button';

  /**
   * The HTML form element id. Used to submit a form when the button is not a child of the form.
   */
  @Prop() form?: string;

  /**
   * If `true`, the user cannot interact with the element.
   */
  @Prop({ reflect: true }) disabled?: boolean = false;

  /**
   * The color to use from your application's color palette.
   * Default options are: `"neutral"`, `"primary"`, `"secondary"`, `"accent"`, `"info"`, `"success"`, `"warning"`, `"error"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   */
  @Prop({ reflect: true }) color?: Color | 'neutral';

  /**
   * Change size of the component
   * Options are: `"xs"`, `"sm"`, `"md"`, `"lg"`.
   */
  @Prop({ reflect: true }) size?: Size;

  /**
   * Transparent Button with colored border
   */
  @Prop({ reflect: true }) outlined?: boolean = false;

  /**
   * `square` set button width and heigth with 1:1 ratio
   * `round` set button width and heigth with 1:1 ratio and rounded corners.
   */
  @Prop({ reflect: true }) shape?: ButtonShape;

  /**
   * `wide` Add more horizontal padding
   * `block` make a full width button
   */
  @Prop({ reflect: true }) expand?: ButtonExpand;

  /**
   * Emitted when the button has focus.
   */
  @Event() popFocus!: EventEmitter<void>;

  /**
   * Emitted when the button loses focus.
   */
  @Event() popBlur!: EventEmitter<void>;

  componentWillRender(): void | Promise<void> {
    this.#inheritedAttributes = inheritAriaAttributes(this.host);
  }

  #onFocus = () => {
    this.popFocus.emit();
  };

  #onBlur = () => {
    this.popBlur.emit();
  };

  render() {
    const { host, disabled } = this;

    return (
      <Host
        aria-disabled={disabled ? 'true' : null}
        class={{
          'join-item': hostContext(host, 'pop-join'),
        }}
      >
        <button
          part="native"
          disabled={disabled}
          onFocus={this.#onFocus}
          onBlur={this.#onBlur}
          {...this.#inheritedAttributes}
        >
          <slot name="start-icon"></slot>
          <slot></slot>
          <slot name="end-icon"></slot>
        </button>
      </Host>
    );
  }
}
