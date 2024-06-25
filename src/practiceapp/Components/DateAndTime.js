import { useState, useEffect } from "react";


export default function DateAndTime() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState("");

  const date = new Date();

  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    function myTimer() {
      const date = new Date();
      setTime(date.toLocaleTimeString());
    }
    setInterval(myTimer,10);
  }, []);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleClick}>Increment</button>
      <h2>
        {date.getDate()} / {date.getMonth()} / {date.getFullYear()}
      </h2>
      <h3>
        {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}
      </h3>
      <h5>{time}</h5>
    </>
  );
}
