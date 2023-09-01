import React, { useRef, useImperativeHandle } from 'react';

// Child counter component
const Counter = React.forwardRef((props, ref) => {
  const [count, setCount] = React.useState(0);

  // Function to increment the count
  const increment = () => {
    setCount(count + 1);
  };

  // Function to reset the count
  const reset = () => {
    setCount(0);
  };

  // Use useImperativeHandle to customize the ref value
  useImperativeHandle(ref, () => ({
    increment,
    reset,
  }));

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
});

// Parent component
const Parent = () => {
  const counterRef = useRef();

  const handleIncrement = () => {
    counterRef.current.increment();
  };

  const handleReset = () => {
    counterRef.current.reset();
  };

  return (
    <div>
      <h1>Counter App</h1>
      <Counter ref={counterRef} />
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Parent;
