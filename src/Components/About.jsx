import React from "react";
import {
  FaPlaneDeparture,
  FaQuoteRight,
  FaUniversity,
  FaUserMd,
} from "react-icons/fa";
import { GiKneeCap } from "react-icons/gi";

function About() {
  return (
    <div>
      <section
        style={{
          marginTop: "100px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div className="overlay"></div>
        <div
          className="about-doctor"
          style={{ width: "80%", position: "relative" }}
        >
          <div className="doctor-image">
            <div className="doctor-image">
              <div className="shadow-wrapper">
                <div className="sh-one"></div>
                <div className="sh-two"></div>
                <div className="sh-three"></div>
                <img src="/img/Dr. Hardik.png" alt="Dr. John Doe" />
              </div>
            </div>
          </div>
          <div
            className="im"
            style={{
              display: "flex",
              justifyContent: "end",
              flexDirection: "column",
            }}
          >
            {/* Decorative quote background */}
            <div className="quote-icon">
              <FaQuoteRight />
            </div>
            <h1 className="about-doctor-name">
              <span>Dr.Hardik&nbsp;</span>
              <span className="highlight">Dhamsania</span>
            </h1>
            <p>
              I am Dr. Hardik Dhamsania, an experienced Orthopedic Surgeon with
              an M.B.B.S, M.S, FISS, FIJR Consultant in Orthopedics, and
              specializing in trauma, joint replacement, and sports medicine.
              With over 10 years of experience, I have successfully performed
              more than 3,600 surgeries, including 3,000+ trauma cases, 500+
              arthroplasty procedures, and 100+ arthroscopy surgeries. My
              expertise lies in minimally invasive techniques, ensuring faster
              recovery and better outcomes for my patients. I focus on advanced
              surgical methods for ligament repair and joint preservation. My
              goal is to provide precise and personalized orthopedic care with a
              commitment to excellence. I stay updated with the latest medical
              advancements to offer the best treatment options. My approach
              focuses on patients first, emphasizing compassionate care and
              long-term recovery. I also participate in medical research and
              training programs to enhance orthopedic knowledge. With a strong
              dedication to my field, I strive to help my patients regain
              mobility and lead a pain-free life.
            </p>
          </div>
        </div>

   
          <div className="dental-expireance-container">
            <div className="experience-text">
              <h2>
                Experience in <br /> Orthopedic Surgery!
              </h2>
            </div>

            <div className="icons-box">
              <div className="icon-item">
                <FaUniversity className="icon" />
              </div>
              <div className="icon-item">
                <FaPlaneDeparture className="icon" />
              </div>
              <div className="icon-item">
                <FaUserMd className="icon" />
              </div>
              <div className="icon-item">
                <GiKneeCap className="icon" />
              </div>
            </div>

            <div className="background-image">
              <button className="cta-button">View More About the Doctor</button>
            </div>
          </div>
       
      </section>
    </div>
  );
}

export default About;
