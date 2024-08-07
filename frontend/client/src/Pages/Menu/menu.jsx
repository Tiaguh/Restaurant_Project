import React, { useState, useEffect } from 'react';
import './Menu.css';

import { Link } from 'react-router-dom';

import CardMenu from '../../components/CardMenu/CardMenu.jsx';
import Drawer from '../../components/Drawer/Drawer';
import Cart from './pictures/cart.png';

import api from '../../api';

import { useUser } from '../../context/UserContext';
import { toast } from 'react-toastify';

export default function Menu() {
  const { userData } = useUser();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchAllItems = async () => {
      try {
        const res = await api.get("/management-item/get-items");
        setItems(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllItems();
  }, []);

  const addItemToCart = async (item_id, e) => {
    e.preventDefault();

    try {
      const response = await api.post(`/cart/add-item-cart/${userData.id}/${item_id}`);

      if (response.status === 200) {
        toast.success('Adicionado ao carrinho com sucesso!', {
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
    } catch (error) {
      if (error.response && error.response.status === 409) {
        toast.warn('Este item já está no seu carrinho.', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
      } else {
        console.log(error);
      }
    }
  };

  return (
    <div className="menu-container">

      <header>

        <Drawer />

        <h1>Cardápio</h1>

        <div>

          <h2>{userData ? userData.name : ' '}</h2>

          <Link className="cart" to="/cart">
            <img src={Cart} alt="" />
          </Link>

        </div>

      </header>

      <main className="cards">
        {items.map((item) => (
          <CardMenu
            key={item.id}
            id={item.id}
            name={item.name}
            image_url={item.image_url}
            description={item.description}
            price={item.price}
            onAddToCart={(e) => addItemToCart(item.id, e)}
          />
        ))}
      </main>

    </div>
  );
}
