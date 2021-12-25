import React, { useContext } from 'react';
import CartContext from '../contexts/CartContext';
import {
  Header, ItemsList, OrderButton, TotalPrice, HeaderContent,
} from '../components';

const CartPage = function () {
  const cartContext = useContext(CartContext);
  return (
    <>
      <Header>
        <HeaderContent>Корзина</HeaderContent>
        <TotalPrice totalPrice={cartContext.getTotalPrice()} />
      </Header>
      <ItemsList products={cartContext.getCartProducts()} cartMode />
      <OrderButton />
    </>
  );
};
export default CartPage;
