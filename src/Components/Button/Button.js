import React from "react";
import "./Button.css";

const Button = ({ children, onClick, icon:Icon }) => {
  return (
    <div className="button-container">
      <div className="container-logo">
        <Icon className="icon-button" />
      </div>
      <div className="container-text">
        <span className="span-text">Ingresa desde </span>
        <span className="span-smartphone">{children}</span>
      </div>
    </div>
  );
};

export default Button;
