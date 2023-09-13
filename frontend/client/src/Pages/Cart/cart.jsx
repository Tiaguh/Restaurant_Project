import React, { useState, useEffect } from 'react';
import { useUser } from '../../context/UserContext';
import { toast } from 'react-toastify';
import CardCart from '../../components/CardCart/CardCart';
import api from '../../api';
import './Cart.css';

export default function Cart() {
  const { userData } = useUser();
  const [items, setItems] = useState([]);

  console.log(items);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        if (userData?.id) {
          const res = await api.get(`/cart/get-items-cart/${userData.id}`);
          setItems(res.data.cartItems);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchItems();
  }, [userData]);

  const handleDelete = async (userId, itemId) => {
    try {
      const response = await api.delete(`/cart/remove-from-cart/${userId}/${itemId}`);

      if (response.status === 200) {
        toast.success('Item removido do carrinho!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
      }

      setItems(items.filter(item => item.id !== itemId));
    } catch (error) {
      console.log(error);
    }
  };

  async function increaseCartItem(userId, itemId) {
    try {
      const response = await api.put(`/cart/increase-cart-item/${userId}/${itemId}`);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  async function decreaseCartItem(userId, itemId) {
    try {
      const currentItem = items.find(item => item.id === itemId);

      if (currentItem.quantity > 1) {
        const response = await api.put(`/cart/decrease-cart-item/${userId}/${itemId}`);
        console.log(response);
      } else {
        const confirmation = window.confirm(
          'Tem certeza que deseja remover este item do carrinho?'
        );

        if (confirmation) {
          handleDelete(userId, itemId);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

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

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="cart-container">

      <div className="cart-title-container">
        <h1>Carrinho</h1>
      </div>

      <div className="cart-item">
        {items.map(item => (
          <CardCart
            key={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            quantity={item.quantity}
            onHandleDelete={() => handleDelete(userData.id, item.id)}
            onIncreaseCartItem={() => increaseCartItem(userData.id, item.id)}
            onDecreaseCartItem={() => decreaseCartItem(userData.id, item.id)}
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
            <h3>R$ </h3>
          </div>
        </div>
        <button onClick={() => newRequest(userData.id)}>Finalizar o pedido</button>
      </div>
    </div>
  );
}