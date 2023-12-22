import React from 'react';
import "./RequestCard.css";

import { FaCheck } from "react-icons/fa";

export default function RequestCard({ request }) {
  return (
    <div className="request-card">
      
      <h1>{request.id_request}</h1>
      <h2>{request.user_name}</h2>

      <h3>Items Requests:</h3>
      
      {request.items && (
        <div className="requests-info">
          <h2>{request.items}</h2>
        </div>
      )}

      <div className="request-button-container">
        <button className="apply">
          <FaCheck color="#FFF" size={22} />
          Done
        </button>
      </div>
    </div>
  );
}
