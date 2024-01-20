import React, { useState } from 'react';
import './ProfileModal.css';

export default function ProfileModal() {
    const [visible, setVisible] = useState(false)

    return (
        <div className="cart-modal-container" >
            <div className="cart-modal">
                <div className="cart-modal-ask-container">
                    <h1>Digite sua senha:</h1>
                </div>

                <div className="cart-modal-button-container">
                    <button className="cart-modal-button-confirm">
                        Enviar
                    </button>
                    <button className="cart-modal-button-delete">
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    );
}
