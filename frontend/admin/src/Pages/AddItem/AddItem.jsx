import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import Drawer from '../../components/Drawer/Drawer';
import Title from '../../components/Title/Title';

import './AddItem.css';
import Menu from './img/menu.png';

import api from '../../api.js';
import { toast } from 'react-toastify';
import { MdInsertPhoto } from "react-icons/md";

import { storage } from '../../firebase';

export default function AddItem() {
  const navigate = useNavigate();

  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [itemImage, setItemImage] = useState(null);

  const [color, setColor] = useState("#000");

  const handleHover = () => {
    setColor((prevColor) => (prevColor === "#000" ? "#FFF" : "#000"));
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setItemImage(e.target.files[0]);
    }
  };

  async function handleAddItem(e) {
    e.preventDefault();

    if (!itemName || !itemDescription || !itemPrice || !itemImage) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    try {
      const storageRef = ref(storage, `items/${itemImage.name}`);
      const uploadTask = uploadBytesResumable(storageRef, itemImage);

      uploadTask.on(
        (error) => {
          alert('Erro ao fazer upload da imagem.');
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            const data = {
              itemName,
              itemDescription,
              itemPrice,
              imageUrl: downloadURL
            };

            const response = await api.post('/management-item/add-item', data);

            if (response.status === 200) {
              toast.success('Successful Add!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });

              navigate("/menu");
            } else {
              alert('Erro ao adicionar. Tente novamente.');
            }
          }).catch((error) => {
            alert(`Erro ao obter URL da imagem. Tente novamente. \n Erro: ${error}`);
          });
        }
      );
    } catch (error) {
      alert(`Erro ao adicionar. Tente novamente. \n Erro: ${error}`);
    }
  }

  return (
    <div className='add-all-item-container'>
      <Drawer />
      <div className="add-item-container">
        <Title title="Add a New Item To The Menu" />
        <div className="add-item-main">
          <div className="add-item-main-img">
            <img src={Menu} alt='Menu' />
          </div>
          <form encType="multipart/form-data">
            <input
              className='input'
              type="text"
              placeholder='Item Name'
              value={itemName}
              onChange={e => setItemName(e.target.value)}
            />
            <input
              className='input'
              type="text"
              placeholder='Item Description'
              value={itemDescription}
              onChange={e => setItemDescription(e.target.value)}
            />
            <input
              className='input'
              type="number"
              placeholder='Item Price'
              value={itemPrice}
              onChange={e => setItemPrice(e.target.value)}
            />
            <input
              type="file"
              accept="image/*"
              id="fileInput"
              onChange={handleFileChange}
            />
            <label
              className='input-upload-file'
              htmlFor="fileInput"
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
            >
              <MdInsertPhoto color={color} size={35} />
              Escolha o Arquivo
            </label>
            <button onClick={handleAddItem}>Add</button>
          </form>
        </div>
      </div>
    </div>
  );
}
