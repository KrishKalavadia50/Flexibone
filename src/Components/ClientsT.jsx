import React, { useRef, useState } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
const testimonials = [
  {
    id: 1,
    videoSrc: "/img/p6.mp4",
    message: "Pain-free and stronger than ever. Huge thanks!",
  },
  {
    id: 2,
    videoSrc: "/img/p1.mp4",
    message: "I feel amazing after my surgery. Thank you, Dr. X!",
  },
  {
    id: 3,
    videoSrc: "/img/p2.mp4",
    message: "Walking without pain is a dream come true!",
  },
  {
    id: 4,
    videoSrc: "/img/p3.mp4",
    message: "Back to sports in no time. Unbelievable results!",
  },
  {
    id: 5,
    videoSrc: "/img/p4.mp4",
    message: "Pain-free and stronger than ever. Huge thanks!",
  },
  {
    id: 6,
    videoSrc: "/img/p5.mp4",
    message: "Pain-free and stronger than ever. Huge thanks!",
  },
  {
    id: 7,
    videoSrc: "/img/p7.mp4",
    message: "Pain-free and stronger than ever. Huge thanks!",
  },
  {
    id: 8,
    videoSrc: "/img/p8.mp4",
    message: "Pain-free and stronger than ever. Huge thanks!",
  },
];

function TestimonialCard({ videoSrc, message }) {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };

  return (
    <div className="testimonial-modern-card">
      {/* Video Section */}
      <div className="video-section">
        <video
          ref={videoRef}
          src={videoSrc}
          autoPlay
          loop
          muted
          className="video-modern"
        />
        <button className="mute-modern" onClick={toggleMute}>
          {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
        </button>
      </div>

      {/* Green SVG Wave */}
      <div className="green-blob-svg">
        <svg
          viewBox="0 0 500 100"
          preserveAspectRatio="none"
          className="green-wave"
        >
          <path
            d="M0,0 C150,100 350,0 500,100 L500,0 L0,0 Z"
            style={{ fill: "#00af89" }}
          />
        </svg>
      </div>

      {/* Message Section */}
      <div className="content-section">
        <p className="message-text">{message}</p>
        <div className="blue-corner-blob" />
      </div>
    </div>
  );
}

export default function ClientsT() {
  return (
    <div className="testimonial-section">
      <h2 className="testimonial-title">
        <span className="green-text">Clients</span>{" "}
        <span className="blue-text">Feedbackes</span>
      </h2>

      <div className="testimonial-grid">
        {testimonials.map((t) => (
          <TestimonialCard
            key={t.id}
            videoSrc={t.videoSrc}
            message={t.message}
          />
        ))}
      </div>
    </div>
  );
}
