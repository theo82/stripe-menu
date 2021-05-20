import React, { useState } from 'react'
import items from './data'
import Categories from './components/Categories'
import Menu from './components/Menu'

// const allCategories = items.map((item) => item.category)
// console.log(allCategories)
// That will print all categories. But we need unique values
// const allCategories = new Set(items.map((item) => item.category))
// console.log(allCategories)
// Set(3) {"breakfast", "lunch", "shakes"}

// We need an array of categories. Not an object.
const allCategories = ['all', ...new Set(items.map((item) => item.category))]
console.log(allCategories)

function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items)
      return
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}

export default App
