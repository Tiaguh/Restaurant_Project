import React, { useState } from "react";
import './CardCart.css';

import { toast } from 'react-toastify';

import CartModal from "../CartModal/CartModal";
import api from '../../api';

export default function CardCart(props) {
    const [modalVisible, setModalVisible] = useState(false);

    const totalPrice = (props.quantity * props.price).toFixed(2);

    const handleDelete = () => {
        setModalVisible(true);
    };

    const handleCancelDelete = () => {
        setModalVisible(false);
    };

    async function handleConfirmDelete() {
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
        } finally {
            setModalVisible(false);
        }
    };

    async function increaseCartItem() {
        try {
            const response = await api.put(`/cart/increase-cart-item/${props.userId}/${props.itemId}`);
            console.log(response);

            props.fetchItems();

        } catch (error) {
            console.log(error);
        }
    };

    async function decreaseCartItem() {
        try {
            const currentItem = props.quantity;

            if (currentItem > 1) {
                const response = await api.put(`/cart/decrease-cart-item/${props.userId}/${props.itemId}`);
                console.log(response);

                props.fetchItems();

            } else {
                handleDelete();
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="cart-items" key={props.id}>
            {/* {props.image && <img src={props.image} alt="snack" />} */}
            <div className="cart-items-description">
                <h2>{props.name}</h2>
                <p>{props.description}</p>
            </div>

            <div className="qntd">
                <button className="qntd-button" onClick={increaseCartItem}>+</button>

                <h1>{props.quantity}</h1>

                <button className="qntd-button" onClick={decreaseCartItem}>-</button>
            </div>

            <div className="price-container">
                <h3>R$ {parseFloat(totalPrice)}</h3>
            </div>

            <div className="remove-button-container">
                <button className="remove-button" onClick={() => setModalVisible(true)}>
                    Remover
                </button>
            </div>

            {modalVisible && (
                <div className="modal-container">
                    <CartModal
                        itemName={props.name}
                        onConfirm={handleConfirmDelete}
                        onCancel={handleCancelDelete}
                        setModalVisible={setModalVisible}
                    />
                </div>
            )}
        </div>
    );
}
