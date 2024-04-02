import React from "react";
import { Img_logo } from "../utils/constant";


export const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={Img_logo} />
      </div>

      <div className="nav-items">
        <ul className="items">
          <li>Home</li>
          <li>About Us</li>
          <li>Login</li>
          <li>Cart</li>
        </ul>

      </div>
    </div>
  );
}

