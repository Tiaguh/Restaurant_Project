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

  const [changeClassName, setChangeClassName] = useState(true);

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
      if (error.response && error.response.status === 401) {
        toast.warning("Email ou senha incorretos!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        setChangeClassName(false)
      } else {
        toast.error("Erro no login. Tente novamente.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        setChangeClassName(false)
      }
    } finally {
      setTimeout(() => {
        setChangeClassName(true);
      }, 500);
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
            className={changeClassName ? 'input-correct' : 'input-uncorrect'}
            type="email"
            placeholder='Inform Your Email'
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className={changeClassName ? 'input-correct' : 'input-uncorrect'}
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