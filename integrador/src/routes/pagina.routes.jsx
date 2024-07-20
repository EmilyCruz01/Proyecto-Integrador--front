import {Routes, Route} from "react-router-dom";

import Login from "../pages/Login.jsx";
import CrearUsuario from "../pages/CrearCuenta.jsx";
import ContraseniaOlvidada from "../pages/ContraseniaOlvidada.jsx";

import Menu from '../pages/Menu.jsx';
import Chequeo from "../pages/Chequeo.jsx";
import Monitoreo from "../pages/Monitoreo.jsx";

// import MenuGraficas from './pages/MenuGraficas';
// import GraficaBarras from './pages/GraficaBarras';
// import GraficaCirculo from './pages/GraficaCirculo';

const Rutas =() =>{
    return(
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/crearUsuario" element={<CrearUsuario/>}/>
        <Route path="/contraseniaOlvidada" element={<ContraseniaOlvidada/>}/> 
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/chequeo" element={<Chequeo/>}/>
        <Route path="/monitoreo" element={<Monitoreo/>}/>
    </Routes>
    )
}
export default Rutas;