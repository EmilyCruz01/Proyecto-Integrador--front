import { Link } from 'react-router-dom';
import '../../styles/Components.style/Navbar.css';
import Ajustes from '../../assets/img/configIcon.png'
import Salir from '../../assets/img/logoutIcon.png'
const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="navbar-brand">Fresh-Inspect</div>
    <div className="navbar-links">
      <Link to={"/chequeo"}>Chequeo</Link>
      <span className="navbar-divider">|</span>
      <Link to={"/menuGraficas"}>Grafica</Link>
      <span className="navbar-divider">|</span>
      <Link to={"/monitoreo"}>Monitoreo</Link>
    </div>
    <div className="navbar-settings">
        <img src={Ajustes} alt="Settings" className="settings-icon" />
        <img src={Salir} alt="Profile" className="profile-icon" />
      </div>

    </nav>
  );
}

export default Navbar;



