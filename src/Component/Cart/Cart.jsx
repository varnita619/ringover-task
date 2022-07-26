import React from "react";
import "./Cart.css";

export const Cart = ({ product }) => {
  const { name, desc, imageURL, price } = product;
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex" }}>
        <div>
          <img
            src={imageURL}
            alt="shoe"
            style={{ width: "10rem", height: "10rem" }}
          />
        </div>
        <div>
          <p>{name}</p>
          <p>{desc}</p>
          <p>{price}</p>
        </div>
      </div>
    </div>
  );
};
