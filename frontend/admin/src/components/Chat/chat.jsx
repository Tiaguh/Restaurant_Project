import React from 'react'
import Header from '../Header/header'
import Title from '../Title/title'
import './chat.css'

function chat() {
  return (
    <div className='chat-container-all'>
      <Header />

      <Title title="Chat" />
      <div className="chat-container">
      </div>

    </div>
  )
}

export default chat