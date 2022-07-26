import React from "react";
import "./ProductCard.css";
import shoe2 from "./../../assets/assets/shoe2.png";

export const ProductCard = () => {
  return (
    <div className="cards-container">
      <div className="card">
        <div className="product-image">
          <img src={shoe2} alt="card" className="product-img" />
        </div>

        <div className="card-details">
          <h3>KSL 01</h3>
        </div>
        <div className="card-pricing">
          <div className="price">
          <p>Rs 2000/-</p>
          </div>
          <div className="rating">
            <label className="check rated">
              <input type="checkbox" id="r1" className="input-checkbox" />
            </label>
            <label className="check rated">
              <input type="checkbox" id="r2" className="input-checkbox" />
            </label>
            <label className="check">
              <input type="checkbox" id="r3" className="input-checkbox" />
            </label>
            <label className="check">
              <input type="checkbox" id="r4" className="input-checkbox" />
            </label>
            <label className="check">
              <input type="checkbox" id="r5" className="input-checkbox" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
