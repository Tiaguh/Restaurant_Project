import React from 'react'
import burguerIcon from './img/burguer-icon.png'
import './homePage.css'

function homePage() {
    return (
        <div className="header-container">
            <div className="logo">
                <img src={burguerIcon} className='icon' alt='burguer'/>
                <h1>Burguer House</h1>
            </div>

            <div className='actions'>
                <p>CRIAR CONTA</p>
                <p className='entrar'>ENTRAR</p>
            </div>
        </div>
    )
}

export default homePage