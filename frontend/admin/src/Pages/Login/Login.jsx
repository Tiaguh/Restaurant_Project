import React, { useState } from 'react';
import './Login.css';

import { useNavigate } from "react-router-dom";

import Chef from './img/chef-picture.png';

import api from '../../api';
import { toast } from 'react-toastify';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

      const res = await api.post("/login/admin", data);
      console.log(res);

      if (res.status === 200) {
        navigate("/");
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

      <header>
        <h1>Login</h1>
      </header>

      <main>

        <div>
          <img src={Chef} alt='Taco' />
        </div>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder='Inform Your Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder='Inform Your Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button>Submit</button>

        </form>

      </main>

    </div>
  );
}
