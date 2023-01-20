import React from 'react'
import Taco from './img/taco.png'
import './login.css'

function login() {
  return (
    <div className='login-container'>
      <div className="login-title">
        <h1>Login</h1>
      </div>

      <div className="login-main">
        <div className="login-main-img">
          <img src={Taco} alt='Taco'/>
        </div>

        <form>
          <input type="email" placeholder='Inform Your Email' />
          <input type="password" placeholder='Inform Your Password' />
          <button>Submit</button>
        </form>
      </div>

    </div>
  )
}

export default login