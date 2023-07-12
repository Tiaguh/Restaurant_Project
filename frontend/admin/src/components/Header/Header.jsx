import React, { useState } from 'react'
import './Header.css'

import HomeIcon from './img/icons/home.png'
import RequestIcon from './img/icons/menu.png'
import SettingsIcon from './img/icons/settings.png'
import SolicitationIcon from './img/icons/solicitation.png'

import MenuIcon from './img/menu.png'
import CloseIcon from './img/close.png'

import { Link } from 'react-router-dom'

export default function Header() {

    const [activated, setActivated] = useState(false)

    return (
        <header>

            {
                activated ? (
                    <div>

                        <div className="close-header">

                            <button onClick={() => setActivated(false)}>
                                <img src={CloseIcon} />
                            </button>

                        </div>

                        <div className="side-bar">

                            <Link className='link' to="/">
                                <img src={HomeIcon} />
                                <p>Home</p>
                            </Link>

                            <Link className='link' to="/requests">
                                <img src={SolicitationIcon} />
                                <p>Requests</p>
                            </Link>

                            <Link className='link' to="/menu">
                                <img src={RequestIcon} />
                                <p>See Menu</p>
                            </Link>

                            <Link className='link' to="/management-items">
                                <img src={SettingsIcon} />
                                <p>Management Items</p>
                            </Link>

                        </div>

                        <div className="logout">

                            <Link className='link' to="/login">
                                <button>Logout</button>
                            </Link>

                        </div>

                    </div>
                )

                    :
                    (
                        <div className="header-not-active">

                            <div className="open-header">

                                <button onClick={() => setActivated(true)}>
                                    <img src={MenuIcon} alt="" srcset="" />
                                </button>

                            </div>

                            <div className="side-bar-not-active">

                                <Link className='link' to="/">
                                    <img src={HomeIcon} />
                                </Link>

                                <Link className='link' to="/requests">
                                    <img src={SolicitationIcon} />
                                </Link>

                                <Link className='link' to="/menu">
                                    <img src={RequestIcon} />
                                </Link>

                                <Link className='link' to="/management-items">
                                    <img src={SettingsIcon} />
                                </Link>

                            </div>

                            <div className="logout-not-activite">

                            </div>

                        </div>
                    )
            }

        </header>
    )
}
