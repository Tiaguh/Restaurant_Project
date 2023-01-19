import React from 'react'
import './menuItems.css'

export default function menuItems(props) {
    return (
        <div className="menu-items-container">
            <div className="card">
                <div className="cards">
                    <img src={props.img} alt='burguer' />
                    <h2>{props.nameItem}</h2>
                    <p>{props.descriptionItem}</p>
                    <button>Comprar</button>
                </div>
            </div>
        </div>
    )
}
