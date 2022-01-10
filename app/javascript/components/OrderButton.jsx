import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'react-feather';
import CartContext from '../contexts/CartContext';
import { StyledOutlinedMainButton, OutlinedMainButtonBox, StubBox } from './styles/OutlinedMainButton.styled';

const OrderButton = function ({ link, text, variant }) {
  const cartContext = useContext(CartContext);
  const content = `${text} ${cartContext.getTotalPrice()}`;
  return (
    Object.keys(cartContext.cartState).length > 0
    && (
      <>
        <StubBox />
        <Link to={link}>
          <OutlinedMainButtonBox>
            <StyledOutlinedMainButton variant={variant}>
              {content}
              &#8372;
              <ArrowRight color={variant === 'dark' ? 'white' : 'black'} />
            </StyledOutlinedMainButton>
          </OutlinedMainButtonBox>
        </Link>
      </>
    )
  );
};

OrderButton.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string,
  variant: PropTypes.oneOf(['dark', 'light']),
};

OrderButton.defaultProps = {
  link: '/cart',
  text: 'Заказать за',
  variant: 'light',
};

export default OrderButton;
