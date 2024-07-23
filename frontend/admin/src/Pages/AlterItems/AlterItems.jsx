import React, { useState, useEffect } from 'react';
import './AlterItems.css';

import Drawer from '../../components/Drawer/Drawer.jsx';
import Title from '../../components/Title/Title';
import CardUpdate from '../../components/CardUpdate/CardUpdate';
import api from '../../api.js';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function AlterItems() {
    const [items, setItems] = useState([]);
    const navigate = useNavigate();

    const fetchAllItems = async () => {
        try {
            const res = await api.get('/management-item/get-items');
            setItems(res.data);
        } catch (error) {
            console.log('Error fetching items:', error);
        }
    };

    useEffect(() => {
        fetchAllItems();
    }, []);

    const handleUpdate = (itemId) => {
        navigate(`/update-item/${itemId}`);
    };

    const handleDelete = async (itemId) => {
        try {
            const confirmDelete = window.confirm('Tem certeza que deseja excluir este item?');
            if (!confirmDelete) return;

            await api.delete(`/management-item/delete-item/${itemId}`);
            setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));

            toast.success('Item excluído com sucesso!', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
            });
        } catch (error) {
            console.log('Erro ao excluir item:', error);
        }
    };

    return (
        <div className="alter-items-container-all">

            <Drawer />

            <div className="alter-items-container">

                <Title title="Alter Items" />

                <div className="alter-items-cards">
                    {items.length > 0 ? (
                        items.map((item) => (
                            <CardUpdate
                                key={item.id}
                                id={item.id}
                                image_url={item.image_url}
                                name={item.name}
                                description={item.description}
                                price={item.price}
                                onUpdate={() => handleUpdate(item.id)}
                                onDelete={() => handleDelete(item.id)}
                            />
                        ))
                    ) : (
                        <p>Nenhum item disponível.</p>
                    )}
                </div>
            </div>
        </div>
    );
}