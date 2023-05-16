import React from 'react';
import heart from '../assets/heartblack.svg';

import { NavLink } from 'react-router-dom';

function EmptyHearts() {
  return (
    <div className="empty-page">
      <h2 className="empty-page__title">В избранном еще нет товаров</h2>
      <NavLink to="/">
        <h2 className="empty-page__title empty-page__title_link">
          Нажмите, чтобы вернуться к товарам
        </h2>
      </NavLink>
      <img className="empty-page__img" src={heart} alt="img" />
    </div>
  );
}

export default EmptyHearts;
