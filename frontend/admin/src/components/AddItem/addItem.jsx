import { useState } from 'react'
import React from 'react'
import Menu from './img/menu.png'
import Header from '../Header/header'
import Title from '../Title/title'
import './addItem.css'

import api from '../../api'

export default function AddItem() {

  const [itemName, setItemName] = useState('')
  const [itemDescription, setItemDescription] = useState('')
  const [itemPrice, setItemPrice] = useState('')

  console.log(itemName, itemDescription, itemPrice);

  async function handleRegister(e) {

    e.preventDefault()

    try {
      const data = {
        itemName, itemDescription, itemPrice
      };

      const response = await api.post('/create-item', data);

      alert(`Item cadastrado com sucesso.`);

    } catch (err) {
      alert(`Erro no cadastro. Tente novamente. \n Erro: ${err}`)
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
              onChange={e => setItemName(e.target.value)} />

            <input
              type="text"
              placeholder='Item Description'
              value={itemDescription}
              onChange={e => setItemDescription(e.target.value)} />

            <input
              type="number"
              placeholder='Item Price'
              value={itemPrice}
              onChange={e => setItemPrice(e.target.value)} />

            <button onClick={handleRegister}>Add</button>
          </form>
        </div>
      </div>
    </div>
  )
}