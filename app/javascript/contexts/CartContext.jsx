import React, {
  useMemo, useReducer, createContext,
} from 'react';

const ADD_PRODUCT = 'ADD_PRODUCT';
const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

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
    updatedCart[product.id].push({ ...product, quantity: product.quantity + 1 });
  } else {
    updatedCart[product.id] = [{ ...product, quantity: 1 }];
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

const CartReducer = (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return addProductToCart(action.product, state);

    case REMOVE_PRODUCT:
      return removeProductFromCart(action.productId, state);

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

  const value = useMemo(() => ({
    cartState,
    addProduct,
    removeProduct,
  }), [cartState]);

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
