import React, { useState } from "react";
import "./Header.css";

import HomeIcon from "./img/icons/home.png";
import RequestIcon from "./img/icons/menu.png";
import SettingsIcon from "./img/icons/settings.png";

import MenuIcon from "./img/menu.png";
import CloseIcon from "./img/close.png";

import { Link } from "react-router-dom";

import { toast } from 'react-toastify';

export default function Header(props) {
    const [activated, setActivated] = useState(false);

    return (
        <header>

            <div className={`side-bar-container${activated ? " active" : ""}`}>

                <div className="close-header">

                    <button onClick={() => setActivated(false)}>
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

            <div
                className="open-header-container"
                style={{ height: props.height }}
            >

                <div className="open-header">

                    <button onClick={() => setActivated(!activated)}>
                        <img src={MenuIcon} alt="Menu" />
                    </button>

                </div>

            </div>

        </header>
    );
}
