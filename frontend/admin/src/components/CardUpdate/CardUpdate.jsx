import React from 'react';
import { Link } from 'react-router-dom';

import './CardUpdate.css';

export default function CardUpdate({ handleUpdate, ...props }) {
  return (
    <div key={props.id} className="card">

      <div className="card-update-info">
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <h3>R$ {props.price}</h3>
      </div>

      <div className="card-update-button">
        <button onClick={() => handleUpdate(props.id)}>
          <Link className="link" to={`/update-item/${props.id}`}>
            Update
          </Link>
        </button>
        <button onClick={props.onDelete}>Delete</button>
      </div>
    </div>
  );
}