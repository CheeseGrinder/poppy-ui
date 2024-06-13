import { ComponentProps, ComponentRef, FrameworkDelegate } from 'src/interface';

export interface ModalOptions<T extends ComponentRef = ComponentRef> {
  component: T;
  componentProps?: ComponentProps<T>;
  showBackdrop?: boolean;
  backdropDismiss?: boolean;
  cssClass?: string | string[];
  delegate?: FrameworkDelegate;
  animated?: boolean;

  id?: string;
  htmlAttributes?: { [key: string]: any };

  trigger?: string;
}
