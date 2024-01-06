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

  return (
    <div className="menu-container">

      <div className="menu-title">

        <Drawer />

        <h1>Histórico de Pedidos</h1>

      </div>

      <div>
        <HistoricCard />
      </div>
    </div>
  );
}
