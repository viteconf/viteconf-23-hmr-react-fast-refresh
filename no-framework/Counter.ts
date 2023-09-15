import { h, updateState, state, render } from './runtime.ts';

export const Counter = () => {
  return h(
    'div',
    {},
    h('div', {}, `Count is ${state.count}!`),
    h(
      'button',
      {
        onclick: () => {
          updateState({ count: state.count + 1 });
          render(Counter());
        },
      },
      'increment'
    )
  );
};

import.meta.hot?.accept((mod) => {
  if (mod) render(mod['Counter']());
});
