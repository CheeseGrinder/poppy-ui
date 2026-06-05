import 'vue'

// Patch vue event
declare module 'vue' {
  interface InputHTMLAttributes {
    onChange?: (event: ChangeEvent & { target: HTMLInputElement }) => void
    onInput?: (event: InputEvent & { target: HTMLInputElement }) => void
    onFocus?: (event: FocusEvent & { target: HTMLInputElement }) => void
    onPointerdown?: (event: PointerEvent & { target: HTMLInputElement }) => void
    onPointerup?: (event: PointerEvent & { target: HTMLInputElement }) => void
  }
  interface SelectHTMLAttributes {
    onChange?: (event: Event & { target: HTMLSelectElement }) => void
  }
}
