import { FunctionalComponent } from '@stencil/core';

interface ShowProps {
  when: boolean;
}

export const Show: FunctionalComponent<ShowProps> = ({ when }, childrens) => {
  if (!when) return;

  return childrens;
};
