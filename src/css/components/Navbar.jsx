import React from 'react';
import HONG from '../assets/icons/HONG.svg';
import KONG from '../assets/icons/KONG.svg';
import '../css/components/header.css';

const Navbar = () => {
  return (
    <header>
      <nav id="nav_bar">
        <div id="logo">
          <img src={HONG} alt="Hong" />
          <img src={KONG} alt="Kong" />
        </div>
        <ul id="nav_list">
          <li className="nav-items">
            <a href="#menu">Cardápio</a>
          </li>
          <li className="nav-items">
            <a href="#contact">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;