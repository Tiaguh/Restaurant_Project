import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './UpdateItem.css';
import Menu from './img/menu.png';
import Drawer from '../../components/Drawer/Drawer';
import Title from '../../components/Title/Title';
import { toast } from 'react-toastify';
import api from '../../api.js';

export default function UpdateItem() {
  const [item, setItem] = useState({
    itemName: '',
    itemDescription: '',
    itemPrice: null
  });

  console.log(item);

  const navigate = useNavigate();
  const location = useLocation();
  const itemId = location.pathname.split('/')[2];

  console.log(itemId);

  const handleChange = (e) => {
    setItem((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post(`/management-item/update-item/${itemId}`, item);

      if (res.status === 200) {
        navigate('/');
        toast.success('Atualizado com sucesso!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark'
        });
      }

      navigate('/alter-items');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        if (itemId) {
          const response = await api.get(`/management-item/get-item/${itemId}`);
          console.log(response.data);

          if (response.data) {
            const { name, description, price } = response.data;
            setItem({
              itemName: name,
              itemDescription: description,
              itemPrice: price
            });
          }
        }
      } catch (error) {
        console.log('API Error:', error);
      }
    };
    fetchItemDetails();
  }, [itemId]);

  return (
    <div className="update-all-item-container">
      <Drawer />
      <div className="update-item-container">
        <Title title="Update a Item To The Menu" />
        <div className="update-item-main">
          <div className="update-item-main-img">
            <img src={Menu} alt="Menu" />
          </div>
          <form>
            <input
              className="input"
              type="text"
              placeholder="Item Name"
              value={item.itemName}
              onChange={handleChange}
              name="itemName"
            />
            <input
              className="input"
              type="text"
              placeholder="Item Description"
              value={item.itemDescription}
              onChange={handleChange}
              name="itemDescription"
            />
            <input
              className="input"
              type="number"
              placeholder="Item Price"
              value={item.itemPrice}
              onChange={handleChange}
              name="itemPrice"
            />
            <button onClick={(e) => handleClick(e)}>Update</button>
          </form>
        </div>
      </div>
    </div>
  );
}
