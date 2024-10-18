import { useCounter } from "./hooks/useCounter"

export const CounterWithCustomHook = () => {


const { counter,increment,decrement,reset} = useCounter(2);
  const number = 3;
  return (
    <>
        <h1>Counter with Hook: {counter}</h1>
        <br />

        <button onClick={ () =>increment(number) } className="btn btn-primary">+1</button>
        <button onClick={ () => decrement(number) }className="btn btn-primary">-1</button>
        <button onClick={ reset } className="btn btn-primary">Reset</button>
    
    </>

  )
}
