import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

// import chef from './pictures/chef-picture.png'

import './menu.css'

export default function Menu() {
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchAllItems = async () => {
      try {
        const res = await axios.get("http://localhost:3333/select-itens")
        setItems(res.data)
      } catch (error) {
        console.log(error);
      }
    }
    fetchAllItems()
  }, [])

  return (
    <div className='menu-container'>
      <div className="title">
        <h1>Menu</h1>
      </div>

      <div className="main-menu">
        {items.map(item => (
          <div className="main-menu" key={item.id_item}>
            {item.item_image && <img src={item.item_image} alt=""/>}
            <h2>{item.item_name}</h2>
            <p>{item.item_description}</p>
            <h3>{item.item_price}</h3>
          </div>
        ))}
      </div>

    </div>
  )
}