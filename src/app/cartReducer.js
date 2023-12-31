const initialState = {
  cart: {
    cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
  },
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CART_ADD_ITEM':
      //add to cart
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find((item) => item.product_id === newItem.product_id);
      const cartItems = existItem ? state.cart.cartItems.map((item) => (item.product_id === existItem.product_id ? newItem : item)) : [...state.cart.cartItems, newItem];
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };
    // remove cart
    case 'CART_REMOVE_ITEM': {
      const cartItems = state.cart.cartItems.filter((item) => item.product_id !== action.payload.product_id);
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    case 'CART_CLEAR':
      return { ...state, cart: { ...state.cart, cartItems: [] } };

    default:
      return state;
  }
};

export default cartReducer;
