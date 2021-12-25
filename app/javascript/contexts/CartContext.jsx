import React, {
  useMemo, useReducer, createContext,
} from 'react';
import {
  without, find, isEqual, uniqWith,
} from 'lodash';
import { getPrice } from '../utils/Product';

const ADD_PRODUCT = 'ADD_PRODUCT';
const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
const REMOVE_PRODUCT_BY_MATCH = 'REMOVE_PRODUCT_BY_MATCH';

/**
 * CartContext.
 * contains { product_id: array<Product> }
 * example:
 * {
 *   1: [{...product1}, {...product1}],
 *   2: [{...product2}]
 * }
 */
const CartContext = createContext({});
CartContext.displayName = 'CartContext';
export default CartContext;

const addProductToCart = (product, state) => {
  const updatedCart = { ...state };
  if (updatedCart[product.id]) {
    updatedCart[product.id].push({ ...product });
  } else {
    updatedCart[product.id] = [{ ...product }];
  }
  return updatedCart;
};

const removeProductFromCart = (productId, state) => {
  const updatedCart = { ...state };
  updatedCart[productId].pop();
  if (updatedCart[productId].length === 0) {
    delete updatedCart[productId];
  }
  return updatedCart;
};

const removeProductFromCartByMatch = (product, state) => {
  const updatedCart = { ...state };
  const products = updatedCart[product.id];
  updatedCart[product.id] = without(products, find(products, product));
  if (updatedCart[product.id].length === 0) {
    delete updatedCart[product.id];
  }
  return updatedCart;
};

const CartReducer = (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return addProductToCart(action.product, state);

    case REMOVE_PRODUCT:
      return removeProductFromCart(action.productId, state);

    case REMOVE_PRODUCT_BY_MATCH:
      return removeProductFromCartByMatch(action.product, state);

    default:
      return state;
  }
};

export const CartContextProvider = function ({ children }) {
  const [cartState, dispatch] = useReducer(CartReducer, {});

  const addProduct = (product) => {
    dispatch({ type: ADD_PRODUCT, product });
  };

  const removeProduct = (productId) => {
    dispatch({ type: REMOVE_PRODUCT, productId });
  };

  const removeProductByMatch = (product) => {
    dispatch({ type: REMOVE_PRODUCT_BY_MATCH, product });
  };

  const getTotalPrice = function () {
    return Object.values(cartState)
      .flat()
      .reduce((sum, item) => (sum + getPrice(item)), 0);
  };

  /**
   * Gets Count of object with same id
   * @param product
   */
  const getQuantity = function (product) {
    return cartState[product.id]?.length || 0;
  };

  /**
   * Gets Count of same products (including toppings)
   * @param product
   */
  const getExactQuantity = function (product) {
    return cartState[product.id]?.filter((item) => isEqual(item, product))?.length || 0;
  };

  const getCartProducts = function () {
    return uniqWith(Object.values(cartState).flat(), isEqual);
  };

  const value = useMemo(() => ({
    cartState,
    addProduct,
    removeProduct,
    removeProductByMatch,
    getTotalPrice,
    getQuantity,
    getExactQuantity,
    getCartProducts,
  }), [cartState]);

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
