import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <div className="container--footer">
        <div className="footer-top">
          <div className="footer-logo">
            <img src="/footer_logo.svg" alt="footer logo cryptura" />
            <p>
              Unlock the power of secure and rewarding payments with Cryptura
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">
            <span>copyright 2024 Cryptura <br /> All Rights Reserved</span>
          </div>
          <div className="footer-cookies">
            <span>
              This page uses cookies. See cookie details{" "}
              <a href="/#">here</a>.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
