import React from 'react';
import './HistoricCard.css';
import { FaCheck } from 'react-icons/fa';

export default function HistoricCard(props) {
  const parseItems = (itemsString) => {
    return itemsString.split(', ').map((item) => {
      const [itemName, quantity] = item.split(' (');
      return { itemName, quantity: parseInt(quantity.replace(')', ''), 10) };
    });
  };

  const itemsArray = parseItems(props.items); // Corrigir aqui

  return (
    <div key={props.id_request} className="request-card">
      <h1>{props.id_request}</h1>
      <h3>Items Requests:</h3>

      {itemsArray.map((item, index) => (
        <div key={index} className="requests-info">
          <h4>{item.itemName}</h4>
          <h5>Quantidade: {item.quantity || 'N/A'}</h5>
        </div>
      ))}

      <div className="request-button-container">
        <button className="apply">
          <FaCheck color="#FFF" size={22} />
          Done
        </button>
      </div>
    </div>
  );
}
