import { componentConfig } from '#config';
import { Component, ComponentInterface, Element, Event, EventEmitter, Host, Prop, Watch, h } from '@stencil/core';
import { AccordionGroupChangeEventDetail } from './accordion-group.type';

@Component({
  tag: 'pop-accordion-group',
  shadow: true,
})
export class AccordionGroup implements ComponentInterface {
  @Element() host: HTMLElement;

  /**
   * If `true`, the user cannot interact with the element.
   *
   * @config @default "false"
   */
  @Prop({ reflect: true, mutable: true }) readonly?: boolean;

  /**
   * If `true`, the user cannot interact with the element.
   *
   * @config @default "false"
   */
  @Prop({ reflect: true, mutable: true }) disabled?: boolean;

  /**
   * If `true`, the user can open multiple accordion.
   *
   * @config @default "false"
   */
  @Prop({ reflect: true, mutable: true }) multiple: boolean;

  /**
   * name of the active the accordion.
   */
  @Prop({ mutable: true }) active?: string | string[];
  @Watch('active')
  onActiveChange(value: string | string[]) {
    this.popActiveChange.emit({
      value,
    });
    this.popChange.emit({
      value,
    });
  }

  componentWillLoad(): void {
    componentConfig.apply(this, 'pop-accordion-group', {
      readonly: false,
      disabled: false,
      multiple: false,
    });
  }

  componentDidLoad(): void {
    this.#accordions.forEach(accordion => {
      if (this.readonly) accordion.readonly = this.readonly;
      if (this.disabled) accordion.disabled = this.disabled;
    });
    this.#applyOpen();
  }

  #applyOpen(): void {
    if (!this.active) return;

    this.popActiveChange.emit({
      value: this.active,
    });
  }

  get #accordions() {
    return Array.from(this.host.querySelectorAll('pop-accordion'));
  }

  /**
   * The `popChange` event is fired when the user select an open of close an accordion.
   *
   */
  @Event() popChange: EventEmitter<AccordionGroupChangeEventDetail>;

  /**
   * Emitted when the `active` property has changed.
   * This is used to ensure that `pop-accordion` can respond
   * to any value property changes from the group.
   *
   * @internal
   */
  @Event() popActiveChange!: EventEmitter<AccordionGroupChangeEventDetail>;

  #onClick = (ev: Event) => {
    ev.preventDefault();

    const accordion = ev.target as HTMLPopAccordionElement;
    if (!accordion || accordion.disabled || accordion.readonly) return;

    const current = this.active;
    const newActive = accordion.name;

    if (this.multiple) {
      this.active =
        current === undefined
          ? [newActive]
          : this.active.includes(newActive)
            ? [...this.active].filter(a => a !== newActive)
            : [newActive, ...this.active];
    } else {
      this.active = current !== newActive ? newActive : null;
    }
  };

  render() {
    return (
      <Host onClick={this.#onClick}>
        <slot />
      </Host>
    );
  }
}
