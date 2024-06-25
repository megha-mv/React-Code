import React, { useState, useEffect } from 'react';

const withTrafficLightCycle = (WrappedComponent) => {
  return () => {
    const [color, setColor] = useState('red');

    useEffect(() => {
      const cycleColors = () => {
        setColor((prevColor) => {
          if (prevColor === 'red') return 'green';
          if (prevColor === 'green') return 'yellow';
          if (prevColor === 'yellow') return 'red';
        });
      };

      const intervalId = setInterval(cycleColors, 2000);

      return () => clearInterval(intervalId);
    }, []);

    return <WrappedComponent color={color} />;
  };
};

export default withTrafficLightCycle;
