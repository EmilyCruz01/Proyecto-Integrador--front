import React from 'react';
import '../styles/nav.css'

const Nav = () => {
  return (
    <nav>
        <div id='logo'>
            <h1>Fresh-Inspect</h1>
        </div>

      <ul>
        <li><a href="/" >Chequeo</a></li>
        <li><a href="/">Gráficas</a></li>
        <li><a href="/">Monitoreo</a></li>
      </ul>
    </nav>
  );
};

export default Nav;
