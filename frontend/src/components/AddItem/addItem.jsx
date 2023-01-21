import React from 'react'
import Menu from './img/menu.png'
import './addItem.css'

function addItem() {
  return (
    <div className='add-item-container'>
      <div className="add-item-title">
        <h1>Add a New Item To The Menu</h1>
      </div>

      <div className="add-item-main">
        <div className="add-item-main-img">
          <img src={Menu} alt='Menu' />
        </div>

        <form>
          <input type="text" placeholder='Provide Item Name' />
          <input type="text" placeholder='Provide Item Description' />
          <input type="number" placeholder='Inform Item Price' />
          <button>Add</button>
        </form>
      </div>

    </div>
  )
}

export default addItem