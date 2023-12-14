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
    const groupedItems = items.requests.reduce((acc, item) => {
      const user = acc.find((user) => user.user_name === item.user_name);

      if (user) {
        user.items.push({
          item_name: item.item_requests.split(' ')[0],
          quantity: parseInt(item.item_requests.split(' ')[1]) || 1, // Extrai a quantidade ou assume 1 se não houver
        });
      } else {
        acc.push({
          user_name: item.user_name,
          items: [
            {
              item_name: item.item_requests.split(' ')[0],
              quantity: parseInt(item.item_requests.split(' ')[1]) || 1,
            },
          ],
        });
      }

      return acc;
    }, []);

    setUserItems(groupedItems);
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
