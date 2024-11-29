import React from 'react';
import '../pages/home/menu.css'

//*********image************** */
import  carrinho from '../assets/icons/white cart.svg'
function DishCard({ image, name, cost }) {
  return (
    <form className="dishes-all">
      <img id="dish_photo" src={image} alt={name} />
      <h3 className="dish_name">{name}</h3>
      <p className="cost">{cost}</p>
      <div id="choice_size">
        <input type="radio" name="size" />
        <p>Grande</p>
        <input type="radio" name="size" />
        <p>Junior</p>
      </div>
      <button type="submit">
        <a className="add" href="">
          <img src={carrinho} alt="Adicionar ao carrinho" />
          ADICIONAR
        </a>
      </button>
    </form>
  );
}

export default DishCard;
