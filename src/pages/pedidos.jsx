import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa o Link do React Router
import '../css/pages/pedidos/pedidos_style.css'; // Importe o CSS

function App() {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      <header>
        <nav id="nav_bar">
          <div id="logo">
            <img src="/assets/icons/HONG.svg" alt="Hong" />
            <img src="/assets/icons/KONG.svg" alt="Kong" />
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
            <span id="search-bar">
              <input id="search" type="text" placeholder="Pesquisa" />
              <img src="/assets/icons/search.svg" alt="" />
            </span>
            <button id="cart">
              <img src="/assets/icons/red cart.svg" alt="" />
            </button>
            {/* Usando Link para navegação */}
            <Link to="/login">
              <button id="login-btn">Entrar</button>
            </Link>
          </div>
        </nav>
      </header>

      <div className="container">
        <div className="card">
          <div className="image">
            <img
              src="/assets/img/plate_img/Camarao_com_arroz.jpeg"
              alt="Camarões ao molho de tomate"
            />
          </div>
          <div className="info">
            <h2>Camarões ao molho de tomate</h2>
            <p>Porção individual</p>
            <div className="quantity-price">
              <div className="quantity">
                <button onClick={decreaseQuantity}>-</button>
                <span>{quantity}</span>
                <button onClick={increaseQuantity}>+</button>
              </div>
              <div className="price">R$ 00,00</div>
            </div>
            <div className="observation">
              <p>
                <strong>Observação:</strong>
              </p>
              <p>
                Coloque aqui sua observação especial, permitida no pedido de pratos.
              </p>
            </div>
          </div>
        </div>

        <div className="actions">
          <details className="login-summary">
            <summary>✔️ Finalizar Pedido</summary>
            <div className="login-message">
              <p>
                Ops! Para finalizar o seu pedido, você deve entrar na sua conta!
              </p>
              <button className="login-button">Entre na sua conta</button>
              <div className="divider">
                <span></span> ou <span></span>
              </div>
              <button className="register-button">Registre-se agora mesmo</button>
            </div>
          </details>

          <p>ou</p>

          <details className="finish-summary">
            <summary>
              <img
                src="/assets/icons/white cart.svg"
                alt="Carrinho de compras"
                style={{ width: '16px', height: '16px' }}
              />
              Continuar comprando
            </summary>
            <div className="finish-message">
              <p>Pedido finalizado!</p>
              <img src="/assets/icons/red check.svg" alt="check vermelho" />
              <p>Obrigado pela preferência. Tenha uma boa refeição!</p>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
}

export default App;

