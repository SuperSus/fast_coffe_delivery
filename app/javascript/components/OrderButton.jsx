import React, { useContext } from 'react';
import { ArrowRight } from 'react-feather';
import CartContext from '../contexts/CartContext';
import { getTotalPrice } from '../utils/Product';
import { StyledOutlinedMainButton, OutlinedMainButtonBox, StubBox } from './styles/OutlinedMainButton.styled';

const OrderButton = function () {
  const cartContext = useContext(CartContext);
  const totalCost = getTotalPrice(cartContext.cartState);
  const text = `Заказать за ${totalCost}`;
  return (
    Object.keys(cartContext.cartState).length > 0
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
