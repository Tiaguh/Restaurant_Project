import React, { useState, useEffect } from 'react';

import api from '../../api.js';

import Drawer from '../../components/Drawer/Drawer.jsx'
import Title from '../../components/Title/Title';

import './Requests.css';

export default function Requests() {
  const [items, setItems] = useState({ requests: [] });

  console.log(items);

  useEffect(() => {
    const fetchAllItems = async () => {
      try {
        const res = await api.get("/requests/get-all-requests");
        setItems(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllItems();
  }, []);

  // const headerHeight = items.requests && items.requests.length < 4 ? "100vh" : "100%";

  return (
    <div className='requests-all-container'>

      <Drawer />

      <div className="requests-container">

        <Title title="Requests" />

        {items.requests.map(item => (

          <div className="requestsList-cards" key={item.id}>

            <div className="request-id">
              <h1>{item.id}</h1>
            </div>

            <div className="request-name">
              <p>{item.name}</p>
            </div>

            <div className="request-describe">
              <h3>Item Request:</h3>
              <p>{item.description}</p>

              <p>Quantidade: {item.quantity}</p>

              {item.date && (
                <p>{new Date(item.date).toISOString().split('T')[0]}</p>
              )}

              <p>{item.hour}</p>
            </div>


          </div>
        ))}

      </div>
    </div>
  );
}
