import { componentConfig } from '#config';
import { Component, type ComponentInterface, Host, Prop, h } from '@stencil/core';
import type { JoinOrientation } from './join.type';

/**
 * Join is a container for grouping multiple items, it can be used to group buttons, inputs, or any other element.
 * Join applies border radius to the first and last item. Join can be used to create a horizontal or vertical list of items.
 *
 * @slot - Slot for the content of the join group
 */
@Component({
  tag: 'pop-join',
  styleUrl: 'join.scss',
})
export class Join implements ComponentInterface {
  /**
   * Define content disposition orientation
   *
   * @config
   * @default "horizontal"
   */
  @Prop({ reflect: true, mutable: true }) orientation: JoinOrientation;

  componentWillLoad(): void {
    componentConfig.apply(this, 'pop-join', {
      orientation: 'horizontal',
    });
  }

  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
