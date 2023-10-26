import React, { useState, useEffect } from 'react'
import './AlterItems.css'

import Drawer from '../../components/Drawer/Drawer.jsx'
import Title from '../../components/Title/Title'

import CardUpdate from '../../components/CardUpdate/CardUpdate'

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
            if (!confirmDelete) return;

            await axios.delete(`http://localhost:3333/management-item/delete-item/${item_id}`);
            await fetchAllItems();
        } catch (error) {
            console.log('Erro ao excluir item:', error);
        }
    }

    // const headerHeight = items.length < 4 ? "100vh" : "100%";

    return (
        <div className='alter-items-container-all'>

            <Drawer />

            <div className="alter-items-container">

                <Title title="Alter Items" />

                <div className="alter-items-cards">

                    {items.map(item => (
                        <CardUpdate
                            key={item.id}
                            name={item.name}
                            description={item.description}
                            price={item.price}
                            onDelete={() => handleDelete(item.id)}
                        />
                    ))}

                </div>
            </div>
        </div>
    )
}