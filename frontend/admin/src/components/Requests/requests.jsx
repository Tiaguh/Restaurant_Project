import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import './requests.css'
import RequestsList from '../Requests-List/requestsList'
import Header from '../Header/header'
import Title from '../Title/title'

export default function Requests() {

  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchAllItems = async () => {
      try {
        const res = await axios.get("http://localhost:3333/select-itens")
        setItems(res.data)
      } catch (error) {
        console.log(error);
      }
    }
    fetchAllItems()
  }, [])

  return (
    <div className='requests-container'>
      <Header />

      <Title title="Requests" />

      <div className="requests-main">
        <RequestsList
          RequestsList="Pizza"
          orderId="1"
          paymentMethod="debt"
          address="7759 Greystone Drive Vicksburg, MS 39180" />
      </div>
    </div>
  )
}