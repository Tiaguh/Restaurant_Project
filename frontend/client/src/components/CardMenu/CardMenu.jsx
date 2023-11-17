import React from 'react';
import "./CardMenu.css";

export default function ItemMenu(props) {
  return (
    <div className="card" key={props.id}>
      {/* {props.item_image && <img src={props.item_image} alt="snack" />} */}
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <h3>R$ {props.price}</h3>
      <button onClick={props.onAddToCart}>Comprar</button>
    </div>
  )
}
