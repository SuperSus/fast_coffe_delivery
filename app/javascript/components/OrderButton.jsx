import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'react-feather';
import CartContext from '../contexts/CartContext';
import { StyledOutlinedMainButton, OutlinedMainButtonBox, StubBox } from './styles/OutlinedMainButton.styled';

const OrderButton = function () {
  const cartContext = useContext(CartContext);
  const text = `Заказать за ${cartContext.getTotalPrice()}`;
  return (
    Object.keys(cartContext.cartState).length > 0
    && (
      <>
        <StubBox />
        <Link to="/cart">
          <OutlinedMainButtonBox>
            <StyledOutlinedMainButton>
              {text}
              &#8372;
              <ArrowRight />
            </StyledOutlinedMainButton>
          </OutlinedMainButtonBox>
        </Link>
      </>
    )
  );
};

export default OrderButton;
