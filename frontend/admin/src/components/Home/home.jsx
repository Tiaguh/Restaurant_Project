import { React, useState, useEffect } from 'react'
import Header from '../Header/header'
import './home.css'

export default function Home() {

  const [hour, setHour] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  const currentTime = () => {
    let data = new Date();

    let hour = data.getHours();
    let minutes = data.getMinutes();
    let seconds = data.getSeconds();

    setHour(hour)
    setMinutes(minutes)
    setSeconds(seconds)
  }

  useEffect(() => {
    currentTime()
  }, [])

  return (
    <div className='management-container'>
      <Header />
      <div className="management-main">
        <h1>{hour} : {minutes} : {seconds}</h1>
        {/* <button onClick={currentTime}>Testar</button> */}
      </div>
    </div>
  )
}