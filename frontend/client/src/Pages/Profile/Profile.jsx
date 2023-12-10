import React, { useState, useEffect } from 'react'
import './Profile.css'

import Drawer from '../../components/Drawer/Drawer'

import api from '../../api.js'
import { toast } from 'react-toastify';

import { useUser } from '../../context/UserContext';

import { MdEdit } from "react-icons/md";
import { AiOutlineCheck } from "react-icons/ai";

import Soda from "./img/soda.png"

export default function Profile() {
  const { userData, updateUser } = useUser();

  const [cor, setCor] = useState('#FFF');
  const [readOnly, setReadOnly] = useState(true)

  const [name, setName] = useState(userData.name || '');
  const [email, setEmail] = useState(userData.email || '');
  const [address, setAddress] = useState(userData.address || '');

  const [changeClassName, setChangeClassName] = useState(true);

  const [password, setPassword] = useState(userData.password || '');

  useEffect(() => {
    setName(userData.name || '');
    setEmail(userData.email || '');
    setPassword(userData.password || '');
    setAddress(userData.address || '');
  }, [userData]);

  async function updateUserData() {
    try {
      if (!name || !email || !password || !address) {
        toast.warn('Preencha todos os campos!.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        console.log('Campos vazios!');
        setChangeClassName(false)

        return;
      }

      const response = await api.post(`/user/update-user/${userData.id}`, { name, email, password, address });

      if (response.status === 200) {
        updateUser(userData.id);
        toast.success('Perfil atualizado com sucesso!', {
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
        toast.error('Erro ao atualizar o perfil. Tente novamente.', {
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
    } catch (error) {
      console.error('Erro ao salvar perfil:', error);
      toast.error('Erro ao atualizar o perfil. Tente novamente.', {
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

    setReadOnly(true);
  }

  return (
    <div className='profile-container'>

      <div className="profile-title">

        <Drawer />

        <h1>Perfil</h1>

      </div>

      <div className="profile-separator">

        <div className="profile-form">

          <input
            type="text"
            placeholder='Name'
            readOnly={readOnly}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={changeClassName ? 'input-correct' : 'input-uncorrect'}
          />

          <input
            type="text"
            placeholder='Email'
            readOnly={readOnly}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={changeClassName ? 'input-correct' : 'input-uncorrect'}
          />

          <input
            type="text"
            placeholder='Address'
            readOnly={readOnly}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className={changeClassName ? 'input-correct' : 'input-uncorrect'}
          />

          {readOnly ? (
            <button
              onClick={() => setReadOnly(false)}
              className='button-edit-profile'
            >
              <h1>Edit</h1>

              <MdEdit
                onMouseEnter={() => setCor('#FFDE59')}
                onMouseLeave={() => setCor('#FFF')}
                size={32}
              />
            </button>
          ) : (
            <button
              onClick={async () => {
                await updateUserData();
                setReadOnly(true);
              }}
              className='button-edit-profile'
            >
              <h1>Save</h1>

              <AiOutlineCheck
                onMouseEnter={() => setCor('#FFDE59')}
                onMouseLeave={() => setCor('#FFF')}
                size={32}
              />
            </button>
          )}

          <input
            type="Password"
            placeholder='Password'
            readOnly={readOnly}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={changeClassName ? 'input-correct' : 'input-uncorrect'}
          />

          {readOnly ? (
            <button
              onClick={() => setReadOnly(false)}
              className='button-edit-profile'
            >
              <h1>Edit</h1>

              <MdEdit
                onMouseEnter={() => setCor('#FFDE59')}
                onMouseLeave={() => setCor('#FFF')}
                size={32}
              />
            </button>
          ) : (
            <button
              onClick={async () => {
                await updateUserData();
                setReadOnly(true);
              }}
              className='button-edit-profile'
            >
              <h1>Save</h1>

              <AiOutlineCheck
                onMouseEnter={() => setCor('#FFDE59')}
                onMouseLeave={() => setCor('#FFF')}
                size={32}
              />
            </button>
          )}

        </div>

        <div className="profile-img-container">
          <img src={Soda} alt="Soda" />
        </div>

      </div>

    </div>
  )
}

// Solicitar a senha para atualizar os dados.