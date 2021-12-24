import React, { useContext } from 'react';
import { ArrowRight } from 'react-feather';
import CartContext from '../contexts/CartContext';
import { StyledOutlinedMainButton, OutlinedMainButtonBox, StubBox } from './styles/OutlinedMainButton.styled';

const OrderButton = function () {
  const cartContext = useContext(CartContext);
  const totalCost = cartContext.cartState.reduce((sum, item) => sum + item.price, 0);
  const text = `Заказать за ${totalCost}`;
  return (
    cartContext.cartState.length > 0
    && (
      <>
        <StubBox />
        <OutlinedMainButtonBox>
          <StyledOutlinedMainButton>
            {text}
            &#8372;
            <ArrowRight />
          </StyledOutlinedMainButton>
        </OutlinedMainButtonBox>
      </>
    )
  );
};

export default OrderButton;
