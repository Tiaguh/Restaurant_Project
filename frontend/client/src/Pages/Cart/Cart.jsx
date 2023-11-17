import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import './Cart.css';

import { useUser } from '../../context/UserContext';

import { toast } from 'react-toastify';

import CardCart from '../../components/CardCart/CardCart';
import api from '../../api';

export default function Cart() {
  const { userData } = useUser();
  const [items, setItems] = useState([]);

  console.log(items);

  const navigate = useNavigate();

  useEffect(() => {
    fetchItems();
  }, []);

  async function fetchItems() {
    try {
      if (userData?.id) {
        const res = await api.get(`/cart/get-items-cart/${userData.id}`);
        setItems(res.data.cartItems);
      }
    } catch (error) {
      console.log(error);
    }
  };

  async function newRequest(userId) {
    try {
      const response = await api.post(`/requests/new-request/${userId}`)
      console.log(response);

      toast.success('Pedido realizado com sucesso!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });

      if (response.status === 200) {
        api.delete(`/cart/clear-cart/${userId}`)
        navigate("/menu")
      }
    } catch (error) {
      console.log(error);
    }
  }

  const totalPurchaseValue = items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div className="cart-container">

      <div className="cart-title-container">
        <h1>Carrinho</h1>
      </div>

      <div className="cart-item">
        {items.map(item => (
          <CardCart
            key={item.id}
            itemId={item.id}
            userId={userData.id}
            name={item.name}
            description={item.description}
            price={item.price}
            quantity={item.quantity}
            fetchItems={fetchItems}
          />
        ))}
      </div>

      <div className="purchase">
        <div>

          <div className="purchase-value">
            <h1>Total de itens:</h1>
            <h2>{items.length}</h2>
          </div>

          <div className="purchase-value">
            <h1>Valor da compra:</h1>
            <h3>R$ {totalPurchaseValue}</h3>
          </div>

        </div>
        <button onClick={() => newRequest(userData.id)}>Finalizar o pedido</button>
      </div>
      
    </div>
  );
}
