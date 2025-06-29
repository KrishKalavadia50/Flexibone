import React from "react";
import Lottie from "react-lottie";
import Doctoranimation from "../Components/DR.json";

const Contact = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Doctoranimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <div className="contact-content">
          <div className="lottie-animation">
            <Lottie options={defaultOptions} height={400} width={400} />
          </div>

          <div className="contact-info">
            <div className="header-content">
              <h3 className="styled-title">
                Connect With Us <span>We’re Just a Click Away!</span>
              </h3>
              <p className="contact-description">
                We'd love to hear from you! Whether you have a question, need assistance, 
                or just want to say hello, we’re here to help. Get in touch with us, and 
                our team will respond as soon as possible.
              </p>
            </div>

            <button className="contact-btn">Contact Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
