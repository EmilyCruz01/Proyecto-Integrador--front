import Navbar from '../components/Menu/Navbar';
import Tabla from '../components/Monitoreo/Tabla';
import '../styles/pages.style/monitoreo.css';
import { useRef, useState,useEffect } from 'react';
import io from "socket.io-client";

const Monitoreo = () => {
  const [verdesData, setVerdesData] = useState([]);
  const [madurosData, setMadurosData] = useState([]);

  const videoRef = useRef(null);
  const [stream, setStream] = useState(null);

  useEffect(() => {
    const socket = io("https://socket-server.dreamapp.com.mx");

    socket.on("monitorings", (data) => {
      console.log(data);
      if (data.box === "Maduros") {
        setMadurosData(prevData => [...prevData, data.data]);
      } else if (data.box === "Verdes") {
        setVerdesData(prevData => [...prevData, data.data]);
      }
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const handleStartCamera = () => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
        setStream(stream);
      })
      .catch((err) => {
        console.error("Error accessing camera: ", err);
      });
  };

  const handleStopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      videoRef.current.srcObject = null;
      setStream(null);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="monitoreo">
        <button onClick={handleStartCamera}>Ver</button>
        <button onClick={handleStopCamera}>Detener</button>
        <video ref={videoRef} style={{ width: '100%', height: 'auto' }} autoPlay></video>
      </div>
      <div className='monitoreoTablas' style={{display: 'flex'}}>
        <div className='tablaVerde'  ><Tabla titulo="Verdes" data={verdesData} /></div>
        <div className='tablaMaduro' ><Tabla titulo="Maduros" data={madurosData} /></div>
      </div>
    </div>
  );
};

export default Monitoreo;