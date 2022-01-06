import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DefaultLogo from 'images/logo.jpg';
import { fetchData } from '../utils/Api';
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

const categoryHeaders = {
  coffee: 'Кофе',
  mainDishes: 'Основное меню',
  deserts: 'Десерты',
};

const MenuPage = function () {
  const { category } = useParams();
  const [_products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetchData('/api/products', { category });
      const parsedProducts = response?.data?.map((item) => ({ id: item.id, ...item.attributes }));
      console.log(parsedProducts);
      setProducts(parsedProducts);
    }
    fetchProducts();
  }, []);
  return (
    <>
      <Header>
        <HeaderContent>{categoryHeaders[category]}</HeaderContent>
        <CartButton />
      </Header>
      <ItemsList products={products} />
      <OrderButton />
    </>
  );
};
export default MenuPage;
