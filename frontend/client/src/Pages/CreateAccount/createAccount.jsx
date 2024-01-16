import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./CreateAccount.css";
import api from "../../api";

import { toast } from "react-toastify";

import Sushi from "./img/sushi.png";

export default function CreateAccount() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();

    if (!name || !email || !password) {
      toast.warning("Insira todos os dados!", {
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
        name,
        email,
        password,
      };

      const response = await api.post("/user/create-user", data);
      console.log(response);

      if (response.status === 200) {
        navigate("/menu");
        toast.success("Conta criada com sucesso!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        sessionStorage.setItem("login", true);
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        toast.warning("Já existe um email vinculado a essa conta!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else {
        toast.error("Erro no cadastro. Tente novamente.", {
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
  }

  return (
    <div className="register-container">
      <header className="register-header">
        <h1>Create an Account</h1>
      </header>
      <div className="form-register">
        <div>
          <img src={Sushi} alt="Sushi" />
        </div>
        <form onSubmit={handleRegister} className="form-cadastro">
          <input
            type="text"
            placeholder="Inform Your Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Inform Your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Inform Your Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}
