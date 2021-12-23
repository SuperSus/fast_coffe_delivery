import React from 'react';
import { Header, ItemsList, OrderButton } from '../components';

const HomePage = function () {
  return (
    <>
      <Header>Кофе</Header>
      <ItemsList />
      <OrderButton />
    </>
  );
};
export default HomePage;
