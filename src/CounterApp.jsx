import { useState } from "react";
import "./CounterApp.css";

export const CounterApp = () => {
  const [state, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  const { counter1, counter2, counter3 } = state;

  return (
    <>
      <h1>Counter1: {counter1}</h1>
      <h1>Counter2: {counter2}</h1>
      <h1>Counter3: {counter3}</h1>
      <hr />
      <button
        onClick={() =>
          setCounter({
            ...state,
            counter1: counter1 + 1,
            counter2: counter2 +1,
            counter3: counter3 +1,
          })
        }
      >
        count is {counter1}
      </button>
    </>
  );
};

export default CounterApp;
