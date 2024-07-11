
import { BrowserRouter } from 'react-router-dom';
import Rutas from './routes/pagina.routes.jsx';
// import Nav from './components/Nav';
//hola

// import CrearUsuario from './pages/CrearUsuario';
// import ContraseniaOlvidada from './pages/ContraseniaOlvidada';

// import Menu from './pages/Menu';
// import Chequeo from './pages/Chequeo';
// import Monitoreo from './pages/Monitoreo';

// import MenuGraficas from './pages/MenuGraficas';
// import GraficaBarras from './pages/GraficaBarras';
// import GraficaCirculo from './pages/GraficaCirculo';
const App=()=> {
  return (
    <BrowserRouter>
    <Rutas/>
  </BrowserRouter>
  );
}

export default App;
