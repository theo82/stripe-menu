import React from 'react'
import Product from './Product'
const Products = ({ products }) => {
  return (
    <section>
      <div className='title'>
        <h2>our products</h2>
        <div className='underline'></div>
      </div>
      <div>
        {products.map((product) => {
          return <Product key={product.id} {...product} />
        })}
      </div>
    </section>
  )
}

export default Products
