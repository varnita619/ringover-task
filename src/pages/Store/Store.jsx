import React from "react";
import "./Store.css";
import { Filter, ProductCard, Cart } from "./../../Component";
import SearchIcon from "@mui/icons-material/Search";
import { useAllContext } from "../../context/context";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

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
            <div className="cart-msg">
              <p>What&apos;s stopping you, designer?</p>
            </div>
          )}
        </div>

        <div className="cart-extra-information">
          {cart.length === 0 ? (
            <>
              <div className="home">
                <span className="text">
                  <PlaceOutlinedIcon className="icon" /> Home
                </span>
              </div>

              <div className="date">
                <span className="text">
                  <CalendarTodayOutlinedIcon /> Select date
                </span>
              </div>
            </>
          ) : (
            <>
              <div className="home">
                <span className="text-enabled">
                  <PlaceOutlinedIcon className="icon" /> Home
                </span>
              </div>

              <div className="date">
                <span className="text-enabled">
                  <CalendarTodayOutlinedIcon /> Select date
                </span>
              </div>
            </>
          )}
        </div>

        <div className="order-btn-container">
          {cart.length === 0 ? (
            <button className="order-btn disabled-btn">order now</button>
          ) : (
            <button className="order-btn">order now</button>
          )}
        </div>
      </div>
    </div>
  );
};
