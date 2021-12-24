import React from 'react';
import DefaultLogo from 'images/logo.jpg';
import { ItemsWrapper } from './styles/Item.styled';
import Item from './Item';

const itemsList = [
  {
    product: {
      id: 1, title: 'Флет-вайт', image: DefaultLogo, price: 5, description: 'coffee', quantity: 1,
    },
  },
  {
    product: {
      id: 2, title: 'Фильтр', image: DefaultLogo, price: 15, description: 'coffee, vvvv', quantity: 2,
    },
  },
  {
    product: {
      id: 3, title: 'Капучино', image: DefaultLogo, price: 10, description: 'coffee, milk, watter', quantity: 0,
    },
  },
];

const ItemsList = function () {
  return (
    <ItemsWrapper>
      {itemsList.map((item) => (
        <Item key={`item_${item.product.id}`} product={item.product} />
      ))}
    </ItemsWrapper>
  );
};

export default ItemsList;
