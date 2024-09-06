import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  function incrementCounter() {
    if (counter >= 10) return;
    setCounter((counter) => counter + 1);
  }

  function decrementCounter() {
    if (counter <= 0) return;
    setCounter((counter) => counter - 1);
  }
  return (
    <div>
      <p>You clicked {counter} times</p>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
    </div>
  );
};

export default Counter;
