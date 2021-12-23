import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import CartContext from '../contexts/CartContext';
import {
  ItemBox,
  Image,
  ContentBox,
  BoldText,
  Description,
} from './styles/Item.styled';

import { CounterBox, CounterButton, CounterValue } from './styles/Counter.styled';

const Counter = function ({
  onDecrement,
  onIncrement,
  product,
}) {
  return (
    <CounterBox>
      { product.quantity > 0
        && (
          <>
            <CounterButton
              onClick={() => { onDecrement(product); product.quantity--; }}
              className="control-button"
            >
              -
            </CounterButton>
            <CounterValue>
              x
              {product.quantity}
            </CounterValue>
          </>
        )}
      <CounterButton
        onClick={() => { onIncrement(product); product.quantity++; }}
        className="control-button"
      >
        +
      </CounterButton>
    </CounterBox>
  );
};

Counter.defaultProps = {
  onDecrement: () => {},
  onIncrement: () => {},
};

Counter.propTypes = {
  onDecrement: PropTypes.func,
  onIncrement: PropTypes.func,
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    image: PropTypes.any,
    price: PropTypes.number,
    salePrice: PropTypes.number,
    description: PropTypes.string,
    quantity: PropTypes.number,
  }).isRequired,
};

const Item = function ({ product }) {
  const {
    title, image, price, salePrice, description,
  } = product;

  const cartContext = useContext(CartContext);
  const displayPrice = salePrice || price;
  return (
    <ItemBox>
      <ContentBox>
        <Image src={image} />
      </ContentBox>
      <ContentBox flex="5 1 0">
        <BoldText>{title}</BoldText>
        <Description>{description}</Description>
      </ContentBox>
      <ContentBox flex="2 1 0" alignItems="flex-end">
        <BoldText>
          {displayPrice}
          &#8372;
        </BoldText>
        <Counter
          product={product}
          onDecrement={cartContext.removeProduct}
          onIncrement={cartContext.addProduct}
        />
      </ContentBox>
    </ItemBox>
  );
};

Item.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    image: PropTypes.any,
    price: PropTypes.number,
    salePrice: PropTypes.number,
    description: PropTypes.string,
    quantity: PropTypes.number,
  }).isRequired,
};

export default Item;
