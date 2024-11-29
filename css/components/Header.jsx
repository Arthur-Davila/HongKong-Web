import React from 'react';

function Header() {
  return (
    <header>
      <nav id="nav_bar">
        <div id="logo">
          <img src="assets/icons/HONG.svg" alt="Hong" />
          <img src="assets/icons/KONG.svg" alt="Kong" />
        </div>
        <ul id="nav_list">
          <li className="nav-items">
            <a href="#menu">Cardápio</a>
          </li>
          <li className="nav-items">
            <a href="#contact">Contato</a>
          </li>
          <li className="nav-items">
            <a href="#about">Sobre nós</a>
          </li>
        </ul>
        <div id="shortcuts">
          <button id="cart">
            <a href="#">
              <img src="assets/icons/red cart.svg" alt="Carrinho" />
            </a>
          </button>
          <a href="pages/login_register.html">
            <button id="login-btn">Entrar</button>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
