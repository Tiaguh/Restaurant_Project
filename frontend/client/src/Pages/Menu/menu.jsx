import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '../../context/UserContext'

import api from '../../api'
import './Menu.css'

import Cart from './pictures/cart.png'

export default function Menu() {
  const { user } = useUser();

  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchAllItems = async () => {
      try {
        const res = await api.get("/management-item/get-items")
        setItems(res.data)
      } catch (error) {
        console.log(error);
      }
    }
    fetchAllItems()
  }, [])

  const handleBuy = async (item_id) => {
    try {
      await api.post("add-item-cart/" + item_id)
      window.location.reload()
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='menu-container'>

      <div className="menu-title">

        <h1>Menu</h1>

        <div className="menu-icon">

          <h2>
           {user}
          </h2>

          <Link className='cart' to="/cart">
            <img src={Cart} alt="" />
          </Link>

        </div>

      </div>

      <div className="card">
        {items.map(item => (
          <div className="cards" key={item.id_item}>
            {item.item_image && <img src={item.item_image} alt="snack" />}
            <h2>{item.item_name}</h2>
            <p>{item.item_description}</p>
            <h3>R$ {item.item_price}</h3>
            <button onClick={() => handleBuy(item.id_item)}>Buy</button>
          </div>
        ))}
      </div>
    </div>
  )
}