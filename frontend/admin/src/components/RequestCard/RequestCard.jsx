import React from 'react';
import "./RequestCard.css";

import { MdDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

export default function RequestCard({ user, onDelete, onFinalize }) {
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

        <button className="delete" onClick={onDelete}>
          <MdDelete color="#FFF" size={28} />
          Delete
        </button>

      </div>

    </div>
  );
}