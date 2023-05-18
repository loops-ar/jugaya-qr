import React from "react";
import "./Buttons.css";

function Buttons() {
  return (
    <div className="buttons-container">
      <img
        className="image"
        src={"img-playstore.svg"}
        alt="playstore"
        onClick={() => {
          window.location.href =
            "https://play.google.com/store/apps/details?id=ar.jugaya.twa";
        }}
      ></img>
      <button
        className="button"
        onClick={() => {
          window.location.href = "https://jugaya.ar/";
        }}
      >
        VERSION WEB
      </button>
    </div>
  );
}

export default Buttons;
