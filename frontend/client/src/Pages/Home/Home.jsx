import React from 'react'
import './Home.css'

import { Link } from 'react-router-dom';

import Burguer from './img/Burguer-Icon.png'
import Snacks from './img/Snacks.png'

export default function Home() {
    return (
        <div className="home-container">

            <header>
                <div>
                    <img src={Burguer} alt='Burguer' />
                    <h1>Urban Snacks</h1>
                </div>

                <nav>
                    <Link className='link' to="/create-account">
                        <p>Create an Account</p>
                    </Link>

                    <Link className='link' to="/login">
                        <h1>To Enter</h1>
                    </Link>
                </nav>
            </header>

            <main>
                <h1>Burguer Week!</h1>
                <img src={Snacks} alt="snacks" />
            </main>

            <footer>
                <Link className='link' to="/menu">
                    <button>See Menu</button>
                </Link>
            </footer>
        </div>
    )
}