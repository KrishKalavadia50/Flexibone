import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { GiPositionMarker, GiRotaryPhone, GiEnvelope } from "react-icons/gi";

export default function ContactSection() {
  return (
    <div className="contact-wrapper">
      {/* Navbar */}
      <Nav />

      {/* Responsive Banner */}
      <div className="contact-banner">
        <div className="banner-overlay">
          <div className="banner-content">
            <h2 className="contact-title">Contact</h2>
            <div className="contact-underline"></div>
            <p className="contact-desc">
              Progressively maintain extensive infomediaries via extensible niches.
              Dramatically disseminate standardized metrics after resource-leveling processes.
              Objectively pursue diverse catalysts for change for interoperable meta-services.
            </p>
          </div>
        </div>
      </div>

      {/* Section Heading */}
      <div className="get-in-touch">
        <h3>Get in touch</h3>
        <h2><span className="highlight-blue">With Orthopedic Care</span></h2>
      </div>

      {/* Info Cards */}
      <div className="contact-info-grid">
        <div className="info-boxx">
          <div className="icon-circle"><GiPositionMarker /></div>
          <h4>Address</h4>
          <p>Kalawad Road, Near St. Mary's High School,<br />Rajkot, Gujarat 360007</p>
        </div>
        <div className="info-boxx">
          <div className="icon-circle"><GiRotaryPhone /></div>
          <h4>Call Us</h4>
          <p>+91 1234567890<br />+91 0123456789</p>
        </div>
        <div className="info-boxx">
          <div className="icon-circle"><GiEnvelope /></div>
          <h4>Email Us</h4>
          <p>office@orthopedic.hu<br />book@orthopedic.hu</p>
        </div>
        <div className="info-boxx">
          <h4>When Can You Book?</h4>
          <button className="working-hours-btn">Check Our Working Hours</button>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="contact-form-section">
        <div className="form-left">
          <h3>Contact Our <span className="highlight-blue">Orthopedic Office</span></h3>
          <p>Contact our office and we will contact you back regarding the intervention you require.</p>
          <form className="contact-form" action="https://script.google.com/macros/s/AKfycbwpN0XOEYZ8FQLbAzgGBSU68Q6stuRZ6dTY-wLeNUIpwgIPteH_QqKz2dn2FbsQQs_F/exec" method="POST">
            <input type="text" name="name" placeholder="Enter your Name" required />
            <input type="text" name="phone" placeholder="Enter your Phone" required />
            <input type="email" name="email" placeholder="Enter your Email" required />
            <textarea rows="4" name="message" placeholder="Enter your Message" required></textarea>
            <button type="submit">Submit Message</button>
          </form>
        </div>
        <div className="form-right">
          <img src="/img/dc.jpg" alt="Doctor with patient" />
        </div>
      </div>

      {/* Google Map */}
      <div className="contact-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.9373757296858!2d70.7716438754526!3d22.288245479695338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca2462dea45b%3A0xf077f763eb7b65b0!2sWockhardt%20Hospitals%2C%20Rajkot!5e1!3m2!1sen!2sin!4v1751450593843!5m2!1sen!2sin" width="600" height="450"></iframe>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
