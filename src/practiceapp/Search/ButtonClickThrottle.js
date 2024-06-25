import React, {useState} from 'react'

const ButtonClickThrottle = () => {

  function throttleFunc(func, delay) {
    let timeoutId;
    return function(...args) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }

  const [count, setCount] = useState(0);
  const throttledClick = throttleFunc(() => {
    console.log(count);
    setCount(count + 1);
  }, 500);

  const handleClick = () => {
    throttledClick();
  };

  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
      <p>Count: {count}</p>
    </div>
  );
}

export default ButtonClickThrottle