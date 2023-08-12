import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '../../context/UserContext'

import api from '../../api'
import './Menu.css'

import Cart from './pictures/cart.png'

export default function Menu() {
  const { userData } = useUser();

  console.log(userData);

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

  const handleBuy = async (item_id, e) => {
    e.preventDefault();

    alert("Item adicionado ao carrinho")
    
    try {
      await api.post(`/cart/add-item-cart/${userData.id}/${item_id}`);
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
            {userData ? userData.name : ' '}
          </h2>

          <Link className='cart' to="/cart">
            <img src={Cart} alt="" />
          </Link>

        </div>

      </div>

      <div className="card">

        {items.map(item => (
          <div className="cards" key={item.item_id}>
            {item.item_image && <img src={item.item_image} alt="snack" />}
            <h2>{item.item_name}</h2>
            <p>{item.item_description}</p>
            <h3>R$ {item.item_price}</h3>
            <button onClick={(e) => handleBuy(item.item_id, e)}>Buy</button>
          </div>
        ))}
      </div>

    </div>
  )
}