import type { Color, Size } from 'src/interface';
import type { SelectCompareFn } from '../select/select.type';

export interface SelectContentConfig<T = any> {
  multiple: boolean;
  required: boolean;
  options: SelectContentOption<T>[];
  color: Color;
  size: Size;
  compareWith: SelectCompareFn | string | null;
}

export interface SelectContentOption<T = any> {
  label: string | HTMLElement;
  value: T;
  disabled: boolean;
}
