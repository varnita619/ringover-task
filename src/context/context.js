import { createContext, useContext, useReducer } from "react";
import { cartReducer, productReducer } from "./../reducer/Reducers";
import { products } from "./../database/products";
import { uniqueCategory } from "./../Utils/uniqueCategory";
import { filterByCategory } from "./../Utils/filterByCategory";
import { filterByPriceRange } from "./../Utils/filterByPriceRange";

const Cart = createContext();

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    priceRange: 8000,
    category: [],
  });

  const { category, priceRange } = productState;

  // Get unique Category Name
  const getUniqueCategory = uniqueCategory(products, "category");
  //   Filter By Price Range
  const getFilterByPriceRange = filterByPriceRange(products, priceRange);
  //   Filter By Category
  const getFilterByCategory = filterByCategory(getFilterByPriceRange, category);

  const filteredProducts = getFilterByCategory;

  return (
    <Cart.Provider
      value={{
        state,
        dispatch,
        productState,
        productDispatch,
        filteredProducts,
        getUniqueCategory,
      }}
    >
      {children}
    </Cart.Provider>
  );
};

const useAllContext = () => useContext(Cart);

export { ContextProvider, useAllContext };
