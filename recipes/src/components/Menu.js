import React from 'react'
const Menu = ({ img, title, author }) => {
  return (
    <div className='menu'>
      <img style={{ widht: 450, height: 130 }} src={img} alt='' />
      <h1>{title}</h1>
      <h3>{author}</h3>
    </div>
  )
}

export default Menu
