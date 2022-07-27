import React from "react";
import "./Cart.css";
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { useAllContext } from "../../context/context";

export const Cart = ({ product }) => {
  const { name, desc, imageURL, price } = product;
  const {dispatch} = useAllContext();
  return (
    <div className="cart-product-container">
      <div className="cart-sub-container">
        <span class="dismiss-icon" onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: product })}>
         <CancelOutlinedIcon />
        </span>
        <div>
          <img src={imageURL} alt="shoe" className="cart-product-img" />
        </div>
        <div className="cart-info">
          <p className="product-name">{name}</p>
          <p className="product-desc">{desc}</p>
          <p className="product-price">Rs.{price}/-</p>
        </div>
      </div>
    </div>
  );
};
