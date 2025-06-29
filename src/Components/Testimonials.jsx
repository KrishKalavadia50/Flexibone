import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Testimonials() {
  const [testimonialsData, setTestimonialsData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbyXZvFEzlRNhbLSCPX-Dfvh11e9fIlp37aES2flHl20I-FaJf-5RiyjaLm1q7K4u9V5Ew/exec"
        );
        const data = await response.json();
        setTestimonialsData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Group testimonials (5 per slide desktop, 1 per mobile)
  const itemsPerSlide = isMobile ? 1 : 5;
  const groupedTestimonials = [];
  for (let i = 0; i < testimonialsData.length; i += itemsPerSlide) {
    groupedTestimonials.push(testimonialsData.slice(i, i + itemsPerSlide));
  }

  // Auto slide
  useEffect(() => {
    const totalSlides = groupedTestimonials.length;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 4000);
    return () => clearInterval(interval);
  }, [groupedTestimonials]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="testimonials-container">
      <div className="testimonials-header">
        <h2 className="testimonials-title">
          Clients With <span className="highlight">Reason To Smile</span>
        </h2>
        <Link to="/Testti" className="button">
          View Client Testimonials
        </Link>
      </div>

      <div style={{ display: "flex", width: "90vw" }}>
        <div
          className="testimonials"
          style={{
            transform: `translateX(-${currentIndex * 90}vw)`,
            width: `${groupedTestimonials.length * 90}vw`,
          }}
        >
          {groupedTestimonials.map((group, i) => (
            <div key={i} className="testimonials-wrapper" style={{ display: "flex", gap: "20px" }}>
              {group.map((testimonial, j) => (
                <div
                  key={j}
                  className="testimonial-card"
                  style={{
                    width: isMobile ? "100%" : "20vw",
                    marginRight: j === itemsPerSlide - 1 ? "20px" : "0",
                    borderRadius: "10px",
                  }}
                >
                  <img src={testimonial.image} alt={testimonial.name} />
                  <span className="testimonials-name">{testimonial.name}</span>
                  <div className="role">{testimonial.role}</div>
                  <p className="testimonials-peragraph">"{testimonial.feedback}"</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="pagination">
        {groupedTestimonials.map((_, index) => (
          <span
            key={index}
            className={index === currentIndex ? "active" : ""}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
