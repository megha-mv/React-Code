import React, { useState } from 'react';

const HomePage = () => {
  const products = [
    { fruits: ['apple', 'banana', 'oranges', 'kiwi'], price: ['120', '50', '100', '200'] },
  ];

  // const items =[{fruit: 'Apple', price: 120, qty: 10 },
  // {fruit: 'banana', price: 50, qty: 20 },
  // {fruit: 'oranges', price: 100, qty: 10 },
  // {fruit: 'kiwi', price: 200, qty: 15 },
  // {fruit: 'mango', price: 140, qty: 18 },
  // ]

  const [item, setItem] = useState('');
  const [filteredFruits, setFilteredFruits] = useState(products[0].fruits);

  const [itemsInCart, setItemsInCart] = useState([]);

  const handleSearch = (value) => {
    const filteredFruits = products[0].fruits.filter((fruit) => fruit.toLowerCase().includes(value.toLowerCase()));
    setFilteredFruits(filteredFruits);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setItem(value);
    handleSearch(value);
  };

  const handleClick = (fruit) =>{
    setItemsInCart((prevVal) => [...prevVal,fruit])
  }

  return (
    <div>
      <input
        type="text"
        placeholder="search your item here"
        value={item}
        onChange={handleChange}
      ></input>
      <div id="parentContainer" style={{display:'flex'}}>
      <div style={{display:'flex'}}>
        {filteredFruits.map((fruit, i) => (
          <div key={i} style={{ width: '200px', height: '150px', border: '1px solid black', margin: '10px' }}>
            <h3 style={{display:'flex', justifyContent:'center'}}>{fruit}</h3>
            <p style={{display:'flex', justifyContent:'center'}}>Price: {products[0].price[i]}</p>
            <button onClick={()=>handleClick(fruit)} style={{position:'relative', left:'33%'}}>Add Item</button>
          </div>
        ))}
      </div>
      <div id="cart" style={{height: '50%', width:'30%', border: '1px solid black'}}>
        <h3>Items in cart :{itemsInCart.length}</h3>
        <h5>Items in Cart : 
        <ul>
          {itemsInCart.map((itemInCart, i) => (
            <li key={i}>{itemInCart}</li>
          ))}
        </ul>
        </h5>
      </div>
      </div>
    </div>
  );
};

export default HomePage;
