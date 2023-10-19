import React from 'react'

import { Link } from 'react-router-dom';

import burguer from './img/icon-header.png'
import snacks from './img/snacks.png'

import './HomePage.css'

export default function HomePage() {
    return (
        <div className="home-page-container">

            <header className="home-page-header">

                <div>
                    <img src={burguer} alt='burguer' />
                    <h1>Fast-Food House</h1>
                </div>

                <nav>

                    <Link className='link' to="/create-account">
                        <p>Create an Account</p>
                    </Link>

                    <Link className='link' to="/login">
                        <h5>To Enter</h5>
                    </Link>

                </nav>

            </header>

            <main className="home-page-main">

                <h1>Burguer Week</h1>
                <img src={snacks} alt="snacks" />

            </main>

            <section className='home-page-section'>

                <Link className='link' to="/menu">
                    <button>See Menu</button>
                </Link>

            </section>

        </div>
    )
}