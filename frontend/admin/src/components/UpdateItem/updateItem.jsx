import React from 'react'
import Menu from './img/menu.png'
import Header from '../Header/header'
import Title from '../Title/title'
import './updateItem.css'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function UpdateItem() {

  const [item, setItem] = useState({
    itemName: "",
    itemDescription: "",
    itemPrice: null
  })

  const navigate = useNavigate()
  const location = useLocation() // pegar o id do item baseado na rota em que ele está

  const itemId = (location.pathname.split("/")[2]);

  const handleChange = (e) => {
    setItem((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  console.log(item);

  const handleClick = async (e) => {
    e.preventDefault() // impedir que a página recarregue

    try {
      await axios.post(`http://localhost:3333/management-item/update-item/${itemId}`, item)
      .then((res) => {
        console.log(res)
      })
      navigate("/alter-items")
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='update-all-item-container'>

      <Header />

      <Title title="Update a Item To The Menu" />
      
      <div className="update-item-container">
        <div className="update-item-main">
          <div className="update-item-main-img">
            <img src={Menu} alt='Menu' />
          </div>

          <form>
            <input type="text" placeholder='Item Name' onChange={handleChange} 
            name='itemName' />
            <input type="text" placeholder='Item Description' onChange={handleChange} name='itemDescription' />
            <input type="number" placeholder='Item Price' onChange={handleChange} name='itemPrice' />
            <button onClick={(e) => handleClick(e)}>Update</button>
          </form>
        </div>

      </div>
    </div>
  )
}