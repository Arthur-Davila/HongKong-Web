import React from 'react';
import '../css/pages/home/menu.css';

const dishes = [
  {
    id: 1,
    name: 'Yakisoba tradicional',
    price: 'R$00,00',
    imgSrc: '/assets/img/plate_img/Yaksoba_com_fundo.jpeg',
    altText: 'Yakisoba tradicional'
  },
  {
    id: 2,
    name: 'Frango à parmegiana',
    price: 'R$00,00',
    imgSrc: '/assets/img/plate_img/aparmegiana_com_macarrao.jpeg',
    altText: 'Parmegiana com macarrão'
  },
  {
    id: 3,
    name: 'Camarões ao molho de tomate',
    price: 'R$00,00',
    imgSrc: '/assets/img/plate_img/Camarao_com_arroz.jpeg',
    altText: 'Camarões ao molho de tomate'
  },
  {
    id: 4,
    name: 'Sushi de salmão',
    price: 'R$00,00',
    imgSrc: '/assets/img/plate_img/Sushi_de_salmao.jpeg',
    altText: 'Sushi de salmão'
  },
  {
    id: 5,
    name: 'Frango xadrez',
    price: 'R$00,00',
    imgSrc: '/assets/img/plate_img/Frango_xadrez_com_arroz.jpeg',
    altText: 'Frango xadrez'
  },
];

const Menu = () => {
  return (
    <section id="menu">
      <div id="line">
        <div id="l1"></div>
        <h1>CARDÁPIO</h1>
        <div id="l2"></div>
      </div>
      <div id="dishes">
        {dishes.map(dish => (
          <form key={dish.id} className="dishes-all">
            <img id="dish_photo" src={dish.imgSrc} alt={dish.altText} />
            <h3 className="dish_name">{dish.name}</h3>
            <p className="cost">{dish.price}</p>
            <div id="choice_size">
              <input type="radio" name={`size-${dish.id}`} />
              <p>Grande</p>
              <input type="radio" name={`size-${dish.id}`} />
              <p>Junior</p>
            </div>
            <button>
              <a className="add" href="#">
                <img src="/assets/icons/white cart.svg" alt="Carrinho de compras" />
                ADICIONAR
              </a>
            </button>
          </form>
        ))}
      </div>
    </section>
  );
};

export default Menu;