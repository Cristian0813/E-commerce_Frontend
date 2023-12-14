// actions.js
export const addToCart = (product) => ({
  type: 'ADDITEM',
  payload: product,
});

export const removeFromCart = (product) => ({
  type: 'DELITEM',
  payload: product,
});
