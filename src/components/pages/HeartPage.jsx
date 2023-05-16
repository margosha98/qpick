import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import EmptyCart from '../EmptyCart';
import HeartItem from '../HeartItem';
import { addItem, toogleHeart } from '../../store/cartSlice';
import { deleteItemFromHeart } from '../../store/heartSlice';
import EmptyHearts from '../EmptyHearts';

function HeartPage() {
  const { heartItems } = useSelector((state) => state.heart);

  const addAllToCart = (heartItems) => {
    heartItems.map((el) => {
      dispatch(addItem(el));
      dispatch(deleteItemFromHeart(el.title));
      dispatch(toogleHeart(el));
    });
  };

  const dispatch = useDispatch();
  return (
    <div className="cart">
      <h2>Избранное</h2>
      {heartItems.length !== 0 ? (
        <div className="cart__body">
          <div className="cart__items">
            {heartItems.map((el) => (
              <HeartItem item={el} />
            ))}
          </div>
          <div className="total">
            <div className="total__price"></div>
            <button onClick={() => addAllToCart(heartItems)} className="total__btn">
              Добавить все товары в корзину
            </button>
          </div>
        </div>
      ) : (
        <EmptyHearts />
      )}
    </div>
  );
}

export default HeartPage;
