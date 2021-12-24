import React from 'react';
import PropTypes from 'prop-types';
import { BottomModal, ModalCloseTarget } from 'react-spring-modal';
import { PlusCircle, Check } from 'react-feather';
import Item from './Item';
import { getPrice } from '../utils/Product';
import { StyledOutlinedMainButton } from './styles/OutlinedMainButton.styled';
import {
  CheckBoxesWrapper, CheckBoxRow, CheckBox, Label, Price, Divider,
} from './styles/BottomModal.styled';

const Topping = function ({ topping: { title, price, selected }, toggle }) {
  return (
    <CheckBoxRow>
      <CheckBox
        type="checkbox"
        checked={selected}
        onClick={() => toggle()}
      >
        <Check size="16" color="white" />
      </CheckBox>
      <Label>{title}</Label>
      <Price>
        &#43;
        {price}
        &#8372;
      </Price>
    </CheckBoxRow>
  );
};

Topping.prototypes = {
  topping: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    selected: PropTypes.bool,
  }).isRequired,
  toggle: PropTypes.func,
};

const EditItemModal = function ({ state, setState }) {
  const staticModalStyles = { minWidth: '100%' };
  const { product, isOpen } = state;
  const text = `Добавить за ${getPrice(product)}`;
  const toggleTopping = function (topping) {
    const updatedToppings = product.toppings.map(
      (item) => (item.id === topping.id
        ? { ...topping, selected: !topping.selected }
        : item),
    );
    setState({ isOpen, product: { ...product, toppings: updatedToppings } });
  };
  return (
    <BottomModal
      isOpen={isOpen}
      onDismiss={() => setState({ isOpen: false, product })}
      contentProps={{ style: staticModalStyles }}
    >
      <Item product={product} withCounter={false} />
      <CheckBoxesWrapper>
        <Divider />
        {product.toppings && product.toppings.map((item) => (
          <Topping
            key={item.id}
            topping={item}
            toggle={() => { toggleTopping(item); }}
          />
        ))}
      </CheckBoxesWrapper>
      <ModalCloseTarget>
        <StyledOutlinedMainButton>
          {text}
          &#8372;
          <PlusCircle size="28" />
        </StyledOutlinedMainButton>
      </ModalCloseTarget>
    </BottomModal>
  );
};

EditItemModal.propTypes = {
  setState: PropTypes.func.isRequired,
  state: PropTypes.shape({
    isOpen: PropTypes.bool,
    product: PropTypes.object,
  }).isRequired,
};

export default EditItemModal;
