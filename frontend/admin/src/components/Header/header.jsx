import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

function header() {
    return (
        <div className='header-container'>
            <div className="header-side-bar">
                <Link className='link' to="/">
                    <p>Home</p>
                </Link>
                
                <Link className='link' to="/requests">
                    <p>Requests</p>
                </Link>

                <Link className='link' to="/menu">
                    <p>See Menu</p>
                </Link>

                <div className="isolate">
                    <Link className='link' to="/management-items">
                        <p>Management Items</p>
                    </Link>
                </div>

            </div>

            <div className="logout">
                <Link className='link' to="/login">
                    <button>Logout</button>
                </Link>
            </div>

        </div>
    )
}

export default header 