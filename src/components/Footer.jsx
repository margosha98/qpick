import React from 'react';
import lang from '../assets/lang.png';
import vk from '../assets/vk.png';
import telegram from '../assets/telegram.png';
import whats from '../assets/whatsapp.png';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <NavLink to="/">
        <h2 className="h2">QPICK</h2>
      </NavLink>
      <div className="footer__links">
        <NavLink to="/heart">Избранное</NavLink>
        <NavLink to="/cart">Корзина</NavLink>
        <a href="#">Контакты</a>
      </div>
      <div className="footer__links">
        <a href="#">Условия сервиса</a>
        <div className="footer__links_icons">
          <img className="footer__img" src={lang} alt="lang.img" />
          <a className="link_active"> Рус</a>
          <a>Eng</a>
        </div>
      </div>
      <div className="footer__links footer__links_icons mes">
        <a href="#">
          <img src={vk} alt="mes-img" />
        </a>
        <a href="#">
          <img src={telegram} alt="mes-img" />
        </a>
        <a href="#">
          <img src={whats} alt="mes-img" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
