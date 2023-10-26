import React from 'react';
import "./DrawerContent.css"

import HomeIcon from "./img/icons/home.png";
import RequestIcon from "./img/icons/menu.png";
import SettingsIcon from "./img/icons/settings.png";

import CloseIcon from "./img/close.png";

import { Link } from "react-router-dom";

import { toast } from 'react-toastify';

export default function DrawerContent({ setIsOpen }) {
    return (
        <div className="drawer-content-container">

            <div className="close-drawer">

                <button
                    onClick={() => setIsOpen(false)}
                    size={50}
                    color="#FFF"
                    style={{ cursor: "pointer" }}
                >
                    <img src={CloseIcon} alt="Close" />
                </button>

            </div>

            <div className="side-bar">

                <Link className="link" to="/">
                    <img src={HomeIcon} alt="Home" />
                    <p>Home</p>
                </Link>

                <Link className="link" to="/requests">
                    <img src={RequestIcon} alt="Requests" />
                    <p>Requests</p>
                </Link>

                <Link className="link" to="/management-items">
                    <img src={SettingsIcon} alt="Management Items" />
                    <p>Management Items</p>
                </Link>

                <Link className="link" to="/menu">
                    <img src={RequestIcon} alt="See Menu" />
                    <p>See Menu</p>
                </Link>

            </div>

            <div className="logout">

                <Link className="link" to="/login">

                    <button onClick={() => {
                        sessionStorage.removeItem("login")
                        sessionStorage.clear();

                        toast.success('Deslogado com sucesso!', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                        });
                    }}>
                        Logout
                    </button>
                </Link>

            </div>

        </div>
    )
}