import React, { useState, useEffect } from 'react'
import Products from './Products'
function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [products, setProducts] = useState([])

  const url = 'http://localhost:3000/api/v1/products'

  const fetchProducts = async () => {
    setIsLoading(false)

    try {
      const response = await fetch(url)
      const products = await response.json()
      setProducts(products)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  if (isLoading) {
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    )
  }

  return (
    <main>
      <Products products={products} />
    </main>
  )
}

export default App
