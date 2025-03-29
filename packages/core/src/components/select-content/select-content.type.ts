import type { Color, Size } from 'src/interface';

export interface SelectContentConfig<T = any> {
  multiple: boolean;
  required: boolean;
  options: SelectContentOption<T>[];
  color: Color;
  size: Size;
}

export interface SelectContentOption<T = any> {
  label: string | HTMLElement;
  value: T;
  disabled: boolean;
}
