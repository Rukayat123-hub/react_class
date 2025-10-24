import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  // Increment function
  const handleIncrement = () => setCount(count + 1);

  // Decrement function (won’t go below 0)
  const handleDecrement = () => {
    if (count > 0) setCount(count - 1);
  };

  // Reset function
  const handleReset = () => setCount(0);

  return (
    <div className="counter-container">
      <h2>Count: {count}</h2>
      <div className="button-group">
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
