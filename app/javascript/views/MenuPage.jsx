import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from '../utils/Api';
import {
  Header, HeaderContent, ItemsList, OrderButton, CartButton,
} from '../components';

const categoryHeaders = {
  coffee: 'Кофе',
  mainDishes: 'Основное меню',
  deserts: 'Десерты',
};

const MenuPage = function () {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetchData('/api/products', { category });
      console.log(response.data);
      const parsedProducts = response?.data?.map((item) => (
        {
          id: item.id,
          ...item.attributes,
        }
      ));
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
