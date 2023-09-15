import {
  createContext,
  useState,
  useContext,
  ReactNode,
  SetStateAction,
  Dispatch,
} from 'react';

type CounterContextValue = {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
};
const CounterContext = createContext<CounterContextValue | null>(null);
CounterContext.displayName = 'CounterContext';

export const useCounter = () => {
  const context = useContext(CounterContext);
  if (!context) throw new Error('CounterProvider not available!');
  return context;
};

export const CounterProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
};
