import React from 'react'
import { Link } from 'react-router-dom'
import './ManagementItems.css'

import Title from '../../components/Title/Title'

import Drawer from '../../components/Drawer/Drawer.jsx'

export default function managementItems() {
    return (
        <div className="managament-items-all-container">

            <Drawer />

            <div className="management-items-container">

                <Title title="List Items" />

                <div className="management-items-buttons">

                    <div className='management-items'>
                        <Link className='link' to="/add-item">
                            <button>Add Item</button>
                        </Link>
                    </div>

                    <div className='management-items'>
                        <Link className='link' to="/alter-items">
                            <button>Alter Items</button>
                        </Link>
                    </div>

                </div>

            </div>

        </div>
    )
}