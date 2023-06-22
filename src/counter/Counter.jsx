import { useState } from "react";
import './counter.css'

function Counter() {
  const [counter, setCounter] = useState(0);

  function increase() {
    setCounter(counter + 1);
  }

  function decrease() {
    setCounter(counter - 1);
  }

  function reset() {
    setCounter(0);
  }

  return (
    <div>
      <h1> Contador: {counter}</h1>
      <button className="increase" onClick={increase}>+1</button>
      <button className="decrease" onClick={decrease}>-1</button>
      <button className="reset" onClick={reset}>Borrar</button>
    </div>
  );
}

export default Counter;
