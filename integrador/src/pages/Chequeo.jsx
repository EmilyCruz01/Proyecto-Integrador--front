import "../styles/pages.style/chequeo.css"
import Navbar from "../components/Menu/Navbar"
import { useEffect } from "react";
import io from "socket.io-client";

const Chequeo = () =>{
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
    return(
        <div>
            <Navbar />
            <div className="chequeo">
           <section className="infoChequeo">
            <h1 id="tituloChequeo">Chequeo</h1>
            <div>
            <div  className="camposChequeo">
            <h3>Peso:</h3>
            <h3 className="datosChequeo">AQUI VA EL PESO</h3>
            </div>
            <div className="camposChequeo">
            <h3>Categoría:</h3>
            <h3 className="datosChequeo">AQUI VA LA CATEGORIA</h3>
            </div>
            <div className="camposChequeo">
            <h3>Fecha:</h3>
            <h3 className="datosChequeo">AQUI VA LA FECHA</h3>
            </div>
            </div>
           </section>
           <button id='checarButton'>Checar</button>
           </div>
        </div>
    );
};

export default Chequeo;
