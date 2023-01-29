import React from 'react'
import Header from '../Header/header'
import Title from '../Title/title'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

// import chef from './pictures/chef-picture.png'

import './alterItems.css'

export default function AlterItems() {
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

    const handleDelete = async (item_id) => {
        try {
            await axios.delete("http://localhost:3333/delete-item/" + item_id)
            window.location.reload()
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='alter-items-container-all'>
            <Header />

            <Title title="List Items" />

            <div className="alter-items-container">

                {items.map(item => (
                    <div className="cards" key={item.id_item}>
                        {item.item_image && <img src={item.item_image} alt="snack" />}
                        <h2>{item.item_name}</h2>
                        <p>{item.item_description}</p>
                        <h3>R$ {item.item_price}</h3>
                        <button>
                            <Link className='link' to={`/update-item/${item.id_item}`}>Update</Link>
                        </button>
                        <button onClick={() => handleDelete(item.id_item)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    )
}