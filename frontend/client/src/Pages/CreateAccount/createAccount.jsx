import React, { useState } from 'react'
import './CreateAccount.css'
import { toast } from 'react-toastify';

import Sushi from './img/sushi.png'

export default function CreateAccount() {
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleRegister(e) {
    e.preventDefault();

    if (!name || !email || !password) {
      toast.warn('Insira todos os dados!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      return;
    }
  }

  return (
    <div className='createAccount-container'>
      <div className="createAccount-title">
        <h1>Create an Account</h1>
      </div>

      <div className="createAccount-main">
        <div className="createAccount-main-img">
          <img src={Sushi} alt='Sushi' />
        </div>

        <form
          onSubmit={handleRegister}
          className='form-cadastro'
        >

          <input
            type="text"
            placeholder='Inform Your Name'
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder='Inform Your Email'
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder='Inform Your Password'
            onChange={(e) => setPassword(e.target.value)}
          />

          <button>Submit</button>

        </form>

      </div>

    </div>
  )
}