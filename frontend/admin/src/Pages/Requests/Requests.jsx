import React, { useState, useEffect } from 'react';
import './Requests.css';

import Drawer from '../../components/Drawer/Drawer.jsx';
import Title from '../../components/Title/Title';
import RequestCard from '../../components/RequestCard/RequestCard.jsx';

import api from '../../api.js';

export default function Requests() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchAllRequests = async () => {
      try {
        const res = await api.get("/requests/get-all-requests");
        setRequests(res.data.requests);
      } catch (error) {
        console.error("Erro ao buscar os pedidos:", error);
      }
    };

    fetchAllRequests();
  }, []);

  return (
    <div className='requests-all-container'>

      <Drawer />

      <div className="requests-container">

        <Title title="Requests" />
        
        {requests.length > 0 ? (
          requests.map((request, index) => (
            <RequestCard
              key={index}
              request={request}
            />
          ))
        ) : (
          <p>Nenhum pedido pendente.</p>
        )}
      </div>
      
    </div>
  );
}
