import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import CartContext from '../contexts/CartContext';
import { getPrice } from '../utils/Product';
import {
  ItemBox,
  Image,
  MainContentBox,
  ContentBox,
  BoldText,
  Description,
  Topping,
  ToppingsBox,
  ToppingPrice,
  ToppingTitle,
} from './styles/Item.styled';
import { CounterBox, CounterButton, CounterValue } from './styles/Counter.styled';

const Counter = function ({
  setEditModalState,
  product,
  cartMode,
}) {
  const cartContext = useContext(CartContext);
  const quantity = cartMode
    ? cartContext.getExactQuantity(product)
    : cartContext.getQuantity(product);
  const isEditable = product.toppings?.length > 0;
  const onIncrement = isEditable && !cartMode
    ? () => setEditModalState({ isOpen: true, product })
    : () => cartContext.addProduct(product);
  const onDecrement = cartMode
    ? () => cartContext.removeProductByMatch(product)
    : () => cartContext.removeProduct(product.id);
  return (
    <CounterBox>
      { quantity > 0
        && (
          <>
            <CounterButton
              onClick={() => onDecrement()}
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
  cartMode: false,
  setEditModalState: () => {},
};

Counter.propTypes = {
  setEditModalState: PropTypes.func,
  cartMode: PropTypes.bool,
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

const Item = function ({
  product, setEditModalState, withCounter, cartMode,
}) {
  const {
    title, image, description,
  } = product;
  return (
    <ItemBox withBorder={withCounter}>
      <MainContentBox>
        <ContentBox>
          <Image src={image} />
        </ContentBox>
        <ContentBox flex="5 1 0">
          <BoldText>{title}</BoldText>
          <Description>{description}</Description>
        </ContentBox>
        <ContentBox flex="2 1 0" alignItems="flex-end">
          <BoldText>
            {getPrice(product)}
            &#8372;
          </BoldText>
          {withCounter && (
          <Counter
            product={product}
            setEditModalState={setEditModalState}
            cartMode={cartMode}
          />
          )}
        </ContentBox>
      </MainContentBox>
      <ToppingsBox>
        { cartMode && product
          .toppings
          ?.filter((item) => item.selected)
          ?.map((item) => (
            <Topping key={`${product.id}_${item.id}`}>
              <ToppingTitle>
                &#43;
                &nbsp;
                {item.title}
              </ToppingTitle>
              <ToppingPrice>
                &#43;
                {item.price}
                &#8372;
              </ToppingPrice>
            </Topping>
          ))}
      </ToppingsBox>
    </ItemBox>
  );
};

Item.defaultProps = {
  setEditModalState: () => {},
  cartMode: false,
  withCounter: true,
};

Item.propTypes = {
  setEditModalState: PropTypes.func,
  withCounter: PropTypes.bool,
  cartMode: PropTypes.bool,
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
