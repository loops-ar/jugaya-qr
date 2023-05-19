import React from "react";

import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <a
        href="https://www.instagram.com/jugaya.ar/"
        target="_blank"
        rel="noreferrer"
      >
        <img src="/ig.svg" alt="instagram" />
      </a>
      <a href="https://wa.me/5493585754749" target="_blank" rel="noreferrer">
        <img src="/wpp.svg" alt="whatsapp" />
      </a>
    </div>
  );
};

export default Contact;
