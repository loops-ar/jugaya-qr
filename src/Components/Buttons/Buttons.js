import React from "react";
import "./Buttons.css";

function Buttons() {
  return (
    <>
      <a
        href="https://play.google.com/store/apps/details?id=ar.jugaya.twa"
        target="_blank"
        rel="noreferrer"
      >
        <img className="image" src="/playstore.png" alt="playstore"></img>
      </a>
      <a
        href="https://apps.apple.com/ar/app/jugaya-reserva-de-canchas/id6511213278"
        target="_blank"
        rel="noreferrer"
      >
        <img className="image" src="/appstore.png" alt="playstore"></img>
      </a>
      <a
        href="https://jugaya.ar/"
        target="_blank"
        className="button"
        rel="noreferrer"
      >
        VERSION WEB
      </a>
    </>
  );
}

export default Buttons;
