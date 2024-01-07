import React from 'react';
import './HistoricCard.css';

import { MdDelete, MdEdit } from "react-icons/md";

export default function HistoricCard(props) {
  const parseItems = (itemsString) => {
    return itemsString.split(', ').map((item) => {
      const [itemName, quantity] = item.split(' (');
      return { itemName, quantity: parseInt(quantity.replace(')', ''), 10) };
    });
  };

  const itemsArray = parseItems(props.items);

  return (
    <div key={props.id_request} className="historic-card">
      <h3>Items Requests:</h3>

      {itemsArray.map((item, index) => (
        <div key={index} className="requests-info">
          <h4>{item.itemName}</h4>
          <h5>Quantidade: {item.quantity || 'N/A'}</h5>
        </div>
      ))}

      <div className="historic-button-container">
        <button className="apply">
          <MdEdit color="#FFF" size={28} />
          Edit
        </button>

        <button className="delete">
          <MdDelete color="#FFF" size={28} />
          Delete
        </button>
      </div>
    </div>
  );
}
