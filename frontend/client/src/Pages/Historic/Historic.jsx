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
    <div className="menu-container">

      <div className="menu-title">

        <Drawer />

        <h1>Histórico de Pedidos</h1>

      </div>

      <div>
        {items.map((item) => (
          <HistoricCard
            key={item.id_request}
            id_request={item.id_request}
            items={item.items}
          />
        ))}
      </div>
    </div>
  );
}
