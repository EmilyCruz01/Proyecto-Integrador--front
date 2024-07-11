import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={HOME}>Home</Link>
        </li>
        <li>
          <Link to={ABOUT}>About</Link>
        </li>
        <li>
          <Link to={CONTACT}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
