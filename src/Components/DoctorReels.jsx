import React, { useRef, useState } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

const reels = [
  {
    id: 1,
    videoSrc: "/img/r1.mp4",
    title: "Exploring the role of Arthroscopy in Knee Joint Health",
  },
  {
    id: 2,
    videoSrc: "/img/r2.mp4",
    title: "What is Osteoporosis?",
  },
  {
    id: 3,
    videoSrc: "/img/r3.mp4",
    title: "Don't let shoulder pain hold you back! Learn how to recover and rebuild strength",
  },
];

function DoctorReelCard({ videoSrc, title }) {
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
    <div className="doctor-card">
      <div className="doctor-video-wrapper">
        <video
          ref={videoRef}
          src={videoSrc}
          autoPlay
          loop
          muted
          className="doctor-video"
        />
        <button className="doctor-mute-btn" onClick={toggleMute}>
          {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
        </button>
      </div>
      <h4 className="doctor-title">{title}</h4>
    </div>
  );
}

export default function DoctorReels() {
  return (
    <div className="doctor-reels-section">
      <h2 className="doctor-section-title">
        <span className="highlight-green">Grab the Knowledge</span> by{" "}
        <span className="highlight-blue">Dr. Hardik Dhamsania</span>
      </h2>

      <div className="doctor-reels-grid">
        {reels.map((reel) => (
          <DoctorReelCard key={reel.id} {...reel} />
        ))}
      </div>
    </div>
  );
}
