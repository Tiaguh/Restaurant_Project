import React from 'react';
import "./CardMenu.css";

export default function CardMenu(props) {
  return (
    <div className="card-menu" key={props.id}>

      <div className="card-menu-img">
        {props.image_url && <img src={props.image_url} alt={props.name} />}
      </div>

      <div className="card-menu-description">
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <h3>R$ {props.price}</h3>
      </div>

      <div className="card-menu-button">
        <button onClick={props.onAddToCart}>Comprar</button>
      </div>

    </div>
  );
}
