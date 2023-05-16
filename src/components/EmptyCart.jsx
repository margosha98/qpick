import React from 'react';
import shopcart from '../assets/shop.png';
import { NavLink } from 'react-router-dom';

function EmptyCart() {
  return (
    <div className="empty-page">
      <h2 className="empty-page__title">В корзине еще нет товаров</h2>
      <NavLink to="/">
        <h2 className="empty-page__title empty-page__title_link">
          Нажмите, чтобы вернуться к покупкам
        </h2>
      </NavLink>
      <img className="empty-page__img" src={shopcart} alt="img" />
    </div>
  );
}

export default EmptyCart;
