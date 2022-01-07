export const getPrice = function (product) {
  if (product.toppings && product.toppings.length > 0) {
    return product.toppings.reduce(
      (sum, item) => (item.selected ? sum + parseFloat(item.price) : sum),
      parseFloat(product.price),
    );
  }
  return product.price;
};
