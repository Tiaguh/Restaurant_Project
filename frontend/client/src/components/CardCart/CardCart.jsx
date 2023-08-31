import React, { useState } from "react";
import "./CardCart.css";

import api from "../../api";

export default function CardCart(props) {
    const [quantity, setQuantity] = useState(1)

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        } else {
            const confirmation = window.confirm(
                'Tem certeza que deseja remover este item do carrinho?'
            );

            if (confirmation) {
                props.onHandleDelete();
            }
        }
    };

    return (
        <div className="cart-items" key={props.id}>
            {props.image && <img src={props.image} alt="snack" />}
            <div className="cart-items-description">
                <h2>{props.name}</h2>
                <p>{props.description}</p>
            </div>

            <div className="qntd">

                <button
                    className="qntd-button"
                    onClick={handleIncrease}
                >
                    +
                </button>

                <h1>{quantity}</h1>

                <button
                    className="qntd-button"
                    onClick={handleDecrease}
                >
                    -
                </button>
            </div>

            <div className="price-container">
                <h3>{`R$ ${(quantity * parseFloat(props.price)).toFixed(2)}`}</h3>
            </div>

            <div className="remove-button-container" >
                <button
                    className="remove-button"
                    onClick={props.onHandleDelete}
                >
                    Remover
                </button>
            </div>

        </div>
    )
}