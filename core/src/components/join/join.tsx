import { Component, ComponentInterface, Host, Prop, h } from '@stencil/core';

/**
 * Join is a container for grouping multiple items, it can be used to group buttons, inputs, or any other element.
 * Join applies border radius to the first and last item. Join can be used to create a horizontal or vertical list of items.
 *
 * @slot - Slot for the content of the join group
 */
@Component({
  tag: 'pop-join',
  styleUrl: 'join.scss',
  // scoped: true,
})
export class Join implements ComponentInterface {
  /**
   * Define content disposition orientation
   */
  @Prop({ reflect: true }) orientation: 'horizontal' | 'vertical' = 'horizontal';

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
