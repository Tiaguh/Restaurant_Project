import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import './Home.css';

export default function Home() {
  const [hour, setHour] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const currentTime = () => {
    const data = new Date();
    const hour = data.getHours();
    const minutes = data.getMinutes();
    const seconds = data.getSeconds();

    setHour(hour);
    setMinutes(minutes);
    setSeconds(seconds);
  };

  useEffect(() => {
    const interval = setInterval(() => currentTime(), 1000);

    return () => {
      clearInterval(interval);
    }
  }, [])

  return (
    <div className='management-container'>

      <Header />

      <div className='management-main'>

        <h1>{hour} : {minutes} : {seconds}</h1>

      </div>

    </div>
  );
}