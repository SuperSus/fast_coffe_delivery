import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftCircle, ShoppingCart } from 'react-feather';
import {
  StyledHeader, StyledNav, StyledContentBlock, StyledItem, StyledCircleContainer,
} from './styles/Header.styled';

const BackButton = function () {
  const navigate = useNavigate();
  return (
    <StyledItem onClick={() => navigate((-1))}>
      <ArrowLeftCircle size={48} />
    </StyledItem>
  );
};

const CartButton = function () {
  return (
    <StyledItem>
      <StyledCircleContainer>
        <ShoppingCart color="black" size={28} />
      </StyledCircleContainer>
    </StyledItem>
  );
};

const Header = function ({ children }) {
  return (
    <StyledHeader>
      <StyledNav>
        <BackButton />
        <StyledContentBlock>
          { children }
        </StyledContentBlock>
        <CartButton />
      </StyledNav>
    </StyledHeader>
  );
};

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element,
  ]).isRequired,
};

export default Header;
