import React, { useState } from 'react';
import DefaultLogo from 'images/logo.jpg';
import { ItemsWrapper } from './styles/Item.styled';
import Item from './Item';
import EditItemModal from './EditItemModal';

const toppings = [
  {
    id: 1, title: 'Кокосовое Молоко', price: 2, selected: false,
  },
  {
    id: 2, title: 'Безлактозное Молоко', price: 3, selected: false,
  },
  {
    id: 3, title: 'Миндальное Молоко', price: 4, selected: false,
  },
];

const itemsList = [
  {
    product: {
      id: 1, title: 'Флет-вайт', image: DefaultLogo, price: 5, description: 'coffee', quantity: 0, toppings: [...toppings],
    },
  },
  {
    product: {
      id: 2, title: 'Фильтр', image: DefaultLogo, price: 15, description: 'coffee, vvvv', quantity: 0, toppings: [...toppings],
    },
  },
  {
    product: {
      id: 3, title: 'Капучино', image: DefaultLogo, price: 10, description: 'coffee, milk, watter', quantity: 0,
    },
  },
  {
    product: {
      id: 4, title: 'Капучино 2', image: DefaultLogo, price: 10, description: 'coffee, milk, watter', quantity: 0,
    },
  },
  {
    product: {
      id: 5, title: 'Капучино 3', image: DefaultLogo, price: 10, description: 'coffee, milk, watter', quantity: 0,
    },
  },
  {
    product: {
      id: 6, title: 'Капучино 4', image: DefaultLogo, price: 10, description: 'coffee, milk, watter', quantity: 0,
    },
  },
];

const ItemsList = function () {
  const [editModalState, setEditModalState] = useState({ isOpen: false, product: {} });
  return (
    <>
      <ItemsWrapper>
        {itemsList.map((item) => (
          <Item
            key={`item_${item.product.id}`}
            product={item.product}
            setEditModalState={setEditModalState}
          />
        ))}
      </ItemsWrapper>
      <EditItemModal state={editModalState} setState={setEditModalState} />
    </>
  );
};

export default ItemsList;
