import { createContext, useContext, useReducer } from "react";
import { cartReducer, productReducer } from "./../reducer/Reducers";
import { products } from "./../database/products";

const Cart = createContext();

const ContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });
  console.log(products);

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });

  console.log(productState);

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

const CartState = () => useContext(Cart);

export { ContextProvider, CartState };
