import React from 'react'
import './title.css'

export default function Title(props) {
    return (
        <div className="title-container">
            <h1>{props.title}</h1>
        </div>
    )
}

