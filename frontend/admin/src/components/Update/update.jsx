import React from 'react'
import Menu from './img/menu.png'
import Header from '../Header/header'
import './update.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Update() {

  const [item, setItem] = useState({
    item_name: "",
    item_description: "",
    item_price: null
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setItem((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  console.log(item);

  const handleClick = async e => {
    e.preventDefault() // impedir que a página recarregue

    try {
      await axios.post("http://localhost:3333/add-item", item)
      // navigate("/")
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='update-all-container'>

      <Header />

      <div className="update-container">

        <div className="update-title">
          <h1>Update a Item To The Menu</h1>
        </div>

        <div className="update-main">
          <div className="update-main-img">
            <img src={Menu} alt='Menu' />
          </div>

          <form>
            <input type="text" placeholder='Provide Item Name' onChange={handleChange} name='item_name' />
            <input type="text" placeholder='Provide Item Description' onChange={handleChange} name='item_description' />
            <input type="number" placeholder='Inform Item Price' onChange={handleChange} name='item_price' />
            <button onClick={handleClick}>Add</button>
          </form>
        </div>

      </div>
    </div>
  )
}