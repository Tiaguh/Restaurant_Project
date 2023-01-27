import React from 'react'
import RequestsList from '../Requests-List/requestsList'
import Header from '../Header/header'
import './requests.css'

function requests() {
  return (
    <div className='requests-container'>
      <Header />

      <div className="requests-main">

        <div className="requests-title">
          <h1>Requests</h1>
        </div>

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