import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { menu } from './shared/menu'
import Menu from './components/Menu'
function MenuList() {
  return (
    <div className='menulist'>
      {menu.map((m) => {
        return <Menu key={m.id} {...m} />
      })}
    </div>
  )
}

ReactDOM.render(<MenuList />, document.getElementById('root'))
