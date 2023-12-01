import React, { useState, useEffect } from 'react';
import api from '../../api.js';
import Drawer from '../../components/Drawer/Drawer.jsx';
import Title from '../../components/Title/Title';
import './Requests.css';

export default function Requests() {
  const [items, setItems] = useState({ requests: [] });
  const [userItems, setUserItems] = useState([]);

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

  useEffect(() => {
    const groupedItems = items.requests.reduce((acc, item) => {
      const userIndex = acc.findIndex(user => user.user_name === item.user_name);

      if (userIndex !== -1) {
        // Se o usuário já existe, adiciona o item à lista existente
        acc[userIndex].items.push({
          itemName: item.name,
          description: item.description,
          quantity: item.quantity,
        });
      } else {
        // Se o usuário não existe, cria um novo objeto de usuário com um array contendo o item
        acc.push({
          user_name: item.user_name,
          items: [{
            itemName: item.name,
            description: item.description,
            quantity: item.quantity,
          }],
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

        {userItems.map(user => (
          <div key={user.user_name} className="requestsList-cards">
            <h2>{user.user_name}</h2>
            {user.items.map((item, index) => (
              <div key={index}>
                <div className="request-name">
                  <p>{item.itemName}</p>
                </div>
                <div className="request-describe">
                  <h3>Item Request:</h3>
                  <p>{item.description}</p>
                  <p>Quantidade: {item.quantity || 'N/A'}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
