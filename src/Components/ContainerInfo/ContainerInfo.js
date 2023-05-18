import React from "react";
import "./ContainerInfo.css";

const ContainerInfo = ({ children }) => {
  return (
    <div className="container-info">
      {children}
      <div className="fondo-page" />
    </div>
  );
};

export default ContainerInfo;
