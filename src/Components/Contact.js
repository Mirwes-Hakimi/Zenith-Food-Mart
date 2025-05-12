import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaYelp } from "react-icons/fa";
import "../Styles/Contact.css";

function Contact() {
  return (
    <section className="contact-section">
      <h1 className="contact-title">Contact Us</h1>

      <p className="phone-link">
        <a href="tel:+19256801040">Call Us: +1 (925) 680-1040</a>
      </p>

      <div className="contact-wrap">
        <div className="store-name">
          <Link to="/" className="store-link">
            Zenith Food Mart <br />
            <span className="tagline">(Afghan - Mediterranean Halal)</span>
          </Link>
        </div>

        <div className="social-links">
          <a
            href="https://www.yelp.com/biz/zenith-food-mart-concord"
            className="social-icon"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Yelp"
          >
            <FaYelp /> <span>Yelp</span>
          </a>
        </div>

        <p className="credits">
          <a
            href="https://www.kblwebsolutions.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Web Design by KBL Web Solutions
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
