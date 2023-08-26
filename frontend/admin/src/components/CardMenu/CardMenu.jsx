import React from 'react';
import "./CardMenu.css";

export default function ItemMenu(props) {
  return (
    <div className="card" key={props.id}>
      {props.image && <img src={props.image} alt="snack" />}
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <h3>R$ {props.price}</h3>
    </div>
  )
}