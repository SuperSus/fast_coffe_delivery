import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeftCircle, ShoppingCart } from 'react-feather';
import {
  StyledHeader, StyledNav, StyledContentBlock, StyledItem, StyledCircleContainer,
} from './styles/Header.styled';

const BackButton = function () {
  const location = useLocation();
  const navigate = useNavigate();
  // if we are on the menu pages then we should always go back to the home page
  const goBack = location.pathname.includes('menu/') ? () => navigate('/') : () => navigate(-1);
  return (
    <StyledItem onClick={goBack}>
      <ArrowLeftCircle size={48} />
    </StyledItem>
  );
};

export const CartButton = function () {
  return (
    <StyledItem>
      <StyledCircleContainer>
        <ShoppingCart color="black" size={28} />
      </StyledCircleContainer>
    </StyledItem>
  );
};

export const HeaderContent = function ({ children }) {
  return (
    <StyledContentBlock>
      { children }
    </StyledContentBlock>
  );
};

HeaderContent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element,
  ]).isRequired,
};

export const TotalPrice = function ({ totalPrice }) {
  return (
    <StyledItem>
      {totalPrice}
      &#8372;
    </StyledItem>
  );
};

TotalPrice.propTypes = {
  totalPrice: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

const Header = function ({ children }) {
  return (
    <StyledHeader>
      <StyledNav>
        <BackButton />
        {children}
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
