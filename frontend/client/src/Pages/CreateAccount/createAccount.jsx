import React from 'react'
import Sushi from './img/sushi.png'
import './CreateAccount.css'

export default function CreateAccount() {
  return (
    <div className='createAccount-container'>
      <div className="createAccount-title">
        <h1>Create an Account</h1>
      </div>

      <div className="createAccount-main">
        <div className="createAccount-main-img">
          <img src={Sushi} alt='Sushi' />
        </div>

        <div className='form-cadastro'>
          <input type="text" placeholder='Inform Your Name' />
          <input type="email" placeholder='Inform Your Email' />
          <input type="password" placeholder='Inform Your Password' />
          <button>Submit</button>
        </div>

      </div>

    </div>
  )
}