import React, { useState } from 'react';
import './ProfileModal.css';

import { toast } from 'react-toastify';

export default function ProfileModal({ setModalVisible, updateUserData, setReadOnly }) {
    const [currentPassword, setCurrentPassword] = useState("");

    const handleConfirm = (e) => {
        e.preventDefault();

        if (currentPassword === '') {
            toast.warn('A senha é obrigatória para atualizar o perfil!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } else {
            setModalVisible(false);

            setTimeout(() => {
                updateUserData(currentPassword, e);
            }, 500);
        }
    };


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
                        onClick={handleConfirm}
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
