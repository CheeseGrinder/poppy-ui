import { Color, Size } from 'src/interface';

export interface SelectPopoverOption {
  text: string;
  value: string;
  disabled: boolean;
  checked: boolean;
  color: Color;
  size: Size;
  cssClass?: string | string[];
  handler?: (value: any) => boolean | void | { [key: string]: any };
}
