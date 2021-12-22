import React from 'react';
import PropTypes from 'prop-types';
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
  value,
}) {
  return (
    <CounterBox>
      { value > 0
        && (
          <>
            <CounterButton
              onClick={onDecrement}
              className="control-button"
            >
              -
            </CounterButton>
            <CounterValue>
              x
              {value}
            </CounterValue>
          </>
        )}
      <CounterButton
        onClick={onIncrement}
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
  value: 0,
};

Counter.propTypes = {
  onDecrement: PropTypes.func,
  onIncrement: PropTypes.func,
  value: PropTypes.number,
};

const Item = function ({
  data,
  onDecrement,
  onIncrement,
}) {
  const {
    title, image, price, salePrice, description, quantity,
  } = data;
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
          value={quantity}
          onDecrement={onDecrement}
          onIncrement={onIncrement}
        />
      </ContentBox>
    </ItemBox>
  );
};

Item.defaultProps = {
  onDecrement: () => {},
  onIncrement: () => {},
};

Item.propTypes = {
  onDecrement: PropTypes.func,
  onIncrement: PropTypes.func,
  data: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.any,
    price: PropTypes.number,
    salePrice: PropTypes.number,
    description: PropTypes.string,
    quantity: PropTypes.number,
  }).isRequired,
};

export default Item;
