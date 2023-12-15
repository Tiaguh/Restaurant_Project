import React, { useState, useEffect } from 'react';
import './Home.css';

import Title from '../../components/Title/Title';
import Drawer from '../../components/Drawer/Drawer';

export default function Home() {
  const [hour, setHour] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const currentTime = () => {
    const data = new Date();
    const hour = data.getHours();
    const minutes = data.getMinutes().toString().padStart(2, '0');
    const seconds = data.getSeconds().toString().padStart(2, '0');

    setHour(hour);
    setMinutes(minutes);
    setSeconds(seconds);
  };

  useEffect(() => {
    const interval = setInterval(() => currentTime(), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='management-container'>
      <Drawer />
      <div className='management-main'>
        <Title title="Home" />
        <div className="clock-container">
          <h1>{hour} : {minutes} : {seconds}</h1>
        </div>
      </div>
    </div>
  );
}
