import React, { useState } from 'react'
import './Profile.css'

import Drawer from '../../components/Drawer/Drawer'

import api from '../../api.js'
import { toast } from 'react-toastify';

import { MdEdit } from "react-icons/md";
import { AiOutlineCheck } from "react-icons/ai";

import Soda from "./img/soda.png"

export default function Profile() {
  const [cor, setCor] = useState('#FFF');
  const [readOnly, setReadOnly] = useState(true)

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
          />

          <input
            type="text"
            placeholder='Email'
            readOnly={readOnly}
          />

          <input
            type="Password"
            placeholder='Password'
            readOnly={readOnly}
          />

          <input
            type="text"
            placeholder='Address'
            readOnly={readOnly}
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
              onClick={() => setReadOnly(true)}
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