import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Header from '../../components/Header/Header'
import Title from '../../components/Title/Title'
import './Requests.css'

export default function Requests() {

  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchAllItems = async () => {
      try {
        const res = await axios.get("http://localhost:3333/select-requests")
        setItems(res.data)
      } catch (error) {
        console.log(error);
      }
    }
    fetchAllItems()
  }, [])

  const handleDelete = async (id_request) => {
    try {
      await axios.delete("http://localhost:3333/delete-request/" + id_request)
      window.location.reload()
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='requests-all-container'>
      <Header height="100vh" />

      <Title title="Requests" />

      <div className="requests-container">
        {items.map(item => (
          <div className="requestsList-cards" key={item.id_request}>
            <div className="request-id">
              <h1>{item.id_request}</h1>
            </div>

            <div className="request-describe">
              <h3>Item Request:</h3>
              <p>{item.item_request}</p>
              <h3>Method Pay:</h3>
              <p>{item.methodo_pay}</p>
              <h3>Address:</h3>
              <p>{item.address}</p>
            </div>

            <div className="request-delete">
              <button onClick={() => handleDelete(item.id_request)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}