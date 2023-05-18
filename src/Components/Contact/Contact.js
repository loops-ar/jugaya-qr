import React from "react";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";

import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <BsInstagram
        className="icon"
        onClick={() => {
          window.location.href = "https://www.instagram.com/jugaya.ar/";
        }}
      />
      <BsWhatsapp
        onClick={() => {
          window.location.href = "https://wa.me/+543585754749";
        }}
        className="icon"
      />
    </div>
  );
};

export default Contact;
