import React from 'react';
import "./HistoricCard.css";

import { FaCheck } from "react-icons/fa";

export default function HistoricCard() {
  return (
    <div className="request-card">

      <h1>id_request</h1>
      <h2>user_name</h2>

      <h3>Items Requests:</h3>

      <div className="requests-info">
        <h4></h4>
        <h5>Quantidade:</h5>
      </div>

      <div className="request-button-container">
        <button className="apply">
          <FaCheck color="#FFF" size={22} />
          Done
        </button>
      </div>
    </div>
  );
}
