import React, { useState, useEffect } from 'react'
import './AlterItems.css'

import Drawer from '../../components/Drawer/Drawer.jsx'
import Title from '../../components/Title/Title'

import CardUpdate from '../../components/CardUpdate/CardUpdate'

import api from '../../api.js';
import { toast } from 'react-toastify';

export default function AlterItems() {
    const [items, setItems] = useState([])

    const fetchAllItems = async () => {
        try {
            const res = await api.get("/management-item/get-items")
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

            const response = await api.delete(`/management-item/delete-item/${item_id}`);

            if (response.status === 200) {
                toast.success('Successful Delete!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            }
            await fetchAllItems();
        } catch (error) {
            console.log('Erro ao excluir item:', error);
        }
    }

    return (
        <div className='alter-items-container-all'>

            <Drawer />

            <div className="alter-items-container">

                <Title title="Alter Items" />

                <div className="alter-items-cards">

                    {items.map(item => (
                        <CardUpdate
                            key={item.id}
                            id={item.id}
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