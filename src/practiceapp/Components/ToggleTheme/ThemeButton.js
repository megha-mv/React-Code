import React from 'react';
import { useTheme } from './ThemeStateProvider';

const ThemedButton = () => {
  const { theme, toggleTheme } = useTheme();
  // const [theme, setTheme] = useState('light');

  // const handleClick =()=>{
  //   setTheme((prevTheme) => prevTheme === 'light'? 'dark': 'light')
  // }

  return (
    <>
    <div       
    style={{
        backgroundColor: theme === 'light' ? 'lightBlue' : 'red',
        width: '100px',
        height: '100px'
      }}
      ></div>
    <button
      onClick={toggleTheme}
      // onClick={handleClick}
    >
      Toggle Theme
    </button>
    </>
  );
};

export default ThemedButton;