import React from 'react'
import Header from '../Header/header'
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
      <Header />
      
      <div className="card">
        <div className="title">
          <h1>Menu</h1>
        </div>
        {items.map(item => (
          <div className="cards" key={item.id_item}>
            {item.item_image && <img src={item.item_image} alt="snack" />}
            <h2>{item.item_name}</h2>
            <p>{item.item_description}</p>
            <h3>R$ {item.item_price}</h3>
            <button>Buy</button>
          </div>
        ))}
      </div>
    </div>
  )
}