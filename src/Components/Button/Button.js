import React from "react";

const Button = ({ children, onClick, icon:Icon }) => {
  return (
    <div className="button-container">
      <div className="container-logo">
        <Icon />
      </div>
      <div className="container-text">
        <span>Ingresa con</span>
        <span>{children}</span>
      </div>
    </div>
  );
};

export default Button;
