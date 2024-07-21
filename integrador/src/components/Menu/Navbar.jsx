<<<<<<< HEAD
import '../../styles/Components.style/Navbar.css';
import Ajustes from '../../assets/img/configIcon.png'
import Salir from '../../assets/img/logoutIcon.png'
const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="navbar-brand">Fresh-Inspect</div>
    <div className="navbar-links">
      <a href="#">Chequeo</a>
      <span className="navbar-divider">|</span>
      <a href="#">Gráficas</a>
      <span className="navbar-divider">|</span>
      <a href="#">Monitoreo</a>
    </div>
    <div className="navbar-settings">
        <img src={Ajustes} alt="Settings" className="settings-icon" />
        <img src={Salir} alt="Profile" className="profile-icon" />
      </div>
=======
import React from 'react';
import { Link } from 'react-router-dom';
import "../../styles/pages.style/navbar.css";
import logoutIcon from "../../assets/img/logoutIcon.png"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="logo">
        <li>
          <Link to={"/menu"}><h1>Fresh-Inspect</h1></Link>
        </li>
      </ul>
      <ul className="nav-links">
        <li className='navOpc'>
          <Link to={"/chequeo"}>Chequeo</Link>
        </li>
        <li className='navOpc'>
          <Link to={"/gráficas"}>Gráficas</Link>
        </li>
        <li className='navOpc'>
          <Link to={"/monitoreo"}>Monitoreo</Link>
        </li>
      </ul>
      <ul className="logout">
        <li>
          <Link to="/"><img id='salir' src={logoutIcon} alt="Salir" /></Link>
        </li>
      </ul>
>>>>>>> 1be16bd328bfe0b7fa8ef34ac310a8735ff83b63
    </nav>
  );
}

export default Navbar;
