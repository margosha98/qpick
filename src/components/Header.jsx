import React from 'react';
import heart from '../assets/heart.svg';
import cart from '../assets/cart.svg';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const cartItemsCount = useSelector((state) => state.cart.totalCount);
  const heartItemsCount = useSelector((state) => state.heart.totalCount);

  return (
    <header className="header">
      <NavLink to="/" className="header__logo">
        QPICK
      </NavLink>
      <NavLink to="/heart" className="btn-count btn-count_left">
        <img className="btn-count__img" src={heart} alt="like.img"></img>
        <span className="btn-count__text">{heartItemsCount}</span>
      </NavLink>
      <NavLink to="/cart" className="btn-count">
        <img className="btn-count__img" src={cart} alt="cart.img"></img>
        <span className="btn-count__text">{cartItemsCount}</span>
      </NavLink>
    </header>
  );
}

export default Header;
