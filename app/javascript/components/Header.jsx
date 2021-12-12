import React from 'react';
import { ArrowLeftCircle, ShoppingCart } from 'react-feather';
import {
  StyledHeader, StyledNav, StyledContentBlock, StyledItem, StyledCircleContainer,
} from './styles/Header.styled';

const BackButton = function () {
  return (
    <StyledItem>
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

export default Header;
