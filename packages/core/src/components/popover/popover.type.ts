import type { ComponentProps, ComponentRef, FrameworkDelegate, Size } from 'src/interface';
import type { TriggerAction } from '#utils/trigger';

export interface PopoverOptions<T extends ComponentRef = ComponentRef> {
  component: T;
  componentProps?: ComponentProps<T>;
  showBackdrop?: boolean;
  backdropDismiss?: boolean;
  cssClass?: string | string[];
  event?: Event;
  delegate?: FrameworkDelegate;
  animated?: boolean;

  keyboardClose?: boolean;
  id?: string;
  htmlAttributes?: { [key: string]: any };

  size?: Size;
  dismissOnSelect?: boolean;
  reference?: PositionReference;
  side?: PositionSide;
  alignment?: PositionAlign;

  trigger?: string;
  triggerAction?: TriggerAction;
}

export type PositionReference = 'trigger' | 'event';
export type PositionSide = 'top' | 'right' | 'bottom' | 'left' | 'start' | 'end';
export type PositionAlign = 'start' | 'center' | 'end';
