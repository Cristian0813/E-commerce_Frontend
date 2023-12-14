const initialState = {
  cartItems: [],
};

export const cartReducer = (state = initialState, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADDITEM":
      // Check if product already in cart
      const exist = state.cartItems.find((x) => x.id === product.id);
      if (exist) {
        // Increase the quantity
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.id === product.id ? { ...x, qty: x.qty + 1 } : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...product, qty: 1 }],
        };
      }
      break;
    case "DELITEM":
      const exist2 = state.cartItems.find((x) => x.id === product.id);
      if (exist2.qty === 1) {
        return {
          ...state,
          cartItems: state.cartItems.filter((x) => x.id !== exist2.id),
        };
      } else {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.id === product.id ? { ...x, qty: x.qty - 1 } : x
          ),
        };
      }
      break;

    default:
      return state;
      break;
  }
};
