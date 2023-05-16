import React from 'react';
import ShoppingItem from './ShoppingItem';
import { useSelector } from 'react-redux';

function Category({ category }) {
  const { items } = useSelector((state) => state.cart);

  return (
    <section className="category">
      <h2 className="text text_gray">{category.titleCategory}</h2>
      <div className="items">
        {items
          .filter((el) => el.category === category.category)
          .map((el) => (
            <ShoppingItem key={el.title} item={el} />
          ))}
      </div>
    </section>
  );
}

export default Category;
