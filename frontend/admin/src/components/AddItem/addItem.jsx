import React from 'react'
import Menu from './img/menu.png'
import Header from '../Header/header'
import Title from '../Title/title'

import './addItem.css'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import api from '../../api.js'
import { toast } from 'react-toastify';


export default function AddItem() {
  const navigate = useNavigate()

  const [itemName, setItemName] = useState('')
  const [itemDescription, setItemDescription] = useState('')
  const [itemPrice, setItemPrice] = useState('')

  async function handleAddItem(e) {

    e.preventDefault()

    try {
      const data = {
        itemName, itemDescription, itemPrice
      }

      const response = await api.post('/management-item/add-item', data)

      if (response.status === 200) {
        toast.success('Successful Add!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        navigate("/menu")
      }
    } catch (error) {
      alert(`Erro ao adicionar. Tente novamente. \n Erro: ${error}`);
    }
  }

  return (
    <div className='add-all-item-container'>

      <Header />

      <Title title="Add a New Item To The Menu" />
      <div className="add-item-container">
        <div className="add-item-main">
          <div className="add-item-main-img">
            <img src={Menu} alt='Menu' />
          </div>

          <form>
            <input
              type="text"
              placeholder='Item Name'
              value={itemName}
              onChange={e => setItemName(e.target.value)}
            />

            <input
              type="text"
              placeholder='Item Description'
              value={itemDescription}
              onChange={e => setItemDescription(e.target.value)}
            />

            <input
              type="number"
              placeholder='Item Price'
              value={itemPrice}
              onChange={e => setItemPrice(e.target.value)}
            />

            <button onClick={handleAddItem}>Add</button>
          </form>
        </div>

      </div>
    </div>
  )
}