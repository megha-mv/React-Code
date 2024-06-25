import React, { useEffect, useState } from 'react'
import Products from './Products';

const List = () => {

  const [productsData, setProductData] =useState();

  const fetchData = async ()=>{
    try {
      const resp = await fetch('https://dummyjson.com/products');
      const data = await resp.json() ;
      setProductData(data);
    } catch (error) {
      console.log('An error occurred while fetching data.');
    }
  }

  useEffect(()=>{
    fetchData();
  },[]);

  return (
    <div>
      <Products products={productsData} />
      <br></br>
      {productsData?.products?.length >0 && productsData?.products?.map((product, index) =>{
        return (
          <>
          <h1 key={index}>{product.category}</h1>
          <h1>Description :{product.description}</h1>
          </>
        )
      })}
    </div>
  )
}

export default List;