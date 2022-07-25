import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../assets/assets/websitelogo.png";
import user from "./../../assets/assets/user";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <div className="main-container" >
        <div className="logo-container">
      <img src={logo} alt="logo" className="logo"></img>
      </div>
      <div className="main-components">
        <Link className="individual-component" to="/">Home</Link>
        <Link className="individual-component" to="/">The Journey</Link>
        <Link className="individual-component" to="/team">Team</Link>
        <Link className="individual-component" to="/store">Store</Link>
        <Link className="individual-component" to="/contact">Contact</Link>
      </div>

      <div className="user-container">
        <img src={user} alt="user" className="user-icon" />
        <h4>GAGAN</h4>
      </div>


    </div>
  );
};
