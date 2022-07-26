import React from "react";
import "./Store.css";
import { Filter, ProductCard, Cart } from "./../../Component";
import SearchIcon from "@mui/icons-material/Search";
import { useAllContext } from "../../context/context";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";

export const Store = () => {
  const {
    filteredProducts,
    state: { cart },
  } = useAllContext();
  return (
    <div className="store-container">
      <div className="filters-container">
        <Filter />
      </div>
      <div className="products-container">
        <div className="products-header">
          <h3 className="products-heading">Shoes</h3>

          <div className="action-btn">
            <SearchIcon />
            <button className="sort-btn">sort by</button>
          </div>
        </div>
        <div className="cards-container">
          {filteredProducts.map((eachProduct, i) => {
            return <ProductCard eachProduct={eachProduct} key={i} />;
          })}
        </div>
      </div>
      <div className="cart-container">
        <div className="products-header">
          <h3 className="products-heading">Cart</h3>

          <div className="action-btn">
            <LocalMallOutlinedIcon />
          </div>
        </div>
        <div className="cart-products-container">
          {cart.length !== 0 ? (
            <>
              {cart.map((product, i) => {
                return <Cart key={i} product={product} />;
              })}
            </>
          ) : (
            "Whats stopping you, designer?"
          )}
        </div>
      </div>
    </div>
  );
};
