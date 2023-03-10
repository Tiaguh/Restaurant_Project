import React from 'react'
import Header from '../Header/header'
import Title from '../Title/title'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './alterItems.css'

export default function AlterItems() {
    const [items, setItems] = useState([])

    const fetchAllItems = async () => {
        try {
            const res = await axios.get("https://taupe-ladybug-gear.cyclic.app/management-item/get-items")
            setItems(res.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchAllItems()
    }, [])

    const handleDelete = async (item_id) => {
        try {
            await axios.delete(`https://taupe-ladybug-gear.cyclic.app/management-item/delete-item/${item_id}`)
                .then(async () => {
                    await fetchAllItems()
                })
            // window.location.reload()

            console.log(item_id);
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