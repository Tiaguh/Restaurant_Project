import React from 'react'
import { useState, useEffect } from 'react'
import Header from '../Header/header'
import Title from '../Title/title'
import axios from 'axios'

// import chef from './pictures/chef-picture.png'

import './menu.css'

export default function Menu() {
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchAllItems = async () => {
      try {
        const res = await axios.get("https://taupe-ladybug-gear.cyclic.app/management-item/get-items")
        setItems(res.data)
      } catch (error) {
        console.log(error);
      }
    }
    fetchAllItems()
  }, [])

  return (
    <div className='menu-container-all'>
      <Header />

      <Title title="Menu" />

      <div className="menu-container">

        {items.map(item => (
          <div className="cards" key={item.id_item}>
            {item.item_image && <img src={item.item_image} alt="snack" />}
            <h2>{item.item_name}</h2>
            <p>{item.item_description}</p>
            <h3>R$ {item.item_price}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}