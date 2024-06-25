import React, { useState } from 'react'

const ToDoApp = () => {

  const [items, setItems] = useState([]);

  const handleClick = () =>{
    var innerdata=document.getElementById('inputBox').innerHTML;
    setItems([...items,innerdata])
  }

  console.log(items);

  return (
    <div>
      <div style={{width: '100%',height:'100px', border: 'solid 1px black'}} contentEditable='true' id='inputBox'></div>
      <div style={{width:'100%',height:'100px'}}> TextArea below</div>
      <textarea style={{width:'100%',height:'100px'}} ></textarea>
      <button onClick={handleClick}>Add to list</button>
      {items && items.map((item) =>{
        return(
          <ul>
            <li>{item}</li>
            <img src='' alt='closeIcon'></img>
          </ul>
        )
      })}
    </div>
  )
}

export default ToDoApp