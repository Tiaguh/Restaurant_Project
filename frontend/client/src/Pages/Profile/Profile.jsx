import React, { useState } from 'react'
import './Profile.css'

import Drawer from '../../components/Drawer/Drawer'

import api from '../../api.js'
import { toast } from 'react-toastify';

import { MdEdit } from "react-icons/md";

export default function Profile() {
  const [itemName, setItemName] = useState('')
  const [itemDescription, setItemDescription] = useState('')
  const [itemPrice, setItemPrice] = useState('')

  async function handleAddItem(e) {

    e.preventDefault()

    if (!itemName || !itemDescription || !itemPrice) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

  }

  return (
    <div className='profile-container'>

      <div className="profile-title">

        <Drawer />

        <h1>Perfil</h1>

      </div>

      <div className="profile-form">

        <div className='input-profile-container'>
          <input
            type="text"
            placeholder='Name'
            value={itemName}
            onChange={e => setItemName(e.target.value)}
          />
          <button className='button-profile'>
            <MdEdit color='#FFF' size={30} />
          </button>
        </div>

        <div className='input-profile-container'>
          <input
            type="text"
            placeholder='Email'
            value={itemDescription}
            onChange={e => setItemDescription(e.target.value)}
          />
          <button className='button-profile'>
            <MdEdit color='#FFF' size={30} />
          </button>
        </div>

        <div className='input-profile-container'>
          <input
            type="Password"
            placeholder='Password'
            value={itemPrice}
            onChange={e => setItemPrice(e.target.value)}
          />
          <button className='button-profile'>
            <MdEdit color='#FFF' size={30} />
          </button>
        </div>

        <div className='input-profile-container'>
          <input
            type="text"
            placeholder='Address'
            value={itemPrice}
            onChange={e => setItemPrice(e.target.value)}
          />
          <button className='button-profile'>
            <MdEdit color='#FFF' size={30} />
          </button>
        </div>

      </div>

    </div>
  )
}