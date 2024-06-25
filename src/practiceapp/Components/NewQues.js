// Create a green square box of 200px width and height.
// Inside it create a red circle of 25px radius. 
// The box should be centered of the window(browser) both horizontally and vertically. 
//Similarly circle should be centered inside the green box
import React, { useRef } from 'react';
import '../App.css';

const NewQues = () => {

  const inputRef = useRef();
  console.log(inputRef.current?.innerHTML);

  return (
    <div>
      <div className='div1' >
      <div style={{width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'red',position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
      </div>
      </div>
      <button class="animated-button" ref={inputRef}>Animated Button</button>
    </div>
  )
}

export default NewQues;