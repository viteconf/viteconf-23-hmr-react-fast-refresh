export let state = { count: 0 };

export const updateState = (newState: typeof state) => {
  state = newState;
};

export const h = (
  tag: string,
  props: Record<string, unknown>,
  ...children: (string | Node)[]
) => {
  const el = document.createElement(tag);
  for (const [key, value] of Object.entries(props)) {
    (el as any)[key] = value;
  }
  for (const child of children) {
    if (typeof child === 'string') {
      el.appendChild(document.createTextNode(child));
    } else {
      el.appendChild(child);
    }
  }
  return el;
};

export const render = (...children: (ChildNode | string)[]) => {
  document.getElementById('root')!.replaceChildren(...children);
};
