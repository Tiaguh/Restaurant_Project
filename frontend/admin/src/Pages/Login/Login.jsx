import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Login.css';
import api from '../../api';
import Chef from './img/chef-picture.png';

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

      const response = await api.post("/login", data);
      console.log(response);

      if (response.data.message === 'Login bem-sucedido') {
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
      <div className="login-title">
        <h1>Login</h1>
      </div>

      <div className="login-main">
        <div className="login-main-img">
          <img src={Chef} alt='Taco' />
        </div>

        <form onSubmit={handleLogin} className='form-login'>
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

          <button className='login-button'>Submit</button>
        </form>
      </div>
    </div>
  );
}
