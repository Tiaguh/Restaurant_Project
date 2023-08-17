import React from 'react'
import { Link } from 'react-router-dom'

import './CardUpdate.css'

export default function CardUpdate(props) {
    return (
        <div className="card">
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <h3>R$ {props.price}</h3>

            <button>
                <Link className='link' to={`/update-item/${props.id}`}>Update</Link>
            </button>

            <button onClick={props.onDelete}>Delete</button> {/* Chama a função onDelete */}
        </div>
    )
}
