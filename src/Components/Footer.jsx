import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section company-info">
          <img src="/img/flexi_bone.png" alt="Company Logo" className="footer-logo" />
          <p className="footer-description">
            We’re a friendly team of dentists working together to ensure that you receive the best treatment you require.
          </p>
        </div>

        <div className="footer-section footer-about-section">
          <h3>About DentiCare</h3>
          <ul>
            <li>Our Orthopedic Team</li>
            <li>Our Awards</li>
            <li>Orthopedic Services</li>
            <li>Blog / Articles</li>
            <li>Patient Testimonials</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-section awards-section">
          <h3>Our Awards</h3>
          <div className="awards">
            <img src="/award1.png" alt="Award 2017" />
            <img src="/award2.png" alt="Award 2016" />
            <img src="/award3.png" alt="Award 2014" />
          </div>
        </div>

        <div className="footer-section social-section">
          <h3>Social Networks</h3>
          <p>Visit DentiCare on these social links.</p>
          <div className="footer-social-icons">
            <FaFacebookF className="icon" />
            <FaTwitter className="icon" />
            <FaLinkedinIn className="icon"/>
            <FaPinterestP className="icon"/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
