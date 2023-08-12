import React from 'react'
import { useState, useEffect } from 'react'
import './Cart.css'

import { useUser } from '../../context/UserContext'

import api from '../../api'

export default function Cart() {
  const { userData } = useUser();
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (userData && userData.id) {
      const fetchAllItems = async () => {
        try {
          const res = await api.get(`/cart/get-items-cart/${userData.id}`);
          setItems(res.data.cartItems);
        } catch (error) {
          console.log(error);
        }
      };

      fetchAllItems();
    }
  }, [userData]);

  return (
    <div className='cart-container'>
      <div className="cart-title-container">
        <div className="cart-title">
          <h1>Cart</h1>
        </div>
      </div>

      <div className="cart-item">
        {items.map(item => (
          <div className="cart-items" key={item.item_id}>
            {item.item_image && <img src={item.item_image} alt="snack" />}
            <div className="cart-items-description">
              <h2>{item.item_name}</h2>
              <p>{item.item_description}</p>
            </div>
            <h3>R$ {item.item_price}</h3>
            <button>Remove</button>
          </div>
        ))}
      </div>
    </div>
  )
}
