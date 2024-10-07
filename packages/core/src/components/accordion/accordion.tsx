import { Component, type ComponentInterface, Element, Host, Method, Prop, h } from '@stencil/core';
import { compareOptions } from '#utils/forms';
import { hostContext } from '#utils/helpers';
import { ChevronDown } from '../ChevronDown';

/**
 * Accordion is used for showing and hiding content.
 *
 * @slot - Content that will be hiding or shown
 * @slot header - Content of the accordion header
 *
 * @part header - Header of the accordion
 * @part content - Content of the accordion
 */
@Component({
  tag: 'pop-accordion',
  styleUrl: 'accordion.scss',
  shadow: true,
})
export class Accordion implements ComponentInterface {
  private accordionGroup?: HTMLPopAccordionGroupElement;

  @Element() host: HTMLElement;

  /**
   * If `true`, the user cannot interact with the element.
   */
  @Prop({ reflect: true }) readonly?: boolean = false;

  /**
   * If `true`, the user cannot interact with the element.
   */
  @Prop({ reflect: true }) disabled?: boolean = false;

  /**
   * name of the accordion
   */
  @Prop({ reflect: true }) name!: string;

  /**
   * If `true`, the accordion is open.
   *
   * The developer must not set this value to `true` if the accordion is used in `<accordion-group>` element and set the active property to the name of the accordion.
   */
  @Prop({ reflect: true, mutable: true }) open?: boolean = false;

  connectedCallback(): void {
    this.accordionGroup = this.host.closest('pop-accordion-group');

    this.accordionGroup?.addEventListener('popActiveChange', this.handleValueChanged);
  }

  disconnectedCallback(): void {
    this.accordionGroup?.removeEventListener('popActiveChange', this.handleValueChanged);
  }

  /**
   * Open the accordion.
   * If the method returns `false`, the accordion was already open. otherwise it returns `true`
   */
  @Method()
  async show(): Promise<boolean> {
    if (this.open) {
      return false;
    }
    this.open = true;
    return true;
  }

  /**
   * Close the accordion.
   * If the method returns `false`, the accordion was already closed. otherwise it returns `true`
   */
  @Method()
  async hide(): Promise<boolean> {
    if (!this.open) {
      return false;
    }
    this.open = false;
    return true;
  }

  /**
   * Open or close the accordion depending on his actual state
   */
  @Method()
  async toggle(): Promise<void> {
    this.open = !this.open;
  }

  private handleValueChanged = (): void => {
    if (!this.accordionGroup) return;

    const { active: newActive } = this.accordionGroup;
    const current = this.name;

    this.open = compareOptions(current, newActive);
  };

  private onClick = () => {
    if (this.accordionGroup) return;

    const { readonly, disabled } = this;
    if (disabled || readonly) return;
    this.open = !this.open;
  };

  render() {
    const { host } = this;

    return (
      <Host
        class={{
          'join-item': hostContext(host, 'pop-join'),
        }}
      >
        <header
          class="accordion-title"
          onClick={this.onClick}
          part="header"
        >
          <div class="header-content">
            <slot name="header" />
          </div>
          <ChevronDown />
        </header>
        <div
          class="accordion-content"
          part="content"
        >
          <slot />
        </div>
      </Host>
    );
  }
}
