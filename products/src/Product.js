import React from 'react'

const Product = ({ id, brand, image, richDescription, price }) => {
  return (
    <article className='single-product'>
      <img src={image} alt={brand} />
      <footer>
        <div className='product-info'>
          <h4 className='product-price'>${price}</h4>
          <p>{richDescription}</p>
        </div>
      </footer>
    </article>
  )
}

export default Product
