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
  setEditModalState,
  product,
}) {
  const cartContext = useContext(CartContext);
  const quantity = cartContext.cartState[product.id]?.length || 0;
  const isEditable = product.toppings && product.toppings.length > 0;
  const onIncrement = isEditable
    ? () => setEditModalState({ isOpen: true, product })
    : () => cartContext.addProduct(product);
  return (
    <CounterBox>
      { quantity > 0
        && (
          <>
            <CounterButton
              onClick={() => cartContext.removeProduct(product.id)}
              className="control-button"
            >
              -
            </CounterButton>
            <CounterValue>
              x
              {quantity}
            </CounterValue>
          </>
        )}
      <CounterButton
        onClick={() => onIncrement()}
        className="control-button"
      >
        +
      </CounterButton>
    </CounterBox>
  );
};

Counter.defaultProps = {
  setEditModalState: () => {},
};

Counter.propTypes = {
  setEditModalState: PropTypes.func,
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    image: PropTypes.any,
    price: PropTypes.number,
    salePrice: PropTypes.number,
    description: PropTypes.string,
    quantity: PropTypes.number,
    toppings: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

const Item = function ({ product, setEditModalState, withCounter }) {
  const {
    title, image, price, salePrice, description,
  } = product;

  const displayPrice = salePrice || price;
  return (
    <ItemBox withBorder={withCounter}>
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
        {withCounter && (
          <Counter
            product={product}
            setEditModalState={setEditModalState}
          />
        )}
      </ContentBox>
    </ItemBox>
  );
};

Item.defaultProps = {
  setEditModalState: () => {},
  withCounter: true,
};

Item.propTypes = {
  setEditModalState: PropTypes.func,
  withCounter: PropTypes.bool,
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    image: PropTypes.any,
    price: PropTypes.number,
    salePrice: PropTypes.number,
    description: PropTypes.string,
    quantity: PropTypes.number,
    toppings: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default Item;
