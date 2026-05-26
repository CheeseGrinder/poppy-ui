import type { Booleanish } from '@/types/utils.type';
import type { ClassValue } from 'vue';
import type { DropdownAlign, DropdownSide, DropdownTriggerAction } from './dropdown.types';

export interface DropdownConfigurableProps {
  /**
   * Describes how the dropdown has to be alined
   * - `"start"`: Align to the left in LTR and to the right in RTL.
   * - `"center"`: Align to the left in LTR and to the right in RTL.
   * - `"end"`: Align to the right in LTR and to the left in RTL.
   *
   * @default "start"
   */
  align?: DropdownAlign

  /**
   * Describe where the content is displayed relatively to the trigger element
   * - `"left"`: Open on left
   * - `"right"`: Open on right
   * - `"top"`: Open on top
   * - `"bottom"`: Open on bottom
   *
   * @default "bottom"
   */
  side?: DropdownSide

  /**
   * Describes what kind of intertion with the trigger (sloted element) that should cause the dropdown to open.
   * - `"click"`: the dropdown will be presented when the trigger is left clicked.
   * - `"hover"`: the dropdown will be presented when a pointer hovers over the trigger.
   * - `"context-menu"`: the dropdown will be presented when the trigger is right clicked on desktop and long pressed on mobile. This will also prevent your device's normal context menu from appearing.
   *
   * @default "click"
   */
  triggerAction?: DropdownTriggerAction;

  /**
   * Set the amount of time, in **milliseconds** after the user no longer hover the trigger or dropdown, will dismiss.
   * Only apply on `triggerAction=hover`
   *
   * @default 500
   */
  debounce?: number;
}


export interface DropdownProps extends DropdownConfigurableProps {
  /**
   * Force the dropdown to be shown
   *
   * @default false
   */
  open?: Booleanish

  triggerClass?: ClassValue;
  contentClass?: ClassValue;
}
