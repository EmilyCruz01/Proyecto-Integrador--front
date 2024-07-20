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
    </nav>
  );
};

export default Navbar;
