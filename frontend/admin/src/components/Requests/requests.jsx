import React from 'react'
import RequestsList from '../Requests-List/requestsList'
import Header from '../Header/header'
import Title from '../Title/title'
import './requests.css'

function requests() {
  return (
    <div className='requests-container'>
      <Header />

      <Title title="Requests" />

      <div className="requests-main">
        <RequestsList
          RequestsList="Pizza"
          orderId="1"
          paymentMethod="debt"
          address="7759 Greystone Drive Vicksburg, MS 39180" />
      </div>
    </div>
  )
}

export default requests