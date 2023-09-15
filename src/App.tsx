import viteLogo from '/vite.svg';
import { CounterProvider } from './CounterProvider/CounterProvider.tsx';
import { GlobalCounter } from './GlobalCounter.tsx';
import { INITIAL_COUNT, LocalCounter } from './LocalCounter.tsx';

console.log(`Initial count is ${INITIAL_COUNT}`);

export const App = () => (
  <CounterProvider>
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
    </div>
    <h1>Vite + React</h1>
    <LocalCounter />
    <GlobalCounter />
  </CounterProvider>
);
