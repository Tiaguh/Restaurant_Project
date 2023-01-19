import React from 'react'
import { Link } from 'react-router-dom';
import headerIcon from './img/icon-header.png'
import snacks from './img/snacks.png'
import './homePage.css'

function homePage() {
    return (
        <div className="homePage-container">
            <div className="header-container">
                <div className="logo">
                    <img src={headerIcon} className='icon' alt='burguer' />
                    <h1>Fast-Food House</h1>
                </div>

                <div className='actions'>
                    <p>Create an Account</p>
                    <p className='enter'>To Enter</p>
                </div>
            </div>

            <div className="main-container">
                <h1>Burguer Week</h1>
                <img src={snacks} className='snacks-img' alt="snacks" />
            </div>

            <div className='see-menu'>
                <Link className='link-button' to="/menu">
                    <p>See Menu</p>
                </Link>
            </div>

        </div>
    )
}

export default homePage