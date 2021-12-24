export const getPrice = function (product) {
  if (product.toppings && product.toppings.length > 0) {
    return product.toppings.reduce(
      (sum, item) => (item.selected ? sum + item.price : sum),
      product.price,
    );
  }
  return product.price;
};

export const getTotalPrice = function (cart) {
  return Object.values(cart)
    .flat()
    .reduce((sum, item) => (sum + getPrice(item)), 0);
};
