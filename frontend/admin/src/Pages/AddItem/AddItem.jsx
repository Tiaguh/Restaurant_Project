import React from 'react'
import Menu from './img/menu.png'
import Header from '../../components/Header/Header'
import Title from '../../components/Title/Title'

import './AddItem.css'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import api from '../../api.js'
import { toast } from 'react-toastify';

// import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
// import { storage } from '../../Firebase'

export default function AddItem() {
  const navigate = useNavigate()

  const [itemName, setItemName] = useState('')
  const [itemDescription, setItemDescription] = useState('')
  const [itemPrice, setItemPrice] = useState('')

  console.log(itemName, itemDescription, itemPrice);

  // const [imgURL, setImgURL] = useState('')
  // const [progress, setProgress] = useState(0)


  // const handleUpload = (e) => {
  //   e.preventDefault()

  //   const file = e.target[0]?.files[0]

  //   if (!file) return;

  //   const storageRef = ref(storage, `img/${file.name}`)
  //   const uploadTask = uploadBytesResumable(storageRef, file)

  //   uploadTask.on(
  //     "state_changed",

  //     snapshot => {
  //       const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  //       setProgress(progress)
  //     },

  //     error => {
  //       alert(error)
  //     },

  //     () => {
  //       getDownloadURL(uploadTask.snapshot.ref).then(url => {
  //         setImgURL(url)
  //       })
  //     }

  //   )
  // }

  async function handleAddItem(e) {

    e.preventDefault()

    try {
      const data = {
        itemName, itemDescription, itemPrice
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

  // function handleClick() {
  //   handleAddItem();
  //   handleUpload()
  // }

  return (
    <div className='add-all-item-container'>

      <Header />

      <div className="add-item-container">
        
      <Title title="Add a New Item To The Menu" />

        <div className="add-item-main">

          <div className="add-item-main-img">
            <img src={Menu} alt='Menu' />
          </div>

          <form>
            
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

            {/* <input type="file" />

            {!imgURL && <progress value={progress} max="100" />}
            {imgURL && <img src={imgURL} alt="Imagem" />} */}

            <button onClick={handleAddItem}>Add</button>
          </form>
        </div>

      </div>
    </div>
  )
}