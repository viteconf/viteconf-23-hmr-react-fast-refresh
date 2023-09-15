import { useState } from 'react';
import { useConfig } from './config/useConfig.ts';
import { displayCount } from './utils/index.ts';

export const INITIAL_COUNT = 3;

export const LocalCounter = () => {
  const { config } = useConfig();
  const [count, setCount] = useState(INITIAL_COUNT);

  return (
    <div className="card">
      <p>{config['local-counter-name']}</p>
      <button onClick={() => setCount((count) => addOne(count))}>
        {displayCount(count)}
      </button>
      <p>Next count: {addOne(count)}</p>
    </div>
  );
};

const addOne = (value: number) => value + 2;
