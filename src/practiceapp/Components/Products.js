import React from 'react'

const Products = (products) => {

  console.log(products?.products?.products);

  return (
    <>
    {products?.products?.products?.length>0 && products?.products?.products?.map((product, index) => {
      return <li key={index}>{product.brand}</li>
    })}
    </>
  )
}

export default Products