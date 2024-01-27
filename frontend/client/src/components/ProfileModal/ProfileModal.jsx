import React, { useState } from 'react';
import './ProfileModal.css';

export default function ProfileModal({ setModalVisible, updateUserData, setReadOnly }) {
    const [currentPassword, setCurrentPassword] = useState("");

    const handleConfirm = () => {
        // validar se o input não é vazio

        setModalVisible(false);

        setTimeout(() => {
            updateUserData(currentPassword)
        }, 500);
    }

    return (
        <div className="cart-modal-container">
            <form className="cart-modal">
                <div className="cart-modal-ask-container">
                    <h1>Digite sua senha:</h1>
                    <input onChange={(e) => setCurrentPassword(e.target.value)} type="password" />
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
                        onClick={() => {
                            setModalVisible(false)
                            setReadOnly(true)
                        }}
                    >
                        Cancelar
                    </button>
                </div>
            </form>
        </div>
    );
}
