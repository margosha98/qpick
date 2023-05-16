import React from 'react';
import trash from '../assets/trash.png';
import { useDispatch } from 'react-redux';
import { deleteItemFromHeart } from '../store/heartSlice';
import { addItem, toogleHeart } from '../store/cartSlice';

function HeartItem({ item }) {
  let { title, img, price } = item;

  console.log(item);

  let goToCart = (item) => {
    dispatch(deleteItemFromHeart(title));
    dispatch(addItem(item));
    dispatch(toogleHeart(item));
  };

  let deleteFromHeart = () => {
    dispatch(deleteItemFromHeart(title));
    dispatch(toogleHeart({ ...item, heart: true }));
  };

  const dispatch = useDispatch();
  return (
    <article className="heart-item">
      <button onClick={() => deleteFromHeart()} className="buy-item__delete">
        <img src={trash} className="img_small" alt="delete"></img>
      </button>
      <div className="heart-item__info">
        <img className="img" src={img} alt="headph" />
        <div className="heart-item__titles">
          <span className="heart-item__title">{title}</span>
          <span className="heart-item__price text_gray ">{price} Р</span>
        </div>
        <button onClick={() => goToCart(item)} className="total__btn btn_small">
          Перенести в корзину
        </button>
      </div>
    </article>
  );
}

export default HeartItem;
