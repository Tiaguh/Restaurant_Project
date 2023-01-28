import React from 'react'
import './managementItems.css'
import Title from '../Title/title'
import Header from '../Header/header'
import { Link } from 'react-router-dom'

export default function managementItems() {
    return (
        <div className="managament-items-all-container">
            <Header />

            <Title title="Management Items" />
            <div className="management-items-container">

                <div className='management-items'>
                    <Link className='link' to="/add-item">
                        <button>Add Item</button>
                    </Link>
                </div>

                <div className='management-items'>
                    <Link className='link' to="/update-item">
                        <button>Update Item</button>
                    </Link>
                </div>

                <div className='management-items'>
                    <Link className='link' to="/delete-item">
                        <button>Delete Item</button>
                    </Link>
                </div>

            </div>

        </div>
    )
}