import React from 'react';
import "./DrawerContent.css"

import { AiOutlineClose } from 'react-icons/ai'

export default function DrawerContent({ setIsOpen }) {
    return (
        <div className="drawer-content-container">

            <div className="drawer-content-button-container">

                <button
                    onClick={() => setIsOpen(false)}
                    size={50}
                    color="#FFF"
                    style={{ cursor: "pointer" }}
                >
                    <AiOutlineClose color="#FFF" size={50} />
                </button>

            </div>

        </div>
    )
}