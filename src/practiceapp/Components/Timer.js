import React, { useEffect, useState } from "react";

const Timer = () => {
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timerId;

    if (isRunning) {
      timerId = setInterval(() => {
        setSec((prevSec) => {
          if (prevSec === 59) {
            setMin((prevMin) => {
              if (prevMin === 59) {
                setHour((prevHour) => {
                  if (prevHour === 1) {
                    setMin(0);
                    setSec(0);
                    return 0;
                  } else {
                    return prevHour + 1;
                  }
                });
                return 0;
              } else {
                return prevMin + 1; 
              }
            });
            return 0;
          } else {
            return prevSec + 1;
          }
        });
      }, 1000);
    }

    return () => clearInterval(timerId);
  }, [isRunning]);

  const handleClick = () => {
    setIsRunning(true);
  };

  const handleTimeClick = () => {
    setIsRunning(false);
    setHour(0);
    setMin(0);
    setSec(0);
  };

  const handleClickStop = () => {
    setIsRunning(false);
  };

  return (
    <div>
      <h1>Stop Watch</h1>
      <h1 >
        {hour.toString().padStart(2, "0")}:{min.toString().padStart(2, "0")}:
        {sec.toString().padStart(2, "0")}
      </h1>
      <button onClick={handleClick}>Start</button>
      <button onClick={handleClickStop}>Stop</button>
      <button onClick={handleTimeClick}>Reset</button>
    </div>
  );
};

export default Timer;
