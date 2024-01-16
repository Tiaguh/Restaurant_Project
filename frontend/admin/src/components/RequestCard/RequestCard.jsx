import React from 'react';
import "./RequestCard.css";

import { FaCheck } from "react-icons/fa";

export default function RequestCard({ request, handleFinishRequest }) {
  const parseItems = (itemsString) => {
    return itemsString.split(', ').map(item => {
      const [itemName, quantity] = item.split(' (');
      return { itemName, quantity: parseInt(quantity.replace(')', ''), 10) };
    });
  };

  const itemsArray = parseItems(request.items);

  return (
    <div className="request-card">

      <h1>{request.id_request}</h1>
      <h2>{request.user_name}</h2>

      <h3>Items Requests:</h3>

      {itemsArray.map((item, index) => (
        <div key={index} className="requests-info">
          <h4>{item.itemName}</h4>
          <h5>Quantidade: {item.quantity || 'N/A'}</h5>
        </div>
      ))}

      <div className="request-button-container">
        <button
          className="apply"
          onClick={() => handleFinishRequest(request.id_request)}
        >
          <FaCheck color="#FFF" size={22} />
          Done
        </button>
      </div>
    </div>
  );
}