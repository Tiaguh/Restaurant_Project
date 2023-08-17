import React, { useState, useEffect } from 'react'
import { useUser } from '../../context/UserContext'

import CardCart from '../../components/CardCart/CardCart'
import api from '../../api'

import './Cart.css'
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

  async function increaseCartItem(userId, itemId) {
    try {
      const response = await api.put(`/cart/increase-cart-item/${userId}/${itemId}`);
      console.log(response);

      const updatedItems = items.map(item => {
        if (item.item_id === itemId) {
          return {
            ...item,
            quantity: item.quantity + 1
          };
        }
        return item;
      });
      setItems(updatedItems);
    } catch (error) {
      console.log(error);
    }
  }

  async function decreaseCartItem(userId, itemId) {
    try {
      const currentItem = items.find(item => item.item_id === itemId);

      if (currentItem.quantity > 1) {
        const response = await api.put(`/cart/decrease-cart-item/${userId}/${itemId}`);
        console.log(response);

        const updatedItems = items.map(item => {
          if (item.item_id === itemId) {
            return {
              ...item,
              quantity: item.quantity - 1
            };
          }
          return item;
        });
        setItems(updatedItems);
      } else {
        const confirmation = window.confirm(
          'Tem certeza que deseja remover este item do carrinho?'
        );

        if (confirmation) {
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
        }
      }
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
          <CardCart
            key={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            onIncreaseCartItem={() => increaseCartItem(userData.id, item.id)}
            quantity={item.quantity}
            onDecreaseCartItem={() => decreaseCartItem(userData.id, item.id)}
            onHandleDelete={() => handleDelete(userData.id, item.id)}
          />
        ))}
      </div>
    </div>
  )
}
