import React, { useState, useEffect } from 'react';
import './Home.css';

import Title from '../../components/Title/Title';
import Drawer from '../../components/Drawer/Drawer';
import api from '../../api.js';

export default function Home() {
  const [hour, setHour] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const [report, setReport] = useState(null);

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

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const res = await api.get("/report/get-reports");
        setReport(res.data.reports);
      } catch (error) {
        console.log(error);
      }
    };
    fetchReports();
  }, []);

  return (
    <div className='management-container'>

      <Drawer />

      <Title title="Home" />

      <div className='management-main'>

        <div className="clock-container">
          <h1>{hour} : {minutes} : {seconds}</h1>
        </div>


        <div className="report">
          {report && (
            <>
              <h2>Lucro Total: R$ {report.sales}</h2>
              <h2>Total de Itens Vendidos: {report.sold}</h2>
            </>
          )}
        </div>

      </div>
    </div>
  );
}
