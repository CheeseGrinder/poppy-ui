import { componentConfig, config } from '#config';
import { Attributes, hostContext, inheritAriaAttributes } from '#utils/helpers';
import {
  AttachInternals,
  Component,
  ComponentInterface,
  Element,
  Event,
  EventEmitter,
  Host,
  Prop,
  h,
} from '@stencil/core';
import type { Size } from 'src/interface';
import type { ButtonColor, ButtonExpand, ButtonShape, ButtonType } from './button.type';

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
  formAssociated: true,
})
export class Button implements ComponentInterface {
  private inheritedAttributes: Attributes = {};

  @Element() host!: HTMLElement;

  @AttachInternals() internals: ElementInternals;

  /**
   * The type of the button.
   */
  @Prop() type?: ButtonType = 'button';

  /**
   * The HTML form element id. Used to submit a form when the button is not a child of the form.
   */
  @Prop() form?: string | HTMLFormElement;

  /**
   * If `true`, the user cannot interact with the element.
   *
   * @config
   * @default false
   */
  @Prop({ reflect: true, mutable: true }) disabled?: boolean;

  /**
   * The color to use from your application's color palette.
   * Default options are: `"neutral"`, `"ghost"`, `"primary"`, `"secondary"`, `"accent"`, `"info"`, `"success"`, `"warning"`, `"error"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   *
   * @config
   */
  @Prop({ reflect: true, mutable: true }) color?: ButtonColor;

  /**
   * Change size of the component
   * Options are: `"xs"`, `"sm"`, `"md"`, `"lg"`.
   *
   * @config
   * @default "md"
   */
  @Prop({ reflect: true, mutable: true }) size?: Size;

  /**
   * Transparent Button with colored border
   *
   * @config
   * @default false
   */
  @Prop({ reflect: true, mutable: true }) outlined?: boolean;

  /**
   * `square` set button width and heigth with 1:1 ratio
   * `round` set button width and heigth with 1:1 ratio and rounded corners.
   *
   * @config
   */
  @Prop({ reflect: true, mutable: true }) shape?: ButtonShape;

  /**
   * `wide` Add more horizontal padding
   * `block` make a full width button
   *
   * @config
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
    componentConfig.apply(this, 'pop-button', {
      disabled: false,
      size: config.get('defaultSize', 'md'),
      outlined: false,
    });
  }

  componentWillRender(): void {
    this.inheritedAttributes = inheritAriaAttributes(this.host);
  }

  private getForm(): HTMLFormElement {
    const { form } = this;
    if (typeof form === 'string') return document.getElementById(form) as HTMLFormElement;
    if (typeof form === 'object') return form;

    return this.internals.form;
  }

  private onClick = (): void => {
    const { type } = this;
    const form = this.getForm();
    const actions: Partial<Record<ButtonType, () => void>> = {
      submit: () => form.requestSubmit(),
      reset: () => form.reset(),
    };

    actions[type]?.();
  };

  private onFocus = (): void => {
    this.popFocus.emit();
  };

  private onBlur = (): void => {
    this.popBlur.emit();
  };

  render() {
    const { host, disabled, type } = this;

    return (
      <Host
        aria-disabled={disabled ? 'true' : null}
        class={{
          'join-item': hostContext(host, 'pop-join'),
        }}
        onClick={this.onClick}
      >
        <button
          part="native"
          type={type}
          disabled={disabled}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          {...this.inheritedAttributes}
        >
          <slot name="start" />
          <slot />
          <slot name="end" />
        </button>
      </Host>
    );
  }
}
