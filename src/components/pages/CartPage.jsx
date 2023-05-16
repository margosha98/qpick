import React from 'react';
import BuyItem from '../BuyItem';
import { useSelector } from 'react-redux';
import EmptyCart from '../EmptyCart';

function CartPage() {
  const { cartItems, totalPrice } = useSelector((state) => state.cart);
  return (
    <div className="cart">
      <h2>Корзина</h2>
      {cartItems.length !== 0 ? (
        <div className="cart__body">
          <div className="cart__items">
            {cartItems.map((el) => (
              <BuyItem item={el} />
            ))}
          </div>
          <div className="total">
            <div className="total__price">
              <span>ИТОГО</span>
              <span>P {totalPrice}</span>
            </div>
            <button className="total__btn">Перейти к оформлению</button>
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
}

export default CartPage;
