import React from 'react';
import star from '../assets/star.png';
import heartImg from '../assets/heart.svg';
import activeHeartImg from '../assets/heartActive.svg';
import { useDispatch } from 'react-redux';
import { addItem, toogleHeart } from '../store/cartSlice';
import { addItemToHeart, deleteItemFromHeart } from '../store/heartSlice';

function ShoppingItem({ item }) {
  let { img, price, title, rate, heart } = item;
  const dispatch = useDispatch();

  const changeHeartStatus = (newStatus) => {
    dispatch(toogleHeart(item));
    newStatus ? dispatch(addItemToHeart(item)) : dispatch(deleteItemFromHeart(item));
  };

  return (
    <article className="item">
      <div className="item__img-container">
        <img className="item__image" src={img} alt="item.img" />
      </div>
      <div className="info">
        <div className="info__part">
          <span className="text">{title}</span>
          <span className="text text_orange">{price} P</span>
        </div>
        <div className="info__part">
          <div className="info__rating">
            <img src={star} alt="star.img" />
            <span className="text text_gray">{rate}</span>
          </div>
          <div className="info__buttons">
            <button onClick={() => changeHeartStatus(!heart)}>
              <img src={heart ? activeHeartImg : heartImg} className="img" alt="heart.svg" />
            </button>
            <button onClick={() => dispatch(addItem(item))} className="item__btn text">
              Купить
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ShoppingItem;
