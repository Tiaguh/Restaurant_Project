import React, { useState, useEffect } from 'react';
import './Requests.css';

import Drawer from '../../components/Drawer/Drawer.jsx';
import Title from '../../components/Title/Title';
import RequestCard from '../../components/RequestCard/RequestCard.jsx';

import api from '../../api.js';
import { toast } from 'react-toastify';

export default function Requests() {
  const [requests, setRequests] = useState([]);

  const fetchAllRequests = async () => {
    try {
      const res = await api.get("/requests/get-all-requests");
      setRequests(res.data.requests);
    } catch (error) {
      console.error("Erro ao buscar os pedidos:", error);
    }
  };

  useEffect(() => {
    fetchAllRequests();
  }, []);

  const handleFinishRequest = async (id_request) => {
    try {
      await api.put(`/requests/finalize-request/${id_request}`);
      fetchAllRequests();
      toast.success('Pedido finalizado com sucesso!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } catch (err) {
      console.log(err);
      toast.error('Erro ao finalizar o pedido', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

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
              handleFinishRequest={handleFinishRequest}
            />
          ))
        ) : (
          <p>Nenhum pedido pendente.</p>
        )}
      </div>

    </div>
  );
}