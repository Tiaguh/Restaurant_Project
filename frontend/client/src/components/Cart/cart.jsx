import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

// import chef from './pictures/chef-picture.png'

import './cart.css'

export default function Cart() {
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

  const handleDelete = async (item_id) => {
    try {
        await axios.delete("http://localhost:3333/delete-item/" + item_id)
        window.location.reload()
    } catch (error) {
        console.log(error);
    }
}

  return (
    <div className='cart-container'>
      <div className="cart-title-container">
        <div className="cart-title">
          <h1>Cart</h1>
        </div>
      </div>

      <div className="cart-item">
        {items.map(item => (
          <div className="cart-items" key={item.id_item}>
            {item.item_image && <img src={item.item_image} alt="snack" />}
            <h2>{item.item_name}</h2>
            <p>{item.item_description}</p>
            <h3>R$ {item.item_price}</h3>
            <button onClick={()=>handleDelete(item.id_item)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  )
}