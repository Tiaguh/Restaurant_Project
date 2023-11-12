import React from "react";
import { toast } from 'react-toastify';
import api from '../../api';
import './CardCart.css';

export default function CardCart(props) {
    const totalPrice = props.quantity * props.price;

    const handleDelete = async () => {
        try {
            const response = await api.delete(`/cart/remove-from-cart/${props.userId}/${props.itemId}`);

            if (response.status === 200) {
                toast.success('Item removido do carrinho!', {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'dark',
                });

                props.fetchItems();

            }
        } catch (error) {
            console.log(error);
        }
    };

    const increaseCartItem = async () => {
        try {
            const response = await api.put(`/cart/increase-cart-item/${props.userId}/${props.itemId}`);
            console.log(response);

            props.fetchItems();

        } catch (error) {
            console.log(error);
        }
    };

    const decreaseCartItem = async () => {
        try {
            const currentItem = props.quantity;

            if (currentItem > 1) {
                const response = await api.put(`/cart/decrease-cart-item/${props.userId}/${props.itemId}`);
                console.log(response);

                props.fetchItems();

            } else {
                const confirmation = window.confirm('Tem certeza que deseja remover este item do carrinho?');

                if (confirmation) {
                    handleDelete();
                }
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="cart-items" key={props.itemId}>
            {/* {props.image && <img src={props.image} alt="snack" />} */}
            <div className="cart-items-description">
                <h2>{props.name}</h2>
                <p>{props.description}</p>
            </div>

            <div className="qntd">
                <button className="qntd-button" onClick={increaseCartItem}>
                    +
                </button>
                <h1>{props.quantity}</h1>
                <button className="qntd-button" onClick={decreaseCartItem}>
                    -
                </button>
            </div>

            <div className="price-container">
                <h3>R$ {totalPrice}</h3>
            </div>

            <div className="remove-button-container">
                <button className="remove-button" onClick={handleDelete}>
                    Remover
                </button>
            </div>
        </div>
    );
}
