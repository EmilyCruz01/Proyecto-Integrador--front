import Navbar from '../components/Menu/Navbar';
import Button from '../components/Menu/MenuBoton';
import Madurez from'../assets/img/🦆 icon _pie chart_.png'
import Peso from '../assets/img/🦆 icon _arrow up graph increase_.png'
import '../styles/pages.style/menuGraficas.css'

const MenuGraficas = () => {
  return (
    <div className="containerMenuGra">
    <Navbar />
    <div className="buttons-container">
        <div>
          <a href="../pages/GraficaCirculo.jsx">
        <Button icon={<img src={Madurez} alt="Madurez" />} text="Madurez" />
        </a>
        </div>
        <div>
          <a href="../pages/GraficaBarras.jsx">
        <Button icon={<img src={Peso} alt="Peso" />} text="Peso" />
        </a>
        </div>
      
    </div>
  </div>
  );
}

export default MenuGraficas;
