import Navbar from '../components/Menu/Navbar';
import Camara from '../components/Monitoreo/Camara';
import Tabla from '../components/Monitoreo/Tabla';
import '../styles/pages.style/monitoreo.css';
import { useState, useEffect } from 'react';
import io from "socket.io-client";

const Monitoreo = () => {
  const [verdesData, setVerdesData] = useState([]);
  const [madurosData, setMadurosData] = useState([]);

  useEffect(() => {
    const socket = io("https://socket-server.dreamapp.com.mx");

    socket.on("monitorings", (data) => {
      alert("Dato recibido");
      console.log(data);
      if (data.box === "Maduros") {
        setMadurosData(prevData => [...prevData, data]);
      } else if (data.box === "Verdes") {
        setVerdesData(prevData => [...prevData, data]);
      }
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const videoSrc = 'http://ruta-video'; 

  return (
    <div>
      <Navbar />
      <div className="monitoreo">
        <Camara src={videoSrc} />
      </div>
     <div style={{display:'flex'}}>
      <div style={{margin:'5%'}}><Tabla titulo="Verdes" data={verdesData} /></div>
      <div style={{margin:'5%'}}><Tabla titulo="Maduros" data={madurosData} /></div>
     </div>
      
      
    </div>
  );
};

export default Monitoreo;