import React from 'react';
import "./RequestCard.css";

import { FaCheck } from "react-icons/fa";

export default function RequestCard({ user, onFinalize }) {
  return (
    <div className="request-card">
      <h1>{user.user_name}</h1>
      <h2>Items Requests:</h2>
      {user.items.map((item, index) => (
        <div key={index} className="requests-info">
          <h2>{item.item_name}</h2>
          <h3>Quantidade: {item.quantity || 'N/A'}</h3>
        </div>
      ))}

      <div className="request-button-container">
        
        <button className="apply" onClick={onFinalize}>
          <FaCheck color="#FFF" size={22} />
          Done
        </button>

      </div>

    </div>
  );
}