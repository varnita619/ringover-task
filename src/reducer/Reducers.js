export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c._id !== action.payload._id),
      };
    case "CHANGE_CART_QTY":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c._id === action.payload._id ? (c.qty = action.payload.qty) : c.qty
        ),
      };
    default:
      return state;
  }
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY_PRICE":
      return { ...state, priceRange: action.payload };
    case "GET_CATEGORY":
      if (state.category.includes(action.payload)) {
        return {
          ...state,
          category: [...state.category].filter(
            (eachCategory) => eachCategory !== action.payload
          ),
        };
      }
      return {
        ...state,
        category: [...state.category, action.payload],
      };
    case "CLEAR_FILTERS":
      return { priceRange: 8000,category: [],};
    default:
      return state;
  }
};
