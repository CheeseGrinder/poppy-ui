import { componentConfig } from '#global/component-config';
import { Attributes, hostContext, inheritAriaAttributes } from '#utils/helpers';
import { Component, ComponentInterface, Element, Event, EventEmitter, Host, Prop, h } from '@stencil/core';
import type { Color, Size } from 'src/interfaces';
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
  @Prop({ reflect: true, mutable: true }) disabled?: boolean = false;

  /**
   * The color to use from your application's color palette.
   * Default options are: `"neutral"`, `"ghost"`, `"primary"`, `"secondary"`, `"accent"`, `"info"`, `"success"`, `"warning"`, `"error"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   */
  @Prop({ reflect: true, mutable: true }) color?: Color | 'neutral' | 'ghost';

  /**
   * Change size of the component
   * Options are: `"xs"`, `"sm"`, `"md"`, `"lg"`.
   */
  @Prop({ reflect: true, mutable: true }) size?: Size;

  /**
   * Transparent Button with colored border
   */
  @Prop({ reflect: true, mutable: true }) outlined?: boolean = false;

  /**
   * `square` set button width and heigth with 1:1 ratio
   * `round` set button width and heigth with 1:1 ratio and rounded corners.
   */
  @Prop({ reflect: true, mutable: true }) shape?: ButtonShape;

  /**
   * `wide` Add more horizontal padding
   * `block` make a full width button
   */
  @Prop({ reflect: true, mutable: true }) expand?: ButtonExpand;

  /**
   * Emitted when the button has focus.
   */
  @Event() popFocus!: EventEmitter<void>;

  /**
   * Emitted when the button loses focus.
   */
  @Event() popBlur!: EventEmitter<void>;

  componentWillLoad(): void {
    const config = componentConfig.get('pop-button');

    this.disabled ??= config.disabled ?? false;
    this.color ??= config.color;
    this.size ??= config.size;
    this.outlined ??= config.outlined ?? false;
    this.shape ??= config.shape;
    this.expand ??= config.expand;
  }

  componentWillRender(): void {
    this.#inheritedAttributes = inheritAriaAttributes(this.host);
  }

  #onFocus = (): void => {
    this.popFocus.emit();
  };

  #onBlur = (): void => {
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
