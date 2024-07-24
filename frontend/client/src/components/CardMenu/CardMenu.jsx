import React from 'react';
import "./CardMenu.css";

export default function CardMenu(props) {
  return (
    <div className="card" key={props.id}>
      {props.image_url && <img src={props.image_url} alt={props.name} />}
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <h3>R$ {props.price}</h3>
      <button onClick={props.onAddToCart}>Comprar</button>
    </div>
  );
}
