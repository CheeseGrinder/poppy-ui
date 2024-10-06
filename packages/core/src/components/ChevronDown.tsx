import { type FunctionalComponent, h } from '@stencil/core';

export const ChevronDown: FunctionalComponent = () => {
  return (
    <svg
      class="lucide lucide-chevron-down"
      fill="none"
      height="24"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
};
