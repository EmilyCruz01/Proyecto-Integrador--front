import "../styles/pages.style/chequeo.css";
import Navbar from "../components/Menu/Navbar";
import { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3001");

const Chequeo = () => {
  const [bananasData, setBananasData] = useState({
    date: '',
    time: '',
    color: '',
    classification: ''
  });

  useEffect(() => {
    socket.on("bananas", (data) => {
      console.log("Received data:", data);
      setBananasData(data);
    });
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
        <div>
        <section className="infoChequeo">
          
          <h1 id="tituloChequeo">Chequeo</h1>
          <div>
            
            <div className="camposChequeo">
              <h3>Fecha:</h3>
             
            </div>
            <div className="camposChequeo">
              <h3>Hora:</h3>
              
            </div>
            <div className="camposChequeo">
                <h3>Color:</h3>
                
            </div>
            <div className="camposChequeo">
              <h3>Categoría:</h3>
             
            </div>
          </div>
        </section>
        </div>
        <div className="DatosInput">
       
         <input 
                type="text" 
                name="categoria" 
                value={bananasData.date} 
                onChange={handleChange} 
                className="datosChequeo"
              />
        <input 
                type="text" 
                name="fecha" 
                value={bananasData.time} 
                onChange={handleChange} 
                className="datosChequeo"
              />
        <input
                type="text"
                name="peso" 
                value={bananasData.color} 
                onChange={handleChange} 
                className="datosChequeo"
              />
        <input 
                type="text" 
                name="peso" 
                value={bananasData.classification} 
                onChange={handleChange} 
                className="datosChequeo"
              />
        </div>
        
      </div>
      <button id='checarButton'>Checar</button>
    </div>
  );
};

export default Chequeo;