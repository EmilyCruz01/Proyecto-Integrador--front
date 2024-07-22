import Navbar from '../components/Menu/Navbar';
import Camara from '../components/Monitoreo/Camara';
import Tabla from '../components/Monitoreo/Tabla';
import '../styles/pages.style/monitoreo.css';
import { useEffect } from 'react';
import io from "socket.io-client";

const Monitoreo = () => {
  const datosVerdes = [
    { date: '2024-07-20', time: '10:00', temperature: 25, humidity: 60, weight: '30 gr', probabilidad:"3%" },
    { date: '2024-07-21', time: '11:00', temperature: 26, humidity: 62, weight: '32 gr', probabilidad:"5%" },
  ]

  const datosMaduros = [
    { date: '2024-07-20', time: '10:00', temperature: 28, humidity: 65, weight: '35 gr', probabilidad: "30%" },
    { date: '2024-07-21', time: '11:00', temperature: 29, humidity: 67, weight: '36 gr', probabilidad:"1%" },
  ]

  useEffect(() => {
    const socket = io("https://socket-server.dreamapp.com.mx");

    socket.on("bananas", (data) => { 
      alert("Recibido: ");
      console.log(data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const videoSrc = 'http//ruta-video'; 

  return (
    <div>
      <Navbar />
      <div className="monitoreo">
        <Camara src={videoSrc} />
      </div>
      <Tabla titulo="Verdes" data={datosVerdes} />
      <Tabla titulo="Maduros" data={datosMaduros} />
    </div>
  );
};

export default Monitoreo;