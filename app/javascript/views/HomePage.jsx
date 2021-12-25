import React from 'react';
import DefaultLogo from 'images/logo.jpg';
import {
  Header, HeaderContent, ItemsList, OrderButton, CartButton,
} from '../components';

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

const products = [
  {
    id: 1, title: 'Флет-вайт', image: DefaultLogo, price: 5, description: 'coffee', quantity: 0, toppings: [...toppings],
  },
  {
    id: 2, title: 'Фильтр', image: DefaultLogo, price: 15, description: 'coffee, vvvv', quantity: 0, toppings: [...toppings],
  },
  {
    id: 3, title: 'Капучино', image: DefaultLogo, price: 10, description: 'coffee, milk, watter', quantity: 0,
  },
  {
    id: 4, title: 'Капучино 2', image: DefaultLogo, price: 10, description: 'coffee, milk, watter', quantity: 0,
  },
  {
    id: 5, title: 'Капучино 3', image: DefaultLogo, price: 10, description: 'coffee, milk, watter', quantity: 0,
  },
  {
    id: 6, title: 'Капучино 4', image: DefaultLogo, price: 10, description: 'coffee, milk, watter', quantity: 0,
  },
];

const HomePage = function () {
  return (
    <>
      <Header>
        <HeaderContent>Кофе</HeaderContent>
        <CartButton />
      </Header>
      <ItemsList products={products} />
      <OrderButton />
    </>
  );
};
export default HomePage;
