import React, { useEffect } from "react";
import { GiSelfLove, GiTooth, GiCommercialAirplane } from "react-icons/gi";
import Articles from "./Articles";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

const stats = [
  { id: "circle1", percentage: 99, icon: <GiSelfLove />, label: "Client Satisfaction" },
  { id: "circle2", percentage: 97, icon: <GiTooth />, label: "Intervention Success" },
  { id: "circle3", percentage: 100, icon: <GiTooth />, label: "Happy with Staff" },
  { id: "circle4", percentage: 95, icon: <GiCommercialAirplane />, label: "Travel Satisfaction" },
];

function animateCircle(id, percentage) {
  const circle = document.getElementById(id);
  if (!circle) return;

  const offset = 550 - (550 * percentage) / 100;
  let currentOffset = 550;
  let interval = setInterval(() => {
    if (currentOffset <= offset) {
      clearInterval(interval);
    } else {
      currentOffset -= 5;
      circle.style.strokeDashoffset = currentOffset;
    }
  }, 20);
}

const Services_info = () => {
  useEffect(() => {
    stats.forEach(({ id, percentage }) => animateCircle(id, percentage));
  }, []);

  return (
    <div className="services-info-container">
      <h2 className="services-info-title">
        Our Services <span className="highlight">In Numbers</span>
      </h2>
      <p className="services-paragraph">
        Distinctively exploit optimal alignments for intuitive bandwidth. Quickly coordinate e-business applications through revolutionary catalysts for change. Seamlessly underwhelm optimal testing processes.
      </p>
      <div className="circle-container">
        {stats.map(({ id, percentage, icon, label }) => (
          <div className="circle" key={id}>
            <svg width="220" height="220">
              <circle cx="110" cy="110" r="90" stroke="#ddd" strokeWidth="6" fill="none" />
              <circle
                cx="110"
                cy="110"
                r="90"
                stroke="#00a86b"
                strokeWidth="6"
                fill="none"
                strokeDasharray="550"
                strokeDashoffset="550"
                id={id}
              />
            </svg>
            <div className="services-info-icon">{icon}</div>
            <h2 className="percentage">{percentage}%</h2>
            <h3 className="servicename">{label}</h3>
          </div>
        ))}
        <div className="line-two"></div>
      </div>
      <div class="service-info-container">
        <div class="service-info-content-left">
            <div class="separator"></div>
            <p>“DentiCare was founded in the first place to create absolutely beautiful smiles.”</p>
            <div class="separator"></div>
        </div>
        <div class="service-info-content-right">
            <p>Distinctively re-engineer revolutionary meta-services and premium architectures. Intrinsically incubate intuitive opportunities and real-time potentialities.</p>
            <p>Appropriately communicate one-to-one technology after plug-and-play networks. Quickly aggregate B2B users and worldwide potentialities.</p>
            <p>Enthusiastically mesh long-term high-impact infrastructures vis-a-vis efficient customer service. Professionally fashion wireless leadership.</p>
            <p>Energetically myocordinate clicks-and-mortar testing procedures whereas next-generation manufactured products, appropriately implement visionary readiness.</p>
        </div>
    </div>
    <div style={{position: "relative", top: "10rem"}}>
    <Articles />
    </div>
    <div style={{position: "relative", top: "25rem"}}>
      <Testimonials />
    </div>
    <div class="callnow-banner">
        <div class="banner-overlay"></div>
        <div class="callnow-content">
            <div class="callnow-text">Call Now</div>
            <div class="phone-number">+91 2345 3456</div>
        </div>
        <a href="#" class="callnow-button">Contact Us For Enquiry</a>
    </div>
    <div style={{position: "relative", top: "30rem"}}>
      <Footer />
    </div>
    </div>
  );
};

export default Services_info;
