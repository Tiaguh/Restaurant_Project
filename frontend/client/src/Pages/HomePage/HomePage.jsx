import React from 'react'
import { Link } from 'react-router-dom';
import headerIcon from './img/icon-header.png'
import snacks from './img/snacks.png'
import './HomePage.css'

export default function HomePage() {
    return (
        <div className="homePage-container">
            <div className="header-container">
                <div className="logo">
                    <img src={headerIcon} className='icon' alt='burguer' />
                    <h1>Fast-Food House</h1>
                </div>

                <div className='actions'>
                    <Link className='link' to="/create-account">
                        <p className='create-account'>Create an Account</p>
                    </Link>

                    <Link className='link' to="/login">
                        <p className='enter'>To Enter</p>
                    </Link>
                </div>
            </div>

            <div className="main-container">
                <h1 className='main-container-title'>Burguer Week</h1>
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