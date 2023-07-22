import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Title from '../../components/Title/Title';
import axios from 'axios';
import './Menu.css';

export default function Menu() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchAllItems = async () => {
      try {
        const res = await axios.get("http://localhost:3333/management-item/get-items");
        setItems(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllItems();
  }, []);

  const headerHeight = items.length < 4 ? "100vh" : "100%";

  console.log(headerHeight);

  return (
    <div className='menu-container-all'>

      <Header height={headerHeight} />

      <div className="menu-container">

        <Title title="Menu" />

        <div className="cards-container">

          {items.map(item => (
            <div className="cards" key={item.id_item}>
              {item.item_image && <img src={item.item_image} alt="snack" />}
              <h2>{item.item_name}</h2>
              <p>{item.item_description}</p>
              <h3>R$ {item.item_price}</h3>
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}
