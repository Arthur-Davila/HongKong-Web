import React from 'react';
import Header from './components/Header';
import DishCard from './components/DishCard';
import Sobrenos from './components/Sobrenos'
import './pages/home/home.css';// Importe o CSS que você usava

//*****************importar as imagens***********************
import Yaksoba from './assets/img/plate_img/Yaksoba-removebg-preview.png'
import YaksobaFundo from './assets/img/plate_img/Yaksoba_com_fundo.jpeg'
import carne from './assets/img/plate_img/chopsuey_com_arroz.jpeg'
import aparmegiana from './assets/img/plate_img/aparmegiana_com_macarrao.jpeg'
import frango from './assets/img/plate_img/bolinho_de_frango_arroz_e_batata.jpeg'
import yakFritas from './assets/img/plate_img/Chopsuey_com_batata.jpeg'
import bifum from './assets/img/plate_img/Bifum _de_camarão.jpeg'
import camarao from './assets/img/plate_img/Camarao_com_arroz.jpeg'
import xadrez from './assets/img/plate_img/Frango_xadrez_com_arroz.jpeg'
import empanado from './assets/img/plate_img/Bolinhos_de_frango_com_arroz.jpeg'
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
              image={aparmegiana}
              name="Frango à parmegiana"
              cost="R$00,00"
            />
            <DishCard 
              image={frango}
              name="Frango empanado com fritas"
              cost="R$00,00"
            />

            <DishCard 
              image={yakFritas}
              name="Yakisoba com fritas"
              cost="R$00,00"
            />
            <DishCard 
              image={bifum}
              name="Bifum"
              cost="R$00,00"
            />
            <DishCard 
              image={camarao}
              name="Camarões ao molho de tomate"
              cost="R$00,00"
            />
            <DishCard 
              image={xadrez}
              name="Frango xadrez"
              cost="R$00,00"
            />
            <DishCard 
              image={empanado}
              name="Frango empanado"
              cost="R$00,00"
            />
            
            
            {/* Adicione mais DishCard conforme necessário */}
          </div>
        </section>
        <section id='about'></section>
          <Sobrenos/>
      </main>
    </div>
  );
}

export default App;
