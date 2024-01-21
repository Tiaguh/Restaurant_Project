import React, { useState } from 'react';
import './ProfileModal.css';

export default function ProfileModal({ setModalVisible }) {
    const [visible, setVisible] = useState(false);

    return (
        <div className="cart-modal-container" >
            <div className="cart-modal">
                <div className="cart-modal-ask-container">
                    <h1>Digite sua senha:</h1>
                    <input type="password" />
                </div>

                <div className="cart-modal-button-container">
                    <button
                        className="cart-modal-button-confirm"
                        onClick={() => {
                            setModalVisible(false);
                        }}
                    >
                        Enviar
                    </button>
                    <button
                        className="cart-modal-button-delete"
                        onClick={() => {
                            setModalVisible(false);
                        }}
                    >
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    );
}
