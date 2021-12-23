import React, {
  useMemo, useReducer, createContext,
} from 'react';

const ADD_PRODUCT = 'ADD_PRODUCT';
const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

const CartContext = createContext([]);
CartContext.displayName = 'CartContext';
export default CartContext;

const addProductToCart = (product, state) => {
  const updatedCart = [...state];
  const updatedItemIndex = updatedCart.findIndex(
    (item) => item.id === product.id,
  );

  if (updatedItemIndex < 0) {
    updatedCart.push({ ...product, quantity: 1 });
  } else {
    const updatedItem = {
      ...updatedCart[updatedItemIndex],
    };
    updatedItem.quantity++;
    updatedCart[updatedItemIndex] = updatedItem;
  }

  return updatedCart;
};

const removeProductFromCart = (productId, state) => {
  const updatedCart = [...state];
  const updatedItemIndex = updatedCart.findIndex((item) => item.id === productId);

  const updatedItem = {
    ...updatedCart[updatedItemIndex],
  };
  updatedItem.quantity--;
  if (updatedItem.quantity <= 0) {
    updatedCart.splice(updatedItemIndex, 1);
  } else {
    updatedCart[updatedItemIndex] = updatedItem;
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
  const [cartState, dispatch] = useReducer(CartReducer, []);

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
