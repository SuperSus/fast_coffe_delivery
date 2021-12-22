import React from 'react';
import DefaultLogo from 'images/logo.jpg';
import { ItemsWrapper } from './styles/Item.styled';
import Item from './Item';

const itemsList = [
  {
    data: {
      title: 'Флет-вайт', image: DefaultLogo, price: 5, description: 'coffee', quantity: 1,
    },
  },
  {
    data: {
      title: 'Фильтр', image: DefaultLogo, price: 15, description: 'coffee, vvvv', quantity: 2,
    },
  },
  {
    data: {
      title: 'Капучино', image: DefaultLogo, price: 10, description: 'coffee, milk, watter', quantity: 0,
    },
  },
];

const ItemsList = function () {
  return (
    <ItemsWrapper>
      {itemsList.map((item, idx) => (
        <Item key={`item_${idx}`} data={item.data} />
      ))}
    </ItemsWrapper>
  );
};

export default ItemsList;
