import "../styles/pages.style/chequeo.css";
import Navbar from "../components/Menu/Navbar";
import { useState, useEffect } from "react";
import io from "socket.io-client";

const Chequeo = () => {
  const [bananasData, setBananasData] = useState({
    classification: '',
    date: '',
    time: ''
  });

  useEffect(() => {
    const socket = io("https://socket-server.dreamapp.com.mx");

    socket.on("bananas", (data) => {
      alert("Racibido")
      console.log(data);
      setBananasData(data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBananasData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div>
      <Navbar />
      <div className="chequeo">
        <section className="infoChequeo">
          <h1 id="tituloChequeo">Chequeo</h1>
          <div>
            <div className="camposChequeo">
              <h3>Categoría:</h3>
              <input 
                type="text" 
                name="peso" 
                value={bananasData.classification} 
                onChange={handleChange} 
                className="datosChequeo"
              />
            </div>
            <div className="camposChequeo">
              <h3>Fecha:</h3>
              <input 
                type="text" 
                name="categoria" 
                value={bananasData.date} 
                onChange={handleChange} 
                className="datosChequeo"
              />
            </div>
            <div className="camposChequeo">
              <h3>Hora:</h3>
              <input 
                type="text" 
                name="fecha" 
                value={bananasData.time} 
                onChange={handleChange} 
                className="datosChequeo"
              />
            </div>
          </div>
        </section>
        <button id='checarButton'>Checar</button>
      </div>
    </div>
  );
};

export default Chequeo;