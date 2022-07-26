import React from "react";
import "./Store.css";
import { Filter, ProductCard, Cart } from "./../../Component";
import SearchIcon from "@mui/icons-material/Search";

export const Store = () => {
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
        <ProductCard />
      </div>
      <div className="cart-container">
        <Cart />
      </div>
    </div>
  );
};
