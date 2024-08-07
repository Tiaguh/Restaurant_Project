import React, { useState, useEffect } from 'react';

import api from '../../api';
import { useUser } from '../../context/UserContext';
import { toast } from 'react-toastify';

import Drawer from '../../components/Drawer/Drawer';

import HistoricCard from '../../components/HistoricCard/HistoricCard'

import './Historic.css';

export default function Historic() {
  const { userData } = useUser();
  const [items, setItems] = useState([]);

  console.log(items);

  useEffect(() => {
    const fetchAllItems = async () => {
      try {
        const res = await api.get(`/requests/get-user-requests/${userData.id}`);
        setItems(res.data.requests);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllItems();
  }, []);

  return (
    <div className="historic-container">

      <header>

        <Drawer />

        <h1>Histórico de Pedidos</h1>

      </header>

      {items.length > 0 ? (
        <main>
          {items.map((item) => (
            <HistoricCard key={item.id_request} items={item.items} />
          ))}
        </main>
      ) : (
        <div>
          <h1>Nenhum pedido encontrado!</h1>
        </div>
      )}

    </div>
  );
}
