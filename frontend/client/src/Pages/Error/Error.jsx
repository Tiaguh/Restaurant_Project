import React from 'react'
import './Error.css'

import Chef from './img/chef-picture.png'

export default function Error() {
  return (
    <div className='container-error'>

      <img src={Chef} />

      <h1>Page is not found</h1>

    </div>
  )
}