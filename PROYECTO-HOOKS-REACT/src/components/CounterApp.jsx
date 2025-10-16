import { useCounter } from "../hooks/useCounter";

export const CounterApp = () => {
  const { counter, increment, reset, decrement } = useCounter(0);

  return (
    <>
      <h1>Counter:</h1>
      <h4>{counter}</h4>
      <button onClick={() => increment()}>+1</button>
      <button onClick={() => reset()}>Reset</button>
      <button onClick={() => decrement(1, true)}>-1</button>
    </>
  );
};
