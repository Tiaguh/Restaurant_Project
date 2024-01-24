import React, { useState } from 'react';
import './ProfileModal.css';

export default function ProfileModal({ setModalVisible, updateUser }) {
    const [password, setPassword] = useState("");

    const handleConfirm = () => {
        setModalVisible(false);

        setTimeout(() => {
            updateUser()
        }, 500);
    }

    return (
        <div className="cart-modal-container">
            <form className="cart-modal">
                <div className="cart-modal-ask-container">
                    <h1>Digite sua senha:</h1>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" />
                </div>

                <div className="cart-modal-button-container">
                    <button
                        className="cart-modal-button-confirm"
                        onClick={() => handleConfirm()}
                    >
                        Enviar
                    </button>
                    <button
                        className="cart-modal-button-delete"
                        onClick={() => setModalVisible(false)}
                    >
                        Cancelar
                    </button>
                </div>
            </form>
        </div>
    );
}
