import React from 'react'
import { useState, useEffect } from 'react'
import './Cart.css'

import { useUser } from '../../context/UserContext'

import api from '../../api'
import { toast } from 'react-toastify';

export default function Cart() {
  const { userData } = useUser();
  const [items, setItems] = useState([]);

  console.log(items);

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

  async function handleDelete(userId, itemId) {
    try {
      const response = await api.delete(`/cart/remove-from-cart/${userId}/${itemId}`);
      console.log(response);

      if (response.status === 200) {
        toast.success('Item removido do carrinho!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }

      const updatedItems = items.filter(item => item.item_id !== itemId);
      setItems(updatedItems);
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
          <div className="cart-items" key={item.item_id}>
            {item.item_image && <img src={item.item_image} alt="snack" />}
            <div className="cart-items-description">
              <h2>{item.item_name}</h2>
              <p>{item.item_description}</p>
            </div>

            <div className="qntd">
              <button className='qntd-button'>+</button>
              <h1>{item.quantity}</h1>
              <button className='qntd-button'>-</button>
            </div>

            <h3>R$ {item.item_price}</h3>

            <button
              className='remove-button'
              onClick={() => handleDelete(userData.id, item.item_id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
