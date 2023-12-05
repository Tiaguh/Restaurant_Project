import React, { useState, useEffect } from 'react';
import './Menu.css';

import CardMenu from '../../components/CardMenu/CardMenu.jsx'
import Drawer from '../../components/Drawer/Drawer.jsx'
import Title from '../../components/Title/Title';

import api from '../../api.js'

export default function Menu() {
  const [items, setItems] = useState([]);

  console.log(items);

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

  // const headerHeight = items.length < 4 ? "100vh" : "100%";

  return (
    <div className='menu-container-all'>

      <Drawer />

      <div className="menu-container">

        <Title title="Menu" />

        <div className="cards-container">

        {items.map(item => (
          <CardMenu
            key={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
          />
        ))}

        </div>

      </div>

    </div>
  );
}
