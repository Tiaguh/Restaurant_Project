import React from 'react';
import "./CardMenu.css";

export default function ItemMenu(props) {
  return (
    <div className="card" key={props.id}>
      {props.item_image && <img src={props.item_image} alt="snack" />}
      <h2>{props.item_name}</h2>
      <p>{props.item_description}</p>
      <h3>R$ {props.item_price}</h3>
      <button onClick={props.onAddToCart}>Buy</button>
    </div>
  )
}
