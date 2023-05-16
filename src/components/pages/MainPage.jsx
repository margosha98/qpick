import React from 'react';
import ShoppingItem from '../ShoppingItem';
import Category from '../Category';

function Main() {
  let categories = [
    { category: 'headphones', titleCategory: 'Наушники' },
    { category: 'wireless', titleCategory: 'Беспроводные наушники' },
  ];

  return (
    <div className="main">
      {categories.map((el, i) => (
        <Category key={el.category} category={categories[i]} />
      ))}
    </div>
  );
}

export default Main;
