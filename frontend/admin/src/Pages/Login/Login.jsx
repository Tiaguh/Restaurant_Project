import React, {useState} from 'react'
import { Link, useNavigate } from "react-router-dom"
import './Login.css'

import Chef from './img/chef-picture.png'

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className='login-container'>

      <div className="login-title">
        <h1>Login</h1>
      </div>

      <div className="login-main">

        <div className="login-main-img">
          <img src={Chef} alt='Taco' />
        </div>

        <div className='form-login'>

          <input type="email" placeholder='Inform Your Email' />
          <input type="password" placeholder='Inform Your Password' />
          
          <button>Submit</button>

        </div>

      </div>

    </div>
  )
}