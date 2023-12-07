import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Drawer from '../../components/Drawer/Drawer'
import Title from '../../components/Title/Title'

import './AddItem.css'

import Menu from './img/menu.png'

import api from '../../api.js'
import { toast } from 'react-toastify';

import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../firebaseConfig"

export default function AddItem() {
  const navigate = useNavigate()

  const [itemName, setItemName] = useState('')
  const [itemDescription, setItemDescription] = useState('')
  const [itemPrice, setItemPrice] = useState('')
  const [imgUrl, setImgUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const [itemImage, setItemImage] = useState(null);

  const handleUpload = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const storageRef = ref(storage, `images/${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file)

    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        setProgress(progress)
      },
      error => {
        alert(error)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgUrl(downloadURL);
        });
      }
    )

    setItemImage(file);
  };

  async function handleAddItem(e) {

    e.preventDefault()

    if (!itemName || !itemDescription || !itemPrice) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    try {
      const data = {
        itemName, itemDescription, itemPrice, itemImage
      }

      console.log(data);

      const response = await api.post('/management-item/add-item', data)

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

        navigate("/menu")
      }
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
              className='input'
              type="file"
              accept="image/*"
              onChange={handleUpload}
              id="fileInput"
            />
            <label htmlFor="fileInput">Choose a file</label>

            {!imgUrl && <p>{progress}%</p>}
            {imgUrl && <img src={imgUrl} alt="Imagem" height={200} />}

            <button onClick={handleAddItem}>Add</button>

          </form>

        </div>

      </div>
    </div>
  )
}