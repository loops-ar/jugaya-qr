import React from "react";
import "./Logo.css";

const Logo = ({ logo }) => {
  return (
    <div className="logo-container">
      <img className="logo" src={logo} alt="JugaYa logo" />
      <div className="name">JugaYa</div>
    </div>
  );
};

export default Logo;
