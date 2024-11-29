import React from 'react';
import Header from './components/Header';
import DishCard from './components/DishCard';
import './pages/home/home.css';// Importe o CSS que você usava

//*****************importar as imagens***********************
import Yaksoba from './assets/img/plate_img/Yaksoba-removebg-preview.png'
import YaksobaFundo from './assets/img/plate_img/Yaksoba_com_fundo.jpeg'
import carne from './assets/img/plate_img/chopsuey_com_arroz.jpeg'
function App() {
  return (
    <div>
      <Header />
      <main id="content">
        <section id="home">
          <div id="cta">
            <h1>Yakisoba? É a nossa especialidade! Experimente o nosso prato mais pedido!</h1>
            <div id="cta_btn">
              <a href="#" id="order">Peça agora</a>
            </div>
          </div>
          <div id="banner">
            <div className="shape" id="rect1"></div>
            <div className="shape" id="rect2"></div>
            <div className="shape" id="rect3"></div>
            <img src={Yaksoba} alt="yaksoba" />
          </div>
        </section>

        <section id="menu">
          <div id="line">
            <div id="l1"></div>
            <h1>CARDÁPIO</h1>
            <div id="l2"></div>
          </div>
          <div id="dishes">
            <DishCard 
              image={YaksobaFundo}
              name="Yakisoba tradicional"
              cost="R$00,00"
            />
            <DishCard 
              image={carne}
              name="Carne acebolada e risoto"
              cost="R$00,00"
            />
            <DishCard 
              image="assets/img/plate_img/aparmegiana_com_macarrao.jpeg"
              name="Frango à parmegiana"
              cost="R$00,00"
            />
            {/* Adicione mais DishCard conforme necessário */}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
