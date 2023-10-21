import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

import { useUser } from '../../context/UserContext'

import Taco from './img/taco.png'
import api from '../../api.js'

import { toast } from 'react-toastify';

export default function Login() {
  const { updateUser } = useUser();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  console.log(email, password);

  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    if (!email || !password) {
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

    try {

      const data = {
        email,
        password
      };

      const response = await api.post("/login/client", data);
      console.log(response);

      if (response.status === 200) {
        toast.success('Logado com sucesso!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        const userId = response.data.id;
        updateUser(userId);

        navigate("/menu");
      }

      sessionStorage.setItem("login", true)

    } catch (error) {
      toast.error('Erro no login. Tente novamente.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }

  return (
    <div className='login-container'>

      <header className="login-header">
        <h1>Login</h1>
      </header>

      <main className='form-login'>

        <div>
          <img src={Taco} alt='Taco' />
        </div>

        <form onSubmit={handleLogin}>

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

      </main>

    </div >
  )
}