// Toggle
interface ToggleChangeEventDetail<T = unknown> {
  checked: boolean;
  value: T;
}

// Checkbox
interface CheckboxChangeEventDetail<T = unknown> {
  checked: boolean;
  value: T;
}

// Textarea
interface TextareaChangeEventDetail {
  value: string;
}
interface TextareaInputEventDetail {
  value: string;
}

// Input
interface InputChangeEventDetail {
  value: string;
}
interface InputInputEventDetail {
  value: string;
}

// Input File
interface InputFileChangeEventDetail {
  value: File[];
}

// Radio
interface RadioChangeEventDetail<T = any> {
  value: T;
}
interface RadioGroupChangeEventDetail<T = any> {
  value: T;
}
