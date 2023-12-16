import React, { useState, useEffect } from 'react';
import './Requests.css';

import Drawer from '../../components/Drawer/Drawer.jsx';
import Title from '../../components/Title/Title';
import RequestCard from '../../components/RequestCard/RequestCard.jsx'

import api from '../../api.js';

export default function Requests() {
  const [items, setItems] = useState({ requests: [] });
  const [userItems, setUserItems] = useState([]);

  console.log(items);

  useEffect(() => {
    const fetchAllItems = async () => {
      try {
        const res = await api.get("/requests/get-all-requests");
        setItems(res.data);
      } catch (error) {
        console.error("Erro ao buscar os pedidos:", error);
      }
    };

    fetchAllItems();
  }, []);

  useEffect(() => {
    const groupedItems = {};

    items.requests.forEach((item) => {
      const { user_name, item_requests } = item;
      const match = item_requests.match(/(.*) \((\d+)\)/);

      if (match) {
        const itemName = match[1];
        const quantity = parseInt(match[2]) || 1;

        if (groupedItems[user_name]) {
          groupedItems[user_name].items.push({
            item_name: itemName,
            quantity: quantity,
          });
        } else {
          groupedItems[user_name] = {
            user_name: user_name,
            items: [
              {
                item_name: itemName,
                quantity: quantity,
              },
            ],
          };
        }
      } else {
        console.log(`Erro ao processar: ${item_requests}`);
      }
    });

    setUserItems(Object.values(groupedItems));
  }, [items.requests]);

  return (
    <div className='requests-all-container'>
      <Drawer />
      <div className="requests-container">
        <Title title="Requests" />

        {userItems.length > 0 ? (
          userItems.map((user, userIndex) => (
            <RequestCard key={userIndex} user={user} />
          ))
        ) : (
          <p>Nenhum pedido encontrado.</p>
        )}
      </div>
    </div>
  );
}
