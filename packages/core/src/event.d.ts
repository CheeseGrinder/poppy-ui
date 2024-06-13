// Toggle
export interface ToggleChangeEventDetail<T = unknown> {
  checked: boolean;
  value: T;
}

// Textarea
export interface TextareaChangeEventDetail {
  value: string;
}
export interface TextareaInputEventDetail {
  value: string;
}

// Input

// Input File
export interface InputFileChangeEventDetail {
  value: File[];
}

// Radio
export interface RadioChangeEventDetail<T = any> {
  value: T;
}
export interface RadioGroupChangeEventDetail<T = any> {
  value: T;
}

// Range
export interface RangeChangeEventDetail {
  value: number;
}

// Select
export interface SelectChangeEventDetail<T = any> {
  value: T;
}
