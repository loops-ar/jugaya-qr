import React from "react";
import "./Description.css";

const Description = ({children}) => {
    return (
        <div className="description-container">
            <span className="description">{children}</span>
        </div>
    );
}

export default Description;