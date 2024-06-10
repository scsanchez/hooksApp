import "./CounterApp.css";
import { useCounter } from "./hooks/useCounter";

export const CounterWithCustomHook = () => {
  
    const {counter, increment, decrement, reset} = useCounter();

    return (
    <>
    <div>Counter With Custom Hook:{counter}</div>

    <br></br>
    <button onClick={() => increment(1)}>+1</button>
    <button onClick={reset}>Reset</button>
    <button onClick={() => decrement(1)}>-1</button>
    </>
  )
}
export default CounterWithCustomHook;