import {Routes, Route} from "react-router-dom";

import Login from "../pages/Login.jsx";
import CrearUsuario from "../pages/CrearCuenta.jsx";
import ContraseniaOlvidada from "../pages/ContraseniaOlvidada.jsx";

// import Menu from './pages/Menu';
// import Chequeo from './pages/Chequeo';
// import Monitoreo from './pages/Monitoreo';

// import MenuGraficas from './pages/MenuGraficas';
// import GraficaBarras from './pages/GraficaBarras';
// import GraficaCirculo from './pages/GraficaCirculo';

const Rutas =() =>{
    return(
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/crearUsuario" element={<CrearUsuario/>}/>
        <Route path="/contraseniaOlvidada" element={<ContraseniaOlvidada/>}/> 
    </Routes>
    )
}
export default Rutas;