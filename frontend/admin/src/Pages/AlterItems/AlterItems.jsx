import React, { useState, useEffect } from 'react'
import './AlterItems.css'

import Header from '../../components/Header/Header'
import Title from '../../components/Title/Title'

import { Link } from 'react-router-dom'

import axios from 'axios'

export default function AlterItems() {
    const [items, setItems] = useState([])

    const fetchAllItems = async () => {
        try {
            const res = await axios.get("http://localhost:3333/management-item/get-items")
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
            const confirmDelete = window.confirm('Tem certeza que deseja excluir este item?');
            if (!confirmDelete) {
                return;
            }

            await axios.delete(`http://localhost:3333/management-item/delete-item/${item_id}`);
            await fetchAllItems();
            console.log(item_id);
        } catch (error) {
            console.log('Erro ao excluir item:', error);
        }
    }

    return (
        <div className='alter-items-container-all'>

            <Header />

            <div className="alter-items-container">

                <Title title="Alter Items" />

                <div className="alter-items-cards">

                    {items.map(item => (
                        <div className="cards" key={item.item_id}>
                            <h2>{item.item_name}</h2>
                            <p>{item.item_description}</p>
                            <h3>R$ {item.item_price}</h3>

                            <button>
                                <Link className='link' to={`/update-item/${item.item_id}`}>Update</Link>
                            </button>

                            <button onClick={() => handleDelete(item.item_id)}>Delete</button>

                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}