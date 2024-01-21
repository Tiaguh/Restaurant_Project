import React, { useState, useEffect } from 'react'
import './Profile.css'

import Drawer from '../../components/Drawer/Drawer'

import api from '../../api.js'
import { toast } from 'react-toastify';

import { useUser } from '../../context/UserContext';

import { MdEdit } from "react-icons/md";
import { AiOutlineCheck } from "react-icons/ai";

import Soda from "./img/soda.png";

import ProfileModal from '../../components/ProfileModal/ProfileModal';

export default function Profile() {
  const { userData, updateUser } = useUser();

  const [modalVisible, setModalVisible] = useState(false);

  const [cor, setCor] = useState('#FFF');
  const [readOnly, setReadOnly] = useState(true)

  const [name, setName] = useState(userData.name || '');
  const [email, setEmail] = useState(userData.email || '');
  const [password, setPassword] = useState(userData.password || '');

  const [changeClassName, setChangeClassName] = useState(true);

  useEffect(() => {
    setName(userData.name || '');
    setEmail(userData.email || '');
    setPassword(userData.password || '');
  }, [userData]);

  async function updateUserData() {
    try {
      if (!name || !email || !password) {
        toast.warn('Preencha todos os campos!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        setChangeClassName(false);

        return;
      }

      const response = await api.post(`/user/update-user/${userData.id}`, { name, email, password });

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
    } finally {
      setTimeout(() => {
        setChangeClassName(true);
        setReadOnly(true);

        setName(userData.name || '');
        setEmail(userData.email || '');
        setPassword(userData.password || '');
      }, 500);
    }
  }

  return (
    <div className='profile-container'>

      <div className="profile-title">

        <Drawer />

        <h1>Perfil</h1>

      </div>

      <div className="profile-separator">

        {modalVisible && (
          <div className="modal-container">
            <ProfileModal
              setModalVisible={setModalVisible}
            />
          </div>
        )}

        <div className="profile-form">

          <input
            type="text"
            placeholder='Name'
            readOnly={readOnly}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`input ${readOnly ? 'input-locked' : 'input-unlocked'} ${changeClassName ? 'input-correct' : 'input-uncorrect'}`}
          />

          <input
            type="text"
            placeholder='Email'
            readOnly={readOnly}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`input ${readOnly ? 'input-locked' : 'input-unlocked'} ${changeClassName ? 'input-correct' : 'input-uncorrect'}`}
          />

          <input
            type="Password"
            placeholder='Password'
            readOnly={readOnly}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`input ${readOnly ? 'input-locked' : 'input-unlocked'} ${changeClassName ? 'input-correct' : 'input-uncorrect'}`}
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
              onClick={() => {
                // onClick={async () => {
                //   await updateUserData();
                //   setReadOnly(true);
                // }}

                setModalVisible(true);
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
