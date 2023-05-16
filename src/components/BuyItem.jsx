import React from 'react';
import trash from '../assets/trash.png';

import plus from '../assets/plus.png';
import minus from '../assets/minus.png';
import { useDispatch } from 'react-redux';
import { decrementItem, deleteItem, incrementItem } from '../store/cartSlice';

function BuyItem({ item }) {
  let { title, img, price, count } = item;

  const dispatch = useDispatch();
  return (
    <article className="buy-item">
      <button onClick={() => dispatch(deleteItem(title))} className="buy-item__delete">
        <img src={trash} className="img_small" alt="delete"></img>
      </button>
      <div className="buy-item__info">
        <img className="img" src={img} alt="headph" />
        <div className="buy-item__titles">
          <span className="buy-item__title">{title}</span>
          <span className="buy-item__price text_gray ">{price} Р</span>
        </div>
      </div>
      <div className="buy-item__params">
        <div className="counts-container">
          <button onClick={() => dispatch(decrementItem(title))}>
            <img src={minus} alt="decr" />
          </button>
          <span>{count}</span>
          <button onClick={() => dispatch(incrementItem(title))}>
            <img src={plus} alt="incr" />
          </button>
        </div>
        <span>{item.count * item.price} Р</span>
      </div>
    </article>
  );
}

export default BuyItem;
