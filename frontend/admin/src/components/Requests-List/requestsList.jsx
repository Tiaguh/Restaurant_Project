import React from 'react'
import './requestsList.css'

function requestsList(props) {
  return (
    <div className='requestsList-container'>
        <div className="requestsList-cards">
            <h1>{props.orderType}</h1>
            <h2>{props.orderId}</h2>
            <h3>{props.paymentMethod}</h3>
            <p>{props.address}</p>
        </div>
    </div>
  )
}

export default requestsList