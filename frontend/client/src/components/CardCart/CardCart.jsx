import React from "react";
import "./CardCart.css";

export default function CardCart(props) {
    const totalPrice = props.quantity * props.price;

    return (
        <div className="cart-items" key={props.id}>
            {/* {props.image && <img src={props.image} alt="snack" />} */}
            <div className="cart-items-description">
                <h2>{props.name}</h2>
                <p>{props.description}</p>
            </div>

            <div className="qntd">

                <button
                    className="qntd-button"
                    onClick={props.onIncreaseCartItem}
                >
                    +
                </button>

                <h1>{props.quantity}</h1>

                <button
                    className="qntd-button"
                    onClick={props.onDecreaseCartItem}
                >
                    -
                </button>
            </div>

            <div className="price-container">
                <h3>R$ {props.quantity * props.price}</h3>
            </div>

            <div className="remove-button-container" >
                <button
                    className="remove-button"
                    onClick={props.onHandleDelete}
                >
                    Remover
                </button>
            </div>

        </div >
    )
}