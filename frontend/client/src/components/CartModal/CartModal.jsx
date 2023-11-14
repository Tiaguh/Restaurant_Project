import React, { useState } from 'react';
import './CartModal.css';

export default function CartModal(props) {
    const handleConfirm = () => {
        props.onConfirm();
    };

    const handleCancel = () => {
        props.onCancel();
    };

    return (
        <div className="cart-modal-container" >
            <div className="cart-modal-ask-container">
                <h1>Deseja mesmo remover {props.itemName} do carrinho?</h1>
            </div>

            <div className="cart-modal-button-container">
                <button className="cart-modal-button-confirm" onClick={handleConfirm}>
                    Sim, remover!
                </button>
                <button className="cart-modal-button-delete" onClick={handleCancel}>
                    Cancelar
                </button>
            </div>
        </div>
    );
}
